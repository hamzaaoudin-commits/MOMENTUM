import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"
import { ViewTracker } from "@/components/strawberry/view-tracker"
import { CountUp } from "@/components/strawberry/count-up"

const T = {
  fr: {
    kicker: "Pourquoi ça compte",
    stats: [
      {
        n: "38%",
        title: "de plus payé pour une marque perçue comme réellement différente",
        body: "C'est ce que vaut le fait d'être reconnu plutôt que comparé. Les acheteurs attachés aux marques paient 11% de plus pour une marque ordinaire, 38% pour une marque qu'ils jugent réellement différente. Même ceux qui choisissent au prix paient 14% de plus pour celle-là.",
        source: "Kantar, N. Hollis, 2020 · achats de grande consommation",
      },
      {
        n: "74%",
        title: "des nouvelles pages web contiennent désormais du texte généré par une machine",
        body: "Se fondre dans le bruit n'est plus un risque, c'est le scénario par défaut. Sur 900 000 pages analysées, une sur quatre seulement reste écrite par un humain — et c'est celle-là qu'on remarque.",
        source: "Ahrefs, analyse de 900 000 pages, avril 2025",
      },
    ],
  },
  en: {
    kicker: "Why it matters",
    stats: [
      {
        n: "38%",
        title: "more paid for a brand perceived as genuinely different",
        body: "That is what being recognised rather than compared is worth. Brand-driven buyers pay 11% more for an ordinary brand, and 38% more for one they see as genuinely different. Even price-driven buyers pay 14% more for that one.",
        source: "Kantar, N. Hollis, 2020 · consumer packaged goods",
      },
      {
        n: "74%",
        title: "of newly created web pages now contain text written by a machine",
        body: "Blending into the noise is no longer a risk, it is the default outcome. Across 900,000 pages analysed, only one in four is still written by a human — and that is the one people notice.",
        source: "Ahrefs, 900,000-page analysis, April 2025",
      },
    ],
  },
}

export function ImpactStats({ lang }: { lang: Lang }) {
  const t = pick(T, lang)
  const [a, b] = t.stats

  return (
    <section className="section bg-ink-soft py-16 text-white sm:py-20">
      <ViewTracker name="impact_stats" />
      <div className="shell">
        <div className="kicker mb-7 text-center">{t.kicker}</div>

        <div className="mx-auto grid max-w-[980px] gap-px bg-white/10 sm:grid-cols-2">
          {[a, b].map((s) => (
            <div key={s.n} className="bg-ink px-7 py-8 sm:px-9 sm:py-10">
              <div className="text-gradient font-serif text-[clamp(2.6rem,6vw,4.2rem)] font-bold leading-none tracking-[-0.03em]">
                {s.n}
              </div>
              <p className="mb-4 mt-3 font-serif text-[clamp(1.05rem,2vw,1.35rem)] font-semibold leading-[1.3] text-white">
                {s.title}
              </p>
              <p className="m-0 font-sans text-[14.5px] leading-[1.7] text-chalk-55">{s.body}</p>
              <div className="mt-5 border-t border-hair pt-3.5 font-sans text-[11px] uppercase tracking-[0.16em] text-chalk-40">
                {s.source}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
