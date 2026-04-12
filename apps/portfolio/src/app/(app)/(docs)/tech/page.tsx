import { Suspense } from "react";

import { DocsListPageLayout } from "@/features/blog/components/docs-list-page-layout";
import { PostCardList } from "@/features/blog/components/post-card-list";
import { PostCardListWithSearch } from "@/features/blog/components/post-card-list-with-search";
import { buildDocsListMetadata } from "@/features/blog/lib/build-docs-list-metadata";
import { getDocsByCategory } from "@/features/doc/data/documents";
import { DOC_CATEGORIES } from "@/features/doc/types/document";

const title = "Tech";
const description = "Technical notes, learnings, and developer stories.";

export const metadata = buildDocsListMetadata({ title, description, path: "/tech" });

export default function Page() {
  const allPosts = getDocsByCategory(DOC_CATEGORIES.tech);

  return (
    <DocsListPageLayout
      title={title}
      description={description}
      viewTransitionName="tech-page-heading-title"
    >
      <Suspense fallback={<PostCardList posts={allPosts} />}>
        <PostCardListWithSearch posts={allPosts} />
      </Suspense>
    </DocsListPageLayout>
  );
}
