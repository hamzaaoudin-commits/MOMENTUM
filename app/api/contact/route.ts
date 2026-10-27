import { NextResponse, type NextRequest } from "next/server"
import { LIMITS, isValidEmail, sanitize } from "@/lib/form-security"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const FORMSPREE_ID = process.env.FORMSPREE_ID ?? process.env.NEXT_PUBLIC_FORMSPREE_ID ?? ""

const MAX_PER_WINDOW = 3
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

  const str = (v: unknown) => (typeof v === "string" ? v : "")

  if (str(body.company_website).trim().length > 0) {
    return NextResponse.json({ ok: true })
  }

  const name = sanitize(str(body.name), LIMITS.name)
  const email = sanitize(str(body.email), LIMITS.email)
  const goal = sanitize(str(body.goal), LIMITS.goal)
  const message = sanitize(str(body.message), LIMITS.message)
  const source = sanitize(str(body.source), 60)

  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 422 })
  }
  const isCapture = source.length > 0 && !name && !message
  if (!isCapture && (!name || !message)) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 422 })
  }

  if (!FORMSPREE_ID) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 500 })
  }

  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 15_000)

    const upstream = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      signal: controller.signal,
      body: JSON.stringify({
        name,
        email,
        goal,
        message,
        source,
        _subject: isCapture
          ? `Email capture — ${source}`
          : `New contact from ${name} — ${goal || "no goal selected"}`,
      }),
    })
    clearTimeout(timeout)

    if (!upstream.ok) {
      return NextResponse.json({ ok: false, error: "upstream" }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, error: "network" }, { status: 502 })
  }
}

export async function GET() {
  return NextResponse.json({ ok: false }, { status: 405 })
}
