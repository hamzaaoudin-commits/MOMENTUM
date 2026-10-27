"use client"

import { useEffect, useRef, useState } from "react"
import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"
import { ViewTracker } from "@/components/strawberry/view-tracker"
import { ScrollFillText } from "@/components/strawberry/scroll-fill-text"
import { useScrollReveal } from "@/hooks/use-strawberry"

const T = {
  en: {
    h2a: "None of it was a lack of effort.",
    h2b: "It was the wrong cause.",
    lead: "You have probably prepared a moment like this before.",
    p1: "Each preparation looked like a plan. None of it made people remember.",
    falseCauses: [
      {
        label: "A beautiful launch visual",
        impact: "A polished image, shared for three days, forgotten the week after. It shows, it does not tell.",
        choice: "Here, the image comes after the story. Never before.",
      },
      {
        label: "A communications agency",
        impact: "A posting calendar, formats, a media plan. But no decision on what the moment stands for — and what it refuses.",
        choice: "We write what your moment stands for before deciding how to show it.",
      },
      {
        label: "Posting louder, more often",
        impact: "More volume on the day, in a feed already saturated. Noise does not make a memory.",
        choice: "We build a sequence: what goes out, when, in what order.",
      },
      {
        label: "Asking a language model for your announcement",
        impact: "A plausible text. Well written. Statistically average. The same one your competitors got.",
        choice: "We make choices. And we answer for the ones we make.",
      },
    ],
    falseCauseOutro:
      "The problem was never how loud the day was. It is that nobody wrote, beforehand, what this moment had to say. And without a story, no moment stays.",
    diagramBefore: "Yesterday",
    diagramAfter: "Today",
    splitBefore: "The product was enough to make the event.",
    splitAfter: "The story makes the event.",
    wipeHint: "Drag to the right",
    remedy:
      "The problem is not making more noise on the day. It is writing the story beforehand, then staging it, so the moment becomes a memory — not one more piece of news.",
  },
  fr: {
    h2a: "Rien de tout ça n'a manqué de bonne volonté.",
    h2b: "Ça a manqué de la bonne cause.",
    lead: "Vous avez sans doute déjà préparé un moment comme celui-là.",
    p1: "Chaque préparation ressemblait à un plan. Aucune n'a fait qu'on s'en souvienne.",
    falseCauses: [
      {
        label: "Un beau visuel de lancement",
        impact: "Une image soignée, partagée trois jours, oubliée la semaine suivante. Elle montre, elle ne raconte pas.",
        choice: "Chez nous, l'image vient après le récit. Jamais avant.",
      },
      {
        label: "Une agence de communication",
        impact:
          "Un calendrier de publications, des formats, un plan média. Mais aucune décision sur ce que le moment affirme — et ce qu'il refuse.",
        choice: "Nous écrivons ce que votre moment affirme avant de décider comment le montrer.",
      },
      {
        label: "Publier plus fort, plus souvent",
        impact: "Plus de volume le jour J, dans un flux déjà saturé. Le bruit ne fabrique pas un souvenir.",
        choice: "Nous construisons une séquence : ce qui sort, quand, dans quel ordre.",
      },
      {
        label: "Demander son annonce à un modèle de langage",
        impact: "Un texte plausible. Bien formulé. Statistiquement moyen. Le même que celui de vos concurrents.",
        choice: "Nous faisons des choix. Et nous répondons de ceux que nous faisons.",
      },
    ],
    falseCauseOutro:
      "Le problème n'a jamais été le volume du jour J. C'est que personne n'a écrit, avant, ce que ce moment devait dire. Et sans récit, aucun moment ne reste.",
    diagramBefore: "Hier",
    diagramAfter: "Aujourd'hui",
    splitBefore: "Le produit suffisait à faire l'événement.",
    splitAfter: "C'est le récit qui fait l'événement.",
    wipeHint: "Glissez vers la droite",
    remedy:
      "Le problème n'est pas de faire plus de bruit le jour J. C'est d'écrire le récit avant, puis de le mettre en scène, pour que le moment devienne un souvenir — et pas une actualité de plus.",
  },
}

