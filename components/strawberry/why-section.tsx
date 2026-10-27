"use client"

import { useEffect, useRef, useState } from "react"
import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"
import { ViewTracker } from "@/components/strawberry/view-tracker"

const T = {
  fr: {
    kicker: "Pourquoi ce studio existe",
    h2a: "Le monde n'a jamais autant lancé, ouvert, sorti, annoncé.",
    h2b: "Et pourtant, si peu de moments restent.",
    p1: "Chaque jour, des milliers de marques lancent, de lieux ouvrent, d'artistes sortent un projet, de fondateurs annoncent.",
    p2: "Et peu à peu, tous ces moments finissent par se ressembler.",
    sameList: ["Les mêmes teasers.", "Les mêmes comptes à rebours.", "Les mêmes promesses.", "Les mêmes images.", "Les mêmes « nous sommes fiers de vous annoncer »."],
    p3: "L'IA ne fait qu'accélérer le phénomène : elle permet désormais de produire en quelques secondes l'annonce qui ressemblait déjà à toutes les autres.",
    p4: "Dans cet environnement, être bon ne suffit plus. Être visible le jour J ne suffit plus. Avoir une date ne suffit plus.",
    punch1: "Un moment doit pouvoir être reconnu.",
    recogList: ["Reconnaissable avant même qu'on lise le nom.", "Reconnaissable dans un flux saturé.", "Reconnaissable par sa manière de se révéler, de raconter, de montrer."],
    p5: "Parce qu'un moment fort ne se contente pas d'occuper une date dans un calendrier.",
    punch2: "Il crée sa propre place dans la mémoire des gens.",
    closeKicker: "C'est pour cela que ce studio existe :",
    closePunch: "Rendre vos moments impossibles à oublier.",
    closeBody:
      "Nous écrivons le récit de chaque moment décisif, puis nous le mettons en scène, avec une personnalité, une vision et des codes assez forts pour qu'on le reconnaisse — et qu'on s'en souvienne.",
    finalLead: "Parce que dans un monde où tout le monde peut annoncer quelque chose,",
    finalPunch: "le véritable avantage n'est plus de faire plus de bruit. C'est d'avoir une histoire que personne d'autre ne pourrait raconter.",
  },
  en: {
    kicker: "Why this studio exists",
    h2a: "The world has never launched, opened, released and announced so much.",
    h2b: "And yet so few moments stay.",
    p1: "Every day, thousands of brands launch, venues open, artists release, founders announce.",
    p2: "And little by little, all those moments end up looking the same.",
    sameList: ["The same teasers.", "The same countdowns.", "The same promises.", "The same images.", "The same “we are proud to announce.”"],
    p3: "AI only accelerates the phenomenon: it now lets you produce, in seconds, the announcement that already looked like every other one.",
    p4: "In this environment, being good is no longer enough. Being visible on the day is no longer enough. Having a date is no longer enough.",
    punch1: "A moment needs to be recognisable.",
    recogList: ["Recognisable before anyone reads the name.", "Recognisable in a saturated feed.", "Recognisable by how it reveals itself, tells, shows."],
    p5: "Because a strong moment does not settle for occupying a date in a calendar.",
    punch2: "It creates its own place in people's memory.",
    closeKicker: "That is why this studio exists:",
    closePunch: "To make your moments impossible to forget.",
    closeBody:
      "We write the story of every decisive moment, then we stage it, with a personality, a vision and codes strong enough that people recognise it — and remember it.",
    finalLead: "Because in a world where anyone can announce something,",
    finalPunch: "the real advantage is no longer making more noise. It is having a story no one else could tell.",
  },
}

