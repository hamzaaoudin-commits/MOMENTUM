"use client"

import { useState, useEffect } from "react"
import { LocaleLink as Link } from "@/components/locale-link"
import { useT } from "@/lib/i18n"

const T = {
  fr: {
    offer: "L'offre",
    moments: "Les moments",
    about: "Le Studio",
    method: "La Méthode",
    cta: "Parlez-nous de votre moment",
    menu: "Menu",
  },
  en: {
    offer: "The offer",
    moments: "The moments",
    about: "The Studio",
    method: "The Method",
    cta: "Tell us about your moment",
    menu: "Menu",
  },
}

export function NavBar() {
  const t = useT(T)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [mobileOpen])

  const NAV_LINKS = [
    { label: t.offer, href: "/offre" },
    { label: t.moments, href: "/moments" },
    { label: t.about, href: "/about" },
    { label: t.method, href: "/strawberry-method" },
  ]

  return (
    <nav
      className={[
        "fixed inset-x-0 top-0 z-[100] px-gutter transition-all duration-300",
        scrolled ? "border-b border-hair bg-ink/85 backdrop-blur-xl" : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between">
        <Link href="/" className="font-serif text-[22px] font-bold tracking-[-0.02em] text-white no-underline">
          <span className="text-brand">STRAWBERRY PROD.</span>
        </Link>

        <button
          type="button"
          className="text-2xl text-white md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label={t.menu}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>

        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-sans text-sm tracking-[0.04em] text-chalk-65 no-underline transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}

          <div className="relative inline-block">
            <span
              aria-hidden
              className="absolute -inset-1 rounded-full border border-brand/50"
              style={{ animation: "sp-navpulse 2.4s ease-out infinite" }}
            />
            <Link
              href="/#contact"
              className="relative rounded-full px-5 py-2.5 font-sans text-[13px] font-semibold tracking-[0.04em] text-white no-underline"
              style={{ background: "linear-gradient(135deg,#2256ff,#2e4eff)" }}
            >
              {t.cta}
            </Link>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="absolute inset-x-0 top-[72px] max-h-[80vh] overflow-y-auto border-b border-hair bg-ink/95 px-6 py-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="font-sans text-base text-chalk-75 no-underline"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="rounded-full px-6 py-3 text-center font-sans text-sm font-semibold text-white no-underline"
              style={{ background: "linear-gradient(135deg,#2256ff,#2e4eff)" }}
            >
              {t.cta}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
