import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd, faqSchema } from "@/components/JsonLd";
import { cases, homeFaq, method, services, stages, team, testimonials } from "@/lib/content";
import { getPosts } from "@/lib/blog";
import { PostRow } from "@/components/PostList";
import { site, whatsappLink } from "@/lib/site";

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
  return (
    <>
      <section className="hero">
        <div className="wrap hero__inner">
          <h1 className="hero__title">Sua marca encontrada no Google, no mapa e nas IAs.</h1>
          <HeroWaves />
          <p className="hero__lead">
            Criamos estratégias de presença digital baseadas em dados para negócios locais, nacionais e internacionais.
            Analisamos como seus clientes pesquisam, onde sua marca aparece e quais oportunidades existem para
            transformar buscas em clientes.
          </p>
          <div className="hero__actions">
            <Link className="btn" href="/contato">Pedir um diagnóstico</Link>
            <a className="btn btn--ghost" href={whatsappLink()} target="_blank" rel="noopener">Falar no WhatsApp</a>
          </div>
          <p className="hero__proof">
            <span>Experiência em projetos para</span>
            <strong>NET</strong>
            <strong>Banco PAN</strong>
            <strong>Casas Bahia</strong>
            <strong>Loggi</strong>
            <strong>Insper</strong>
          </p>
        </div>
      </section>

      <section className="section section--paper" aria-labelledby="momento">
        <div className="wrap">
          <div className="section-head section-head--split">
            <h2 id="momento" className="h2">O plano depende do momento do seu negócio.</h2>
            <p className="lead">
              Não existe pacote igual para todo mundo. Primeiro entendemos onde sua marca está hoje, depois escolhemos os
              canais que levam ao próximo passo.
            </p>
          </div>
          <ol className="stages">
            {stages.map((s) => (
              <li className="stage" key={s.name}>
                <h3>{s.name}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="servicos">
        <div className="wrap">
          <div className="section-head section-head--split">
            <h2 id="servicos" className="h2">O que fazemos pela sua visibilidade.</h2>
            <p className="lead">SEO e GEO são o centro. Ao redor deles, tudo o que faz uma marca ser encontrada e escolhida.</p>
          </div>
          <div className="services">
            {services.map((s) => (
              <Link className="service" key={s.slug} href={`/servicos/${s.slug}`}>
                <h3>{s.name}</h3>
                <p>{s.short}</p>
                <span className="service__more">Como funciona</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section cases-section" aria-labelledby="cases">
        <div className="wrap">
          <div className="section-head section-head--split">
            <h2 id="cases" className="h2">Resultados que contam nossa história.</h2>
            <p className="lead">De imobiliárias em Pipa a grandes marcas nacionais, o método é o mesmo: dados, prioridade e consistência.</p>
          </div>
          <ul className="cases">
            {cases.slice(0, 4).map((c) => (
              <li className="case" key={c.client + c.metric}>
                <p className="case__metric">
                  {c.metric}
                  <span className="case__label">{c.label}</span>
                </p>
                <div>
                  <h3 className="case__client">{c.client}</h3>
                  <p className="case__text">{c.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <Link className="btn btn--light" href="/cases">Ver todos os cases</Link>
        </div>
      </section>

      <section className="section" aria-labelledby="metodo">
        <div className="wrap">
          <div className="section-head">
            <h2 id="metodo" className="h2">Estratégia antes de execução.</h2>
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
        </div>
      </section>

      <section className="section section--paper" aria-labelledby="depoimentos">
        <div className="wrap">
          <div className="section-head">
            <h2 id="depoimentos" className="h2">Quem trabalhou com a gente.</h2>
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
        </div>
      </section>

      <section className="section" aria-labelledby="quem">
        <div className="wrap">
          <div className="section-head section-head--split">
            <h2 id="quem" className="h2">Feita em Pipa, para marcas de todo o Brasil.</h2>
            <p className="lead">
              Acreditamos que o digital deve ser como a vida: com fluidez e qualidade. Nada de voos passageiros: buscamos
              resultados consistentes, que respeitam o ritmo de cada negócio.
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

      <section className="section section--paper" aria-labelledby="do-blog">
        <div className="wrap">
          <div className="section-head section-head--split">
            <h2 id="do-blog" className="h2">Do blog.</h2>
            <p className="lead">Guias práticos de SEO e Perfil da Empresa no Google, do jeito que aplicamos com nossos clientes.</p>
          </div>
          <div className="post-list">
            {getPosts().slice(0, 3).map((p) => (
              <PostRow key={p.slug} post={p} />
            ))}
          </div>
          <p style={{ marginTop: 40 }}>
            <Link className="btn btn--ghost" href="/blog">Ver todos os artigos</Link>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="perguntas">
        <div className="wrap">
          <div className="section-head">
            <h2 id="perguntas" className="h2">Perguntas frequentes.</h2>
          </div>
          <div className="faq">
            {homeFaq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta" id="contato" aria-labelledby="fale">
        <div className="wrap contact">
          <div className="contact__aside">
            <h2 id="fale" className="h2">Vamos fazer seu negócio ser encontrado?</h2>
            <p className="lead">Conte onde sua marca está hoje. Respondemos com um primeiro olhar sobre a sua presença digital e os próximos passos.</p>
            <div className="contact__channels">
              <a href={whatsappLink()} target="_blank" rel="noopener">WhatsApp {site.whatsappDisplay}</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <JsonLd data={faqSchema(homeFaq)} />
    </>
  );
}
