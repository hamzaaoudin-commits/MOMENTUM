import { CAPACITE, PLACES_OUVERTES, GARANTIE, OFFRES, OFFRE_PRINCIPALE } from "@/lib/config"
import { Reveal } from "./reveal"

/**
 * Rareté quantitative, rendue littérale.
 *
 * Une phrase (« je ne prends que six artistes ») s'oublie ; six créneaux dont
 * quatre pleins se lisent en un dixième de seconde et ne s'oublient pas. Le
 * chiffre vient de lib/config.ts et doit rester vrai — une rareté démentie
 * coûte plus cher que pas de rareté du tout.
 */
export function Places({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "flex items-center gap-3.5" : "flex flex-wrap items-center gap-x-5 gap-y-3"}>
      <span className="flex gap-1.5" role="img" aria-label={`${PLACES_OUVERTES} places ouvertes sur ${CAPACITE}`}>
        {Array.from({ length: CAPACITE }, (_, i) => (
          <span
            key={i}
            aria-hidden
            className={`block h-[13px] w-[5px] ${i < CAPACITE - PLACES_OUVERTES ? "bg-craie-24" : "bg-craie"}`}
          />
        ))}
      </span>
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-craie-65">
        {PLACES_OUVERTES} place{PLACES_OUVERTES > 1 ? "s" : ""} ouverte{PLACES_OUVERTES > 1 ? "s" : ""} sur {CAPACITE}
      </span>
    </div>
  )
}

/**
 * La garantie, en aplat bleu.
 *
 * C'est le seul endroit de la page où l'accent envahit tout le champ. Le choix
 * n'est pas décoratif : c'est le seul bloc où le risque change de camp, et
 * c'est aussi celui qu'un lecteur en train d'hésiter sur un prix doit voir
 * sans le chercher. Une inversion complète du contraste, une fois, à
 * l'endroit exact où la décision se prend.
 *
 * Ne pas dupliquer cet aplat ailleurs : c'est son unicité qui produit l'effet.
 */
export function Garantie() {
  return (
    <div className="aplat p-8 md:p-12">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <p className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-[rgba(6,7,10,0.62)]">
          RISQUE DE VOTRE CÔTÉ
        </p>
        <p className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-[rgba(6,7,10,0.62)]">AUCUN</p>
      </div>
      <h3 className="titre-2 mt-6 max-w-[16ch]">{GARANTIE.titre}</h3>
      <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-[rgba(6,7,10,0.82)]">{GARANTIE.texte}</p>
    </div>
  )
}

/**
 * L'offre unique de la page d'accueil.
 *
 * La règle de l'Un est explicite : une seule offre visible, une seule action.
 * Trois cartes côte à côte transforment un prospect convaincu en comparateur,
 * et un comparateur ne décide pas — il reporte. Les trois niveaux existent
 * toujours, mais sur /offres, pour ceux qui les cherchent.
 */
export function OffreUnique() {
  const o = OFFRES.find((x) => x.id === OFFRE_PRINCIPALE)!

  return (
    <Reveal>
      <div className="grid gap-px overflow-hidden border border-filet-cobalt bg-filet lg:grid-cols-[1.15fr_0.85fr]">
        <div className="bg-encre-haute p-8 md:p-11">
          <p className="index">L&rsquo;ACCOMPAGNEMENT</p>
          <h3 className="titre-2 mt-5">{o.nom}</h3>
          <p className="corps mt-5 max-w-lg text-[16px]">{o.promesse}</p>

          <ul className="mt-9 space-y-3.5 border-t border-filet pt-9">
            {o.inclus.map((x) => (
              <li key={x} className="flex gap-3.5">
                <span aria-hidden className="mt-[10px] h-px w-3.5 shrink-0 bg-cobalt-vif" />
                <span className="text-[15px] font-light leading-[1.6] text-craie-80">{x}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col bg-surface p-8 md:p-11">
          <p className="etiquette">CE QUE ÇA COÛTE</p>
          <p className="mt-4 flex items-baseline gap-2">
            <span className="prix text-[3.2rem] leading-none">{o.prix} €</span>
            <span className="font-mono text-[12px] text-craie-38">/ mois</span>
          </p>
          <p className="corps mt-5 text-[14px]">
            Sans engagement de durée. Aucun pourcentage sur vos droits, vos revenus ou vos futurs contrats.
          </p>

          <div className="mt-8 border-t border-filet pt-8">
            <Places />
          </div>

          <a href="#candidature" className="bouton bouton-plein mt-8 justify-center">
            Candidater ↓
          </a>
          <p className="etiquette mt-4 leading-relaxed">
            Réponse sous 72 h · Premier cycle remboursé si vous n&rsquo;en tires rien
          </p>

          <p className="corps mt-auto pt-9 text-[13px]">
            Deux autres niveaux existent, à 149 € et 499 €&nbsp;: le comparatif est juste en dessous. Mais si vous
            hésites, celui-ci est le bon.
          </p>
        </div>
      </div>
    </Reveal>
  )
}
