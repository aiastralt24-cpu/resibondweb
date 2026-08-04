import type { Metadata } from "next";
import { applicationAliases, applications, products, slugify } from "@/lib/catalog";
import { ApplicationDirectory, type ApplicationEntry } from "./application-directory";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Sealant Applications",
  description: "Find Resibond products for bathrooms, glazing, weatherproofing, mounting and specialist applications.",
  alternates: { canonical: "/applications" },
};

const categoryRules: Array<[ApplicationEntry["category"], RegExp]> = [
  ["Bathrooms & Kitchens", /bath|sanitary|shower|toilet|washbasin|sink|kitchen|gypsum|electrical board/i],
  ["Glazing & Mirrors", /glass|glazing|mirror|window|curtain wall|tinted/i],
  ["Automotive & Industrial", /automotive|vehicle|engine|gasket|bus|industrial|metal fabrication/i],
  ["HVAC & Fire", /hvac|duct|fire/i],
  ["Building & Facades", /acp|facade|weather|building|roof|plinth|exterior/i],
  ["Mounting & Construction", /bond|mount|fix|joinery|grass|crack|gap|sealing/i],
];

function categoryFor(name: string): ApplicationEntry["category"] {
  return categoryRules.find(([, pattern]) => pattern.test(name))?.[0] ?? "Mounting & Construction";
}

export default function Page() {
  const entries: ApplicationEntry[] = applications.map((name) => {
    const matches = products.filter((product) => product.applications.includes(name));
    return {
      name,
      slug: slugify(name),
      aliases: applicationAliases[name] || [],
      category: categoryFor(name),
      products: matches.map(({ name: productName, slug, image }) => ({ name: productName, slug, image })),
    };
  });

  return <><Breadcrumbs backHref="/products" backLabel="Products" items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "By application" }]} /><ApplicationDirectory entries={entries} /></>;
}
