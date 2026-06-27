import { notFound } from "next/navigation";
import { Fragment } from "react";

import { BlockDisplay } from "@/app/(preview)/components/block-display";
import { registryCategories } from "@/config/registry";
import { getAllBlockIds } from "@/lib/blocks";

export const revalidate = false;
export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  return registryCategories.map((category) => ({
    categories: [category.slug],
  }));
}

export default async function BlocksPage({
  params,
}: {
  params: Promise<{ categories?: string[] }>;
}) {
  if (process.env.NODE_ENV !== "development") notFound();
  const { categories = [] } = await params;
  const blockIds = await getAllBlockIds(["registry:block"], categories);

  return (
    <>
      {blockIds.map((blockId) => (
        <Fragment key={blockId}>
          <BlockDisplay name={blockId} />
          <Separator />
        </Fragment>
      ))}

      <div className="p-2">
        <div className="relative border p-4">
          <p className="font-mono text-sm text-muted-foreground">More blocks on the way…</p>

          <div className="*:absolute *:flex *:size-2 *:rounded-xs *:border *:border-zinc-300 *:bg-popover dark:*:border-border">
            <div className="top-[-4.5px] left-[-4.5px]" />
            <div className="bottom-[-4.5px] left-[-4.5px]" />
            <div className="top-[-4.5px] right-[-4.5px]" />
            <div className="right-[-4.5px] bottom-[-4.5px]" />
          </div>
        </div>
      </div>
    </>
  );
}

function Separator() {
  return (
    <div className="screen-line-top screen-line-bottom">
      <div className="stripe-divider" />
    </div>
  );
}
