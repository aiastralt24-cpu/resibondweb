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
  return label ? { title: `Sealants & Adhesives for ${label}`, description: `Explore Resibond product routes currently associated with ${label.toLowerCase()}.`, alternates: { canonical: `/substrates/${slugify(label)}` } } : {};
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const label = labelBySlug.get((await params).slug); if (!label) notFound();
  const matches = products.filter((product) => product.substrates.includes(label));
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const chemistryRoutes = [...new Set(matches.map((product) => product.chemistry))];
  const environments = [...new Set(matches.flatMap((product) => product.environment))];
  const relatedApplications = [...new Set(matches.flatMap((product) => product.applications))];
  const faq = [
    { q: `Which Resibond products are associated with ${label.toLowerCase()}?`, a: `The current substrate map associates ${matches.map((product) => product.name).join(", ")} with ${label.toLowerCase()}. This is an orientation aid, not a substitute for compatibility testing or the official TDS.` },
    { q: `Does every ${label.toLowerCase()} surface need the same preparation?`, a: "No. Coatings, contamination, porosity and surface condition can change preparation and primer requirements. Follow the official technical guidance for the selected product." },
    { q: "Should a compatibility test be carried out?", a: "A small adhesion and compatibility test is appropriate when the substrate, coating or service condition is unfamiliar or finish-sensitive." },
  ];
  return <>
    <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Substrates", path: "/substrates" }, { name: label, path: `/substrates/${slugify(label)}` }]} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "ItemList", name: `Resibond products associated with ${label}`, itemListElement: matches.map((product, index) => ({ "@type": "ListItem", position: index + 1, url: `${base}/products/${product.slug}`, name: product.name })) }} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) }} />
    <Breadcrumbs backHref="/substrates" backLabel="Substrates" items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "By substrate", href: "/substrates" }, { label }]} />
    <header className="page-hero"><span className="section-index">Substrate guide</span><h1>Product routes associated with {label.toLowerCase()}.</h1><p>Use this directory for initial selection. Substrate condition, coatings, movement and exposure can change the final specification.</p></header>
    <section className="section-shell"><div className="product-grid">{matches.map((product) => <ProductCard key={product.slug} product={product} />)}</div></section>
    <section className="product-section tinted"><div className="section-heading"><span className="section-index">Selection map</span><h2>Routes currently connected to {label.toLowerCase()}.</h2></div><div className="data-columns"><div><h3>Chemistries</h3>{chemistryRoutes.map((item) => <Link key={item} href={`/chemistries/${slugify(item)}`}>{item} →</Link>)}</div><div><h3>Environments</h3>{environments.map((item) => <span key={item}>{item}</span>)}</div><div><h3>Applications</h3>{relatedApplications.slice(0, 8).map((item) => <Link key={item} href={`/applications/${slugify(item)}`}>{item} →</Link>)}</div></div></section>
    <section className="product-section split"><div><span className="section-index">Surface readiness</span><h2>Compatibility starts before the bead.</h2></div><ol className="decision-list"><li><strong>Identify the exact surface.</strong><span>Include coatings, finishes and adjacent materials, not only the base substrate.</span></li><li><strong>Prepare the interface.</strong><span>Remove contaminants and weak material according to verified product guidance.</span></li><li><strong>Test and document.</strong><span>Confirm adhesion, compatibility and finish before committing to the full application.</span></li></ol></section>
    <section className="product-section"><div className="section-heading"><span className="section-index">Frequently asked questions</span><h2>Working with {label.toLowerCase()}.</h2></div><div className="faq-list">{faq.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></section>
  </>;
}
