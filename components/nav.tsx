"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const LIENS = [
  { href: "#methode", label: "La méthode" },
  { href: "#offres", label: "L'offre" },
  { href: "#qui", label: "Qui te parle" },
]

export function Nav() {
  const [scrolle, setScrolle] = useState(false)
  const [ouvert, setOuvert] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolle(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])


  return (
    <header
      className={`fixed inset-x-0 top-0 z-[9000] transition-colors duration-500 ${
        scrolle || ouvert ? "border-b border-filet bg-encre/92 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="px-marge flex h-[68px] items-center justify-between">
        <Link href="/" className="group flex items-baseline gap-2.5" aria-label="MOMENTUM, accueil">
          {/* Le lettrage reprend exactement celui de l'image de partage : c'est la
              même marque, elle ne doit pas changer de police entre les deux. */}
          <span className="text-[15px] font-extrabold uppercase tracking-[0.26em] text-craie">MOMENTUM</span>
          <span className="hidden h-[4px] w-[4px] bg-cobalt-vif sm:block" />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {LIENS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] text-craie-50 transition-colors duration-300 hover:text-craie"
            >
              {l.label}
            </a>
          ))}
          <a href="#candidature" className="bouton bouton-plein px-5! py-2.5! text-[13.5px]!">
            Candidater
          </a>
        </nav>

        <button
          onClick={() => setOuvert((v) => !v)}
          className="flex h-9 w-9 items-center justify-center md:hidden"
          aria-expanded={ouvert}
          aria-label={ouvert ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <span className="relative block h-[9px] w-[19px]">
            <span
              className={`absolute left-0 h-px w-full bg-craie transition-all duration-300 ${ouvert ? "top-1 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 h-px w-full bg-craie transition-all duration-300 ${ouvert ? "top-1 -rotate-45" : "top-2"}`}
            />
          </span>
        </button>
      </div>

      {ouvert && (
        <nav className="px-marge border-t border-filet pb-7 pt-5 md:hidden">
          {LIENS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOuvert(false)}
              className="block py-3 text-2xl font-bold text-craie-80"
            >
              {l.label}
            </a>
          ))}
          <a href="#candidature" onClick={() => setOuvert(false)} className="bouton bouton-plein mt-5 w-full justify-center">
            Candidater
          </a>
        </nav>
      )}
    </header>
  )
}
