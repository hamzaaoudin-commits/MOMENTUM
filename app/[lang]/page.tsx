import { Suspense } from "react"
import { notFound } from "next/navigation"
import { Reveal } from "@/components/reveal"
import { TeteSection } from "@/components/section"
import { Trajectoires } from "@/components/trajectoires"
import { Ascension } from "@/components/ascension"
import { Arc } from "@/components/arc"
import { OffreUnique, Garantie, Places } from "@/components/offre-unique"
import { GrilleOffres, Comparatif } from "@/components/offres"
import { Depliant } from "@/components/depliant"
import { Diagnostic } from "@/components/diagnostic"
import { Rature } from "@/components/rature"
import { Faq } from "@/components/faq"
import { Formulaire } from "@/components/formulaire"
import { CONTACT, CAPACITE } from "@/lib/config"
import { isLang, type Lang } from "@/lib/i18n"
import { getCopy } from "@/lib/copy"

/* ===========================================================================
   PAGE UNIQUE, DEUX LANGUES
   ===========================================================================
   Aucune chaîne n'est écrite ici : tout vient de lib/copy-fr.ts et
   lib/copy-en.ts. Le jour où une phrase change, elle change dans les deux
   langues au même endroit, ou le build échoue.

   UN LECTEUR   Un artiste indépendant de 22 à 30 ans, qui sort depuis deux ou
                trois ans, fait tout lui-même, a déjà payé de la promo qui n'a
                rien donné.

   UNE IDÉE     Vos sorties ne s'additionnent pas parce qu'elles ne se racontent
                pas. Un arc les relie ; sans arc, chaque titre repart de zéro.

   UNE OFFRE    ARTIST DEVELOPMENT — seule visible par défaut. Les deux autres
                niveaux sont sur la page, repliés derrière un clic.

   UNE ACTION   Candidater. Tous les boutons mènent au même formulaire, en bas.

   SÉQUENCE     problème → fausse solution → vraie cause → diagnostic →
                mécanisme → cycle → bénéfices → preuve → offre → risque →
                objections → tri → questions → action.
   =========================================================================== */

