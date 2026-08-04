import type { Metadata } from "next";
import { products, slugify, substrateAliases, substrates } from "@/lib/catalog";
import { SubstrateDirectory } from "@/components/substrate-directory";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Sealants by Substrate",
  description: "Find Resibond products associated with glass, aluminium, mirror, metal, wood, UPVC and other substrates.",
  alternates: { canonical: "/substrates" },
};

export default function Page() {
  const entries = substrates.map((name) => ({
    name,
    slug: slugify(name),
    aliases: substrateAliases[name] || [],
    products: products
      .filter((product) => product.substrates.includes(name))
      .map((product) => ({ name: product.name, slug: product.slug })),
  }));

  return <><Breadcrumbs backHref="/products" backLabel="Products" items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "By substrate" }]} /><SubstrateDirectory entries={entries} /></>;
}
