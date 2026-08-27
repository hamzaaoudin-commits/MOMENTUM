"use client"

import { useEffect, useRef, useState } from "react"
import type { Copy } from "@/lib/copy"

/**
 * LA SIGNATURE DU SITE.
 * ---------------------------------------------------------------------------
 * Deux artistes. Le même nombre d'heures. Le même talent. Le même mois.
 *
 * Le premier s'agite : il bouge beaucoup, monte, redescend, repart, et termine
 * l'année exactement là où il l'a commencée. Le second a un cap : au début il
 * paraît plus lent, puis l'énergie s'accumule au lieu de se dissiper.
 *
 * Les deux tracés se dessinent à la même vitesse et pendant la même durée —
 * c'est précisément l'argument. Ce n'est pas une décoration derrière un titre :
 * c'est la thèse de la page, dessinée.
 */

/** Ligne brisée : beaucoup d'amplitude, aucune progression. Fin ≈ départ. */
const AGITATION =
  "M40 300 L96 214 L140 318 L196 226 L246 330 L300 232 L356 312 L414 220 L466 328 L524 236 L580 306 L638 222 L698 322 L756 230 L812 310 L872 224 L934 296"

/** Courbe composée : plate longtemps, puis l'accumulation devient visible. */
const ELAN =
  "M40 312 C 210 310, 360 302, 486 276 C 626 247, 762 186, 850 122 C 900 86, 924 62, 934 44"

export function Trajectoires({
  t,
  variante = "fond",
  className = "",
}: {
  t?: Copy
  variante?: "fond" | "demo"
  className?: string
}) {
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
      { threshold: 0.25 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const fond = variante === "fond"
  // Longueurs approchées : elles n'ont pas besoin d'être exactes, seulement
  // supérieures au tracé réel pour que le trait parte entièrement masqué.
  const LEN = 1600
  const duree = fond ? 2600 : 2000

  const trace = (delai: number) =>
    joue
      ? {
          strokeDasharray: LEN,
          ["--len" as any]: `${LEN}`,
          animation: `mo-trace ${duree}ms cubic-bezier(.25,.6,.2,1) ${delai}ms forwards`,
          strokeDashoffset: LEN,
        }
      : { strokeDasharray: LEN, strokeDashoffset: LEN }

  const graphe = (
    <svg
      ref={ref}
      viewBox="0 0 1000 380"
      preserveAspectRatio={fond ? "xMidYMid slice" : "xMidYMid meet"}
      className={className}
      aria-hidden={fond}
      role={fond ? undefined : "img"}
      aria-label={fond ? undefined : t?.arc.altTrajectoires}
    >
      {/* Grille : les douze mois d'une année de travail. */}
      <g stroke="rgba(255,255,255,0.05)" strokeWidth="1">
        {Array.from({ length: 12 }, (_, i) => (
          <line key={i} x1={40 + i * 81} y1={30} x2={40 + i * 81} y2={340} />
        ))}
        <line x1={40} y1={340} x2={950} y2={340} stroke="rgba(255,255,255,0.12)" />
      </g>

      {/* L'agitation. Craie : c'est du bruit, pas de la couleur. */}
      <path
        d={AGITATION}
        fill="none"
        stroke="rgba(255,255,255,0.34)"
        strokeWidth={fond ? 1.25 : 1.5}
        strokeLinejoin="round"
        style={trace(120)}
      />

      {/* L'élan. Cobalt : c'est la direction. */}
      <path
        d={ELAN}
        fill="none"
        stroke="var(--color-cobalt-vif)"
        strokeWidth={fond ? 1.75 : 2.25}
        strokeLinecap="round"
        style={trace(120)}
      />

      {!fond && (
        <>
          <circle cx={934} cy={44} r="4.5" fill="var(--color-cobalt-vif)" />
          <circle cx={934} cy={296} r="3.5" fill="rgba(255,255,255,0.4)" />
        </>
      )}
    </svg>
  )

  if (fond) return graphe

  // Les bornes de l'axe sortent du SVG : à 380 px de large, un texte de 11 px
  // posé dans un cadre de 1000 unités s'affiche à quatre pixels.
  return (
    <div>
      {graphe}
      <div className="mt-3 flex items-center justify-between">
        <span className="etiquette">{t?.arc.mois1}</span>
        <span className="etiquette">{t?.arc.mois12}</span>
      </div>
    </div>
  )
}
