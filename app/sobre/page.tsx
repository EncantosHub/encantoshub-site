import type { Metadata } from "next";
import { Crumbs } from "@/components/Crumbs";
import Image from "next/image";
import { team } from "@/lib/content";
import { whatsappLink } from "@/lib/site";
import { Rich } from "@/components/Rich";

export const metadata: Metadata = {
  title: "Sobre a agência",
  description:
    "A Encantos Hub é uma agência de marketing especializada em consultoria de SEO, GEO e posicionamento digital, com base em Praia da Pipa (RN) e clientes em todo o Brasil.",
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
              As <strong>ondas</strong> do nosso símbolo falam de leveza, movimento e conexão. O círculo aberto é uma
              <strong> bússola</strong>: direção, estratégia e propósito. E o <strong>hub</strong> é o ponto onde as conexões
              viram resultado, para a sua marca e para quem ela atende.
            </p>
            <p>
              A Encantos Hub tem base em <strong>Praia da Pipa, no Rio Grande do Norte</strong>, e cuida do
              <strong> posicionamento digital</strong> de empresas de todo o Brasil, de forma remota. Também mantemos o <a href="https://www.pipalocal.com.br" target="_blank" rel="noopener">Pipa Local</a>,
              um guia da região e canal de visibilidade para os negócios da vila.
            </p>
          </div>
          <figure className="side-photo">
            <Image
              src="/fotos/isa-trabalhando-na-praia.webp"
              alt="Isabella Brilha trabalhando no notebook à beira-mar em Praia da Pipa"
              width={792}
              height={1196}
              sizes="(min-width: 900px) 460px, 100vw"
            />
          </figure>
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
                <Image className="person__photo" src={p.photo} alt={`Foto de ${p.name}`} width={218} height={230} />
                <h3>{p.name}</h3>
                <p className="person__role">{p.role}</p>
                <p><Rich text={p.bio} /></p>
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
            <a className="btn" href={whatsappLink()} target="_blank" rel="noopener" data-cta="sobre">Falar no WhatsApp</a>
          </p>
        </div>
      </section>
    </>
  );
}
