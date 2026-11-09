import { expect, test } from "@playwright/test";

for (const reducedMotion of ["reduce", "no-preference"] as const) {
  test(`profile text keeps cycling with ${reducedMotion} motion`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    await page.emulateMedia({ reducedMotion });
    await page.goto("/");
    const text = page.locator("p.font-pixel-square");
    await expect(text).toBeVisible();
    const samples = await text.locator("..").evaluate(async (container) => {
      const texts = new Set<string>();
      let maxTranslation = 0;
      let maxBlur = 0;
      let fades = false;
      const start = performance.now();
      return new Promise<{
        texts: string[];
        maxTranslation: number;
        maxBlur: number;
        fades: boolean;
      }>((resolve) => {
        function sample() {
          for (const element of container.querySelectorAll("p")) {
            texts.add(element.textContent ?? "");
            const style = getComputedStyle(element);
            const transform = new DOMMatrixReadOnly(
              style.transform === "none" ? undefined : style.transform,
            );
            maxTranslation = Math.max(maxTranslation, Math.abs(transform.m42));
            maxBlur = Math.max(maxBlur, Number(style.filter.match(/blur\(([\d.]+)px\)/)?.[1] ?? 0));
            const opacity = Number(style.opacity);
            fades ||= opacity > 0 && opacity < 1;
          }
          if (performance.now() - start >= 3500) {
            resolve({ texts: [...texts], maxTranslation, maxBlur, fades });
          } else {
            requestAnimationFrame(sample);
          }
        }
        requestAnimationFrame(sample);
      });
    });
    expect(samples.texts.length).toBeGreaterThanOrEqual(2);
    expect(samples.fades).toBe(true);
    if (reducedMotion === "reduce") {
      expect(samples.maxTranslation).toBe(0);
      expect(samples.maxBlur).toBe(0);
    } else {
      expect(samples.maxTranslation).toBeGreaterThan(0);
      expect(samples.maxBlur).toBeGreaterThan(0);
    }
    expect(errors).toEqual([]);
  });
}
