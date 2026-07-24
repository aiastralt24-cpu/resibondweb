import type { Metadata } from "next";
import { products, slugify, substrateAliases, substrates } from "@/lib/catalog";
import { SubstrateDirectory } from "@/components/substrate-directory";

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

  return <SubstrateDirectory entries={entries} />;
}
