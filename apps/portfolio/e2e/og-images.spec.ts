import { expect, test } from "@playwright/test";

for (const path of [
  "/og/simple?title=Article%20preview&description=Local%20fonts%20still%20work",
  "/og/domain?domain=michaello.me&sale=true",
]) {
  test(`renders a complete OG image: ${path}`, async ({ request }) => {
    const response = await request.get(path);
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("image/png");
    expect(response.headers()["cache-control"]).toContain("max-age");

    const image = await response.body();
    expect(image.subarray(0, 8).toString("hex")).toBe("89504e470d0a1a0a");
    expect(image.readUInt32BE(16)).toBe(1200);
    expect(image.readUInt32BE(20)).toBe(630);
  });
}
