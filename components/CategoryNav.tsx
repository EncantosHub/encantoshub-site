import Link from "next/link";
import { getCategories, getPosts } from "@/lib/blog";

export function CategoryNav({ current }: { current?: string }) {
  const cats = getCategories();
  return (
    <nav className="cat-nav" aria-label="Categorias do blog">
      <Link href="/blog" aria-current={!current ? "page" : undefined}>
        Todos <span>{getPosts().length}</span>
      </Link>
      {cats.map((c) => (
        <Link key={c.slug} href={`/blog/categoria/${c.slug}`} aria-current={current === c.slug ? "page" : undefined}>
          {c.name} <span>{c.count}</span>
        </Link>
      ))}
    </nav>
  );
}
