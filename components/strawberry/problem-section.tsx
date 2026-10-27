"use client"

import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"
import { ViewTracker } from "@/components/strawberry/view-tracker"
import { ArchitectureDiagram } from "@/components/strawberry/architecture-diagram"
import { useScrollReveal } from "@/hooks/use-strawberry"

const T = {
  en: {
    kicker: "THE PROBLEM",
    h2: "Your moment is coming. Your audience does not yet know why it should remember it.",
    p1: "When a launch has no story, it gets judged as one more piece of news — feature against feature, date against date.",
    p1List: ["Nothing to wait for.", "Nothing to understand.", "Nothing to tell a friend the next day."],
    p3: "Without a story written before the day, every piece of communication improvises. The announcement, the posts, the page, the press release — each tells a different version, and the moment passes without anything stacking up.",
    diagramWithout: "Without a story",
    diagramWithoutSub: "Every piece of communication improvises.",
    diagramWith: "With a staged story",
    diagramWithSub: "Every piece of communication prepares the next.",
  },
  fr: {
    kicker: "LE PROBLÈME",
    h2: "Votre moment arrive. Le public ne sait pas encore pourquoi il devrait s'en souvenir.",
    p1: "Quand un lancement n'a pas d'histoire, on le juge comme une nouveauté de plus — caractéristique contre caractéristique, date contre date.",
    p1List: ["Rien à attendre.", "Rien à comprendre.", "Rien à raconter à un ami le lendemain."],
    p3: "Sans récit écrit avant le jour J, chaque prise de parole improvise. L'annonce, les publications, la page, le communiqué — chacun raconte une version différente, et le moment passe sans que rien ne s'empile.",
    diagramWithout: "Sans récit",
    diagramWithoutSub: "Chaque prise de parole improvise.",
    diagramWith: "Avec un récit mis en scène",
    diagramWithSub: "Chaque prise de parole prépare la suivante.",
  },
}

export function ProblemSection({ lang }: { lang: Lang }) {
  const t = pick(T, lang)
  const [listRef, listVisible] = useScrollReveal()

  return (
    <section className="section overflow-hidden bg-ink-soft">
      <ViewTracker name="problem" />
      <div className="shell">
        <div className="mx-auto max-w-[760px]">
          <div className="mb-5 font-sans text-[11px] font-semibold tracking-[0.14em]">
            <span className="surligne">{t.kicker}</span>
          </div>
          <h2 className="mb-7 font-serif text-[clamp(1.8rem,3.6vw,3.1rem)] font-bold leading-[1.14] tracking-[-0.005em] text-white uppercase">
            {t.h2}
          </h2>
          <p className="mb-5 font-sans text-[16.5px] leading-[1.75] text-white/60">{t.p1}</p>

          <div ref={listRef}>
            <ul className="mb-8 list-none space-y-3 p-0">
              {t.p1List.map((item, i) => (
                <li
                  key={item}
                  className="flex items-baseline gap-3 font-serif text-[clamp(1.1rem,2vw,1.45rem)] leading-snug text-white/85 transition-all duration-700 ease-[cubic-bezier(.22,.68,0,1)]"
                  style={{
                    opacity: listVisible ? 1 : 0,
                    transform: listVisible ? "translateX(0)" : "translateX(-12px)",
                    transitionDelay: `${i * 160}ms`,
                  }}
                >
                  <span aria-hidden className="text-[0.7em] text-brand">
                    ✦
                  </span>
                  <span className="surligne">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mb-8 font-sans text-[16.5px] leading-[1.75] text-white/60">{t.p3}</p>

          <ArchitectureDiagram
            labelWithout={t.diagramWithout}
            subWithout={t.diagramWithoutSub}
            labelWith={t.diagramWith}
            subWith={t.diagramWithSub}
          />
        </div>
      </div>
    </section>
  )
}
