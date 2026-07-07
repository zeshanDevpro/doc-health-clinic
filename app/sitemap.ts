import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-metadata";

const routes = [
  "",
  "/about",
  "/services",
  "/doctors",
  "/why-choose-us",
  "/health-tips",
  "/contact",
  "/appointment",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
