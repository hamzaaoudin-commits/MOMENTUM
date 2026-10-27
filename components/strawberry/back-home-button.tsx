"use client"

import { LocaleLink as Link } from "@/components/locale-link"
import { useLang } from "@/lib/i18n"
import type { Lang } from "@/lib/lang"

const LABEL: Record<Lang, string> = {
  fr: "Accueil",
  en: "Home",
}

export function BackHomeButton({ label, href = "/" }: { label?: string; href?: string }) {
  const { lang } = useLang()

  return (
    <div className="fixed left-[clamp(1.5rem,4vw,4rem)] top-[88px] z-[90] hidden md:block">
      <Link
        href={href}
        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-ink/70 px-3.5 py-2 font-sans text-[12px] tracking-[0.04em] text-chalk-65 no-underline backdrop-blur-xl transition-colors hover:border-brand hover:text-white"
      >
        <span aria-hidden className="text-brand">←</span>
        {label ?? LABEL[lang] ?? LABEL.fr}
      </Link>
    </div>
  )
}
