"use client";

import { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

import { VolumeIcon } from "@/components/animated-icons/volume-icon";
import { useSoundLazy } from "@/hooks/use-sound";
import { trackEvent } from "@/lib/events";
import { cn } from "@/lib/utils";

export function PronounceMyName({
  className,
  namePronunciationUrl,
}: {
  className?: string;
  namePronunciationUrl: string;
}) {
  const { play, preload } = useSoundLazy(namePronunciationUrl);

  const [isAnimating, setIsAnimating] = useState(false);

  const handlePlayClick = () => {
    setIsAnimating((prev) => !prev);
    play();
    trackEvent({
      name: "play_name_pronunciation",
    });
  };

  useHotkeys("p", handlePlayClick);

  return (
    <button
      className={cn(
        "relative text-muted-foreground transition-[color,scale] will-change-[scale] select-none hover:text-foreground active:scale-[0.9]",
        "after:absolute after:-inset-1",
        className,
      )}
      onPointerEnter={() => preload()}
      onClick={handlePlayClick}
    >
      <VolumeIcon isAnimating={isAnimating} className="size-4.5" />
      <span className="sr-only">Pronounce my name</span>
    </button>
  );
}
