import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld";
import { JsonLd } from "@/components/json-ld";
import { solutions } from "@/lib/solutions";

export const metadata: Metadata = {
  title: "Sealant & Adhesive Solutions",
  description: "Explore Resibond solutions for bathrooms, doors and windows, glazing, weatherproofing, mounting and bonding.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return <>
    <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Solutions", path: "/solutions" }]} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Resibond sealant and adhesive solutions", mainEntity: { "@type": "ItemList", itemListElement: solutions.map((solution, index) => ({ "@type": "ListItem", position: index + 1, name: solution.name, url: `${base}/solutions/${solution.slug}` })) } }} />
    <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>Solutions</span></div>
    <header className="solution-index-hero"><div><h1>Find Resibond by the job.</h1><p>Start with the application, then compare suitable products, surfaces and technical guidance.</p></div><span aria-hidden>05 solution guides</span></header>
    <section className="solution-index-list">{solutions.map((solution, index) => <Link key={solution.slug} href={`/solutions/${solution.slug}`}>
      <span>{String(index + 1).padStart(2, "0")}</span><h2>{solution.shortName}</h2><p>{solution.description}</p><strong>{solution.productSlugs.length} mapped products</strong><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h13M14 7l5 5-5 5" /></svg>
    </Link>)}</section>
  </>;
}
