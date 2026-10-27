import { LocaleLink as Link } from "@/components/locale-link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { pick } from "@/lib/t"
import { isLang, type Lang } from "@/lib/lang"

const T = {
  fr: {
    kicker: "Les documents publiés",
    h1a: "Lisez le travail",
    h1b: "avant de le commander.",
    lead: "Deux exemples du récit, la phase 1 de chaque moment (L'Architecture Narrative), sans email à laisser. Chacun présente les six pièces, dans l'ordre où elles sont écrites : la plateforme, le diagnostic, la carte, les décisions, les playbooks, le langage. Les maisons sont inventées pour l'exercice : aucun client n'a à servir de vitrine.",
    docs: [
      { name: "SILLAGE", motif: "sillage", sub: "Logiciel de chantier", kind: "LE RÉCIT · six pièces", body: "Un éditeur de logiciel : de la plateforme jusqu'au bloc à coller dans un outil IA, en passant par la carte du champ et les quatre-vingt-dix premiers jours.", href: "/documents/sillage" },
      { name: "VERSO", motif: "verso", sub: "Reliure d'art", kind: "LE RÉCIT · six pièces", body: "Une maison d'un autre métier, la reliure d'art : la phrase actuelle disséquée, quatre mouvements chiffrés, les playbooks vente et tarifaire, le lexique.", href: "/documents/verso" },
    ],
    read: "Lire le document →",
  },
  en: {
    kicker: "The published documents",
    h1a: "Read the work",
    h1b: "before commissioning it.",
    lead: "Two samples of the story, phase 1 of every moment (The Narrative Architecture), with no email to leave. Each presents the six pieces in the order they are written: the platform, the diagnosis, the map, the decisions, the playbooks, the language. The houses are invented for the exercise: no client has to serve as a showcase.",
    docs: [
      { name: "SILLAGE", motif: "sillage", sub: "Construction software", kind: "THE STORY · six pieces", body: "A software publisher: from the platform to the block to paste into an AI tool, by way of the map of the field and the first ninety days.", href: "/documents/sillage" },
      { name: "VERSO", motif: "verso", sub: "Art bindery", kind: "THE STORY · six pieces", body: "A house from another trade, art binding: the current sentence dissected, four costed moves, the sales and pricing playbooks, the lexicon.", href: "/documents/verso" },
    ],
    read: "Read the document →",
  },
}

export default async function DocumentsIndex({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang: raw } = await params
  const lang: Lang = isLang(raw) ? raw : "fr"
  const t = pick(T, lang)

  return (
    <main className="min-h-screen bg-ink text-white">
      <NavBar />

      <section className="section-hero pb-14 pt-36">
        <div className="shell">
          <div className="kicker mb-6">{t.kicker}</div>
          <h1 className="mb-7 font-serif text-[clamp(2rem,5vw,3.6rem)] font-bold leading-[1.08] tracking-[-0.005em] uppercase">
            {t.h1a}
            <br />
            <span className="text-gradient">{t.h1b}</span>
          </h1>
          <p className="lede max-w-[640px]">{t.lead}</p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="shell grid max-w-[900px] gap-6 md:grid-cols-2">
          {t.docs.map((d) => (
            <div key={d.name} className="flex flex-col border border-hair p-7 transition-colors duration-[900ms] ease-[cubic-bezier(.22,.68,0,1.2)] hover:border-brand/35 md:p-9">
              <div className="mx-auto mb-7 w-[140px] max-w-full">
                <DocCover motif={d.motif} name={d.name} />
              </div>

              <div className="mb-2 font-serif text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-[0.05em] text-brand">
                {d.name}
              </div>
              <div className="mb-5 font-sans text-[13px] uppercase tracking-[0.14em] text-chalk-40">{d.sub}</div>
              <div className="mb-5 font-sans text-[12px] uppercase tracking-[0.12em] text-chalk-55">{d.kind}</div>
              <p className="mb-8 font-sans text-[15px] leading-relaxed text-chalk-65">{d.body}</p>
              <Link href={d.href} className="btn-primary mt-auto self-start">
                {t.read}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}

function DocCover({ motif, name }: { motif: string; name: string }) {
  return (
    <div className="relative flex aspect-[3/4] flex-col items-center justify-center overflow-hidden border border-brand/25 bg-[linear-gradient(155deg,#0d0e12_0%,#0a0a0a_65%)] px-4 text-center shadow-[0_24px_54px_rgba(0,0,0,0.5)]">
      <span className="bracket-tl" aria-hidden />
      <span className="bracket-br" aria-hidden />

      <svg viewBox="0 0 140 187" aria-hidden className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.14]">
        {motif === "sillage" ? (
          <>
            {[32, 64, 96, 128, 160].map((y) => (
              <line key={y} x1="0" y1={y} x2="140" y2={y} stroke="#2256ff" strokeWidth="0.5" />
            ))}
            {[28, 56, 84, 112].map((x) => (
              <line key={x} x1={x} y1="0" x2={x} y2="187" stroke="#2256ff" strokeWidth="0.5" />
            ))}
            <circle cx="70" cy="93" r="17" fill="none" stroke="#2256ff" strokeWidth="0.6" />
          </>
        ) : (
          <>
            {[10, 24, 40, 58, 78, 100, 124].map((x, i) => (
              <line key={x} x1={x} y1="8" x2={x} y2="179" stroke="#2256ff" strokeWidth={i % 2 === 0 ? 1.1 : 0.5} />
            ))}
            <line x1="0" y1="18" x2="140" y2="18" stroke="#2256ff" strokeWidth="0.5" />
            <line x1="0" y1="169" x2="140" y2="169" stroke="#2256ff" strokeWidth="0.5" />
          </>
        )}
      </svg>

      <div className="relative font-serif text-[1.15rem] font-bold tracking-[0.06em] text-brand">{name}</div>
      <div aria-hidden className="relative my-2.5 h-px w-6 bg-brand/50" />
      <div className="relative font-sans text-[9px] uppercase tracking-[0.14em] text-chalk-40">
        {motif === "sillage" ? "Architecture" : "Architecture"}
      </div>
    </div>
  )
}
