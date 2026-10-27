"use client"

import NextLink from "next/link"
import type { ComponentProps } from "react"
import { useLang } from "@/lib/i18n"
import { localePath } from "@/lib/routing"

type Props = Omit<ComponentProps<typeof NextLink>, "href"> & { href?: string }

export function LocaleLink({ href = "/", ...rest }: Props) {
  const { lang } = useLang()

  const isExternal =
    /^https?:\/\//i.test(href) || href.startsWith("mailto:") || href.startsWith("tel:")
  const isBareAnchor = href.startsWith("#")

  const hasLang = /^\/(fr|en)(\/|#|$)/.test(href)

  let finalHref = href
  if (!isExternal && !isBareAnchor && !hasLang) {
    const [path, hash] = href.split("#")
    finalHref = localePath(path || "/", lang) + (hash ? `#${hash}` : "")
  }

  return <NextLink href={finalHref} {...rest} />
}
