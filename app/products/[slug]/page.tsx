import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld";
import { ProductCard } from "@/components/product-card";
import { ProductPack } from "@/components/product-pack";
import { TdsGate } from "@/components/tds-gate";
import { NeutralColourStudio } from "@/components/neutral-colour-studio";
import { productBySlug, products } from "@/lib/catalog";

const applicationHeadings: Record<string, string> = {
  "neutral-3010": "Match the joint. Finish before skin formation.",
  "weather-5010": "Prepare the exposed joint. Seal without air pockets.",
  "hybrid-2-in-1": "Prepare both surfaces. Bond within the open time.",
  "zero-nail": "Plan the fixing. Press, adjust and support.",
  "gp-100": "Clean the gap. Tool a continuous seal.",
  "premium-gp-1010": "Prepare the joint. Apply an even finish.",
  bathmate: "Start with a dry joint. Finish for wet-area use.",
  "doors-windows": "Clear the gap. Fill, tool and protect.",
  thermoseal: "Strip the old gasket. Form a continuous bead.",
  "saves-nails": "Prepare the fixing surfaces. Apply, press and support.",
  fireshield: "Verify the fire-rated system before installation.",
  "duct-seal": "Clean the duct joint. Seal continuously.",
  "mirror-mount": "Check the mirror backing. Mount with ventilated beads.",
  buildglaze: "Clean the glazing joint. Tool to the specified profile.",
  "bus-seal": "Test the coating. Seal the panel joint.",
  "turf-grass": "Prepare the base. Align and hold the turf.",
  "sanitary-super-white": "Dry the fixture joint. Tool a water-shedding seal.",
};

