import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["next-mdx-remote"],
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "unavatar.io",
        port: "",
      },
    ],
    qualities: [75, 100],
  },
  compiler:
    process.env.NODE_ENV === "production"
      ? {
          removeConsole: {
            exclude: ["error"],
          },
        }
      : undefined,
  async redirects() {
    return [
      {
        source: "/:section(blog|components)/writing-effect-inspired-by-apple",
        destination: "/:section/apple-hello-effect",
        permanent: true,
      },
      {
        source: "/:section(blog|components)/work-experience",
        destination: "/:section/work-experience-component",
        permanent: true,
      },
      {
        source: "/:section(blog|components)/theme-switcher-component",
        destination: "/:section/theme-switcher",
        permanent: true,
      },
      /**
       * /llms-full.txt used to serve the whole site as one document. It is now
       * covered by /llms.txt plus the per-section .md routes, so agents probing
       * the conventional URL land on the index instead of a 404.
       */
      {
        source: "/llms-full.txt",
        destination: "/llms.txt",
        permanent: true,
      },
      {
        source: "/:section(daily|tech|components)/:slug.mdx",
        destination: "/:section/:slug.md",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/daily",
        permanent: true,
      },
      {
        source: "/blog/:slug",
        destination: "/daily/:slug",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return {
      // beforeFiles runs ahead of prerendered pages. afterFiles rewrites never
      // fire for SSG pages on Vercel, which silently broke Accept-based
      // markdown negotiation in production (HTML came back instead).
      beforeFiles: [
        {
          source: "/:section(daily|tech|components)/:slug.md",
          destination: "/doc.md/:slug",
        },
        {
          source: "/:section(daily|tech|components)/:slug",
          destination: "/doc.md/:slug",
          has: [
            {
              type: "header",
              key: "accept",
              value: "(?<accept>.*text/markdown.*)",
            },
          ],
        },
        {
          source: "/index.md",
          destination: "/llms.txt",
        },
        {
          source: "/",
          destination: "/llms.txt",
          has: [
            {
              type: "header",
              key: "accept",
              value: "(?<accept>.*text/markdown.*)",
            },
          ],
        },
      ],
      afterFiles: [
        // SPA fallback for Slidev decks: deep routes like /slides/<slug>/3 have no
        // static file on disk, so serve the deck's index.html and let Slidev's
        // client router resolve the slide. Must stay in afterFiles so real
        // assets (index.html, assets/*, images/*) are served directly and never
        // hit this rule. Replaces Slidev's _redirects, which Vercel ignores.
        {
          source: "/slides/:slug/:path*",
          destination: "/slides/:slug/index.html",
        },
        {
          source: "/rss",
          destination: "/daily/rss",
        },
        {
          source: "/registry/rss",
          destination: "/components/rss",
        },
      ],
    };
  },
};

export default nextConfig;
