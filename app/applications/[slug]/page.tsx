import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { ProductCard } from "@/components/product-card";
import { applications, products, slugify } from "@/lib/catalog";

const labelBySlug = new Map(applications.map((label) => [slugify(label), label]));
export function generateStaticParams() { return applications.map((label) => ({ slug: slugify(label) })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const label = labelBySlug.get((await params).slug);
  return label ? { title: `${label} Sealants & Adhesives`, description: `Find Resibond products recommended for ${label.toLowerCase()}.`, alternates: { canonical: `/applications/${slugify(label)}` } } : {};
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const label = labelBySlug.get((await params).slug); if (!label) notFound();
  const matches = products.filter((product) => product.applications.includes(label));
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const chemistryRoutes = [...new Set(matches.map((product) => product.chemistry))];
  const environments = [...new Set(matches.flatMap((product) => product.environment))];
  const relatedSubstrates = [...new Set(matches.flatMap((product) => product.substrates))];
  return <>
    <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Applications", path: "/applications" }, { name: label, path: `/applications/${slugify(label)}` }]} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "ItemList", name: `Resibond products for ${label}`, itemListElement: matches.map((product, index) => ({ "@type": "ListItem", position: index + 1, url: `${base}/products/${product.slug}`, name: product.name })) }} />
    <Breadcrumbs backHref="/applications" backLabel="Applications" items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "By application", href: "/applications" }, { label }]} />
    <header className="page-hero"><span className="section-index">Application guide</span><h1>Products for {label.toLowerCase()}.</h1><p>Compare {matches.length} Resibond product{matches.length === 1 ? "" : "s"} recommended for this job, then confirm the surfaces and exposure conditions.</p></header>
    <section className="section-shell"><div className="product-grid">{matches.map((product) => <ProductCard key={product.slug} product={product} reason={`${product.chemistry} product for ${label.toLowerCase()} in ${product.environment.join(" and ").toLowerCase()} conditions.`} />)}</div></section>
    <section className="product-section tinted"><div className="section-heading"><span className="section-index">Application requirements</span><h2>What to confirm for {label.toLowerCase()}.</h2></div><div className="data-columns"><div><h3>Chemistries</h3>{chemistryRoutes.map((item) => <Link key={item} href={`/chemistries/${slugify(item)}`}>{item} →</Link>)}</div><div><h3>Environments</h3>{environments.map((item) => <span key={item}>{item}</span>)}</div><div><h3>Surfaces</h3>{relatedSubstrates.slice(0, 8).map((item) => <Link key={item} href={`/substrates/${slugify(item)}`}>{item} →</Link>)}</div></div><p className="technical-source-note">Final suitability depends on the actual surfaces, coatings, movement and exposure. Review the selected product’s technical data before use.</p></section>
    <section className="application-help"><div><h2>Need help confirming the product?</h2><p>Share the surfaces and project conditions with the Resibond team.</p></div><Link className="button gold" href={`/contact?source=application-${slugify(label)}`}>Discuss this application →</Link></section>
  </>;
}
