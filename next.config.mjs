/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  // URLs do site antigo (Lovable) que mudaram de endereço
  async redirects() {
    return [
      { source: "/servicos/gestao-completa", destination: "/servicos/seo", permanent: true },
      { source: "/servicos/gestao-essencial", destination: "/servicos/seo", permanent: true },
      { source: "/servicos/consultoria", destination: "/servicos", permanent: true },
      { source: "/descubra-seu-plano", destination: "/servicos", permanent: true },
      { source: "/ferramentas/:path*", destination: "/blog", permanent: false },
      { source: "/blog/o-que-e-hiperlink", destination: "/blog/guia-hiperlink", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};
export default nextConfig;
