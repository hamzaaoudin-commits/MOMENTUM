import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Candidature reçue",
  robots: { index: false, follow: false },
}

export default function Merci() {
  return (
    <section className="bloc flex min-h-[70vh] items-center pt-[150px]">
      <div className="cadre-sm">
        <p className="index">CANDIDATURE REÇUE</p>
        <h1 className="titre-2 mt-6">Je vous réponds sous 72 heures.</h1>
        <p className="corps mt-7">
          Je lis chaque candidature moi-même et j'écoute ce que vous m'as envoyé avant de répondre. Si votre profil
          correspond, on cale un premier échange. Si ce n'est pas le bon moment, je vous le dis franchement — et je vous dis
          pourquoi.
        </p>
        <Link href="/" className="bouton bouton-vide mt-10">
          Retour à l'accueil
        </Link>
      </div>
    </section>
  )
}
