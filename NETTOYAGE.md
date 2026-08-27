# À SUPPRIMER DU DÉPÔT AVANT DE DÉPLOYER

`Add files via upload` sur GitHub **ajoute** des fichiers, il n'en supprime
jamais. Les fichiers ci-dessous appartiennent aux versions précédentes du site.
Tant qu'ils restent dans le dépôt, le build échoue : l'ancien `app/page.tsx`
importe `PROPOSITION`, qui n'existe plus depuis que toute la copie est partie
dans `lib/copy-fr.ts` et `lib/copy-en.ts`.

## Le plus rapide

Sur la page du dépôt GitHub, appuyez sur la touche `.` (point). Une fenêtre
VS Code s'ouvre dans le navigateur. Sélectionnez les fichiers ci-dessous dans
l'explorateur, supprimez-les, puis validez en un seul commit.

## La liste

```
app/page.tsx
app/layout.tsx
app/not-found.tsx
app/opengraph-image.png
app/opengraph-image.alt.txt
app/merci/
app/mentions-legales/
app/offres/
app/methode/
app/a-propos/
app/candidature/
components/bande-cta.tsx
middleware.ts
```

Certains n'existent peut-être plus chez vous — c'est normal, ils ont été
supprimés à des étapes différentes. Supprimez ceux qui sont là, ignorez les
autres.

## Comment vérifier que c'est bon

Après nettoyage, `app/` ne doit plus contenir que :

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
```

**Aucun `page.tsx` ni `layout.tsx` directement sous `app/`.** C'est la règle à
retenir : depuis le passage en deux langues, la balise `<html>` vit dans
`app/[lang]/layout.tsx`, et un layout racine au-dessus écraserait l'attribut
`lang` de la version anglaise.

Et `middleware.ts` est remplacé par `proxy.ts` à la racine du dépôt : Next 16 a
renommé la convention, l'ancienne alerte à chaque build.
