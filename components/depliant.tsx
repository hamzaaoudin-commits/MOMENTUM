"use client"

import { useState, type ReactNode } from "react"

/**
 * Repli.
 *
 * Tout tient sur une seule page, mais tout ne doit pas être visible en même
 * temps. La règle de l'Un reste valable : une seule offre s'affiche par défaut.
 * Les deux autres niveaux et le comparatif existent bien sur la page — un clic
 * les ouvre — sans transformer le lecteur convaincu en comparateur.
 */
export function Depliant({
  libelle,
  libelleOuvert,
  children,
}: {
  libelle: string
  libelleOuvert?: string
  children: ReactNode
}) {
  const [ouvert, setOuvert] = useState(false)

  return (
    <div>
      <button
        onClick={() => setOuvert((v) => !v)}
        aria-expanded={ouvert}
        className="group flex w-full items-center justify-between gap-6 border border-filet-fort px-6 py-5 text-left transition-colors duration-300 hover:border-craie"
      >
        <span className="font-mono text-[11.5px] uppercase tracking-[0.2em] text-craie-80 group-hover:text-craie">
          {ouvert ? (libelleOuvert ?? libelle) : libelle}
        </span>
        <span aria-hidden className={`relative block h-[11px] w-[11px] shrink-0 transition-transform duration-[400ms] ${ouvert ? "rotate-45" : ""}`}>
          <span className="absolute left-0 top-[5px] h-px w-full bg-cobalt-vif" />
          <span className="absolute left-[5px] top-0 h-full w-px bg-cobalt-vif" />
        </span>
      </button>

      <div className="grid transition-all duration-500 ease-out" style={{ gridTemplateRows: ouvert ? "1fr" : "0fr" }}>
        <div className="overflow-hidden">
          <div className="pt-5">{children}</div>
        </div>
      </div>
    </div>
  )
}
