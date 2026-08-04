import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { chemistries, products, slugify } from "@/lib/catalog";

export const metadata: Metadata = { title: "Sealant Chemistries", description: "Understand acrylic, acetoxy, neutral, hybrid and SBS Resibond product routes.", alternates: { canonical: "/chemistries" } };
export default function ChemistriesPage(){return <><Breadcrumbs backHref="/products" backLabel="Products" items={[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"By chemistry"}]}/><header className="page-hero"><span className="section-index">Chemistry guide</span><h1>Choose the chemistry that fits the joint.</h1><p>Compare the current Resibond range by cure system and application route.</p></header><section className="section-shell"><div className="directory-grid">{chemistries.map((chemistry)=><article key={chemistry}><span className="section-index">{products.filter(p=>p.chemistry===chemistry).length} products</span><h2><Link href={`/chemistries/${slugify(chemistry)}`}>{chemistry}</Link></h2><p>{products.filter(p=>p.chemistry===chemistry).map(p=>p.positioning).join(" ")}</p><div>{products.filter(p=>p.chemistry===chemistry).map(p=><Link key={p.slug} href={`/products/${p.slug}`}>{p.name} →</Link>)}</div></article>)}</div></section></>}
