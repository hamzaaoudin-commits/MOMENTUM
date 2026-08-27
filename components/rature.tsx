"use client"

import { useEffect, useRef, useState } from "react"

/**
 * LA RATURE.
 * ---------------------------------------------------------------------------
 * Cette section liste ce que le lecteur a déjà essayé. Une liste barrée en CSS
 * arrive déjà barrée : elle constate, elle ne fait rien.
 *
 * Ici le trait se dessine sous ses yeux, de la gauche vers la droite, quand la
 * ligne entre dans le cadre — et la conséquence n'apparaît qu'après, une fois
 * la rature terminée. On rejoue le geste de quelqu'un qui raye une méthode
 * devant vous et écrit dans la marge pourquoi elle ne marche pas.
 *
 * L'ordre compte : rature d'abord, verdict ensuite. L'inverse donnerait la
 * réponse avant la question.
 */
export function Rature({
  essai,
  effet,
  index,
}: {
  essai: string
  effet: string
  index: number
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [vu, setVu] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVu(true)
          io.disconnect()
        }
      },
      { threshold: 0.55 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Décalage en cascade : les lignes se rayent l'une après l'autre, jamais
  // toutes ensemble.
  const retard = index * 140

  return (
    <div
      ref={ref}
      className="grid gap-2 border-b border-filet py-7 md:grid-cols-[1fr_1.25fr] md:gap-12"
    >
      <p className="relative inline-block w-fit text-[1.2rem] font-medium leading-snug text-craie-50">
        {essai}
        <span
          aria-hidden
          className="absolute left-0 top-1/2 h-[2px] bg-craie"
          style={{
            width: vu ? "100%" : "0%",
            transition: `width 620ms cubic-bezier(.65,.05,.36,1) ${retard}ms`,
          }}
        />
      </p>
      <p
        className="text-[15px] leading-relaxed text-craie-80"
        style={{
          opacity: vu ? 1 : 0,
          transform: vu ? "none" : "translateY(8px)",
          transition: `opacity 500ms ease ${retard + 560}ms, transform 500ms ease ${retard + 560}ms`,
        }}
      >
        {effet}
      </p>
    </div>
  )
}
