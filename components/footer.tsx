import Link from "next/link"
import { CONTACT, CAPACITE } from "@/lib/config"

export function Footer() {
  return (
    <footer className="border-t border-filet bg-encre-basse">
      <div className="px-marge cadre py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-mono text-[15px] font-medium tracking-[0.34em] text-craie">MOMENTUM</p>
            <p className="corps mt-4 max-w-xs">
              Conseil stratégique pour artistes indépendants. {CAPACITE} artistes accompagnés à la fois, depuis {CONTACT.ville}.
            </p>
            <p className="etiquette mt-6">Pas de pourcentage. Pas de promesse de viralité.</p>
          </div>

          <div>
            <p className="etiquette mb-4">Le site</p>
            <ul className="space-y-2.5">
              {[
                ["/methode", "Le cycle"],
                ["/offres", "Les offres"],
                ["/a-propos", "Qui je suis"],
                ["/candidature", "Candidater"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-[14px] font-light text-craie-50 transition-colors hover:text-craie">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="etiquette mb-4">Contact</p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-[14px] font-light text-craie-50 transition-colors hover:text-cuivre-vif"
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
