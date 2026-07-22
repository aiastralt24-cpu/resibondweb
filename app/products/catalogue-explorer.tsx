"use client";

import Link from "next/link";
import { useDeferredValue, useMemo, useState } from "react";
import { ProductCard } from "@/components/product-card";
import type { Product } from "@/lib/catalog";

const ALL = "All";

export function CatalogueExplorer({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");
  const [chemistry, setChemistry] = useState(ALL);
  const [environment, setEnvironment] = useState(ALL);
  const [compare, setCompare] = useState<string[]>([]);
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());

  const filtered = useMemo(() => products.filter((product) => {
    const searchable = [product.name, product.chemistry, product.range, product.positioning, ...product.applications, ...product.substrates].join(" ").toLowerCase();
    return (!deferredQuery || searchable.includes(deferredQuery)) && (chemistry === ALL || product.chemistry === chemistry) && (environment === ALL || product.environment.includes(environment));
  }), [chemistry, deferredQuery, environment, products]);

  function toggleCompare(slug: string) {
    setCompare((current) => current.includes(slug) ? current.filter((item) => item !== slug) : current.length < 3 ? [...current, slug] : current);
  }

  return <>
    <div className="catalogue-filters">
      <label>Search products, jobs or surfaces<input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try mirror, exterior or neutral" /></label>
      <label>Chemistry<select value={chemistry} onChange={(event) => setChemistry(event.target.value)}>{[ALL, "Acrylic", "Acetoxy", "Neutral", "Hybrid", "SBS"].map((value) => <option key={value}>{value}</option>)}</select></label>
      <label>Environment<select value={environment} onChange={(event) => setEnvironment(event.target.value)}>{[ALL, "Interior", "Exterior", "Specialist"].map((value) => <option key={value}>{value}</option>)}</select></label>
    </div>
    <div className="catalogue-count"><span>{filtered.length} product{filtered.length === 1 ? "" : "s"}</span><button type="button" onClick={() => { setQuery(""); setChemistry(ALL); setEnvironment(ALL); }}>Clear filters</button></div>
    {filtered.length ? <div className="catalogue-cards">{filtered.map((product) => <div className="catalogue-card-wrap" key={product.slug}><ProductCard product={product} /><label className="compare-control"><input type="checkbox" checked={compare.includes(product.slug)} disabled={!compare.includes(product.slug) && compare.length >= 3} onChange={() => toggleCompare(product.slug)} />Compare product</label></div>)}</div> : <div className="empty-state"><h2>No exact match.</h2><p>Clear a filter or use the guided product finder for broader recommendations.</p><Link className="button primary" href="/product-finder">Open product finder →</Link></div>}
    {compare.length > 0 && <div className="compare-bar"><span>{compare.length} selected · choose up to 3</span><Link className={compare.length < 2 ? "disabled" : ""} aria-disabled={compare.length < 2} href={compare.length >= 2 ? `/compare?products=${compare.join(",")}` : "#"}>Compare now →</Link></div>}
  </>;
}
