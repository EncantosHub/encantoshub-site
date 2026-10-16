import Link from "next/link";
import Image from "next/image";
import { formatDate, type Post } from "@/lib/blog";

export function PostMeta({ post }: { post: Post }) {
  return (
    <p className="post-meta">
      <span>{post.category}</span>
      <time dateTime={post.date}>{formatDate(post.date)}</time>
      <span>{post.readingMinutes} min de leitura</span>
    </p>
  );
}

export function PostRow({ post, headingLevel = 3 }: { post: Post; headingLevel?: 2 | 3 }) {
  const H = headingLevel === 2 ? "h2" : "h3";
  return (
    <article className="post-row">
      <Link href={`/blog/${post.slug}`} className="post-row__img" tabIndex={-1} aria-hidden="true">
        <Image src={post.cover.src} alt="" width={post.cover.width} height={post.cover.height} sizes="(min-width: 900px) 320px, 100vw" />
      </Link>
      <div className="post-row__body">
        <PostMeta post={post} />
        <H className="post-row__title">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </H>
        <p>{post.summary}</p>
      </div>
    </article>
  );
}

export function FeaturedPost({ post }: { post: Post }) {
  return (
    <article className="post-featured">
      <Link href={`/blog/${post.slug}`} className="post-featured__img" tabIndex={-1} aria-hidden="true">
        <Image src={post.cover.src} alt="" width={post.cover.width} height={post.cover.height} sizes="(min-width: 900px) 600px, 100vw" priority />
      </Link>
      <div className="post-featured__body">
        <PostMeta post={post} />
        <h2 className="post-featured__title">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <p>{post.summary}</p>
        <Link className="btn btn--ghost btn--small" href={`/blog/${post.slug}`}>Ler o artigo</Link>
      </div>
    </article>
  );
}
