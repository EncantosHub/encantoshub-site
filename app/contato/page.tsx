import type { Metadata } from "next";
import { Crumbs } from "@/components/Crumbs";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato pelo WhatsApp",
  description: "Fale com a Encantos Hub pelo WhatsApp e peça uma avaliação gratuita do posicionamento da sua empresa no Google.",
  alternates: { canonical: "/contato" },
};

export default function Contato() {
  return (
    <section className="page-hero contact-page">
      <div className="wrap">
        <Crumbs items={[{ href: "/contato", label: "Contato" }]} />
        <h1>Fale com a gente pelo WhatsApp.</h1>
        <p className="lead">
          Todo o nosso atendimento é pelo WhatsApp. Conte um pouco do seu negócio e avaliamos como sua empresa aparece
          hoje nas pesquisas do Google, sem compromisso.
        </p>
        <p className="hero__actions">
          <a className="btn btn--big" href={whatsappLink()} target="_blank" rel="noopener" data-cta="contato">
            Falar no WhatsApp
          </a>
        </p>
        <p className="contact-page__number">{site.whatsappDisplay}</p>
        <p>Base em {site.base}. Atendimento remoto em todo o Brasil.</p>
      </div>
    </section>
  );
}
