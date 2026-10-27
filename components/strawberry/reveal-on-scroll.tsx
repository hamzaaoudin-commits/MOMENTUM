"use client"

import { useEffect } from "react"

export function RevealOnScroll() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const attach = () => {
      const els = document.querySelectorAll<HTMLElement>(".reveal:not(.shown)")
      if (!els.length) return null

      if (reduced) {
        els.forEach((el) => el.classList.add("shown"))
        return null
      }

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("shown")
              io.unobserve(e.target)
            }
          })
        },
        { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
      )
      els.forEach((el) => io.observe(el))
      return io
    }

    let io = attach()

    const retry = window.setTimeout(() => {
      io?.disconnect()
      io = attach()
    }, 600)

    return () => {
      window.clearTimeout(retry)
      io?.disconnect()
    }
  }, [])

  return null
}
