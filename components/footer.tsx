import Link from "next/link"
import { CONTACT, CAPACITE } from "@/lib/config"
import type { Lang } from "@/lib/i18n"
import type { Copy } from "@/lib/copy"

export function Footer({ lang, t }: { lang: Lang; t: Copy }) {
  return (
    <footer className="border-t border-filet bg-encre-basse">
      <div className="px-marge cadre py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr]">
          <div>
            <p className="text-[15px] font-extrabold uppercase tracking-[0.26em] text-craie">MOMENTUM</p>
            <p className="corps mt-4 max-w-sm">
              {t.pied.baseline}
              {t.pied.baseline2a}
              {CAPACITE}
              {t.pied.baseline2b}
              {CONTACT.ville}.
            </p>
            <p className="etiquette mt-6">{t.pied.sansPourcentage}</p>
          </div>

          <div>
            <p className="etiquette mb-4">{t.pied.contact}</p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-[14px] text-craie-50 transition-colors hover:text-craie"
            >
              {CONTACT.email}
            </a>
            <ul className="mt-6 space-y-2.5">
              <li>
                <Link
                  href={`/${lang}/mentions-legales`}
                  className="text-[13px] text-craie-38 transition-colors hover:text-craie-65"
                >
                  {t.pied.mentions}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-filet pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="etiquette">© {new Date().getFullYear()} MOMENTUM</p>
          <p className="etiquette">{t.pied.signature}</p>
        </div>
      </div>
    </footer>
  )
}
