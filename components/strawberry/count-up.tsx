"use client"

import { useEffect, useRef, useState } from "react"

function groupThousands(n: number, separator: string): string {
  const s = String(n)
  if (!separator) return s
  let out = ""
  for (let i = 0; i < s.length; i++) {
    if (i > 0 && (s.length - i) % 3 === 0) out += separator
    out += s[i]
  }
  return out
}

export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [display, setDisplay] = useState<string>(value)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const match = value.match(/^(\d[\d,\s]*)(.*)$/)
    if (!match) return

    const raw = match[1]
    const suffix = match[2]
    const separator = raw.includes(",") ? "," : raw.includes(" ") ? " " : ""
    const target = parseInt(raw.replace(/[,\s]/g, ""), 10)

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) {
      setDisplay(value)
      return
    }

    setDisplay(`0${suffix}`)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        const duration = 900
        const start = performance.now()

        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / duration)
          const eased = 1 - Math.pow(1 - progress, 3)
          const current = Math.round(target * eased)
          setDisplay(`${groupThousands(current, separator)}${suffix}`)
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
