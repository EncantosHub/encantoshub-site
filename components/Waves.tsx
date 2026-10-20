"use client";

import { useEffect, useRef } from "react";

const W = 1000;
const H = 230;
const BASES = [70, 130, 190];
const STEP = 20;

function buildPath(base: number, phase: number, ampAt: (x: number) => number) {
  let d = "";
  for (let x = 0; x <= W; x += STEP) {
    const y = base + ampAt(x) * Math.sin((x / W) * Math.PI * 2.4 + phase);
    d += `${x === 0 ? "M" : "L"} ${x} ${y.toFixed(1)} `;
  }
  return d;
}

/**
 * Ondas da marca: desenham-se ao abrir a página, ondulam devagar
 * e ficam mais altas perto do mouse (ou do dedo, no celular).
 */
export function Waves({ className = "" }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathsRef = useRef<(SVGPathElement | null)[]>([]);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let pointerX = -1; // posição do ponteiro em coordenadas do SVG (-1 = fora)
    let energy = 0; // 0..1, cresce perto do ponteiro e volta suavemente
    let target = 0;
    let visible = true;
    let raf = 0;
    const start = performance.now();

    const draw = (now: number) => {
      const t = (now - start) / 1000;
      energy += (target - energy) * 0.06;
      BASES.forEach((base, i) => {
        const ampAt = (x: number) => {
          const near = pointerX < 0 ? 0 : Math.exp(-((x - pointerX) ** 2) / (2 * 140 ** 2));
          return 16 + 26 * energy * near;
        };
        const d = buildPath(base, t * 0.9 + i * 0.7, ampAt);
        pathsRef.current[i]?.setAttribute("d", d);
      });
      if (visible) raf = requestAnimationFrame(draw);
    };

    const onMove = (e: PointerEvent) => {
      const r = svg.getBoundingClientRect();
      const inside = e.clientY > r.top - 120 && e.clientY < r.bottom + 120 && e.clientX > r.left - 60 && e.clientX < r.right + 60;
      if (!inside) {
        target = 0;
        return;
      }
      pointerX = ((e.clientX - r.left) / r.width) * W;
      target = 1;
    };
    const onLeave = () => (target = 0);

    if (reduce) {
      BASES.forEach((base, i) => pathsRef.current[i]?.setAttribute("d", buildPath(base, i * 0.7, () => 16)));
      return;
    }

    const io = new IntersectionObserver(([entry]) => {
      const was = visible;
      visible = entry.isIntersecting;
      if (visible && !was) raf = requestAnimationFrame(draw);
    });
    io.observe(svg);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <svg ref={svgRef} className={`waves ${className}`} viewBox={`0 0 ${W} ${H}`} aria-hidden="true" focusable="false">
      {BASES.map((base, i) => (
        <path
          key={base}
          ref={(el) => {
            pathsRef.current[i] = el;
          }}
          className="waves__line"
          pathLength={1}
          d={buildPath(base, i * 0.7, () => 16)}
          style={{ animationDelay: `${i * 0.18}s` }}
        />
      ))}
    </svg>
  );
}
