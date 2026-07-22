"use client";

import { useMemo, useState } from "react";
import { neutral3010Colours, neutralColourFamilies, type NeutralColourFamily } from "@/lib/neutral-3010-colours";

export function NeutralColourStudio() {
  const [query, setQuery] = useState("");
  const [family, setFamily] = useState<"All" | NeutralColourFamily>("All");
  const [selectedCode, setSelectedCode] = useState("7016");
  const selected = neutral3010Colours.find((colour) => colour.code === selectedCode) ?? neutral3010Colours[0];
  const visible = useMemo(() => {
    const term = query.trim().toLowerCase().replace(/^ral\s*/, "");
    return neutral3010Colours.filter((colour) =>
      (family === "All" || colour.family === family) &&
      (!term || colour.code.includes(term) || colour.name.toLowerCase().includes(term))
    );
  }, [query, family]);

  return <section id="colours" className="colour-studio">
    <div className="colour-studio-heading">
      <div><span className="section-index">Neutral 3010 colour studio</span><h2>Find the shade for the joint.</h2></div>
      <p>Explore the {neutral3010Colours.length} shades currently listed for Neutral 3010. More approved shades can be added to this directory as they become available.</p>
    </div>
    <div className="colour-studio-layout">
      <aside className="colour-preview" style={{ "--selected-colour": selected.hex } as React.CSSProperties}>
        <div className="colour-preview-surface" aria-hidden="true"><span /></div>
        <div className="colour-preview-copy"><span>Selected shade</span><strong>RAL {selected.code}</strong><p>{selected.name}</p></div>
      </aside>
      <div className="colour-browser">
        <label className="colour-search"><span>Search by RAL code or name</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try 7016 or anthracite" /></label>
        <div className="colour-filters" aria-label="Filter shades by colour family">{neutralColourFamilies.map((item) => <button key={item} type="button" className={family === item ? "active" : ""} aria-pressed={family === item} onClick={() => setFamily(item)}>{item}</button>)}</div>
        <div className="colour-result-meta"><strong>{visible.length} {visible.length === 1 ? "shade" : "shades"}</strong><span>{family === "All" ? "All colour families" : family}</span></div>
        {visible.length ? <div className="colour-swatch-grid">{visible.map((colour) => <button key={colour.code} type="button" className={selected.code === colour.code ? "selected" : ""} aria-label={`RAL ${colour.code}, ${colour.name}`} aria-pressed={selected.code === colour.code} onClick={() => setSelectedCode(colour.code)}><i style={{ background: colour.hex }} /><strong>RAL {colour.code}</strong><span>{colour.name}</span></button>)}</div> : <div className="colour-empty"><strong>No matching shade.</strong><button type="button" onClick={() => { setQuery(""); setFamily("All"); }}>Clear search</button></div>}
      </div>
    </div>
    <p className="colour-disclaimer"><strong>Important:</strong> On-screen colours are indicative and vary by display, lighting, sealant material and finish. Confirm the final shade with a physical Resibond sample or approved RAL reference before specification or purchase.</p>
  </section>;
}
