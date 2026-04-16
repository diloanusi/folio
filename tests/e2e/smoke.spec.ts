import { test, expect } from "@playwright/test";

test.describe("Smoke tests", () => {
  test("home page loads and shows discipline index", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: /multidisciplinary/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /ux research/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /photography/i })).toBeVisible();
  });

  test("header has live clock and nav links", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("link", { name: /films/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /journals/i })).toBeVisible();
  });

  test("films page loads", async ({ page }) => {
    await page.goto("/films");
    await expect(page.getByRole("heading", { name: /films/i })).toBeVisible();
  });

  test("ux research page loads", async ({ page }) => {
    await page.goto("/ux-research");
    await expect(page.getByRole("heading", { name: /ux research/i })).toBeVisible();
  });

  test("code page loads", async ({ page }) => {
    await page.goto("/code");
    await expect(page.getByRole("heading", { name: /code/i })).toBeVisible();
  });

  test("journals page loads", async ({ page }) => {
    await page.goto("/journals");
    await expect(page.getByRole("heading", { name: /journals/i })).toBeVisible();
  });
});
