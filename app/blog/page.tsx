import type { Metadata } from "next";
import { CategoryNav } from "@/components/CategoryNav";
import { Crumbs } from "@/components/Crumbs";
import { JsonLd } from "@/components/JsonLd";
import { FeaturedPost, PostRow } from "@/components/PostList";
import { getPosts } from "@/lib/blog";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog de SEO, GEO e presença local",
  description:
    "Guias práticos de SEO, Perfil da Empresa no Google, conteúdo e presença digital, escritos pela equipe da Encantos Hub.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  const [first, ...rest] = getPosts();
  return (
    <>
      <section className="page-hero page-hero--tight">
        <div className="wrap">
          <Crumbs items={[{ href: "/blog", label: "Blog" }]} />
          <h1>Blog</h1>
          <p className="lead">Guias práticos de SEO, Perfil da Empresa no Google e conteúdo, do jeito que aplicamos nos projetos dos nossos clientes.</p>
          <CategoryNav />
        </div>
      </section>
      <section className="section section--paper section--blog">
        <div className="wrap">
          {first ? <FeaturedPost post={first} /> : null}
          <div className="post-list">
            {rest.map((p) => (
              <PostRow key={p.slug} post={p} headingLevel={2} />
            ))}
          </div>
        </div>
      </section>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Blog da Encantos Hub",
          url: `${site.url}/blog`,
          publisher: { "@id": `${site.url}/#organizacao` },
          blogPost: getPosts().map((p) => ({ "@type": "BlogPosting", headline: p.title, url: `${site.url}/blog/${p.slug}`, datePublished: p.date })),
        }}
      />
    </>
  );
}
