import type { Doc } from "@/features/doc/types/document";

import { PostCardItem } from "./post-card-item";

export const POSTS_PER_PAGE = 10;

export function PostCardList({ posts }: { posts: Doc[] }) {
  return (
    <div>
      <div className="screen-line-top flex h-4" />

      <div className="px-4 divide-y divide-line">
        {posts.map((post) => (
          <PostCardItem key={post.slug} post={post} />
        ))}
      </div>

      {posts.length === 0 && (
        <div className="p-4">
          <p className="font-mono text-sm">No posts found.</p>
        </div>
      )}
    </div>
  );
}
