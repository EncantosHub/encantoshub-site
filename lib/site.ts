export const site = {
  name: "Encantos Hub",
  legalName: "Encantos Hub",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.encantoshub.com.br",
  description:
    "Agência de marketing digital especializada em SEO e GEO. Criamos sites, produzimos conteúdo, cuidamos da presença local e montamos a estratégia certa para sua marca ser encontrada no Google, no mapa e nas inteligências artificiais.",
  tagline: "Estratégia digital, presença local, impacto real",
  email: "gestora.seo@gmail.com",
  whatsappDisplay: "(84) 98624-0202",
  whatsappNumber: "5584986240202",
  linkedin: "https://www.linkedin.com/services/page/768225312828345309/",
  base: "Praia da Pipa, Rio Grande do Norte",
  areaServed: "Brasil",
};

export function whatsappLink(text = "Olá! Vim pelo site da Encantos Hub e quero conversar sobre a presença digital do meu negócio.") {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
