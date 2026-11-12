import { whatsappLink } from "@/lib/site";
import { Rich } from "@/components/Rich";

/** Bloco final de todas as páginas: convite para agendar a reunião de diagnóstico (pelo WhatsApp). */
export function WhatsAppCta({
  title = "Agende uma reunião de diagnóstico.",
  text = "Conversamos sobre o seu negócio, o seu mercado e os recursos que você já tem, e montamos um projeto de SEO sob medida para a sua empresa.",
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
            Agendar reunião de diagnóstico
          </a>
          <p className="cta-band__note">O agendamento é feito pelo WhatsApp.</p>
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
