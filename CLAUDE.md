@AGENTS.md

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Portfolio Website — Folio

A modern, responsive personal portfolio built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion. Showcases UX research, photography, code projects, and writing. Deployed on Vercel.

Design aesthetic: minimalist archive-catalog, inspired by [canary---yellow.com](https://canary---yellow.com) — monochromatic, generous whitespace, monospace accent typography, figure-labeled content.

## Commands

Because `node` and `npm` are not on the system PATH, prefix all commands with the JetBrains-bundled Node:

```bash
export PATH="/Users/dabel./Library/Application Support/JetBrains/IntelliJIdea2025.3/node/versions/24.14.0/bin:$PATH"
```

Then:
- `npm run dev` — start dev server at localhost:3000
- `npm run build` — production build (or `node node_modules/next/dist/bin/next build` to avoid `.bin` shebang issue)
- `npm run lint` — ESLint
- `npm run test` — Vitest unit tests (`tests/unit/`)
- `npm run test:e2e` — Playwright E2E tests (requires dev server running)
- `npm run test:watch` — Vitest in watch mode

## Architecture

### Route structure (`src/app/`)
- `/` — Home: discipline index (animated archive rows linking to each section)
- `/films` — Photography gallery: masonry grid with Framer Motion lightbox
- `/ux-research` — Case study listing; `/ux-research/[slug]` — individual case study detail
- `/code` — Code project listing; `/code/[slug]` — individual project detail
- `/journals` — MDX post listing; `/journals/[slug]` — rendered MDX post

### Content sources
- **Static data** (`src/data/`): `photos.ts`, `caseStudies.ts`, `codeProjects.ts` — typed arrays, edit these to add/update work.
- **MDX journals** (`content/journals/*.mdx`): frontmatter fields: `slug`, `title`, `date`, `excerpt`, `tags[]`, `readingTime`. Parsed by `src/lib/mdx.ts` using `gray-matter` + `next-mdx-remote`.

### Key components (`src/components/`)
- `Header.tsx` — fixed top bar with nav links and live blinking clock (`LiveClock.tsx`)
- `LiveClock.tsx` — client component, updates every second, blinks colon
- `ArchiveRow.tsx` — animated row used on all listing pages (hover inverts colors)
- `PageHeader.tsx` — archive ID + title + description block used on every section page
- `Footer.tsx` — links to email, LinkedIn, GitHub

### Styling
- Tailwind CSS v4 (PostCSS plugin approach, configured in `postcss.config.mjs`)
- CSS custom properties in `globals.css`: `--bg`, `--fg`, `--muted`, `--border`
- Fonts: Space Mono (monospace accents) + Inter (body) loaded via Google Fonts `@import` in `globals.css`
- `.prose-journal` class in `globals.css` styles MDX article content
- `.fig-label` utility: `Space Mono 11px uppercase tracking-wide` used for archive IDs and captions

### Testing
- Vitest config: `vitest.config.ts` — scans `tests/unit/**` only, excludes `tests/e2e/`
- Playwright config: `playwright.config.ts` — E2E against `http://localhost:3000`, tests in `tests/e2e/`
- Test setup: `tests/setup.ts` imports `@testing-library/jest-dom`

## Coding Conventions

- PascalCase for React components, camelCase for functions/variables
- Absolute imports via `@/` (e.g. `@/components/Header`)
- Tailwind utilities preferred; avoid custom CSS except in `globals.css`
- All UI mobile-first
- `"use client"` directive only on components that use browser APIs or React hooks (clock, animations, lightbox)
