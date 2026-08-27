import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { isLang } from "@/lib/i18n"
import { getCopy } from "@/lib/copy"

export const metadata: Metadata = { robots: { index: false, follow: false } }

export default async function Merci({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: brut } = await params
  if (!isLang(brut)) notFound()
  const t = getCopy(brut)

  return (
    <section className="bloc flex min-h-[70vh] items-center pt-[150px]">
      <div className="cadre-sm">
        <p className="index">{t.formulaire.recuLabel}</p>
        <h1 className="titre-2 mt-6">{t.formulaire.recuTitre}</h1>
        <p className="corps mt-7">{t.formulaire.recuTexte}</p>
        <Link href={`/${brut}`} className="bouton bouton-vide mt-10">
          {t.erreur404.retour}
        </Link>
      </div>
    </section>
  )
}
