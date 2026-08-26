"use client"

import { useEffect, useRef, useState } from "react"

/**
 * LE MÉCANISME, DESSINÉ.
 * ---------------------------------------------------------------------------
 * En haut : six sorties isolées. Même taille, même hauteur, aucun lien. Chacune
 * repart de zéro — c'est visuellement une ligne pointillée qui ne va nulle part.
 *
 * En bas : les six mêmes sorties, mais chaînées. Chacune hérite de la
 * précédente, donc chacune est plus grosse et plus haute. La dernière est en
 * cuivre : c'est là qu'on arrive.
 *
 * L'écart entre les deux bandes n'est pas une différence de talent ni de
 * travail. C'est une différence de liaison. Tout l'argument de la page tient
 * dans cette image.
 */

/* Deux bandes strictement séparées par le filet à y=128 : sans cette
   séparation, la dernière bille de l'arc remonte dans le territoire de la bande
   haute et le lecteur croit qu'elle lui appartient. */
const SANS = [
  { x: 90, y: 68 },
  { x: 230, y: 58 },
  { x: 370, y: 74 },
  { x: 510, y: 62 },
  { x: 650, y: 70 },
  { x: 790, y: 60 },
  { x: 920, y: 66 },
]

const AVEC = [
  { x: 90, y: 318, r: 4 },
  { x: 230, y: 311, r: 5 },
  { x: 370, y: 298, r: 6 },
  { x: 510, y: 278, r: 7.5 },
  { x: 650, y: 252, r: 9 },
  { x: 790, y: 222, r: 11 },
  { x: 920, y: 188, r: 13 },
]

export function Arc({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement | null>(null)
  const [joue, setJoue] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setJoue(true)
          io.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const chaine = AVEC.map((p, i) => `${i === 0 ? "M" : "L"}${p.x} ${p.y}`).join(" ")
  const LEN = 1200

  return (
    <svg
      ref={ref}
      viewBox="0 0 1000 340"
      className={className}
      role="img"
      aria-label="En haut, sept sorties isolées de taille identique et sans lien entre elles. En bas, les sept mêmes sorties reliées les unes aux autres, chacune plus grande et plus haute que la précédente."
    >
      {/* ---------- BANDE HAUTE : sans arc ---------- */}
      <text x="0" y="22" fontFamily="var(--font-mono)" fontSize="11" letterSpacing="2.4" fill="rgba(255,255,255,0.38)">
        SEPT SORTIES, AUCUN LIEN
      </text>
      <line x1="0" y1="100" x2="1000" y2="100" stroke="rgba(255,255,255,0.07)" />
      {SANS.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r="4.5"
          fill="rgba(255,255,255,0.32)"
          style={{
            opacity: joue ? 1 : 0,
            transition: `opacity 500ms ease ${i * 90}ms`,
          }}
        />
      ))}
      {SANS.map((p, i) => (
        <line
          key={`t${i}`}
          x1={p.x}
          y1={p.y + 12}
          x2={p.x}
          y2={94}
          stroke="rgba(255,255,255,0.12)"
          strokeDasharray="2 4"
        />
      ))}

      {/* ---------- BANDE BASSE : avec arc ---------- */}
      <line x1="0" y1="128" x2="1000" y2="128" stroke="rgba(255,255,255,0.12)" />
      <text x="0" y="158" fontFamily="var(--font-mono)" fontSize="11" letterSpacing="2.4" fill="var(--color-cobalt-vif)">
        LES SEPT MÊMES SORTIES, CHAÎNÉES
      </text>
      <path
        d={chaine}
        fill="none"
        stroke="var(--color-cobalt-vif)"
        strokeWidth="1.75"
        strokeLinejoin="round"
        strokeLinecap="round"
        style={
          joue
            ? {
                strokeDasharray: LEN,
                strokeDashoffset: LEN,
                ["--len" as any]: `${LEN}`,
                animation: "mo-trace 1900ms cubic-bezier(.25,.6,.2,1) 200ms forwards",
              }
            : { strokeDasharray: LEN, strokeDashoffset: LEN }
        }
      />
      {AVEC.map((p, i) => {
        const dernier = i === AVEC.length - 1
        return (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={p.r}
            fill={dernier ? "var(--color-cuivre)" : "var(--color-cobalt-vif)"}
            style={{
              opacity: joue ? 1 : 0,
              transition: `opacity 500ms ease ${300 + i * 190}ms`,
            }}
          />
        )
      })}
    </svg>
  )
}
