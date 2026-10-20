import Link from "next/link";
import { JsonLd, faqSchema } from "@/components/JsonLd";
import { FaqList, WhatsAppCta } from "@/components/WhatsAppCta";
import { cases, homeFaq, services, team } from "@/lib/content";
import { whatsappLink } from "@/lib/site";

const featured = ["consultoria-seo", "gestao-local", "criacao-de-sites", "consultoria"];

const steps = [
  { name: "Avaliação gratuita", text: "Vemos como sua empresa aparece hoje no Google, no mapa e nas IAs, e o que os concorrentes estão fazendo." },
  { name: "Plano claro", text: "Você recebe as prioridades em linguagem simples: o que fazer primeiro e o que pode esperar." },
  { name: "Execução e acompanhamento", text: "Colocamos o plano em prática e mostramos a evolução todo mês, com atualizações pelo WhatsApp." },
];

function HeroWaves() {
  const base = (y: number) =>
    `M 20 ${y} C 170 ${y - 92}, 330 ${y - 92}, 470 ${y - 24} C 560 ${y + 18}, 640 ${y + 26}, 720 ${y - 8} C 800 ${y - 44}, 890 ${y - 52}, 985 ${y - 22}`;
  return (
    <svg className="hero__waves" viewBox="0 0 1000 520" aria-hidden="true">
      <path className="draw" d={base(250)} />
      <path className="draw" d={base(330)} />
      <path className="draw" d={base(410)} />
      <circle className="sun" cx="880" cy="110" r="26" />
    </svg>
  );
}

export default function Home() {
  const main = featured.map((slug) => services.find((s) => s.slug === slug)!).filter(Boolean);
  const topCases = cases.slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="wrap hero__inner">
          <h1 className="hero__title">Agência de marketing para sua empresa aparecer nas pesquisas do Google.</h1>
          <HeroWaves />
          <p className="hero__lead">
            Criamos estratégias de presença digital baseadas em dados para negócios locais, nacionais e internacionais.
            Analisamos como seus clientes pesquisam, onde sua marca aparece e quais oportunidades existem para
            transformar buscas em clientes.
          </p>
          <div className="hero__actions">
            <a className="btn btn--big" href={whatsappLink()} target="_blank" rel="noopener" data-cta="hero">
              Pedir avaliação gratuita
            </a>
            <Link className="btn btn--ghost btn--big" href="/servicos">Ver serviços</Link>
          </div>
          <p className="hero__note">Avaliação gratuita do posicionamento da sua empresa no Google, pelo WhatsApp e sem compromisso.</p>
        </div>
      </section>

      <section className="section section--paper" aria-labelledby="servicos">
        <div className="wrap">
          <div className="section-head">
            <h2 id="servicos" className="h2">Como podemos ajudar.</h2>
          </div>
          <div className="svc-grid">
            {main.map((s) => (
              <Link className="svc-card" key={s.slug} href={`/servicos/${s.slug}`}>
                <h3>{s.name}</h3>
                <p>{s.short}</p>
                <span className="svc-card__more">Saiba mais</span>
              </Link>
            ))}
          </div>
          <p className="svc-also">
            Também produzimos <Link href="/servicos/producao-de-conteudo">conteúdo para blogs e sites</Link> e, quando a
            estratégia pede, ativamos <Link href="/servicos/trafego-pago">parceiros de tráfego pago</Link>.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="como">
        <div className="wrap">
          <div className="section-head">
            <h2 id="como" className="h2">Como funciona a nossa consultoria SEO.</h2>
          </div>
          <ol className="steps3">
            {steps.map((st, i) => (
              <li key={st.name}>
                <span className="step__n" aria-hidden="true">{i + 1}</span>
                <h3>{st.name}</h3>
                <p>{st.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section cases-section" aria-labelledby="cases">
        <div className="wrap">
          <div className="section-head">
            <h2 id="cases" className="h2">Resultados de quem já aparece no Google.</h2>
          </div>
          <ul className="cases-grid">
            {topCases.map((c) => (
              <li key={c.client + c.metric}>
                <p className="case__metric">{c.metric}</p>
                <p className="case__label">{c.label}</p>
                <h3 className="case__client">{c.client}</h3>
              </li>
            ))}
          </ul>
          <Link className="btn btn--light" href="/cases">Ver todos os cases</Link>
        </div>
      </section>

      <section className="section" aria-labelledby="quem">
        <div className="wrap">
          <div className="section-head section-head--split">
            <h2 id="quem" className="h2">Sua estratégia feita por quem entende sobre as buscas.</h2>
            <p className="lead">
              Somos um grupo de especialistas em marketing digital e tráfego orgânico. Nossa missão é potencializar a
              presença online com soluções personalizadas, técnicas e sustentáveis.
            </p>
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

      <section className="section section--paper" aria-labelledby="perguntas">
        <div className="wrap">
          <div className="section-head">
            <h2 id="perguntas" className="h2">Perguntas frequentes.</h2>
          </div>
          <FaqList items={homeFaq} />
        </div>
      </section>

      <WhatsAppCta />

      <JsonLd data={faqSchema(homeFaq)} />
    </>
  );
}
