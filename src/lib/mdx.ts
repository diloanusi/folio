import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Journal } from "@/data/types";

const JOURNALS_DIR = path.join(process.cwd(), "content/journals");

export function getJournalSlugs(): string[] {
  if (!fs.existsSync(JOURNALS_DIR)) return [];
  return fs
    .readdirSync(JOURNALS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getJournalBySlug(slug: string): {
  frontmatter: Journal;
  content: string;
} {
  const filePath = path.join(JOURNALS_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    frontmatter: data as Journal,
    content,
  };
}

export function getAllJournals(): Journal[] {
  return getJournalSlugs()
    .map((slug) => {
      const { frontmatter } = getJournalBySlug(slug);
      return { ...frontmatter, slug };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
