export type Lang = "fr" | "en"

export const LANGS: Lang[] = ["fr", "en"]
export const DEFAULT_LANG: Lang = "fr"

export function isLang(v: string | undefined): v is Lang {
  return !!v && (LANGS as string[]).includes(v)
}