export function DiagnosisSection({ lang }: { lang: Lang }) {
  const t = pick(T, lang)
  const [listRef, listVisible] = useScrollReveal()
  const [h2Ref, h2Visible] = useScrollReveal()
  const [splitRef, splitVisible] = useScrollReveal()

  const wipeRef = useRef<HTMLDivElement | null>(null)
  const [pct, setPct] = useState(4)
  const dragging = useRef(false)

  function setFromClientX(clientX: number) {
    const el = wipeRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const v = ((clientX - r.left) / r.width) * 100
    setPct(Math.max(4, Math.min(96, v)))
  }

  useEffect(() => {
    function onMove(e: PointerEvent) {
      if (!dragging.current) return
      setFromClientX(e.clientX)
    }
    function onUp() {
      dragging.current = false
    }
    window.addEventListener("pointermove", onMove)
    window.addEventListener("pointerup", onUp)
    return () => {
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerup", onUp)
    }
  }, [])

  return (
    <section className="section relative overflow-hidden bg-ink text-white">
      <ViewTracker name="diagnosis" />
      <div className="glow-center" aria-hidden />

      <div className="shell relative mx-auto max-w-[780px]">
        <p className="mb-4 font-sans text-[15px] text-chalk-40">{t.lead}</p>
        <h2 className="mb-7 font-serif text-[clamp(1.7rem,3.4vw,2.8rem)] leading-[1.16] tracking-[-0.005em] uppercase">
          <ScrollFillText text={t.h2a} />
          <br />
          <span
            ref={h2Ref}
            className="surligne-grad inline-block font-bold"
            style={{
              transform: h2Visible ? "scale(1)" : "scale(1)",
              animation: h2Visible ? "diagnosis-swell 1400ms cubic-bezier(.22,.68,0,1) 200ms both" : undefined,
              transformOrigin: "left center",
            }}
          >
            {t.h2b}
          </span>
          <style>{`
            @keyframes diagnosis-swell {
              0% { transform: scale(1); }
              38% { transform: scale(1.12); }
              100% { transform: scale(1); }
            }
            @media (prefers-reduced-motion: reduce) {
              @keyframes diagnosis-swell { 0%, 100% { transform: scale(1); } }
            }
          `}</style>
        </h2>
        <p className="mb-6 font-sans text-[16px] leading-[1.8] text-chalk-65">{t.p1}</p>

        <div ref={listRef} className="mb-8 flex flex-col gap-5">
          {t.falseCauses.map((fc, i) => {
            const base = i * 260
            return (
              <div
                key={fc.label}
                className="border-l border-white/10 pl-5 transition-all duration-700 ease-[cubic-bezier(.22,.68,0,1)]"
                style={{
                  opacity: listVisible ? 1 : 0,
                  transform: listVisible ? "translateX(0)" : "translateX(-10px)",
                  transitionDelay: `${base}ms`,
                }}
              >
                <span className="surligne relative inline-block font-serif text-[1.05rem] ">
                  {fc.label}
                  <span
                    aria-hidden
                    className="absolute left-0 top-1/2 h-px bg-brand/70"
                    style={{
                      width: listVisible ? "100%" : "0%",
                      transition: "width 480ms cubic-bezier(.22,.68,0,1)",
                      transitionDelay: `${base + 160}ms`,
                    }}
                  />
                </span>

                <p
                  className="m-0 mt-1 font-sans text-[13.5px] leading-snug text-chalk-55 transition-all duration-500"
                  style={{
                    opacity: listVisible ? 1 : 0,
                    transform: listVisible ? "translateY(0)" : "translateY(4px)",
                    transitionDelay: `${base + 260}ms`,
                  }}
                >
                  {fc.impact}
                </p>

                <p
                  className="m-0 mt-1.5 font-sans text-[13.5px] font-semibold leading-snug text-white transition-all duration-500"
                  style={{
                    opacity: listVisible ? 1 : 0,
                    transform: listVisible ? "translateX(0)" : "translateX(-6px)",
                    transitionDelay: `${base + 360}ms`,
                  }}
                >
                  <span className="text-brand">→</span> {fc.choice}
                </p>
              </div>
            )
          })}
        </div>

        <p className="mb-8 font-sans text-[16px] leading-[1.8] text-chalk-65">{t.falseCauseOutro}</p>

        <div ref={splitRef} className="relative left-1/2 mt-10 w-screen -translate-x-1/2">
          <div
            ref={wipeRef}
            onPointerDown={(e) => {
              dragging.current = true
              setFromClientX(e.clientX)
            }}
            className="relative h-[260px] cursor-ew-resize select-none overflow-hidden sm:h-[300px]"
            style={{ opacity: splitVisible ? 1 : 0, transition: "opacity 700ms ease" }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[linear-gradient(160deg,#0d101a_0%,#0a0a0a_100%)] px-6 text-center">
              <svg viewBox="0 0 160 70" className="h-14 w-36" aria-hidden>
                <line x1="14" y1="35" x2="146" y2="35" stroke="var(--color-brand)" strokeWidth="1.5" />
                {[14, 40.4, 66.8, 93.2, 119.6, 146].map((x, i) => (
                  <g key={x}>
                    <line x1={x} y1="35" x2={x} y2={i % 2 === 0 ? 24 : 46} stroke="var(--color-brand)" strokeWidth="1.5" />
                    {i % 2 === 0 ? (
                      <rect x={x - 6} y="14" width="12" height="10" rx="1.5" fill="var(--color-brand)" />
                    ) : (
                      <circle cx={x} cy="51" r="6" fill="var(--color-brand)" />
                    )}
                  </g>
                ))}
              </svg>
              <div>
                <div className="mb-3 font-sans text-[11px] uppercase tracking-[0.16em] text-brand">
                  {t.diagramAfter}
                </div>
                <p className="m-0 max-w-[260px] font-serif text-[clamp(1.1rem,2.4vw,1.5rem)] font-bold leading-[1.3] text-white">
                  {t.splitAfter}
                </p>
              </div>
            </div>

            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#0d0d0d] px-6 text-center [filter:grayscale(1)_brightness(0.75)]"
              style={{ clipPath: `inset(0 0 0 ${pct}%)` }}
            >
              <svg viewBox="0 0 160 70" className="h-14 w-36" aria-hidden>
                <rect x="10" y="8" width="14" height="11" rx="1.5" transform="rotate(-14 17 13)" fill="var(--color-chalk-40)" />
                <circle cx="128" cy="16" r="7" fill="var(--color-chalk-40)" />
                <rect x="66" y="32" width="11" height="15" rx="1.5" transform="rotate(20 71 39)" fill="var(--color-chalk-40)" />
                <circle cx="30" cy="50" r="6" fill="var(--color-chalk-40)" />
                <rect x="118" y="42" width="13" height="10" rx="1.5" transform="rotate(-9 124 47)" fill="var(--color-chalk-40)" />
                <circle cx="92" cy="14" r="5.5" fill="var(--color-chalk-40)" />
              </svg>
              <div>
                <div className="mb-3 font-sans text-[11px] uppercase tracking-[0.16em] text-chalk-40">
                  {t.diagramBefore}
                </div>
                <p className="m-0 max-w-[260px] font-serif text-[clamp(1.1rem,2.4vw,1.5rem)] leading-[1.3] text-white">
                  {t.splitBefore}
                </p>
              </div>
            </div>

            <div aria-hidden className="pointer-events-none absolute inset-y-0 w-[2px] bg-brand" style={{ left: `${pct}%` }} />
            <div
              aria-hidden
              className="pointer-events-none absolute top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-brand bg-ink text-[11px] text-brand shadow-[0_0_0_4px_rgba(10,10,10,0.6)]"
              style={{ left: `${pct}%` }}
            >
              ↔
            </div>

            <span className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 font-mono text-[9.5px] uppercase tracking-[0.18em] text-chalk-40">
              {t.wipeHint}
            </span>
          </div>
        </div>

        <p className="mt-10 font-serif text-[clamp(1.15rem,2.2vw,1.55rem)] leading-snug text-white/90">
          {t.remedy}
        </p>
      </div>
    </section>
  )
}
