"use client"

import { useState, useEffect, useRef } from "react"
import { AnimatedOrb } from "./animated-orb"
import { useT } from "@/lib/i18n"
import { ViewTracker } from "@/components/strawberry/view-tracker"
import { LocaleLink as Link } from "@/components/locale-link"

const EXTRACTION_POINTS = [
  { x: 60, y: 90, near: false },
  { x: 160, y: 220, near: false },
  { x: 90, y: 400, near: false },
  { x: 220, y: 560, near: false },
  { x: 60, y: 700, near: false },
  { x: 340, y: 130, near: false },
  { x: 400, y: 640, near: false },
  { x: 480, y: 60, near: false },
  { x: 520, y: 740, near: false },
  { x: 610, y: 170, near: true },
  { x: 640, y: 540, near: true },
  { x: 700, y: 230, near: true },
  { x: 690, y: 480, near: true },
  { x: 730, y: 300, near: true },
  { x: 720, y: 420, near: true },
  { x: 800, y: 260, near: true },
  { x: 810, y: 440, near: true },
  { x: 850, y: 340, near: false },
  { x: 900, y: 200, near: false },
  { x: 920, y: 500, near: false },
]

function seeded(i: number, salt: number) {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453
  return x - Math.floor(x)
}

const T = {
  en: {
    badge: "NARRATIVE STUDIO · PARIS",
    slogan: "Impossible to confuse. Impossible to generate.",
    h1a: "A decisive moment only happens once.",
    h1b: "We write what the world will remember.",
    grounding: "The story · €2,900 · The full moment · from €6,000",
    sub: "A launch, an opening, a release, a fundraise. We write the story of your moment, then we stage it, up to the day and beyond.",
    lead: "Before the day, you know:",
    items: ["What this moment has to say", "In what order to reveal it", "What the audience should keep"],
    ctaMain: "Tell us about your moment \u2192",
    ctaSecond: "See the offer",
  },
  fr: {
    badge: "STUDIO DE NARRATION · PARIS",
    slogan: "Impossible à confondre. Impossible à générer.",
    h1a: "Un moment décisif n'arrive qu'une fois.",
    h1b: "Nous écrivons ce que le monde en retiendra.",
    grounding: "Le récit · 2 900 € · Le moment complet · à partir de 6 000 €",
    sub: "Un lancement, une ouverture, une sortie, une levée de fonds. Nous écrivons le récit de votre moment, puis nous le mettons en scène, jusqu'au jour J et au-delà.",
    lead: "Avant le jour J, vous savez :",
    items: ["Ce que ce moment doit dire", "Dans quel ordre le révéler", "Ce que le public doit en retenir"],
    ctaMain: "Parlez-nous de votre moment \u2192",
    ctaSecond: "Voir l'offre",
  },
}

