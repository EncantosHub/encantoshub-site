import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryNav } from "@/components/CategoryNav";
import { Crumbs } from "@/components/Crumbs";
import { PostRow } from "@/components/PostList";
import { getCategories, getPosts } from "@/lib/blog";

type Props = { params: Promise<{ categoria: string }> };

const intros: Record<string, string> = {
  seo: "Técnica, conteúdo, migração e organização de sites para crescer no Google.",
  "perfil-da-empresa-no-google": "Como cadastrar, otimizar e manter ativo o Perfil da Empresa no Google (antigo Google Meu Negócio).",
  conteudo: "Boas práticas para escrever e publicar conteúdos que ranqueiam.",
};

export function generateStaticParams() {
  return getCategories().map((c) => ({ categoria: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoria } = await params;
  const cat = getCategories().find((c) => c.slug === categoria);
  if (!cat) return {};
  return {
    title: `${cat.name}: artigos do blog`,
    description: intros[cat.slug] || `Artigos sobre ${cat.name} no blog da Encantos Hub.`,
    alternates: { canonical: `/blog/categoria/${cat.slug}` },
  };
}

export default async function Categoria({ params }: Props) {
  const { categoria } = await params;
  const cat = getCategories().find((c) => c.slug === categoria);
  if (!cat) notFound();
  const posts = getPosts().filter((p) => p.categorySlug === cat.slug);
  return (
    <>
      <section className="page-hero page-hero--tight">
        <div className="wrap">
          <Crumbs items={[{ href: "/blog", label: "Blog" }, { href: `/blog/categoria/${cat.slug}`, label: cat.name }]} />
          <h1>{cat.name}</h1>
          {intros[cat.slug] ? <p className="lead">{intros[cat.slug]}</p> : null}
          <CategoryNav current={cat.slug} />
        </div>
      </section>
      <section className="section section--paper section--blog">
        <div className="wrap post-list">
          {posts.map((p) => (
            <PostRow key={p.slug} post={p} headingLevel={2} />
          ))}
        </div>
      </section>
    </>
  );
}
