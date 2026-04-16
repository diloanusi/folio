export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--border)] mt-32">
      <div className="max-w-[1400px] mx-auto px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="font-mono text-[11px] text-[var(--muted)] tracking-wide">
          © {year} — All rights reserved
        </p>
        <div className="flex items-center gap-6">
          <a
            href="mailto:hello@example.com"
            className="font-mono text-[11px] text-[var(--muted)] hover:text-[var(--fg)] transition-colors tracking-wide"
          >
            Email
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] text-[var(--muted)] hover:text-[var(--fg)] transition-colors tracking-wide"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] text-[var(--muted)] hover:text-[var(--fg)] transition-colors tracking-wide"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
