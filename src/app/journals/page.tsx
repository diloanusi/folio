import { getAllJournals } from "@/lib/mdx";
import PageHeader from "@/components/PageHeader";
import ArchiveRow from "@/components/ArchiveRow";

export const metadata = {
  title: "Journals",
  description: "Notes on design, process, photography, and practice.",
};

export default function JournalsPage() {
  const journals = getAllJournals();

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-16 sm:py-24">
      <PageHeader
        archiveId="[ARCH-005 / Journals]"
        title="Journals"
        description="Notes on design, research, photography, and the practice of making things."
      />

      {journals.length === 0 ? (
        <p className="text-[var(--muted)] text-sm font-light">No entries yet.</p>
      ) : (
        <div>
          {journals.map((journal, i) => (
            <ArchiveRow
              key={journal.slug}
              index={i}
              id={`JNL-${String(i + 1).padStart(3, "0")}`}
              title={journal.title}
              meta={`${journal.readingTime} min read`}
              year={new Date(journal.date).getFullYear()}
              href={`/journals/${journal.slug}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
