import type { Metadata } from "next";
import Image from "next/image";
import { Crumbs } from "@/components/Crumbs";
import { JsonLd } from "@/components/JsonLd";
import { Rich } from "@/components/Rich";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { builtSites, caseStudies, headline } from "@/lib/cases";
import { testimonials } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cases e resultados de SEO",
  description:
    "Resultados reais de SEO: +1.634% de tráfego orgânico na Sociedade da Mesa, +1.141% no Banco PAN, +278% de impressões para uma imobiliária em Pipa, 1 milhão de impressões para concessionárias e mais de 100 empresas com SEO local.",
  alternates: { canonical: "/cases" },
};

export default function Cases() {
  return (
    <>
      <section className="page-hero page-hero--tight">
        <div className="wrap">
          <Crumbs items={[{ href: "/cases", label: "Cases" }]} />
          <h1>Cases e resultados de SEO.</h1>
          <p className="lead">
            Números reais de empresas que passaram a aparecer mais no Google: de <strong>imobiliárias e concessionárias</strong> a
            grandes marcas nacionais e negócios locais.
          </p>
          <ul className="headline-stats">
            {headline.map((h) => (
              <li key={h.value}>
                <span className="headline-stats__value">{h.value}</span>
                <span className="headline-stats__label">{h.label}</span>
              </li>
            ))}
          </ul>
          <nav className="cat-nav case-index" aria-label="Ir para um case">
            {caseStudies.map((c) => (
              <a key={c.slug} href={`#${c.slug}`}>{c.client.split(" / ")[0].replace("SEO local para mais de 100 empresas", "SEO local")}</a>
            ))}
            <a href="#sites">Sites criados</a>
          </nav>
        </div>
      </section>

      {caseStudies.map((c, i) => {
        const who = (
          <>
            <div className="case-study__who">
              {c.logo ? <Image className={`case-study__logo ${c.logo.pad ? "case-study__logo--pad" : ""}`} src={c.logo.src} alt={c.logo.alt} width={64} height={64} /> : null}
              <div>
                <p className="case-study__client">{c.client}</p>
                <p className="case-study__segment">{c.segment}</p>
              </div>
            </div>
            <h2 id={`${c.slug}-titulo`} className="case-study__title">{c.title}</h2>
            <ul className="case-metrics">
              {c.metrics.map((m) => (
                <li key={m.label}>
                  <span className="case-metrics__value">{m.value}</span>
                  <span className="case-metrics__label">{m.label}</span>
                </li>
              ))}
            </ul>
          </>
        );
        const story = (
          <>
            <p><Rich text={c.summary} /></p>
            <h3 className="case-study__h3">O que fizemos</h3>
            <ul className="checklist">
              {c.actions.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
            {c.site ? (
              <p className="case-study__site">
                <a href={c.site.url} target="_blank" rel="noopener">Ver o site: {c.site.label}</a>
              </p>
            ) : null}
          </>
        );
        const media = c.images.map((img) => (
          <figure key={img.src} className={`case-figure ${img.contain ? "case-figure--contain" : ""}`}>
            <a href={img.src} target="_blank" rel="noopener" aria-label={`Abrir imagem ampliada: ${img.alt}`}>
              <Image src={img.src} alt={img.alt} width={img.width} height={img.height} sizes={c.wide ? "(min-width: 1180px) 1100px, 100vw" : "(min-width: 900px) 560px, 100vw"} />
            </a>
            {img.caption ? <figcaption>{img.caption}</figcaption> : null}
          </figure>
        ));
        return (
          <section
            key={c.slug}
            id={c.slug}
            className={`section case-study ${i % 2 === 0 ? "section--paper" : ""}`}
            aria-labelledby={`${c.slug}-titulo`}
          >
            {c.wide || c.images.length === 0 ? (
              <div className="wrap">
                <div className="case-study__wide">
                  <div className="case-study__text">{who}</div>
                  <div className="case-study__text">{story}</div>
                </div>
                {c.images.length ? <div className="case-study__media case-study__media--wide">{media}</div> : null}
              </div>
            ) : (
              <div className={`wrap case-study__grid ${i % 2 === 1 ? "case-study__grid--flip" : ""}`}>
                <div className="case-study__text">
                  {who}
                  {story}
                </div>
                <div className="case-study__media">{media}</div>
              </div>
            )}
          </section>
        );
      })}

      <section id="sites" className="section" aria-labelledby="sites-titulo">
        <div className="wrap">
          <div className="section-head section-head--split">
            <h2 id="sites-titulo" className="h2">Sites que criamos.</h2>
            <p className="lead">
              Sites rápidos, com a identidade de cada marca e <strong>prontos para aparecer no Google</strong> desde o
              primeiro dia.
            </p>
          </div>
          <ul className="sites-grid">
            {builtSites.map((s) => (
              <li key={s.url}>
                <a className="site-card" href={s.url} target="_blank" rel="noopener">
                  <span className="site-card__frame">
                    <span className="site-card__bar" aria-hidden="true"><i /><i /><i /></span>
                    <Image src={s.image} alt={`Página inicial do site ${s.name}`} width={1200} height={593} sizes="(min-width: 900px) 540px, 100vw" />
                  </span>
                  <span className="site-card__name">{s.name}</span>
                  <span className="site-card__what">{s.what} · {s.url.replace(/^https:\/\/(www\.)?/, "").replace(/\/$/, "")}</span>
                </a>
              </li>
            ))}
          </ul>
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
        </div>
      </section>

      <WhatsAppCta
        title="Quer resultados assim na sua empresa?"
        text="Chame a gente no WhatsApp. Fazemos uma avaliação gratuita de como sua empresa aparece hoje no Google e mostramos o primeiro passo."
        message="Olá! Vi os cases no site da Encantos Hub e quero resultados assim para a minha empresa."
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Cases de SEO da Encantos Hub",
          url: `${site.url}/cases`,
          itemListElement: caseStudies.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: `${c.client}: ${c.title}`,
            url: `${site.url}/cases#${c.slug}`,
          })),
        }}
      />
    </>
  );
}
