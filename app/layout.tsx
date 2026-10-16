import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { services } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Encantos Hub | Agência de SEO, GEO e presença local",
    template: "%s | Encantos Hub",
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
    url: site.url,
    title: "Encantos Hub | Agência de SEO, GEO e presença local",
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#EFE6D7",
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#organizacao`,
  name: site.name,
  url: site.url,
  logo: `${site.url}/brand/encantoshub-logo.png`,
  image: `${site.url}/opengraph-image.png`,
  description: site.description,
  email: site.email,
  telephone: "+55 11 96472-1143",
  slogan: site.tagline,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tibau do Sul",
    addressRegion: "RN",
    addressCountry: "BR",
  },
  areaServed: { "@type": "Country", name: "Brasil" },
  founder: [
    { "@type": "Person", name: "Isabella Brilha", jobTitle: "Especialista em SEO" },
    { "@type": "Person", name: "Paloma Nogueira", jobTitle: "Estrategista digital" },
  ],
  knowsAbout: ["SEO", "GEO", "SEO local", "Perfil da Empresa no Google", "Criação de sites", "Marketing de conteúdo", "Tráfego pago"],
  sameAs: [site.linkedin, "https://www.pipalocal.com.br"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de marketing digital",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, url: `${site.url}/servicos/${s.slug}` },
    })),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <a className="skip" href="#conteudo">Pular para o conteúdo</a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <JsonLd data={orgSchema} />
      </body>
    </html>
  );
}
