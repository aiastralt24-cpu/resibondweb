"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { applicationAliases, type Product } from "@/lib/catalog";

const environmentOptions = ["All", "Interior", "Exterior", "Specialist"];
const chemistryOptions = ["All", "Acrylic", "Acetoxy", "Neutral", "Hybrid", "SBS"];
const popularApplications = [
  "Glazing",
  "Weatherproofing",
  "Kitchen sink sealing",
  "Window-frame sealing",
  "Mounting",
  "Sanitary sealing",
];
const applicationGroupOrder = [
  "Bathrooms & interiors",
  "Openings & façades",
  "Mounting & bonding",
  "Specialist systems",
  "Other applications",
];

function applicationGroup(value: string) {
  if (/bath|basin|sink|sanitary|kitchen|gypsum|electrical/i.test(value)) return "Bathrooms & interiors";
  if (/window|glass|glaz|façade|facade|curtain|acp|weather|frame|door/i.test(value)) return "Openings & façades";
  if (/mount|bond|fix|nail|mirror|panel|wood|stone|turf|grass/i.test(value)) return "Mounting & bonding";
  if (/automotive|engine|gasket|duct|fire|bus|industrial/i.test(value)) return "Specialist systems";
  return "Other applications";
}

export function Finder({ products }: { products: Product[] }) {
  const [application, setApplication] = useState("All");
  const [environment, setEnvironment] = useState("All");
  const [chemistry, setChemistry] = useState("All");
  const [search, setSearch] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  const [compare, setCompare] = useState<string[]>([]);

  const applications = useMemo(
    () => ["All", ...new Set(products.flatMap((product) => product.applications))],
    [products],
  );
  const normalizedSearch = search.trim().toLowerCase();
  const visibleApplications = useMemo(
    () => applications.filter((value) => [value, ...(applicationAliases[value] || [])].join(" ").toLowerCase().includes(normalizedSearch)),
    [applications, normalizedSearch],
  );
  const applicationGroups = useMemo(() => {
    const groups = new Map(applicationGroupOrder.map((group) => [group, [] as string[]]));
    for (const value of applications.slice(1)) {
      const key = applicationGroup(value);
      groups.set(key, [...(groups.get(key) || []), value]);
    }
    return [...groups.entries()].filter(([, values]) => values.length > 0);
  }, [applications]);
  const quickApplications = popularApplications.filter((value) => applications.includes(value));
  const matches = useMemo(
    () => products.filter((product) =>
      (application === "All" || product.applications.includes(application)) &&
      (environment === "All" || product.environment.includes(environment)) &&
      (chemistry === "All" || product.chemistry === chemistry)),
    [application, environment, chemistry, products],
  );
  const activeSelections = [
    application !== "All" ? { label: application, clear: () => setApplication("All") } : null,
    environment !== "All" ? { label: environment, clear: () => setEnvironment("All") } : null,
    chemistry !== "All" ? { label: chemistry, clear: () => setChemistry("All") } : null,
  ].filter((item): item is { label: string; clear: () => void } => Boolean(item));
  const activeFilters = activeSelections.length;

  const reason = (product: Product) => `Recommended because it matches ${[
    application !== "All" && application,
    environment !== "All" && `${environment.toLowerCase()} exposure`,
    chemistry !== "All" && `${chemistry.toLowerCase()} chemistry`,
  ].filter(Boolean).join(", ") || product.applications[0].toLowerCase()}.`;

  function chooseApplication(value: string) {
    setApplication(value);
    setSearch("");
  }

  function toggleCompare(slug: string) {
    setCompare((current) => current.includes(slug)
      ? current.filter((item) => item !== slug)
      : current.length < 3 ? [...current, slug] : current);
  }

  function resetFilters() {
    setApplication("All");
    setEnvironment("All");
    setChemistry("All");
    setSearch("");
    setExpandedGroup(null);
  }

  const chips = (values: string[], selected: string, setSelected: (value: string) => void) => (
    <div className="finder-chip-list finder-segment-list">
      {values.map((value) => (
        <button className="finder-chip" type="button" aria-pressed={selected === value} onClick={() => setSelected(value)} key={value}>
          {value}
        </button>
      ))}
    </div>
  );

  return (
    <div className="finder-wrap">
      <button className="finder-filter-toggle" type="button" aria-expanded={filtersOpen} aria-controls="finder-filters" onClick={() => setFiltersOpen((value) => !value)}>
        <span>Filters{activeFilters > 0 ? <b>{activeFilters}</b> : null}</span>
        <span aria-hidden>{filtersOpen ? "Close" : "Open"} {filtersOpen ? "↑" : "↓"}</span>
      </button>

      <div className="finder-app">
        <aside id="finder-filters" className={`finder-controls ${filtersOpen ? "open" : ""}`} aria-label="Product filters">
          <div className="finder-controls-head">
            <div><span>Refine results</span><strong>{activeFilters ? `${activeFilters} active` : "All products"}</strong></div>
            <button className="clear-finder" type="button" disabled={!activeFilters && !search} onClick={resetFilters}>Clear all</button>
          </div>

          <div className="finder-controls-scroll">
            <fieldset>
              <legend>01 / Application</legend>
              {application !== "All" ? (
                <div className="finder-current-selection">
                  <span>Selected</span>
                  <button type="button" onClick={() => setApplication("All")} aria-label={`Remove ${application} filter`}>
                    {application}<b aria-hidden>×</b>
                  </button>
                </div>
              ) : null}
              <input className="finder-search" type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search all applications" aria-label="Search applications" />

              {normalizedSearch ? (
                <div className="finder-search-results" aria-live="polite">
                  <span>{visibleApplications.filter((value) => value !== "All").length} matches</span>
                  {visibleApplications.filter((value) => value !== "All").map((value) => (
                    <button type="button" aria-pressed={application === value} onClick={() => chooseApplication(value)} key={value}>
                      <span>{value}</span><small>{applicationGroup(value)}</small>
                    </button>
                  ))}
                  {visibleApplications.length <= 1 ? <p>No applications found.</p> : null}
                </div>
              ) : (
                <>
                  <div className="finder-popular">
                    <span>Popular applications</span>
                    <div className="finder-chip-list">
                      {quickApplications.map((value) => (
                        <button className="finder-chip" type="button" aria-pressed={application === value} onClick={() => chooseApplication(value)} key={value}>{value}</button>
                      ))}
                    </div>
                  </div>
                  <div className="finder-application-groups">
                    <span>Browse by category</span>
                    {applicationGroups.map(([group, values]) => {
                      const expanded = expandedGroup === group;
                      return (
                        <div className={`finder-application-group ${expanded ? "open" : ""}`} key={group}>
                          <button type="button" aria-expanded={expanded} onClick={() => setExpandedGroup(expanded ? null : group)}>
                            <span>{group}<small>{values.length} options</small></span><b aria-hidden>{expanded ? "−" : "+"}</b>
                          </button>
                          {expanded ? <div className="finder-application-list">{values.map((value) => (
                            <button type="button" aria-pressed={application === value} onClick={() => chooseApplication(value)} key={value}>{value}</button>
                          ))}</div> : null}
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </fieldset>

            <fieldset><legend>02 / Environment</legend>{chips(environmentOptions, environment, setEnvironment)}</fieldset>
            <fieldset><legend>03 / Chemistry</legend>{chips(chemistryOptions, chemistry, setChemistry)}</fieldset>
          </div>

          <button className="finder-apply" type="button" onClick={() => setFiltersOpen(false)}>Show {matches.length} product{matches.length === 1 ? "" : "s"}</button>
        </aside>

        <div className="finder-results">
          <span className="section-index">Live recommendations</span>
          <div className="finder-results-heading">
            <h2>{matches.length} product{matches.length === 1 ? "" : "s"} found</h2>
            {activeFilters > 0 ? <button type="button" onClick={resetFilters}>Clear filters</button> : null}
          </div>
          {activeSelections.length ? (
            <div className="finder-active-filters" aria-label="Active filters">
              {activeSelections.map((item) => <button type="button" onClick={item.clear} aria-label={`Remove ${item.label} filter`} key={item.label}>{item.label}<span aria-hidden>×</span></button>)}
            </div>
          ) : null}
          {matches.length ? (
            <div className="product-grid">
              {matches.map((product) => (
                <div className="finder-product" key={product.slug}>
                  <ProductCard product={product} context="finder" reason={reason(product)} />
                  <label className="compare-control"><input type="checkbox" checked={compare.includes(product.slug)} disabled={!compare.includes(product.slug) && compare.length >= 3} onChange={() => toggleCompare(product.slug)} />Compare this result</label>
                </div>
              ))}
            </div>
          ) : <p>No product currently matches every choice. Remove one filter or contact the Resibond team for specification support.</p>}
        </div>
      </div>

      {compare.length > 0 ? <div className="compare-bar"><span>{compare.length} selected · choose 2–3</span>{compare.length >= 2 ? <Link href={`/compare?products=${compare.join(",")}`}>Compare results →</Link> : <span>Choose one more</span>}</div> : null}
    </div>
  );
}
