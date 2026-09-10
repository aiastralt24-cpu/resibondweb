"use client";

import Link from "next/link";
import { useDeferredValue, useMemo, useState } from "react";
import { TdsGate } from "@/components/tds-gate";
import type { Product } from "@/lib/catalog";

export function TechnicalDocumentDirectory({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());
  const filtered = useMemo(() => products.filter((product) => `${product.name} ${product.chemistry} ${product.positioning}`.toLowerCase().includes(deferredQuery)), [deferredQuery, products]);

  return <>
    <label className="document-search"><span>Search by product</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Product name or chemistry" /></label>
    <div className="document-directory" aria-live="polite">
      {filtered.map((product) => <article key={product.slug}><div><span className="section-index">{product.chemistry}</span><h2><Link href={`/products/${product.slug}`}>{product.name}</Link></h2><p>{product.positioning}</p></div>{product.tdsUrl ? <TdsGate product={product.slug} name={product.name} source="tds-directory" className="button secondary" /> : <span className="document-pending">TDS pending</span>}</article>)}
      {!filtered.length ? <div className="document-empty"><h2>No matching products.</h2><button type="button" onClick={() => setQuery("")}>Clear search</button></div> : null}
    </div>
  </>;
}
