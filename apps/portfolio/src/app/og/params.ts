export const OG_CACHE_CONTROL = "public, max-age=3600, s-maxage=31536000, immutable";

export function clampParam(value: string | null, maxLength: number, fallback = "") {
  if (!value) {
    return fallback;
  }

  const trimmed = value.trim();
  return trimmed.length > maxLength ? `${trimmed.slice(0, maxLength - 1)}…` : trimmed;
}
