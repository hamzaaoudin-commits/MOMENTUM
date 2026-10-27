"use client"

import { useEffect, useRef } from "react"
import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"
import { ViewTracker } from "@/components/strawberry/view-tracker"

const STEPS = [
  {
    i: "01",
    icon: (
      <>
        <circle cx="52" cy="52" r="22" className="st" />
        <path d="M68 68 L92 92" className="st" />
        <path d="M40 52 h24 M52 40 v24" className="st2" opacity=".45" />
        <circle cx="98" cy="30" r="3.5" className="fl2" />
        <circle cx="22" cy="88" r="3" className="fl" />
      </>
    ),
  },
  {
    i: "02",
    icon: (
      <>
        <rect x="22" y="24" width="56" height="72" rx="7" className="st2" />
        <line x1="34" y1="42" x2="70" y2="42" className="st" />
        <line x1="34" y1="54" x2="66" y2="54" className="st2" opacity=".5" />
        <line x1="34" y1="64" x2="58" y2="64" className="st2" opacity=".35" />
        <path d="M78 78 l18 -18 a5 5 0 0 0 -7 -7 l-18 18 z" className="st" />
        <path d="M71 71 l-4 11 11 -4 z" className="fl" />
      </>
    ),
  },
  {
    i: "03",
    icon: (
      <>
        <path d="M26 26 h68 v68 h-68 z" className="st2" />
        <line x1="26" y1="46" x2="94" y2="46" className="st" />
        <line x1="46" y1="46" x2="46" y2="94" className="st2" opacity=".5" />
        <circle cx="36" cy="36" r="3" className="fl" />
        <path d="M56 62 h28 M56 74 h20" className="st" opacity=".7" />
      </>
    ),
  },
  {
    i: "04",
    icon: (
      <>
        <rect x="20" y="48" width="66" height="46" rx="6" className="st2" />
        <path d="M20 60 h66" className="st" />
        <path d="M22 34 l60 -10 4 14 -60 10 z" className="st2" />
        <path d="M38 27 l4 13 M54 24 l4 13 M70 21 l4 13" className="st" opacity=".7" />
        <circle cx="96" cy="74" r="4" className="fl2" />
      </>
    ),
  },
  {
    i: "05",
    icon: (
      <>
        <rect x="20" y="30" width="38" height="60" rx="8" className="st2" />
        <rect x="62" y="30" width="38" height="60" rx="8" className="st" />
        <path d="M81 48 l4 9 10 1 -7 7 2 10 -9 -5 -9 5 2 -10 -7 -7 10 -1 z" className="fl2" />
        <line x1="28" y1="50" x2="50" y2="50" className="st2" opacity=".5" />
        <line x1="28" y1="60" x2="44" y2="60" className="st2" opacity=".35" />
      </>
    ),
  },
]

