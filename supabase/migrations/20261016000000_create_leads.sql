-- Leads do formulário de contato (aplicado no projeto Supabase encantoshub-site)
create table public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  nome text not null check (char_length(nome) between 2 and 120),
  email text not null check (char_length(email) between 5 and 200),
  whatsapp text check (char_length(whatsapp) <= 30),
  empresa text check (char_length(empresa) <= 160),
  site text check (char_length(site) <= 300),
  interesse text check (char_length(interesse) <= 80),
  mensagem text check (char_length(mensagem) <= 3000),
  origem text check (char_length(origem) <= 200),
  status text not null default 'novo'
);
alter table public.leads enable row level security;
-- visitantes só podem inserir; leitura apenas pelo painel do Supabase
create policy "Visitantes podem enviar leads" on public.leads
  for insert to anon, authenticated
  with check (status = 'novo');
revoke select, update, delete on public.leads from anon;
