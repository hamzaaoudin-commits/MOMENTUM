"use client"

import { useEffect, useRef, useState } from "react"
import { useT } from "@/lib/i18n"
import { CONTACT_ENDPOINT } from "@/lib/config"
import { LIMITS, isValidEmail, sanitize, isBot, rateLimit, honeypotProps } from "@/lib/form-security"

const CONTACT_VALUES = ["contact@momentum.studio", "@strawberry_prods", "Paris, France"]
const CONTACT_ICONS = ["✉", "◈", "◎"]
const CONTACT_HREFS: (string | undefined)[] = [undefined, "https://instagram.com/strawberry_prods", undefined]

const T = {
  en: {
    kicker: "Reach out",
    h2a: "Let's ",
    h2b: "talk.",
    intro: "Tell us about your moment. What it is, its date, what is at stake, and what you want people to remember. We read every message ourselves, and we tell you honestly what can hold by then.",
    lines: "Direct lines",
    labels: ["Email", "Instagram", "Location"],
    note: "Every message is answered within 24 hours.",
    sentTitle: "Message received.",
    sentBody: "I read every one personally. Expect a reply within 24 hours.",
    nameLabel: "Your name",
    goalLabel: "What brings you here",
    goals: ["Prepare a moment (launch, opening, release, fundraise)", "Order the story alone", "Find out if this is for me", "Other"],
    messageLabel: "Your message (optional)",
    messagePlaceholder: "What is your moment, when is it, and what should people remember from it?",
    sending: "Sending...",
    send: "Send Message \u2192",
    answered: "Answered within 24 hours.",
    errRequired: "Please fill in your name.",
    errEmail: "Please enter a valid email address.",
    errThrottle: "You just sent a message. Please wait {s}s before sending another.",
  },
  fr: {
    kicker: "Nous écrire",
    h2a: "Parlons-",
    h2b: "en.",
    intro: "Parlez-nous de votre moment. Ce qu'il est, sa date, son enjeu, et ce que vous voulez qu'on en retienne. Nous lisons chaque message nous-mêmes, et nous vous disons honnêtement ce qui peut tenir d'ici là.",
    lines: "Lignes directes",
    labels: ["Email", "Instagram", "Localisation"],
    note: "Chaque message reçoit une réponse sous 24 heures.",
    sentTitle: "Message reçu.",
    sentBody: "Nous lisons chaque message nous-mêmes. Réponse sous 24 heures.",
    nameLabel: "Votre nom",
    goalLabel: "Ce qui vous amène",
    goals: ["Préparer un moment (lancement, ouverture, sortie, levée de fonds)", "Commander le récit seul", "Savoir si c'est pour moi", "Autre"],
    messageLabel: "Votre message (facultatif)",
    messagePlaceholder: "Quel est votre moment, à quelle date, et que doit-on en retenir ?",
    sending: "Envoi...",
    send: "Envoyer le message \u2192",
    answered: "Réponse sous 24 heures.",
    errRequired: "Merci de renseigner votre nom.",
    errEmail: "Merci de saisir une adresse email valide.",
    errThrottle: "Vous venez d'envoyer un message. Patientez {s}s avant d'en envoyer un autre.",
  },
}

type Status = "idle" | "sending" | "sent" | "error"

