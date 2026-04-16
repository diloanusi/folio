import { codeProjects } from "@/data/codeProjects";
import PageHeader from "@/components/PageHeader";
import ArchiveRow from "@/components/ArchiveRow";

export const metadata = {
  title: "Code",
  description: "Tools, visualizations, and side projects.",
};

const STATUS_LABEL: Record<string, string> = {
  live: "Live",
  wip: "WIP",
  archived: "Archived",
};

export default function CodePage() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 py-16 sm:py-24">
      <PageHeader
        archiveId="[ARCH-003 / Code]"
        title="Code"
        description="Tools, visualizations, and side projects built in the gaps between other work."
      />

      <div>
        {codeProjects.map((project, i) => (
          <ArchiveRow
            key={project.slug}
            index={i}
            id={`PRJ-${String(i + 1).padStart(3, "0")}`}
            title={project.title}
            meta={project.stack.slice(0, 3).join(", ")}
            year={project.year}
            href={`/code/${project.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
