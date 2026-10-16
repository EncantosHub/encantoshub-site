import Link from "next/link";
import { Logo } from "./Logo";
import { services } from "@/lib/content";
import { site, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div className="footer__brand">
          <Logo tone="light" />
          <p className="footer__tagline">{site.tagline}.</p>
          <p className="footer__base">Base em {site.base}. Atendimento em todo o Brasil.</p>
        </div>
        <nav aria-label="Serviços">
          <h2 className="footer__title">Serviços</h2>
          <ul>
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/servicos/${s.slug}`}>{s.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Agência">
          <h2 className="footer__title">Agência</h2>
          <ul>
            <li><Link href="/cases">Cases</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/sobre">Sobre nós</Link></li>
            <li><Link href="/contato">Contato</Link></li>
            <li><a href="https://www.pipalocal.com.br" target="_blank" rel="noopener">Pipa Local</a></li>
          </ul>
        </nav>
        <div>
          <h2 className="footer__title">Fale com a gente</h2>
          <ul>
            <li><a href={whatsappLink()} target="_blank" rel="noopener">WhatsApp {site.whatsappDisplay}</a></li>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><a href={site.linkedin} target="_blank" rel="noopener">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="wrap footer__legal">© {new Date().getFullYear()} Encantos Hub. Todos os direitos reservados.</div>
    </footer>
  );
}
