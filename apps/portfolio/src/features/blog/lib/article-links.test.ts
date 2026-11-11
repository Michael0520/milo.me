import { describe, expect, test } from "vite-plus/test";

import { buildQuoteUrl, resolveArticleLink } from "./article-links";

const articles = [
  {
    href: "/tech/module-resolution",
    title: "Module resolution",
    description: "Comparing bundler and nodenext",
    createdAt: "2026-03-23",
    readingTime: 4,
  },
];

describe("article link resolution", () => {
  test("canonicalizes legacy blog URLs while keeping query and section", () => {
    expect(
      resolveArticleLink(
        "/blog/module-resolution/?ref=example#bundler",
        "https://www.michaello.me",
        articles,
      )?.href,
    ).toBe("/tech/module-resolution?ref=example#bundler");
  });

  test("recognizes same-origin absolute article URLs", () => {
    expect(
      resolveArticleLink(
        "https://www.michaello.me/tech/module-resolution",
        "https://www.michaello.me",
        articles,
      )?.article.title,
    ).toBe("Module resolution");
  });

  test.each([
    "#bundler",
    "https://elsewhere.example/tech/module-resolution",
    "https://www.michaello.me.evil.example/tech/module-resolution",
    "javascript:alert(1)",
    "/tech/missing",
    "/daily/module-resolution",
    "/tech/module-resolution.md",
    "http://[invalid",
  ])("leaves non-article links alone: %s", (href) => {
    expect(resolveArticleLink(href, "https://www.michaello.me", articles)).toBeNull();
  });
});

describe("quote links", () => {
  test("repeated text links to its paragraph instead of highlighting a different occurrence", () => {
    expect(
      buildQuoteUrl(
        "https://www.michaello.me/tech/example",
        "p-second",
        "Same text",
        undefined,
        "Same text\nOther paragraph\nSame text",
      ),
    ).toBe("https://www.michaello.me/tech/example#p-second");
  });

  test("escapes fragment delimiters and replaces an existing fragment", () => {
    const url = buildQuoteUrl(
      "https://www.michaello.me/tech/example?ref=one#old",
      "p-123",
      "中文, foo-bar & #x",
    );
    expect(url).toBe(
      "https://www.michaello.me/tech/example?ref=one#p-123:~:text=%E4%B8%AD%E6%96%87%2C%20foo%2Dbar%20%26%20%23x",
    );
  });

  test("keeps a normal paragraph anchor as a fallback for unsupported browsers", () => {
    const url = buildQuoteUrl(
      "https://www.michaello.me/tech/example",
      "p-123",
      "first paragraph",
      "last paragraph",
    );
    expect(new URL(url).hash).toBe("#p-123:~:text=first%20paragraph,last%20paragraph");
  });

  test("normalizes layout whitespace in quoted text", () => {
    expect(
      buildQuoteUrl("https://www.michaello.me/tech/example", "p-123", "  text\n  with\tspace  "),
    ).toContain("text=text%20with%20space");
  });
});
