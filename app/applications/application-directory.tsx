"use client";

import Image from "next/image";
import Link from "next/link";
import { useDeferredValue, useMemo, useState } from "react";

const categories = ["All", "Building & Facades", "Bathrooms & Kitchens", "Glazing & Mirrors", "Mounting & Construction", "Automotive & Industrial", "HVAC & Fire"] as const;
type Category = Exclude<(typeof categories)[number], "All">;

export type ApplicationEntry = {
  name: string;
  slug: string;
  category: Category;
  aliases: string[];
  products: Array<{ name: string; slug: string; image?: string }>;
};

const popularSlugs = ["weatherproofing", "sanitary-sealing", "glazing", "mounting"];

function Arrow() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h13M14 7l5 5-5 5" /></svg>;
}

function applicationDescription(entry: ApplicationEntry) {
  if (entry.products.length === 0) return "Explore the application route and technical selection checks.";
  const productNames = entry.products.map((product) => product.name).join(" and ");
  return `${productNames} ${entry.products.length === 1 ? "is" : "are"} currently mapped to this job.`;
}

export function ApplicationDirectory({ entries }: { entries: ApplicationEntry[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());
  const popular = popularSlugs.map((slug) => entries.find((entry) => entry.slug === slug)).filter((entry): entry is ApplicationEntry => Boolean(entry));
  const filtered = useMemo(() => entries.filter((entry) => {
    const matchesCategory = category === "All" || entry.category === category;
    const searchable = `${entry.name} ${entry.aliases.join(" ")} ${entry.category} ${entry.products.map((product) => product.name).join(" ")}`.toLowerCase();
    return matchesCategory && (!deferredQuery || searchable.includes(deferredQuery));
  }), [category, deferredQuery, entries]);

  return <>
    <header className="applications-hero">
      <div>
        <h1>Find the right solution for the job.</h1>
        <p>Search by application, surface or project need.</p>
        <label className="application-search">
          <span className="sr-only">Search applications</span>
          <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" /><path d="m16 16 5 5" /></svg>
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search applications" />
          <span className="search-arrow"><Arrow /></span>
        </label>
      </div>
      <div className="hero-joint" aria-hidden="true"><span /><span /><span /></div>
    </header>

    <nav className="application-categories" aria-label="Application categories">
      {categories.map((item) => <button key={item} className={category === item ? "active" : ""} onClick={() => setCategory(item)}>{item}</button>)}
    </nav>

    {category === "All" && !deferredQuery ? <section className="popular-applications section-shell">
      <div className="compact-heading"><h2>Popular applications</h2><Link href="/product-finder">Not sure? Use Product Finder <Arrow /></Link></div>
      <div className="popular-rail">
        {popular.map((entry, index) => {
          const product = entry.products[0];
          return <Link className={`popular-application popular-${index + 1}`} href={`/applications/${entry.slug}`} key={entry.slug}>
            <div className="popular-visual">{product?.image ? <Image src={product.image} alt="" width={160} height={300} priority={index === 0} /> : <span>{String(index + 1).padStart(2, "0")}</span>}</div>
            <div><span>{entry.category}</span><h3>{entry.name}</h3><p>{applicationDescription(entry)}</p><strong>Explore application <Arrow /></strong></div>
          </Link>;
        })}
      </div>
    </section> : null}

    <section className="application-index section-shell" aria-live="polite">
      <div className="compact-heading"><div><h2>All applications</h2><p>{filtered.length} {filtered.length === 1 ? "result" : "results"}{category !== "All" ? ` in ${category}` : ""}</p></div>{query || category !== "All" ? <button onClick={() => { setQuery(""); setCategory("All"); }}>Clear filters</button> : null}</div>
      {filtered.length ? <div className="application-list">{filtered.map((entry) => <Link href={`/applications/${entry.slug}`} className="application-row" key={entry.slug}>
        <span className="application-row-category">{entry.category}</span>
        <span className="application-row-title">{entry.name}</span>
        <span className="application-row-products">{entry.products.length ? `${entry.products.length} ${entry.products.length === 1 ? "product" : "products"}` : "Selection guide"}</span>
        <Arrow />
      </Link>)}</div> : <div className="application-empty"><h3>No matching applications.</h3><p>Try a broader job, surface or product name.</p><button className="button primary" onClick={() => { setQuery(""); setCategory("All"); }}>View all applications</button></div>}
    </section>

    <section className="application-help"><div><h2>Need help finding the right product?</h2><p>Tell us about the surfaces, exposure and project conditions.</p></div><Link className="button gold" href="/contact?source=applications">Ask Resibond <Arrow /></Link></section>
  </>;
}
