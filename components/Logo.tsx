import { MARK_DOT, MARK_STROKES, MARK_VIEWBOX } from "@/lib/mark";

export function Mark({
  className,
  stroke = "var(--teal)",
  dot = "var(--terra)",
  strokeWidth = 8,
  title,
}: {
  className?: string;
  stroke?: string;
  dot?: string;
  strokeWidth?: number;
  title?: string;
}) {
  return (
    <svg className={className} viewBox={MARK_VIEWBOX} role={title ? "img" : undefined} aria-hidden={title ? undefined : true}>
      {title ? <title>{title}</title> : null}
      {MARK_STROKES.map((d) => (
        <path key={d} d={d} fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      ))}
      <circle cx={MARK_DOT.cx} cy={MARK_DOT.cy} r={MARK_DOT.r} fill={dot} />
    </svg>
  );
}

export function Logo({ tone = "default" }: { tone?: "default" | "light" }) {
  const light = tone === "light";
  return (
    <span className={`logo ${light ? "logo--light" : ""}`}>
      <Mark className="logo__mark" stroke={light ? "var(--cream)" : "var(--teal)"} />
      <span className="logo__type">
        <span className="logo__word">encantos</span>
        <span className="logo__hub">HUB</span>
      </span>
    </span>
  );
}
