import { caseStudies } from "@/data/caseStudies";
import PageHeader from "@/components/PageHeader";
import ArchiveRow from "@/components/ArchiveRow";

export const metadata = {
  title: "UX Research",
  description: "Case studies in qualitative research, usability testing, and accessibility.",
};

export default function UXResearchPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 py-16 sm:py-24">
      <PageHeader
        archiveId="[ARCH-001 / UX Research]"
        title="UX Research"
        description="Selected case studies in qualitative research, usability testing, information architecture, and accessibility."
      />

      <div>
        {caseStudies.map((cs, i) => (
          <ArchiveRow
            key={cs.slug}
            index={i}
            id={`CS-${String(i + 1).padStart(3, "0")}`}
            title={cs.title}
            meta={cs.role}
            year={cs.year}
            href={`/ux-research/${cs.slug}`}
          />
        ))}
      </div>

      {/* Tags legend */}
      <div className="mt-16 pt-8 border-t border-[var(--border)]">
        <p className="fig-label mb-4">Disciplines</p>
        <div className="flex flex-wrap gap-2">
          {Array.from(new Set(caseStudies.flatMap((cs) => cs.tags))).map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] border border-[var(--border)] px-2 py-1 text-[var(--muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
