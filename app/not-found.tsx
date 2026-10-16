import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <h1>Esta página não existe mais.</h1>
        <p className="lead">O endereço pode ter mudado. Volte para o início ou veja nossos serviços.</p>
        <p className="hero__actions">
          <Link className="btn" href="/">Ir para o início</Link>
          <Link className="btn btn--ghost" href="/servicos">Ver serviços</Link>
        </p>
      </div>
    </section>
  );
}
