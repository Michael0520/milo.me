import { notFound } from "next/navigation";
import { Fragment } from "react";

import { BlockDisplay } from "@/app/(preview)/components/block-display";

export const dynamic = "force-static";
export const revalidate = false;

const FEATURED_BLOCKS = [
  "hero-01",
  "blog-02",
  "blog-01",
  "testimonials-01",
  "testimonials-02",
  "experience-01",
  "team-01",
];

export default function BlocksPage() {
  if (process.env.NODE_ENV !== "development") notFound();
  return (
    <>
      {FEATURED_BLOCKS.map((name) => (
        <Fragment key={name}>
          <BlockDisplay name={name} />
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
