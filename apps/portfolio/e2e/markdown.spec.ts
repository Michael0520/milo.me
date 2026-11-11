import { expect, test } from "@playwright/test";

for (const path of ["/", "/tech/nx-module-resolution", "/daily/journal-2026-may"]) {
  test(`${path} serves separate Markdown and HTML representations`, async ({ request }) => {
    const markdown = await request.get(path, { headers: { Accept: "text/markdown" } });
    expect(markdown.status()).toBe(200);
    expect(markdown.headers()["content-type"]).toContain("text/markdown");
    expect(markdown.headers().vary?.toLowerCase().split(/,\s*/)).toContain("accept");
    expect(await markdown.text()).toMatch(/^# /);

    const html = await request.get(path, { headers: { Accept: "text/html" } });
    expect(html.status()).toBe(200);
    expect(html.headers()["content-type"]).toContain("text/html");
    expect(await html.text()).toContain("<!DOCTYPE html>");
  });
}

test("explicit Markdown URLs and RSS keep their response formats", async ({ request }) => {
  for (const path of [
    "/llms.txt",
    "/index.md",
    "/tech/nx-module-resolution.md",
    "/about.md",
    "/experience.md",
    "/projects.md",
    "/talks.md",
    "/awards.md",
    "/certifications.md",
  ]) {
    const response = await request.get(path);
    expect(response.status(), path).toBe(200);
    expect(response.headers()["content-type"], path).toContain("text/markdown");
    expect(await response.text(), path).toMatch(/^# /);
  }

  for (const path of ["/tech/rss", "/daily/rss"]) {
    const response = await request.get(path, { headers: { Accept: "text/markdown" } });
    expect(response.status(), path).toBe(200);
    expect(response.headers()["content-type"], path).toContain("xml");
    expect(await response.text(), path).toContain("<rss");
  }

  const hiddenFeed = await request.get("/components/rss", {
    headers: { Accept: "text/markdown" },
  });
  expect(hiddenFeed.status()).toBe(404);
});
