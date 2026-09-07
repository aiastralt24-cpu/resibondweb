"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { selectorCombinations, selectorProductSlugs, type SelectorApplication } from "@/lib/product-selector";

const applicationOptions: { value: SelectorApplication; label: string }[] = [
  { value: "Bonding", label: "Bonding" },
  { value: "Gap filling - interior", label: "Interior gap filling" },
  { value: "Gap filling - exterior", label: "Exterior gap filling" },
  { value: "Specialist sealing", label: "Specialist sealing" },
];

const surfaceAliases: Record<string, string> = {
  "Aluminium duct": "Aluminium duct (aluminum duct)",
  Ceramics: "Ceramics (tile)",
  "Fibre-glass duct": "Fibre-glass duct (fiberglass duct)",
  MDF: "MDF (engineered board)",
  "Glass - back coated": "Back-coated glass",
};

const surfaceLabel = (surface: string) => surfaceAliases[surface] ?? surface;

export function SurfaceSelector() {
  const [application, setApplication] = useState<SelectorApplication>("Bonding");
  const [surface1, setSurface1] = useState("");
  const [surface2, setSurface2] = useState("");

  const eligible = useMemo(() => selectorCombinations.filter((entry) => entry.application === application), [application]);
  const firstSurfaces = useMemo(() => [...new Set(eligible.flatMap((entry) => [entry.surface1, entry.surface2]))].sort(), [eligible]);
  const secondSurfaces = useMemo(() => [...new Set(eligible.flatMap((entry) => {
    if (entry.surface1 === surface1) return [entry.surface2];
    if (entry.surface2 === surface1) return [entry.surface1];
    return [];
  }))].sort(), [eligible, surface1]);
  const directMatch = eligible.find((entry) => entry.surface1 === surface1 && entry.surface2 === surface2);
  const reverseMatch = eligible.find((entry) => entry.surface1 === surface2 && entry.surface2 === surface1);
  const match = directMatch ?? reverseMatch;

  function chooseApplication(value: SelectorApplication) {
    setApplication(value);
    setSurface1("");
    setSurface2("");
  }

  function chooseFirstSurface(value: string) {
    setSurface1(value);
    setSurface2("");
  }

  return (
    <section className="surface-selector" aria-labelledby="surface-selector-title">
      <div className="surface-selector-intro">
        <span className="section-index">Surface matching</span>
        <h2 id="surface-selector-title">Select two surfaces.</h2>
        <p>Select both surfaces and the type of work to see recommendations aligned with the Astral Adhesives Saathi selection guide. This matcher shows verified guide combinations, not every material in the full substrate directory.</p>
        <Link className="surface-directory-link" href="/substrates">Can’t find a surface? Browse all substrates →</Link>
      </div>

      <div className="surface-selector-workspace">
        <fieldset className="surface-application-options">
          <legend>1 / Choose the job</legend>
          {applicationOptions.map((option) => (
            <button type="button" aria-pressed={application === option.value} onClick={() => chooseApplication(option.value)} key={option.value}>{option.label}</button>
          ))}
        </fieldset>

        <div className="surface-select-grid">
          <label><span>2 / First surface</span><select value={surface1} onChange={(event) => chooseFirstSurface(event.target.value)}><option value="">Select a surface</option>{firstSurfaces.map((surface) => <option value={surface} key={surface}>{surfaceLabel(surface)}</option>)}</select></label>
          <label><span>3 / Second surface</span><select value={surface2} disabled={!surface1} onChange={(event) => setSurface2(event.target.value)}><option value="">Select a surface</option>{secondSurfaces.map((surface) => <option value={surface} key={surface}>{surfaceLabel(surface)}</option>)}</select></label>
        </div>

        <div className={`surface-result ${match ? "ready" : ""}`} aria-live="polite" key={`${application}|${surface1}|${surface2}`}>
          {match ? <>
            <div><span>Recommended order</span><strong>{surface1} → {surface2}</strong></div>
            <ol>{match.recommendations.map((name, index) => {
              const slug = selectorProductSlugs[name];
              return <li key={name}><div className="surface-result-product"><b>{name}</b><small>{index === 0 ? "Primary recommendation" : `Alternative ${index}`}</small></div>{slug ? <Link href={`/products/${slug}`}>View product <span aria-hidden>→</span></Link> : <Link href={`/contact?source=product-selector&product=${encodeURIComponent(name)}`}>Ask about this product <span aria-hidden>→</span></Link>}</li>;
            })}</ol>
            <p>Recommended because these products are mapped to {application.toLowerCase()} between {surface1} and {surface2}. Confirm final suitability against the current technical data sheet and actual site conditions.</p>
            <p className="finder-source-note">Selection logic aligned with the <a href="https://saathi.astraladhesives.com/" target="_blank" rel="noreferrer">Astral Adhesives Saathi guide ↗</a>. Surface order does not change the approved product ranking.</p>
          </> : <p>{surface1 ? "Choose the second surface to see ranked products." : "Start with the job type, then choose both surfaces."}</p>}
        </div>
      </div>
    </section>
  );
}
