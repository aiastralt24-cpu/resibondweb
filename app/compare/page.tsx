import type { Metadata } from "next";
import Link from "next/link";
import { productBySlug } from "@/lib/catalog";
import { ProductPack } from "@/components/product-pack";

export const metadata: Metadata = { title: "Compare Products", description: "Compare Resibond products by chemistry, applications, substrates and environment.", robots: { index: false, follow: true } };

export default async function ComparePage({ searchParams }: { searchParams: Promise<{ products?: string }> }) {
  const selected = (await searchParams).products?.split(",").map(productBySlug).filter(Boolean).slice(0, 3) ?? [];
  if (selected.length < 2) return <><header className="page-hero"><span className="section-index">Product comparison</span><h1>Compare the routes that fit your job.</h1><p>Select two or three products from the catalogue to compare their current application data.</p></header><section className="section-shell empty-state"><Link className="button primary" href="/products">Choose products →</Link></section></>;
  const rows = [
    { label: "Chemistry", values: selected.map((p) => p?.chemistry) },
    { label: "Environment", values: selected.map((p) => p?.environment.join(", ")) },
    { label: "Applications", values: selected.map((p) => p?.applications.join(", ")) },
    { label: "Substrates", values: selected.map((p) => p?.substrates.join(", ")) },
    { label: "Colours", values: selected.map((p) => p?.colours.join(", ")) },
    { label: "Pack sizes", values: selected.map((p) => p?.packSizes.join(", ")) },
  ];
  return <><header className="page-hero"><span className="section-index">Product comparison</span><h1>Compare product routes side by side.</h1><p>Use this table for orientation, then verify final selection against the official technical data sheet.</p></header><section className="section-shell"><div className={`comparison-table comparison-${selected.length}`}><div className="comparison-label">Product</div>{selected.map((p) => p && <div className="comparison-product" key={p.slug}><ProductPack name={p.name} image={p.image} width={150} height={320} /><h2>{p.name}</h2><p>{p.positioning}</p><Link href={`/products/${p.slug}`}>View details →</Link></div>)}{rows.flatMap((row) => [<div className="comparison-label" key={`${row.label}-label`}>{row.label}</div>, ...row.values.map((value, index) => <div key={`${row.label}-${index}`}>{value}</div>)])}</div><div className="comparison-mobile">{selected.map((p, productIndex) => p && <article key={p.slug}><ProductPack name={p.name} image={p.image} width={150} height={320}/><h2>{p.name}</h2><p>{p.positioning}</p><dl>{rows.map((row)=><div key={row.label}><dt>{row.label}</dt><dd>{row.values[productIndex]}</dd></div>)}</dl><Link href={`/products/${p.slug}`}>View product details →</Link></article>)}</div></section></>;
}
