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
  return label ? { title: `${label} Sealants & Adhesives`, description: `Explore Resibond product routes associated with ${label.toLowerCase()}.`, alternates: { canonical: `/applications/${slugify(label)}` } } : {};
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const label = labelBySlug.get((await params).slug); if (!label) notFound();
  const matches = products.filter((product) => product.applications.includes(label));
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const chemistryRoutes = [...new Set(matches.map((product) => product.chemistry))];
  const environments = [...new Set(matches.flatMap((product) => product.environment))];
  const relatedSubstrates = [...new Set(matches.flatMap((product) => product.substrates))];
  const faq = [
    { q: `Which Resibond product should I consider for ${label.toLowerCase()}?`, a: `The current application map associates ${matches.map((product) => product.name).join(", ")} with ${label.toLowerCase()}. Final selection depends on substrate, exposure, joint movement and the official product TDS.` },
    { q: `Which chemistries are mapped to ${label.toLowerCase()}?`, a: `The current catalogue includes ${chemistryRoutes.join(", ")} routes for this application. Chemistry alone does not confirm compatibility.` },
    { q: `What should be checked before application?`, a: "Confirm the substrate is sound, clean and dry; identify movement and exposure conditions; and review the official technical data sheet before specification or use." },
  ];
  return <>
    <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Applications", path: "/applications" }, { name: label, path: `/applications/${slugify(label)}` }]} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "ItemList", name: `Resibond products for ${label}`, itemListElement: matches.map((product, index) => ({ "@type": "ListItem", position: index + 1, url: `${base}/products/${product.slug}`, name: product.name })) }} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) }} />
    <Breadcrumbs backHref="/applications" backLabel="Applications" items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "By application", href: "/applications" }, { label }]} />
    <header className="page-hero"><span className="section-index">Application guide</span><h1>Resibond products for {label.toLowerCase()}.</h1><p>{matches.length} current product route{matches.length === 1 ? " is" : "s are"} associated with this application. Confirm final suitability from the official product TDS.</p></header>
    <section className="section-shell"><div className="product-grid">{matches.map((product) => <ProductCard key={product.slug} product={product} />)}</div></section>
    <section className="product-section tinted"><div className="section-heading"><span className="section-index">Selection map</span><h2>What shapes the product decision.</h2></div><div className="data-columns"><div><h3>Chemistry routes</h3>{chemistryRoutes.map((item) => <Link key={item} href={`/chemistries/${slugify(item)}`}>{item} →</Link>)}</div><div><h3>Mapped environments</h3>{environments.map((item) => <span key={item}>{item}</span>)}</div><div><h3>Associated substrates</h3>{relatedSubstrates.slice(0, 8).map((item) => <Link key={item} href={`/substrates/${slugify(item)}`}>{item} →</Link>)}</div></div></section>
    <section className="product-section split"><div><span className="section-index">Before specification</span><h2>Three checks before choosing.</h2></div><ol className="decision-list"><li><strong>Confirm the surface.</strong><span>Identify every substrate, coating and interface in the joint.</span></li><li><strong>Assess the exposure.</strong><span>Account for water, weather, movement, temperature and finish requirements.</span></li><li><strong>Verify the document.</strong><span>Use the official product TDS for compatibility, limitations and application conditions.</span></li></ol></section>
    <section className="product-section"><div className="section-heading"><span className="section-index">Frequently asked questions</span><h2>Choosing for {label.toLowerCase()}.</h2></div><div className="faq-list">{faq.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></section>
  </>;
}
