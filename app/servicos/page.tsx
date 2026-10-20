import type { Metadata } from "next";
import Link from "next/link";
import { Crumbs } from "@/components/Crumbs";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Serviços: consultoria SEO, perfil da empresa no Google e sites",
  description:
    "Serviços da Encantos Hub, agência de marketing: consultoria SEO e GEO, perfil da empresa no Google, criação de sites, conteúdo, tráfego pago com parceiros e consultoria estratégica.",
  alternates: { canonical: "/servicos" },
};

export default function Servicos() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Crumbs items={[{ href: "/servicos", label: "Serviços" }]} />
          <h1>Serviços para sua empresa aparecer nas pesquisas do Google.</h1>
          <p className="lead">Escolha por onde começar. Se não souber, chame no WhatsApp que a gente indica.</p>
        </div>
      </section>

      <section className="section section--paper" aria-labelledby="lista">
        <div className="wrap">
          <h2 id="lista" className="sr-only">Lista de serviços</h2>
          <div className="services">
            {services.map((s) => (
              <Link className="service" key={s.slug} href={`/servicos/${s.slug}`}>
                <h3>{s.name}</h3>
                <p>{s.short}</p>
                <span className="service__more">Saiba mais</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppCta title="Não sabe por onde começar?" text="Conte um pouco do seu negócio no WhatsApp. Avaliamos como sua empresa aparece hoje no Google e indicamos o serviço certo para o seu momento." />
    </>
  );
}
