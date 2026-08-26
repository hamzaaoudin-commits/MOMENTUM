# MOMENTUM

Site de MOMENTUM — conseil stratégique pour artistes indépendants.

**Stack** : Next.js 16 (App Router, Turbopack) · React 19 · Tailwind CSS v4 · TypeScript.
Même architecture que Strawberry-Prod, identité visuelle distincte.

## Mise en ligne

1. Créer un dépôt GitHub `momentum`, y déposer ce dossier, pousser sur `main`.
2. Sur Vercel : *New Project* → importer le dépôt → aucun réglage à modifier.
3. Ajouter la variable d'environnement suivante (Settings → Environment Variables) :

   | Nom | Valeur | Portée |
   |---|---|---|
   | `FORMSPREE_ID` | l'identifiant du formulaire Formspree (ex. `xyzabcde`) | Production + Preview |

   Sans cette variable, `/api/candidature` renvoie une erreur explicite au lieu de faire semblant d'envoyer.
4. Brancher le domaine.

## Ce qu'il reste à compléter avant la mise en ligne

- `app/mentions-legales/page.tsx` — tous les champs entre crochets (forme juridique, SIREN, adresse).
- `lib/config.ts` — `CONTACT.email`, `CONTACT.instagram`, `CAPACITE`.
- Une image Open Graph (`public/og.jpg`, 1200×630) référencée dans `app/layout.tsx`.

## Où modifier quoi

| Je veux changer… | Fichier |
|---|---|
| Un prix, le contenu d'une formule, le nombre de places | `lib/config.ts` |
| Les couleurs, les typos, les boutons, l'espacement | `app/globals.css` |
| Le texte de la page d'accueil | `app/page.tsx` |
| Le cycle en détail | `app/methode/page.tsx` |
| La bio | `app/a-propos/page.tsx` |
| Les champs du formulaire | `components/formulaire.tsx` + `app/api/candidature/route.ts` |

## Identité — « BLEU DE TRAVAIL »

Deux accents, deux rôles, jamais mélangés :

- **Cobalt `#3B6FD4`** — la structure : direction, méthode, index, filets, liens.
- **Cuivre `#C77B52`** — l'humain : verdicts, prix, boutons d'action.

Typographies : Instrument Serif (expression) · Geist (texte) · Geist Mono (index, prix, étiquettes).

L'italique serif est réservée aux **verdicts** — les phrases tranchées d'un conseiller.
C'est la signature typographique du site : ne pas l'utiliser pour de l'emphase ordinaire.
