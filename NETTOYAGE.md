# UN SEUL FICHIER À SUPPRIMER

À la racine du dépôt :

```
middleware.ts
```

C'est tout. Il fait doublon avec `proxy.ts`, qui le remplace, et Next refuse de
construire quand les deux sont présents :

```
Both middleware file "./middleware.ts" and proxy file "./proxy.ts" are detected.
```

`Add files via upload` sur GitHub ajoute des fichiers sans jamais en supprimer :
c'est pour ça que l'ancien est resté.

## Le plus rapide pour supprimer

Sur la page du dépôt GitHub, appuyez sur la touche `.` (point). Une fenêtre
VS Code s'ouvre dans le navigateur : sélectionnez le fichier, supprimez-le,
validez.

## À quoi doit ressembler le dépôt ensuite

```
app/[lang]/layout.tsx
app/[lang]/page.tsx
app/[lang]/not-found.tsx
app/[lang]/merci/page.tsx
app/[lang]/mentions-legales/page.tsx
app/api/candidature/route.ts
app/globals.css
app/icon.svg
app/apple-icon.png
app/robots.ts
app/sitemap.ts
components/  (16 fichiers)
lib/         (config, i18n, copy, copy-fr, copy-en)
public/      (og-fr.png, og-en.png, marque.svg, marque-fond-clair.svg)
proxy.ts
next.config.mjs, package.json, postcss.config.mjs, tsconfig.json
```

**Aucun `page.tsx` ni `layout.tsx` directement sous `app/`**, et **pas de
`middleware.ts`**.

## Rappel Vercel

Une variable d'environnement est nécessaire pour que le formulaire envoie :

| Nom | Valeur |
|---|---|
| `FORMSPREE_ID` | l'identifiant de votre formulaire Formspree |

Sans elle, le site se construit et s'affiche normalement, mais
`/api/candidature` renvoie une erreur explicite au lieu de faire semblant
d'envoyer.
