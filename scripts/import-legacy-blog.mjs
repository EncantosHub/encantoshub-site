// Importa os artigos do site antigo (Lovable) para content/blog.
// Fonte: scripts/legacy-blog/posts.json (extraído de src/lib/blogData.ts do repositório site-encantos-hub)
// Uso: node scripts/import-legacy-blog.mjs
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { parse } from "node-html-parser";

const root = path.resolve(".");
const legacy = JSON.parse(fs.readFileSync(path.join(root, "scripts/legacy-blog/posts.json"), "utf8"));
const imgSrcDir = path.join(root, "scripts/legacy-blog/images");
const outDir = path.join(root, "content/blog");
const imgOutDir = path.join(root, "public/blog");
fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(imgOutDir, { recursive: true });

const slugs = new Set(legacy.map((p) => p.slug));
// links antigos que mudaram de nome
const renamed = { "o-que-e-hiperlink": "guia-hiperlink" };
const report = { unwrapped: [], images: 0 };

const slugify = (s) =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 70);

const categorySlug = (c) => slugify(c === "GMN" ? "perfil-da-empresa-no-google" : c);
const categoryName = (c) => (c === "GMN" ? "Perfil da Empresa no Google" : c);

async function convertImage(legacySrc, slug, alt) {
  const file = decodeURIComponent(legacySrc.replace("/images/blog/", ""));
  const input = path.join(imgSrcDir, file);
  if (!fs.existsSync(input)) throw new Error(`Imagem não encontrada: ${file}`);
  const base = slugify(file.replace(/\.(jpe?g|png)$/i, ""));
  const dir = path.join(imgOutDir, slug);
  fs.mkdirSync(dir, { recursive: true });
  const out = path.join(dir, `${base}.webp`);
  const info = await sharp(input).resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 80 }).toFile(out);
  report.images++;
  return { src: `/blog/${slug}/${base}.webp`, width: info.width, height: info.height, alt: alt || "" };
}

function wordsOf(html) {
  return parse(html).textContent.split(/\s+/).filter(Boolean).length;
}

const index = [];

for (const post of legacy) {
  const doc = parse(`<div id="root">${post.content}</div>`, { comment: false });
  const rootEl = doc.querySelector("#root");

  // H1 dentro do conteúdo vira o H1 da página (sem duplicar)
  let h1 = post.title;
  const h1El = rootEl.querySelector("h1");
  if (h1El) {
    h1 = h1El.textContent.trim();
    h1El.remove();
  }
  rootEl.querySelectorAll("h1").forEach((el) => (el.tagName = "H2"));

  // legendas pequenas → classe; demais estilos inline removidos
  rootEl.querySelectorAll("[style]").forEach((el) => {
    const st = el.getAttribute("style") || "";
    if (el.tagName === "P" && /font-size:\s*0\.9em/.test(st)) el.setAttribute("class", "caption");
    if (el.tagName === "DIV" && /display:\s*flex/.test(st)) el.setAttribute("class", "media-row");
    el.removeAttribute("style");
  });

  // ids nos títulos
  const used = new Set(rootEl.querySelectorAll("[id]").map((e) => e.id));
  rootEl.querySelectorAll("h2, h3").forEach((h) => {
    if (!h.id) {
      let id = slugify(h.textContent);
      while (used.has(id)) id += "-2";
      used.add(id);
      h.setAttribute("id", id);
    }
  });

  // links
  rootEl.querySelectorAll("a").forEach((a) => {
    let href = (a.getAttribute("href") || "").trim();
    href = href.replace(/^https?:\/\/(www\.)?encantoshub\.com\.br/, "") || "/";
    href = href.replace("wa.me/5511964721143", "wa.me/5584986240202"); // WhatsApp atual
    const m = href.match(/^\/blog\/([^/?#]+)/);
    if (m) {
      const target = renamed[m[1]] || m[1];
      if (!slugs.has(target)) {
        report.unwrapped.push(`${post.slug}: ${href} (artigo não existe)`);
        a.replaceWith(a.innerHTML);
        return;
      }
      href = `/blog/${target}`;
    }
    if (href.startsWith("/downloads/")) {
      report.unwrapped.push(`${post.slug}: ${href} (arquivo não existe)`);
      a.replaceWith(a.innerHTML);
      return;
    }
    a.setAttribute("href", href);
    if (/^https?:\/\//.test(href)) {
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener");
    } else {
      a.removeAttribute("target");
    }
  });

  // imagens
  for (const img of rootEl.querySelectorAll("img")) {
    const src = img.getAttribute("src") || "";
    if (!src.startsWith("/images/blog/")) continue;
    const conv = await convertImage(src, post.slug, img.getAttribute("alt"));
    img.setAttribute("src", conv.src);
    img.setAttribute("width", String(conv.width));
    img.setAttribute("height", String(conv.height));
    img.setAttribute("loading", "lazy");
    img.setAttribute("decoding", "async");
  }

  // tabelas com rolagem no celular
  rootEl.querySelectorAll("table").forEach((t) => {
    t.replaceWith(`<div class="table-wrap">${t.outerHTML}</div>`);
  });

  const html = rootEl.innerHTML.replace(/\n\s*\n+/g, "\n").trim() + "\n";
  fs.writeFileSync(path.join(outDir, `${post.slug}.html`), html);

  const cover = await convertImage(post.thumbnail, post.slug, post.title);
  const words = wordsOf(html);
  index.push({
    slug: post.slug,
    title: post.title,
    h1,
    summary: post.summary,
    date: post.date,
    category: categoryName(post.category),
    categorySlug: categorySlug(post.category),
    author: post.author,
    authorUrl: null, // sem LinkedIn: contato centralizado no WhatsApp
    cover,
    readingMinutes: Math.max(2, Math.round(words / 200)),
    hasToc: /<h2[^>]*>\s*Sumário/i.test(html),
  });
}

index.sort((a, b) => (a.date < b.date ? 1 : -1));
fs.writeFileSync(path.join(outDir, "posts.json"), JSON.stringify(index, null, 2) + "\n");
console.log(`${index.length} artigos importados, ${report.images} imagens convertidas.`);
if (report.unwrapped.length) console.log("Links removidos:\n- " + report.unwrapped.join("\n- "));
