export const DOC_CATEGORIES = {
  personal: "personal",
  tech: "tech",
  components: "components",
} as const;

export type DocCategory = (typeof DOC_CATEGORIES)[keyof typeof DOC_CATEGORIES];

export type DocMetadata = {
  title: string;
  description: string;
  /**
   * Social/OG image URL for the post.
   * Use an absolute URL or a path under /public. Recommended size: 1200x630.
   */
  image?: string;
  /**
   * Category identifier/slug used for filtering (see getDocsByCategory).
   */
  category?: DocCategory;
  /**
   * Flag to show a "New" badge/highlight in the UI.
   */
  new?: boolean;
  /**
   * Flag to pin the post to the top of the list.
   */
  pinned?: boolean;
  /**
   * Post creation date as an ISO date string (e.g. YYYY-MM-DD). Used for sorting.
   */
  createdAt: string;
  /**
   * Last updated date as an ISO date string (e.g. YYYY-MM-DD).
   */
  updatedAt: string;
};

export type Doc = {
  /** Parsed frontmatter metadata from the MDX file. */
  metadata: DocMetadata;
  /** Slug derived from the MDX filename (without extension). */
  slug: string;
  /** MDX content body without frontmatter. */
  content: string;
  /** Estimated reading time in minutes. */
  readingTime: number;
};

/**
 * Minimal doc data for client components that don't need the full content.
 * Reduces serialization overhead and bundle size.
 */
export type DocPreview = {
  slug: string;
  title: string;
  category?: DocCategory;
};
