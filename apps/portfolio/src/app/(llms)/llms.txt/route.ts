import { SITE_INFO } from "@/config/site";
import { getDocPath, getDocsByCategory } from "@/features/doc/data/documents";
import { DOC_CATEGORIES } from "@/features/doc/types/document";

const dailyPosts = getDocsByCategory(DOC_CATEGORIES.personal);
const techPosts = getDocsByCategory(DOC_CATEGORIES.tech);

const content = `# michaello.me

> Michael Lo's personal portfolio and blog. Full Stack Web Developer based in Taipei, Taiwan.

- [About](${SITE_INFO.url}/about.md): About me, my tech stack, and how to connect.
- [Talks](${SITE_INFO.url}/talks): Conference talks and presentations.

## Daily

${dailyPosts.map((item) => `- [${item.metadata.title}](${SITE_INFO.url}${getDocPath(item)}.mdx): ${item.metadata.description}`).join("\n")}

## Tech

${techPosts.length > 0 ? techPosts.map((item) => `- [${item.metadata.title}](${SITE_INFO.url}${getDocPath(item)}.mdx): ${item.metadata.description}`).join("\n") : "No posts yet."}
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
