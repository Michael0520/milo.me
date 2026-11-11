import { CERTIFICATIONS } from "@/features/portfolio/data/certifications";
import { markdownResponse } from "@/lib/markdown-response";

const content = `# Certifications

${CERTIFICATIONS.map((item) => `- [${item.title}](${item.credentialURL})`).join("\n")}
`;

export const revalidate = false;
export const dynamic = "force-static";

export async function GET() {
  return markdownResponse(content);
}
