import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ProductCard } from "@/components/product-card";
import { chemistries, products, slugify } from "@/lib/catalog";

const chemistryBySlug = new Map(chemistries.map((chemistry) => [slugify(chemistry), chemistry]));
export function generateStaticParams() { return chemistries.map((chemistry) => ({ slug: slugify(chemistry) })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const chemistry = chemistryBySlug.get((await params).slug);
  return chemistry ? { title: `${chemistry} Sealants & Adhesives`, description: `Explore the current Resibond ${chemistry.toLowerCase()} product range and associated applications.`, alternates: { canonical: `/chemistries/${slugify(chemistry)}` } } : {};
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const chemistry = chemistryBySlug.get((await params).slug); if (!chemistry) notFound();
  const matches = products.filter((product) => product.chemistry === chemistry);
  return <>
    <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Chemistries", path: "/chemistries" }, { name: chemistry, path: `/chemistries/${slugify(chemistry)}` }]} />
    <Breadcrumbs backHref="/chemistries" backLabel="Chemistries" items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "By chemistry", href: "/chemistries" }, { label: chemistry }]} />
    <header className="page-hero"><span className="section-index">Chemistry guide</span><h1>{chemistry} product routes from Resibond.</h1><p>Compare the current products within this chemistry and follow through to application and substrate guidance.</p></header>
    <section className="section-shell"><div className="product-grid">{matches.map((product) => <ProductCard key={product.slug} product={product} />)}</div></section>
  </>;
}
