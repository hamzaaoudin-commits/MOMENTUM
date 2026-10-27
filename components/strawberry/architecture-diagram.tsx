"use client"

import { useEffect, useRef, useState } from "react"

const WITHOUT_PTS = [
  [20, 45],
  [60, 20],
  [100, 52],
  [140, 15],
  [180, 38],
]
const WITH_PTS = [
  [20, 58],
  [60, 46],
  [100, 34],
  [140, 22],
  [180, 10],
]

export function ArchitectureDiagram({
  labelWithout,
  subWithout,
  labelWith,
  subWith,
}: {
  labelWithout: string
  subWithout: string
  labelWith: string
  subWith: string
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [started, setStarted] = useState(false)
  const [reduced, setReduced] = useState(false)
  const [ordered, setOrdered] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started || reduced) return
    const first = window.setTimeout(() => setOrdered(true), 700)
    const loop = window.setInterval(() => setOrdered((v) => !v), 3400)
    return () => {
      window.clearTimeout(first)
      window.clearInterval(loop)
    }
  }, [started, reduced])

  if (reduced) {
    return (
      <div ref={ref} className="mb-8 grid gap-6 sm:grid-cols-2">
        <StaticPanel pts={WITHOUT_PTS} label={labelWithout} sub={subWithout} tone="muted" />
        <StaticPanel pts={WITH_PTS} label={labelWith} sub={subWith} tone="brand" line />
      </div>
    )
  }

  const pts = ordered ? WITH_PTS : WITHOUT_PTS

  return (
    <div
      ref={ref}
      className={`mb-8 border p-5 transition-colors duration-[900ms] ${
        ordered ? "border-brand-hair bg-brand/[0.03]" : "border-hair bg-transparent"
      }`}
    >
      <svg viewBox="0 0 200 70" className="mb-3 h-[96px] w-full" aria-hidden>
        <polyline
          points={WITH_PTS.map((p) => p.join(",")).join(" ")}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-brand/50"
          pathLength={1}
          strokeDasharray={1}
          style={{
            strokeDashoffset: ordered ? 0 : 1,
            transition: "stroke-dashoffset 900ms cubic-bezier(.22,.68,0,1)",
            transitionDelay: ordered ? "260ms" : "0ms",
          }}
        />
        <style>{`
          @keyframes diagram-blink {
            0%   { opacity: 0; transform: scale(0.4); }
            45%  { opacity: 1; transform: scale(1.6); }
            100% { opacity: 1; transform: scale(1); }
          }
        `}</style>
        {pts.map(([cx, cy], i) => (
          <circle
            key={`${ordered ? "on" : "off"}-${i}`}
            cx={cx}
            cy={cy}
            r="4"
            fill="currentColor"
            className={ordered ? "text-brand" : "text-white/25"}
            style={{
              transformBox: "fill-box",
              transformOrigin: "center",
              transition:
                "cx 800ms cubic-bezier(.22,.68,0,1), cy 800ms cubic-bezier(.22,.68,0,1), color 600ms ease",
              transitionDelay: `${i * 90}ms`,
              animation: `diagram-blink 620ms ease-out ${i * 150}ms both`,
            }}
          />
        ))}
      </svg>

      <div
        className={`font-sans text-[12px] uppercase tracking-[0.14em] transition-colors duration-500 ${
          ordered ? "text-brand" : "text-chalk-40"
        }`}
      >
        {ordered ? labelWith : labelWithout}
      </div>
      <p
        className={`m-0 mt-1.5 font-sans text-[13px] leading-snug transition-colors duration-500 ${
          ordered ? "text-chalk-75" : "text-chalk-55"
        }`}
      >
        {ordered ? subWith : subWithout}
      </p>
    </div>
  )
}

function StaticPanel({
  pts,
  label,
  sub,
  tone,
  line,
}: {
  pts: number[][]
  label: string
  sub: string
  tone: "muted" | "brand"
  line?: boolean
}) {
  return (
    <div className={tone === "brand" ? "border border-brand-hair bg-brand/[0.03] p-5" : "border border-hair p-5"}>
      <svg viewBox="0 0 200 70" className="mb-3 h-[64px] w-full" aria-hidden>
        {line && (
          <polyline
            points={pts.map((p) => p.join(",")).join(" ")}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-brand/50"
          />
        )}
        {pts.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="4" fill="currentColor" className={tone === "brand" ? "text-brand" : "text-white/25"} />
        ))}
      </svg>
      <div
        className={`font-sans text-[12px] uppercase tracking-[0.14em] ${tone === "brand" ? "text-brand" : "text-chalk-40"}`}
      >
        {label}
      </div>
      <p className={`m-0 mt-1.5 font-sans text-[13px] leading-snug ${tone === "brand" ? "text-chalk-75" : "text-chalk-55"}`}>
        {sub}
      </p>
    </div>
  )
}
