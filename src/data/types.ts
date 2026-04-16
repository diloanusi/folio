export interface Photo {
  id: string;
  src: string;
  alt: string;
  caption: string;
  year: number;
  location?: string;
  aspectRatio?: "portrait" | "landscape" | "square";
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  year: number;
  role: string;
  duration: string;
  tags: string[];
  coverImage: string;
  brief: string;
  problem: string;
  process: string[]; //Design Test Code
  outcome: string;
  metrics?: { label: string; value: string }[];
}

export interface CodeProject {
  slug: string;
  title: string;
  description: string;
  year: number;
  stack: string[];
  url?: string;
  repo?: string;
  status: "live" | "archived" | "wip";
  coverImage?: string;
  longDescription: string;
}

export interface Journal {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readingTime: number;
}
