import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Crumbs } from "@/components/Crumbs";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a Encantos Hub pelo WhatsApp, e-mail ou formulário e receba um primeiro olhar sobre a presença digital do seu negócio.",
  alternates: { canonical: "/contato" },
};

export default function Contato() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <Crumbs items={[{ href: "/contato", label: "Contato" }]} />
        <div className="contact">
          <div className="contact__aside">
            <h1>Vamos conversar sobre o seu negócio.</h1>
            <p className="lead">Conte onde sua marca está hoje e o que você quer alcançar. Respondemos em até um dia útil.</p>
            <div className="contact__channels">
              <a href={whatsappLink()} target="_blank" rel="noopener">WhatsApp {site.whatsappDisplay}</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href={site.linkedin} target="_blank" rel="noopener">LinkedIn</a>
            </div>
            <p>Base em {site.base}. Atendimento remoto em todo o Brasil.</p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
