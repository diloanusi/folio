interface PageHeaderProps {
  archiveId: string;
  title: string;
  description?: string;
}

export default function PageHeader({ archiveId, title, description }: PageHeaderProps) {
  return (
    <div className="border-b border-[var(--border)] pb-8 mb-12">
      <p className="fig-label mb-3">{archiveId}</p>
      <h1 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">{title}</h1>
      {description && (
        <p className="text-[var(--muted)] max-w-xl text-sm leading-relaxed font-light">
          {description}
        </p>
      )}
    </div>
  );
}
