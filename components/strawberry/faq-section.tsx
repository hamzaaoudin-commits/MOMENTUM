"use client"

import { useState } from "react"
import { useLang, type Lang } from "@/lib/i18n"

export type FaqEntry = { q: string; a: string; icon?: string }
export type FaqSet = Record<Lang, FaqEntry[]>

const HEAD: Record<Lang, { kicker: string; h2a: string; h2b: string }> = {
  en: { kicker: "FAQ", h2a: "Everything you need", h2b: "to decide." },
  fr: { kicker: "FAQ", h2a: "Tout ce qu'il faut", h2b: "pour décider." },
}

export function FaqSection({ faqs }: { faqs: FaqSet }) {
  const { lang } = useLang()
  const [open, setOpen] = useState<number | null>(null)
  const head = HEAD[lang] ?? HEAD.en
  const items = faqs[lang] ?? faqs.en

  return (
    <section className="section relative overflow-hidden bg-ink text-white">
      <div className="glow-center" aria-hidden />

      <div className="relative mx-auto w-full max-w-[800px]">
        <div className="mb-14 text-center">
          <div className="kicker mb-6">{head.kicker}</div>
          <h2 className="h-section">
            {head.h2a} <span className="text-gradient">{head.h2b}</span>
          </h2>
        </div>

        <div className="flex flex-col">
          {items.map((faq, i) => {
            const isOpen = open === i
            return (
              <div key={faq.q} className="overflow-hidden border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-trigger-${i}`}
                  className="group flex w-full items-center justify-between gap-4 border-none bg-transparent py-7 text-left"
                >
                  <span className="flex items-center gap-4">
                    <span className="hidden h-8 w-8 shrink-0 items-center justify-center border border-white/10 text-brand transition-colors duration-300 group-hover:border-brand/40 sm:flex">
                      <FaqIcon kind={faq.icon} />
                    </span>
                    <span className="font-serif text-[clamp(1rem,1.8vw,1.25rem)] font-semibold leading-snug tracking-[-0.01em] text-white transition-colors duration-300 group-hover:text-brand">
                      {faq.q}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className={`shrink-0 text-[22px] text-brand transition-transform duration-300 group-hover:scale-110 ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>

                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  className="grid transition-[grid-template-rows] duration-400 ease-[cubic-bezier(.22,.68,0,1.2)]"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="border-l-2 border-brand py-0.5 pb-7 pl-4">
                      <p className="m-0 font-sans text-[clamp(0.95rem,1.2vw,1.05rem)] leading-[1.75] text-chalk-65">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  )
}

function FaqIcon({ kind }: { kind?: string }) {
  const props = { viewBox: "0 0 24 24", width: 16, height: 16, "aria-hidden": true as const }
  const s = { stroke: "currentColor", strokeWidth: 1.4, fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const }

  switch (kind) {
    case "person":
      return <svg {...props}><circle cx="12" cy="8" r="3.2" {...s} /><path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" {...s} /></svg>
    case "price":
      return <svg {...props}><path d="M4 12l7-7h6a1 1 0 0 1 1 1v6l-7 7a1 1 0 0 1-1.4 0l-5.6-5.6a1 1 0 0 1 0-1.4z" {...s} /><circle cx="15" cy="9" r="1.2" fill="currentColor" /></svg>
    case "clock":
      return <svg {...props}><circle cx="12" cy="12" r="8.5" {...s} /><path d="M12 7v5l3.5 2" {...s} /></svg>
    case "calendar":
      return <svg {...props}><rect x="4" y="5" width="16" height="15" rx="1" {...s} /><path d="M4 10h16M8 3v4M16 3v4" {...s} /></svg>
    case "eye":
      return <svg {...props}><path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12z" {...s} /><circle cx="12" cy="12" r="2.6" {...s} /></svg>
    case "steps":
      return <svg {...props}><path d="M4 18h4v-4h4V9h4V5" {...s} /></svg>
    case "shield":
      return <svg {...props}><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" {...s} /><path d="M9 12l2 2 4-4" {...s} /></svg>
    case "lock":
      return <svg {...props}><rect x="5" y="11" width="14" height="9" rx="1.5" {...s} /><path d="M8 11V8a4 4 0 0 1 8 0v3" {...s} /></svg>
    case "globe":
      return <svg {...props}><circle cx="12" cy="12" r="8.5" {...s} /><path d="M3.5 12h17M12 3.5c2.6 2.4 4 5.4 4 8.5s-1.4 6.1-4 8.5c-2.6-2.4-4-5.4-4-8.5s1.4-6.1 4-8.5z" {...s} /></svg>
    case "cpu":
      return <svg {...props}><rect x="7" y="7" width="10" height="10" rx="1" {...s} /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.5 4.5l2 2M17.5 17.5l2 2M19.5 4.5l-2 2M6.5 17.5l-2 2" {...s} /></svg>
    case "check":
      return <svg {...props}><circle cx="12" cy="12" r="8.5" {...s} /><path d="M8.5 12.5l2.4 2.4L16 10" {...s} /></svg>
    case "box":
      return <svg {...props}><path d="M4 8l8-4.5L20 8v8l-8 4.5L4 16z" {...s} /><path d="M4 8l8 4.5L20 8M12 12.5V21" {...s} /></svg>
    case "users":
      return <svg {...props}><circle cx="9" cy="8" r="2.8" {...s} /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" {...s} /><circle cx="17" cy="9" r="2.2" {...s} opacity="0.6" /><path d="M15.5 20c.2-2.6 1.9-4.6 4-5.1" {...s} opacity="0.6" /></svg>
    case "xcircle":
      return <svg {...props}><circle cx="12" cy="12" r="8.5" {...s} /><path d="M9.5 9.5l5 5M14.5 9.5l-5 5" {...s} /></svg>
    case "key":
      return <svg {...props}><circle cx="8" cy="15" r="3.5" {...s} /><path d="M10.5 12.5L19 4M16 7l2 2M13 10l2 2" {...s} /></svg>
    case "compare":
      return <svg {...props}><path d="M7 4v16M17 4v16" {...s} /><path d="M4 9h6M14 15h6" {...s} /></svg>
    case "arrowup":
      return <svg {...props}><path d="M12 19V5M6 11l6-6 6 6" {...s} /></svg>
    case "list":
      return <svg {...props}><path d="M8 6h12M8 12h12M8 18h12" {...s} /><circle cx="4" cy="6" r="1" fill="currentColor" /><circle cx="4" cy="12" r="1" fill="currentColor" /><circle cx="4" cy="18" r="1" fill="currentColor" /></svg>
    case "phoneoff":
      return <svg {...props}><path d="M5 4l15 15" {...s} /><path d="M7 3l3 1 1 3-2 2c1 2 2.5 3.5 4.5 4.5l2-2 3 1 1 3c-1 1-2 1.5-3.5 1.2C11.5 15.5 8.5 12.5 6.8 8.5 6.5 7 7 6 7 6z" {...s} /></svg>
    case "wallet":
      return <svg {...props}><rect x="3" y="6" width="18" height="13" rx="1.5" {...s} /><path d="M3 10h18" {...s} /><circle cx="16.5" cy="14" r="1" fill="currentColor" /></svg>
    case "layers":
      return <svg {...props}><path d="M12 3l9 5-9 5-9-5z" {...s} /><path d="M3 13l9 5 9-5" {...s} opacity="0.6" /></svg>
    case "server":
      return <svg {...props}><rect x="4" y="4" width="16" height="6" rx="1" {...s} /><rect x="4" y="14" width="16" height="6" rx="1" {...s} /><circle cx="7.5" cy="7" r="0.8" fill="currentColor" /><circle cx="7.5" cy="17" r="0.8" fill="currentColor" /></svg>
    default:
      return <svg {...props}><circle cx="12" cy="12" r="2" fill="currentColor" /></svg>
  }
}
