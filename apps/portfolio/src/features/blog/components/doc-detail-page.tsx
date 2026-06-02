import { getTableOfContents } from "fumadocs-core/content/toc";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { ViewTransition } from "react";
import type { BreadcrumbList, BlogPosting as PageSchema, WithContext } from "schema-dts";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/base/ui/tooltip";
import { InlineTOC } from "@/components/inline-toc";
import { MDX } from "@/components/mdx";
import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";
import { Prose } from "@/components/ui/typography";
import { SITE_INFO } from "@/config/site";
import { getDocPath } from "@/features/doc/data/documents";
import type { Doc } from "@/features/doc/types/document";
import { USER } from "@/features/portfolio/data/user";
import { cn } from "@/lib/utils";

import { PostKeyboardShortcuts } from "./post-keyboard-shortcuts";
import { PostNeighbourNav } from "./post-neighbour-nav";
import { LLMCopyButtonWithViewOptions } from "./post-page-actions";
import { PostShareMenu } from "./post-share-menu";

function getBreadcrumbJsonLd(
  doc: Doc,
  basePath: string,
  listLabel: string,
): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_INFO.url },
      { "@type": "ListItem", position: 2, name: listLabel, item: `${SITE_INFO.url}${basePath}` },
      {
        "@type": "ListItem",
        position: 3,
        name: doc.metadata.title,
        item: `${SITE_INFO.url}${getDocPath(doc)}`,
      },
    ],
  };
}

function getPageJsonLd(doc: Doc): WithContext<PageSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: doc.metadata.title,
    description: doc.metadata.description,
    image:
      doc.metadata.image ||
      `/og/simple?title=${encodeURIComponent(doc.metadata.title)}&description=${encodeURIComponent(doc.metadata.description)}`,
    url: `${SITE_INFO.url}${getDocPath(doc)}`,
    datePublished: new Date(doc.metadata.createdAt).toISOString(),
    dateModified: new Date(doc.metadata.updatedAt).toISOString(),
    author: {
      "@type": "Person",
      name: USER.displayName,
      identifier: USER.username,
      image: USER.avatar,
    },
  };
}

export function DocDetailPage({
  doc,
  previous,
  next,
  basePath,
  listLabel,
  viewTransitionName,
}: {
  doc: Doc;
  previous: Doc | null;
  next: Doc | null;
  basePath: string;
  listLabel: string;
  viewTransitionName: string;
}) {
  const toc = getTableOfContents(doc.content);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPageJsonLd(doc)).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbJsonLd(doc, basePath, listLabel)).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      <PostKeyboardShortcuts basePath={basePath} previous={previous} next={next} />

      <div className="flex items-center justify-between p-2 pl-4">
        <Button
          className="h-7 gap-2 border-none px-0 text-muted-foreground hover:text-foreground"
          variant="link"
          size="sm"
          asChild
        >
          <Link href={basePath}>
            <ArrowLeftIcon />
            <ViewTransition name={viewTransitionName}>
              <span>{listLabel}</span>
            </ViewTransition>
          </Link>
        </Button>

        <div className="flex items-center gap-2">
          <LLMCopyButtonWithViewOptions
            markdownUrl={`${getDocPath(doc)}.mdx`}
            isComponent={false}
          />

          <PostShareMenu title={doc.metadata.title} url={getDocPath(doc)} />

          {previous && (
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button className="size-7 border-none" variant="secondary" size="icon-sm" asChild>
                    <Link href={`${basePath}/${previous.slug}`}>
                      <ArrowLeftIcon />
                      <span className="sr-only">Previous</span>
                    </Link>
                  </Button>
                }
              />
              <TooltipContent className="pr-2 pl-3">
                <div className="flex items-center gap-3">
                  Previous Post
                  <Kbd>
                    <ArrowLeftIcon />
                  </Kbd>
                </div>
              </TooltipContent>
            </Tooltip>
          )}

          {next && (
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button className="size-7 border-none" variant="secondary" size="icon-sm" asChild>
                    <Link href={`${basePath}/${next.slug}`}>
                      <span className="sr-only">Next</span>
                      <ArrowRightIcon />
                    </Link>
                  </Button>
                }
              />
              <TooltipContent className="pr-2 pl-3">
                <div className="flex items-center gap-3">
                  Next Post
                  <Kbd>
                    <ArrowRightIcon />
                  </Kbd>
                </div>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>

      <div className="screen-line-top screen-line-bottom">
        <div
          className={cn(
            "h-8",
            "before:absolute before:-left-[100vw] before:-z-1 before:h-full before:w-[200vw]",
            "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-line)]/56",
          )}
        />
      </div>

      <Prose className="px-4">
        <h1 className="screen-line-bottom text-3xl font-semibold tracking-tight text-balance">
          {doc.metadata.title}
        </h1>

        <p className="text-muted-foreground">{doc.metadata.description}</p>

        <InlineTOC items={toc} />

        <div>
          <MDX code={doc.content} />
        </div>
      </Prose>

      <div className="screen-line-top screen-line-bottom">
        <PostNeighbourNav
          previous={previous}
          next={next}
          basePath={basePath}
          listLabel={listLabel}
        />
      </div>

      <div className="h-4 w-full" />
    </>
  );
}
