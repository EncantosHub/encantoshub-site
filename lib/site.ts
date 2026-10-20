export const site = {
  name: "Encantos Hub",
  legalName: "Encantos Hub",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.encantoshub.com.br",
  description:
    "Agência de marketing especializada em consultoria SEO e GEO. Estratégias de presença digital baseadas em dados para sua empresa aparecer nas pesquisas do Google, no mapa e nas inteligências artificiais.",
  tagline: "Estratégia digital, presença local, impacto real",
  whatsappDisplay: "(84) 98624-0202",
  whatsappNumber: "5584986240202",
  base: "Praia da Pipa, Rio Grande do Norte",
  areaServed: "Brasil",
};

export function whatsappLink(text = "Olá! Vim pelo site da Encantos Hub e quero uma avaliação do posicionamento da minha empresa no Google.") {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
