import Image from "next/image";
import Link from "next/link";
import { JsonLd, faqSchema } from "@/components/JsonLd";
import { FaqList, WhatsAppCta } from "@/components/WhatsAppCta";
import { cases, homeFaq, services, team } from "@/lib/content";
import { whatsappLink } from "@/lib/site";
import { Rich } from "@/components/Rich";
import { Waves } from "@/components/Waves";

const featured = ["consultoria-seo", "gestao-local", "criacao-de-sites", "consultoria"];

const journey = ["Precisa ser encontrado", "Precisa ganhar espaço", "Precisa virar autoridade"];

const steps = [
  { name: "Avaliação gratuita", text: "Vemos como sua empresa aparece hoje **no Google, no mapa e nas IAs**, e o que os concorrentes estão fazendo." },
  { name: "Plano claro", text: "Você recebe as prioridades em **linguagem simples**: o que fazer primeiro e o que pode esperar." },
  { name: "Execução e acompanhamento", text: "Colocamos o plano em prática e mostramos a **evolução em relatórios**." },
];

export default function Home() {
  const main = featured.map((slug) => services.find((s) => s.slug === slug)!).filter(Boolean);
  const topCases = cases.slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="wrap hero__grid">
          <div className="hero__text">
            <h1 className="hero__title">Sua empresa em destaque nas buscas do Google e IAs</h1>
            <p className="hero__lead">
              Criamos estratégias de <strong>posicionamento digital</strong> baseadas em dados para negócios locais,
              nacionais e internacionais. Analisamos como seus clientes pesquisam, onde sua marca aparece e quais
              oportunidades existem para <strong>transformar buscas em clientes</strong>.
            </p>
            <div className="hero__actions">
              <a className="btn btn--big" href={whatsappLink()} target="_blank" rel="noopener" data-cta="hero">
                Pedir avaliação gratuita
              </a>
              <Link className="btn btn--ghost btn--big" href="/servicos">Ver serviços</Link>
            </div>
            <p className="hero__note">Avaliação gratuita do posicionamento da sua empresa no Google, pelo WhatsApp e sem compromisso.</p>
          </div>
          <figure className="hero__media">
            <span className="hero__sun" aria-hidden="true" />
            <Image
              src="/fotos/isabella-e-paloma-em-pipa.webp"
              alt="Isabella Brilha e Paloma Nogueira, da Encantos Hub, trabalhando com o notebook nas falésias de Pipa"
              width={792}
              height={1196}
              sizes="(min-width: 900px) 420px, 100vw"
              priority
            />
            <Waves className="hero__waves" />
          </figure>
        </div>
      </section>

      <section className="section section--paper" aria-labelledby="servicos">
        <div className="wrap">
          <div className="section-head">
            <h2 id="servicos" className="h2">Soluções para acelerar sua visibilidade digital</h2>
          </div>
          <div className="svc-grid">
            {main.map((s) => (
              <Link className="svc-card" key={s.slug} href={`/servicos/${s.slug}`}>
                <h3>{s.name}</h3>
                <p><Rich text={s.short} /></p>
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
            <h2 id="como" className="h2">Como funciona a nossa consultoria de SEO.</h2>
            <p className="lead">
              Criamos <strong>estratégias personalizadas</strong> de acordo com a realidade de cada negócio.
            </p>
          </div>
          <h3 className="sub-h3">Avaliamos o momento da sua empresa</h3>
          <figure className="wide-photo wide-photo--journey">
            <Image
              src="/fotos/pesquisa-no-google-notebook.webp"
              alt="Notebook aberto na página do Google ao lado de um caderno de planejamento de SEO"
              width={1600}
              height={1062}
              sizes="(min-width: 1180px) 1100px, 100vw"
            />
            <ol className="journey" aria-label="Momentos do seu negócio">
              {journey.map((j, n) => (
                <li key={j} className={n === journey.length - 1 ? "journey__step journey__step--last" : "journey__step"}>
                  <span className="journey__dot" aria-hidden="true" />
                  <span className="journey__label">{j}</span>
                </li>
              ))}
            </ol>
          </figure>
          <h3 className="sub-h3">Juntos criamos sua estratégia digital</h3>
          <ol className="steps3">
            {steps.map((st, i) => (
              <li key={st.name}>
                <span className="step__n" aria-hidden="true">{i + 1}</span>
                <h3>{st.name}</h3>
                <p><Rich text={st.text} /></p>
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
                <Image className="person__photo" src={p.photo} alt={`Foto de ${p.name}`} width={218} height={230} />
                <h3>{p.name}</h3>
                <p className="person__role">{p.role}</p>
                <p><Rich text={p.bio} /></p>
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
