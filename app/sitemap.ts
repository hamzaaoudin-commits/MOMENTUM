import type { MetadataRoute } from "next"
import { LANGS } from "@/lib/lang"
import { SITE, localePath } from "@/lib/routing"

type Route = {
  path: string
  priority: number
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
}

const ROUTES: Route[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/offre", priority: 0.9, changeFrequency: "monthly" },
  { path: "/moments", priority: 0.9, changeFrequency: "monthly" },
  { path: "/documents", priority: 0.9, changeFrequency: "monthly" },
  { path: "/documents/sillage", priority: 0.9, changeFrequency: "monthly" },
  { path: "/documents/verso", priority: 0.85, changeFrequency: "monthly" },
  { path: "/strawberry-method", priority: 0.8, changeFrequency: "monthly" },
  { path: "/le-livre", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.75, changeFrequency: "monthly" },
]

const LEGAL: { fr: string; en: string }[] = [
  { fr: "/cgv", en: "/terms" },
  { fr: "/mentions-legales", en: "/legal-notice" },
  { fr: "/politique-confidentialite", en: "/privacy" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const pages = ROUTES.flatMap((r) =>
    LANGS.map((lang) => ({
      url: `${SITE}${localePath(r.path, lang)}`,
      lastModified: now,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
      alternates: {
        languages: Object.fromEntries(
          LANGS.map((l) => [l, `${SITE}${localePath(r.path, l)}`])
        ),
      },
    }))
  )

  const legal = LEGAL.flatMap((d) =>
    LANGS.map((lang) => ({
      url: `${SITE}/${lang}${d[lang]}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
      alternates: { languages: { fr: `${SITE}/fr${d.fr}`, en: `${SITE}/en${d.en}` } },
    }))
  )

  return [...pages, ...legal]
}
