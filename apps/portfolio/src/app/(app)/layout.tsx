import dynamic from "next/dynamic";

import { ShaderBackground } from "@/components/shader-background";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const ScrollToTop = dynamic(() =>
  import("@/components/scroll-to-top").then((mod) => mod.ScrollToTop),
);

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="group/layout">
      <ShaderBackground />
      <SiteHeader />
      <main className="max-w-screen overflow-x-hidden px-2">{children}</main>
      <SiteFooter />
      <ScrollToTop />
    </div>
  );
}
