import type { MetadataRoute } from "next";
import { services } from "@/lib/content";
import { getCategories, getPosts } from "@/lib/blog";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ["", "/servicos", "/cases", "/blog", "/sobre", "/contato"].map((p) => ({
    url: `${site.url}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.8,
  }));
  const svc = services.map((s) => ({
    url: `${site.url}/servicos/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));
  const blog = getPosts().map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(`${p.updated || p.date}T12:00:00`),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));
  const cats = getCategories().map((c) => ({
    url: `${site.url}/blog/categoria/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));
  return [...pages, ...svc, ...blog, ...cats];
}
