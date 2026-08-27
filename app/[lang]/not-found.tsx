import Link from "next/link"
import { FR } from "@/lib/copy-fr"

export default function Introuvable() {
  const t = FR.erreur404
  return (
    <section className="bloc flex min-h-[70vh] items-center pt-[150px]">
      <div className="cadre-sm">
        <p className="index">{t.label}</p>
        <h1 className="titre-2 mt-6">{t.titre}</h1>
        <p className="corps mt-6">{t.texte}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/fr" className="bouton bouton-vide">
            {t.retour}
          </Link>
          <Link href="/fr#candidature" className="bouton bouton-plein">
            {t.candidater}
          </Link>
        </div>
      </div>
    </section>
  )
}
