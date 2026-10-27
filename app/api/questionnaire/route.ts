import { NextResponse, type NextRequest } from "next/server"
import { LIMITS, isValidEmail, sanitize, isBot } from "@/lib/form-security"
import { stepsForOffer, isOfferKey, isTerrainKey, type OfferKey, type Question } from "@/lib/questionnaire-data"
import { DEFAULT_LANG, isLang } from "@/lib/lang"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const FORMSPREE_ID =
  process.env.FORMSPREE_QUESTIONNAIRE_ID ?? process.env.FORMSPREE_ID ?? process.env.NEXT_PUBLIC_FORMSPREE_ID ?? ""

const MAKE_WEBHOOK_URL = process.env.MAKE_WEBHOOK_URL ?? ""

const MAKE_CONFIRM_WEBHOOK_URL = process.env.MAKE_CONFIRM_WEBHOOK_URL ?? ""

const MAX_PER_WINDOW = 2
const WINDOW_MS = 10 * 60 * 1000
const hits = new Map<string, number[]>()

function tooMany(ip: string): boolean {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  if (hits.size > 5000) hits.clear()
  return recent.length > MAX_PER_WINDOW
}

function clientIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for")
  return (fwd ? fwd.split(",")[0] : req.headers.get("x-real-ip")) ?? "unknown"
}

const str = (v: unknown) => (typeof v === "string" ? v : "")
const num = (v: unknown) => (typeof v === "number" ? v : 0)

function formatAnswer(step: Question, answers: Record<string, unknown>): string {
  const label = step.label

  if (step.type === "identity") {
    const identity = (answers.identity ?? {}) as Record<string, unknown>
    return `${label}\n${sanitize(str(identity.name), LIMITS.name)} — ${sanitize(str(identity.house), LIMITS.name)}`
  }
  if (step.type === "shorttext") {
    return `${label}\n${sanitize(str(answers[step.id]), LIMITS.short)}`
  }
  if (step.type === "textarea") {
    const main = sanitize(str(answers[step.id]), LIMITS.narrative)
    const deep = sanitize(str(answers[`${step.id}_deep`]), LIMITS.narrative)
    return `${label}\n${main || "—"}${deep ? `\n\n(Plus loin) ${deep}` : ""}`
  }
  if (step.type === "competitors") {
    const rows = Array.isArray(answers.competitors) ? (answers.competitors as Record<string, unknown>[]) : []
    const lines = rows
      .map((r) => `${sanitize(str(r.name), LIMITS.short)} : "${sanitize(str(r.line), LIMITS.short)}"`)
      .filter((l) => l.trim() !== ' : ""')
    return `${label}\n${lines.join("\n") || "—"}`
  }
  if (step.type === "links") {
    const l = (answers.links ?? {}) as Record<string, unknown>
    const extras = (Array.isArray(l.extra) ? l.extra : [])
      .slice(0, 10)
      .map((u) => sanitize(str(u), LIMITS.short))
      .filter(Boolean)
      .map((u, i) => `Lien ${i + 1} : ${u}`)
    return [
      label,
      `Site : ${sanitize(str(l.site), LIMITS.short) || "—"}`,
      `LinkedIn : ${sanitize(str(l.linkedin), LIMITS.short) || "—"}`,
      `Contenu : ${sanitize(str(l.content), LIMITS.short) || "—"}`,
      ...extras,
    ].join("\n")
  }
  if (step.type === "choice") {
    const v = answers[step.id]
    const value = step.multi ? (Array.isArray(v) ? v.map((x) => sanitize(str(x), 60)).join(", ") : "") : sanitize(str(v), 120)
    return `${label}\n${value || "—"}`
  }
  if (step.type === "sliders") {
    const tone = (answers.tone ?? {}) as Record<string, unknown>
    const lines = (step.axes ?? []).map((ax) => `${ax.l}/${ax.r} : ${num(tone[ax.id]) || 50}`)
    return `${label}\n${lines.join("\n")}`
  }
  if (step.type === "wordbank") {
    const wb = (answers.wordbank ?? {}) as Record<string, unknown>
    const mine = Array.isArray(wb.mine) ? wb.mine.map((w) => sanitize(str(w), 40)).join(", ") : ""
    const notmine = Array.isArray(wb.notmine) ? wb.notmine.map((w) => sanitize(str(w), 40)).join(", ") : ""
    return `${label}\nMes mots : ${mine || "—"}\nJamais : ${notmine || "—"}`
  }
  return `${label}\n—`
}

