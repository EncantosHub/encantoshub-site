import fs from "node:fs";
import path from "node:path";
import postsIndex from "@/content/blog/posts.json";

export type Post = {
  slug: string;
  title: string;
  h1: string;
  summary: string;
  date: string;
  updated?: string;
  category: string;
  categorySlug: string;
  author: string;
  authorUrl: string | null;
  cover: { src: string; width: number; height: number; alt: string };
  readingMinutes: number;
  hasToc: boolean;
};

const posts = (postsIndex as Post[]).slice().sort((a, b) => (a.date < b.date ? 1 : -1));

export function getPosts(): Post[] {
  return posts;
}

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostHtml(slug: string): string {
  return fs.readFileSync(path.join(process.cwd(), "content/blog", `${slug}.html`), "utf8");
}

export function getCategories(): { name: string; slug: string; count: number }[] {
  const map = new Map<string, { name: string; slug: string; count: number }>();
  for (const p of posts) {
    const c = map.get(p.categorySlug) || { name: p.category, slug: p.categorySlug, count: 0 };
    c.count++;
    map.set(p.categorySlug, c);
  }
  return [...map.values()].sort((a, b) => b.count - a.count);
}

export function getRelated(post: Post, n = 3): Post[] {
  const same = posts.filter((p) => p.slug !== post.slug && p.categorySlug === post.categorySlug);
  const others = posts.filter((p) => p.slug !== post.slug && p.categorySlug !== post.categorySlug);
  return [...same, ...others].slice(0, n);
}

export function getHeadings(html: string): { id: string; text: string }[] {
  return [...html.matchAll(/<h2[^>]*id="([^"]+)"[^>]*>([\s\S]*?)<\/h2>/g)]
    .map((m) => ({ id: m[1], text: m[2].replace(/<[^>]+>/g, "").trim() }))
    .filter((h) => !/^sumário$/i.test(h.text));
}

export function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" });
}
