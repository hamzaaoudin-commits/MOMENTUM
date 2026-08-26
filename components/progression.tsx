"use client"

import { useEffect, useState } from "react"

/**
 * Position de lecture.
 *
 * La page fait treize sections. Un lecteur qui ne sait pas où il en est ni
 * combien il reste décroche — c'est le risque principal d'une page longue.
 *
 * L'indicateur emprunte donc son vocabulaire à ce que le public visé regarde
 * tous les jours : une position de lecture et un numéro de piste. Le trait de
 * remplissage sous l'en-tête est la tête de lecture, l'étiquette dit quelle
 * piste défile.
 *
 * Rien n'est déclaré en dur : le composant lit les sections marquées
 * data-section dans le document. Ajouter ou déplacer une section met
 * l'indicateur à jour sans qu'on ait à y penser.
 */
function useLecture() {
  const [avance, setAvance] = useState(0)
  const [courante, setCourante] = useState<{ n: string; label: string } | null>(null)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[data-section]"))
    setTotal(sections.length)

    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      setAvance(h > 0 ? Math.min(1, window.scrollY / h) : 0)

      // La section courante est la dernière dont le haut est passé sous
      // l'en-tête. Plus fiable qu'un IntersectionObserver quand les sections
      // sont plus hautes que la fenêtre.
      const repere = window.scrollY + 120
      let active: HTMLElement | null = null
      for (const s of sections) {
        if (s.offsetTop <= repere) active = s
        else break
      }
      if (active) {
        const i = sections.indexOf(active) + 1
        setCourante({ n: String(i).padStart(2, "0"), label: active.dataset.label ?? "" })
      } else {
        setCourante(null)
      }
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  return { avance, courante, total }
}

/** La tête de lecture : un trait qui court sur toute la largeur de l'en-tête. */
export function Progression() {
  const { avance } = useLecture()
  return <span className="jauge" style={{ width: `${avance * 100}%` }} aria-hidden />
}

/** Le numéro de piste. Masqué sous 1024 px, où la place manque. */
export function EtiquetteSection() {
  const { courante, total } = useLecture()
  if (!courante) return <span className="hidden lg:block" />
  return (
    <span className="pointer-events-none mx-auto hidden items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-craie-38 lg:flex">
      <span className="text-cobalt-vif">{courante.n}</span>
      <span className="h-px w-4 bg-filet-fort" />
      <span className="max-w-[26ch] truncate">{courante.label}</span>
      <span className="text-craie-24">/ {String(total).padStart(2, "0")}</span>
    </span>
  )
}
