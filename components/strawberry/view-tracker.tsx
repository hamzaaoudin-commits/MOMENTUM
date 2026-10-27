"use client"

import { useEffect, useRef } from "react"
import { track } from "@vercel/analytics"

export function ViewTracker({ name }: { name: string }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const fired = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true
          track("section_view", { section: name })
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [name])

  return <div ref={ref} aria-hidden className="pointer-events-none h-px w-px" />
}
