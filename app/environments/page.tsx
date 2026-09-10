import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { environments, products, slugify } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Products by Environment",
  description: "Explore Resibond products for interior, exterior and specialist working environments.",
  alternates: { canonical: "/environments" },
};

export default function Page() {
  return <>
    <Breadcrumbs backHref="/products" backLabel="Products" items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "By environment" }]} />
    <header className="page-hero compact-page-hero"><span className="section-index">Exposure guide</span><h1>Choose where the joint performs.</h1><p>Start with interior, exterior or specialist exposure, then confirm the application, surfaces and latest technical documentation.</p></header>
    <section className="section-shell"><div className="directory-grid">{environments.map((environment) => {
      const matches = products.filter((product) => product.environment.includes(environment));
      return <article key={environment}><span className="section-index">{matches.length} products</span><h2><Link href={`/environments/${slugify(environment)}`}>{environment}</Link></h2><p>{environment === "Interior" ? "Products for indoor finishing, sanitary joints, mounting and frame junctions." : environment === "Exterior" ? "Products for weather-exposed joints, façades, frames and exterior bonding." : "Products for industrial, HVAC, fire-related and high-temperature applications."}</p><div>{matches.map((product) => <Link key={product.slug} href={`/products/${product.slug}`}>{product.name} →</Link>)}</div></article>;
    })}</div></section>
  </>;
}