const T = {
  fr: {
    eyebrow: "Phase 1 · Le récit · le déroulé",
    title: "Avant le moment, on lit, on compare, on tranche.",
    hint: "Faites défiler",
    steps: [
      {
        t: "Vous répondez, nous dépouillons.",
        d: "Jour 0 : vous remplissez le questionnaire d'onboarding, environ une heure, à votre rythme, et vous nous dites ce que votre moment doit accomplir. Nous le croisons avec tous vos supports — site, réseaux, avis, sorties précédentes.",
        b: ["Un questionnaire complet, enregistré au fil de l'eau", "L'analyse croisée de vos supports et de ceux de vos concurrents"],
      },
      {
        t: "Nous écrivons ce que vous êtes.",
        d: "Ce que vous êtes, ce que vous refusez et comment vous sonnez : la base de tout ce que le moment dira. Puis ce que le public retient de vous aujourd'hui, compté et relevé un par un.",
        b: ["Pièce 01 · La plateforme", "Pièce 02 · Le diagnostic"],
      },
      {
        t: "Nous cartographions, puis nous tranchons.",
        d: "Ce que les autres annoncent déjà, leur phrase exacte, et le terrain qu'ils laissent libre. Puis ce que votre moment affirme, dans l'ordre, avec ce que chaque choix coûte et ce qu'il débloque.",
        b: ["Pièce 03 · La carte", "Pièce 04 · Les décisions"],
      },
      {
        t: "Nous vous donnons les mots.",
        d: "Les playbooks, pour que tous ceux qui parlent pour vous racontent la même histoire, et le langage du moment : les mots à employer, ceux à retirer, les textes réécrits prêts à coller. C'est de là que part la mise en scène.",
        b: ["Pièce 05 · Les playbooks", "Pièce 06 · Le langage", "Livré au plus tard 21 jours après votre questionnaire complet"],
      },
      {
        t: "Pas satisfait ? Nous écrivons une V2.",
        d: "Deux tours de révision sont inclus. Si le document ne tape toujours pas juste, nous le réécrivons, sur simple demande. C'est écrit dans nos conditions de vente, pas seulement ici.",
        b: ["Deux tours de révision, dans les 30 jours qui suivent la livraison", "Puis une V2, sur simple demande", "Livré après le 21e jour : remboursement intégral, et le document vous reste"],
      },
    ],
  },
  en: {
    eyebrow: "Phase 1 · The story · how it runs",
    title: "Before the moment, we read, we compare, we settle.",
    hint: "Scroll",
    steps: [
      {
        t: "You answer, we go through everything.",
        d: "Day 0: you fill in the onboarding questionnaire, about an hour, at your own pace, and tell us what your moment has to achieve. We cross it with all your materials — website, social pages, reviews, past releases.",
        b: ["A complete questionnaire, saved as you go", "The cross-analysis of your materials and your competitors'"],
      },
      {
        t: "We write what you are.",
        d: "What you are, what you refuse and how you sound: the base of everything the moment will say. Then what the audience keeps of you today, counted and noted one by one.",
        b: ["Piece 01 · The platform", "Piece 02 · The diagnosis"],
      },
      {
        t: "We map, then we settle.",
        d: "What others already announce, their exact sentence, and the ground they leave free. Then what your moment stands for, in order, with what each choice costs and what it unlocks.",
        b: ["Piece 03 · The map", "Piece 04 · The decisions"],
      },
      {
        t: "We give you the words.",
        d: "The playbooks, so everyone who speaks for you tells the same story, and the language of the moment: the words to use, the ones to retire, the rewritten copy ready to paste. The staging starts from there.",
        b: ["Piece 05 · The playbooks", "Piece 06 · The language", "Delivered no later than 21 days after your completed questionnaire"],
      },
      {
        t: "Not satisfied? We write a V2.",
        d: "Two rounds of revisions are included. If the document still doesn't hit the mark, we rewrite it, on simple request. It is written into our terms of sale, not only here.",
        b: ["Two rounds of revisions, within 30 days of delivery", "Then a V2, on simple request", "Delivered after day 21: a full refund, and you keep the document"],
      },
    ],
  },
}

