import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  return { title: cs.title, description: cs.subtitle };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  const index = caseStudies.indexOf(cs);
  const archiveId = `CS-${String(index + 1).padStart(3, "0")}`;

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-16 sm:py-24">
      {/* Back nav */}
      <Link
        href="/ux-research"
        className="fig-label hover:text-[var(--fg)] transition-colors mb-10 inline-block"
      >
        ← UX Research
      </Link>

      {/* Title block */}
      <div className="border-b border-[var(--border)] pb-10 mb-12">
        <p className="fig-label mb-4">[{archiveId}]</p>
        <h1 className="text-3xl sm:text-4xl font-light tracking-tight mb-3 max-w-3xl">
          {cs.title}
        </h1>
        <p className="text-[var(--muted)] text-base font-light max-w-2xl">{cs.subtitle}</p>
      </div>

      {/* Metadata row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-b border-[var(--border)] pb-10 mb-12">
        {[
          { label: "Role", value: cs.role },
          { label: "Year", value: cs.year },
          { label: "Duration", value: cs.duration },
          { label: "Methods", value: cs.tags.slice(0, 2).join(", ") },
        ].map(({ label, value }) => (
          <div key={label}>
            <p className="fig-label mb-1">{label}</p>
            <p className="text-sm font-light">{value}</p>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-12">
        {cs.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[11px] border border-[var(--border)] px-2 py-1 text-[var(--muted)]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="grid sm:grid-cols-[1fr_2fr] gap-16 max-w-5xl">
        <div className="space-y-10">
          <section>
            <p className="fig-label mb-3">Brief</p>
            <p className="text-sm font-light leading-relaxed text-[var(--muted)]">{cs.brief}</p>
          </section>
          <section>
            <p className="fig-label mb-3">Problem</p>
            <p className="text-sm font-light leading-relaxed text-[var(--muted)]">{cs.problem}</p>
          </section>
        </div>

        <div className="space-y-10">
          <section>
            <p className="fig-label mb-4">Design Code Test</p>
            <ol className="space-y-3">
              {cs.process.map((step, i) => (
                <li key={i} className="flex gap-4 text-sm font-light leading-relaxed">
                  <span className="font-mono text-[11px] text-[var(--muted)] shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <p className="fig-label mb-3">Outcome</p>
            <p className="text-sm font-light leading-relaxed">{cs.outcome}</p>
          </section>

          {cs.metrics && cs.metrics.length > 0 && (
            <section>
              <p className="fig-label mb-4">Metrics</p>
              <div className="grid grid-cols-3 gap-4">
                {cs.metrics.map(({ label, value }) => (
                  <div key={label} className="border border-[var(--border)] p-4">
                    <p className="text-2xl font-light mb-1">{value}</p>
                    <p className="fig-label">{label}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
