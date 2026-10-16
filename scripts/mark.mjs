// Geometria do símbolo EH (ondas + bússola + H) — viewBox 0 0 260 280
export const MARK_VIEWBOX = "0 0 260 280";

export const MARK_STROKES = [
  // C / bússola aberta
  "M 177.6 32.1 A 120 120 0 1 0 188.6 241.8",
  // ondas
  "M 9 124 C 38 104, 68 104, 94 117 C 109 125, 122 127, 136 120",
  "M 6 154 C 35 134, 65 134, 91 147 C 106 155, 120 157, 136 150",
  "M 11 184 C 40 164, 70 164, 96 177 C 111 185, 124 187, 136 180",
  // H
  "M 179 100 V 206",
  "M 241 94 V 214",
  "M 142 166 C 151 151, 165 150, 179 157 L 241 157",
];

export const MARK_DOT = { cx: 220, cy: 56, r: 14 };

export const COLORS = {
  teal: "#2F8F83",
  cream: "#EFE6D7",
  terra: "#C86A4B",
  ink: "#222222",
  gray: "#777777",
  white: "#FFFFFF",
};

export function markGroup({ stroke, dot, strokeWidth = 8 }) {
  const paths = MARK_STROKES.map(
    (d) => `<path d="${d}" fill="none" stroke="${stroke}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/>`
  ).join("");
  return `${paths}<circle cx="${MARK_DOT.cx}" cy="${MARK_DOT.cy}" r="${MARK_DOT.r}" fill="${dot}"/>`;
}
