import { PRIX, CAPACITE, OFFRE_PRINCIPALE } from "@/lib/config"
import type { Copy } from "@/lib/copy"
import type { Lang } from "@/lib/i18n"
import { Reveal } from "./reveal"

export function GrilleOffres({ lang, t }: { lang: Lang; t: Copy }) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {t.offres.tiers.map((o, i) => {
        const vedette = o.id === OFFRE_PRINCIPALE
        return (
          <Reveal key={o.id} delay={i * 90} className="h-full">
            <div className={`${vedette ? "carte-active" : "carte"} relative flex h-full flex-col`}>
              {vedette && (
                <span className="absolute -top-[11px] left-6 bg-cobalt px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.22em] text-white">
                  {t.offre.leplusChoisi}
                </span>
              )}

              <p className="font-mono text-[11.5px] uppercase tracking-[0.26em] text-craie-80">{o.nom}</p>

              <p className="mt-5 flex items-baseline gap-1.5">
                <span className="prix text-[2.6rem] leading-none">{PRIX[o.id]} €</span>
                <span className="font-mono text-[12px] text-craie-38">{t.offre.parMois}</span>
              </p>

              <p className="titre-3 mt-5 text-craie">{o.promesse}</p>

              <ul className="mt-7 space-y-3 border-t border-filet pt-7">
                {o.inclus.map((x) => (
                  <li key={x} className="flex gap-3">
                    <span aria-hidden className="mt-[9px] h-px w-3 shrink-0 bg-cobalt-vif" />
                    <span className="text-[14.5px] leading-[1.6] text-craie-65">{x}</span>
                  </li>
                ))}
              </ul>

              <p className="corps mt-auto pt-8 text-[13.5px] text-craie-50">{o.pour}</p>

              <a
                href={`/${lang}?offre=${o.id}#candidature`}
                className={`bouton mt-6 justify-center ${vedette ? "bouton-plein" : "bouton-vide"}`}
              >
                {o.cta}
              </a>
            </div>
          </Reveal>
        )
      })}
    </div>
  )
}

export function Comparatif({ t }: { t: Copy }) {
  const principal = t.offres.tiers.find((o) => o.id === OFFRE_PRINCIPALE)!

  return (
    <Reveal>
      <div className="overflow-x-auto border border-filet">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <thead>
            <tr className="border-b border-filet-fort">
              <th className="etiquette px-5 py-4 font-normal">{t.offre.comparatifTitre}</th>
              {t.offres.tiers.map((o) => (
                <th
                  key={o.id}
                  className={`px-5 py-4 font-mono text-[11px] uppercase tracking-[0.2em] font-normal ${
                    o.id === OFFRE_PRINCIPALE ? "text-cobalt-vif" : "text-craie-50"
                  }`}
                >
                  {o.nom}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {t.offres.comparatif.map((r) => (
              <tr key={r.ligne} className="border-b border-filet last:border-0">
                <td className="px-5 py-4 text-[14px] text-craie-80">{r.ligne}</td>
                {([r.advisor, r.development, r.partner] as const).map((v, i) => (
                  <td
                    key={i}
                    className={`px-5 py-4 text-[13.5px] ${
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
        {t.offre.comparatifNote1}
        <span className="text-craie">{principal.nom}</span>
        {t.offre.comparatifNote2}
        {CAPACITE}
        {t.offre.comparatifNote3}
      </p>
    </Reveal>
  )
}
