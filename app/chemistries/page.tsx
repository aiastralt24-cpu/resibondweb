import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { chemistries, products, slugify } from "@/lib/catalog";

export const metadata: Metadata = { title: "Sealant Chemistries", description: "Understand acrylic, acetoxy, neutral, hybrid and SBS products from Resibond.", alternates: { canonical: "/chemistries" } };

const chemistrySummaries: Record<string, string> = {
  Acrylic: "Products for interior gaps, sanitary finishing, frames, HVAC and fire-stop applications.",
  Acetoxy: "Products for general-purpose and sanitary sealing applications.",
  Neutral: "Products for glazing, façades, weatherproofing and finish-sensitive joints.",
  Hybrid: "Products for sealing, mounting and bonding across mixed materials.",
  SBS: "Construction adhesives for fixing and mounting applications.",
};

export default function ChemistriesPage(){return <><Breadcrumbs backHref="/products" backLabel="Products" items={[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"By chemistry"}]}/><header className="page-hero"><span className="section-index">Chemistry guide</span><h1>Choose the chemistry that fits the joint.</h1><p>Compare the Resibond range by chemistry and intended application.</p></header><section className="section-shell"><div className="directory-grid">{chemistries.map((chemistry)=>{const matches=products.filter((product)=>product.chemistry===chemistry);return <article key={chemistry}><span className="section-index">{matches.length} products</span><h2><Link href={`/chemistries/${slugify(chemistry)}`}>{chemistry}</Link></h2><p>{chemistrySummaries[chemistry]}</p><div>{matches.map((product)=><Link key={product.slug} href={`/products/${product.slug}`}>{product.name} →</Link>)}</div></article>})}</div></section></>}
