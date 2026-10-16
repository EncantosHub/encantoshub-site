import Link from "next/link";
import { Logo } from "./Logo";
import { whatsappLink } from "@/lib/site";

const nav = [
  { href: "/servicos", label: "Serviços" },
  { href: "/cases", label: "Cases" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

function Links() {
  return (
    <>
      {nav.map((n) => (
        <Link key={n.href} href={n.href}>
          {n.label}
        </Link>
      ))}
      <a className="btn btn--small" href={whatsappLink()} target="_blank" rel="noopener">
        Falar no WhatsApp
      </a>
    </>
  );
}

export function Header() {
  return (
    <header className="header">
      <div className="wrap header__inner">
        <Link href="/" className="header__brand" aria-label="Encantos Hub, página inicial">
          <Logo />
        </Link>
        <nav className="header__nav" aria-label="Principal">
          <Links />
        </nav>
        <details className="menu">
          <summary className="menu__toggle">
            <span className="sr-only">Menu</span>
            <span aria-hidden="true" className="menu__bars" />
          </summary>
          <nav className="menu__nav" aria-label="Principal (celular)">
            <Links />
          </nav>
        </details>
      </div>
    </header>
  );
}
