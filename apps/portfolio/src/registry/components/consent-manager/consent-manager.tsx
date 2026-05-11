import { ConsentBanner, ConsentDialog, ConsentManagerProvider } from "@c15t/nextjs";

// TODO(@c15t/nextjs v2): previous nested `theme` keys (banner.*, dialog.*, widget.*)
// were dropped in v2 in favor of CSS variables / design tokens. Re-style via the
// new token system when this registry component is next iterated on.
// See: https://c15t.com/changelog/2026-04-14-v2.0.0
export function ConsentManager({ children }: { children: React.ReactNode }) {
  return (
    <ConsentManagerProvider
      options={{
        mode: "offline",
        consentCategories: ["necessary", "measurement"],
        // ignoreGeoLocation: process.env.NODE_ENV === "development", // Useful for development to always view the banner.
      }}
    >
      <ConsentBanner />
      <ConsentDialog />
      {children}
    </ConsentManagerProvider>
  );
}
