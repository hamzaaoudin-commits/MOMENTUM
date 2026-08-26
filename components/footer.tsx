import Link from "next/link"
import { CONTACT, CAPACITE } from "@/lib/config"

export function Footer() {
  return (
    <footer className="border-t border-filet bg-encre-basse">
      <div className="px-marge cadre py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="text-[15px] font-extrabold uppercase tracking-[0.26em] text-craie">MOMENTUM</p>
            <p className="corps mt-4 max-w-xs">
              Conseil stratégique pour artistes indépendants. On ne travaille pas une sortie à la fois&nbsp;: on
              travaille un arc. {CAPACITE} artistes accompagnés à la fois, depuis {CONTACT.ville}.
            </p>
            <p className="etiquette mt-6">Aucun pourcentage. Aucune promesse de viralité.</p>
          </div>

          <div>
            <p className="etiquette mb-4">La page</p>
            <ul className="space-y-2.5">
              {[
                ["#diagnostic", "Diagnostic gratuit"],
                ["#methode", "La méthode"],
                ["#offres", "L'offre"],
                ["#qui", "Qui te parle"],
                ["#candidature", "Candidater"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-[14px] text-craie-50 transition-colors hover:text-craie">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="etiquette mb-4">Contact</p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-[14px] font-light text-craie-50 transition-colors hover:text-craie"
            >
              {CONTACT.email}
            </a>
            <ul className="mt-6 space-y-2.5">
              <li>
                <Link href="/mentions-legales" className="text-[13px] font-light text-craie-38 transition-colors hover:text-craie-65">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-filet pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="etiquette">© {new Date().getFullYear()} MOMENTUM</p>
          <p className="etiquette">Un conseiller, pas un manager.</p>
        </div>
      </div>
    </footer>
  )
}
