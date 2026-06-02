import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DocDetailPage } from "@/features/blog/components/doc-detail-page";
import { buildDocPageMetadata } from "@/features/blog/lib/build-doc-page-metadata";
import { findNeighbour, getDocBySlug, getDocsByCategory } from "@/features/doc/data/documents";
import { DOC_CATEGORIES } from "@/features/doc/types/document";

export const revalidate = false;
export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  return getDocsByCategory(DOC_CATEGORIES.tech).map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const doc = getDocBySlug(slug);

  if (!doc) {
    return notFound();
  }

  return buildDocPageMetadata(doc);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const doc = getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  const categoryDocs = getDocsByCategory(DOC_CATEGORIES.tech);
  const { previous, next } = findNeighbour(categoryDocs, slug);

  return (
    <DocDetailPage
      doc={doc}
      previous={next}
      next={previous}
      basePath="/tech"
      listLabel="Tech"
      viewTransitionName="tech-page-heading-title"
    />
  );
}
