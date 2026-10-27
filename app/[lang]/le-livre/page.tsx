import { LocaleLink as Link } from "@/components/locale-link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { BackHomeButton } from "@/components/strawberry/back-home-button"
import { pick } from "@/lib/t"
import { isLang, type Lang } from "@/lib/lang"

import { BOOK_URL, STRIPE_LINKS } from "@/lib/config"

const BUY_URL = BOOK_URL

const T = {
  fr: {
    kicker: "Le livre",
    title: "La Doctrine la plus claire",
    sub: "L'architecture narrative à l'âge de la machine",
    author: "Hamza El Jaouahiry",
    meta: ["158 pages", "Français et anglais", "MOMENTUM · Paris"],
    epigraph:
      "Sur un marché où tout le monde a accès à la même machine, le meilleur produit ne gagne plus. C'est la doctrine la plus claire qui gagne.",
    whyH: "Pourquoi ce livre existe",
    whyP1:
      "Un studio qui vend une position doit pouvoir défendre la sienne. Ce livre est la doctrine de MOMENTUM, écrite une fois pour toutes plutôt que réinventée à chaque commande — ce qui permet à un client de vérifier, avant de commander, sur quoi le travail repose.",
    whyP2:
      "Il expose pourquoi la machine a rendu tout le monde identique, ce dont hérite l'école française de précision narrative, et la méthode en cinq étapes par laquelle une maison s'excave au lieu de s'inventer. Sa dernière partie applique cette méthode de bout en bout, sur trois maisons.",
    partsH: "Ce qu'il contient",
    parts: [
      { n: "I", t: "La Doctrine", d: "Pourquoi la perception précède le produit, et pourquoi l'abondance de contenu a rendu la qualité insuffisante." },
      { n: "II", t: "La Méthode", d: "Les cinq étapes de S.T.R.A.W., en entier : Soul, Territory, Reframe, Architecture, Weaponize." },
      { n: "III", t: "Les Instruments", d: "Ce qu'il faut refuser, et comment. La rareté délibérée comme outil de positionnement." },
      { n: "IV", t: "La Démonstration", d: "Trois maisons traitées de bout en bout, déclarées comme des exemples d'enseignement." },
      { n: "V", t: "Les Objections", d: "Ce qu'on oppose à une doctrine, et ce qui tient." },
      { n: "VI", t: "La Tenue", d: "Ce qui reste quand personne ne regarde plus." },
    ],
    forH: "Pour qui",
    forList: [
      "Un fondateur qui ne parvient pas à dire en une phrase ce qui le distingue.",
      "Un dirigeant dont l'entreprise a dépassé le récit qu'elle raconte encore.",
      "Un consultant ou un directeur marketing qui veut la méthode plutôt que la prestation.",
    ],
    close: "La machine a rendu tout le monde identique. Commencez sous terre.",
    buyH: "Se procurer le livre",
    buyP: "Disponible en français et en anglais.",
    buyCta: "Acheter le livre →",
    bridgeH: "Le livre pose la doctrine. Le récit la rend vôtre.",
    bridgeP:
      "Lire la méthode et se l'appliquer sont deux choses différentes : le seul récit qu'on ne peut structurellement pas lire, c'est le sien. Surtout à l'approche d'un moment qui compte.",
    bridgeCta: "Commander le récit · 2 900 € →",
    demoCta: "Lire un exemple →",
  },
  en: {
    kicker: "The book",
    title: "The Clearest Doctrine",
    sub: "Narrative architecture in the age of the machine",
    author: "Hamza El Jaouahiry",
    meta: ["158 pages", "French and English", "MOMENTUM · Paris"],
    epigraph:
      "In a market where everyone has access to the same machine, the best product no longer wins. The clearest doctrine does.",
    whyH: "Why this book exists",
    whyP1:
      "A studio that sells a position has to be able to defend its own. This book is the doctrine of MOMENTUM, written once rather than reinvented commission by commission — which lets a client check what the work rests on before ordering it.",
    whyP2:
      "It sets out why the machine made everyone identical, what the French school of narrative precision inherits, and the five-stage method by which a house is excavated rather than invented. Its final part applies that method end to end, on three houses.",
    partsH: "What it contains",
    parts: [
      { n: "I", t: "The Doctrine", d: "Why perception precedes the product, and why abundant content made quality insufficient." },
      { n: "II", t: "The Method", d: "The five stages of S.T.R.A.W. in full: Soul, Territory, Reframe, Architecture, Weaponize." },
      { n: "III", t: "The Instruments", d: "What to refuse, and how. Deliberate scarcity as a positioning tool." },
      { n: "IV", t: "The Demonstration", d: "Three houses treated end to end, declared as teaching examples." },
      { n: "V", t: "The Objections", d: "What gets raised against a doctrine, and what holds." },
      { n: "VI", t: "The Holding", d: "What remains once nobody is watching." },
    ],
    forH: "Who it is for",
    forList: [
      "A founder who cannot say in one sentence what sets them apart.",
      "A leader whose company has outgrown the story it still tells.",
      "A consultant or marketing director who wants the method rather than the service.",
    ],
    close: "The machine made everyone identical. Start underground.",
    buyH: "Getting the book",
    buyP: "Available in French and in English.",
    buyCta: "Buy the book →",
    bridgeH: "The book states the doctrine. The story makes it yours.",
    bridgeP:
      "Reading a method and applying it to yourself are two different things: the one story you structurally cannot read is your own. Especially as a moment that counts approaches.",
    bridgeCta: "Order the story · €2,900 →",
    demoCta: "Read a sample →",
  },
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang: raw } = await params
  const lang: Lang = isLang(raw) ? raw : "fr"
  const t = pick(T, lang)

  return (
    <main className="min-h-screen overflow-hidden bg-ink font-sans text-white">
      <NavBar />
      <BackHomeButton />

      <section className="section-hero relative overflow-hidden pb-20 pt-36">
        <div className="glow-top" aria-hidden />
        <div className="shell-lg relative">
          <div className="grid items-center gap-12 md:grid-cols-[300px_minmax(0,1fr)] md:gap-16">
            <div className="mx-auto w-full max-w-[280px]">
              <div className="relative flex aspect-[2/3] flex-col justify-between border border-hair-strong bg-[linear-gradient(160deg,#101010_0%,#0a0a0a_60%)] px-7 py-9 shadow-[0_40px_90px_rgba(0,0,0,0.6)]">
                <span className="bracket-tl" aria-hidden />
                <span className="bracket-br" aria-hidden />
                <div className="text-center font-sans text-[8px] uppercase tracking-[0.3em] text-chalk-40">
                  MOMENTUM · Paris
                </div>
                <div className="text-center">
                  <div className="mb-4 text-brand" aria-hidden>
                    &#10070;
                  </div>
                  <h2 className="mb-3 font-serif text-[clamp(1.3rem,2.6vw,1.75rem)] font-bold uppercase leading-[1.1] tracking-[0.02em]">
                    {t.title}
                  </h2>
                  <p className="m-0 font-serif text-[12px] leading-snug text-chalk-55">{t.sub}</p>
                </div>
                <div className="text-center font-sans text-[8px] uppercase tracking-[0.25em] text-chalk-55">
                  {t.author}
                </div>
              </div>
            </div>

            <div>
              <div className="kicker mb-6">{t.kicker}</div>
              <h1 className="mb-5 font-serif text-[clamp(2.1rem,5vw,3.8rem)] font-bold leading-[1.08] tracking-[-0.005em] uppercase">
                {t.title}
              </h1>
              <p className="mb-8 font-serif text-[clamp(1.05rem,2vw,1.4rem)] text-chalk-75">{t.sub}</p>

              <div className="mb-9 flex flex-wrap gap-2">
                {t.meta.map((m) => (
                  <span key={m} className="tag border-white/20 text-chalk-55">
                    {m}
                  </span>
                ))}
              </div>

              <blockquote className="border-l-2 border-brand py-1 pl-6">
                <p className="m-0 font-serif text-[clamp(1.1rem,2.2vw,1.55rem)] leading-snug text-chalk-90">
                  {t.epigraph}
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-ink-soft">
        <div className="shell">
          <h2 className="mb-7 font-serif text-[clamp(1.6rem,3.4vw,2.4rem)] font-bold leading-tight uppercase">{t.whyH}</h2>
          <p className="drop-cap mb-5 max-w-[720px] font-sans text-base leading-[1.85] text-chalk-65">{t.whyP1}</p>
          <p className="max-w-[720px] font-sans text-base leading-[1.85] text-chalk-65">{t.whyP2}</p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <h2 className="mb-9 font-serif text-[clamp(1.6rem,3.4vw,2.4rem)] font-bold leading-tight uppercase">{t.partsH}</h2>
          <div className="grid gap-px border border-white/[0.09] bg-white/[0.09] sm:grid-cols-2">
            {t.parts.map((p) => (
              <div key={p.n} className="bg-ink px-6 py-7">
                <div className="mb-2.5 font-serif text-xl font-bold text-brand">{p.n}</div>
                <h3 className="mb-2 font-serif text-[1.15rem] font-bold text-white uppercase">{p.t}</h3>
                <p className="m-0 font-sans text-[14px] leading-relaxed text-chalk-65">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ink-soft">
        <div className="shell">
          <h2 className="mb-8 font-serif text-[clamp(1.6rem,3.4vw,2.4rem)] font-bold leading-tight uppercase">{t.forH}</h2>
          <ul className="mb-12 list-none border-t border-hair p-0">
            {t.forList.map((l, i) => (
              <li
                key={l}
                className="flex items-baseline gap-4 border-b border-white/[0.06] py-4 font-sans text-[15.5px] leading-relaxed text-chalk-75"
              >
                <span className="font-serif text-[13px] text-brand">{String(i + 1).padStart(2, "0")}</span>
                {l}
              </li>
            ))}
          </ul>
          <p className="font-serif text-[clamp(1.15rem,2.4vw,1.6rem)] text-chalk-90">{t.close}</p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="card-featured p-8 md:p-12">
            <span className="bracket-tl" aria-hidden />
            <span className="bracket-br" aria-hidden />
            <h2 className="mb-4 font-serif text-[clamp(1.5rem,3vw,2.1rem)] font-bold leading-tight uppercase">{t.buyH}</h2>
            <p className="mb-7 max-w-[560px] body-sm">{t.buyP}</p>
            <Link href={BUY_URL} className="btn-primary">
              {t.buyCta}
            </Link>
          </div>

          <div className="mt-6 border border-hair p-8 md:p-12">
            <h2 className="mb-4 font-serif text-[clamp(1.4rem,2.8vw,2rem)] font-bold leading-tight uppercase">{t.bridgeH}</h2>
            <p className="mb-7 max-w-[620px] body-sm">{t.bridgeP}</p>
            <div className="flex flex-wrap gap-4">
              <a href={STRIPE_LINKS.architecture} target="_blank" rel="noopener" className="btn-primary">
                {t.bridgeCta}
              </a>
              <Link href="/documents/sillage" className="btn-ghost">
                {t.demoCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
