"use client";

import { useState } from "react";
import { services } from "@/lib/content";
import { whatsappLink } from "@/lib/site";

type State = { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "error"; message: string };

export function ContactForm({ defaultInterest = "" }: { defaultInterest?: string }) {
  const [state, setState] = useState<State>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setState({ kind: "sending" });
    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, origem: window.location.pathname }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Não foi possível enviar agora.");
      setState({ kind: "sent" });
      form.reset();
    } catch (err) {
      setState({ kind: "error", message: err instanceof Error ? err.message : "Não foi possível enviar agora." });
    }
  }

  if (state.kind === "sent") {
    return (
      <div className="form-done" role="status">
        <h3>Mensagem enviada</h3>
        <p>Recebemos seus dados e respondemos em até um dia útil. Se preferir adiantar a conversa, chame a gente no WhatsApp.</p>
        <a className="btn" href={whatsappLink()} target="_blank" rel="noopener">Abrir WhatsApp</a>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <div className="form__row">
        <label>
          Nome
          <input name="nome" required minLength={2} maxLength={120} autoComplete="name" />
        </label>
        <label>
          E-mail
          <input name="email" type="email" required maxLength={200} autoComplete="email" />
        </label>
      </div>
      <div className="form__row">
        <label>
          WhatsApp
          <input name="whatsapp" type="tel" maxLength={30} autoComplete="tel" placeholder="(00) 00000-0000" />
        </label>
        <label>
          Empresa
          <input name="empresa" maxLength={160} autoComplete="organization" />
        </label>
      </div>
      <div className="form__row">
        <label>
          Site ou Instagram
          <input name="site" maxLength={300} placeholder="se tiver" />
        </label>
        <label>
          Interesse
          <select name="interesse" defaultValue={defaultInterest}>
            <option value="">Ainda não sei</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>{s.name}</option>
            ))}
          </select>
        </label>
      </div>
      <label>
        Conte um pouco sobre o seu negócio
        <textarea name="mensagem" rows={4} maxLength={3000} />
      </label>
      {/* armadilha para robôs */}
      <label className="hp" aria-hidden="true">
        Não preencha
        <input name="website_hp" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="form__actions">
        <button className="btn" type="submit" disabled={state.kind === "sending"}>
          {state.kind === "sending" ? "Enviando..." : "Enviar mensagem"}
        </button>
        {state.kind === "error" ? (
          <p className="form__error" role="alert">
            {state.message} Tente de novo ou fale direto no <a href={whatsappLink()} target="_blank" rel="noopener">WhatsApp</a>.
          </p>
        ) : null}
      </div>
    </form>
  );
}
