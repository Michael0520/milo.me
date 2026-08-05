import { SITE_INFO } from "@/config/site";
import { TALKS } from "@/features/portfolio/data/talks";

const content = `# Talks

${TALKS.map((item) => {
  const location = item.location ? ` | ${item.location}` : "";
  const description = item.description ? `\n\n${item.description.trim()}` : "";
  const tags = item.tags?.length ? `\n\nTags: ${item.tags.join(", ")}` : "";
  return `## ${item.title}\n\n${item.event}${location} — ${item.date}\n\nSlides: ${SITE_INFO.url}/slides/${item.slug}/index.html${tags}${description}`;
}).join("\n\n")}
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
