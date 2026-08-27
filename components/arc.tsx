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
 * blanc : c'est là qu'on arrive.
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

/* Ce que fait chaque maillon. Le diagramme cesse d'être une illustration :
   on peut l'interroger, et chaque réponse explique le mécanisme vendu. */
const MAILLONS = [
  "Sortie 1 — elle pose la promesse. Personne ne l'attend, et ce n'est pas grave : son rôle est de dire ce que sera la suite.",
  "Sortie 2 — elle confirme. C'est elle qui prouve que la première n'était pas un accident.",
  "Sortie 3 — elle élargit. Même monde, autre angle : on garde l'auditeur en lui montrant qu'il n'a pas fait le tour.",
  "Sortie 4 — le point de bascule. Les auditeurs de la 1 reviennent d'eux-mêmes ; vous ne reparez plus de zéro.",
  "Sortie 5 — elle capitalise. C'est le moment de sortir le titre le plus fort : il hérite de tout ce qui précède.",
  "Sortie 6 — elle ouvre. Elle annonce la suite avant même que la suite existe.",
  "Sortie 7 — elle récolte. Le même travail qu'à la sortie 1, sur une audience qui, elle, n'est plus la même.",
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
  const [actif, setActif] = useState<number | null>(null)

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
    <div>
      {/* Les libellés sortent du SVG.
          Un texte posé dans un cadre de 1000 unités affiché sur 380 px tombe à
          quatre pixels : illisible, et le SVG ne recompose rien. En HTML, ils
          suivent la taille de police du système comme n'importe quel texte. */}
      <p className="etiquette mb-3">Sept sorties, aucun lien</p>

    <svg
      ref={ref}
      viewBox="0 24 1000 292"
      className={className}
      role="img"
      aria-label="En haut, sept sorties isolées de taille identique et sans lien entre elles. En bas, les sept mêmes sorties reliées les unes aux autres, chacune plus grande et plus haute que la précédente."
    >
      {/* ---------- BANDE HAUTE : sans arc ---------- */}
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
        const vise = actif === i
        return (
          <g key={i}>
            {/* Cible de clic généreuse : les billes font 4 à 13 px de rayon,
                bien trop peu pour un doigt sur mobile. */}
            <circle
              cx={p.x}
              cy={p.y}
              r={26}
              fill="transparent"
              className="cursor-pointer"
              tabIndex={0}
              role="button"
              aria-label={MAILLONS[i]}
              onMouseEnter={() => setActif(i)}
              onMouseLeave={() => setActif(null)}
              onFocus={() => setActif(i)}
              onBlur={() => setActif(null)}
              onClick={() => setActif(vise ? null : i)}
            />
            {vise && (
              <circle cx={p.x} cy={p.y} r={p.r + 9} fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.55" />
            )}
            <circle
              cx={p.x}
              cy={p.y}
              r={p.r}
              fill={vise ? "#ffffff" : dernier ? "#ffffff" : "var(--color-cobalt-vif)"}
              className="pointer-events-none"
              style={{
                opacity: joue ? 1 : 0,
                transition: `opacity 500ms ease ${300 + i * 190}ms, fill 180ms ease`,
              }}
            />
          </g>
        )
      })}
    </svg>

      <p className="index mt-3">Les sept mêmes sorties, chaînées</p>

      {/* Hauteur figée : sans elle, la mise en page saute d'une ligne à chaque
          survol d'une bille. */}
      <p className="mt-5 min-h-[54px] border-t border-filet pt-4 text-[13.5px] leading-relaxed text-craie-80">
        {actif === null ? (
          <span className="etiquette">Survolez ou touchez une sortie pour voir son rôle dans la chaîne.</span>
        ) : (
          MAILLONS[actif]
        )}
      </p>
    </div>
  )
}
