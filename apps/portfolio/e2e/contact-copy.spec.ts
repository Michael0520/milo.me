import { expect, test } from "@playwright/test";

test("contact copy appears on keyboard focus and copies the email", async ({ page, context }) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/");
  const email = page.locator('#overview a[href^="mailto:"]');
  const copy = page.locator("#overview").getByRole("button", { name: "Copy", exact: true });
  await email.scrollIntoViewIfNeeded();
  await page.mouse.move(0, 0);
  await expect(copy.locator("..")).toHaveCSS("opacity", "0");

  await email.focus();
  await page.keyboard.press("Tab");
  await expect(copy).toBeFocused();
  await expect(copy.locator("..")).toHaveCSS("opacity", "1");
  await page.keyboard.press("Enter");
  await expect
    .poll(() => page.evaluate(() => navigator.clipboard.readText()))
    .toBe((await email.getAttribute("href"))!.slice("mailto:".length));
});

test.describe("touch contact copy", () => {
  test.use({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });

  test("copy is visible without hover and works on the first tap", async ({ page, context }) => {
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);
    await page.goto("/");
    const email = page.locator('#overview a[href^="mailto:"]');
    await expect(email).toBeAttached();
    const copy = page.locator("#overview").getByRole("button", { name: "Copy", exact: true });
    await expect(copy.locator("..")).toHaveCSS("opacity", "1");
    await copy.tap();
    await expect
      .poll(() => page.evaluate(() => navigator.clipboard.readText()))
      .toBe((await email.getAttribute("href"))!.slice("mailto:".length));
  });
});
