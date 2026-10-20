import { whatsappLink } from "@/lib/site";

/** Botão flutuante de WhatsApp, presente em todas as páginas. */
export function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={whatsappLink()}
      target="_blank"
      rel="noopener"
      data-cta="flutuante"
      aria-label="Falar com a Encantos Hub no WhatsApp"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <path
          d="M16 3.5C9.1 3.5 3.5 9 3.5 15.8c0 2.4.7 4.6 1.9 6.5L3.6 28.5l6.4-1.7c1.8 1 3.9 1.5 6 1.5 6.9 0 12.5-5.5 12.5-12.3S22.9 3.5 16 3.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path
          d="M12.2 9.6c-.3-.7-.6-.7-.9-.7h-.8c-.3 0-.7.1-1.1.5-.4.4-1.4 1.4-1.4 3.4s1.5 3.9 1.7 4.2c.2.3 2.8 4.4 6.9 6 3.4 1.3 4.1 1.1 4.8 1 .7-.1 2.4-1 2.7-1.9.3-.9.3-1.7.2-1.9-.1-.2-.4-.3-.8-.5l-2.7-1.3c-.4-.2-.6-.2-.9.2-.3.4-1 1.3-1.3 1.5-.2.3-.5.3-.9.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.7.1-.3.1-.5 0-.7l-1.6-3.2Z"
          fill="currentColor"
        />
      </svg>
      <span className="wa-float__label">WhatsApp</span>
    </a>
  );
}
