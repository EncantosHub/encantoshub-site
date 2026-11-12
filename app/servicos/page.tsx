import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Crumbs } from "@/components/Crumbs";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { Pillars, TailorMade } from "@/components/Pillars";
import { services } from "@/lib/content";
import { ConsultoriaFlow } from "@/components/ConsultoriaFlow";
import { whatsappLink } from "@/lib/site";
import { Rich } from "@/components/Rich";

export const metadata: Metadata = {
  title: "Serviços: consultoria de SEO personalizada, setup inicial e criação de sites",
  description:
    "Consultoria de SEO personalizada: reunião de diagnóstico, setup inicial ou criação de site e plano personalizado, acompanhando 5 pilares de crescimento no Google e nas IAs.",
  alternates: { canonical: "/servicos" },
};

export default function Servicos() {
  const extra = services.filter((s) => s.group === "complementar");
  return (
    <>
      <section className="page-hero">
        <div className="wrap page-hero__split">
          <div>
            <Crumbs items={[{ href: "/servicos", label: "Serviços" }]} />
            <h1>Consultoria de SEO personalizada para o seu negócio.</h1>
            <p className="lead">
              Não trabalhamos com pacote fechado. Começamos com uma <strong>reunião de diagnóstico</strong> e montamos um{" "}
              <strong>projeto de SEO sob medida</strong> para o seu mercado e para os recursos que você já tem.
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

      <section className="section section--paper" aria-labelledby="como">
        <div className="wrap">
          <div className="section-head">
            <h2 id="como" className="h2">Como funciona a consultoria personalizada.</h2>
            <p className="lead">
              Cada projeto é montado depois da conversa inicial. Dentro da consultoria, o site passa por um{" "}
              <strong>setup inicial</strong> ou é <strong>criado do zero</strong>, e segue com um{" "}
              <strong>plano constante</strong> feito para o seu negócio.
            </p>
          </div>
          <ConsultoriaFlow />
          <div className="flow-cta">
            <a className="btn btn--big" href={whatsappLink()} target="_blank" rel="noopener" data-cta="servicos-fluxo">
              Agendar reunião de diagnóstico
            </a>
            <p>É na reunião que entendemos o seu momento e personalizamos o seu SEO.</p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="pilares">
        <div className="wrap">
          <div className="section-head">
            <h2 id="pilares" className="h2">Os 5 pilares que acompanhamos.</h2>
            <p className="lead">
              Do setup ao plano personalizado, todo o trabalho é guiado por cinco frentes que medimos e melhoramos continuamente.
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
          <div className="extras">
            {extra.map((s) => (
              <Link className="extra" key={s.slug} href={`/servicos/${s.slug}`}>
                {s.thumb ? <Image className="extra__thumb" src={s.thumb.src} alt={s.thumb.alt} width={152} height={152} /> : <span />}
                <div>
                  <h3>{s.name}</h3>
                  <p><Rich text={s.short} /></p>
                  <span className="extra__more">Saiba mais</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppCta />
    </>
  );
}
