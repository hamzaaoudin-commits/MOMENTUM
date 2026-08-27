/**
 * Deux langues, deux URL.
 *
 * Le choix d'un segment /fr et /en plutôt qu'un basculement côté client n'est
 * pas cosmétique : une page traduite en JavaScript n'existe pas pour un moteur
 * de recherche, ne se partage pas dans la bonne langue et perd la traduction au
 * rechargement. Ici chaque langue a son adresse, son rendu statique et ses
 * balises hreflang.
 */

export const LANGS = ["fr", "en"] as const
export type Lang = (typeof LANGS)[number]

export const LANG_DEFAUT: Lang = "fr"

export function isLang(v: string | undefined): v is Lang {
  return v === "fr" || v === "en"
}

/** Nom affiché dans le sélecteur. */
export const NOM_LANG: Record<Lang, string> = { fr: "FR", en: "EN" }

/** Attribut lang du document et locale Open Graph. */
export const LOCALE: Record<Lang, string> = { fr: "fr_FR", en: "en_US" }