export function MethodSection({ lang }: { lang: Lang }) {
  const t = pick(T, lang)
  const rootRef = useRef<HTMLDivElement | null>(null)
  const pinRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const root = rootRef.current
    const pin = pinRef.current
    if (!root || !pin) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const canPin = !reduce && window.innerWidth >= 900

    let cleanupPin = () => {}
    if (canPin) {
      pin.classList.add("pin-on")
      const track = pin.querySelector<HTMLElement>(".story-track")
      if (track) {
        let ticking = false
        let geo = { top: 0, height: 0, vh: 0, max: 0 }
        const measure = () => {
          const r = pin.getBoundingClientRect()
          const max = Math.max(0, track.scrollWidth - track.clientWidth)
          geo = { top: r.top + window.scrollY, height: r.height, vh: window.innerHeight, max }
        }
        const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v)
        const run = () => {
          ticking = false
          const span = Math.max(1, geo.height - geo.vh)
          const p = clamp01((window.scrollY - geo.top) / span)
          const pAdj = clamp01((p - 0.12) / 0.83)
          track.style.transform = `translate3d(${-pAdj * geo.max}px,0,0)`
        }
        const onScroll = () => {
          if (!ticking) {
            ticking = true
            requestAnimationFrame(run)
          }
        }
        const onResize = () => {
          measure()
          run()
        }
        track.style.willChange = "transform"
        measure()
        run()
        window.addEventListener("scroll", onScroll, { passive: true })
        window.addEventListener("resize", onResize)
        document.fonts?.ready.then(onResize).catch(() => {})
        cleanupPin = () => {
          window.removeEventListener("scroll", onScroll)
          window.removeEventListener("resize", onResize)
          pin.classList.remove("pin-on")
          track.style.transform = ""
        }
      }
    }

    if (!canPin)
    root.querySelectorAll<HTMLElement>(".story").forEach((story) => {
      const track = story.querySelector<HTMLElement>(".story-track")
      if (!track) return
      const chapters = Array.from(track.children) as HTMLElement[]
      const dotsWrap = story.querySelector<HTMLElement>(".story-dots")
      const prev = story.querySelector<HTMLButtonElement>('[data-story="prev"]')
      const next = story.querySelector<HTMLButtonElement>('[data-story="next"]')
      if (!chapters.length) return

      const dots = chapters.map((_, i) => {
        const b = document.createElement("button")
        b.className = "story-dot" + (i === 0 ? " active" : "")
        b.setAttribute("aria-label", `${i + 1}`)
        b.addEventListener("click", () => scrollToIndex(i))
        dotsWrap?.appendChild(b)
        return b
      })

      const gap = parseFloat(getComputedStyle(track).columnGap) || 18
      const step = () => chapters[0].getBoundingClientRect().width + gap
      const currentIndex = () => Math.round(track.scrollLeft / step())
      function scrollToIndex(i: number) {
        i = Math.max(0, Math.min(chapters.length - 1, i))
        track!.scrollTo({ left: i * step(), behavior: reduce ? "auto" : "smooth" })
      }
      function update() {
        const i = currentIndex()
        dots.forEach((d, di) => d.classList.toggle("active", di === i))
        if (prev) prev.disabled = i <= 0
        if (next) next.disabled = i >= chapters.length - 1
      }
      prev?.addEventListener("click", () => scrollToIndex(currentIndex() - 1))
      next?.addEventListener("click", () => scrollToIndex(currentIndex() + 1))
      track.addEventListener("scroll", () => requestAnimationFrame(update), { passive: true })
      window.addEventListener("resize", update, { passive: true })
      update()

      let down = false
      let startX = 0
      let startLeft = 0
      let moved = false
      track.addEventListener("pointerdown", (e) => {
        if (e.pointerType === "touch") return
        down = true
        moved = false
        startX = e.clientX
        startLeft = track.scrollLeft
        track.classList.add("dragging")
        try {
          track.setPointerCapture(e.pointerId)
        } catch {
        }
      })
      track.addEventListener("pointermove", (e) => {
        if (!down) return
        const dx = e.clientX - startX
        if (Math.abs(dx) > 4) moved = true
        track.scrollLeft = startLeft - dx
      })
      const end = (e: PointerEvent) => {
        if (!down) return
        down = false
        track.classList.remove("dragging")
        try {
          track.releasePointerCapture(e.pointerId)
        } catch {
        }
        scrollToIndex(currentIndex())
      }
      track.addEventListener("pointerup", end)
      track.addEventListener("pointercancel", end)
      track.addEventListener(
        "click",
        (e) => {
          if (moved) e.preventDefault()
        },
        true,
      )
    })

    return () => cleanupPin()
  }, [lang])

  return (
    <section ref={rootRef} className="straw-method section">
      <ViewTracker name="method_section" />

      <style>{`
        .straw-method{
          --coral:#2256ff; --iris-soft:#5264ff; --ink-2:#0d0d0d;
          --line:rgba(255,255,255,.14); --line-soft:rgba(255,255,255,.07);
          --cream:#fff; --smoke:rgba(255,255,255,.55); --smoke-dim:rgba(255,255,255,.4);
          --grad:linear-gradient(108deg,var(--coral) 0%,#2e4eff 100%);
          --ease:cubic-bezier(.22,.61,.36,1);
        }
        .straw-method .wrap{ width:100%; max-width:1280px; margin-inline:auto; padding-inline:clamp(20px,5vw,64px); }
        .straw-method .eyebrow{ font-family:var(--font-mono); font-size:.72rem; font-weight:400; letter-spacing:.32em; text-transform:uppercase; color:var(--coral); }
        .straw-method .h-sec{ font-family:var(--font-serif); font-weight:700; text-transform:uppercase; font-size:clamp(2.1rem,5.5vw,4rem); line-height:1.04; letter-spacing:-.005em; color:var(--cream); }
        .straw-method .story-head{ display:flex; align-items:flex-end; justify-content:space-between; gap:1rem; flex-wrap:wrap; margin-bottom:clamp(2.5rem,5vw,4rem); }
        .straw-method .story-hint{ font-family:var(--font-mono); font-size:.72rem; letter-spacing:.18em; text-transform:uppercase; color:var(--smoke-dim); display:inline-flex; align-items:center; gap:.5rem; }
        .straw-method .story-hint .sw{ display:inline-block; animation:straw-swish 1.8s var(--ease) infinite; }
        @keyframes straw-swish{ 0%,100%{transform:translateX(0)} 50%{transform:translateX(6px)} }
        @media (prefers-reduced-motion: reduce){ .straw-method .story-hint .sw{ animation:none; } }
        .straw-method .story{ position:relative; margin-top:clamp(2rem,4vw,3rem); }
        .straw-method .story-track{ display:flex; gap:1.1rem; overflow-x:auto; scroll-snap-type:x mandatory; padding:.4rem .4rem 1.2rem; margin:-.4rem; cursor:grab; scrollbar-width:none; -webkit-overflow-scrolling:touch; }
        .straw-method .story-track::-webkit-scrollbar{ display:none; height:0; }
        .straw-method .story-track.dragging{ cursor:grabbing; scroll-snap-type:none; scroll-behavior:auto; }
        .straw-method .chapter{ scroll-snap-align:center; flex:0 0 min(86%,600px); min-height:clamp(330px,50vh,460px); border:1px solid var(--line-soft); border-radius:22px; padding:clamp(1.8rem,4vw,3rem); display:flex; flex-direction:column; position:relative; overflow:hidden; background:var(--ink-2); user-select:none; -webkit-user-select:none; transition:border-color .4s; }
        .straw-method .chapter::before{ content:""; position:absolute; inset:0; opacity:.6; pointer-events:none; }
        .straw-method .chapter:nth-child(1)::before{ background:radial-gradient(70% 70% at 85% 15%, rgba(34,86,255,.16), transparent 60%); }
        .straw-method .chapter:nth-child(2)::before{ background:radial-gradient(70% 70% at 15% 20%, rgba(46,78,255,.18), transparent 60%); }
        .straw-method .chapter:nth-child(3)::before{ background:radial-gradient(70% 70% at 85% 85%, rgba(133,156,255,.16), transparent 60%); }
        .straw-method .chapter:nth-child(4)::before{ background:radial-gradient(70% 70% at 20% 85%, rgba(46,78,255,.16), transparent 60%); }
        .straw-method .chapter:nth-child(5)::before{ background:radial-gradient(80% 80% at 50% 20%, rgba(34,86,255,.14), transparent 55%), radial-gradient(70% 70% at 60% 90%, rgba(46,78,255,.16), transparent 60%); }
        .straw-method .ch-list{ position:relative; margin-top:1.2rem; display:grid; gap:.5rem; max-width:44ch; }
        .straw-method .ch-list li{ font-family:var(--font-mono); font-size:.79rem; line-height:1.5; color:var(--cream); opacity:.78; display:flex; gap:.6rem; align-items:flex-start; list-style:none; }
        .straw-method .ch-list li::before{ content:"›"; color:var(--coral); flex:none; opacity:1; }
        .straw-method .chapter .idx{ position:relative; font-family:var(--font-mono); font-size:.74rem; letter-spacing:.26em; color:var(--coral); }
        .straw-method .chapter h3{ position:relative; font-family:var(--font-serif); font-weight:700; text-transform:uppercase; letter-spacing:-.02em; font-size:clamp(1.7rem,4.6vw,2.9rem); line-height:1.02; margin-top:auto; }
        .straw-method .chapter p{ position:relative; color:var(--smoke); margin-top:1.1rem; max-width:42ch; font-size:1.05rem; }
        .straw-method .story-nav{ display:flex; align-items:center; justify-content:space-between; margin-top:1.4rem; gap:1rem; }
        .straw-method .story-pin.pin-on{ height:300vh; }
        .straw-method .story-pin.pin-on .story-sticky{ position:sticky; top:0; height:100vh; display:flex; flex-direction:column; justify-content:center; overflow:hidden; }
        .straw-method .story-pin.pin-on .story-track{ overflow:visible; cursor:default; padding-bottom:0; scroll-snap-type:none; }
        .straw-method .story-pin.pin-on .chapter{ flex:0 0 min(600px,54vw); }
        .straw-method .story-pin.pin-on .story-arrows{ display:none; }
        .straw-method .story-pin.pin-on .story-hint .sw{ transform:rotate(90deg); animation:straw-swish-y 1.8s var(--ease) infinite; }
        @keyframes straw-swish-y{ 0%,100%{transform:rotate(90deg) translateX(0)} 50%{transform:rotate(90deg) translateX(6px)} }
        .straw-method .story-dots{ display:flex; gap:.5rem; align-items:center; }
        .straw-method .story-dot{ width:8px; height:8px; border-radius:50%; background:var(--line); border:0; padding:0; cursor:pointer; transition:width .35s var(--ease), background .35s; }
        .straw-method .story-dot.active{ background:var(--grad); width:26px; border-radius:100px; }
        .straw-method .story-arrows{ display:flex; gap:.6rem; }
        .straw-method .story-arrow{ width:46px; height:46px; border-radius:50%; border:1px solid var(--line); background:var(--ink-2); color:var(--cream); cursor:pointer; display:grid; place-items:center; font-size:1.1rem; transition:.3s; }
        .straw-method .story-arrow:hover:not([disabled]){ border-color:var(--coral); transform:translateY(-2px); }
        .straw-method .story-arrow[disabled]{ opacity:.3; cursor:default; }
        .straw-method .story-counter{ font-family:var(--font-mono); letter-spacing:.2em; color:var(--smoke-dim); font-size:clamp(.9rem,2vw,1.1rem); display:flex; align-items:baseline; gap:.5rem; }
        .straw-method .story-counter .sc-cur{ font-family:var(--font-serif); font-weight:800; font-size:clamp(2rem,4.5vw,3.2rem); line-height:1; background:var(--grad); -webkit-background-clip:text; background-clip:text; color:transparent; }
        .straw-method .chapter .art{ position:absolute; right:clamp(.8rem,3vw,2rem); top:clamp(.8rem,3vw,1.8rem); width:clamp(72px,13vw,120px); height:auto; opacity:.55; pointer-events:none; z-index:0; }
        .straw-method .chapter > *:not(.art){ position:relative; z-index:1; }
        .straw-method .chapter h3, .straw-method .chapter p, .straw-method .chapter ul{ padding-right:clamp(84px,15vw,140px); }
        @media (max-width:640px){
          .straw-method .chapter .art{ opacity:.35; }
          .straw-method .chapter h3, .straw-method .chapter p, .straw-method .chapter ul{ padding-right:0; }
        }
        .straw-method .chapter .art .st{ stroke:var(--coral); stroke-width:2.4; fill:none; stroke-linecap:round; stroke-linejoin:round; }
        .straw-method .chapter .art .st2{ stroke:var(--iris-soft); stroke-width:2.4; fill:none; stroke-linecap:round; stroke-linejoin:round; }
        .straw-method .chapter .art .fl{ fill:var(--coral); }
        .straw-method .chapter .art .fl2{ fill:var(--iris-soft); }
      `}</style>

      <div ref={pinRef} className="story-pin">
        <div className="story-sticky">
          <div className="wrap story">
            <div className="story-head">
              <div>
                <span className="eyebrow">{t.eyebrow}</span>
                <h2 className="h-sec" style={{ marginTop: "1.1rem" }}>
                  {t.title}
                </h2>
              </div>
              <span className="story-hint">
                {t.hint}
                <span aria-hidden="true" className="sw">
                  →
                </span>
              </span>
            </div>

            <div className="story-track">
              {t.steps.map((s, i) => (
                <article className="chapter" key={s.t}>
                  <svg aria-hidden="true" className="art" viewBox="0 0 120 120">
                    {STEPS[i].icon}
                  </svg>
                  <span className="idx">{STEPS[i].i}</span>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                  <ul className="ch-list">
                    {s.b.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="story-nav">
              <div className="story-dots" />
              <div className="story-arrows">
                <button aria-label="Précédent" className="story-arrow" data-story="prev">
                  ←
                </button>
                <button aria-label="Suivant" className="story-arrow" data-story="next">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
