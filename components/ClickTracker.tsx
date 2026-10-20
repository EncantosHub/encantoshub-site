"use client";

import { useEffect } from "react";

/** Conta os cliques em links de WhatsApp e grava no Supabase (tabela whatsapp_clicks). */
export function ClickTracker() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const a = (e.target as HTMLElement | null)?.closest?.('a[href^="https://wa.me/"]') as HTMLAnchorElement | null;
      if (!a) return;
      const payload = JSON.stringify({
        pagina: location.pathname,
        botao: a.dataset.cta || a.textContent?.trim().slice(0, 60) || "",
        referencia: document.referrer.slice(0, 300),
      });
      try {
        if (!navigator.sendBeacon?.("/api/clique", new Blob([payload], { type: "application/json" }))) {
          fetch("/api/clique", { method: "POST", body: payload, keepalive: true }).catch(() => {});
        }
      } catch {
        /* sem registro, o link segue normalmente */
      }
    }
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);
  return null;
}
