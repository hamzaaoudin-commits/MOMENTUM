import type { MetadataRoute } from "next"
import { LANGS } from "@/lib/i18n"

const BASE = "https://momentum.studio"

/**
 * Une entrée par langue, et chacune déclare l'autre en alternate. Sans ces
 * alternates, un moteur traite /fr et /en comme deux pages concurrentes sur le
 * même sujet et n'en garde qu'une.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return LANGS.map((lang) => ({
    url: `${BASE}/${lang}`,
    lastModified: now,
    priority: 1,
    alternates: {
      languages: Object.fromEntries(LANGS.map((l) => [l, `${BASE}/${l}`])),
    },
  }))
}
