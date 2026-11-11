import { expect, test } from "@playwright/test";
import type { Locator, Page } from "@playwright/test";

const articlePath = "/tech/nx-module-resolution";

async function openArticle(page: Page, path = articlePath) {
  await page.goto(path);
  await expect(page.locator(".article-content")).toHaveAttribute("data-reading-ready", "true");
}

async function selectText(element: Locator) {
  await element.scrollIntoViewIfNeeded();
  await element.evaluate(async (el) => {
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    const range = document.createRange();
    range.selectNodeContents(el);
    const selection = window.getSelection()!;
    selection.removeAllRanges();
    selection.addRange(range);
  });
}

test("article metadata shows publication, reading time, and meaningful updates", async ({
  page,
}) => {
  await openArticle(page);
  await expect(page.getByText("Published", { exact: false })).toContainText("Mar 23, 2026");
  await expect(page.getByText(/^\d+ min read$/)).toBeVisible();
  await expect(page.getByText(/^Updated /)).toHaveCount(0);

  await openArticle(page, "/daily/journal-2026-may");
  await expect(page.getByText(/^Published /)).toContainText("May 31, 2026");
  await expect(page.getByText(/^Updated /)).toContainText("Jun 3, 2026");
});

test("section links can be copied from the keyboard", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await openArticle(page);
  const button = page.getByRole("button", { name: "Copy link to section: nodenext-是什麼" });
  await button.focus();
  await button.press("Enter");
  await expect(page.getByText("Section link copied", { exact: true })).toBeVisible();
  const copied = await page.evaluate(() => navigator.clipboard.readText());
  expect(decodeURIComponent(new URL(copied).hash)).toBe("#nodenext-是什麼");
  expect(new URL(copied).pathname).toBe(articlePath);
});

test("selected text keeps its quote, paragraph link, and Escape dismissal", async ({
  page,
  context,
}) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await openArticle(page);
  const paragraph = page.locator(".article-content > p").first();
  const text = await paragraph.innerText();
  const id = await paragraph.getAttribute("id");
  await selectText(paragraph);
  const toolbar = page.getByRole("toolbar", { name: "Share selected text" });
  await expect(toolbar).toBeVisible();
  await toolbar.getByRole("button", { name: "Copy quote", exact: true }).click();
  await expect(page.getByText("Quote copied", { exact: true })).toBeVisible();
  const quote = await page.evaluate(() => navigator.clipboard.readText());
  expect(quote).toContain(`“${text}”`);
  expect(quote).toContain(`#${id}:~:text=`);

  await toolbar.getByRole("button", { name: "Copy link", exact: true }).click();
  const copied = await page.evaluate(() => navigator.clipboard.readText());
  expect(new URL(copied).hash).toContain(`#${id}:~:text=`);
  await page.keyboard.press("Escape");
  await expect(toolbar).toBeHidden();

  await paragraph.evaluate((el) => {
    const duplicate = el.cloneNode(true) as HTMLElement;
    duplicate.id = "duplicate-quote";
    el.parentElement!.append(duplicate);
  });
  await selectText(paragraph);
  await expect(toolbar).toBeVisible();
  await toolbar.getByRole("button", { name: "Copy link", exact: true }).click();
  expect(new URL(await page.evaluate(() => navigator.clipboard.readText())).hash).toBe(`#${id}`);

  await page.goto(copied.split(":~:")[0]);
  await expect(page.locator(`p[id="${id}"]`)).toBeInViewport();
});

test("cross-paragraph selections share a range and code selections keep native controls", async ({
  page,
  context,
}) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await openArticle(page, "/daily/journal-2026-may");
  const paragraphs = page.locator(".article-content > p");
  await paragraphs.first().scrollIntoViewIfNeeded();
  await page.locator(".article-content").evaluate((root) => {
    const ps = root.querySelectorAll(":scope > p");
    const range = document.createRange();
    range.setStart(ps[0].firstChild!, 0);
    range.setEnd(ps[1], ps[1].childNodes.length);
    const selection = getSelection()!;
    selection.removeAllRanges();
    selection.addRange(range);
  });
  const toolbar = page.getByRole("toolbar", { name: "Share selected text" });
  await expect(toolbar).toBeVisible();
  await toolbar.getByRole("button", { name: "Copy link", exact: true }).click();
  expect(await page.evaluate(() => navigator.clipboard.readText())).toMatch(/:~:text=[^,]+,[^,]+$/);

  await openArticle(page);
  await selectText(page.locator("pre code").first());
  await expect(toolbar).toBeHidden();
});

test("internal previews open on hover and keyboard focus, and legacy links resolve to Tech", async ({
  page,
}) => {
  await openArticle(page);
  const link = page.getByRole("link", { name: "Nx Monorepo 架構演進", exact: true });
  await expect(link).toHaveAttribute("href", "/tech/nx-monorepo-evolution");
  await link.hover();
  const preview = page.locator('[data-slot="hover-card-content"]');
  await expect(preview).toContainText("Nx Monorepo Architecture Evolution");
  await expect(preview).toContainText("Workspaces + Project References");
  await page.keyboard.press("Escape");
  await expect(preview).toBeHidden();
  await link.focus();
  await page.keyboard.press("Tab");
  await page.keyboard.press("Shift+Tab");
  await expect(preview).toBeVisible();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/\/tech\/nx-monorepo-evolution$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Nx Monorepo Architecture Evolution",
  );
});

test.describe("mobile article reading", () => {
  test.use({ viewport: { width: 320, height: 800 }, isMobile: true, hasTouch: true });

  test("quote tools stay on screen and article links navigate on the first tap", async ({
    page,
  }) => {
    await openArticle(page);
    await selectText(page.locator(".article-content > p").first());
    const toolbar = page.getByRole("toolbar", { name: "Share selected text" });
    await expect(toolbar).toBeVisible();
    const rect = await toolbar.boundingBox();
    expect(rect!.x).toBeGreaterThanOrEqual(0);
    expect(rect!.x + rect!.width).toBeLessThanOrEqual(320);
    expect(rect!.y).toBeGreaterThanOrEqual(64);
    expect(rect!.y + rect!.height).toBeLessThan(736);
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(320);
    await page.keyboard.press("Escape");

    await page.getByRole("link", { name: "Nx Monorepo 架構演進", exact: true }).tap();
    await expect(page).toHaveURL(/\/tech\/nx-monorepo-evolution$/);
  });
});
