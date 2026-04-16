import { notFound } from "next/navigation";
import Link from "next/link";
import { codeProjects } from "@/data/codeProjects";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return codeProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = codeProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.description };
}

const STATUS_STYLES: Record<string, string> = {
  live: "text-[var(--fg)]",
  wip: "text-amber-600",
  archived: "text-[var(--muted)]",
};

export default async function CodeProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = codeProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  const index = codeProjects.indexOf(project);
  const archiveId = `PRJ-${String(index + 1).padStart(3, "0")}`;

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-16 sm:py-24">
      <Link
        href="/code"
        className="fig-label hover:text-[var(--fg)] transition-colors mb-10 inline-block"
      >
        ← Code
      </Link>

      {/* Title block */}
      <div className="border-b border-[var(--border)] pb-10 mb-12">
        <p className="fig-label mb-4">[{archiveId}]</p>
        <h1 className="text-3xl sm:text-4xl font-light tracking-tight mb-3">{project.title}</h1>
        <p className="text-[var(--muted)] text-base font-light max-w-2xl">
          {project.description}
        </p>
      </div>

      {/* Metadata */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-b border-[var(--border)] pb-10 mb-12">
        <div>
          <p className="fig-label mb-1">Year</p>
          <p className="text-sm font-light">{project.year}</p>
        </div>
        <div>
          <p className="fig-label mb-1">Status</p>
          <p className={`text-sm font-light ${STATUS_STYLES[project.status]}`}>
            {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
          </p>
        </div>
        {project.url && (
          <div>
            <p className="fig-label mb-1">Live</p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-light hover:underline underline-offset-2"
            >
              Visit →
            </a>
          </div>
        )}
        {project.repo && (
          <div>
            <p className="fig-label mb-1">Source</p>
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-light hover:underline underline-offset-2"
            >
              GitHub →
            </a>
          </div>
        )}
      </div>

      {/* Stack */}
      <div className="mb-12">
        <p className="fig-label mb-4">Stack</p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] border border-[var(--border)] px-2 py-1 text-[var(--muted)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="max-w-2xl">
        <p className="fig-label mb-4">About</p>
        <p className="text-sm font-light leading-relaxed text-[var(--muted)]">
          {project.longDescription}
        </p>
      </div>
    </div>
  );
}
