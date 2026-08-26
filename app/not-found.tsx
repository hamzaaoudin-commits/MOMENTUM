import Link from "next/link"

export default function Introuvable() {
  return (
    <section className="bloc flex min-h-[70vh] items-center pt-[150px]">
      <div className="cadre-sm">
        <p className="index">ERREUR 404</p>
        <h1 className="titre-2 mt-6">Cette page n'existe pas.</h1>
        <p className="corps mt-6">
          Le lien est peut-être ancien, ou l'adresse mal recopiée. Tout le site tient en quatre pages.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="bouton bouton-vide">Accueil</Link>
          <Link href="/offres" className="bouton bouton-vide">Les offres</Link>
          <Link href="/candidature" className="bouton bouton-plein">Parler de mon projet</Link>
        </div>
      </div>
    </section>
  )
}
