"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

const LIENS = [
  { href: "/methode", label: "La méthode" },
  { href: "/offres", label: "Les offres" },
  { href: "/a-propos", label: "Qui te parle" },
]

export function Nav() {
  const [scrolle, setScrolle] = useState(false)
  const [ouvert, setOuvert] = useState(false)
  const chemin = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolle(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => setOuvert(false), [chemin])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[9000] transition-colors duration-500 ${
        scrolle || ouvert ? "border-b border-filet bg-encre/92 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="px-marge flex h-[68px] items-center justify-between">
        <Link href="/" className="group flex items-baseline gap-2.5" aria-label="MOMENTUM, accueil">
          <span className="font-mono text-[15px] font-medium tracking-[0.34em] text-craie">MOMENTUM</span>
          <span className="hidden h-[3px] w-[3px] rounded-full bg-cuivre sm:block" />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {LIENS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-sans text-[14px] font-light transition-colors duration-300 hover:text-craie ${
                chemin === l.href ? "text-craie" : "text-craie-50"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/candidature" className="bouton bouton-plein px-5! py-2.5! text-[13.5px]!">
            Candidater
          </Link>
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
            <Link key={l.href} href={l.href} className="block py-3 font-serif text-2xl text-craie-80">
              {l.label}
            </Link>
          ))}
          <Link href="/candidature" className="bouton bouton-plein mt-5 w-full justify-center">
            Candidater
          </Link>
        </nav>
      )}
    </header>
  )
}
