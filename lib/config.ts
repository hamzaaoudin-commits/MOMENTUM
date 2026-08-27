/**
 * Les chiffres, et rien que les chiffres.
 *
 * Depuis le passage en deux langues, aucune chaîne de caractères destinée au
 * lecteur ne vit ici : elles sont toutes dans lib/copy-fr.ts et lib/copy-en.ts.
 * Ce fichier ne contient que ce qui ne se traduit pas — un prix est un prix
 * dans les deux langues.
 */

export const CONTACT = {
  email: "contact@momentum.studio",
  instagram: "https://instagram.com/",
  ville: "Paris",
} as const

/** Nombre d'artistes accompagnés simultanément. Chiffre réel, pas décoratif. */
export const CAPACITE = 6

/**
 * Places encore ouvertes. Rareté quantitative : « je privilégie certains
 * profils » ne fait agir personne, « 2 places sur 6 » oui. À tenir à jour
 * honnêtement — une rareté qu'on découvre fausse détruit tout le reste.
 */
export const PLACES_OUVERTES = 2

/** Prix mensuels, par identifiant d'offre. */
export const PRIX: Record<string, number> = {
  advisor: 149,
  development: 299,
  partner: 499,
}

/** L'offre unique poussée par défaut. La règle de l'Un : une offre, une action. */
export const OFFRE_PRINCIPALE = "development"