export function HeroSection() {
  const t = useT(T)
  const [mounted, setMounted] = useState(false)
  const heroRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setMounted(true), 100)
        } else {
          setMounted(false)
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="home" ref={heroRef as any} className="relative flex min-h-[62vh] items-center overflow-hidden bg-ink pb-0 pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-[linear-gradient(180deg,transparent,var(--color-ink))]"
      />
      <ViewTracker name="hero" />
      <AnimatedOrb color="radial-gradient(circle,#2256ff,transparent)" size={700} x="-10%" y="-20%" opacity={0.18} />
      <AnimatedOrb color="radial-gradient(circle,#2e4eff,transparent)" size={500} x="60%" y="30%" opacity={0.14} />
      <AnimatedOrb color="radial-gradient(circle,#1044e0,transparent)" size={300} x="80%" y="80%" opacity={0.1} />

      <div
        aria-hidden
        className="absolute inset-0 z-0 bg-[length:60px_60px] bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_30%,transparent_100%)]"
      />

      <svg
        aria-hidden
        viewBox="0 0 1000 800"
        className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full opacity-[0.22] md:block motion-reduce:hidden"
        preserveAspectRatio="xMidYMid slice"
      >
        <style>{`
          @keyframes hero-twinkle {
            0%, 80%, 100% { opacity: var(--twinkle-base); transform: scale(1); filter: none; }
            90% { opacity: 1; transform: scale(2); filter: drop-shadow(0 0 6px #2256ff) drop-shadow(0 0 2px #fff); }
          }
        `}</style>
        {EXTRACTION_POINTS.map((p, i) => (
          <line
            key={`l${i}`}
            x1={p.x}
            y1={p.y}
            x2="760"
            y2="360"
            stroke="#2256ff"
            strokeWidth="0.6"
            opacity={p.near ? 0.55 : 0.18}
            pathLength={1}
            strokeDasharray={1}
            strokeDashoffset={mounted ? 0 : 1}
            style={{
              transition: "stroke-dashoffset 1400ms cubic-bezier(.22,.68,0,1)",
              transitionDelay: `${150 + i * 45}ms`,
            }}
          />
        ))}
        {EXTRACTION_POINTS.map((p, i) => {
          const base = p.near ? 0.9 : 0.5
          const radius = p.near ? 2.6 : 1.6
          const duration = 2200 + seeded(i, 1) * 2600
          const delay = seeded(i, 2) * 4000
          return (
            <circle
              key={`p${i}`}
              cx={p.x}
              cy={p.y}
              r={radius}
              fill="#2256ff"
              opacity={mounted ? base : 0}
              style={
                {
                  "--twinkle-base": base,
                  transformBox: "fill-box",
                  transformOrigin: "center",
                  transition: mounted ? undefined : "opacity 500ms ease-out",
                  transitionDelay: mounted ? undefined : `${150 + i * 45 + 900}ms`,
                  animation: mounted ? `hero-twinkle ${duration}ms ease-in-out ${delay}ms infinite` : undefined,
                } as React.CSSProperties
              }
            />
          )
        })}
        <circle cx="760" cy="360" r="4" fill="#2256ff" />
        <circle cx="760" cy="360" r="14" fill="none" stroke="#2256ff" strokeWidth="1" opacity="0.4" />
      </svg>

      <div className="relative z-[1] w-full shell px-gutter pt-32">
        <div
          className={[
            "transition-all duration-[900ms] ease-[cubic-bezier(.22,.68,0,1.2)]",
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
          ].join(" ")}
        >
          <div className="mb-8 inline-flex max-w-full items-center gap-2 overflow-hidden rounded-full border border-brand/35 bg-brand/[0.12] px-4 py-1.5">
            <span aria-hidden className="h-[7px] w-[7px] shrink-0 rounded-full bg-brand shadow-[0_0_8px_#2256ff]" />
            <span className="whitespace-nowrap font-sans text-[11px] font-semibold tracking-[0.1em] text-brand">
              {t.badge}
            </span>
          </div>

          <h1 className="m-0 mb-6 max-w-full break-words font-serif text-[clamp(1.5rem,4.8vw,4.8rem)] font-bold leading-[1.12] tracking-[-0.005em] text-white uppercase">
            {t.h1a}
            <br />
            <span className="block bg-[linear-gradient(135deg,#2256ff_20%,#5b86ff_60%,#1044e0)] bg-clip-text pb-[0.14em] text-transparent">
              {t.h1b}
            </span>
          </h1>

          <p className="mb-3 font-sans text-[12px] uppercase tracking-[0.22em] text-chalk-40">
            {t.slogan}
          </p>

          <p className="mb-5 max-w-[620px] font-sans text-[clamp(0.9rem,1.8vw,1.15rem)] leading-[1.75] text-white/55">
            {t.sub}
          </p>

          <p className="mb-3 max-w-[620px] font-sans text-[clamp(0.9rem,1.8vw,1.15rem)] leading-[1.75] text-white/55">
            {t.lead}
          </p>
          <ul className="mb-8 flex max-w-[620px] list-none flex-col gap-3 p-0">
            {t.items.map((item) => (
              <li
                key={item}
                className="flex items-baseline gap-3.5 font-sans text-[clamp(1rem,1.9vw,1.2rem)] font-medium leading-[1.45] text-white"
              >
                <span aria-hidden className="relative -top-[0.12em] h-[7px] w-[7px] flex-none rounded-full bg-brand shadow-[0_0_12px_rgba(34,86,255,0.75)]" />
                {item}
              </li>
            ))}
          </ul>

          <p className="mb-6 max-w-[640px] font-sans text-[13px] uppercase tracking-[0.14em] text-white">
            {t.grounding}
          </p>

          <div className="mb-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="btn-primary">
              {t.ctaMain}
            </a>
            <Link href="/offre" className="btn-ghost no-underline">
              {t.ctaSecond}
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
