import { pillars } from "@/lib/content";
import { Rich } from "@/components/Rich";

/** Os 5 pilares do nosso método de SEO, com as métricas acompanhadas em cada um. */
export function Pillars() {
  return (
    <ol className="pillars">
      {pillars.map((p, i) => (
        <li className="pillar" key={p.name}>
          <span className="pillar__n" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
          <h3>{p.name}</h3>
          <p><Rich text={p.text} /></p>
          <ul className="pillar__metrics" aria-label={`O que medimos em ${p.name}`}>
            {p.metrics.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

export function TailorMade() {
  return (
    <div className="tailor">
      <p className="tailor__title">Projeto sob medida, cobrado por hora.</p>
      <p>
        Atendemos <strong>empresas nacionais e internacionais</strong> e montamos cada projeto de acordo com o mercado, os
        recursos atuais e o momento do site. Costumamos trabalhar com <strong>contratos de exclusividade</strong>.
      </p>
    </div>
  );
}
