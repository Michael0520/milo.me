import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { ViewTransition } from "react";

import { Button } from "@/components/base/ui/button";
import { PostItem } from "@/features/blog/components/post-item";
import { getDocsByCategory } from "@/features/doc/data/documents";

import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "./panel";

export function Blog() {
  const dailyPosts = getDocsByCategory("personal");

  if (dailyPosts.length === 0) return null;

  return (
    <Panel id="daily">
      <PanelHeader>
        <PanelTitle>
          <ViewTransition name="daily-page-heading-title">
            <span>Daily</span>
          </ViewTransition>
          <PanelTitleSup>({dailyPosts.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <div className="flex flex-col px-4 py-2">
        {dailyPosts.slice(0, 4).map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </div>

      <div className="screen-line-top flex justify-center py-2">
        <Button
          className="gap-2 border-none pr-2.5 pl-3"
          size="sm"
          nativeButton={false}
          render={<Link href="/daily" />}
        >
          All Posts
          <ArrowRightIcon />
        </Button>
      </div>
    </Panel>
  );
}
