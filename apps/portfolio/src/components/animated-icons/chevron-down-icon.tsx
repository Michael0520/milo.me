"use client";

import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";

export type ChevronDownIconProps = React.ComponentProps<"svg"> & {
  duration?: number;
  isOpen?: boolean;
};

function ChevronDownIcon({ duration = 0.3, isOpen, ...props }: ChevronDownIconProps) {
  const controls = useAnimation();

  useEffect(() => {
    if (isOpen === undefined) return;
    void controls.start(isOpen ? "animate" : "normal");
  }, [isOpen, controls]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <motion.path
        d="M6 9L12 15L18 9"
        variants={{
          normal: {
            d: "M6 9L12 15L18 9",
          },
          animate: {
            d: "M6 15L12 9L18 15",
          },
        }}
        initial={isOpen ? "animate" : "normal"}
        animate={controls}
        transition={{
          duration,
        }}
      />
    </svg>
  );
}

export { ChevronDownIcon };
