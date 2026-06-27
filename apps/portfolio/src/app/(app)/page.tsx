import type { TOCItemType } from "fumadocs-core/toc";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import type { ProfilePage as PageSchema, WithContext } from "schema-dts";

import { getDocsByCategory } from "@/features/doc/data/documents";
import { DOC_CATEGORIES } from "@/features/doc/types/document";
import { About } from "@/features/portfolio/components/about";
import { Awards } from "@/features/portfolio/components/awards";
import { Blog } from "@/features/portfolio/components/blog";
import { Bookmarks } from "@/features/portfolio/components/bookmarks";
import { Certifications } from "@/features/portfolio/components/certifications";
import { Components } from "@/features/portfolio/components/components";
import { Experiences } from "@/features/portfolio/components/experiences";
import { GitHubContributions } from "@/features/portfolio/components/github-contributions";
import { Overview } from "@/features/portfolio/components/overview";
import { ProfileCover } from "@/features/portfolio/components/profile-cover";
import { ProfileHeader } from "@/features/portfolio/components/profile-header";
import { Projects } from "@/features/portfolio/components/projects";
import { SocialLinks } from "@/features/portfolio/components/social-links";
import { Sponsors } from "@/features/portfolio/components/sponsors";
import { TechStack } from "@/features/portfolio/components/tech-stack";
import { Testimonials } from "@/features/portfolio/components/testimonials";
import { AWARDS } from "@/features/portfolio/data/awards";
import { BOOKMARKS } from "@/features/portfolio/data/bookmarks";
import { CERTIFICATIONS } from "@/features/portfolio/data/certifications";
import { EXPERIENCES } from "@/features/portfolio/data/experiences";
import { TESTIMONIALS_1, TESTIMONIALS_2 } from "@/features/portfolio/data/testimonials";
import { USER } from "@/features/portfolio/data/user";
import { SPONSORS } from "@/features/sponsor/data";
import { cn } from "@/lib/utils";

const TOC = dynamic(() => import("@/features/portfolio/components/toc"));

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  // Build the floating TOC minimap list to match exactly the sections that
  // actually render below (same `.length > 0` / NODE_ENV gates).
  const tocItems: TOCItemType[] = [
    { title: "Overview", url: "#overview", depth: 2 },
    { title: "About", url: "#about", depth: 2 },
    ...(TESTIMONIALS_1.length > 0 || TESTIMONIALS_2.length > 0
      ? [{ title: "Testimonials", url: "#testimonials", depth: 2 }]
      : []),
    { title: "GitHub", url: "#contributions", depth: 2 },
    ...(SPONSORS.length > 0 ? [{ title: "Sponsors", url: "#sponsors", depth: 2 }] : []),
    { title: "Stack", url: "#stack", depth: 2 },
    ...(process.env.NODE_ENV === "development" &&
    getDocsByCategory(DOC_CATEGORIES.components).length > 0
      ? [{ title: "Components", url: "#components", depth: 2 }]
      : []),
    ...(getDocsByCategory(DOC_CATEGORIES.personal).length > 0
      ? [{ title: "Daily", url: "#daily", depth: 2 }]
      : []),
    ...(EXPERIENCES.length > 0 ? [{ title: "Experience", url: "#experience", depth: 2 }] : []),
    { title: "Projects", url: "#projects", depth: 2 },
    ...(AWARDS.length > 0 ? [{ title: "Awards", url: "#awards", depth: 2 }] : []),
    ...(CERTIFICATIONS.length > 0 ? [{ title: "Certifications", url: "#certs", depth: 2 }] : []),
    ...(BOOKMARKS.length > 0 ? [{ title: "Bookmarks", url: "#bookmarks", depth: 2 }] : []),
  ];

  return (
    <>
      <TOC items={tocItems} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPageJsonLd()).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto md:max-w-3xl *:[[id]]:scroll-mt-22">
        <ProfileCover />
        <ProfileHeader />
        <Separator />

        <Overview />
        <SocialLinks />
        <Separator />

        <About />
        <div className="flex h-2 w-full border-x border-line" />

        {(TESTIMONIALS_1.length > 0 || TESTIMONIALS_2.length > 0) && (
          <>
            <Testimonials />
            <div className="flex h-2 w-full border-x border-line" />
          </>
        )}

        <GitHubContributions />
        <Separator />

        {SPONSORS.length > 0 && (
          <>
            <Sponsors />
            <Separator />
          </>
        )}

        <TechStack />
        <Separator />

        {process.env.NODE_ENV === "development" && (
          <>
            <Components />
            <Separator />
          </>
        )}

        <Blog />
        <Separator />

        {EXPERIENCES.length > 0 && (
          <>
            <Experiences />
            <Separator />
          </>
        )}

        <Projects />
        <Separator />

        {AWARDS.length > 0 && (
          <>
            <Awards />
            <Separator />
          </>
        )}

        {CERTIFICATIONS.length > 0 && (
          <>
            <Certifications />
            <Separator />
          </>
        )}

        {BOOKMARKS.length > 0 && (
          <>
            <Bookmarks />
            <Separator />
          </>
        )}
      </div>
    </>
  );
}

function getPageJsonLd(): WithContext<PageSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: new Date(USER.dateCreated).toISOString(),
    dateModified: new Date().toISOString(),
    mainEntity: {
      "@type": "Person",
      name: USER.displayName,
      identifier: USER.username,
      image: USER.avatar,
    },
  };
}

function Separator({ className }: { className?: string }) {
  return <div className={cn("stripe-divider flex w-full border-x border-line", className)} />;
}
