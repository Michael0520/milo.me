"use client";

import type { Transition, Variants } from "motion/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Children, useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const defaultTransition: Transition = {
  type: "spring",
  visualDuration: 0.35,
  bounce: 0,
};

const exitTransition: Transition = { duration: 0.2, ease: "easeOut" };

const defaultVariants: Variants = {
  initial: { y: "-0.25em", opacity: 0, filter: "blur(2px)" },
  animate: { y: "0em", opacity: 1, filter: "blur(0px)" },
  exit: {
    y: "0.25em",
    opacity: 0,
    filter: "blur(2px)",
    transition: exitTransition,
  },
};

// The shared animate state keeps the server render and client hydration identical.
const reducedMotionVariants: Variants = {
  ...defaultVariants,
  initial: { opacity: 0 },
  exit: { opacity: 0, transition: exitTransition },
};

type MotionElement = typeof motion.p | typeof motion.span | typeof motion.code;

export type TextFlipProps = {
  /**
   * Motion element to render.
   * @defaultValue motion.p
   * */
  as?: MotionElement;
  className?: string;
  /** Array of children to cycle through. */
  children: React.ReactNode[];

  /**
   * Time in seconds between each flip.
   * @defaultValue 2
   * */
  interval?: number;
  /**
   * Motion transition for the enter animation. The default exit is faster and
   * sets its own transition.
   * @defaultValue { type: "spring", visualDuration: 0.35, bounce: 0 }
   * */
  transition?: Transition;
  /** Replaces the defaults, including their reduced motion fallback. */
  variants?: Variants;

  /** Called with the new index after each flip. */
  onIndexChange?: (index: number) => void;
};

export function TextFlip({
  as: Component = motion.p,
  className,
  children,

  interval = 2,
  transition = defaultTransition,
  variants,

  onIndexChange,
}: TextFlipProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const items = Children.toArray(children);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % items.length;
        onIndexChange?.(next);
        return next;
      });
    }, interval * 1000);

    return () => clearInterval(timer);
  }, [items.length, interval, onIndexChange]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Component
        key={currentIndex}
        className={cn("inline-block", className)}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={transition}
        variants={variants ?? (shouldReduceMotion ? reducedMotionVariants : defaultVariants)}
      >
        {items[currentIndex]}
      </Component>
    </AnimatePresence>
  );
}
