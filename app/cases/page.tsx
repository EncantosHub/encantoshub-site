import type { Metadata } from "next";
import Link from "next/link";
import { Crumbs } from "@/components/Crumbs";
import { cases, otherProjects, testimonials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Cases de SEO e presença digital",
  description:
    "Resultados de SEO, conteúdo, links e presença local: +1.634% de tráfego orgânico para a Sociedade da Mesa, +1.141% para o Banco PAN, +200% em ligações para a NET e mais.",
  alternates: { canonical: "/cases" },
};

export default function Cases() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Crumbs items={[{ href: "/cases", label: "Cases" }]} />
          <h1>Cases que ajudam a contar nossa história.</h1>
          <p className="lead">Projetos de SEO técnico, conteúdo, links, sites e presença local, em negócios de todos os tamanhos.</p>
        </div>
      </section>

      <section className="section cases-section" aria-labelledby="resultados">
        <div className="wrap">
          <h2 id="resultados" className="sr-only">Resultados</h2>
          <ul className="cases">
            {cases.map((c) => (
              <li className="case" key={c.client + c.metric}>
                <p className="case__metric">
                  {c.metric}
                  <span className="case__label">{c.label}</span>
                </p>
                <div>
                  <h3 className="case__client">{c.client}</h3>
                  <p className="case__text">{c.text}</p>
                  <ul className="case__tags">
                    {c.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
          <div className="more-projects">
            {otherProjects.map((p) => (
              <div key={p.client}>
                <h3>{p.client}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper" aria-labelledby="depoimentos">
        <div className="wrap">
          <div className="section-head">
            <h2 id="depoimentos" className="h2">O que dizem sobre o trabalho.</h2>
          </div>
          <div className="quotes">
            {testimonials.map((t) => (
              <figure className="quote" key={t.name}>
                <blockquote>{t.quote}</blockquote>
                <figcaption>
                  <strong>{t.name}</strong>
                  {t.role}
                </figcaption>
              </figure>
            ))}
          </div>
          <p style={{ marginTop: 56 }}>
            <Link className="btn" href="/contato">Quero resultados assim</Link>
          </p>
        </div>
      </section>
    </>
  );
}
