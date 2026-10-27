"use client"

import { useEffect, useRef, useState } from "react"

export function LettersReveal({ letters }: { letters: { letter: string; name: string }[] }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="mx-auto grid max-w-[900px] grid-cols-5 gap-2 sm:gap-4">
      {letters.map((l, i) => (
        <div
          key={l.letter}
          className="text-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.94)",
            transition: "opacity 700ms cubic-bezier(.22,.68,0,1.2), transform 700ms cubic-bezier(.22,.68,0,1.2)",
            transitionDelay: `${i * 220}ms`,
          }}
        >
          <div className="mb-5 border-2 border-brand bg-brand/[0.06] py-5 font-serif text-[clamp(2rem,6vw,4rem)] font-bold leading-none text-brand shadow-[0_20px_60px_rgba(57,97,230,0.35)] sm:py-10">
            {l.letter}
          </div>
          <div aria-hidden className="mx-auto mb-3 h-1.5 w-1.5 rounded-full bg-brand" />
          <div className="font-sans text-[10px] font-semibold uppercase tracking-[0.1em] text-white sm:text-[13px]">
            {l.name}
          </div>
        </div>
      ))}
    </div>
  )
}
