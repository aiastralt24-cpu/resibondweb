import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld";
import { JsonLd } from "@/components/json-ld";
import { products } from "@/lib/catalog";
import { solutions } from "@/lib/solutions";
import { InternalPageHero } from "@/components/internal-page-hero";

export const metadata: Metadata = {
  title: "Sealant & Adhesive Solutions",
  description: "Explore Resibond solutions for bathrooms, doors and windows, glazing, weatherproofing, mounting and bonding.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const activeProductSlugs = new Set(products.map((product) => product.slug));
  return <>
    <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Solutions", path: "/solutions" }]} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Resibond sealant and adhesive solutions", mainEntity: { "@type": "ItemList", itemListElement: solutions.map((solution, index) => ({ "@type": "ListItem", position: index + 1, name: solution.name, url: `${base}/solutions/${solution.slug}` })) } }} />
    <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>Solutions</span></div>
    <InternalPageHero eyebrow={`${String(solutions.length).padStart(2, "0")} solution guides`} title="Find Resibond by the job." description="Start with the application, then compare suitable products, surfaces and technical guidance." />
    <section className="solution-index-list">{solutions.map((solution, index) => <Link key={solution.slug} href={`/solutions/${solution.slug}`}>
      <span>{String(index + 1).padStart(2, "0")}</span><h2>{solution.shortName}</h2><p>{solution.description}</p><strong>{solution.productSlugs.filter((slug) => activeProductSlugs.has(slug)).length} mapped products</strong><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h13M14 7l5 5-5 5" /></svg>
    </Link>)}</section>
  </>;
}
