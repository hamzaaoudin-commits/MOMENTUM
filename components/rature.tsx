"use client"

import { useEffect, useRef, useState } from "react"

/**
 * LA RATURE.
 * ---------------------------------------------------------------------------
 * Le trait se dessine sous les yeux du lecteur, de gauche à droite, puis la
 * conséquence apparaît. On rejoue le geste de quelqu'un qui raye une méthode
 * devant vous et écrit dans la marge pourquoi elle ne marche pas. L'ordre
 * compte : rature d'abord, verdict ensuite — l'inverse donnerait la réponse
 * avant la question.
 *
 * COMMENT LE TRAIT EST FAIT, ET POURQUOI PAS AUTREMENT
 *
 * Première version : un <span> en position absolue, à 50 % de la hauteur, dont
 * on animait la largeur. Ça marche tant que le texte tient sur une ligne. Dès
 * qu'il passe à deux, 50 % de la hauteur du paragraphe tombe dans l'interligne
 * — le trait s'affiche entre les deux lignes et ressemble à un souligné.
 *
 * Ici, c'est un vrai text-decoration: line-through, qui sait rayer chaque
 * ligne à la bonne hauteur quel que soit le nombre de lignes. Pour l'animer,
 * le texte est écrit deux fois, superposé : une copie normale dessous, une
 * copie rayée par-dessus, révélée de la gauche vers la droite par un
 * clip-path. La copie du dessus est aria-hidden — le lecteur d'écran n'entend
 * la phrase qu'une fois.
 */
export function Rature({ essai, effet, index }: { essai: string; effet: string; index: number }) {
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

  // Décalage en cascade : les lignes se rayent l'une après l'autre.
  const retard = index * 140

  return (
    <div ref={ref} className="grid gap-2 border-b border-filet py-7 md:grid-cols-[1fr_1.25fr] md:gap-12">
      <p className="relative text-[1.2rem] font-medium leading-snug text-craie-50">
        <span>{essai}</span>
        <span
          aria-hidden
          className="absolute inset-0 text-craie line-through decoration-craie decoration-[2px]"
          style={{
            clipPath: vu ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
            transition: `clip-path 640ms cubic-bezier(.65,.05,.36,1) ${retard}ms`,
          }}
        >
          {essai}
        </span>
      </p>

      <p
        className="text-[15px] leading-relaxed text-craie-80"
        style={{
          opacity: vu ? 1 : 0,
          transform: vu ? "none" : "translateY(8px)",
          transition: `opacity 500ms ease ${retard + 580}ms, transform 500ms ease ${retard + 580}ms`,
        }}
      >
        {effet}
      </p>
    </div>
  )
}
