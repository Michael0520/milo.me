import { Suspense } from "react";

import { DocsListPageLayout } from "@/features/blog/components/docs-list-page-layout";
import { PostList } from "@/features/blog/components/post-list";
import { PostListWithSearch } from "@/features/blog/components/post-list-with-search";
import { buildDocsListMetadata } from "@/features/blog/lib/build-docs-list-metadata";
import { getDocsByCategory } from "@/features/doc/data/documents";
import { DOC_CATEGORIES } from "@/features/doc/types/document";

const title = "Daily";
const description = "Life updates, reflections, and personal stories.";

export const metadata = buildDocsListMetadata({ title, description, path: "/daily" });

export default function Page() {
  const allPosts = getDocsByCategory(DOC_CATEGORIES.personal);

  return (
    <DocsListPageLayout
      title={title}
      description={description}
      viewTransitionName="daily-page-heading-title"
    >
      <Suspense fallback={<PostList posts={allPosts} />}>
        <PostListWithSearch posts={allPosts} />
      </Suspense>
    </DocsListPageLayout>
  );
}
