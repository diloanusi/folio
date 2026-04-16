"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const DISCIPLINES = [
  {
    id: "01",
    label: "UX Research",
    href: "/ux-research",
    description: "Qualitative research, usability testing, accessibility audits",
  },
  {
    id: "02",
    label: "Photography",
    href: "/films",
    description: "Film & digital — objects, places, light",
  },
  {
    id: "03",
    label: "Code",
    href: "/code",
    description: "Tools, visualizations, and side projects",
  },
  {
    id: "04",
    label: "Writing",
    href: "/journals",
    description: "Notes on design, process, and practice",
  },
];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-44px)] flex flex-col">
      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-6 pt-20 pb-16 sm:pt-28 sm:pb-24 flex-1">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="max-w-2xl"
        >
          {/* Archive ID */}
          <motion.p variants={fadeUp} className="fig-label mb-6">
            [Archive — 2019–Present]
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-6xl font-light tracking-tight leading-[1.05] mb-8"
          >
            Multidisciplinary
            <br />
            practitioner.
          </motion.h1>

          {/* Bio */}
          <motion.p
            variants={fadeUp}
            className="text-[var(--muted)] text-base sm:text-lg font-light leading-relaxed max-w-lg mb-16"
          >
            I research how people experience complex systems, document the world
            through a lens, build things with code, and write about all of it.
          </motion.p>
        </motion.div>

        {/* Discipline index */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="border-t border-[var(--border)]"
        >
          {DISCIPLINES.map(({ id, label, href, description }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 + i * 0.07, duration: 0.35 }}
            >
              <Link
                href={href}
                className="group flex items-baseline py-5 border-b border-[var(--border)] gap-4 hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors -mx-6 px-6"
              >
                <span className="font-mono text-[11px] text-[var(--muted)] group-hover:text-[var(--bg)] w-8 shrink-0 transition-colors">
                  {id}
                </span>
                <span className="text-lg sm:text-2xl font-light w-48 sm:w-56 shrink-0">
                  {label}
                </span>
                <span className="hidden sm:block font-mono text-[11px] text-[var(--muted)] group-hover:text-[var(--bg)] transition-colors leading-relaxed">
                  {description}
                </span>
                <span className="ml-auto font-mono text-[11px] text-[var(--muted)] group-hover:text-[var(--bg)] transition-colors shrink-0">
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
