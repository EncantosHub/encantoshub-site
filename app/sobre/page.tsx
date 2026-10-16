import type { Metadata } from "next";
import Link from "next/link";
import { Crumbs } from "@/components/Crumbs";
import { Mark } from "@/components/Logo";
import { team } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sobre a agência",
  description:
    "A Encantos Hub é uma agência de marketing digital especializada em SEO e GEO, com base em Praia da Pipa (RN) e clientes em todo o Brasil. Conheça quem está por trás.",
  alternates: { canonical: "/sobre" },
};

const values = [
  { name: "Estratégia sob medida", text: "Cada negócio tem um momento. O plano parte dele, não de um pacote pronto." },
  { name: "Crescimento que dura", text: "Preferimos resultados consistentes a picos que somem no mês seguinte." },
  { name: "Leveza e clareza", text: "Processos simples e comunicação transparente: você sempre sabe o que está sendo feito e por quê." },
  { name: "Impacto local", text: "Nascemos em Pipa e acreditamos em fortalecer a economia e os projetos da comunidade." },
];

export default function Sobre() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Crumbs items={[{ href: "/sobre", label: "Sobre" }]} />
          <h1>Onde estratégia, presença digital e impacto se encontram.</h1>
          <p className="lead">
            Somos gestoras de marketing que aprofundam, conectam e simplificam. Trocamos processos pesados por soluções
            inteligentes para ajudar empresas a crescerem no digital de forma leve, estratégica e criativa.
          </p>
        </div>
      </section>

      <section className="section section--paper">
        <div className="wrap split">
          <div className="prose-block">
            <h2>O nome</h2>
            <p>
              As ondas do nosso símbolo falam de leveza, movimento e conexão. O círculo aberto é uma bússola: direção,
              estratégia e propósito. E o hub é o ponto onde as conexões viram resultado, para a sua marca e para quem ela atende.
            </p>
            <p>
              A Encantos Hub tem base em Praia da Pipa, no Rio Grande do Norte, e atende empresas de todo o Brasil de forma
              remota. Também mantemos o <a href="https://www.pipalocal.com.br" target="_blank" rel="noopener">Pipa Local</a>,
              um guia da região e canal de visibilidade para os negócios da vila.
            </p>
          </div>
          <Mark className="about-mark" title="Símbolo da Encantos Hub" />
        </div>
      </section>

      <section className="section" aria-labelledby="equipe">
        <div className="wrap">
          <div className="section-head">
            <h2 id="equipe" className="h2">Quem está por trás.</h2>
          </div>
          <div className="team">
            {team.map((p) => (
              <article className="person" key={p.name}>
                <div className="person__mark" aria-hidden="true">{p.name.split(" ").map((n) => n[0]).join("")}</div>
                <h3>{p.name}</h3>
                <p className="person__role">{p.role}</p>
                <p>{p.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper" aria-labelledby="valores">
        <div className="wrap">
          <div className="section-head">
            <h2 id="valores" className="h2">Como trabalhamos.</h2>
          </div>
          <div className="services">
            {values.map((v) => (
              <div className="service" key={v.name}>
                <h3>{v.name}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 56 }}>
            <Link className="btn" href="/contato">Conversar com a gente</Link>
          </p>
        </div>
      </section>
    </>
  );
}
