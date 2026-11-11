import { expect, test } from "vite-plus/test";

import { markdownResponse } from "./markdown-response";

test("explicit Markdown URLs do not need an Accept variant", async () => {
  const response = markdownResponse("# About");

  expect(response.headers.get("Content-Type")).toBe("text/markdown; charset=utf-8");
  expect(response.headers.has("Vary")).toBe(false);
  expect(await response.text()).toBe("# About");
});

test("negotiated Markdown varies on Accept without losing other headers or status", () => {
  const headers = new Headers({ Vary: "Accept-Encoding", "Cache-Control": "no-cache" });
  const response = markdownResponse("# Missing", { negotiated: true, status: 404, headers });

  expect(response.status).toBe(404);
  expect(response.headers.get("Vary")).toBe("Accept-Encoding, Accept");
  expect(response.headers.get("Cache-Control")).toBe("no-cache");
  expect(headers.get("Vary")).toBe("Accept-Encoding");
});
