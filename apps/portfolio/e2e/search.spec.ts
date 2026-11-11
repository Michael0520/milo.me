import { expect, test } from "@playwright/test";

for (const width of [390, 700, 1024]) {
  test(`search has a name and opens from the keyboard at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("/");
    const trigger = page.getByRole("button", { name: /^Search/ });
    await expect(trigger).toBeVisible();
    await expect(trigger.locator('[data-slot="kbd-group"]:visible')).toHaveCount(
      width >= 768 ? 1 : 0,
    );
    await trigger.focus();
    await page.keyboard.press("Enter");
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(dialog.getByRole("option", { name: /^Daily/ })).toHaveCount(0);
    await dialog.getByRole("combobox").fill("moduleResolution");
    const article = dialog.getByRole("option", { name: /moduleResolution: Choosing Between/ });
    await expect(article).toBeVisible();
    await article.click();
    await expect(page).toHaveURL(/\/tech\/nx-module-resolution$/);
  });
}
