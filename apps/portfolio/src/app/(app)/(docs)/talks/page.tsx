import { DocsListPageLayout } from "@/features/blog/components/docs-list-page-layout";
import { buildDocsListMetadata } from "@/features/blog/lib/build-docs-list-metadata";
import { TalkItem } from "@/features/portfolio/components/talk-item";
import { TALKS } from "@/features/portfolio/data/talks";

const title = "Talks";
const description = "Conference talks and presentations I've given.";

export const metadata = buildDocsListMetadata({ title, description, path: "/talks" });

export default function Page() {
  return (
    <DocsListPageLayout
      title={title}
      description={description}
      viewTransitionName="talks-page-heading-title"
      showSearch={false}
    >
      <div className="px-4 divide-y divide-line">
        {TALKS.map((talk) => (
          <div key={talk.slug} className="py-2">
            <TalkItem talk={talk} />
          </div>
        ))}
      </div>

      <div className="h-4" />
    </DocsListPageLayout>
  );
}
