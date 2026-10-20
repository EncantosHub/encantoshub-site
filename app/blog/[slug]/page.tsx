import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Crumbs } from "@/components/Crumbs";
import { JsonLd } from "@/components/JsonLd";
import { PostMeta, PostRow } from "@/components/PostList";
import { getHeadings, getPost, getPostHtml, getPosts, getRelated } from "@/lib/blog";
import { site, whatsappLink } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/blog/${post.slug}` },
    authors: [{ name: post.author, url: post.authorUrl || undefined }],
    openGraph: {
      type: "article",
      title: post.title,
      description: post.summary,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      authors: [post.author],
      section: post.category,
      images: [{ url: post.cover.src, width: post.cover.width, height: post.cover.height, alt: post.title }],
    },
    twitter: { card: "summary_large_image", images: [post.cover.src] },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const html = getPostHtml(post.slug);
  const headings = post.hasToc ? [] : getHeadings(html);
  const related = getRelated(post);

  return (
    <>
      <article className="article">
        <header className="article__head wrap">
          <Crumbs
            items={[
              { href: "/blog", label: "Blog" },
              { href: `/blog/categoria/${post.categorySlug}`, label: post.category },
              { href: `/blog/${post.slug}`, label: post.title },
            ]}
          />
          <PostMeta post={post} />
          <h1 className="article__title">{post.h1}</h1>
          <p className="lead">{post.summary}</p>
          <p className="article__byline">
            Por{" "}
{post.author}
          </p>
        </header>

        <div className="wrap">
          <Image className="article__cover" src={post.cover.src} alt={post.cover.alt} width={post.cover.width} height={post.cover.height} sizes="(min-width: 1180px) 1100px, 100vw" priority />
        </div>

        <div className={`wrap article__layout ${headings.length ? "article__layout--toc" : ""}`}>
          {headings.length ? (
            <nav className="toc" aria-label="Neste artigo">
              <p className="toc__title">Neste artigo</p>
              <ol>
                {headings.map((h) => (
                  <li key={h.id}><a href={`#${h.id}`}>{h.text}</a></li>
                ))}
              </ol>
            </nav>
          ) : null}
          <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
        </div>

        <aside className="wrap article__end" aria-label="Fale com a Encantos Hub">
          <div className="article__cta">
            <h2>Quer aplicar isso no seu negócio?</h2>
            <p>Avaliamos como sua empresa aparece hoje no Google e mostramos o que priorizar primeiro, sem compromisso.</p>
            <div className="hero__actions">
              <a className="btn" href={whatsappLink(`Olá! Li o artigo "${post.title}" e quero uma avaliação do posicionamento da minha empresa no Google.`)} target="_blank" rel="noopener" data-cta="blog">Pedir avaliação gratuita no WhatsApp</a>
            </div>
          </div>
        </aside>
      </article>

      {related.length ? (
        <section className="section section--paper" aria-labelledby="relacionados">
          <div className="wrap">
            <div className="section-head">
              <h2 id="relacionados" className="h2">Continue lendo.</h2>
            </div>
            <div className="post-list">
              {related.map((p) => (
                <PostRow key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.h1,
          name: post.title,
          description: post.summary,
          image: `${site.url}${post.cover.src}`,
          datePublished: post.date,
          dateModified: post.updated || post.date,
          inLanguage: "pt-BR",
          articleSection: post.category,
          mainEntityOfPage: `${site.url}/blog/${post.slug}`,
          author: { "@type": "Person", name: post.author, url: post.authorUrl || undefined },
          publisher: { "@id": `${site.url}/#organizacao` },
        }}
      />
    </>
  );
}
