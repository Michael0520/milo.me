import { SiteFooterInteractiveLogotype } from "@/components/site-footer-brand";

export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-clip px-2">
      <div className="screen-line-top screen-line-bottom mx-auto border-x border-line py-6 group-has-data-[slot=layout-wide]/layout:container md:max-w-3xl">
        <p className="px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          © {new Date().getFullYear()} Michael Lo
        </p>
      </div>

      <SiteFooterInteractiveLogotype />

      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-16 sm:h-2" />
      </div>
    </footer>
  );
}
