import { Fragment } from "react";

/** Converte **trecho** em <strong> (negrito azul do site). */
export function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("**") && p.endsWith("**") ? <strong key={i}>{p.slice(2, -2)}</strong> : <Fragment key={i}>{p}</Fragment>
      )}
    </>
  );
}

/** Texto sem as marcações, para metadados e dados estruturados. */
export function plain(text: string) {
  return text.replace(/\*\*([^*]+)\*\*/g, "$1");
}
