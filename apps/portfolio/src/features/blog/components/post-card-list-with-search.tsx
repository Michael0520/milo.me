"use client";

import type { Doc } from "@/features/doc/types/document";

import { usePageQuery } from "../hooks/use-page-query";
import { useFilteredPosts } from "../hooks/use-filtered-posts";
import { PostCardList, POSTS_PER_PAGE } from "./post-card-list";
import { PostPagination } from "./post-pagination";

export function PostCardListWithSearch({ posts }: { posts: Doc[] }) {
  const filteredPosts = useFilteredPosts(posts);
  const { page } = usePageQuery();

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const currentPage = Math.max(1, Math.min(page, totalPages || 1));
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(start, start + POSTS_PER_PAGE);

  return (
    <>
      <PostCardList posts={paginatedPosts} />
      <PostPagination totalPages={totalPages} />
    </>
  );
}
