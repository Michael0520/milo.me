import type { Doc } from "@/features/doc/types/document";

import { PostItem } from "./post-item";

function groupByYear(posts: Doc[]) {
  const groups: { year: number; posts: Doc[] }[] = [];

  for (const post of posts) {
    const year = new Date(post.metadata.createdAt).getFullYear();
    const last = groups[groups.length - 1];

    if (last && last.year === year) {
      last.posts.push(post);
    } else {
      groups.push({ year, posts: [post] });
    }
  }

  return groups;
}

export function PostList({ posts }: { posts: Doc[] }) {
  const groups = groupByYear(posts);

  return (
    <div>
      {groups.map(({ year, posts }) => (
        <div key={year} className="relative overflow-hidden pt-[clamp(2.5rem,8vw,3.5rem)] pb-4">
          <div className="pointer-events-none absolute top-0 left-0 select-none text-[clamp(5rem,15vw,12rem)] leading-none font-bold tracking-tight text-foreground/[0.08]">
            {year}
          </div>

          <div className="relative flex flex-col">
            {posts.map((post) => (
              <PostItem key={post.slug} post={post} />
            ))}
          </div>
        </div>
      ))}

      {posts.length === 0 && (
        <div className="p-4">
          <p className="font-mono text-sm">No posts found.</p>
        </div>
      )}
    </div>
  );
}
