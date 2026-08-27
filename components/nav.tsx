"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Progression, EtiquetteSection } from "./progression"
import { LANGS, NOM_LANG, type Lang } from "@/lib/i18n"
import type { Copy } from "@/lib/copy"

export function Nav({ lang, t }: { lang: Lang; t: Copy }) {
  const [scrolle, setScrolle] = useState(false)
  const chemin = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolle(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  /* On conserve le reste du chemin en changeant de langue : quelqu'un qui bascule
     depuis /en/mentions-legales atterrit sur /fr/mentions-legales, pas sur
     l'accueil. Perdre la place du lecteur à chaque bascule est la faute la plus
     répandue des sélecteurs de langue. */
  const suite = (chemin ?? "/fr").replace(/^\/(fr|en)/, "")

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[9000] transition-colors duration-500 ${
        scrolle ? "border-b border-filet bg-encre/92 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      {/* La jauge est posée sur l'en-tête lui-même : elle doit courir sur toute
          la largeur de l'écran, y compris en mobile où l'étiquette disparaît. */}
      <Progression />

      <div className="px-marge flex h-[68px] items-center justify-between gap-5">
        <Link href={`/${lang}`} className="flex items-baseline gap-2.5" aria-label={t.nav.accueil}>
          {/* Le lettrage reprend exactement celui de l'image de partage : c'est la
              même marque, elle ne doit pas changer de police entre les deux. */}
          <span className="text-[15px] font-extrabold uppercase tracking-[0.26em] text-craie">MOMENTUM</span>
          <span className="hidden h-[4px] w-[4px] bg-cobalt-vif sm:block" />
        </Link>

        <EtiquetteSection />

        <div className="flex items-center gap-4">
          <nav aria-label={t.nav.langue} className="flex items-center">
            {LANGS.map((l, i) => (
              <span key={l} className="flex items-center">
                {i > 0 && <span aria-hidden className="mx-1.5 h-3 w-px bg-filet-fort" />}
                <Link
                  href={`/${l}${suite}`}
                  hrefLang={l}
                  aria-current={l === lang ? "true" : undefined}
                  className={`font-mono text-[11px] tracking-[0.16em] transition-colors ${
                    l === lang ? "text-craie" : "text-craie-38 hover:text-craie-80"
                  }`}
                >
                  {NOM_LANG[l]}
                </Link>
              </span>
            ))}
          </nav>

          <a href="#candidature" className="bouton bouton-plein px-5! py-2.5! text-[13px]!">
            {t.nav.candidater}
          </a>
        </div>
      </div>
    </header>
  )
}
