import { expect, test } from "@playwright/test";

test("home page renders and has no console errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("pageerror", (err) => errors.push(err.message));

  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Michael Lo", level: 1 })).toBeVisible();
  await expect(page.getByRole("link", { name: "Talks" })).toBeVisible();
  expect(errors, `console errors:\n${errors.join("\n")}`).toEqual([]);
});

test("talks page lists talks, each linking to a published slide deck", async ({ page }) => {
  await page.goto("/talks");

  const slideLinks = page.getByRole("link", { name: /Slides/ });
  await expect(slideLinks.first()).toBeVisible();

  // every talk card's slide link points at a /slides/<slug>/ deck
  const hrefs = await slideLinks.evaluateAll((els) =>
    els.map((el) => (el as HTMLAnchorElement).getAttribute("href")),
  );
  expect(hrefs.length).toBeGreaterThan(0);
  for (const href of hrefs) {
    expect(href).toMatch(/\/slides\/[^/]+\//);
  }
});
