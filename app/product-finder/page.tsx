import type { Metadata } from "next";
import { products } from "@/lib/catalog";
import { UnifiedFinder } from "./unified-finder";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { InternalPageHero } from "@/components/internal-page-hero";

export const metadata: Metadata = {
  title: "Sealant Product Finder",
  description: "Find a Resibond product by surfaces, application, environment and chemistry.",
  alternates: { canonical: "/product-finder" },
};

export default function Page() {
  return <>
    <Breadcrumbs backHref="/products" backLabel="Products" items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "Guided finder" }]} />
    <InternalPageHero eyebrow="Product finder" title="Find the right product." description="Match two surfaces for a ranked recommendation, or browse by application, exposure and chemistry." />
    <section className="section-shell catalogue-shell" id="finder"><UnifiedFinder products={products} /></section>
  </>;
}
