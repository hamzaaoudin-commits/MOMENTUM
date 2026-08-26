import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"
import { TeteSection } from "@/components/section"
import { Trajectoires } from "@/components/trajectoires"
import { BandeCta } from "@/components/bande-cta"

export const metadata: Metadata = {
  title: "La méthode",
  description:
    "L'ARC : on ne travaille plus une sortie à la fois, mais une suite de sorties qui héritent les unes des autres. Et chaque mois, un cycle en quatre temps pour construire un maillon de plus.",
}

const TEMPS = [
  {
    n: "01",
    nom: "DIAGNOSTIC",
    quand: "Le premier mois, puis tous les trimestres",
    texte:
      "On met ton projet à plat. Ta musique d'abord — écoutée en entier, plusieurs fois, sans complaisance. Puis ton identité : ce que ton univers promet, et ce qu'il tient réellement. Puis ton audience réelle, pas ton nombre d'abonnés. Puis tes objectifs, formulés jusqu'à ce qu'ils deviennent vérifiables. Et enfin tes blocages, y compris ceux que tu n'oses pas nommer.",
    sortie: "Un document écrit : où en est ton projet, et ce qui le retient.",
  },
  {
    n: "02",
    nom: "CAP",
    quand: "Chaque début de mois",
    texte:
      "On choisit deux ou trois actions — jamais dix. La compétence rare n'est pas de trouver des idées : c'est de renoncer aux bonnes idées qui ne sont pas prioritaires maintenant. Un cap, c'est autant une liste de choses qu'on décide de ne pas faire.",
    sortie: "Trois priorités écrites, et la liste explicite de ce qu'on abandonne ce mois-ci.",
  },
  {
    n: "03",
    nom: "EXÉCUTION",
    quand: "Tout le mois",
    texte:
      "Tu crées. Tu sors. Tu postes. Tu expérimentes. Ce travail-là ne change pas et ne doit pas changer : c'est le tien. La seule différence, c'est que les décisions importantes passent par un regard extérieur avant d'être prises, pas après.",
    sortie: "Des retours écrits sur ce que tu produis, au fil du mois.",
  },
  {
    n: "04",
    nom: "CORRECTION",
    quand: "Chaque fin de mois",
    texte:
      "On regarde ce qui a fonctionné, ce qui n'a pas fonctionné, et surtout pourquoi. La plupart des artistes changent de stratégie sans jamais mesurer l'ancienne — ils confondent nouveauté et correction. Ici, on ne change que ce qu'on a compris.",
    sortie: "Un bilan écrit, et le cap du mois suivant.",
  },
]

export default function Methode() {
  return (
    <>
      <section className="bloc pt-[150px] md:pt-[190px]">
        <div className="cadre">
          <Reveal>
            <p className="index">LE MÉCANISME</p>
            <h1 className="titre-1 mt-7 max-w-[15ch] text-balance">
              Une sortie ne construit rien. Un <em className="not-italic text-cobalt-vif">arc</em>, si.
            </h1>
            <p className="chapo mt-8 max-w-[56ch]">
              Un arc, c'est trois à six sorties conçues ensemble, où chacune prépare la suivante et confirme la
              précédente. Chaque mois, un cycle en quatre temps construit un maillon de plus. Rien de spectaculaire pris
              isolément — et c'est exactement le point.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-marge pb-6">
        <div className="cadre-md">
          <Reveal>
            <figure className="carte p-4! md:p-8!">
              <Trajectoires variante="demo" className="h-auto w-full" />
              <figcaption className="etiquette mt-5 border-t border-filet pt-5">
                Douze mois d'arc tenu, comparés à douze mois de sorties isolées. Même travail, même talent.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="bloc">
        <div className="cadre-md">
          {TEMPS.map((t, i) => (
            <Reveal key={t.n} delay={i * 60}>
              <article className="grid gap-6 border-t border-filet py-12 md:grid-cols-[110px_1fr] md:gap-10 md:py-16">
                <div>
                  <p className="font-mono text-[11px] tracking-[0.22em] text-cobalt-vif">{t.n}</p>
                  <p className="etiquette mt-3 leading-relaxed">{t.quand}</p>
                </div>
                <div>
                  <h2 className="font-mono text-[13px] uppercase tracking-[0.24em] text-craie">{t.nom}</h2>
                  <p className="corps mt-5 text-[15.5px]">{t.texte}</p>
                  <p className="mt-6 border-l-2 border-craie pl-5 font-sans text-[0.98rem] font-semibold leading-snug text-craie-80">
                    {t.sortie}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bloc border-t border-filet bg-encre-haute">
        <div className="cadre-md">
          <TeteSection index="05" etiquette="CE QUE L'ARC N'EST PAS" titre="Un plan de communication figé sur six mois." />
          <Reveal>
            <div className="space-y-6">
              <p className="corps">
                La plupart des « stratégies d'artiste » sont des calendriers : trois singles, un EP, une tournée, et une
                date pour chaque case. Le problème est simple — dès le deuxième mois, la réalité ne ressemble plus au
                plan, et l'artiste se retrouve à choisir entre suivre un document périmé ou improviser.
              </p>
              <p className="corps">
                Un cycle n'a pas ce défaut, parce qu'il intègre la correction comme une étape et non comme un échec. Ce
                qui reste stable, ce n'est pas le calendrier : c'est la direction.
              </p>
              <p className="verdict mt-9">
                Ta stratégie ne doit pas résister au changement. Elle doit s'en nourrir.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <BandeCta
        titre="Ton arc commence par un diagnostic."
        texte="Quelques questions sur ton projet — et un retour écrit sur l'un de tes morceaux, avant que tu paies quoi que ce soit."
        cta="Candidater"
      />
    </>
  )
}