export default async function Accueil({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: brut } = await params
  if (!isLang(brut)) notFound()
  const lang: Lang = brut
  const t = getCopy(lang)

  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
      <section
        data-section
        data-label="MOMENTUM"
        className="relative flex min-h-[92vh] items-center overflow-hidden pt-[68px]"
      >
        <div className="pointer-events-none absolute inset-0">
          <Ascension className="h-full w-full" />
        </div>
        {/* Le texte s'écrit à gauche, la montée explose à droite : ce voile
            assombrit le tiers gauche pour garantir le contraste du titre sans
            rien retirer au graphique là où il compte. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #08090b 0%, rgba(8,9,11,0.92) 34%, rgba(8,9,11,0.55) 62%, rgba(8,9,11,0.15) 100%)",
          }}
        />

        <div className="px-marge cadre relative z-10 py-20">
          <Reveal>
            <p className="index">{t.hero.kicker}</p>
          </Reveal>

          <Reveal delay={110}>
            <h1 className="titre-1 mt-8 max-w-[16ch] text-balance">
              {t.hero.titre1}
              <br />
              {t.hero.titre2a}
              <em className="not-italic text-cobalt-vif">{t.hero.titre2b}</em>.
            </h1>
          </Reveal>

          <Reveal delay={220}>
            <p className="chapo mt-9 max-w-[54ch]">
              {t.hero.chapo1}
              <span className="text-craie">{t.hero.chapoFort}</span>
              {t.hero.chapo2}
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-11">
              <a href="#candidature" className="bouton bouton-plein">
                {t.hero.cta}
              </a>
            </div>
          </Reveal>

          <Reveal delay={420}>
            <div className="mt-10">
              <Places t={t} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ 01 · LA SCÈNE ═══════════════ */}
      <section className="bloc border-t border-filet" data-section data-label="LA SCÈNE">
        <div className="cadre-md">
          <TeteSection index="01" etiquette={t.scene.etiquette} titre={t.scene.titre} />
          <Reveal>
            <div className="space-y-6">
              <p className="corps text-[16.5px]">{t.scene.p1}</p>
              <p className="corps text-[16.5px]">{t.scene.p2}</p>
              <p className="verdict mt-10">{t.scene.verdict}</p>
              <p className="corps mt-10 text-[16.5px]">{t.scene.p3}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ 02 · FAUSSE SOLUTION ═══════════════ */}
      <section
        className="bloc-serre border-t border-filet bg-encre-haute"
        data-section
        data-label="CE QUE VOUS AVEZ DÉJÀ ESSAYÉ"
      >
        <div className="cadre">
          <TeteSection index="02" etiquette={t.ratures.etiquette} titre={t.ratures.titre} chapo={t.ratures.chapo} />
          <div className="border-t border-filet">
            {t.ratures.lignes.map((f, i) => (
              <Rature key={f.essai} index={i} essai={f.essai} effet={f.effet} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── SILENCE ───
          Cette phrase portait le basculement de tout l'argument et se trouvait
          noyée en fin de section. Elle mérite un écran à elle seule. */}
      <section className="silence border-t border-filet">
        <div className="cadre">
          <Reveal>
            <p className="phrase max-w-[22ch] text-balance">{t.silence1.a}</p>
            <p className="phrase mt-6 max-w-[26ch] text-balance text-cobalt-vif">{t.silence1.b}</p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ 03 · LA VRAIE CAUSE ═══════════════ */}
      <section className="bloc border-t border-filet" data-section data-label="LA VRAIE CAUSE">
        <div className="cadre">
          <TeteSection
            index="03"
            etiquette={t.cause.etiquette}
            titre={
              <>
                {t.cause.titre1}
                <br className="hidden md:block" /> {t.cause.titre2a}
                <em className="not-italic text-cobalt-vif">{t.cause.titre2b}</em>
                {t.cause.titre2c}
              </>
            }
          />
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div className="space-y-6">
                <p className="corps text-[16px]">{t.cause.p1}</p>
                <p className="corps text-[16px]">{t.cause.p2}</p>
                <p className="verdict mt-9">{t.cause.verdict}</p>
              </div>
              <figure className="carte p-4! md:p-8!">
                <Arc t={t} className="h-auto w-full" />
                <figcaption className="etiquette mt-6 border-t border-filet pt-5 leading-relaxed">
                  {t.cause.legende}
                </figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ 04 · LE DIAGNOSTIC ═══════════════ */}
      <section
        id="diagnostic"
        data-section
        data-label="LE DIAGNOSTIC"
        className="ancre bloc-ample border-t border-filet bg-encre-haute"
      >
        <div className="cadre-md">
          <TeteSection
            index="04"
            etiquette={t.diagnostic.etiquette}
            titre={t.diagnostic.titre}
            chapo={t.diagnostic.chapo}
          />
          <Reveal>
            <Diagnostic lang={lang} t={t} />
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ 05 · LE MÉCANISME ═══════════════ */}
      <section id="methode" className="ancre bloc border-t border-filet" data-section data-label="LE MÉCANISME">
        <div className="cadre">
          <TeteSection
            index="05"
            etiquette={t.mecanisme.etiquette}
            titre={
              <>
                {t.mecanisme.titre1}
                <br className="hidden md:block" /> {t.mecanisme.titre2a}
                <em className="not-italic text-cobalt-vif">{t.mecanisme.titre2b}</em>.
              </>
            }
          />
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <Reveal>
              <div className="space-y-6">
                <p className="corps text-[16px]">{t.mecanisme.p1}</p>
                <p className="corps text-[16px]">{t.mecanisme.p2}</p>
                <p className="corps text-[16px]">{t.mecanisme.p3}</p>
                <p className="mt-9 border-l-3 border-craie pl-6 font-mono text-[13.5px] leading-relaxed text-craie-80">
                  {t.mecanisme.proposition}
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <figure className="carte p-4! md:p-7!">
                <Trajectoires t={t} variante="demo" className="h-auto w-full" />
                <figcaption className="etiquette mt-5 border-t border-filet pt-5 leading-relaxed">
                  {t.mecanisme.legende}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ 06 · LE CYCLE ═══════════════ */}
      <section className="bloc border-t border-filet bg-encre-haute" data-section data-label="LE CYCLE MENSUEL">
        <div className="cadre-md">
          <TeteSection index="06" etiquette={t.cycle.etiquette} titre={t.cycle.titre} chapo={t.cycle.chapo} />
          {t.cycle.temps.map((x, i) => (
            <Reveal key={x.n} delay={i * 60}>
              <article className="grid gap-6 border-t border-filet py-10 md:grid-cols-[110px_1fr] md:gap-10 md:py-12">
                <div>
                  <p className="font-mono text-[11px] tracking-[0.2em] text-cobalt-vif">{x.n}</p>
                  <p className="etiquette mt-3 leading-relaxed">{x.quand}</p>
                </div>
                <div>
                  <h3 className="font-mono text-[13px] uppercase tracking-[0.22em] text-craie">{x.nom}</h3>
                  <p className="corps mt-4 text-[15.5px]">{x.texte}</p>
                  <p className="mt-5 border-l-3 border-cobalt-vif pl-5 text-[1.02rem] font-semibold leading-snug text-craie-80">
                    {x.sortie}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══════════════ 07 · CE QUE VOUS OBTENEZ ═══════════════ */}
      <section className="bloc border-t border-filet" data-section data-label="CE QUE VOUS OBTENEZ">
        <div className="cadre">
          <TeteSection index="07" etiquette={t.obtenez.etiquette} titre={t.obtenez.titre} chapo={t.obtenez.chapo} />
          <div className="grid gap-5 md:grid-cols-2">
            {t.obtenez.cartes.map((a, i) => (
              <Reveal key={a.n} delay={i * 90} className="h-full">
                <article className="carte flex h-full flex-col">
                  <span className="index">{a.n}</span>
                  <h3 className="titre-3 mt-4">{a.titre}</h3>
                  <p className="corps mt-4">{a.texte}</p>
                  <p className="mt-auto pt-6 text-[0.98rem] font-semibold leading-snug text-cobalt-vif">{a.gain}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ 08 · PREUVE ═══════════════ */}
      <section id="qui" className="ancre bloc border-t border-filet bg-encre-haute" data-section data-label="QUI TE PARLE">
        <div className="cadre">
          <TeteSection index="08" etiquette={t.preuve.etiquette} titre={t.preuve.titre} chapo={t.preuve.chapo} />
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <div className="space-y-5">
                <p className="corps text-[15.5px]">{t.preuve.p1}</p>
                <p className="corps text-[15.5px]">{t.preuve.p2}</p>
                <p className="corps text-[15.5px]">{t.preuve.p3}</p>
                <div className="mt-9 border-t border-filet">
                  {t.preuve.reperes.map((r) => (
                    <div key={r.annee} className="grid gap-2 border-b border-filet py-4 md:grid-cols-[92px_1fr] md:gap-6">
                      <p className="font-mono text-[12px] tracking-[0.16em] text-cobalt-vif">{r.annee}</p>
                      <p className="text-[14px] leading-relaxed text-craie-65">{r.texte}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="carte h-full">
                <p className="etiquette">{t.preuve.pasMontrerTitre}</p>
                <p className="corps mt-4 text-[14.5px]">{t.preuve.pasMontrer}</p>
                <p className="etiquette mt-9">{t.preuve.montrerTitre}</p>
                <p className="corps mt-4 text-[14.5px]">{t.preuve.montrer}</p>
                <p className="verdict mt-9" style={{ fontSize: "1.15rem" }}>
                  {t.preuve.verdict}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── SILENCE ───
          Posé juste avant le prix : le lecteur traverse une phrase nue avant de
          voir un chiffre. */}
      <section className="silence border-t border-filet">
        <div className="cadre">
          <Reveal>
            <p className="phrase max-w-[24ch] text-balance">{t.silence2.a}</p>
            <p className="phrase mt-6 max-w-[24ch] text-balance text-cobalt-vif">{t.silence2.b}</p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ 09 · L'OFFRE ═══════════════ */}
      <section id="offres" className="ancre bloc-ample border-t border-filet" data-section data-label="L'OFFRE">
        <div className="cadre">
          <TeteSection index="09" etiquette={t.offre.etiquette} titre={t.offre.titre} chapo={t.offre.chapo} />
          <OffreUnique t={t} />
          <Reveal delay={150}>
            <div className="mt-5">
              <Garantie t={t} />
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-5">
              <Depliant libelle={t.offre.deplier} libelleOuvert={t.offre.replier}>
                <GrilleOffres lang={lang} t={t} />
                <div className="mt-10">
                  <Comparatif t={t} />
                </div>
              </Depliant>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ 10 · OBJECTIONS ═══════════════ */}
      <section className="bloc border-t border-filet bg-encre-haute" data-section data-label="LES OBJECTIONS">
        <div className="cadre-md">
          <TeteSection index="10" etiquette={t.objections.etiquette} titre={t.objections.titre} />
          <div className="space-y-11">
            {t.objections.items.map((o, i) => (
              <Reveal key={o.q} delay={i * 80}>
                <div>
                  <p className="text-[1.3rem] font-bold leading-snug text-craie md:text-[1.5rem]">{o.q}</p>
                  <p className="corps mt-4 max-w-2xl">{o.r}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ 11 · POUR QUI ═══════════════ */}
      <section className="bloc border-t border-filet" data-section data-label="POUR QUI">
        <div className="cadre">
          <TeteSection index="11" etiquette={t.pourQui.etiquette} titre={t.pourQui.titre} />
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <Reveal>
              <p className="index mb-7">{t.pourQui.ouiLabel}</p>
              <ul className="space-y-5">
                {t.pourQui.oui.map((x) => (
                  <li key={x} className="flex gap-4 text-[15px] leading-relaxed text-craie-80">
                    <span aria-hidden className="mt-[11px] h-px w-3.5 shrink-0 bg-cobalt-vif" />
                    {x}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <p className="etiquette mb-7">{t.pourQui.nonLabel}</p>
              <ul className="space-y-5">
                {t.pourQui.non.map((x) => (
                  <li key={x} className="flex gap-4 text-[15px] leading-relaxed text-craie-38">
                    <span aria-hidden className="mt-[11px] h-px w-3.5 shrink-0 bg-craie-24" />
                    {x}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="corps mt-14 max-w-2xl">{t.pourQui.note}</p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ 12 · FAQ ═══════════════ */}
      <section className="bloc border-t border-filet bg-encre-haute" data-section data-label="QUESTIONS FRÉQUENTES">
        <div className="cadre-md">
          <TeteSection index="12" etiquette={t.faq.etiquette} titre={t.faq.titre} />
          <Reveal>
            <Faq items={t.faq.items.map((x) => ({ q: x.q, r: x.r }))} />
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ 13 · L'ACTION ═══════════════ */}
      <section
        id="candidature"
        data-section
        data-label="CANDIDATURE"
        className="ancre bloc-ample border-t border-filet"
      >
        <div className="cadre grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="index">{t.candidature.index}</p>
              <h2 className="titre-2 mt-6 text-balance">{t.candidature.titre}</h2>
              <p className="corps mt-7 max-w-md">{t.candidature.p1}</p>
              <p className="corps mt-5 max-w-md">
                {t.candidature.p2a}
                {CAPACITE}
                {t.candidature.p2b}
              </p>
              <div className="mt-8">
                <Places t={t} />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-12 border-t border-filet">
                {t.candidature.etapes.map(([n, titre, texte]) => (
                  <div key={n} className="grid grid-cols-[42px_1fr] gap-4 border-b border-filet py-6">
                    <span className="font-mono text-[11px] tracking-[0.18em] text-cobalt-vif">{n}</span>
                    <div>
                      <p className="text-[14.5px] font-semibold text-craie">{titre}</p>
                      <p className="corps mt-1.5 text-[13.5px]">{texte}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={200}>
              <p className="etiquette mt-10 leading-relaxed">
                {t.candidature.question}
                <br />
                <a href={`mailto:${CONTACT.email}`} className="text-craie transition-colors hover:text-cobalt-vif">
                  {CONTACT.email}
                </a>
              </p>
            </Reveal>
          </div>

          <Reveal delay={90}>
            <div className="relative">
              <Suspense fallback={<p className="etiquette">{t.formulaire.chargement}</p>}>
                <Formulaire t={t} />
              </Suspense>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ CLÔTURE ═══════════════ */}
      <section className="bloc border-t border-filet bg-encre-haute">
        <div className="cadre-md text-center">
          <Reveal>
            <h2 className="titre-2 text-balance">{t.cloture.titre}</h2>
            <p className="chapo mx-auto mt-7 max-w-xl text-balance">{t.cloture.chapo}</p>
            <div className="mt-10 flex justify-center">
              <a href="#candidature" className="bouton bouton-plein">
                {t.cloture.cta}
              </a>
            </div>
            <p className="etiquette mt-8">{t.cloture.sous}</p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
