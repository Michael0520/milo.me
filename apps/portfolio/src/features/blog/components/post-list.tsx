import { ContentGrid } from "@/components/content-grid";
import type { Doc } from "@/features/doc/types/document";

import { PostItem } from "./post-item";

export function PostList({ posts }: { posts: Doc[] }) {
  return (
    <ContentGrid>
      {posts.map((post, index) => (
        <PostItem key={post.slug} post={post} shouldPreloadImage={index <= 4} />
      ))}

      {posts.length === 0 && (
        <div className="screen-line-top screen-line-bottom p-4">
          <p className="font-mono text-sm">No posts found.</p>
        </div>
      )}
    </ContentGrid>
  );
}
