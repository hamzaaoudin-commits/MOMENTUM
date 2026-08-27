import { CAPACITE, PLACES_OUVERTES, PRIX, OFFRE_PRINCIPALE } from "@/lib/config"
import { remplir, type Copy } from "@/lib/copy"
import { Reveal } from "./reveal"

/**
 * Rareté quantitative, rendue littérale.
 *
 * Une phrase (« je ne prends que six artistes ») s'oublie ; six créneaux dont
 * quatre pleins se lisent en un dixième de seconde et ne s'oublient pas. Le
 * chiffre vient de lib/config.ts et doit rester vrai — une rareté démentie
 * coûte plus cher que pas de rareté du tout.
 */
export function Places({ t, compact = false }: { t: Copy; compact?: boolean }) {
  const libelle = remplir(t.places.ouvertes, { n: PLACES_OUVERTES, total: CAPACITE })
  return (
    <div className={compact ? "flex items-center gap-3.5" : "flex flex-wrap items-center gap-x-5 gap-y-3"}>
      <span className="flex gap-1.5" role="img" aria-label={libelle}>
        {Array.from({ length: CAPACITE }, (_, i) => (
          <span
            key={i}
            aria-hidden
            className={`block h-[13px] w-[5px] ${i < CAPACITE - PLACES_OUVERTES ? "bg-craie-24" : "bg-craie"}`}
          />
        ))}
      </span>
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-craie-65">{libelle}</span>
    </div>
  )
}

/**
 * La garantie, en aplat bleu.
 *
 * C'est le seul endroit de la page où l'accent envahit tout le champ. Le choix
 * n'est pas décoratif : c'est le seul bloc où le risque change de camp, et
 * c'est aussi celui qu'un lecteur en train d'hésiter sur un prix doit voir
 * sans le chercher.
 *
 * Ne pas dupliquer cet aplat ailleurs : c'est son unicité qui produit l'effet.
 */
export function Garantie({ t }: { t: Copy }) {
  return (
    <div className="aplat p-8 md:p-12">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <p className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-[rgba(6,7,10,0.62)]">
          {t.garantie.risqueLabel}
        </p>
        <p className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-[rgba(6,7,10,0.62)]">
          {t.garantie.risqueValeur}
        </p>
      </div>
      <h3 className="titre-2 mt-6 max-w-[16ch]">{t.garantie.titre}</h3>
      <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-[rgba(6,7,10,0.82)]">{t.garantie.texte}</p>
    </div>
  )
}

/**
 * L'offre unique.
 *
 * La règle de l'Un est explicite : une seule offre visible, une seule action.
 * Trois cartes côte à côte transforment un prospect convaincu en comparateur,
 * et un comparateur ne décide pas — il reporte. Les trois niveaux existent
 * toujours, repliés juste en dessous.
 */
export function OffreUnique({ t }: { t: Copy }) {
  const o = t.offres.tiers.find((x) => x.id === OFFRE_PRINCIPALE)!

  return (
    <Reveal>
      <div className="grid gap-px overflow-hidden border border-filet-cobalt bg-filet lg:grid-cols-[1.15fr_0.85fr]">
        <div className="bg-encre-haute p-8 md:p-11">
          <p className="index">{t.offre.enTete}</p>
          <h3 className="titre-2 mt-5">{o.nom}</h3>
          <p className="corps mt-5 max-w-lg text-[16px]">{o.promesse}</p>

          <ul className="mt-9 space-y-3.5 border-t border-filet pt-9">
            {o.inclus.map((x) => (
              <li key={x} className="flex gap-3.5">
                <span aria-hidden className="mt-[10px] h-px w-3.5 shrink-0 bg-cobalt-vif" />
                <span className="text-[15px] leading-[1.6] text-craie-80">{x}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col bg-surface p-8 md:p-11">
          <p className="etiquette">{t.offre.coutLabel}</p>
          <p className="mt-4 flex items-baseline gap-2">
            <span className="prix text-[3.2rem] leading-none">{PRIX[o.id]} €</span>
            <span className="font-mono text-[12px] text-craie-38">{t.offre.parMois}</span>
          </p>
          <p className="corps mt-5 text-[14px]">{t.offre.sansEngagement}</p>

          <div className="mt-8 border-t border-filet pt-8">
            <Places t={t} />
          </div>

          <a href="#candidature" className="bouton bouton-plein mt-8 justify-center">
            {t.offre.cta}
          </a>
          <p className="etiquette mt-4 leading-relaxed">{t.offre.sousCta}</p>

          <p className="corps mt-auto pt-9 text-[13px]">{t.offre.autresNiveaux}</p>
        </div>
      </div>
    </Reveal>
  )
}
