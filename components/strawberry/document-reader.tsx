"use client"

import { useRef, useState } from "react"

export type ReaderBlock =
  | { kind: "section"; n: string; title: string; note?: string }
  | { kind: "h"; text: string }
  | { kind: "lead"; text: string }
  | { kind: "p"; text: string }
  | { kind: "quote"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "table"; head: string[]; rows: string[][] }
  | { kind: "pair"; beforeLabel: string; afterLabel: string; before: string; after: string }

export type ReaderPart = { n: string; title: string; subtitle?: string; blocks: ReaderBlock[] }

function RenderBlock({ b }: { b: ReaderBlock }) {
  switch (b.kind) {
    case "section":
      return (
        <div className="mb-7 mt-16 border-t border-white/15 pt-7 first:mt-0 first:border-t-0 first:pt-0">
          <div className="mb-2 font-sans text-[11px] uppercase tracking-[0.22em] text-brand">{b.n}</div>
          <h2 className="m-0 font-serif text-[clamp(1.5rem,3vw,2.15rem)] font-bold leading-[1.1] tracking-[-0.01em] text-white uppercase">
            {b.title}
          </h2>
          {b.note ? <p className="mt-3 font-sans text-[14px] leading-relaxed text-chalk-55">{b.note}</p> : null}
        </div>
      )

    case "h":
      return (
        <h3 className="mb-4 mt-10 font-serif text-[clamp(1.15rem,2vw,1.5rem)] font-bold tracking-[-0.01em] text-white first:mt-0 uppercase">
          {b.text}
        </h3>
      )

    case "lead":
      return <p className="mb-5 font-serif text-[1.15rem] leading-relaxed text-chalk-90">{b.text}</p>

    case "p":
      return <p className="mb-5 font-sans text-[15.5px] leading-[1.75] text-chalk-75">{b.text}</p>

    case "quote":
      return (
        <blockquote className="my-7 border-l-2 border-brand bg-white/[0.02] py-5 pl-6 pr-5">
          <p className="m-0 font-serif text-[clamp(1rem,1.6vw,1.2rem)] leading-[1.6] text-chalk-90">
            {b.text}
          </p>
        </blockquote>
      )

    case "list":
      return (
        <ul className="mb-6 flex list-none flex-col gap-3.5 p-0">
          {b.items.map((it, i) => (
            <li key={i} className="flex items-start gap-3.5 font-sans text-[15px] leading-[1.7] text-chalk-75">
              <span aria-hidden className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-brand" />
              {it}
            </li>
          ))}
        </ul>
      )

    case "table":
      return (
        <div className="mb-7 overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr>
                {b.head.map((h) => (
                  <th
                    key={h}
                    className="border-b border-white/15 pb-3 pr-5 font-sans text-[10px] uppercase tracking-[0.18em] text-brand"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`border-b border-white/[0.07] py-4 pr-5 align-top font-sans text-[13.5px] leading-relaxed ${
                        j === 0 ? "font-semibold text-white" : "text-chalk-65"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    case "pair":
      return (
        <div className="mb-6 grid gap-3 md:grid-cols-2">
          <div className="border border-white/10 bg-white/[0.02] p-5">
            <div className="mb-2.5 font-sans text-[10px] uppercase tracking-[0.2em] text-white/35">{b.beforeLabel}</div>
            <p className="m-0 font-sans text-[14px] leading-relaxed text-white/45">{b.before}</p>
          </div>
          <div className="border border-brand-hair bg-brand/[0.05] p-5">
            <div className="mb-2.5 font-sans text-[10px] uppercase tracking-[0.2em] text-brand">{b.afterLabel}</div>
            <p className="m-0 font-sans text-[14px] leading-relaxed text-chalk-90">{b.after}</p>
          </div>
        </div>
      )
  }
}

export function DocumentReader({
  parts,
  labels,
}: {
  parts: ReaderPart[]
  labels: { toc: string; prev: string; next: string; pageOfTemplate: string; ofCount: string }
}) {
  const [i, setI] = useState(0)
  const [tocOpen, setTocOpen] = useState(false)
  const topRef = useRef<HTMLDivElement | null>(null)
  const part = parts[i]

  const pageLabel = labels.pageOfTemplate
    .replace("{i}", String(i + 1))
    .replace("{n}", String(parts.length))

  const go = (next: number) => {
    const target = Math.max(0, Math.min(parts.length - 1, next))
    if (target === i) return
    setTocOpen(false)

    setI(target)
    topRef.current?.scrollIntoView({ block: "start" })
  }

  return (
    <div className="mx-auto max-w-[1040px] px-gutter lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start lg:gap-10">
      <nav
        aria-label={labels.toc}
        className="sticky top-[80px] hidden max-h-[calc(100vh-100px)] overflow-y-auto border-r border-hair pb-10 pr-6 pt-10 lg:block"
      >
        <div className="mb-4 font-sans text-[11px] uppercase tracking-[0.18em] text-chalk-40">{labels.toc}</div>
        <ol className="m-0 flex list-none flex-col gap-1 p-0">
          {parts.map((p, idx) => (
            <li key={p.n}>
              <button
                type="button"
                onClick={() => go(idx)}
                className={`flex w-full items-baseline gap-2.5 border-l-2 bg-transparent py-1.5 pl-3 text-left font-sans text-[13px] no-underline transition-colors ${
                  idx === i ? "border-brand text-white" : "border-transparent text-chalk-55 hover:text-white"
                }`}
              >
                <span className="font-serif text-[11px] text-brand">{p.n}</span>
                {p.title}
              </button>
            </li>
          ))}
        </ol>
      </nav>

      <div>
        <div ref={topRef} className="sticky top-[64px] z-10 -mx-gutter border-y border-hair bg-ink/95 px-gutter backdrop-blur lg:hidden">
          <div className="flex items-center justify-between gap-4 py-3">
            <button
              type="button"
              onClick={() => setTocOpen((v) => !v)}
              className="flex items-center gap-2 bg-transparent font-sans text-[13px] text-chalk-65 transition-colors hover:text-white"
            >
              <span aria-hidden className="text-brand">☰</span>
              {labels.toc}
            </button>
            <div className="flex items-center gap-3" role="status" aria-label={pageLabel}>
              <div className="relative h-[30px] w-[24px]" aria-hidden>
                <div className="absolute left-[3px] top-[3px] h-[30px] w-[24px] border border-white/10 bg-[#101115]" />
                <div className="absolute left-[1.5px] top-[1.5px] h-[30px] w-[24px] border border-white/15 bg-ink" />
                <div className="relative flex h-[30px] w-[24px] items-center justify-center border border-brand bg-ink font-serif text-[11px] font-bold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <span className="font-sans text-[12px] text-chalk-40">
                {labels.ofCount.replace("{n}", String(parts.length))}
              </span>
            </div>
          </div>

          {tocOpen && (
            <div className="border-t border-hair bg-ink">
              <ol className="m-0 grid list-none gap-x-8 gap-y-1 py-5">
                {parts.map((p, idx) => (
                  <li key={p.n}>
                    <button
                      type="button"
                      onClick={() => go(idx)}
                      className={`flex w-full items-baseline gap-3 bg-transparent py-1 text-left font-sans text-[14px] no-underline transition-colors hover:text-white ${
                        idx === i ? "text-white" : "text-chalk-55"
                      }`}
                    >
                      <span className="font-serif text-brand">{p.n}</span>
                      {p.title}
                    </button>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>

        <div className="hidden items-center justify-end gap-3 pt-10 lg:flex" role="status" aria-label={pageLabel}>
          <span className="font-sans text-[12px] text-chalk-40">
            {labels.ofCount.replace("{n}", String(parts.length))}
          </span>
        </div>

        <div>
          <div className="py-10 lg:py-10">
            <div className="mb-2 flex items-baseline gap-4">
              <span className="font-serif text-[2rem] font-bold leading-none text-brand">{part.n}</span>
              {part.subtitle && <span className="eyebrow">{part.subtitle}</span>}
            </div>

            <h2 className="mb-9 font-serif text-[clamp(1.6rem,3.4vw,2.4rem)] font-bold leading-tight tracking-[-0.005em] uppercase">
              {part.title}
            </h2>

            {part.blocks.map((b, idx) => (
              <RenderBlock key={idx} b={b} />
            ))}
          </div>
        </div>

        <div className="border-t border-hair py-8">
          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => go(i - 1)}
              disabled={i === 0}
              className="btn-ghost disabled:cursor-not-allowed disabled:opacity-30"
            >
              {labels.prev}
            </button>
            <button
              type="button"
              onClick={() => go(i + 1)}
              disabled={i === parts.length - 1}
              className="btn-primary disabled:cursor-not-allowed disabled:opacity-30"
            >
              {labels.next}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
