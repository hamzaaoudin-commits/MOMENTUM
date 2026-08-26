"use client"

import { useState } from "react"

export type Question = { q: string; r: string }

export function Faq({ items }: { items: Question[] }) {
  const [ouvert, setOuvert] = useState<number | null>(0)

  return (
    <div className="border-t border-filet">
      {items.map((it, i) => {
        const actif = ouvert === i
        return (
          <div key={it.q} className="border-b border-filet">
            <h3>
              <button
                onClick={() => setOuvert(actif ? null : i)}
                aria-expanded={actif}
                className="flex w-full items-start justify-between gap-6 py-6 text-left"
              >
                <span
                  className={`font-sans text-[1.08rem] font-semibold leading-snug transition-colors duration-300 md:text-[1.3rem] ${
                    actif ? "text-craie" : "text-craie-65"
                  }`}
                >
                  {it.q}
                </span>
                <span
                  aria-hidden
                  className={`relative mt-2 block h-[11px] w-[11px] shrink-0 transition-transform duration-[400ms] ${
                    actif ? "rotate-45" : ""
                  }`}
                >
                  <span className="absolute left-0 top-[5px] h-px w-full bg-cobalt-vif" />
                  <span className="absolute left-[5px] top-0 h-full w-px bg-cobalt-vif" />
                </span>
              </button>
            </h3>
            <div
              className="grid transition-all duration-500 ease-out"
              style={{ gridTemplateRows: actif ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="corps max-w-2xl pb-7 pr-8">{it.r}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
