import { AWARDS } from "@/features/portfolio/data/awards";
import { markdownResponse } from "@/lib/markdown-response";

const content = `# Awards

${AWARDS.map((item) => `## ${item.prize} | ${item.title}\n\n${item.description}`).join("\n\n")}
`;

export const revalidate = false;
export const dynamic = "force-static";

export async function GET() {
  return markdownResponse(content);
}
