import type { Metadata } from "next";
import type { ProfilePage as PageSchema, WithContext } from "schema-dts";

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
import { SPONSORS } from "@/features/sponsor/data";
import { TESTIMONIALS_1, TESTIMONIALS_2 } from "@/features/portfolio/data/testimonials";
import { USER } from "@/features/portfolio/data/user";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  return (
    <>
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

        <Components />
        <Separator />

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
  return (
    <div
      className={cn(
        "relative flex h-8 w-full border-x border-line",
        "before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw]",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-line)]/56",
        className,
      )}
    />
  );
}
