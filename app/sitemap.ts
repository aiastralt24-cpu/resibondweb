import type { MetadataRoute } from "next";
import { applications, chemistries, environments, products, ranges, slugify, substrates } from "@/lib/catalog";
import { solutions } from "@/lib/solutions";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const staticRoutes = ["", "/products", "/solutions", "/chemistries", "/applications", "/substrates", "/environments", "/brands", "/product-finder", "/technical-data-sheets", "/about", "/privacy", "/contact"];
  return [
    ...staticRoutes.map((route) => ({ url: `${base}${route}`, changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.7 })),
    ...products.map((product) => ({ url: `${base}/products/${product.slug}`, changeFrequency: "monthly" as const, priority: 0.9 })),
    ...solutions.map((solution) => ({ url: `${base}/solutions/${solution.slug}`, changeFrequency: "monthly" as const, priority: 0.85 })),
    ...chemistries.map((label) => ({ url: `${base}/chemistries/${slugify(label)}`, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...environments.map((label) => ({ url: `${base}/environments/${slugify(label)}`, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...ranges.map((label) => ({ url: `${base}/brands/${slugify(label)}`, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...applications.map((label) => ({ url: `${base}/applications/${slugify(label)}`, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...substrates.map((label) => ({ url: `${base}/substrates/${slugify(label)}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
