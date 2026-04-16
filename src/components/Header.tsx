"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LiveClock from "./LiveClock";

const NAV_LINKS = [
  { href: "/films", label: "Films" },
  { href: "/ux-research", label: "UX Research" },
  { href: "/code", label: "Code" },
  { href: "/journals", label: "Journals" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)] border-b border-[var(--border)]">
      <div className="max-w-[1400px] mx-auto px-6 h-11 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-mono text-[11px] tracking-[0.15em] uppercase text-[var(--fg)] hover:text-[var(--muted)] transition-colors"
        >
          Folio
        </Link>

        {/* Nav */}
        <nav className="hidden sm:flex items-center gap-6">
          {NAV_LINKS.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={[
                  "font-mono text-[11px] tracking-wide uppercase transition-colors",
                  active
                    ? "text-[var(--fg)]"
                    : "text-[var(--muted)] hover:text-[var(--fg)]",
                ].join(" ")}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Live clock */}
        <LiveClock />
      </div>
    </header>
  );
}
