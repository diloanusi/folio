import type { CodeProject } from "./types";

export const codeProjects: CodeProject[] = [
  {
    slug: "folio",
    title: "Folio",
    description: "This portfolio — a minimalist archive of work across disciplines.",
    year: 2024,
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "MDX"],
    repo: "https://github.com/yourusername/folio",
    status: "live",
    longDescription:
      "Designed and built from scratch with an archive-catalog aesthetic inspired by experimental retail experiences. Prioritized performance, accessibility, and legibility across all breakpoints.",
  },
  {
    slug: "research-synthesis-tool",
    title: "Synthesis",
    description: "A lightweight local-first tool for organizing UX research notes and affinity mapping.",
    year: 2024,
    stack: ["Electron", "React", "TypeScript", "SQLite"],
    status: "wip",
    longDescription:
      "Built out of frustration with existing tools that required cloud sync for basic note organization. Synthesis runs entirely locally, stores data in SQLite, and supports drag-and-drop affinity mapping with hierarchical tagging.",
  },
  {
    slug: "transit-visualizer",
    title: "Grid / City",
    description: "Interactive visualization of transit network frequency and load across time of day.",
    year: 2023,
    stack: ["D3.js", "TypeScript", "Next.js", "GTFS"],
    url: "https://gridcity.vercel.app",
    repo: "https://github.com/yourusername/grid-city",
    status: "live",
    longDescription:
      "Consumes GTFS feed data to render real-time-ish frequency maps. Inspired by research I conducted on transit wayfinding — I wanted to see the network the way riders experience it, not how operations teams chart it.",
  },
  {
    slug: "type-specimen",
    title: "Type Specimen Generator",
    description: "A browser tool for generating shareable type specimen sheets from Google Fonts.",
    year: 2022,
    stack: ["Vanilla JS", "CSS Grid", "Google Fonts API"],
    url: "https://typespec.vercel.app",
    status: "archived",
    longDescription:
      "Quick utility built for personal use during design reviews that got shared around enough to warrant a proper release. Generates printable/shareable PDFs. No build system — pure HTML, CSS, and vanilla JS.",
  },
];
