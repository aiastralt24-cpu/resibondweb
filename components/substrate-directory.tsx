"use client";

import Link from "next/link";
import { useDeferredValue, useMemo, useState } from "react";

type SubstrateEntry = {
  name: string;
  slug: string;
  aliases: string[];
  products: Array<{ name: string; slug: string }>;
};

const families = [
  {
    index: "01",
    name: "Glazing & metals",
    substrates: ["ACP", "Aluminium", "Glass", "Metal", "Mirror", "Tinted panels", "Windows"],
  },
  {
    index: "02",
    name: "Building materials",
    substrates: ["Building joints", "Common building surfaces", "Concrete", "Construction materials", "Gypsum board", "Interior construction surfaces", "Masonry", "Plaster", "Walls", "Wood"],
  },
  {
    index: "03",
    name: "Interiors & finishes",
    substrates: ["Ceramic", "Louvers", "Plastic", "Porcelain", "PVC", "Sanitary fixtures", "Stone", "UPVC"],
  },
  {
    index: "04",
    name: "Specialist systems",
    substrates: ["Artificial grass", "Electrical assemblies", "Electronic components", "Engine components", "Fire-rated assemblies", "HVAC ductwork", "Industrial assemblies", "Metal flanges"],
  },
];

function SearchIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" /><path d="m16 16 5 5" /></svg>;
}

function Arrow() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h13M14 7l5 5-5 5" /></svg>;
}

export function SubstrateDirectory({ entries }: { entries: SubstrateEntry[] }) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());
  const entryByName = useMemo(() => new Map(entries.map((entry) => [entry.name, entry])), [entries]);

  const grouped = useMemo(() => families.map((family) => ({
    ...family,
    entries: family.substrates
      .map((name) => entryByName.get(name))
      .filter((entry): entry is SubstrateEntry => Boolean(entry))
      .filter((entry) => {
        if (!deferredQuery) return true;
        return `${entry.name} ${entry.aliases.join(" ")} ${entry.products.map((product) => product.name).join(" ")}`.toLowerCase().includes(deferredQuery);
      }),
  })).filter((family) => family.entries.length), [deferredQuery, entryByName]);

  const visibleCount = grouped.reduce((count, family) => count + family.entries.length, 0);

  return <div className="substrate-directory-page">
    <header className="substrate-directory-hero">
      <div>
        <h1>Start with the surface.</h1>
        <p>Choose the material you need to seal or bond. We’ll show the current Resibond product routes associated with it.</p>
      </div>
      <div className="substrate-search-panel">
        <label>
          <span className="sr-only">Search surfaces or materials</span>
          <SearchIcon />
          <input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Search surfaces or materials" />
          {query ? <button type="button" onClick={() => setQuery("")} aria-label="Clear search">Clear</button> : null}
        </label>
        <p aria-live="polite"><strong>{visibleCount}</strong> {visibleCount === 1 ? "surface" : "surfaces"}{query ? " found" : ""}</p>
      </div>
    </header>

    <section className="substrate-family-list" aria-label="Substrates grouped by material family">
      {grouped.map((family) => <section className="substrate-family" key={family.name}>
        <div className="substrate-family-heading">
          <span>{family.index}</span>
          <h2>{family.name}</h2>
        </div>
        <div className="substrate-rows">
          {family.entries.map((entry) => <Link href={`/substrates/${entry.slug}`} key={entry.slug}>
            <span className="substrate-name">{entry.name}</span>
            <span className="substrate-products">{entry.products.length} {entry.products.length === 1 ? "product" : "products"}</span>
            <Arrow />
          </Link>)}
        </div>
      </section>)}
      {!visibleCount ? <div className="substrate-empty">
        <h2>No matching surface.</h2>
        <p>Try a broader material name or search for a Resibond product.</p>
        <button type="button" onClick={() => setQuery("")}>View all surfaces</button>
      </div> : null}
    </section>

    <section className="substrate-help">
      <h2>Not sure how to classify the surface?</h2>
      <Link href="/contact?source=substrate-directory">Ask the Resibond team <Arrow /></Link>
    </section>
  </div>;
}
