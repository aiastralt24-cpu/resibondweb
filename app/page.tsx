import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { JsonLd } from "@/components/json-ld";
import { products } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Professional Sealants & Adhesives",
  description: "Discover Resibond sealants and adhesives by product, chemistry, application or substrate, and find the right route for every critical joint.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const featured = ["bathmate","weather-5010","hybrid-2-in-1","fireshield"].map((slug)=>products.find((product)=>product.slug===slug)).filter((product):product is (typeof products)[number]=>Boolean(product));
  const finderRoutes = [
    { index: "01", title: "Bathrooms", detail: "Sanitary joints, basins, sinks and wet-area finishing", href: "/solutions/bathrooms", count: 3 },
    { index: "02", title: "Doors & windows", detail: "Frame gaps, UPVC junctions, sills and perimeter sealing", href: "/solutions/doors-windows", count: 4 },
    { index: "03", title: "Glazing", detail: "Glass, mirrors, façades and visible architectural joints", href: "/solutions/glazing", count: 4 },
    { index: "04", title: "Weatherproofing", detail: "Exterior joints, ACP, curtain walls and exposed perimeters", href: "/solutions/weatherproofing", count: 4 },
    { index: "05", title: "Mounting & bonding", detail: "Panels, mirrors, stone, wood and mixed-material fixing", href: "/solutions/mounting-bonding", count: 4 },
  ];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Organization", name: "Resibond", url: siteUrl, logo: `${siteUrl}/assets/logos/resibond-logo-blue-transparent.png` }} />
      <section className="hero">
        <div className="hero-copy"><h1>The right sealant for every critical joint.</h1><p>Professional sealing and bonding systems for homes, projects and specialist applications.</p><div className="actions"><Link className="button primary" href="/product-finder">Find your product <span>→</span></Link><Link className="button secondary" href="/products">Explore the range <span>→</span></Link></div></div>
        <div className="hero-products" aria-label="Featured Resibond products">
          {products.slice(0, 5).map((product, index) => <Image key={product.slug} className={`hero-pack hero-pack-${index + 1}`} src={product.image!} alt={`${product.name} pack`} width={240} height={520} priority />)}
        </div>
      </section>
      <section className="finder-band">
        <div className="finder-intro"><span className="section-index">Find by application</span><h2>What are you working on?</h2><p>Choose the job first. We will connect it to the relevant Resibond products, surfaces and technical guidance.</p><Link className="finder-all-link" href="/solutions">Explore all solution guides <span aria-hidden>→</span></Link></div>
        <div className="finder-links">
          {finderRoutes.map((route) => <Link key={route.title} href={route.href}>
            <span className="finder-link-index">{route.index}</span>
            <span className="finder-link-copy"><strong>{route.title}</strong><small>{route.detail}</small></span>
            <span className="finder-link-count">{route.count} products</span>
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h13M14 7l5 5-5 5" /></svg>
          </Link>)}
        </div>
      </section>
      <section className="shade-feature" aria-labelledby="shade-feature-title">
        <div className="shade-feature-copy">
          <span>Neutral 3010</span>
          <h2 id="shade-feature-title">100+ shades for precise finishing.</h2>
          <p>A broader shade system helps architects, applicators, and contractors match joints to surfaces with less compromise.</p>
          <div className="shade-swatches" aria-label="Example Neutral 3010 shades">
            <i style={{ "--swatch": "#eee8db" } as CSSProperties} />
            <i style={{ "--swatch": "#d8c3a1" } as CSSProperties} />
            <i style={{ "--swatch": "#b98b58" } as CSSProperties} />
            <i style={{ "--swatch": "#8d7765" } as CSSProperties} />
            <i style={{ "--swatch": "#6c7880" } as CSSProperties} />
            <i style={{ "--swatch": "#263747" } as CSSProperties} />
          </div>
          <Link className="shade-feature-link" href="/products/neutral-3010">Explore Neutral 3010 <span aria-hidden="true">→</span></Link>
        </div>
        <Link className="shade-feature-product" href="/products/neutral-3010" aria-label="View Neutral 3010 product details">
          <Image src="/assets/products/Neutral 3010_2026.png" alt="Resibond Neutral 3010 sealant cartridge" width={420} height={880} />
          <span>View product <b aria-hidden="true">↗</b></span>
        </Link>
      </section>
      <section className="section-shell"><div className="section-heading"><span className="section-index">Featured range</span><h2>Different products for different jobs.</h2><Link className="text-link" href="/products">View all products →</Link></div><div className="product-grid">{featured.map((product) => <ProductCard key={product.slug} product={product} context="homepage" />)}</div></section>
      <section className="application-feature"><div><span className="section-index">Connected discovery</span><h2>Specify by chemistry, application or substrate.</h2></div><div className="feature-columns"><Link href="/chemistries"><strong>Chemistry</strong><span>Acrylic, acetoxy, neutral, hybrid and SBS routes.</span></Link><Link href="/applications"><strong>Application</strong><span>From bathrooms and glazing to weatherproofing and mounting.</span></Link><Link href="/substrates"><strong>Substrate</strong><span>Find compatible routes for glass, metal, mirror, wood and more.</span></Link></div></section>
      <section className="enquiry-band"><div><span className="section-index">Project enquiry</span><h2>Need help specifying the right product?</h2></div><Link className="button gold" href="/contact?source=homepage">Talk to the Resibond team →</Link></section>
    </>
  );
}