export function WhySection({ lang }: { lang: Lang }) {
  const t = pick(T, lang)
  const ref = useRef<HTMLDivElement | null>(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVis(true)
          io.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section className="section bg-ink py-20 text-white sm:py-24">
      <ViewTracker name="why_section" />
      <div
        ref={ref}
        className={[
          "shell mx-auto max-w-[760px] text-center",
          "transition-all duration-[900ms] ease-[cubic-bezier(.22,.68,0,1)]",
          vis ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        ].join(" ")}
      >
        <div className="kicker mb-7">{t.kicker}</div>

        <h2 className="h-section mx-auto max-w-[680px]">
          {t.h2a}
        </h2>
        <p className="surligne-grad mx-auto mt-4 max-w-[560px] font-serif text-[clamp(1.1rem,2.2vw,1.5rem)] font-bold uppercase leading-[1.3] tracking-[-0.005em]">
          {t.h2b}
        </p>

        <p
          className="mx-auto mt-8 max-w-[600px] font-sans text-[15.5px] leading-[1.75] text-chalk-55 transition-all duration-700 ease-[cubic-bezier(.22,.68,0,1)]"
          style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(10px)", transitionDelay: "120ms" }}
        >
          {t.p1}
        </p>
        <p
          className="mx-auto mt-3 max-w-[600px] font-sans text-[15.5px] leading-[1.75] text-chalk-55 transition-all duration-700 ease-[cubic-bezier(.22,.68,0,1)]"
          style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(10px)", transitionDelay: "320ms" }}
        >
          {t.p2}
        </p>

        <ul className="mx-auto mt-6 flex max-w-[380px] list-none flex-col gap-1 p-0">
          {t.sameList.map((v, i) => (
            <li
              key={v}
              className="font-serif text-[15px] italic text-chalk-40 transition-all duration-600 ease-[cubic-bezier(.22,.68,0,1)]"
              style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(8px)", transitionDelay: `${560 + i * 130}ms` }}
            >
              {v}
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-9 max-w-[600px] font-sans text-[15.5px] leading-[1.75] text-chalk-55">
          {t.p3}
        </p>
        <p className="mx-auto mt-4 max-w-[600px] font-sans text-[15.5px] leading-[1.75] text-chalk-55">
          {t.p4}
        </p>

        <p className="mx-auto mt-11 max-w-[560px] font-serif text-[clamp(1.3rem,2.8vw,1.9rem)] font-bold uppercase leading-[1.2] tracking-[-0.005em] text-white">
          {t.punch1}
        </p>

        <ul className="mx-auto mt-6 flex max-w-[480px] list-none flex-col gap-1.5 p-0">
          {t.recogList.map((v) => (
            <li key={v} className="font-serif text-[15px] text-chalk-55">
              {v}
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-9 max-w-[560px] font-sans text-[15.5px] leading-[1.75] text-chalk-55">
          {t.p5}
        </p>
        <p className="mx-auto mt-2 max-w-[560px] font-serif text-[17px] font-bold leading-[1.4] text-white">
          {t.punch2}
        </p>

        <div className="mx-auto mt-10 h-px w-16 bg-brand" />

        <div className="mt-10">
          <p className="mx-auto font-sans text-[13px] uppercase tracking-[0.14em] text-chalk-40">
            {t.closeKicker}
          </p>
          <p className="mx-auto mt-4 max-w-[600px] font-serif text-[clamp(1.5rem,3.2vw,2.2rem)] font-bold uppercase leading-[1.18] tracking-[-0.005em] text-white">
            {t.closePunch}
          </p>
          <p className="mx-auto mt-6 max-w-[600px] font-sans text-[15.5px] leading-[1.75] text-chalk-55">
            {t.closeBody}
          </p>
        </div>

        <div className="mx-auto mt-10 h-px w-16 bg-brand" />

        <p className="mx-auto mt-8 max-w-[560px] font-sans text-[14px] leading-[1.7] text-chalk-40">
          {t.finalLead}
        </p>
        <p className="mx-auto mt-2 max-w-[560px] font-serif text-[18px] font-bold leading-[1.5] text-chalk-75">
          {t.finalPunch}
        </p>
      </div>
    </section>
  )
}
