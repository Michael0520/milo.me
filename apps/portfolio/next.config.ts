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
  experimental: {
    viewTransition: true,
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
    return [
      // SPA fallback for Slidev decks: deep routes like /slides/<slug>/3 have no
      // static file on disk, so serve the deck's index.html and let Slidev's
      // client router resolve the slide. Runs in the afterFiles phase, so real
      // assets (index.html, assets/*, images/*) are served directly and never
      // hit this rule. Replaces Slidev's _redirects, which Vercel ignores.
      {
        source: "/slides/:slug/:path*",
        destination: "/slides/:slug/index.html",
      },
      {
        source: "/:section(daily|tech|components)/:slug.mdx",
        destination: "/doc.mdx/:slug",
      },
      {
        source: "/:section(daily|tech|components)/:slug",
        destination: "/doc.mdx/:slug",
        has: [
          {
            type: "header",
            key: "accept",
            value: "(?<accept>.*text/markdown.*)",
          },
        ],
      },
      {
        source: "/rss",
        destination: "/daily/rss",
      },
      {
        source: "/registry/rss",
        destination: "/components/rss",
      },
    ];
  },
};

export default nextConfig;
