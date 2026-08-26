import type { Metadata } from "next"
import { CONTACT } from "@/lib/config"

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false, follow: true },
}

/** Gabarit à compléter : les champs entre crochets doivent être renseignés avant mise en ligne. */
const SECTIONS: { titre: string; corps: string[] }[] = [
  {
    titre: "Éditeur du site",
    corps: [
      "MOMENTUM — [forme juridique] au capital de [montant] €, immatriculée au RCS de [ville] sous le numéro [SIREN].",
      "Siège social : [adresse complète].",
      `Contact : ${CONTACT.email}. Directeur de la publication : Hamza El Jaouahiry.`,
    ],
  },
  {
    titre: "Hébergement",
    corps: [
      "Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis. vercel.com",
    ],
  },
  {
    titre: "Nature des prestations",
    corps: [
      "MOMENTUM propose un service de conseil stratégique à destination d'artistes indépendants, sous forme d'abonnement mensuel. Ce service ne constitue ni un mandat de management, ni une activité d'agent artistique, ni une prestation de production ou d'édition musicale.",
      "Aucun résultat n'est garanti : ni audience, ni revenus, ni signature, ni référencement en playlist. Les prestations sont des prestations de moyens.",
    ],
  },
  {
    titre: "Abonnement et résiliation",
    corps: [
      "Les abonnements sont mensuels, sans engagement de durée, résiliables à tout moment avec effet à la fin de la période en cours.",
      "Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne s'applique pas aux prestations pleinement exécutées avant la fin du délai de rétractation avec l'accord préalable du client.",
    ],
  },
  {
    titre: "Propriété intellectuelle",
    corps: [
      "Les œuvres soumises dans le cadre de l'accompagnement restent la propriété exclusive de leur auteur. MOMENTUM ne revendique aucun droit, aucun pourcentage et aucune part d'édition sur les projets accompagnés.",
      "Les contenus du présent site (textes, identité visuelle, méthode) sont protégés et ne peuvent être reproduits sans autorisation écrite.",
    ],
  },
  {
    titre: "Confidentialité",
    corps: [
      "Les projets, œuvres inédites et informations transmises dans le cadre de l'accompagnement sont traités comme confidentiels et ne sont partagés avec aucun tiers.",
    ],
  },
  {
    titre: "Données personnelles",
    corps: [
      "Les données transmises via le formulaire de candidature (nom, e-mail, lien, description du projet) sont utilisées uniquement pour traiter la candidature et sont conservées douze mois maximum.",
      `Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement et d'opposition, exerçable à ${CONTACT.email}.`,
      "Ce site n'utilise aucun cookie publicitaire ni traceur tiers à des fins de profilage.",
    ],
  },
]

export default function MentionsLegales() {
  return (
    <section className="bloc pt-[150px] md:pt-[180px]">
      <div className="cadre-sm">
        <p className="index">INFORMATIONS LÉGALES</p>
        <h1 className="titre-2 mt-6">Mentions légales</h1>
        <div className="mt-14 space-y-12">
          {SECTIONS.map((s) => (
            <article key={s.titre}>
              <h2 className="font-mono text-[12px] uppercase tracking-[0.22em] text-cobalt-vif">{s.titre}</h2>
              <div className="mt-4 space-y-3.5">
                {s.corps.map((p, i) => (
                  <p key={i} className="corps text-[14.5px]">{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
        <p className="etiquette mt-16">
          Gabarit à compléter : les mentions entre crochets doivent être renseignées avant la mise en ligne.
        </p>
      </div>
    </section>
  )
}
