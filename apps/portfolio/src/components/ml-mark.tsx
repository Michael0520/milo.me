"use client";

import { useId } from "react";

import { ML_MARK_PATH, ML_MARK_VIEWBOX } from "./ml-mark-path";

/**
 * Animated "ML" logo mark using SVG mask + stroke-dasharray animation.
 * Technique from https://antfu.me/posts/animated-svg-logo
 */

// Calligraphic ML outline — shared with the OG card (see ml-mark-path.ts).
const MASK_PATH = ML_MARK_PATH;

// Single continuous stroke path that traces through the ML calligraphy
const STROKE_PATH = `M 275 468 C 300 478 340 482 390 466 C 420 454 434 448 440 454 C 442 458 440 466 436 478 C 424 510 414 540 406 564 C 400 580 394 592 392 594 C 410 554 430 510 455 478 C 465 466 475 464 478 474 C 480 484 478 500 474 520 C 485 498 500 472 520 450 C 535 436 548 436 550 448 C 550 462 544 486 534 516 C 524 546 518 562 516 568 C 525 570 532 568 538 556 C 544 542 550 522 558 498 C 568 464 582 434 604 414 C 616 404 626 408 628 422 C 628 444 618 468 604 492 C 588 516 570 534 558 542 C 552 554 546 570 544 580 C 554 586 576 594 608 592 C 636 588 668 578 710 574 C 740 572 752 580 758 596 C 760 602 756 606 750 600 C 748 594 740 582 720 578`;

const VIEWBOX = ML_MARK_VIEWBOX;

export function MLMarkAnimated(props: React.ComponentProps<"svg">) {
  const maskId = useId().replace(/:/g, "");
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox={VIEWBOX} aria-hidden {...props}>
      <defs>
        <mask
          id={maskId}
          maskUnits="userSpaceOnUse"
          x="240"
          y="380"
          width="560"
          height="280"
          style={{ maskType: "alpha" } as React.CSSProperties}
        >
          <path d={MASK_PATH} fill="white" />
        </mask>
      </defs>
      <g mask={`url(#${maskId})`}>
        <path
          className="ml-mark-stroke"
          d={STROKE_PATH}
          stroke="currentColor"
          strokeWidth="28"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </svg>
  );
}

export function getMLMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="${VIEWBOX}"><path d="${MASK_PATH}" fill="${color}"/></svg>`;
}
