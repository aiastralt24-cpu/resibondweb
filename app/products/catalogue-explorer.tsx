"use client";

import Link from "next/link";
import { useDeferredValue, useMemo, useState } from "react";
import { ProductCard } from "@/components/product-card";
import { productSearchAliases, type Product } from "@/lib/catalog";

const ALL = "All";

export function CatalogueExplorer({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");
  const [range, setRange] = useState(ALL);
  const [chemistry, setChemistry] = useState(ALL);
  const [environment, setEnvironment] = useState(ALL);
  const [application, setApplication] = useState(ALL);
  const [compare, setCompare] = useState<string[]>([]);
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());

  const options = useMemo(() => ({
    ranges: [ALL, ...new Set(products.map((product) => product.range))],
    chemistries: [ALL, ...new Set(products.map((product) => product.chemistry))],
    environments: [ALL, ...new Set(products.flatMap((product) => product.environment))],
    applications: [ALL, ...new Set(products.flatMap((product) => product.applications))].sort((a, b) => a === ALL ? -1 : b === ALL ? 1 : a.localeCompare(b)),
  }), [products]);

  const filtered = useMemo(() => products.filter((product) => {
    const searchable = [product.name, product.chemistry, product.range, product.positioning, ...product.applications, ...product.substrates, ...(productSearchAliases[product.slug] || [])].join(" ").toLowerCase();
    return (!deferredQuery || searchable.includes(deferredQuery)) &&
      (range === ALL || product.range === range) &&
      (chemistry === ALL || product.chemistry === chemistry) &&
      (environment === ALL || product.environment.includes(environment)) &&
      (application === ALL || product.applications.includes(application));
  }), [application, chemistry, deferredQuery, environment, products, range]);

  const activeFilters = [
    query ? { label: `Search: ${query}`, clear: () => setQuery("") } : null,
    range !== ALL ? { label: range, clear: () => setRange(ALL) } : null,
    chemistry !== ALL ? { label: chemistry, clear: () => setChemistry(ALL) } : null,
    environment !== ALL ? { label: environment, clear: () => setEnvironment(ALL) } : null,
    application !== ALL ? { label: application, clear: () => setApplication(ALL) } : null,
  ].filter((item): item is { label: string; clear: () => void } => Boolean(item));

  function clearFilters() {
    setQuery("");
    setRange(ALL);
    setChemistry(ALL);
    setEnvironment(ALL);
    setApplication(ALL);
  }

  function toggleCompare(slug: string) {
    setCompare((current) => current.includes(slug) ? current.filter((item) => item !== slug) : current.length < 3 ? [...current, slug] : current);
  }

  return <>
    <div className="catalogue-filters" aria-label="Filter product catalogue">
      <label className="catalogue-search">Search products, jobs or surfaces<input type="search" value={query} onInput={(event) => setQuery(event.currentTarget.value)} placeholder="Try mirror, exterior or neutral" /></label>
      <label>Range<select value={range} onChange={(event) => setRange(event.target.value)}>{options.ranges.map((value) => <option key={value}>{value}</option>)}</select></label>
      <label>Chemistry<select value={chemistry} onChange={(event) => setChemistry(event.target.value)}>{options.chemistries.map((value) => <option key={value}>{value}</option>)}</select></label>
      <label>Environment<select value={environment} onChange={(event) => setEnvironment(event.target.value)}>{options.environments.map((value) => <option key={value}>{value}</option>)}</select></label>
      <label>Application<select value={application} onChange={(event) => setApplication(event.target.value)}>{options.applications.map((value) => <option key={value}>{value}</option>)}</select></label>
    </div>
    <div className="catalogue-count" aria-live="polite"><span>{filtered.length} of {products.length} product{products.length === 1 ? "" : "s"}</span>{activeFilters.length ? <button type="button" onClick={clearFilters}>Clear all filters</button> : <span>Showing complete range</span>}</div>
    {activeFilters.length ? <div className="catalogue-active-filters" aria-label="Active product filters">{activeFilters.map((item) => <button type="button" onClick={item.clear} key={item.label}>{item.label}<span aria-hidden>×</span></button>)}</div> : null}
    {filtered.length ? <div className="catalogue-cards">{filtered.map((product,index) => <div className="catalogue-card-wrap" key={product.slug}><ProductCard product={product} priority={index===0} /><label className="compare-control"><input type="checkbox" checked={compare.includes(product.slug)} disabled={!compare.includes(product.slug) && compare.length >= 3} onChange={() => toggleCompare(product.slug)} />Compare product</label></div>)}</div> : <div className="empty-state"><h2>No exact match.</h2><p>Clear a filter or use the guided product finder for broader recommendations.</p><Link className="button primary" href="/product-finder">Open product finder →</Link></div>}
    {compare.length > 0 && <div className="compare-bar"><span>{compare.length} selected · choose up to 3</span><Link className={compare.length < 2 ? "disabled" : ""} aria-disabled={compare.length < 2} href={compare.length >= 2 ? `/compare?products=${compare.join(",")}` : "#"}>Compare now →</Link></div>}
  </>;
}
