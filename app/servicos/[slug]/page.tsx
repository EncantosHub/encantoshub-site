import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaqList, WhatsAppCta } from "@/components/WhatsAppCta";
import { Crumbs } from "@/components/Crumbs";
import { JsonLd, faqSchema } from "@/components/JsonLd";
import { services } from "@/lib/content";
import { site, whatsappLink } from "@/lib/site";
import { Rich } from "@/components/Rich";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.metaDescription,
    alternates: { canonical: `/servicos/${s.slug}` },
    openGraph: { title: `${s.title} | Encantos Hub`, description: s.metaDescription, url: `/servicos/${s.slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  // a foto vai na coluna mais curta, para as duas colunas terminarem alinhadas
  const leftSize = s.forWho.length;
  const rightSize = s.deliverables.reduce((n, d) => n + d.length + 45, 0);
  const photoLeft = leftSize <= rightSize;
  const photo = s.photo ? (
    <figure className="split__photo">
      <Image src={s.photo.src} alt={s.photo.alt} fill sizes="(min-width: 900px) 520px, 100vw" style={{ objectPosition: s.photo.position }} />
    </figure>
  ) : null;

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Crumbs items={[{ href: "/servicos", label: "Serviços" }, { href: `/servicos/${s.slug}`, label: s.name }]} />
          <h1>{s.title}</h1>
          <p className="lead"><Rich text={s.intro} /></p>
          {s.facts ? (
            <dl className="facts facts--hero">
              {s.facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>
                    <strong>{f.value}</strong> {f.note}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}
          <p className="hero__actions">
            <a className="btn" href={whatsappLink(`Olá! Vim pelo site da Encantos Hub e quero saber mais sobre ${s.name}.`)} target="_blank" rel="noopener" data-cta="servico-topo">
              Falar no WhatsApp
            </a>
          </p>
        </div>
      </section>

      <section className="section section--paper">
        <div className="wrap split split--media">
          <div className="prose-block">
            <h2>Para quem é</h2>
            <p><Rich text={s.forWho} /></p>
            {photoLeft ? photo : null}
          </div>
          <div className="prose-block">
            <h2>O que entregamos</h2>
            <ul className="checklist">
              {s.deliverables.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            {!photoLeft ? photo : null}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="como">
        <div className="wrap">
          <div className="section-head">
            <h2 id="como" className="h2">Como funciona.</h2>
          </div>
          <ol className="steps">
            {s.howItWorks.map((h, i) => (
              <li className="step" key={h.step}>
                <span className="step__n" aria-hidden="true">{i + 1}</span>
                <h3>{h.step}</h3>
                <p>{h.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--paper" aria-labelledby="duvidas">
        <div className="wrap">
          <div className="section-head">
            <h2 id="duvidas" className="h2">Dúvidas comuns.</h2>
          </div>
          <FaqList items={s.faq} />
        </div>
      </section>

      <WhatsAppCta
        title="Quer saber se faz sentido para o seu negócio?"
        message={`Olá! Vim pelo site da Encantos Hub e quero saber mais sobre ${s.name}.`}
      />

      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.title,
            description: s.metaDescription,
            serviceType: s.name,
            url: `${site.url}/servicos/${s.slug}`,
            provider: { "@id": `${site.url}/#organizacao` },
            areaServed: { "@type": "Country", name: "Brasil" },
          },
          faqSchema(s.faq),
        ]}
      />
    </>
  );
}
