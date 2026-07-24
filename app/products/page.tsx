import type { Metadata } from "next";
import { products } from "@/lib/catalog";
import { CatalogueExplorer } from "./catalogue-explorer";

export const metadata: Metadata = { title: "Sealants & Adhesives", description: "Browse Resibond sealants and adhesives across acrylic, acetoxy, neutral, hybrid and SBS chemistries.", alternates: { canonical: "/products" } };

export default function ProductsPage() {
  return <><header className="page-hero compact-page-hero catalogue-hero"><span className="section-index">Product catalogue · {products.length} products</span><h1>Find a Resibond product.</h1><p>Search by job, surface or chemistry. Filter and compare without leaving the catalogue.</p></header><section className="section-shell catalogue-shell"><div className="catalog-toolbar"><span>Current Resibond range</span><nav aria-label="Related product discovery"><a href="/brands">By range</a><a href="/chemistries">By chemistry</a><a href="/environments">By environment</a><a href="/applications">By application</a><a href="/product-finder">Guided finder</a></nav></div><CatalogueExplorer products={products} /></section></>;
}
