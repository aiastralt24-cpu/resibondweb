import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld";
import { JsonLd } from "@/components/json-ld";
import { ProductCard } from "@/components/product-card";
import { products, ranges, slugify } from "@/lib/catalog";

const rangeBySlug = new Map(ranges.map((range) => [slugify(range), range]));
export function generateStaticParams() { return ranges.map((range) => ({ slug: slugify(range) })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const range = rangeBySlug.get((await params).slug);
  return range ? { title: `${range} Product Range`, description: `Explore products in the ${range} range by application, chemistry and environment.`, alternates: { canonical: `/brands/${slugify(range)}` } } : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const range = rangeBySlug.get((await params).slug); if (!range) notFound();
  const matches = products.filter((product) => product.range === range);
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return <>
    <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Ranges", path: "/brands" }, { name: range, path: `/brands/${slugify(range)}` }]} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: `${range} product range`, url: `${base}/brands/${slugify(range)}`, mainEntity: { "@type": "ItemList", itemListElement: matches.map((product, index) => ({ "@type": "ListItem", position: index + 1, name: product.name, url: `${base}/products/${product.slug}` })) } }} />
    <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/brands">Ranges</Link><span>/</span><span>{range}</span></div>
    <header className="page-hero compact-page-hero"><span className="section-index">{matches.length} current products</span><h1>{range} product range.</h1><p>{range === "Resibond" ? "Core products for sealing, glazing, weatherproofing, gap filling and bonding." : "Application-specific professional products. Confirm final specifications using the latest approved technical documentation."}</p></header>
    <section className="section-shell"><div className="product-grid">{matches.map((product) => <ProductCard key={product.slug} product={product} />)}</div></section>
  </>;
}
