import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"
import { TeteSection } from "@/components/section"
import { GrilleOffres, Comparatif } from "@/components/offres"
import { Faq } from "@/components/faq"
import { BandeCta } from "@/components/bande-cta"
import { CAPACITE } from "@/lib/config"

export const metadata: Metadata = {
  title: "Les offres",
  description:
    "Trois niveaux d'accompagnement stratégique pour artistes indépendants : Advisor 149 €, Artist Development 299 €, Artist Partner 499 € par mois. Sans engagement de durée, sans pourcentage.",
}

const FAQ = [
  {
    q: "Pourquoi un abonnement plutôt qu'une mission ponctuelle ?",
    r: "Parce qu'une carrière ne se corrige pas en une séance. Un audit unique te donne un diagnostic ; un cycle mensuel te donne une trajectoire. La valeur vient de la répétition et de la correction, pas de l'intensité d'un seul rendez-vous.",
  },
  {
    q: "Que se passe-t-il si je n'ai rien à te montrer ce mois-ci ?",
    r: "On travaille sur autre chose : positionnement, contenus, préparation de la prochaine sortie, tri des opportunités. Un mois sans production n'est pas un mois perdu — c'est souvent le mois où on répare le cap.",
  },
  {
    q: "Puis-je changer de formule en cours de route ?",
    r: "Oui, dans les deux sens, d'un mois sur l'autre. Beaucoup commencent en Advisor pour tester, puis passent en Development quand une sortie approche.",
  },
  {
    q: "Combien d'artistes accompagnes-tu en même temps ?",
    r: `${CAPACITE} au maximum. C'est la limite au-delà de laquelle je ne peux plus écouter chaque projet en profondeur — et un conseil donné sans écoute réelle ne vaut rien.`,
  },
  {
    q: "Y a-t-il un engagement de durée ?",
    r: "Non. L'accompagnement fonctionne au mois. Cela dit, sois lucide : un seul mois te donnera un diagnostic, pas une trajectoire. Le changement réel se mesure sur trois à six cycles.",
  },
]

export default function Offres() {
  return (
    <>
      <section className="bloc pt-[150px] md:pt-[190px]">
        <div className="cadre">
          <Reveal>
            <p className="index">LES FORMULES</p>
            <h1 className="titre-1 mt-7 max-w-[18ch] text-balance">
              Trois niveaux. Un seul engagement&nbsp;: <em className="italic text-cobalt-vif">au mois</em>.
            </h1>
            <p className="chapo mt-8 max-w-[56ch]">
              Un manager traditionnel demande environ 2 000 € par mois — et n'accepte pas les artistes à ton stade. Une
              agence coûte davantage et te traite comme un dossier. Voici ce qui existe entre « je fais tout seul » et
              « j'ai une équipe ».
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-marge pb-20 md:pb-28">
        <div className="cadre">
          <GrilleOffres />
        </div>
      </section>

      <section className="bloc border-t border-filet bg-encre-haute">
        <div className="cadre">
          <TeteSection
            index="01"
            etiquette="COMPARATIF"
            titre="Ligne par ligne, en chiffres."
            chapo="Pas de ✓✓✓. Trois coches ne veulent rien dire — un nombre de sessions et un délai de réponse, si."
          />
          <Comparatif />
        </div>
      </section>

      <section className="bloc border-t border-filet">
        <div className="cadre-md">
          <TeteSection index="02" etiquette="CE QUE ÇA NE CONTIENT PAS" titre="Ce que je ne te vendrai jamais." />
          <Reveal>
            <ul className="space-y-5 border-t border-filet pt-8">
              {[
                "Une garantie de viralité ou de streams.",
                "Un contrat de label, une signature ou une playlist promise.",
                "Une base de contacts revendue à tous mes clients.",
                "De la production musicale : je conseille, je ne compose pas à ta place.",
                "De la promotion payante, du community management ou de l'achat d'audience.",
              ].map((x) => (
                <li key={x} className="flex gap-4 text-[15px] font-light leading-relaxed text-craie-50">
                  <span aria-hidden className="mt-[11px] h-px w-3.5 shrink-0 bg-craie-24" />
                  {x}
                </li>
              ))}
            </ul>
            <p className="verdict mt-12">
              Une offre honnête se reconnaît à la précision de ce qu'elle refuse de promettre.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bloc border-t border-filet bg-encre-haute">
        <div className="cadre-md">
          <TeteSection index="03" etiquette="QUESTIONS FRÉQUENTES" titre="Avant de choisir." />
          <Reveal>
            <Faq items={FAQ} />
          </Reveal>
        </div>
      </section>

      <BandeCta
        titre="Le bon niveau se décide ensemble, pas dans un tableau."
        texte="Candidate en indiquant la formule qui te semble juste. Si je pense qu'une autre est plus adaptée à ton stade, je te le dirai — y compris si c'est la moins chère."
        cta="Candidater"
      />
    </>
  )
}
