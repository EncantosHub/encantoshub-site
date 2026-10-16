# Site Encantos Hub

Next.js (App Router) publicado na Vercel, com formulário de contato gravando no Supabase.

- Repositório: EncantosHub/encantoshub-site — cada push na `main` publica o site.
- Supabase: projeto `encantoshub-site` (tabela `leads`, só inserção pública via RLS).

## Blog

Os artigos ficam em `content/blog/`:

- `posts.json` — lista com título, H1, resumo, data, categoria, capa e autor.
- `<slug>.html` — o corpo do artigo em HTML (sem o H1, que vem do `posts.json`).
- Imagens em `public/blog/<slug>/` (WebP).

Para publicar um artigo novo: crie `content/blog/<slug>.html`, adicione a entrada no
`posts.json` (copie uma existente como modelo) e coloque a capa em `public/blog/<slug>/`.
Para atualizar um artigo, edite o HTML e preencha `"updated": "AAAA-MM-DD"` no `posts.json`.

Os 9 artigos do site antigo foram importados com `node scripts/import-legacy-blog.mjs`
(fonte em `scripts/legacy-blog/`). Rodar o script de novo sobrescreve esses artigos.

## Comandos

```
npm install
npm run dev     # http://localhost:3000
npm run build
npm run logos   # regenera logos e ícones em public/brand
```
