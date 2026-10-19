// Gera as logos, ícones e imagem OG a partir da geometria do símbolo.
// Uso: npm run logos
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import opentype from "opentype.js";
import sharp from "sharp";
import { markGroup, COLORS, MARK_VIEWBOX } from "./mark.mjs";

const require = createRequire(import.meta.url);
const fontDir = path.dirname(require.resolve("@fontsource/manrope/package.json")) + "/files";
const f500 = opentype.parse(fs.readFileSync(`${fontDir}/manrope-latin-500-normal.woff`).buffer);
const f600 = opentype.parse(fs.readFileSync(`${fontDir}/manrope-latin-600-normal.woff`).buffer);

const out = path.resolve("public/brand");
const appDir = path.resolve("app");
fs.mkdirSync(out, { recursive: true });

function textPath(font, text, x, y, size, letterSpacingEm = 0) {
  if (!letterSpacingEm) return font.getPath(text, x, y, size).toPathData(2);
  let cx = x;
  let d = "";
  for (const ch of text) {
    d += font.getPath(ch, cx, y, size).toPathData(2);
    cx += font.getAdvanceWidth(ch, size) + letterSpacingEm * size;
  }
  return d;
}

// --- Símbolo ---
const symbol = ({ stroke, dot, bg }) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${MARK_VIEWBOX}">${
    bg ? `<rect x="-40" y="-40" width="340" height="360" fill="${bg}"/>` : ""
  }${markGroup({ stroke, dot })}</svg>`;

// --- Logo horizontal: símbolo + "encantos" + "HUB" ---
function horizontal({ stroke, dot, word, hub, bg }) {
  const encantos = textPath(f500, "encantos", 300, 158, 150);
  const hubD = textPath(f600, "HUB", 304, 262, 72, 0.55);
  const w = 1000;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} 280">${
    bg ? `<rect width="${w}" height="280" fill="${bg}"/>` : ""
  }<g>${markGroup({ stroke, dot })}</g><path d="${encantos}" fill="${word}"/><path d="${hubD}" fill="${hub}"/></svg>`;
}

// --- Logo empilhada (símbolo acima do nome) ---
function stacked({ stroke, dot, word, hub }) {
  const encantos = textPath(f500, "encantos", 0, 0, 150);
  const bbox = f500.getPath("encantos", 0, 0, 150).getBoundingBox();
  const ew = bbox.x2 - bbox.x1;
  const W = Math.ceil(ew + 40);
  const ex = (W - ew) / 2 - bbox.x1;
  const enc = textPath(f500, "encantos", ex, 420, 150);
  let hubW = 0;
  for (const ch of "HUB") hubW += f600.getAdvanceWidth(ch, 72) + 0.55 * 72;
  hubW -= 0.55 * 72;
  const hubD = textPath(f600, "HUB", (W - hubW) / 2, 520, 72, 0.55);
  void encantos;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} 540"><g transform="translate(${(W - 260) / 2} 0)">${markGroup({ stroke, dot })}</g><path d="${enc}" fill="${word}"/><path d="${hubD}" fill="${hub}"/></svg>`;
}

const files = {
  "encantoshub-simbolo.svg": symbol({ stroke: COLORS.teal, dot: COLORS.terra }),
  "encantoshub-simbolo-branco.svg": symbol({ stroke: COLORS.white, dot: COLORS.white }),
  "encantoshub-simbolo-creme.svg": symbol({ stroke: COLORS.cream, dot: COLORS.terra }),
  "encantoshub-logo.svg": horizontal({ stroke: COLORS.teal, dot: COLORS.terra, word: COLORS.ink, hub: COLORS.teal }),
  "encantoshub-logo-branco.svg": horizontal({ stroke: COLORS.white, dot: COLORS.white, word: COLORS.white, hub: COLORS.white }),
  "encantoshub-logo-fundo-escuro.svg": horizontal({ stroke: COLORS.teal, dot: COLORS.terra, word: COLORS.cream, hub: COLORS.teal }),
  "encantoshub-logo-empilhada.svg": stacked({ stroke: COLORS.teal, dot: COLORS.terra, word: COLORS.ink, hub: COLORS.teal }),
  // versões com fundo, como no board
  "encantoshub-logo-sobre-creme.svg": horizontal({ stroke: COLORS.teal, dot: COLORS.terra, word: COLORS.ink, hub: COLORS.teal, bg: COLORS.cream }),
  "encantoshub-logo-sobre-verde.svg": horizontal({ stroke: COLORS.white, dot: COLORS.white, word: COLORS.white, hub: COLORS.white, bg: COLORS.teal }),
  "encantoshub-logo-sobre-terracota.svg": horizontal({ stroke: COLORS.white, dot: COLORS.white, word: COLORS.white, hub: COLORS.white, bg: COLORS.terra }),
};
for (const [name, svg] of Object.entries(files)) fs.writeFileSync(path.join(out, name), svg);

// PNGs das logos
for (const name of ["encantoshub-logo", "encantoshub-logo-sobre-creme", "encantoshub-logo-sobre-verde", "encantoshub-logo-sobre-terracota", "encantoshub-logo-branco", "encantoshub-logo-empilhada"]) {
  await sharp(Buffer.from(files[`${name}.svg`]), { density: 300 }).resize({ width: 2000 }).png().toFile(path.join(out, `${name}.png`));
}

// --- Ícone de app (quadrado arredondado, como no board) ---
const appIcon = (size, radius) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="${size}" height="${size}"><rect width="512" height="512" rx="${radius}" fill="#FAF6EF"/><g transform="translate(96 88) scale(1.25)">${markGroup({ stroke: COLORS.teal, dot: COLORS.terra, strokeWidth: 9 })}</g></svg>`;
fs.writeFileSync(path.join(appDir, "icon.svg"), appIcon(512, 112));
await sharp(Buffer.from(appIcon(512, 112))).png().toFile(path.join(out, "encantoshub-icone-512.png"));
await sharp(Buffer.from(appIcon(180, 0))).resize(180).png().toFile(path.join(appDir, "apple-icon.png"));
await sharp(Buffer.from(appIcon(64, 112))).resize(48).toFormat("png").toFile(path.join(out, "favicon-48.png"));

// --- Imagem Open Graph 1200x630 ---
const og = (() => {
  const encantos = textPath(f500, "encantos", 0, 0, 1);
  void encantos;
  const title = "SEO, GEO e presença local";
  const sub = "Estratégia digital para sua marca ser encontrada no Google, no mapa e nas IAs.";
  const t1 = textPath(f500, title, 90, 420, 64);
  const t2 = textPath(f500, sub, 90, 490, 30);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630"><rect width="1200" height="630" fill="${COLORS.cream}"/><g transform="translate(90 70) scale(0.78)">${horizontal({ stroke: COLORS.teal, dot: COLORS.terra, word: COLORS.ink, hub: COLORS.teal }).replace(/^<svg[^>]*>|<\/svg>$/g, "")}</g><path d="${t1}" fill="${COLORS.ink}"/><path d="${t2}" fill="#4a4a4a"/><rect x="90" y="560" width="1020" height="6" rx="3" fill="${COLORS.teal}"/><circle cx="1110" cy="563" r="12" fill="${COLORS.terra}"/></svg>`;
})();
await sharp(Buffer.from(og)).png().toFile(path.join(appDir, "opengraph-image.png"));
fs.copyFileSync(path.join(appDir, "opengraph-image.png"), path.join(appDir, "twitter-image.png"));

console.log("Logos geradas em", out);
