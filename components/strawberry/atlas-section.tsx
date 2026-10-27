"use client"

import { useEffect, useRef, useState } from "react"
import { track } from "@vercel/analytics"
import { useT } from "@/lib/i18n"
import { CONTACT_ENDPOINT } from "@/lib/config"
import { isValidEmail, sanitize, LIMITS, rateLimit } from "@/lib/form-security"
import { SuccessCheck } from "@/components/strawberry/success-check"

const T = {
  en: {
    free: "Free Resource",
    badge: "FREE RESOURCE",
    h2: "30 Architectures. An Atlas.",
    lead: "128 pages. Thirty narrative situations founders find themselves in, and the moves that resolved them.",
    read: "Read the Atlas \u2192",
    dismiss: "No thanks",
    modalSub: "128 pages. Free. Enter your email and the Atlas opens immediately.",
    opening: "Opening the Atlas\u2026",
    emailPlaceholder: "Your email",
    loading: "Opening\u2026",
    error: "Something went wrong. Try again.",
    nospam: "No spam. One email to receive the Atlas.",
  },
  fr: {
    free: "Ressource gratuite",
    badge: "RESSOURCE GRATUITE",
    h2: "30 Architectures. Un Atlas.",
    lead: "128 pages. Trente situations narratives dans lesquelles se trouvent des fondateurs, et les mouvements qui les ont résolues.",
    read: "Lire l'Atlas \u2192",
    dismiss: "Non merci",
    modalSub: "128 pages. Gratuit. Entrez votre email et l'Atlas s'ouvre immédiatement.",
    opening: "Ouverture de l'Atlas\u2026",
    emailPlaceholder: "Votre email",
    loading: "Ouverture\u2026",
    error: "Une erreur est survenue. Merci de réessayer.",
    nospam: "Pas de spam. Un seul email pour recevoir l'Atlas.",
  },
}

function AtlasModal({ onClose }: { onClose: () => void }) {
  const t = useT(T)
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const clean = sanitize(email, LIMITS.email)
    if (!isValidEmail(clean)) {
      setStatus("error")
      return
    }
    const limit = rateLimit("atlas")
    if (!limit.ok) {
      setStatus("error")
      return
    }

    setStatus("loading")
    try {
      const controller = new AbortController()
      const timeout = setTimeout(() => controller.abort(), 15_000)
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        credentials: "same-origin",
        signal: controller.signal,
        body: JSON.stringify({ email: clean, source: "atlas_download_home" }),
      })
      clearTimeout(timeout)
      if (res.ok) {
        setStatus("done")
        track("atlas_email_captured", { from: "home" })
        setTimeout(() => {
          window.location.href = "/atlas/30-architectures-atlas.pdf"
          onClose()
        }, 1200)
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={t.free}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/85 p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[480px] border border-brand/25 bg-ink-soft p-8 md:p-12"
      >
        <span className="bracket-tl" aria-hidden />
        <span className="bracket-br" aria-hidden />

        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-4 border-none bg-transparent text-[22px] leading-none text-chalk-40 hover:text-white"
        >
          ×
        </button>

        <div className="mb-6 flex items-center gap-5">
          <div className="relative flex aspect-[3/4] w-[68px] shrink-0 flex-col items-center justify-center overflow-hidden border border-brand/25 bg-[linear-gradient(155deg,#0d0e12_0%,#0a0a0a_65%)] shadow-[0_14px_30px_rgba(0,0,0,0.5)]">
            <svg viewBox="0 0 68 90" aria-hidden className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.16]">
              <circle cx="34" cy="45" r="24" fill="none" stroke="#2256ff" strokeWidth="0.6" />
              <circle cx="34" cy="45" r="15" fill="none" stroke="#2256ff" strokeWidth="0.5" />
            </svg>
            <div className="relative font-serif text-[1.5rem] font-bold leading-none text-brand">30</div>
          </div>
          <div className="eyebrow text-brand">{t.free}</div>
        </div>

        <h2 className="mb-3 font-serif text-[clamp(1.5rem,3vw,2rem)] font-bold leading-tight tracking-[-0.005em] text-white uppercase">
          {t.h2}
        </h2>

        <p className="mb-7 font-sans text-sm leading-relaxed text-white/55">{t.modalSub}</p>

        {status === "done" ? (
          <div role="status" aria-live="polite" className="py-4 text-center">
            <SuccessCheck />
            <p className="m-0 font-serif text-base text-brand">{t.opening}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3" noValidate>
            <input
              type="email"
              name="email"
              maxLength={LIMITS.email}
              autoComplete="email"
              inputMode="email"
              required
              placeholder={t.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value.slice(0, LIMITS.email))}
              className="field rounded-lg"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="cursor-pointer rounded-full border-none bg-[linear-gradient(135deg,#2256ff,#2e4eff)] px-7 py-3.5 font-sans text-sm font-bold tracking-[0.06em] text-white shadow-[0_8px_30px_rgba(34,86,255,0.35)] disabled:opacity-60"
            >
              {status === "loading" ? t.loading : t.read}
            </button>
            {status === "error" && (
              <p role="alert" className="m-0 text-center text-[13px] text-brand">{t.error}</p>
            )}
            <p className="m-0 text-center font-sans text-[11px] text-white/25">{t.nospam}</p>
          </form>
        )}
      </div>
    </div>
  )
}

