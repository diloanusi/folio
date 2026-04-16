"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ArchiveRowProps {
  index: number;
  id: string;
  title: string;
  meta: string;
  year: number | string;
  href: string;
  tags?: string[];
}

export default function ArchiveRow({
  index,
  id,
  title,
  meta,
  year,
  href,
  tags,
}: ArchiveRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
    >
      <Link
        href={href}
        className="group flex items-baseline justify-between py-4 border-b border-[var(--border)] hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors px-0 -mx-0 gap-4"
      >
        <span className="font-mono text-[11px] text-[var(--muted)] group-hover:text-[var(--bg)] w-16 shrink-0 transition-colors">
          [{id}]
        </span>
        <span className="flex-1 text-sm font-light leading-snug">{title}</span>
        <span className="hidden md:block font-mono text-[11px] text-[var(--muted)] group-hover:text-[var(--bg)] transition-colors shrink-0">
          {meta}
        </span>
        <span className="font-mono text-[11px] text-[var(--muted)] group-hover:text-[var(--bg)] transition-colors shrink-0">
          {year}
        </span>
      </Link>
    </motion.div>
  );
}
