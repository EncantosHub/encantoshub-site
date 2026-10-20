import { whatsappLink } from "@/lib/site";
import { Rich } from "@/components/Rich";

/** Bloco final de contato: o único canal é o WhatsApp. */
export function WhatsAppCta({
  title = "Quer sua empresa aparecendo no Google?",
  text = "Chame a gente no WhatsApp. Avaliamos como sua empresa aparece hoje nas pesquisas e mostramos o primeiro passo, sem compromisso.",
  message,
  headingId = "fale",
}: {
  title?: string;
  text?: string;
  message?: string;
  headingId?: string;
}) {
  return (
    <section className="cta-band" aria-labelledby={headingId}>
      <div className="wrap cta-band__inner">
        <div>
          <h2 id={headingId} className="h2">{title}</h2>
          <p className="lead">{text}</p>
        </div>
        <div className="cta-band__actions">
          <a className="btn btn--light btn--big" href={whatsappLink(message)} target="_blank" rel="noopener" data-cta="cta-final">
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="faq">
      {items.map((f) => (
        <details key={f.q}>
          <summary>{f.q}</summary>
          <p><Rich text={f.a} /></p>
        </details>
      ))}
    </div>
  );
}
