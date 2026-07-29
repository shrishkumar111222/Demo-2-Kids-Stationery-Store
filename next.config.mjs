/**
 * GitHub Pages serves a project site from https://<user>.github.io/<repo>/, so
 * the build needs a basePath — without it every asset request resolves to the
 * domain root and 404s. That prefix would be wrong for local dev and for a
 * custom domain, so it's opt-in via GITHUB_PAGES rather than baked in.
 */
const isPages = process.env.GITHUB_PAGES === "true";
const repo = "Demo-2-Kids-Stationery-Store";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  ...(isPages
    ? {
        output: "export",
        basePath: `/${repo}`,
        assetPrefix: `/${repo}/`,
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
