"use client"

import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"
import { LocaleLink as Link } from "@/components/locale-link"
import { ViewTracker } from "@/components/strawberry/view-tracker"
import { useScrollReveal } from "@/hooks/use-strawberry"

const T = {
  fr: {
    kicker: "Phase 2 · La mise en scène",
    h2a: "Le récit écrit,",
    h2b: "nous le mettons en scène.",
    lead: "Le récit dit ce que votre moment affirme. La mise en scène décide comment le public le découvre : dans quel ordre, avec quels mots, à quel rythme. Comme la sortie d'un film, ou un album qu'on attend.",
    steps: [
      { k: "J-60 à J-40", t: "Le récit", d: "La phase 1 : les six pièces, livrées au plus tard 21 jours après votre questionnaire complet." },
      { k: "J-40 à J-30", t: "Le concept", d: "L'idée centrale, la phrase qui la porte, ce qu'on montre et ce qu'on garde pour le jour J." },
      { k: "J-30 à J-1", t: "La séquence de révélation", d: "Ce qui sort, quand, et sur quel support. Chaque texte écrit et prêt à publier : teasing, annonces, page de lancement, email, mots du fondateur ou de l'artiste." },
      { k: "Jour J", t: "Le moment", d: "L'annonce, le dossier de presse, et notre présence le jour même pour ajuster ce qui doit l'être." },
      { k: "J+1 à J+30", t: "L'après", d: "La suite du récit, pour que rien ne retombe le lendemain, puis un bilan écrit de ce qui a porté." },
    ],
    scope: "Nous écrivons et nous mettons en scène. La diffusion (publication, relations presse, publicité) reste chez vous ou chez vos prestataires, avec nos textes en main.",
    cardName: "Le moment complet",
    cardFrom: "À partir de",
    cardPrice: "6 000 €",
    cardDesc: "Le récit compris. Sur devis, selon l'ampleur du moment.",
    cta: "Parlez-nous de votre moment →",
    second: "Voir l'offre en détail",
  },
  en: {
    kicker: "Phase 2 · The staging",
    h2a: "Once the story is written,",
    h2b: "we stage it.",
    lead: "The story says what your moment stands for. The staging decides how the audience discovers it: in what order, with which words, at what pace. Like a film release, or an album people wait for.",
    steps: [
      { k: "D-60 to D-40", t: "The story", d: "Phase 1: the six pieces, delivered no later than 21 days after your completed questionnaire." },
      { k: "D-40 to D-30", t: "The concept", d: "The central idea, the sentence that carries it, what we show and what we keep for the day." },
      { k: "D-30 to D-1", t: "The reveal sequence", d: "What goes out, when, and on which channel. Every text written and ready to publish: teasers, announcements, launch page, email, the founder's or artist's words." },
      { k: "The day", t: "The moment", d: "The announcement, the press kit, and our presence on the day to adjust what needs adjusting." },
      { k: "D+1 to D+30", t: "The after", d: "The rest of the story, so nothing falls flat the next day, then a written review of what carried." },
    ],
    scope: "We write and we stage. Distribution (publishing, press relations, advertising) stays with you or your providers, with our texts in hand.",
    cardName: "The full moment",
    cardFrom: "From",
    cardPrice: "€6,000",
    cardDesc: "Story included. On quote, depending on the scale of the moment.",
    cta: "Tell us about your moment →",
    second: "See the offer in detail",
  },
}

export function StagingSection({ lang }: { lang: Lang }) {
  const t = pick(T, lang)
  const [ref, vis] = useScrollReveal()

  return (
    <section className="section relative overflow-hidden border-t border-hair bg-ink text-white">
      <ViewTracker name="staging" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(34,86,255,0.10),transparent_60%)]"
      />
      <div className="shell relative">
        <div className="mx-auto mb-14 max-w-[760px] text-center">
          <div className="kicker mb-5">{t.kicker}</div>
          <h2 className="h-section">
            {t.h2a} <span className="text-gradient">{t.h2b}</span>
          </h2>
          <p className="lede mx-auto mt-6 max-w-[640px]">{t.lead}</p>
        </div>

        <div ref={ref} className="mx-auto grid max-w-[1080px] gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-center">
          <ol className="m-0 list-none p-0">
            {t.steps.map((s, i) => (
              <li
                key={s.k}
                className="grid grid-cols-[7.5rem_1fr] gap-4 border-t border-white/10 py-5 transition-all duration-700 ease-[cubic-bezier(.22,.68,0,1)] last:border-b sm:grid-cols-[9rem_1fr]"
                style={{
                  opacity: vis ? 1 : 0,
                  transform: vis ? "translateY(0)" : "translateY(12px)",
                  transitionDelay: `${i * 110}ms`,
                }}
              >
                <span className="pt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-brand">{s.k}</span>
                <div>
                  <div className="mb-1 font-serif text-[clamp(1.05rem,1.8vw,1.25rem)] font-bold text-white">{s.t}</div>
                  <p className="m-0 font-sans text-[15px] leading-[1.65] text-white/60">{s.d}</p>
                </div>
              </li>
            ))}
            <p className="mt-6 font-sans text-[14px] leading-[1.7] text-chalk-55">{t.scope}</p>
          </ol>

          <div className="rounded-2xl border border-brand/40 bg-ink-soft p-8 shadow-[0_0_80px_-30px_rgba(34,86,255,0.45)]">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand">{t.cardName}</div>
            <div className="mt-5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-chalk-40">{t.cardFrom}</div>
            <div className="mt-1 font-serif text-[clamp(2.6rem,6vw,3.6rem)] font-bold leading-none text-white">{t.cardPrice}</div>
            <p className="mb-7 mt-4 font-sans text-[15px] leading-[1.6] text-white/60">{t.cardDesc}</p>
            <div className="flex flex-col items-start gap-4">
              <a href="#contact" className="btn-primary">
                {t.cta}
              </a>
              <Link href="/offre" className="btn-quiet no-underline">
                {t.second}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
