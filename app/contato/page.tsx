import type { Metadata } from "next";
import { Crumbs } from "@/components/Crumbs";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Agende uma reunião de diagnóstico",
  description: "Agende pelo WhatsApp uma reunião de diagnóstico com a Encantos Hub e receba um projeto de SEO sob medida para a sua empresa.",
  alternates: { canonical: "/contato" },
};

export default function Contato() {
  return (
    <section className="page-hero contact-page">
      <div className="wrap">
        <Crumbs items={[{ href: "/contato", label: "Contato" }]} />
        <h1>Agende uma reunião de diagnóstico.</h1>
        <p className="lead">
          O agendamento é feito pelo WhatsApp. Na reunião conversamos sobre o seu negócio, o seu mercado e os recursos
          que você já tem, e depois apresentamos um projeto de SEO sob medida.
        </p>
        <p className="hero__actions">
          <a className="btn btn--big" href={whatsappLink()} target="_blank" rel="noopener" data-cta="contato">
            Agendar reunião de diagnóstico
          </a>
        </p>
        <p>Base em {site.base}. Atendemos empresas nacionais e internacionais de forma remota.</p>
      </div>
    </section>
  );
}
