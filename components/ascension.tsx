"use client"

import { useEffect, useRef, useState } from "react"

/**
 * L'ASCENSION.
 * ---------------------------------------------------------------------------
 * Le fond du hero doit dire une seule chose, avant même qu'on lise le titre :
 * ça monte, et ça monte de plus en plus vite.
 *
 * Deux traits fins ne le disaient pas. Ici, cinquante-six barres montent du bas
 * de l'écran selon une courbe composée — presque rien à gauche, puis
 * l'accélération devient physiquement visible sur le tiers droit. Elles se
 * lèvent une par une, de la gauche vers la droite : le regard suit la montée au
 * lieu de la constater.
 *
 * Le vocabulaire est celui d'un analyseur de spectre, que le public visé
 * regarde tous les jours dans son logiciel de musique. C'est ce qui empêche le
 * graphique de ressembler à un tableau de bord d'entreprise.
 *
 * Trois choses le gardent lisible sous le texte :
 * — les barres de gauche sont presque noires, et le titre s'écrit à gauche ;
 * — la luminosité augmente avec la hauteur, donc l'énergie est reléguée à
 *   droite, là où il n'y a pas de texte ;
 * — la ligne plate de l'agitation, en gris sombre, donne l'échelle : sans elle,
 *   une montée n'est qu'une forme.
 */

const N = 56

/** Courbe composée normalisée entre 0 et 1. Le facteur 4.1 règle la brutalité. */
function hauteur(i: number) {
  const t = i / (N - 1)
  return (Math.exp(4.1 * t) - 1) / (Math.exp(4.1) - 1)
}

export function Ascension({ className = "" }: { className?: string }) {
  const [monte, setMonte] = useState(false)
  const ref = useRef<SVGSVGElement | null>(null)

  useEffect(() => {
    // Un temps mort avant le départ : les barres doivent se lever pendant que
    // le lecteur découvre le titre, pas avant qu'il n'ait rien vu.
    const t = setTimeout(() => setMonte(true), 260)
    return () => clearTimeout(t)
  }, [])

  const W = 1440
  const H = 760
  const SOL = 700
  const HAUT_MAX = 560
  const pas = W / N
  const largeur = pas * 0.52

  const barres = Array.from({ length: N }, (_, i) => {
    const h = hauteur(i) * HAUT_MAX + 4
    return { x: i * pas + (pas - largeur) / 2, h, y: SOL - h, i }
  })

  // Le tracé passe par le sommet de chaque barre : la courbe et les barres
  // racontent la même chose, elles ne se contredisent jamais.
  const sommets = barres.map((b) => `${b.x + largeur / 2},${b.y}`).join(" L")
  const LEN = 3200

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMax slice"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="mo-montee" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#0d1119" />
          <stop offset="55%" stopColor="#1b3fd9" />
          <stop offset="100%" stopColor="#2f5bff" />
        </linearGradient>
      </defs>

      {/* L'agitation : la ligne de référence. Le même travail, à plat. */}
      <line x1="0" y1={SOL - 46} x2={W} y2={SOL - 46} stroke="#3a4049" strokeWidth="2" strokeDasharray="4 8" />
      <line x1="0" y1={SOL} x2={W} y2={SOL} stroke="#343941" strokeWidth="1" />

      {barres.map((b) => {
        const t = b.i / (N - 1)
        return (
          <rect
            key={b.i}
            x={b.x}
            y={b.y}
            width={largeur}
            height={b.h}
            fill="url(#mo-montee)"
            style={{
              opacity: 0.2 + t * 0.8,
              transformOrigin: `${b.x + largeur / 2}px ${SOL}px`,
              transform: monte ? "scaleY(1)" : "scaleY(0)",
              transition: `transform 900ms cubic-bezier(.16,.9,.3,1) ${b.i * 26}ms`,
            }}
          />
        )
      })}

      {/* Le sommet, tracé par-dessus : c'est lui qui donne la direction. */}
      <path
        d={`M${sommets}`}
        fill="none"
        stroke="#ffffff"
        strokeWidth="3"
        strokeLinejoin="round"
        strokeLinecap="round"
        style={
          monte
            ? {
                strokeDasharray: LEN,
                strokeDashoffset: LEN,
                ["--len" as any]: `${LEN}`,
                animation: "mo-trace 2400ms cubic-bezier(.16,.9,.3,1) 300ms forwards",
              }
            : { strokeDasharray: LEN, strokeDashoffset: LEN }
        }
      />

      {/* Le point d'arrivée, hors du cadre en haut à droite : la montée ne
          s'arrête pas au bord de l'écran. */}
      <circle
        cx={barres[N - 1].x + largeur / 2}
        cy={barres[N - 1].y}
        r="7"
        fill="#ffffff"
        style={{ opacity: monte ? 1 : 0, transition: "opacity 500ms ease 2500ms" }}
      />
    </svg>
  )
}
