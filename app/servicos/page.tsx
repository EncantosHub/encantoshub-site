import type { Metadata } from "next";
import Link from "next/link";
import { Crumbs } from "@/components/Crumbs";
import { plans, services, method } from "@/lib/content";

export const metadata: Metadata = {
  title: "Serviços de SEO, GEO, sites e presença local",
  description:
    "Conheça os serviços da Encantos Hub: SEO, GEO, gestão de presença local, criação de sites, produção de conteúdo e tráfego pago com parceiros.",
  alternates: { canonical: "/servicos" },
};

export default function Servicos() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Crumbs items={[{ href: "/servicos", label: "Serviços" }]} />
          <h1>Faça seu negócio ser encontrado, ganhar espaço e virar autoridade.</h1>
          <p className="lead">
            Estratégias de presença digital baseadas em dados para negócios locais, nacionais e internacionais. Analisamos
            como seus clientes pesquisam, onde sua marca aparece e quais oportunidades existem para transformar buscas em clientes.
          </p>
        </div>
      </section>

      <section className="section section--paper" aria-labelledby="lista">
        <div className="wrap">
          <h2 id="lista" className="sr-only">Lista de serviços</h2>
          <div className="services">
            {services.map((s) => (
              <Link className="service" key={s.slug} href={`/servicos/${s.slug}`}>
                <h3>{s.name}</h3>
                <p>{s.intro}</p>
                <span className="service__more">Como funciona</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="formatos">
        <div className="wrap">
          <div className="section-head section-head--split">
            <h2 id="formatos" className="h2">Formatos de contratação.</h2>
            <p className="lead">Os valores são definidos depois do diagnóstico, de acordo com o tamanho do site e a concorrência do seu mercado.</p>
          </div>
          <div className="plans">
            {plans.map((p) => (
              <article className="plan" key={p.name}>
                <h3>{p.name}</h3>
                <p>{p.text}</p>
                <ul>
                  {p.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper" aria-labelledby="metodo">
        <div className="wrap">
          <div className="section-head">
            <h2 id="metodo" className="h2">Estar presente, ser relevante, medir, melhorar.</h2>
          </div>
          <ol className="steps">
            {method.map((m, i) => (
              <li className="step" key={m.name}>
                <span className="step__n" aria-hidden="true">{i + 1}</span>
                <h3>{m.name}</h3>
                <p>{m.text}</p>
              </li>
            ))}
          </ol>
          <p style={{ marginTop: 56 }}>
            <Link className="btn" href="/contato">Pedir um diagnóstico</Link>
          </p>
        </div>
      </section>
    </>
  );
}
