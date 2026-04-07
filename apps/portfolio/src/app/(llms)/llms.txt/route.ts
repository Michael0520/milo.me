import { SITE_INFO } from "@/config/site";
import { getAllDocs } from "@/features/doc/data/documents";

const allPosts = getAllDocs();

const content = `# michaello.me

> Michael Lo's personal portfolio and blog. Full Stack Web Developer based in Taipei, Taiwan.

- [About](${SITE_INFO.url}/about.md): About me, my tech stack, and how to connect.
- [Talks](${SITE_INFO.url}/talks): Conference talks and presentations.

## Blog

${allPosts.map((item) => `- [${item.metadata.title}](${SITE_INFO.url}/blog/${item.slug}.mdx): ${item.metadata.description}`).join("\n")}
`;

export const revalidate = false;
export const dynamic = "force-static";

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
