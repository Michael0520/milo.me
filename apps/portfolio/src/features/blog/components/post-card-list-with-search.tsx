"use client";

import type { Doc } from "@/features/doc/types/document";

import { useFilteredPosts } from "../hooks/use-filtered-posts";
import { PostCardList } from "./post-card-list";

export function PostCardListWithSearch({ posts }: { posts: Doc[] }) {
  const filteredPosts = useFilteredPosts(posts);
  return <PostCardList posts={filteredPosts} />;
}
