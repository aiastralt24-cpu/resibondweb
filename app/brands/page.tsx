import type { Metadata } from "next";
import Link from "next/link";
import { products, ranges, slugify } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Resibond Product Ranges",
  description: "Explore the Resibond and Resibond NXT product ranges.",
  alternates: { canonical: "/brands" },
};

export default function Page() {
  return <>
    <header className="page-hero compact-page-hero"><span className="section-index">Range directory</span><h1>Two ranges. One application-led system.</h1><p>Explore the core Resibond range and the application-specific Resibond NXT portfolio.</p></header>
    <section className="section-shell"><div className="directory-grid">{ranges.map((range) => {
      const matches = products.filter((product) => product.range === range);
      return <article key={range}><span className="section-index">{matches.length} products</span><h2><Link href={`/brands/${slugify(range)}`}>{range}</Link></h2><p>{range === "Resibond" ? "Core sealing, glazing, gap-filling and bonding products." : "Application-specific products for professional installation routes."}</p><div>{matches.map((product) => <Link key={product.slug} href={`/products/${product.slug}`}>{product.name} →</Link>)}</div></article>;
    })}</div></section>
  </>;
}
