import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL } from "@/lib/supabase-config";

const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

// Registra cada clique em um botão de WhatsApp (sem dados pessoais).
export async function POST(req: Request) {
  let body: Record<string, unknown> = {};
  try {
    body = JSON.parse(await req.text());
  } catch {
    return new NextResponse(null, { status: 204 });
  }
  const pagina = str(body.pagina, 200);
  if (!pagina) return new NextResponse(null, { status: 204 });
  const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, { auth: { persistSession: false } });
  await supabase.from("whatsapp_clicks").insert({
    pagina,
    botao: str(body.botao, 60) || null,
    referencia: str(body.referencia, 300) || null,
  });
  return new NextResponse(null, { status: 204 });
}