export function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const product = productBySlug((await params).slug); if (!product) return {};
  return { title: product.name, description: product.description, alternates: { canonical: `/products/${product.slug}` }, openGraph: { title: `${product.name} | Resibond`, description: product.description, ...(product.image ? { images: [{ url: product.image }] } : {}) } };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const product = productBySlug((await params).slug); if (!product) notFound();
  const related = product.related.map(productBySlug).filter(Boolean).slice(0, 3);
  const faq = [
    { q: `What is ${product.name} used for?`, a: `${product.name} is positioned for ${product.applications.join(", ").toLowerCase()}. The best fit depends on the surfaces and exposure involved in the job.` },
    { q: `Which surfaces are associated with ${product.name}?`, a: `The current application map includes ${product.substrates.join(", ")}. Carry out a compatibility test where the substrate or coating is unfamiliar.` },
    { q: `Can ${product.name} be used outdoors?`, a: product.environment.includes("Exterior") ? `${product.name} is mapped to exterior applications. Check the actual joint, substrate and exposure conditions before use.` : `${product.name} is currently positioned for ${product.environment.join(" and ").toLowerCase()} applications rather than general exterior use.` }
  ];
  return <>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Product", name: product.name, url:`${process.env.NEXT_PUBLIC_SITE_URL||"http://localhost:3000"}/products/${product.slug}`, brand: { "@type": "Brand", name: product.range }, ...(product.image ? { image: `${process.env.NEXT_PUBLIC_SITE_URL||"http://localhost:3000"}${product.image}` } : {}), description: product.description, category: `${product.chemistry} sealant or adhesive`,additionalProperty:[{ "@type":"PropertyValue",name:"Chemistry",value:product.chemistry},{"@type":"PropertyValue",name:"Environment",value:product.environment.join(", ")}] }} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }} />
    <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, { name: product.name, path: `/products/${product.slug}` }]} />
    <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/products">Products</Link><span>/</span><span>{product.name}</span></div>
    <section className="product-hero"><div className="product-hero-image"><ProductPack name={product.name} image={product.image} width={420} height={820} priority /></div><div className="product-hero-copy"><div className="product-meta"><span>{product.range}</span><span>{product.chemistry}</span><span>{product.environment.join(" · ")}</span></div><h1>{product.name}</h1><p className="product-positioning">{product.positioning}</p><p>{product.description}</p><div className="actions"><Link className="button primary" href={`/contact?product=${product.slug}`}>Enquire about this product →</Link>{product.tdsUrl?<TdsGate product={product.slug} name={product.name} className="button secondary"/>:<a className="button secondary" href="#technical">View product details ↓</a>}</div></div></section>
    <nav className="sticky-product-nav" aria-label="Product page sections"><a href="#overview">Overview</a>{product.slug === "neutral-3010" && <a href="#colours">Colours</a>}<a href="#applications">Applications</a><a href="#how-to-use">How to use</a><a href="#technical">Technical</a><a href="#faq">FAQs</a></nav>
    <section id="overview" className="product-section split"><div><span className="section-index">Why this product</span><h2>{product.positioning}</h2></div><ul className="feature-list">{product.benefits.map((item) => <li key={item}>{item}</li>)}</ul></section>
    {product.slug === "neutral-3010" && <NeutralColourStudio />}
    <section id="applications" className="product-section tinted"><div className="section-heading"><span className="section-index">Applications and substrates</span><h2>Where {product.name} fits.</h2></div><div className="data-columns"><div><h3>Recommended applications</h3>{product.applications.map((item) => <span key={item}>{item}</span>)}</div><div><h3>Associated substrates</h3>{product.substrates.map((item) => <span key={item}>{item}</span>)}</div><div><h3>Environment</h3>{product.environment.map((item) => <span key={item}>{item}</span>)}</div></div></section>
    <section id="how-to-use" className="product-section"><div className="section-heading"><span className="section-index">Application guidance</span><h2>{applicationHeadings[product.slug] ?? `How to use ${product.name} correctly.`}</h2></div><div className="instruction-grid"><div><h3>Surface preparation</h3><ol>{product.preparation.map((item) => <li key={item}>{item}</li>)}</ol></div><div><h3>Application</h3><ol>{product.applicationSteps.map((item) => <li key={item}>{item}</li>)}</ol></div><div><h3>Important limitations</h3><ul>{product.limitations.map((item) => <li key={item}>{item}</li>)}</ul></div></div></section>
    <section id="technical" className="product-section technical-panel"><div><span className="section-index">Technical information</span><h2>{product.name} specification.</h2><p>Confirm final compatibility, application conditions and limitations using the latest official TDS.</p>{product.tdsUrl?<TdsGate product={product.slug} name={product.name}/>:product.sourceUrl&&<a className="button gold" href={product.sourceUrl} target="_blank" rel="noreferrer">View official product source ↗</a>}</div><dl><div><dt>Chemistry</dt><dd>{product.chemistry}</dd></div><div><dt>Pack sizes</dt><dd>{product.packSizes.join(", ")}</dd></div><div><dt>Colours</dt><dd>{product.colours.join(", ")}</dd></div>{product.shelfLife && <div><dt>Shelf life</dt><dd>{product.shelfLife}</dd></div>}{product.storage && <div><dt>Storage</dt><dd>{product.storage}</dd></div>}<div><dt>Technical data sheet</dt><dd>{product.tdsUrl ? "Available through the verified download form" : "Pending official document"}</dd></div></dl></section>
    <section id="faq" className="product-section"><div className="section-heading"><span className="section-index">Frequently asked questions</span><h2>Answers about {product.name}.</h2></div><div className="faq-list">{faq.map(({ q, a }) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
    {related.length > 0 && <section className="section-shell related-products"><div className="section-heading"><span className="section-index">Related products</span><h2>Compare the closest alternatives.</h2></div><div className="product-grid">{related.map((item) => item && <ProductCard key={item.slug} product={item} context="related" />)}</div></section>}
    <div className="mobile-product-actions" aria-label={`${product.name} quick actions`}><Link href={`/contact?product=${product.slug}`}>Enquire</Link>{product.tdsUrl?<TdsGate product={product.slug} name={product.name} className="mobile-tds-action"/>:<a href="#technical">Technical details</a>}</div>
  </>;
}
