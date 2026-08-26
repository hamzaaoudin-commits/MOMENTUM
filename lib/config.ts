/**
 * Source unique de vérité pour tout ce qui change sans toucher au design :
 * prix, contacts, capacité. Un seul fichier à éditer quand une offre bouge.
 */

export const CONTACT = {
  email: "contact@momentum.studio",
  instagram: "https://instagram.com/",
  ville: "Paris",
} as const

/** Nombre d'artistes accompagnés simultanément. Chiffre réel, pas décoratif. */
export const CAPACITE = 6

export type Offre = {
  id: string
  nom: string
  prix: number
  promesse: string
  pour: string
  inclus: string[]
  vedette?: boolean
  cta: string
}

export const OFFRES: Offre[] = [
  {
    id: "advisor",
    nom: "ADVISOR",
    prix: 149,
    promesse: "Ne plus avancer complètement seul.",
    pour: "Pour les artistes qui commencent à prendre leur projet au sérieux.",
    inclus: [
      "1 session stratégique de 60 min par mois",
      "2 retours écrits sur tes œuvres ou tes contenus",
      "Les 3 priorités du mois, écrites",
      "1 sélection d'opportunités adaptée à ton profil",
      "Analyse des décisions importantes par écrit",
    ],
    cta: "Candidater en Advisor",
  },
  {
    id: "development",
    nom: "ARTIST DEVELOPMENT",
    prix: 299,
    promesse: "Transformer ton projet en trajectoire.",
    pour: "Pour les artistes qui veulent construire, pas seulement publier.",
    vedette: true,
    inclus: [
      "2 sessions stratégiques de 60 min par mois",
      "Jusqu'à 6 retours écrits par mois (morceaux, textes, visuels, contenus)",
      "Positionnement et identité artistique",
      "Stratégie de sortie : choix du single, concept, calendrier",
      "Stratégie de contenu adossée à ton identité",
      "Veille et sélection d'opportunités",
      "Roadmap trimestrielle + priorités mensuelles",
      "Bilan écrit à la fin de chaque mois",
    ],
    cta: "Candidater en Development",
  },
  {
    id: "partner",
    nom: "ARTIST PARTNER",
    prix: 499,
    promesse: "Un regard extérieur sur chaque décision.",
    pour: "Pour les artistes déjà engagés à plein temps dans leur projet.",
    inclus: [
      "Tout ce que contient Artist Development",
      "Accès direct par message, réponse sous 24 h ouvrées",
      "Direction artistique stratégique des sorties",
      "Analyse des collaborations et des propositions reçues",
      "Relecture de tes dossiers, pitchs et candidatures",
      "Préparation des sorties de bout en bout",
      "Bilan stratégique approfondi chaque mois",
    ],
    cta: "Candidater en Partner",
  },
]

/** Tableau comparatif. Des chiffres, jamais des ✓✓✓ : trois coches ne veulent rien dire. */
export const COMPARATIF: { ligne: string; advisor: string; development: string; partner: string }[] = [
  { ligne: "Prix mensuel", advisor: "149 €", development: "299 €", partner: "499 €" },
  { ligne: "Sessions stratégiques / mois", advisor: "1 × 60 min", development: "2 × 60 min", partner: "2 × 60 min + échanges" },
  { ligne: "Retours écrits sur tes œuvres / mois", advisor: "2", development: "jusqu'à 6", partner: "sans plafond raisonnable" },
  { ligne: "Priorités du mois", advisor: "3, écrites", development: "3, écrites", partner: "3, écrites" },
  { ligne: "Positionnement & identité", advisor: "—", development: "oui", partner: "oui" },
  { ligne: "Stratégie de sortie", advisor: "—", development: "oui", partner: "direction artistique incluse" },
  { ligne: "Veille opportunités", advisor: "1 sélection", development: "en continu", partner: "en continu + préparation des candidatures" },
  { ligne: "Roadmap trimestrielle", advisor: "—", development: "oui", partner: "oui" },
  { ligne: "Bilan mensuel écrit", advisor: "—", development: "oui", partner: "approfondi" },
  { ligne: "Accès entre les sessions", advisor: "—", development: "asynchrone", partner: "réponse sous 24 h ouvrées" },
]
