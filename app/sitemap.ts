import type { MetadataRoute } from "next";
import { allSlugs, getDoc } from "@/lib/docs";
import { SITE_URL } from "@/lib/site";

const stamp = (d?: string) => (d && !Number.isNaN(Date.parse(d)) ? new Date(d) : new Date("2026-11-20"));

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = allSlugs();
  const newest = slugs.map((s) => stamp(getDoc(s)?.updated)).sort((a, b) => b.getTime() - a.getTime())[0];
  return [
    { url: SITE_URL, lastModified: newest, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/docs`, lastModified: newest, changeFrequency: "monthly", priority: 0.9 },
    ...slugs.map((s) => ({ url: `${SITE_URL}/docs/${s}`, lastModified: stamp(getDoc(s)?.updated), changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
