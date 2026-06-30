import Image from "next/image";

import { UTM_PARAMS } from "@/config/site";
import { addQueryParams } from "@/utils/url";

import type { Experience } from "../../types/experiences";
import { ExperiencePositionItem } from "./experience-position-item";

export function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <div
      id={`experience-${experience.id}`}
      className="screen-line-bottom scroll-mt-14 space-y-4 py-4"
    >
      <div className="flex items-start gap-3 sm:items-center">
        <div className="flex size-6 shrink-0 items-center justify-center select-none">
          {experience.companyLogo ? (
            <Image
              src={experience.companyLogo}
              alt={`${experience.companyName} logo`}
              width={24}
              height={24}
              quality={100}
              className="rounded-full"
              unoptimized
              aria-hidden
            />
          ) : (
            <span className="flex size-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
          )}
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-x-3 gap-y-1 pr-1 sm:flex-row sm:items-baseline sm:justify-between">
          <div className="flex items-center gap-3">
            <h3 className="text-lg leading-snug font-semibold">
              {experience.companyWebsite ? (
                <a
                  className="underline-offset-4 hover:underline"
                  href={addQueryParams(experience.companyWebsite, UTM_PARAMS)}
                  target="_blank"
                  rel="noopener"
                >
                  {experience.companyName}
                </a>
              ) : (
                experience.companyName
              )}
            </h3>

            {experience.isCurrentEmployer && (
              <span
                className="relative flex items-center justify-center"
                aria-label="Current Employer"
              >
                <span className="absolute inline-flex size-3 animate-ping rounded-full bg-info opacity-50" />
                <span className="relative inline-flex size-2 rounded-full bg-info" />
              </span>
            )}
          </div>

          {experience.location && experience.locationType && (
            <dl className="flex min-w-0 items-center gap-1.5 text-sm whitespace-nowrap text-muted-foreground">
              <dt className="sr-only">Location</dt>
              <dd className="truncate">{experience.location}</dd>

              <dt className="sr-only">Location type</dt>
              <dd>({experience.locationType})</dd>
            </dl>
          )}
        </div>
      </div>

      <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
        {experience.positions.map((position) => (
          <ExperiencePositionItem key={position.id} position={position} />
        ))}
      </div>
    </div>
  );
}
