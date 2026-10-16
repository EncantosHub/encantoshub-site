import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
  }

  // honeypot: robôs preenchem, pessoas não
  if (str(body.website_hp, 100)) return NextResponse.json({ ok: true });

  const nome = str(body.nome, 120);
  const email = str(body.email, 200);
  if (nome.length < 2) return NextResponse.json({ error: "Informe seu nome." }, { status: 400 });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: "Informe um e-mail válido." }, { status: 400 });

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) return NextResponse.json({ error: "Formulário temporariamente indisponível." }, { status: 503 });

  const supabase = createClient(url, key, { auth: { persistSession: false } });
  const { error } = await supabase.from("leads").insert({
    nome,
    email,
    whatsapp: str(body.whatsapp, 30) || null,
    empresa: str(body.empresa, 160) || null,
    site: str(body.site, 300) || null,
    interesse: str(body.interesse, 80) || null,
    mensagem: str(body.mensagem, 3000) || null,
    origem: str(body.origem, 200) || null,
  });

  if (error) {
    console.error("Erro ao salvar lead", error.message);
    return NextResponse.json({ error: "Não foi possível enviar agora." }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
