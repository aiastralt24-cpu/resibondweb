import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { ProductCard } from "@/components/product-card";
import { products, slugify, substrates } from "@/lib/catalog";

const labelBySlug = new Map(substrates.map((label) => [slugify(label), label]));
export function generateStaticParams() { return substrates.map((label) => ({ slug: slugify(label) })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const label = labelBySlug.get((await params).slug);
  return label ? { title: `Sealants & Adhesives for ${label}`, description: `Find Resibond products recommended for ${label.toLowerCase()}.`, alternates: { canonical: `/substrates/${slugify(label)}` } } : {};
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const label = labelBySlug.get((await params).slug); if (!label) notFound();
  const matches = products.filter((product) => product.substrates.includes(label));
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const chemistryRoutes = [...new Set(matches.map((product) => product.chemistry))];
  const environments = [...new Set(matches.flatMap((product) => product.environment))];
  const relatedApplications = [...new Set(matches.flatMap((product) => product.applications))];
  return <>
    <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Substrates", path: "/substrates" }, { name: label, path: `/substrates/${slugify(label)}` }]} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "ItemList", name: `Resibond products associated with ${label}`, itemListElement: matches.map((product, index) => ({ "@type": "ListItem", position: index + 1, url: `${base}/products/${product.slug}`, name: product.name })) }} />
    <Breadcrumbs backHref="/substrates" backLabel="Substrates" items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "By substrate", href: "/substrates" }, { label }]} />
    <header className="page-hero"><span className="section-index">Surface guide</span><h1>Products for {label.toLowerCase()}.</h1><p>Compare {matches.length} Resibond product{matches.length === 1 ? "" : "s"} recommended for this surface. Coatings, finishes and site conditions can affect compatibility.</p></header>
    <section className="section-shell"><div className="product-grid">{matches.map((product) => <ProductCard key={product.slug} product={product} reason={`${product.chemistry} product used with ${label.toLowerCase()} for ${product.applications.slice(0,2).join(" and ").toLowerCase()}.`} />)}</div></section>
    <section className="product-section tinted"><div className="section-heading"><span className="section-index">Surface requirements</span><h2>What to confirm for {label.toLowerCase()}.</h2></div><div className="data-columns"><div><h3>Chemistries</h3>{chemistryRoutes.map((item) => <Link key={item} href={`/chemistries/${slugify(item)}`}>{item} →</Link>)}</div><div><h3>Environments</h3>{environments.map((item) => <span key={item}>{item}</span>)}</div><div><h3>Applications</h3>{relatedApplications.slice(0, 8).map((item) => <Link key={item} href={`/applications/${slugify(item)}`}>{item} →</Link>)}</div></div><p className="technical-source-note">Confirm the exact surface, coating and preparation requirements in the selected product’s technical data. Test adhesion where the finish or service condition is unfamiliar.</p></section>
    <section className="application-help"><div><h2>Unsure about surface compatibility?</h2><p>Share the surface finish and application conditions with the Resibond team.</p></div><Link className="button gold" href={`/contact?source=substrate-${slugify(label)}`}>Discuss this surface →</Link></section>
  </>;
}
