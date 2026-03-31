export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      aria-hidden
      {...props}
    >
      <text
        x="256"
        y="200"
        fontSize="220"
        fontWeight="bold"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="system-ui, sans-serif"
      >
        ML
      </text>
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><text x="128" y="100" font-size="110" font-weight="bold" text-anchor="middle" fill="${color}" font-family="system-ui, sans-serif">ML</text></svg>`;
}
