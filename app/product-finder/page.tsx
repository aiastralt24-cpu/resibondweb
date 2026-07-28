import type { Metadata } from "next";
import { products } from "@/lib/catalog";
import { Finder } from "./finder";
import { SurfaceSelector } from "./surface-selector";

export const metadata: Metadata = {
  title: "Sealant Product Finder",
  description: "Find a Resibond product by surfaces, application, environment and chemistry.",
  alternates: { canonical: "/product-finder" },
};

export default function Page() {
  return <>
    <header className="page-hero compact-page-hero"><span className="section-index">Guided discovery</span><h1>Find the right product for the job.</h1><p>Match two surfaces for a ranked recommendation, or browse by application, exposure and chemistry.</p></header>
    <section className="section-shell catalogue-shell"><SurfaceSelector /><Finder products={products} /></section>
  </>;
}
