import { consultoriaFlow as f } from "@/lib/content";
import { Rich } from "@/components/Rich";

type IconName = "meeting" | "setup" | "site" | "plan";

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    meeting: (
      <>
        <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h8A2.5 2.5 0 0 1 17 6.5v5a2.5 2.5 0 0 1-2.5 2.5H9l-4 3v-3.2A2.5 2.5 0 0 1 4 11.5Z" />
        <path d="M19.5 9.5A2 2 0 0 1 21 11.4v4.1a2 2 0 0 1-2 2h-.5V20l-3-2.5H12" />
      </>
    ),
    setup: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7" />
      </>
    ),
    site: (
      <>
        <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
        <path d="M3 9h18M6.5 6.8h.01M9 6.8h.01M8 13h8M8 16h5" />
      </>
    ),
    plan: (
      <>
        <path d="M4 20V4M4 20h16" />
        <path d="m7 15 4-4 3 3 5-6" />
        <path d="M15 8h4v4" />
      </>
    ),
  };
  return (
    <span className="flow__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">{paths[name]}</svg>
    </span>
  );
}

function Card({ icon, item, n }: { icon: IconName; item: { name: string; text: string }; n?: number }) {
  return (
    <div className="flow__card">
      <Icon name={icon} />
      {n ? <span className="flow__n">Etapa {n}</span> : null}
      <h3>{item.name}</h3>
      <p><Rich text={item.text} /></p>
    </div>
  );
}

/** Reunião → (setup inicial OU criação de site) → plano personalizado. */
export function ConsultoriaFlow() {
  return (
    <div className="flow" role="list">
      <div className="flow__col" role="listitem">
        <Card icon="meeting" item={f.meeting} n={1} />
      </div>
      <span className="flow__arrow" aria-hidden="true" />
      <div className="flow__col flow__col--or" role="listitem">
        <span className="flow__n flow__n--top">Etapa 2</span>
        <Card icon="setup" item={f.setup} />
        <span className="flow__or">ou</span>
        <Card icon="site" item={f.site} />
      </div>
      <span className="flow__arrow" aria-hidden="true" />
      <div className="flow__col" role="listitem">
        <Card icon="plan" item={f.plan} n={3} />
      </div>
    </div>
  );
}
