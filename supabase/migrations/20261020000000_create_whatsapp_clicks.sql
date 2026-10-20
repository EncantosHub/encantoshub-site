-- Cliques nos botões de WhatsApp (contato centralizado no WhatsApp; sem dados pessoais)
create table public.whatsapp_clicks (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  pagina text not null check (char_length(pagina) between 1 and 200),
  botao text check (char_length(botao) <= 60),
  referencia text check (char_length(referencia) <= 300)
);
alter table public.whatsapp_clicks enable row level security;
create policy "Visitantes registram cliques" on public.whatsapp_clicks
  for insert to anon, authenticated
  with check (true);
revoke select, update, delete on public.whatsapp_clicks from anon;
create index whatsapp_clicks_created_at_idx on public.whatsapp_clicks (created_at desc);
