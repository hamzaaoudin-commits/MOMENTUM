/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: false },
  images: { unoptimized: true },

  /**
   * Le site tient désormais sur une seule page. Ces routes ont existé et ont pu
   * être partagées ou indexées : elles renvoient vers l'ancre correspondante
   * plutôt que vers un 404. Redirections permanentes — les moteurs
   * transfèrent l'autorité de l'ancienne URL vers la nouvelle.
   */
  async redirects() {
    return [
      { source: "/offres", destination: "/#offres", permanent: true },
      { source: "/methode", destination: "/#methode", permanent: true },
      { source: "/a-propos", destination: "/#qui", permanent: true },
      { source: "/candidature", destination: "/#candidature", permanent: true },
    ]
  },
}
export default nextConfig
