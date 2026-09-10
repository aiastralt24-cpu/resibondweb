import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { ProductCard } from "@/components/product-card";
import { products, slugify } from "@/lib/catalog";
import { solutionBySlug, solutions } from "@/lib/solutions";

export function generateStaticParams() { return solutions.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const solution = solutionBySlug((await params).slug);
  if (!solution) return {};
  return {
    title: solution.name,
    description: solution.description,
    alternates: { canonical: `/solutions/${solution.slug}` },
    openGraph: { title: `${solution.name} | Resibond`, description: solution.description },
  };
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const solution = solutionBySlug((await params).slug);
  if (!solution) notFound();
  const mappedProducts = solution.productSlugs.map((slug) => products.find((product) => product.slug === slug)).filter((product): product is NonNullable<typeof product> => Boolean(product));
  const substrates = [...new Set(mappedProducts.flatMap((product) => product.substrates))].slice(0, 10);
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return <>
    <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Solutions", path: "/solutions" }, { name: solution.shortName, path: `/solutions/${solution.slug}` }]} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: solution.name, description: solution.description, url: `${base}/solutions/${solution.slug}`, mainEntity: { "@type": "ItemList", itemListElement: mappedProducts.map((product, index) => ({ "@type": "ListItem", position: index + 1, name: product.name, url: `${base}/products/${product.slug}` })) } }} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: solution.faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }} />
    <Breadcrumbs backHref="/solutions" backLabel="Solutions" items={[{ label: "Home", href: "/" }, { label: "Solutions", href: "/solutions" }, { label: solution.shortName }]} />
    <header className="solution-hero"><div><span className="section-index">{solution.shortName} solutions</span><h1>{solution.title}</h1></div><div><p>{solution.intro}</p><p>{solution.body}</p><a className="button primary" href="#recommended-products">Compare recommended products ↓</a></div></header>
    <section className="solution-considerations"><div className="section-heading"><span className="section-index">Selection essentials</span><h2>What to assess before choosing.</h2></div><div>{solution.considerations.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
    <section id="recommended-products" className="section-shell solution-products"><div className="section-heading"><span className="section-index">Recommended products</span><h2>Compare products for {solution.shortName.toLowerCase()}.</h2><Link className="text-link" href="/products">View complete range →</Link></div><div className="product-grid">{mappedProducts.map((product) => <ProductCard key={product.slug} product={product} context="solution" reason={`${product.chemistry} product for ${product.applications.slice(0, 2).join(" and ").toLowerCase()}.`} />)}</div></section>
    <section className="product-section tinted related-guidance"><div className="section-heading"><span className="section-index">Related guidance</span><h2>Continue with the job or surface.</h2><Link className="text-link" href="/product-finder">Complex requirement? Use Product Finder →</Link></div><div className="related-guidance-grid"><div className="solution-guides"><h3>Applications</h3><div>{solution.applicationLabels.map((label) => <Link key={label} href={`/applications/${slugify(label)}`}><span>{label}</span><span>Application guide →</span></Link>)}</div></div><div><h3>Surfaces</h3><div className="solution-substrates">{substrates.map((substrate) => <Link key={substrate} href={`/substrates/${slugify(substrate)}`}>{substrate}<span>→</span></Link>)}</div></div></div></section>
    <section className="product-section solution-faq"><div className="section-heading"><span className="section-index">Frequently asked questions</span><h2>Questions about {solution.shortName.toLowerCase()}.</h2></div><div className="faq-list">{solution.faqs.map((faq) => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</div></section>
    <section className="application-help"><div><h2>Still deciding?</h2><p>Share the surfaces, environment and project conditions with the Resibond team.</p></div><Link className="button gold" href={`/contact?source=solution-${solution.slug}`}>Discuss your application →</Link></section>
  </>;
}
