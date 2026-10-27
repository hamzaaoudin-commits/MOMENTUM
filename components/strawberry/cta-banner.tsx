"use client"

import { LocaleLink as Link } from "@/components/locale-link"
import { useScrollReveal } from "@/hooks/use-strawberry"
import { useT } from "@/lib/i18n"

const T = {
  en: {
    h2: "Tell us your date. We will tell you what can hold.",
    cta1: "Tell us about your moment",
    note: "Reply within 24 hours · The story alone: €2,900, day 21 or refunded · The full moment: from €6,000, on quote",
  },
  fr: {
    h2: "Dites-nous votre date. Nous vous dirons ce qui peut tenir.",
    cta1: "Parlez-nous de votre moment",
    note: "Réponse sous 24 heures · Le récit seul : 2 900 €, jour 21 ou remboursé · Le moment complet : à partir de 6 000 €, sur devis",
  },
}

export function CTABanner() {
  const t = useT(T)
  const [ref, vis] = useScrollReveal()

  return (
    <section className="relative overflow-hidden bg-ink px-gutter py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(34,86,255,0.16),transparent_65%)]"
      />

      <div ref={ref} className="shell relative">
        <div
          className={[
            "relative overflow-hidden rounded-2xl border border-hair bg-ink-soft px-8 py-20 text-center md:px-20",
            "shadow-[0_0_90px_-20px_rgba(34,86,255,0.35)]",
            "transition-all duration-[900ms] ease-[cubic-bezier(.22,.68,0,1.2)]",
            vis ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
          ].join(" ")}
        >

          <h2 className="relative mb-10 font-serif text-[clamp(2rem,4.6vw,3.4rem)] font-bold leading-[1.1] tracking-[-0.005em] text-white uppercase">
            {t.h2}
          </h2>

          <div className="relative flex flex-col items-center">
            <a
              href="#contact"
              className="btn-primary max-w-full px-12 py-[20px] text-[16px]"
            >
              {t.cta1}
            </a>
            <p className="mt-5 font-sans text-[13px] text-chalk-40">{t.note}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
