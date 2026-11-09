import { expect, test } from "@playwright/test";

test("scroll-to-top cannot receive focus or clicks while hidden and works after scrolling", async ({
  page,
}) => {
  await page.goto("/tech/nx-module-resolution");
  const button = page.locator('button[aria-label="Scroll to top"]');
  await expect(button).toBeHidden();
  await button.evaluate((el) => el.focus());
  await expect(button).not.toBeFocused();
  expect(
    await button.evaluate((el) => {
      const rect = el.getBoundingClientRect();
      return el.contains(
        document.elementFromPoint(rect.x + rect.width / 2, rect.y + rect.height / 2),
      );
    }),
  ).toBe(false);

  await page.evaluate(() => window.scrollTo(0, 800));
  await expect(button).toBeVisible();
  await button.focus();
  await page.keyboard.press("Enter");
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
  await expect(button).toBeHidden();
});

test("scroll-to-top reflects the restored scroll position after reload", async ({ page }) => {
  await page.goto("/tech/nx-module-resolution");
  await page.evaluate(() => window.scrollTo(0, 800));
  const button = page.getByRole("button", { name: "Scroll to top" });
  await expect(button).toBeVisible();
  await page.reload();
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThanOrEqual(400);
  await expect(button).toBeVisible();
});
