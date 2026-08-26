import Link from "next/link"
import { OFFRES, COMPARATIF, CAPACITE, type Offre } from "@/lib/config"
import { Reveal } from "./reveal"

function Carte({ o, i }: { o: Offre; i: number }) {
  return (
    <Reveal delay={i * 90} className="h-full">
      <div className={`${o.vedette ? "carte-active" : "carte"} relative flex h-full flex-col`}>
        {o.vedette && (
          <span className="absolute -top-[11px] left-6 bg-cobalt px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.22em] text-white">
            Le plus choisi
          </span>
        )}

        <p className="font-mono text-[11.5px] uppercase tracking-[0.26em] text-craie-80">{o.nom}</p>

        <p className="mt-5 flex items-baseline gap-1.5">
          <span className="prix text-[2.6rem] leading-none">{o.prix} €</span>
          <span className="font-mono text-[12px] text-craie-38">/ mois</span>
        </p>

        <p className="titre-3 mt-5 text-craie">{o.promesse}</p>

        <ul className="mt-7 space-y-3 border-t border-filet pt-7">
          {o.inclus.map((x) => (
            <li key={x} className="flex gap-3">
              <span aria-hidden className="mt-[9px] h-px w-3 shrink-0 bg-cobalt" />
              <span className="text-[14.5px] font-light leading-[1.6] text-craie-65">{x}</span>
            </li>
          ))}
        </ul>

        <p className="corps mt-auto pt-8 text-[13.5px] italic text-craie-50">{o.pour}</p>

        <Link
          href={`/candidature?offre=${o.id}`}
          className={`bouton mt-6 justify-center ${o.vedette ? "bouton-plein" : "bouton-vide"}`}
        >
          {o.cta}
        </Link>
      </div>
    </Reveal>
  )
}

export function GrilleOffres() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {OFFRES.map((o, i) => (
        <Carte key={o.id} o={o} i={i} />
      ))}
    </div>
  )
}

export function Comparatif() {
  return (
    <Reveal>
      <div className="overflow-x-auto border border-filet">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <thead>
            <tr className="border-b border-filet-fort">
              <th className="etiquette px-5 py-4 font-normal">Ce que tu obtiens</th>
              {OFFRES.map((o) => (
                <th
                  key={o.id}
                  className={`px-5 py-4 font-mono text-[11px] uppercase tracking-[0.2em] font-normal ${
                    o.vedette ? "text-cobalt-vif" : "text-craie-50"
                  }`}
                >
                  {o.nom}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPARATIF.map((r) => (
              <tr key={r.ligne} className="border-b border-filet last:border-0">
                <td className="px-5 py-4 text-[14px] font-light text-craie-80">{r.ligne}</td>
                {([r.advisor, r.development, r.partner] as const).map((v, i) => (
                  <td
                    key={i}
                    className={`px-5 py-4 text-[13.5px] font-light ${
                      v === "—" ? "text-craie-24" : i === 1 ? "text-craie" : "text-craie-65"
                    }`}
                  >
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="corps mt-6 max-w-2xl text-[14px]">
        La plupart des artistes devraient commencer par <span className="text-craie">Artist Development</span>. C'est le
        niveau où l'accompagnement produit des résultats visibles sans exiger le budget d'une équipe. Je n'accompagne que{" "}
        {CAPACITE} artistes à la fois — quand les places sont prises, la candidature reste en liste.
      </p>
    </Reveal>
  )
}
