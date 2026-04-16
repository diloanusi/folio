import { describe, it, expect } from "vitest";
import { photos } from "@/data/photos";
import { caseStudies } from "@/data/caseStudies";
import { codeProjects } from "@/data/codeProjects";

describe("photos data", () => {
  it("has entries with required fields", () => {
    expect(photos.length).toBeGreaterThan(0);
    photos.forEach((photo) => {
      expect(photo.id).toBeTruthy();
      expect(photo.caption).toBeTruthy();
      expect(photo.year).toBeTypeOf("number");
    });
  });
});

describe("caseStudies data", () => {
  it("has entries with required fields", () => {
    expect(caseStudies.length).toBeGreaterThan(0);
    caseStudies.forEach((cs) => {
      expect(cs.slug).toBeTruthy();
      expect(cs.title).toBeTruthy();
      expect(cs.process.length).toBeGreaterThan(0);
    });
  });

  it("all slugs are unique", () => {
    const slugs = caseStudies.map((cs) => cs.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});

describe("codeProjects data", () => {
  it("has entries with required fields", () => {
    expect(codeProjects.length).toBeGreaterThan(0);
    codeProjects.forEach((p) => {
      expect(p.slug).toBeTruthy();
      expect(p.stack.length).toBeGreaterThan(0);
      expect(["live", "archived", "wip"]).toContain(p.status);
    });
  });
});
