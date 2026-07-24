"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { applicationAliases, type Product } from "@/lib/catalog";

export function Finder({ products }: { products: Product[] }) {
  const [application, setApplication] = useState("All");
  const [environment, setEnvironment] = useState("All");
  const [chemistry, setChemistry] = useState("All");
  const [search, setSearch] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [compare, setCompare] = useState<string[]>([]);
  const applications = ["All", ...new Set(products.flatMap((p) => p.applications))];
  const visibleApplications = applications.filter((value) => [value, ...(applicationAliases[value] || [])].join(" ").toLowerCase().includes(search.toLowerCase()));
  const applicationGroups=useMemo(()=>{const groups:Record<string,string[]>={"Bathrooms & interiors":[],"Openings & façades":[],"Mounting & bonding":[],"Specialist systems":[],"Other applications":[]};for(const value of visibleApplications.filter((item)=>item!=="All")){const key=/bath|basin|sink|sanitary|kitchen|gypsum|electrical/i.test(value)?"Bathrooms & interiors":/window|glass|glaz|façade|facade|curtain|acp|weather|frame|door/i.test(value)?"Openings & façades":/mount|bond|fix|nail|mirror|panel|wood|stone|turf|grass/i.test(value)?"Mounting & bonding":/automotive|engine|gasket|duct|fire|bus|industrial/i.test(value)?"Specialist systems":"Other applications";groups[key].push(value)}return Object.entries(groups).filter(([,values])=>values.length)},[visibleApplications]);
  const matches = useMemo(() => products.filter((p) => (application === "All" || p.applications.includes(application)) && (environment === "All" || p.environment.includes(environment)) && (chemistry === "All" || p.chemistry === chemistry)), [application, environment, chemistry, products]);
  const activeFilters = [application, environment, chemistry].filter((value) => value !== "All").length;
  const reason = (product:Product) => `Recommended because it matches ${[application !== "All" && application, environment !== "All" && `${environment.toLowerCase()} exposure`, chemistry !== "All" && `${chemistry.toLowerCase()} chemistry`].filter(Boolean).join(", ") || product.applications[0].toLowerCase()}.`;
  function toggleCompare(slug:string){setCompare((current)=>current.includes(slug)?current.filter((item)=>item!==slug):current.length<3?[...current,slug]:current)}
  const resetFilters = () => { setApplication("All"); setEnvironment("All"); setChemistry("All"); setSearch(""); };
  const chips = (values:string[], selected:string, setSelected:(value:string)=>void) => <div className="finder-chip-list">{values.map((value)=><button className="finder-chip" type="button" aria-pressed={selected===value} onClick={()=>setSelected(value)} key={value}>{value}</button>)}</div>;
  return <div className="finder-wrap"><button className="finder-filter-toggle" type="button" aria-expanded={filtersOpen} aria-controls="finder-filters" onClick={()=>setFiltersOpen((value)=>!value)}><span>Filters{activeFilters>0&&<b>{activeFilters}</b>}</span><span aria-hidden>{filtersOpen?"Close":"Open"} {filtersOpen?"↑":"↓"}</span></button><div className="finder-app"><aside id="finder-filters" className={`finder-controls ${filtersOpen?"open":""}`}>
    <div className="finder-controls-head"><div><span>Refine results</span><strong>{activeFilters ? `${activeFilters} active` : "All products"}</strong></div><button className="clear-finder" type="button" disabled={!activeFilters&&!search} onClick={resetFilters}>Clear all</button></div>
    <fieldset><legend>01 / Application</legend><input className="finder-search" type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search applications" aria-label="Search applications"/><div className="application-options"><button className="finder-chip application-chip" type="button" aria-pressed={application === "All"} onClick={()=>setApplication("All")}>All applications</button>{applicationGroups.map(([group,values])=><div className="application-group" key={group}><strong>{group}</strong><div className="finder-chip-list">{values.map((value)=><button className="finder-chip application-chip" type="button" aria-pressed={application===value} onClick={()=>setApplication(value)} key={value}>{value}</button>)}</div></div>)}</div></fieldset>
    <fieldset><legend>02 / Environment</legend>{chips(["All", "Interior", "Exterior", "Specialist"],environment,setEnvironment)}</fieldset>
    <fieldset><legend>03 / Chemistry</legend>{chips(["All", "Acrylic", "Acetoxy", "Neutral", "Hybrid", "SBS"],chemistry,setChemistry)}</fieldset>
    <button className="finder-apply" type="button" onClick={()=>setFiltersOpen(false)}>Show {matches.length} result{matches.length===1?"":"s"}</button>
  </aside><div className="finder-results"><span className="section-index">Live recommendations</span><h2>{matches.length} suitable route{matches.length === 1 ? "" : "s"}</h2>{matches.length ? <div className="product-grid">{matches.map((product) => <div className="finder-product" key={product.slug}><ProductCard product={product} context="finder" reason={reason(product)} /><label className="compare-control"><input type="checkbox" checked={compare.includes(product.slug)} disabled={!compare.includes(product.slug)&&compare.length>=3} onChange={()=>toggleCompare(product.slug)}/>Compare this result</label></div>)}</div> : <p>No current product matches all three choices. Broaden one filter or contact the Resibond team for specification support.</p>}</div></div>{compare.length>0&&<div className="compare-bar"><span>{compare.length} selected · choose 2–3</span>{compare.length>=2?<Link href={`/compare?products=${compare.join(",")}`}>Compare results →</Link>:<span>Choose one more</span>}</div>}</div>;
}
