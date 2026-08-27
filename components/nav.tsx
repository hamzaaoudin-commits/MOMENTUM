"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Progression, EtiquetteSection } from "./progression"


export function Nav() {
  const [scrolle, setScrolle] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolle(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])


  return (
    <header
      className={`fixed inset-x-0 top-0 z-[9000] transition-colors duration-500 ${
        scrolle ? "border-b border-filet bg-encre/92 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      {/* La jauge est posée sur l'en-tête lui-même : elle doit courir sur toute
          la largeur de l'écran, y compris en mobile où l'étiquette disparaît. */}
      <Progression />

      <div className="px-marge flex h-[68px] items-center justify-between">
        <Link href="/" className="group flex items-baseline gap-2.5" aria-label="MOMENTUM, accueil">
          {/* Le lettrage reprend exactement celui de l'image de partage : c'est la
              même marque, elle ne doit pas changer de police entre les deux. */}
          <span className="text-[15px] font-extrabold uppercase tracking-[0.26em] text-craie">MOMENTUM</span>
          <span className="hidden h-[4px] w-[4px] bg-cobalt-vif sm:block" />
        </Link>

        <EtiquetteSection />

        <a href="#candidature" className="bouton bouton-plein px-5! py-2.5! text-[13px]!">
          Candidater
        </a>
      </div>

    </header>
  )
}