function buildResponses(steps: Question[], answers: Record<string, unknown>): Record<string, string | number> {
  const out: Record<string, string | number> = {}
  const canonical = (id: string) => id.replace(/_(produits|lieux|artistes)$/, "")

  for (const step of steps) {
    const key = canonical(step.id)
    if (step.type === "textarea") {
      out[key] = ""
      if (step.deep) out[`${key}_deep`] = ""
    } else if (step.type === "shorttext" || step.type === "choice") {
      out[key] = ""
    } else if (step.type === "competitors") {
      for (let i = 1; i <= 5; i++) {
        out[`competitor_${i}_name`] = ""
        out[`competitor_${i}_line`] = ""
      }
    } else if (step.type === "links") {
      out.link_site = ""
      out.link_linkedin = ""
      out.link_content = ""
      for (let i = 1; i <= 10; i++) out[`link_extra_${i}`] = ""
      out.link_extra_count = 0
    } else if (step.type === "sliders") {
      for (const ax of step.axes ?? []) out[`tone_${ax.id}`] = 50
    } else if (step.type === "wordbank") {
      out.words_mine = ""
      out.words_never = ""
    }
  }

  for (const step of steps) {
    const key = canonical(step.id)
    if (step.type === "identity") continue
    if (step.type === "textarea") {
      const main = sanitize(str(answers[step.id]), LIMITS.narrative)
      if (main) out[key] = main
      const deep = sanitize(str(answers[`${step.id}_deep`]), LIMITS.narrative)
      if (deep) out[`${key}_deep`] = deep
      continue
    }
    if (step.type === "shorttext") {
      const v = sanitize(str(answers[step.id]), LIMITS.short)
      if (v) out[key] = v
      continue
    }
    if (step.type === "choice") {
      const v = answers[step.id]
      const value = step.multi
        ? Array.isArray(v) ? v.map((x) => sanitize(str(x), 60)).join(" | ") : ""
        : sanitize(str(v), 120)
      if (value) out[key] = value
      continue
    }
    if (step.type === "competitors") {
      const rows = Array.isArray(answers.competitors) ? (answers.competitors as Record<string, unknown>[]) : []
      rows.forEach((r, i) => {
        const name = sanitize(str(r.name), LIMITS.short)
        const line = sanitize(str(r.line), LIMITS.short)
        if (name || line) {
          out[`competitor_${i + 1}_name`] = name
          out[`competitor_${i + 1}_line`] = line
        }
      })
      continue
    }
    if (step.type === "links") {
      const l = (answers.links ?? {}) as Record<string, unknown>
      const site = sanitize(str(l.site), LIMITS.short)
      const linkedin = sanitize(str(l.linkedin), LIMITS.short)
      const content = sanitize(str(l.content), LIMITS.short)
      if (site) out.link_site = site
      if (linkedin) out.link_linkedin = linkedin
      if (content) out.link_content = content
      const extras = (Array.isArray(l.extra) ? l.extra : [])
        .slice(0, 10)
        .map((u) => sanitize(str(u), LIMITS.short))
        .filter(Boolean)
      extras.forEach((u, i) => {
        out[`link_extra_${i + 1}`] = u
      })
      if (extras.length) out.link_extra_count = extras.length
      continue
    }
    if (step.type === "sliders") {
      const tone = (answers.tone ?? {}) as Record<string, unknown>
      for (const ax of step.axes ?? []) out[`tone_${ax.id}`] = num(tone[ax.id]) || 50
      continue
    }
    if (step.type === "wordbank") {
      const wb = (answers.wordbank ?? {}) as Record<string, unknown>
      const mine = Array.isArray(wb.mine) ? wb.mine.map((w) => sanitize(str(w), 40)).join(" | ") : ""
      const notmine = Array.isArray(wb.notmine) ? wb.notmine.map((w) => sanitize(str(w), 40)).join(" | ") : ""
      if (mine) out.words_mine = mine
      if (notmine) out.words_never = notmine
    }
  }
  return out
}

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin")
  const host = req.headers.get("host")
  if (origin && host && !origin.endsWith(host)) {
    return NextResponse.json({ ok: false }, { status: 403 })
  }

  if (tooMany(clientIp(req))) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 })
  }

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 })
  }

  const startedAt = typeof body.startedAt === "number" ? body.startedAt : 0
  if (isBot(str(body.company_website), startedAt)) {
    return NextResponse.json({ ok: true })
  }

  const langRaw = str(body.lang)
  const lang = isLang(langRaw) ? langRaw : DEFAULT_LANG

  const offerRaw = str(body.offer)
  if (!isOfferKey(offerRaw)) {
    return NextResponse.json({ ok: false, error: "invalid_offer" }, { status: 422 })
  }
  const offer = offerRaw as OfferKey

  const terrainRaw = str(body.terrain)
  const TERRAIN_LABEL: Record<string, string> = {
    marques: "Lancement de marque",
    produits: "Lancement de produit",
    lieux: "Ouverture de lieu",
    artistes: "Sortie / première",
  }
  const terrainLabel = TERRAIN_LABEL[terrainRaw] ?? "Moment non précisé"

  const answers = (body.answers ?? {}) as Record<string, unknown>
  const identity = (answers.identity ?? {}) as Record<string, unknown>
  const name = sanitize(str(identity.name), LIMITS.name)
  const house = sanitize(str(identity.house), LIMITS.name)
  const email = sanitize(str(identity.email), LIMITS.email)

  if (!name || !house || !isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 422 })
  }

  if (!FORMSPREE_ID && !MAKE_WEBHOOK_URL) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 500 })
  }

  const steps = stepsForOffer(offer, DEFAULT_LANG, isTerrainKey(terrainRaw) ? terrainRaw : undefined)
  const formatted = steps.map((step) => formatAnswer(step, answers)).join("\n\n")

  const momentDate = sanitize(str(answers.moment_date), LIMITS.short)
  const stageInterest = sanitize(str(answers.moment_stage), LIMITS.short)

  const prefix = house.toUpperCase().replace(/[^A-Z]/g, "").slice(0, 3).padEnd(3, "X")
  const submissionId = `${prefix}-${Date.now().toString(36).toUpperCase()}`

  const send = async (url: string, payload: unknown) => {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 15_000)
    try {
      const r = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        signal: controller.signal,
        body: JSON.stringify(payload),
      })
      return r.ok
    } catch {
      return false
    } finally {
      clearTimeout(timeout)
    }
  }

  const [makeOk, mailOk] = await Promise.all([
    MAKE_WEBHOOK_URL
      ? send(MAKE_WEBHOOK_URL, {
          event: "onboarding_completed",
          submission_id: submissionId,
          submitted_at: new Date().toISOString(),
          offer,
          terrain: terrainRaw || "non_precise",
          terrain_label: terrainLabel,
          moment_date: momentDate,
          mise_en_scene: stageInterest,
          lang,
          client: { name, house, email },
          responses: buildResponses(steps, answers),
          answers_text: formatted,
        })
      : Promise.resolve(false),
    FORMSPREE_ID
      ? send(`https://formspree.io/f/${FORMSPREE_ID}`, {
          name,
          email,
          house,
          offer,
          lang,
          submission_id: submissionId,
          answers: formatted,
          _subject: `${terrainLabel}${momentDate ? ` · J = ${momentDate}` : ""} · L'Architecture Narrative — ${house} (${name}) · ${submissionId}`,
        })
      : Promise.resolve(false),
  ])

  if (!makeOk && !mailOk) {
    return NextResponse.json({ ok: false, error: "upstream" }, { status: 502 })
  }

  if (MAKE_CONFIRM_WEBHOOK_URL) {
    await Promise.race([
      send(MAKE_CONFIRM_WEBHOOK_URL, {
        event: "onboarding_confirmation",
        submission_id: submissionId,
        submitted_at: new Date().toISOString(),
        lang,
        terrain_label: terrainLabel,
        client: { name, house, email },
      }),
      new Promise((resolve) => setTimeout(resolve, 4000)),
    ])
  }
  return NextResponse.json({ ok: true, submission_id: submissionId })
}

export async function GET() {
  return NextResponse.json({ ok: false }, { status: 405 })
}
