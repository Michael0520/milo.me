import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/base/ui/tooltip";
import { UTM_PARAMS } from "@/config/site";
import type { SocialLink } from "@/features/portfolio/types/social-links";
import { cn } from "@/lib/utils";
import { addQueryParams } from "@/utils/url";

export function SocialLinkItem({ icon, title, href }: SocialLink) {
  return (
    <li>
      <Tooltip>
        <TooltipTrigger
          render={
            <a
              className={cn(
                "flex size-8 items-center justify-center rounded-lg border",
                "bg-background hover:bg-muted dark:border-input dark:hover:bg-input/50",
                "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:text-foreground [&_svg:not([class*='size-'])]:size-5",
              )}
              href={addQueryParams(href, UTM_PARAMS)}
              target="_blank"
              rel="noopener"
            >
              {icon}
              <span className="sr-only">{title}</span>
            </a>
          }
        />
        <TooltipContent>{title}</TooltipContent>
      </Tooltip>
    </li>
  );
}
