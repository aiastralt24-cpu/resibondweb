import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld";
import { JsonLd } from "@/components/json-ld";
import { ProductCard } from "@/components/product-card";
import { environments, products, slugify } from "@/lib/catalog";

const environmentBySlug = new Map(environments.map((environment) => [slugify(environment), environment]));
export function generateStaticParams() { return environments.map((environment) => ({ slug: slugify(environment) })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const environment = environmentBySlug.get((await params).slug);
  return environment ? { title: `${environment} Sealants & Adhesives`, description: `Compare Resibond products mapped to ${environment.toLowerCase()} applications.`, alternates: { canonical: `/environments/${slugify(environment)}` } } : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const environment = environmentBySlug.get((await params).slug); if (!environment) notFound();
  const matches = products.filter((product) => product.environment.includes(environment));
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return <>
    <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Environments", path: "/environments" }, { name: environment, path: `/environments/${slugify(environment)}` }]} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: `${environment} Resibond products`, url: `${base}/environments/${slugify(environment)}`, mainEntity: { "@type": "ItemList", itemListElement: matches.map((product, index) => ({ "@type": "ListItem", position: index + 1, name: product.name, url: `${base}/products/${product.slug}` })) } }} />
    <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/environments">Environments</Link><span>/</span><span>{environment}</span></div>
    <header className="page-hero compact-page-hero"><span className="section-index">{matches.length} mapped products</span><h1>{environment} product routes.</h1><p>Use exposure as an initial filter. Final selection still depends on the joint, substrates, movement and current technical data.</p></header>
    <section className="section-shell"><div className="product-grid">{matches.map((product) => <ProductCard key={product.slug} product={product} />)}</div></section>
  </>;
}
