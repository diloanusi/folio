import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getJournalBySlug, getJournalSlugs } from "@/lib/mdx";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getJournalSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { frontmatter } = getJournalBySlug(slug);
    return { title: frontmatter.title, description: frontmatter.excerpt };
  } catch {
    return {};
  }
}

export default async function JournalPostPage({ params }: Props) {
  const { slug } = await params;

  let post: { frontmatter: Awaited<ReturnType<typeof getJournalBySlug>>["frontmatter"]; content: string };
  try {
    post = getJournalBySlug(slug);
  } catch {
    notFound();
  }

  const { frontmatter, content } = post;
  const dateFormatted = new Date(frontmatter.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-16 sm:py-24">
      <Link
        href="/journals"
        className="fig-label hover:text-[var(--fg)] transition-colors mb-10 inline-block"
      >
        ← Journals
      </Link>

      {/* Post header */}
      <div className="border-b border-[var(--border)] pb-10 mb-12 max-w-3xl">
        <div className="flex gap-3 flex-wrap mb-4">
          {frontmatter.tags?.map((tag: string) => (
            <span key={tag} className="fig-label">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">
          {frontmatter.title}
        </h1>
        <p className="text-[var(--muted)] text-base font-light">{frontmatter.excerpt}</p>
        <div className="mt-4 flex gap-6">
          <span className="fig-label">{dateFormatted}</span>
          <span className="fig-label">{frontmatter.readingTime} min read</span>
        </div>
      </div>

      {/* MDX content */}
      <article className="max-w-2xl prose-journal">
        <MDXRemote source={content} />
      </article>
    </div>
  );
}
