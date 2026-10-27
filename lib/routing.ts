import { LANGS, DEFAULT_LANG, type Lang } from "@/lib/lang"

export const SITE = "https://momentum.studio"

export function localePath(path: string, lang: Lang): string {
  if (!path) return `/${lang}`
  if (!path.startsWith("/")) return path
  if (path === "/") return `/${lang}`
  return `/${lang}${path}`
}

export function alternatesFor(path: string, lang: Lang = DEFAULT_LANG) {
  const languages: Record<string, string> = {}
  for (const l of LANGS) languages[l] = `${SITE}${localePath(path, l)}`
  languages["x-default"] = `${SITE}${localePath(path, DEFAULT_LANG)}`
  return {
    canonical: `${SITE}${localePath(path, lang)}`,
    languages,
  }
}

export function alternatesPair(paths: Record<Lang, string>, lang: Lang) {
  const languages: Record<string, string> = {}
  for (const l of LANGS) languages[l] = `${SITE}/${l}${paths[l]}`
  languages["x-default"] = `${SITE}/${DEFAULT_LANG}${paths[DEFAULT_LANG]}`
  return { canonical: `${SITE}/${lang}${paths[lang]}`, languages }
}
