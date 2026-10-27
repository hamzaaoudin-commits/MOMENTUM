"use client"

import NextLink from "next/link"
import { usePathname } from "next/navigation"
import { useLang, LANGS, type Lang } from "@/lib/i18n"

export function LanguageToggle() {
  const { lang } = useLang()
  const pathname = usePathname() || `/${lang}`

  const swapTo = (l: Lang) => {
    const parts = pathname.split("/").filter(Boolean)
    if (parts.length && (LANGS as string[]).includes(parts[0])) parts[0] = l
    else parts.unshift(l)
    return "/" + parts.join("/")
  }

  return (
    <div
      className="inline-flex items-center gap-0.5 rounded-full border border-white/15 p-[3px]"
      role="group"
      aria-label="Language"
    >
      {LANGS.map((l: Lang) => {
        const active = lang === l
        return (
          <NextLink
            key={l}
            href={swapTo(l)}
            hrefLang={l}
            lang={l}
            aria-current={active ? "true" : undefined}
            className={[
              "rounded-full px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.06em] no-underline transition-colors duration-300",
              active ? "bg-brand text-white" : "text-chalk-40 hover:text-white",
            ].join(" ")}
          >
            {l}
          </NextLink>
        )
      })}
    </div>
  )
}
