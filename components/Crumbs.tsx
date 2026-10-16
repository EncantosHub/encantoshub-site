import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { site } from "@/lib/site";

export function Crumbs({ items }: { items: { href: string; label: string }[] }) {
  const all = [{ href: "/", label: "Início" }, ...items];
  return (
    <>
      <nav className="crumbs" aria-label="Você está em">
        {all.map((c, i) => (
          <span key={c.href} style={{ display: "contents" }}>
            {i > 0 ? <span aria-hidden="true">/</span> : null}
            {i < all.length - 1 ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
          </span>
        ))}
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.label, item: `${site.url}${c.href === "/" ? "" : c.href}` })),
        }}
      />
    </>
  );
}
