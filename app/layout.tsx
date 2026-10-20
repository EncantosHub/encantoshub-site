import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { ClickTracker } from "@/components/ClickTracker";
import { services } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Agência de marketing e consultoria de SEO | Encantos Hub",
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
    title: "Agência de marketing e consultoria de SEO | Encantos Hub",
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
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
  telephone: "+55 84 98624-0202",
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
  knowsAbout: ["Consultoria de SEO", "Otimização de sites", "Posicionamento digital", "GEO", "SEO local", "Perfil da empresa no Google", "Consultoria estratégica", "Criação de sites", "Marketing de conteúdo", "Tráfego pago"],
  sameAs: ["https://www.pipalocal.com.br"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de marketing digital e consultoria SEO",
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
        <ClickTracker />
      </body>
    </html>
  );
}
