import { LocaleLink as Link } from "@/components/locale-link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { SAMPLE_DOC } from "@/lib/sample-sillage"
import { DocumentReader } from "@/components/strawberry/document-reader"
import { SillageBeforeAfter } from "@/components/strawberry/sillage-before-after"
import { isLang, type Lang } from "@/lib/lang"
import { STRIPE_LINKS } from "@/lib/config"
import { BackHomeButton } from "@/components/strawberry/back-home-button"
import { DocStraw } from "@/components/strawberry/doc-straw"
import { SIX } from "@/lib/doc-six"

export default async function SampleDocumentPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang: raw } = await params
  const lang: Lang = isLang(raw) ? raw : "fr"
  const d = SAMPLE_DOC[lang] ?? SAMPLE_DOC.fr
  const six = SIX[lang] ?? SIX.fr

  return (
    <main className="min-h-screen overflow-hidden bg-ink font-sans text-white">
      <NavBar />
      <BackHomeButton />

      <section className="section-hero pb-14 pt-40">
        <div className="glow-top" aria-hidden />
        <div className="shell-sm relative">
          <div className="pill mb-8">{d.eyebrow}</div>

          <div className="mb-3 font-sans text-[11px] uppercase tracking-[0.3em] text-chalk-55">{d.title}</div>

          <h1 className="mb-5 font-serif text-[clamp(3rem,12vw,7rem)] font-bold leading-[0.95] tracking-[-0.005em] uppercase">
            <span className="text-gradient">{d.house}</span>
          </h1>

          <div className="font-sans text-[13px] uppercase tracking-[0.15em] text-chalk-40">{d.edition}</div>
        </div>
      </section>

      <section className="px-gutter pb-16">
        <div className="relative mx-auto max-w-[820px] border border-brand-hair bg-[linear-gradient(180deg,rgba(34,86,255,0.06)_0%,rgba(10,10,10,0.6)_100%)] p-8 md:p-12">
          <span className="bracket-tl" aria-hidden />
          <span className="bracket-br" aria-hidden />

          <h2 className="mb-4 font-serif text-[clamp(1.35rem,2.6vw,1.95rem)] font-bold tracking-[-0.005em] uppercase">
            {d.partialTitle}
          </h2>

          <p className="mb-7 font-sans text-[15.5px] leading-relaxed text-chalk-75">{d.partialBody}</p>

          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            {d.partialPoints.map((pt) => (
              <li key={pt} className="flex items-start gap-3.5 font-sans text-[14.5px] leading-relaxed text-chalk-65">
                <span aria-hidden className="mt-0.5 shrink-0 text-brand">+</span>
                {pt}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-gutter pb-16">
        <div className="mx-auto max-w-[820px]">
          <div className="kicker mb-6">{d.dossierTitle}</div>
          <dl className="m-0 flex flex-col">
            {d.dossierRows.map(([k, v]) => (
              <div key={k} className="flex flex-col gap-1.5 border-t border-white/[0.08] py-5 md:flex-row md:gap-8">
                <dt className="shrink-0 font-sans text-[11px] uppercase tracking-[0.18em] text-chalk-40 md:w-[180px]">
                  {k}
                </dt>
                <dd className="m-0 font-sans text-[15px] leading-relaxed text-chalk-75">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="px-gutter pb-16">
        <DocStraw kicker={six.strawKicker} title={six.strawTitle} note={six.strawNote} steps={six.straw} />
      </section>

      <section className="px-gutter pb-16">
        <SillageBeforeAfter lang={lang} />
      </section>

      <div className="border-t border-white/[0.08]">
        <DocumentReader
          parts={d.parts}
          labels={{
            toc: d.contentsTitle,
            prev: d.readerPrev,
            next: d.readerNext,
            pageOfTemplate: d.readerPageOfTemplate,
            ofCount: d.readerOfCount,
          }}
        />
      </div>

      <section className="px-gutter py-12">
        <p className="mx-auto max-w-[720px] border-t border-white/[0.08] pt-8 text-center font-sans text-[13px] leading-relaxed text-chalk-40">
          {d.disclaimer}
        </p>
      </section>

      <section className="section pb-28 text-center">
        <div className="mx-auto max-w-[720px]">
          <h2 className="mb-5 font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-[-0.005em] uppercase">
            {d.ctaTitle}
          </h2>
          <p className="lede mx-auto mb-9 max-w-[620px]">{d.ctaBody}</p>

          <div className="flex flex-wrap justify-center gap-3.5">
            <a href={STRIPE_LINKS.architecture} className="btn-primary" rel="noopener">{d.ctaPrimary}</a>
            <Link href="/documents/verso" className="btn-ghost">{d.ctaSecondary}</Link>
          </div>

          <p className="mt-6 font-sans text-[13px] text-chalk-40">{d.ctaFoot}</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
