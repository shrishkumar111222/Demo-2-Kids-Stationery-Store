import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// required for `output: "export"` (GitHub Pages); harmless on a server target
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
  ];
}
