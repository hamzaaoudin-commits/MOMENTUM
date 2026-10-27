import { LocaleLink as Link } from "@/components/locale-link"
import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"

const T = {
  en: {
    kicker: "The Book",
    title: "The Clearest Doctrine",
    sub: "Narrative Architecture in the Age of the Machine",
    author: "Hamza El Jaouahiry · 158 pages · MOMENTUM, Paris",
    epigraph:
      "In a market where everyone has access to the same machine, the best product no longer wins. The clearest doctrine does.",
    body: "This studio does not improvise its doctrine commission by commission. It is written down, argued across 158 pages — including the five-stage method, demonstrated end to end on three houses.",
    cta: "Read about the book →",
    parts: [
      { t: "The Doctrine", d: "Why perception precedes the product" },
      { t: "The Method", d: "The five stages, in full" },
      { t: "The Instruments", d: "What to refuse, and how" },
      { t: "The Demonstration", d: "Three houses, end to end" },
      { t: "The Objections", d: "What gets raised against a doctrine, and what holds" },
      { t: "The Holding", d: "What remains once nobody is watching" },
    ],
  },
  fr: {
    kicker: "Le Livre",
    title: "La Doctrine la plus claire",
    sub: "L'architecture narrative à l'âge de la machine",
    author: "Hamza El Jaouahiry · 158 pages · MOMENTUM, Paris",
    epigraph:
      "Sur un marché où tout le monde a accès à la même machine, le meilleur produit ne gagne plus. C'est la doctrine la plus claire qui gagne.",
    body: "Ce studio n'improvise pas sa doctrine commande après commande. Elle est écrite, argumentée sur 158 pages — méthode en cinq étapes comprise, démontrée de bout en bout sur trois maisons.",
    cta: "En savoir plus sur le livre →",
    parts: [
      { t: "La Doctrine", d: "Pourquoi la perception précède le produit" },
      { t: "La Méthode", d: "Les cinq étapes, en entier" },
      { t: "Les Instruments", d: "Ce qu'il faut refuser, et comment" },
      { t: "La Démonstration", d: "Trois maisons, de bout en bout" },
      { t: "Les Objections", d: "Ce qu'on oppose à une doctrine, et ce qui tient" },
      { t: "La Tenue", d: "Ce qui reste quand personne ne regarde plus" },
    ],
  },
}

export function BookSection({ lang }: { lang: Lang }) {
  const t = pick(T, lang)

  return (
    <section className="section bg-ink text-white">
      <div className="shell-lg">
        <div className="grid items-center gap-10 md:gap-16 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
          <div className="mx-auto w-full max-w-[300px]">
            <div className="relative flex aspect-[2/3] flex-col justify-between border border-hair-strong bg-[linear-gradient(160deg,#101010_0%,#0a0a0a_60%)] px-7 py-9 shadow-[0_40px_90px_rgba(0,0,0,0.6)]">
              <span className="bracket-tl" aria-hidden />
              <span className="bracket-br" aria-hidden />

              <div className="text-center font-sans text-[8px] uppercase tracking-[0.3em] text-chalk-40">
                MOMENTUM · Paris
              </div>

              <div className="text-center">
                <div className="mb-4 text-brand" aria-hidden>❖</div>
                <h3 className="mb-3 font-serif text-[clamp(1.3rem,2.6vw,1.75rem)] font-bold uppercase leading-[1.1] tracking-[0.02em]">
                  {t.title}
                </h3>
                <p className="m-0 font-serif text-[12px] leading-snug text-chalk-55">{t.sub}</p>
              </div>

              <div className="text-center font-sans text-[8px] uppercase tracking-[0.25em] text-chalk-55">
                Hamza El Jaouahiry
              </div>
            </div>
          </div>

          <div>
            <div className="kicker mb-6">{t.kicker}</div>

            <blockquote className="mb-7 border-l-2 border-brand py-1 pl-6">
              <p className="m-0 font-serif text-[clamp(1.1rem,2vw,1.4rem)] leading-snug text-chalk-90">
                {t.epigraph}
              </p>
            </blockquote>

            <p className="mb-6 font-sans text-[16px] leading-[1.8] text-chalk-65">{t.body}</p>

            <div className="mb-7 grid grid-cols-2 gap-px border border-white/[0.07] bg-white/[0.07] sm:grid-cols-3">
              {t.parts.map((p, i) => (
                <div key={p.t} className="bg-ink px-4 py-4">
                  <div className="mb-1.5 font-serif text-[15px] font-bold text-brand">
                    {["I", "II", "III", "IV", "V", "VI"][i]}
                  </div>
                  <div className="mb-1 font-serif text-[13.5px] leading-tight text-white">{p.t}</div>
                  <div className="font-sans text-[10.5px] leading-snug text-chalk-40">{p.d}</div>
                </div>
              ))}
            </div>

            <div className="mb-6 border-t border-white/10 pt-5 font-sans text-[13px] text-chalk-40">
              {t.author}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/le-livre" className="btn-primary">
                {t.cta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
