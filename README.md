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

## Structure

Le site tient sur **une seule page** (`app/page.tsx`), en douze sections
numérotées qui se lisent dans l'ordre. Les anciennes routes (`/offres`,
`/methode`, `/a-propos`, `/candidature`) redirigent en 301 vers les ancres
correspondantes — voir `next.config.mjs`.

Ancres disponibles : `#diagnostic`, `#methode`, `#qui`, `#offres`, `#candidature`.
L'en-tête ne contient plus de menu — tout est sur la page, un seul bouton mène
au formulaire.

Le site vouvoie. Si vous ajoutez du texte, gardez le « vous » de politesse :
les accords restent au singulier (« vous êtes seul », jamais « seuls »).

### Interactions

- **Le hero** (`components/ascension.tsx`) — cinquante-six barres qui montent
  selon une courbe composée, levées une par une de gauche à droite, avec le
  tracé des sommets par-dessus. La ligne plate en pointillé est la référence :
  sans elle, une montée n'est qu'une forme. Le facteur `4.1` dans `hauteur()`
  règle la brutalité de l'accélération.
- **La rature** (`components/rature.tsx`) — dans « ce que vous avez déjà
  essayé », le trait se dessine sous les yeux du lecteur, puis la conséquence
  apparaît. Rature d'abord, verdict ensuite : l'inverse donnerait la réponse
  avant la question.
- **Le diagnostic** (`components/diagnostic.tsx`) — cinq questions, un score sur
  quinze, trois verdicts possibles. Le résultat part avec la candidature dans le
  champ caché `diagnostic` : tu sais dans quel état est le candidat avant même de
  lire sa réponse. Pour changer les questions ou le barème, tout est en haut du
  fichier.
- **L'arc explorable** (`components/arc.tsx`) — chaque bille de la chaîne basse
  révèle le rôle de cette sortie. Textes dans `MAILLONS`.
- **La position de lecture** (`components/progression.tsx`) — le trait sous
  l'en-tête et le numéro de piste. Aucune section n'est déclarée en dur : le
  composant lit les balises `data-section` / `data-label` de la page. Une
  section ajoutée apparaît toute seule.

Seule ARTIST DEVELOPMENT est visible par défaut. Les deux autres niveaux et le
comparatif sont sur la page, repliés derrière un clic (`components/depliant.tsx`) :
présents pour qui les cherche, invisibles pour qui est déjà convaincu.

## Où modifier quoi

| Je veux changer… | Fichier |
|---|---|
| Un prix, le contenu d'une formule, le nombre de places, la garantie | `lib/config.ts` |
| Les couleurs, les typos, les boutons, l'espacement | `app/globals.css` |
| N'importe quel texte du site | `app/page.tsx` |
| Les champs du formulaire | `components/formulaire.tsx` + `app/api/candidature/route.ts` |
| Les visuels signature | `components/trajectoires.tsx`, `components/arc.tsx` |
| Les questions du diagnostic | `components/diagnostic.tsx` |

## Identité — « ACIER »

Une seule teinte chromatique, plus un blanc pur. Deux rôles :

- **Bleu `#2F5BFF`** — la structure : index, filets, liens, tracés, direction.
- **Blanc `#FFFFFF`** — l'action : boutons, verdicts, points d'arrivée.

Typographies : **Archivo** (400 à 800) pour tout le texte, **JetBrains Mono**
pour les index, les prix et les étiquettes. Ni Geist ni Inter ni serif
élégante : ce sont les réglages par défaut de tout ce qui s'est lancé depuis
deux ans, et ça se reconnaît en une seconde.

Le contraste typographique vient de l'écart de graisse à l'intérieur d'une
seule famille (800 contre 400), pas d'un couple serif/sans.

**Tous les titres sont en capitales.** Attention si tu touches à
l'interlignage : le français accentue ses capitales et 0.93 est la limite
basse avant que le É de « D'ÉLAN » ne percute la ligne du dessus. Ce n'est pas
un réglage esthétique.

Aucun dégradé de surface, aucun halo radial, aucun angle arrondi. Une surface
est plate, un filet est un trait.

Pour changer l'accent : une seule ligne, `--color-cobalt-vif` dans
`app/globals.css`. Deux alternatives tenues y sont commentées.
