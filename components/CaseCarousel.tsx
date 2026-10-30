"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { CarouselItem } from "@/lib/cases";

function Icon({ name }: { name: "pin" | "browser" }) {
  return name === "pin" ? (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
      <path d="M3 9h18M6.5 6.8h.01M9 6.8h.01" />
    </svg>
  );
}

export function CaseCarousel({ items }: { items: CarouselItem[] }) {
  const track = useRef<HTMLUListElement>(null);
  const paused = useRef(false);
  const drag = useRef<{ x: number; left: number; moved: boolean } | null>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const step = useCallback((dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("li");
    const w = card ? card.getBoundingClientRect().width + 14 : 240;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    if (dir === 1 && atEnd) el.scrollTo({ left: 0, behavior: "smooth" });
    else if (dir === -1 && el.scrollLeft <= 4) el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
    else el.scrollBy({ left: w * dir, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () =>
      setEdge({ start: el.scrollLeft <= 4, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 });
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const id = reduce
      ? undefined
      : window.setInterval(() => {
          if (!paused.current && document.visibilityState === "visible") step(1);
        }, 2800);
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (id) window.clearInterval(id);
    };
  }, [step]);

  const pause = () => (paused.current = true);
  const resume = () => (paused.current = false);

  return (
    <div
      className={`case-carousel ${edge.start ? "is-start" : ""} ${edge.end ? "is-end" : ""}`}
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
      onTouchStart={pause}
    >
      <ul
        ref={track}
        className="case-carousel__track"
        aria-label="Clientes e cases"
        onPointerDown={(e) => {
          if (e.pointerType !== "mouse" || !track.current) return;
          drag.current = { x: e.clientX, left: track.current.scrollLeft, moved: false };
        }}
        onPointerMove={(e) => {
          const d = drag.current;
          if (!d || !track.current) return;
          const dx = e.clientX - d.x;
          if (Math.abs(dx) > 5) {
            d.moved = true;
            track.current.classList.add("is-dragging");
          }
          if (d.moved) track.current.scrollLeft = d.left - dx;
        }}
        onPointerUp={() => {
          track.current?.classList.remove("is-dragging");
          setTimeout(() => (drag.current = null), 0);
        }}
        onPointerLeave={() => {
          track.current?.classList.remove("is-dragging");
          drag.current = null;
        }}
        onClickCapture={(e) => {
          if (drag.current?.moved) {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
      >
        {items.map((it) => (
          <li key={it.href}>
            <a className="case-chip" href={it.href} draggable={false}>
              <span className={`case-chip__logo ${it.logoDark ? "case-chip__logo--dark" : ""}`}>
                {it.logo ? (
                  <Image src={it.logo} alt={`Logo ${it.name}`} width={120} height={120} draggable={false} />
                ) : it.icon ? (
                  <Icon name={it.icon} />
                ) : null}
              </span>
              <span className="case-chip__name">{it.name}</span>
              <span className="case-chip__result">
                <strong>{it.value}</strong> {it.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
      <div className="case-carousel__nav">
        <button type="button" aria-label="Cases anteriores" onClick={() => step(-1)}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
        </button>
        <button type="button" aria-label="Próximos cases" onClick={() => step(1)}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
}