function useReveal() {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.05 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

export function ContactSection() {
  const t = useT(T)
  const CONTACT_INFO = t.labels.map((label, i) => ({ label, value: CONTACT_VALUES[i], icon: CONTACT_ICONS[i], href: CONTACT_HREFS[i] }))
  const GOALS = t.goals
  const { ref, visible } = useReveal()
  const [form, setForm] = useState({ name: "", email: "", goal: "", message: "" })
  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState("")
  const [honeypot, setHoneypot] = useState("")
  const startedAt = useRef<number>(Date.now())

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg("")

    if (isBot(honeypot, startedAt.current)) {
      setStatus("sent")
      return
    }

    const name = sanitize(form.name, LIMITS.name)
    const email = sanitize(form.email, LIMITS.email)
    const goal = sanitize(form.goal, LIMITS.goal)
    const message = sanitize(form.message, LIMITS.message)

    if (!name) {
      setStatus("error")
      setErrorMsg(t.errRequired)
      return
    }
    if (!isValidEmail(email)) {
      setStatus("error")
      setErrorMsg(t.errEmail)
      return
    }

    const limit = rateLimit("contact")
    if (!limit.ok) {
      setStatus("error")
      setErrorMsg(t.errThrottle.replace("{s}", String(Math.ceil(limit.waitMs / 1000))))
      return
    }

    setStatus("sending")
    try {
      const controller = new AbortController()
      const timeout = setTimeout(() => controller.abort(), 15_000)
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        credentials: "same-origin",
        signal: controller.signal,
        body: JSON.stringify({
          name,
          email,
          goal,
          message,
          company_website: honeypot,
        }),
      })
      clearTimeout(timeout)
      if (res.ok) {
        setStatus("sent")
      } else {
        let msg = "Something went wrong. Please email us directly at contact@momentum.studio."
        try {
          const data = await res.json()
          if (data?.errors?.[0]?.message) msg = data.errors[0].message
        } catch {}
        setStatus("error")
        setErrorMsg(msg)
      }
    } catch {
      setStatus("error")
      setErrorMsg("Could not connect. Please email us directly at contact@momentum.studio.")
    }
  }

  return (
    <section
      id="contact"
      ref={ref as React.Ref<HTMLElement>}
      className="section relative overflow-hidden bg-ink text-white"
    >
      <div className="glow-center" aria-hidden />

      <div
        className={[
          "relative mx-auto w-full max-w-[1100px] transition-all duration-[900ms] ease-[cubic-bezier(.22,.68,0,1.2)]",
          visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
        ].join(" ")}
      >
        <div className="mb-16 text-center">
          <div className="kicker mb-6">{t.kicker}</div>
          <h2 className="h-section mb-7">
            {t.h2a}
            {t.h2b}
          </h2>
          <p className="lede mx-auto max-w-[600px]">{t.intro}</p>
        </div>

        <div className="grid items-start gap-12 [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]">
          <div>
            <div className="mb-10">
              <div className="mb-6 font-sans text-[11px] uppercase tracking-[0.25em] text-brand">
                {t.lines}
              </div>

              <div className="flex flex-col gap-5">
                {CONTACT_INFO.map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <span
                      aria-hidden
                      className="flex h-8 w-8 shrink-0 items-center justify-center border border-brand text-sm text-brand"
                    >
                      {c.icon}
                    </span>
                    <div>
                      <div className="mb-1 font-sans text-[10px] uppercase tracking-[0.2em] text-white/50">
                        {c.label}
                      </div>
                      <div className="font-sans text-sm text-chalk-90">
                        {c.href ? (
                          <a
                            href={c.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-chalk-90 no-underline transition-colors hover:text-brand"
                          >
                            {c.value}
                          </a>
                        ) : (
                          c.value
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-l-2 border-brand bg-white/[0.02] px-7 py-6">
              <p className="m-0 font-serif text-[1.05rem] leading-snug text-chalk-75">{t.note}</p>
            </div>
          </div>

          <div>
            {status === "sent" ? (
              <div className="border border-brand bg-brand/[0.06] px-9 py-12 text-center" role="status" aria-live="polite">
                <div className="mb-5 text-4xl" aria-hidden>🍓</div>
                <h3 className="mb-4 font-serif text-[1.6rem] font-semibold tracking-[-0.005em] uppercase">
                  {t.sentTitle}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-chalk-75">{t.sentBody}</p>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-6" noValidate>
                <div>
                  <label className="field-label" htmlFor="name">{t.nameLabel}</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={LIMITS.name}
                    autoComplete="name"
                    className="field"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value.slice(0, LIMITS.name) })}
                    disabled={status === "sending"}
                  />
                </div>

                <div>
                  <label className="field-label" htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={LIMITS.email}
                    autoComplete="email"
                    inputMode="email"
                    className="field"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value.slice(0, LIMITS.email) })}
                    disabled={status === "sending"}
                  />
                </div>

                <fieldset className="border-0 p-0">
                  <legend className="field-label">{t.goalLabel}</legend>
                  <div className="flex flex-col gap-2.5">
                    {GOALS.map((g) => {
                      const selected = form.goal === g
                      return (
                        <button
                          key={g}
                          type="button"
                          onClick={() => setForm({ ...form, goal: g })}
                          disabled={status === "sending"}
                          aria-pressed={selected}
                          className={[
                            "px-5 py-3.5 text-left font-sans text-sm tracking-[0.01em] transition-colors",
                            selected
                              ? "border border-brand bg-brand/10 text-white"
                              : "border border-white/10 bg-white/[0.03] text-chalk-75 hover:border-white/25",
                          ].join(" ")}
                        >
                          {selected && <span className="mr-2.5 text-brand" aria-hidden>✦</span>}
                          {g}
                        </button>
                      )
                    })}
                  </div>
                </fieldset>

                <div>
                  <label className="field-label" htmlFor="message">{t.messageLabel}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    maxLength={LIMITS.message}
                    className="field min-h-[120px] resize-y leading-relaxed"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value.slice(0, LIMITS.message) })}
                    disabled={status === "sending"}
                    placeholder={t.messagePlaceholder}
                  />
                </div>

                <input
                  {...honeypotProps}
                  name="company_website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />

                {status === "error" && (
                  <div
                    role="alert"
                    className="border border-brand bg-brand/[0.08] px-4.5 py-3.5 font-sans text-[13px] leading-snug text-chalk-90"
                  >
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={[
                    "mt-2 rounded-full border-none px-8 py-[18px] font-sans text-sm font-semibold tracking-[0.05em] text-white transition-opacity",
                    status === "sending"
                      ? "cursor-not-allowed bg-brand/40"
                      : "cursor-pointer bg-[linear-gradient(135deg,#2256ff,#2e4eff)] shadow-[0_15px_40px_rgba(34,86,255,0.35)] hover:opacity-90",
                  ].join(" ")}
                >
                  {status === "sending" ? t.sending : t.send}
                </button>

                <p className="m-0 text-center font-sans text-[11px] tracking-[0.04em] text-white/35">
                  {t.answered}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
