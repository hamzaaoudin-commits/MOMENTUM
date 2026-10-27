"use client"

import { useEffect, useRef } from "react"

export function ScrollFillText({ text, className }: { text: string; className?: string }) {
  const containerRef = useRef<HTMLSpanElement | null>(null)
  const reducedRef = useRef(false)

  useEffect(() => {
    reducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const container = containerRef.current
    if (!container) return

    const words = Array.from(container.querySelectorAll<HTMLSpanElement>("[data-word]"))

    if (reducedRef.current) {
      words.forEach((w) => {
        w.style.opacity = "1"
        w.style.fontWeight = "700"
        w.style.color = "#fff"
      })
      return
    }

    let ticking = false

    const update = () => {
      const viewportMid = window.innerHeight * 0.55
      for (const w of words) {
        const rect = w.getBoundingClientRect()
        const wordMid = rect.top + rect.height / 2
        const dist = Math.abs(wordMid - viewportMid)
        const progress = Math.max(0, Math.min(1, 1 - dist / 260))
        w.style.opacity = String(0.25 + progress * 0.75)
        w.style.fontWeight = String(Math.round(300 + progress * 400))
      }
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [text])

  return (
    <span ref={containerRef} className={className}>
      {text.split(" ").map((w, i) => (
        <span key={i} data-word style={{ display: "inline-block", color: "#fff", transition: "opacity 80ms linear" }}>
          {w}
          {i < text.split(" ").length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </span>
  )
}
