"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import type { Product } from "@/lib/catalog";

export function Finder({ products }: { products: Product[] }) {
  const [application, setApplication] = useState("All");
  const [environment, setEnvironment] = useState("All");
  const [chemistry, setChemistry] = useState("All");
  const [search, setSearch] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [compare, setCompare] = useState<string[]>([]);
  const applications = ["All", ...new Set(products.flatMap((p) => p.applications))];
  const visibleApplications = applications.filter((value) => value.toLowerCase().includes(search.toLowerCase()));
  const applicationGroups=useMemo(()=>{const groups:Record<string,string[]>={"Bathrooms & interiors":[],"Openings & façades":[],"Mounting & bonding":[],"Specialist systems":[],"Other applications":[]};for(const value of visibleApplications.filter((item)=>item!=="All")){const key=/bath|basin|sink|sanitary|kitchen|gypsum|electrical/i.test(value)?"Bathrooms & interiors":/window|glass|glaz|façade|facade|curtain|acp|weather|frame|door/i.test(value)?"Openings & façades":/mount|bond|fix|nail|mirror|panel|wood|stone|turf|grass/i.test(value)?"Mounting & bonding":/automotive|engine|gasket|duct|fire|bus|industrial/i.test(value)?"Specialist systems":"Other applications";groups[key].push(value)}return Object.entries(groups).filter(([,values])=>values.length)},[visibleApplications]);
  const matches = useMemo(() => products.filter((p) => (application === "All" || p.applications.includes(application)) && (environment === "All" || p.environment.includes(environment)) && (chemistry === "All" || p.chemistry === chemistry)), [application, environment, chemistry, products]);
  const reason = (product:Product) => `Recommended because it matches ${[application !== "All" && application, environment !== "All" && `${environment.toLowerCase()} exposure`, chemistry !== "All" && `${chemistry.toLowerCase()} chemistry`].filter(Boolean).join(", ") || product.applications[0].toLowerCase()}.`;
  function toggleCompare(slug:string){setCompare((current)=>current.includes(slug)?current.filter((item)=>item!==slug):current.length<3?[...current,slug]:current)}
  return <div className="finder-wrap"><button className="finder-filter-toggle" type="button" aria-expanded={filtersOpen} aria-controls="finder-filters" onClick={()=>setFiltersOpen((value)=>!value)}>{filtersOpen?"Hide filters":"Filter recommendations"} <span aria-hidden>{filtersOpen?"↑":"↓"}</span></button><div className="finder-app"><aside id="finder-filters" className={`finder-controls ${filtersOpen?"open":""}`}>
    <button className="clear-finder" type="button" onClick={() => { setApplication("All"); setEnvironment("All"); setChemistry("All"); setSearch(""); }}>Clear filters</button>
    <fieldset><legend>01 / Application</legend><input className="finder-search" type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search applications" aria-label="Search applications"/><div className="application-options"><label><input type="radio" name="application" checked={application === "All"} onChange={() => setApplication("All")} />All applications</label>{applicationGroups.map(([group,values])=><div className="application-group" key={group}><strong>{group}</strong>{values.map((value)=><label key={value}><input type="radio" name="application" checked={application===value} onChange={()=>setApplication(value)}/>{value}</label>)}</div>)}</div></fieldset>
    <fieldset><legend>02 / Environment</legend>{["All", "Interior", "Exterior", "Specialist"].map((value) => <label key={value}><input type="radio" name="environment" checked={environment === value} onChange={() => setEnvironment(value)} />{value}</label>)}</fieldset>
    <fieldset><legend>03 / Chemistry</legend>{["All", "Acrylic", "Acetoxy", "Neutral", "Hybrid", "SBS"].map((value) => <label key={value}><input type="radio" name="chemistry" checked={chemistry === value} onChange={() => setChemistry(value)} />{value}</label>)}</fieldset>
  </aside><div className="finder-results"><span className="section-index">Live recommendations</span><h2>{matches.length} suitable route{matches.length === 1 ? "" : "s"}</h2>{matches.length ? <div className="product-grid">{matches.map((product) => <div className="finder-product" key={product.slug}><ProductCard product={product} context="finder" reason={reason(product)} /><label className="compare-control"><input type="checkbox" checked={compare.includes(product.slug)} disabled={!compare.includes(product.slug)&&compare.length>=3} onChange={()=>toggleCompare(product.slug)}/>Compare this result</label></div>)}</div> : <p>No current product matches all three choices. Broaden one filter or contact the Resibond team for specification support.</p>}</div></div>{compare.length>0&&<div className="compare-bar"><span>{compare.length} selected · choose 2–3</span>{compare.length>=2?<Link href={`/compare?products=${compare.join(",")}`}>Compare results →</Link>:<span>Choose one more</span>}</div>}</div>;
}
