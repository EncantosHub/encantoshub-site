// Chave publicável do Supabase: é feita para ficar no código cliente.
// A segurança vem do RLS da tabela `leads` (visitantes só conseguem inserir).
// Variáveis de ambiente na Vercel, se definidas, têm prioridade.
export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://zefqhrpxqreiptgnjvbk.supabase.co";
export const SUPABASE_PUBLISHABLE_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_BzBnWIGTdQz7BtdkGMwMlw_G-1YqN1S";
