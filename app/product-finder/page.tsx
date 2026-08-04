import type { Metadata } from "next";
import { products } from "@/lib/catalog";
import { UnifiedFinder } from "./unified-finder";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Sealant Product Finder",
  description: "Find a Resibond product by surfaces, application, environment and chemistry.",
  alternates: { canonical: "/product-finder" },
};

export default function Page() {
  return <>
    <Breadcrumbs backHref="/products" backLabel="Products" items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "Guided finder" }]} />
    <header className="page-hero compact-page-hero finder-page-hero"><span className="section-index">Product finder</span><h1>Find the right product.</h1><p>Match two surfaces for a ranked recommendation, or browse by application, exposure and chemistry.</p></header>
    <section className="section-shell catalogue-shell"><UnifiedFinder products={products} /></section>
  </>;
}
