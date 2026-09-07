import type { Metadata } from "next";
import { InternalPageHero } from "@/components/internal-page-hero";
import { products } from "@/lib/catalog";
import { CatalogueExplorer } from "./catalogue-explorer";

export const metadata: Metadata = { title: "Sealants & Adhesives", description: "Browse Resibond sealants and adhesives across acrylic, acetoxy, neutral, hybrid and SBS chemistries.", alternates: { canonical: "/products" } };

export default function ProductsPage() {
  return <><InternalPageHero eyebrow={`Product catalogue · ${products.length} products`} title="Find a Resibond product." description="Search by job, surface or chemistry. Filter and compare without leaving the catalogue." className="catalogue-hero" /><section className="section-shell catalogue-shell"><CatalogueExplorer products={products} /></section></>;
}
