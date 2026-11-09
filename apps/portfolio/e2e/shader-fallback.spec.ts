import { expect, test } from "@playwright/test";

for (const availability of ["missing", "no-adapter", "rejected"] as const) {
  test(`home stays usable when WebGPU is ${availability}`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    await page.emulateMedia({ colorScheme: "dark" });
    await page.addInitScript((mode) => {
      Object.defineProperty(navigator, "gpu", {
        configurable: true,
        get() {
          document.documentElement.dataset.gpuProbed = "true";
          if (mode === "missing") return undefined;
          return {
            requestAdapter: async () => {
              if (mode === "rejected") throw new Error("GPU access denied");
              return null;
            },
          };
        },
      });
    }, availability);
    await page.goto("/");
    await expect(page.locator("html")).toHaveAttribute("data-gpu-probed", "true");
    await expect(page.getByRole("heading", { name: "Michael Lo", level: 1 })).toBeVisible();
    await expect(page.locator('[data-renderer="shaders"]')).toHaveCount(0);
    expect(errors).toEqual([]);
  });
}
