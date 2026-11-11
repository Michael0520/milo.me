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

import { ArticleHeading } from "./article-heading";
import { ArticleLink } from "./article-link";
import { ArticleSelectionShare } from "./article-selection-share";
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
    // JSON-LD is hand-serialized, so metadataBase does not apply — these must
    // be absolute or Google's Rich Results parser drops the image.
    image: `${SITE_INFO.url}${
      doc.metadata.image ||
      `/og/simple?title=${encodeURIComponent(doc.metadata.title)}&description=${encodeURIComponent(doc.metadata.description)}`
    }`,
    url: `${SITE_INFO.url}${getDocPath(doc)}`,
    datePublished: new Date(doc.metadata.createdAt).toISOString(),
    dateModified: new Date(doc.metadata.updatedAt).toISOString(),
    author: {
      "@type": "Person",
      name: USER.displayName,
      identifier: USER.username,
      image: `${SITE_INFO.url}${USER.avatar}`,
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
  const formatDate = (value: string) =>
    new Intl.DateTimeFormat("en", { dateStyle: "medium", timeZone: "UTC" }).format(new Date(value));

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
          <LLMCopyButtonWithViewOptions markdownUrl={`${getDocPath(doc)}.md`} isComponent={false} />

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
        <div className="stripe-divider" />
      </div>

      <Prose className="article-prose">
        <h1 className="screen-line-bottom">{doc.metadata.title}</h1>

        <div className="not-prose flex flex-wrap gap-x-4 gap-y-1 text-xs leading-6 tracking-normal text-muted-foreground sm:text-sm">
          <span>
            Published{" "}
            <time dateTime={doc.metadata.createdAt}>{formatDate(doc.metadata.createdAt)}</time>
          </span>
          {doc.metadata.updatedAt.slice(0, 10) !== doc.metadata.createdAt.slice(0, 10) && (
            <span>
              Updated{" "}
              <time dateTime={doc.metadata.updatedAt}>{formatDate(doc.metadata.updatedAt)}</time>
            </span>
          )}
          <span>{doc.readingTime} min read</span>
        </div>

        <p className="text-muted-foreground">{doc.metadata.description}</p>

        <InlineTOC items={toc} className="my-8 md:my-10" />

        <p className="not-prose mb-6 text-xs leading-6 tracking-normal text-muted-foreground">
          Select text to copy or share a quote.
        </p>

        <ArticleSelectionShare>
          <MDX
            code={doc.content}
            paragraphAnchors
            components={{
              a: ArticleLink,
              h1: (props) => <ArticleHeading as="h1" {...props} />,
              h2: (props) => <ArticleHeading as="h2" {...props} />,
              h3: (props) => <ArticleHeading as="h3" {...props} />,
              h4: (props) => <ArticleHeading as="h4" {...props} />,
              h5: (props) => <ArticleHeading as="h5" {...props} />,
              h6: (props) => <ArticleHeading as="h6" {...props} />,
            }}
          />
        </ArticleSelectionShare>
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
