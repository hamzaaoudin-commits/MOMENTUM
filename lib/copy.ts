import { FR, type Copy } from "./copy-fr"
import { EN } from "./copy-en"
import type { Lang } from "./i18n"

export type { Copy }

export const COPY: Record<Lang, Copy> = { fr: FR, en: EN }

export function getCopy(lang: Lang): Copy {
  return COPY[lang]
}

/**
 * Remplit un gabarit du dictionnaire.
 *
 * Les chaînes traduites ne peuvent pas être des fonctions : elles voyagent du
 * serveur vers les composants client, et React ne sérialise pas une fonction.
 * On passe donc par des jetons — {n}, {total} — et {s} pour la marque du
 * pluriel, que l'anglais n'utilise simplement pas.
 */
export function remplir(gabarit: string, valeurs: Record<string, string | number>): string {
  const n = Number(valeurs.n ?? 0)
  return gabarit
    .replace(/\{s\}/g, n > 1 ? "s" : "")
    .replace(/\{(\w+)\}/g, (_, cle: string) => String(valeurs[cle] ?? ""))
}
