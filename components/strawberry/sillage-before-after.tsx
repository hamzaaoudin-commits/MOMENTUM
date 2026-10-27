"use client"

import { useCallback, useRef, useState } from "react"

const T = {
  fr: {
    kicker: "Avant / après",
    lead: "Un extrait du document. Tirez la poignée.",
    beforeLabel: "Avant",
    afterLabel: "Après",
    before:
      "Dans un contexte où la traçabilité devient un enjeu majeur pour les acteurs du BTP, il apparaît essentiel de pouvoir démontrer la conformité des travaux exécutés.",
    after: "Vous savez que vous avez raison. Vous ne pouvez pas le montrer. Vous payez.",
    aria: "Curseur avant / après",
  },
  en: {
    kicker: "Before / after",
    lead: "An extract from the document. Drag the handle.",
    beforeLabel: "Before",
    afterLabel: "After",
    before:
      "In a context where traceability is becoming a major issue for construction stakeholders, it appears essential to be able to demonstrate the compliance of executed works.",
    after: "You know you're right. You can't show it. You pay.",
    aria: "Before / after slider",
  },
}

export function SillageBeforeAfter({ lang }: { lang: "fr" | "en" }) {
  const t = T[lang] ?? T.fr
  const box = useRef<HTMLDivElement | null>(null)
  const [pct, setPct] = useState(50)
  const dragging = useRef(false)

  const setFromX = useCallback((clientX: number) => {
    const r = box.current?.getBoundingClientRect()
    if (!r) return
    const p = ((clientX - r.left) / r.width) * 100
    setPct(Math.max(0, Math.min(100, p)))
  }, [])

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPct((v) => Math.max(0, v - 5))
    else if (e.key === "ArrowRight") setPct((v) => Math.min(100, v + 5))
    else if (e.key === "Home") setPct(0)
    else if (e.key === "End") setPct(100)
    else return
    e.preventDefault()
  }

  return (
    <div className="mx-auto max-w-[820px]">
      <div className="mb-6 text-center">
        <div className="kicker mb-3">{t.kicker}</div>
        <p className="m-0 font-sans text-[14px] text-chalk-55">{t.lead}</p>
      </div>

      <div
        ref={box}
        role="slider"
        tabIndex={0}
        aria-label={t.aria}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pct)}
        onKeyDown={onKey}
        onPointerDown={(e) => {
          dragging.current = true
          e.currentTarget.setPointerCapture(e.pointerId)
          setFromX(e.clientX)
        }}
        onPointerMove={(e) => dragging.current && setFromX(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
        className="relative h-[220px] cursor-ew-resize touch-none select-none overflow-hidden border border-hair-strong bg-ink outline-none focus-visible:border-brand sm:h-[190px]"
      >
        <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10">
          <div className="mb-3 font-sans text-[11px] uppercase tracking-[0.2em] text-chalk-40">{t.beforeLabel}</div>
          <p className="max-w-[560px] font-serif text-[clamp(1rem,2.2vw,1.4rem)] leading-[1.35] text-white/40">
            {t.before}
          </p>
        </div>

        <div
          className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-brand bg-[#0c0e12]"
          style={{ width: `${pct}%` }}
        >
          <div
            className="absolute inset-y-0 left-0 flex flex-col justify-center px-6 sm:px-10"
            style={{ width: "min(820px, 92vw)" }}
          >
            <div className="mb-3 font-sans text-[11px] uppercase tracking-[0.2em] text-brand">{t.afterLabel}</div>
            <p className="max-w-[560px] font-serif text-[clamp(1.05rem,2.4vw,1.5rem)] leading-[1.35] text-white">
              {t.after}
            </p>
          </div>
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white shadow-[0_0_0_6px_rgba(57,97,230,0.18)]"
          style={{ left: `${pct}%` }}
        >
          <span className="text-sm leading-none">&#8646;</span>
        </div>
      </div>
    </div>
  )
}
