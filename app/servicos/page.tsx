import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Crumbs } from "@/components/Crumbs";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { Pillars, TailorMade } from "@/components/Pillars";
import { services } from "@/lib/content";
import { Rich } from "@/components/Rich";

export const metadata: Metadata = {
  title: "Serviços: consultoria de SEO personalizada, setup inicial e criação de sites",
  description:
    "Consultoria de SEO personalizada: reunião de diagnóstico, setup inicial ou criação de site e plano mensal de 2 a 5 artigos, acompanhando 5 pilares de crescimento no Google e nas IAs.",
  alternates: { canonical: "/servicos" },
};

export default function Servicos() {
  const principal = services.filter((s) => s.group !== "complementar");
  const extra = services.filter((s) => s.group === "complementar");
  return (
    <>
      <section className="page-hero">
        <div className="wrap page-hero__split">
          <div>
            <Crumbs items={[{ href: "/servicos", label: "Serviços" }]} />
            <h1>Consultoria de SEO personalizada para o seu negócio.</h1>
            <p className="lead">
              Não trabalhamos com pacote fechado. Começamos com uma <strong>reunião de diagnóstico</strong>, fazemos o{" "}
              <strong>setup inicial</strong> do seu site ou criamos um novo e seguimos com um <strong>plano mensal</strong>{" "}
              montado para o seu mercado e para os recursos que você já tem.
            </p>
          </div>
          <figure className="side-photo side-photo--short">
            <Image
              src="/fotos/consultoria-seo-notebook.webp"
              alt="Mãos digitando no notebook durante uma consultoria de SEO"
              width={792}
              height={1196}
              sizes="(min-width: 900px) 380px, 100vw"
              priority
            />
          </figure>
        </div>
      </section>

      <section className="section section--paper" aria-labelledby="lista">
        <div className="wrap">
          <div className="section-head">
            <h2 id="lista" className="h2">Como montamos o seu projeto.</h2>
          </div>
          <div className="services">
            {principal.map((s) => (
              <Link className="service" key={s.slug} href={`/servicos/${s.slug}`}>
                <h3>{s.name}</h3>
                <p><Rich text={s.short} /></p>
                <span className="service__more">Saiba mais</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="pilares">
        <div className="wrap">
          <div className="section-head">
            <h2 id="pilares" className="h2">Os 5 pilares que acompanhamos.</h2>
            <p className="lead">
              Do setup ao plano mensal, todo o trabalho é guiado por cinco frentes que medimos e melhoramos continuamente.
            </p>
          </div>
          <Pillars />
          <TailorMade />
        </div>
      </section>

      <section className="section section--paper" aria-labelledby="complementares">
        <div className="wrap">
          <div className="section-head">
            <h2 id="complementares" className="h2">Serviços complementares.</h2>
          </div>
          <div className="services">
            {extra.map((s) => (
              <Link className="service" key={s.slug} href={`/servicos/${s.slug}`}>
                <h3>{s.name}</h3>
                <p><Rich text={s.short} /></p>
                <span className="service__more">Saiba mais</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppCta />
    </>
  );
}
