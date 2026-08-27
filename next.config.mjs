/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: false },
  images: { unoptimized: true },

  /**
   * Le site tient sur une seule page, en deux langues.
   *
   * Deux familles de redirections :
   *   — les anciennes routes de la version française (/offres, /methode…),
   *     qui ont pu être partagées avant le passage en page unique ;
   *   — les mêmes préfixées par la langue, pour les liens émis depuis /fr.
   *
   * Permanentes : les moteurs transfèrent l'autorité de l'ancienne URL.
   */
  async redirects() {
    const ancres = [
      ["offres", "offres"],
      ["methode", "methode"],
      ["a-propos", "qui"],
      ["candidature", "candidature"],
    ]
    return [
      ...ancres.map(([source, ancre]) => ({
        source: `/${source}`,
        destination: `/fr#${ancre}`,
        permanent: true,
      })),
      ...ancres.map(([source, ancre]) => ({
        source: `/:lang(fr|en)/${source}`,
        destination: `/:lang#${ancre}`,
        permanent: true,
      })),
    ]
  },
}
export default nextConfig
