"use client"

import { createContext, useContext, type ReactNode } from "react"
import { DEFAULT_LANG, type Lang } from "@/lib/lang"

export { LANGS, DEFAULT_LANG, isLang } from "@/lib/lang"
export type { Lang } from "@/lib/lang"

const LangCtx = createContext<Lang>(DEFAULT_LANG)

export function LanguageProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  return <LangCtx.Provider value={lang}>{children}</LangCtx.Provider>
}

export const useLang = () => ({ lang: useContext(LangCtx) })

export function useT<T extends Partial<Record<Lang, unknown>>>(dict: T): NonNullable<T["fr"]> {
  const lang = useContext(LangCtx)
  return (dict[lang] ?? dict.fr ?? dict.en) as NonNullable<T["fr"]>
}
