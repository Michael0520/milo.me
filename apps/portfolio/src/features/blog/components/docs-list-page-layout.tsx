import { Suspense, ViewTransition } from "react";

import { PostSearchInput } from "./post-search-input";

export function DocsListPageLayout({
  title,
  description,
  viewTransitionName,
  showSearch = true,
  children,
}: {
  title: string;
  description: string;
  viewTransitionName: string;
  showSearch?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-svh">
      <div className="screen-line-bottom px-4">
        <h1 className="text-3xl leading-none font-semibold tracking-tight">
          <ViewTransition name={viewTransitionName}>
            <span>{title}</span>
          </ViewTransition>
        </h1>
      </div>

      <div className="p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">{description}</p>
      </div>

      {showSearch && (
        <div className="screen-line-top screen-line-bottom p-2">
          <Suspense
            fallback={
              <div className="flex h-9 w-full rounded-lg border border-input dark:bg-input/30" />
            }
          >
            <PostSearchInput />
          </Suspense>
        </div>
      )}

      {!showSearch && <div className="screen-line-top flex h-4" />}

      {children}
    </div>
  );
}
