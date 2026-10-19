import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/ContactForm";
import { Crumbs } from "@/components/Crumbs";
import { JsonLd, faqSchema } from "@/components/JsonLd";
import { services } from "@/lib/content";
import { site } from "@/lib/site";

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
  const others = services.filter((x) => x.slug !== s.slug);

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Crumbs items={[{ href: "/servicos", label: "Serviços" }, { href: `/servicos/${s.slug}`, label: s.name }]} />
          <h1>{s.title}</h1>
          <p className="lead">{s.intro}</p>
        </div>
      </section>

      <section className="section section--paper">
        <div className="wrap split">
          <div className="prose-block">
            <h2>Para quem é</h2>
            <p>{s.forWho}</p>
            {s.facts ? (
              <dl className="facts">
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
          </div>
          <div className="prose-block">
            <h2>O que entregamos</h2>
            <ul className="checklist">
              {s.deliverables.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
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
          <div className="faq">
            {s.faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta" aria-labelledby="fale">
        <div className="wrap contact">
          <div className="contact__aside">
            <h2 id="fale" className="h2">Quer saber se faz sentido para o seu negócio?</h2>
            <p className="lead">Mande uma mensagem e respondemos com um primeiro olhar sobre a sua presença digital.</p>
            <p>Veja também: {others.map((o, i) => (
              <span key={o.slug}>{i > 0 ? ", " : ""}<Link href={`/servicos/${o.slug}`}>{o.name}</Link></span>
            ))}.</p>
          </div>
          <ContactForm defaultInterest={s.name} />
        </div>
      </section>

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
