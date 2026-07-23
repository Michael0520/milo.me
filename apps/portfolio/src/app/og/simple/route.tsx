import { readFileSync } from "node:fs";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { ML_MARK_PATH, ML_MARK_VIEWBOX } from "@/components/ml-mark-path";

import { clampParam, OG_CACHE_CONTROL } from "../params";

function loadFont(filename: string) {
  const paths = [
    join(process.cwd(), "src/assets/fonts", filename),
    join(process.cwd(), "apps/portfolio/src/assets/fonts", filename),
  ];
  for (const p of paths) {
    try {
      return readFileSync(p);
    } catch {}
  }
  throw new Error(`Font not found: ${filename}`);
}

const geistSemiBold = loadFont("Geist-SemiBold.ttf");

const geistMonoRegular = loadFont("GeistMono-Regular.ttf");

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const title = clampParam(searchParams.get("title"), 160);
  const description = clampParam(searchParams.get("description"), 320);

  return new ImageResponse(
    <div tw="flex h-full w-full bg-black text-zinc-50">
      <div tw="absolute inset-y-0 left-12 flex w-px border border-zinc-800" />
      <div tw="absolute inset-y-0 right-12 flex w-px border border-zinc-800" />
      <div tw="absolute inset-x-0 top-12 flex h-px border border-zinc-800" />
      <div tw="absolute inset-x-0 bottom-12 flex h-px border border-zinc-800" />

      <div tw="absolute top-18 left-18 flex">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={ML_MARK_VIEWBOX} width={140} height={70}>
          <path fill="currentColor" d={ML_MARK_PATH} />
        </svg>
      </div>

      <div tw="absolute inset-x-0 top-40 bottom-24 flex flex-col justify-end border-t-2 border-zinc-800">
        <div
          tw="border-t-2 border-b-2 border-zinc-800 px-18"
          style={{
            fontFamily: "GeistSans",
            fontWeight: 600,
            fontSize: 64,
            lineHeight: 1,
            textWrap: "balance",
            letterSpacing: "-0.025em",
          }}
        >
          {title}
        </div>

        {description && (
          <div tw="flex flex-col">
            <div
              tw="border-b-2 border-zinc-800 px-18 py-8 text-zinc-400"
              style={{
                fontFamily: "GeistMono",
                fontWeight: 400,
                fontSize: 32,
                lineHeight: 1.25,
                textWrap: "balance",
              }}
            >
              {description}
            </div>
          </div>
        )}
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "GeistSans",
          data: geistSemiBold,
          weight: 600,
        },
        {
          name: "GeistMono",
          data: geistMonoRegular,
          weight: 400,
        },
      ],
      headers: {
        "Cache-Control": OG_CACHE_CONTROL,
      },
    },
  );
}
