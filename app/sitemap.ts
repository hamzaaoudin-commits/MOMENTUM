import type { MetadataRoute } from "next"

const BASE = "https://momentum.studio"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: `${BASE}/`, lastModified: now, priority: 1 },
    { url: `${BASE}/offres`, lastModified: now, priority: 0.9 },
    { url: `${BASE}/methode`, lastModified: now, priority: 0.8 },
    { url: `${BASE}/a-propos`, lastModified: now, priority: 0.7 },
    { url: `${BASE}/candidature`, lastModified: now, priority: 0.9 },
  ]
}