export function AtlasSection() {
  const t = useT(T)
  const [showModal, setShowModal] = useState(false)
  const [revealed, setRevealed] = useState(false)
  const [dismissing, setDismissing] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) {
      setRevealed(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  function dismiss() {
    setDismissing(true)
    setTimeout(() => setDismissed(true), 350)
  }

  if (dismissed) return null

  return (
    <section ref={ref} className="relative overflow-hidden border-t border-white/[0.06] bg-ink-soft px-gutter py-20">
      {showModal && <AtlasModal onClose={() => setShowModal(false)} />}

      <div
        aria-hidden
        className={`pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-[110px] transition-opacity duration-[900ms] ${
          revealed ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`relative mx-auto max-w-[620px] transition-all ease-out ${
          dismissing
            ? "translate-y-2 scale-[0.97] opacity-0 duration-300"
            : revealed
              ? "translate-y-0 scale-100 opacity-100 duration-[900ms]"
              : "translate-y-6 scale-[0.96] opacity-0 duration-0"
        }`}
        style={{ transitionTimingFunction: revealed && !dismissing ? "cubic-bezier(.22,.68,0,1.2)" : undefined }}
      >
        <div className="relative border border-brand/30 bg-[#0a0b0d] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.55),0_0_0_1px_rgba(34,86,255,0.06)] md:p-10">
          <span className="bracket-tl" aria-hidden />
          <span className="bracket-br" aria-hidden />

          <button
            type="button"
            onClick={dismiss}
            aria-label={t.dismiss}
            className="absolute right-4 top-4 flex h-8 w-8 cursor-pointer items-center justify-center border-none bg-white/[0.04] text-lg leading-none text-chalk-40 transition-colors hover:bg-white/10 hover:text-white"
          >
            ×
          </button>

          <div className="flex items-start gap-5 md:gap-7">
            <div className="hidden shrink-0 select-none font-serif text-[3.4rem] font-bold leading-none text-brand/90 sm:block">
              30
            </div>

            <div className="min-w-0">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1.5">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand" />
                <span className="font-sans text-[11px] font-semibold tracking-[0.1em] text-brand">{t.badge}</span>
              </div>

              <h2 className="m-0 mb-3 font-serif text-[clamp(1.4rem,2.8vw,1.9rem)] font-bold leading-tight tracking-[-0.005em] text-white uppercase">
                {t.h2}
              </h2>

              <p className="m-0 mb-7 max-w-[460px] font-sans text-[14.5px] leading-relaxed text-white/55">{t.lead}</p>

              <div className="flex flex-wrap items-center gap-5">
                <button
                  type="button"
                  onClick={() => {
                    track("atlas_click", { from: "home" })
                    setShowModal(true)
                  }}
                  className="inline-flex cursor-pointer items-center gap-2.5 rounded-full border-none bg-[linear-gradient(135deg,#2256ff,#2e4eff)] px-7 py-3 font-sans text-sm font-bold tracking-[0.04em] text-white shadow-[0_8px_32px_rgba(34,86,255,0.35)]"
                >
                  {t.read}
                </button>
                <button
                  type="button"
                  onClick={dismiss}
                  className="cursor-pointer border-none bg-transparent font-sans text-[13px] text-chalk-40 underline-offset-2 hover:text-white hover:underline"
                >
                  {t.dismiss}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
