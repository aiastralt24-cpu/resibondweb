"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { selectorCombinations, selectorProductSlugs, type SelectorApplication } from "@/lib/product-selector";

const applicationOptions: { value: SelectorApplication; label: string }[] = [
  { value: "Bonding", label: "Bonding" },
  { value: "Gap filling - interior", label: "Interior gap filling" },
  { value: "Gap filling - exterior", label: "Exterior gap filling" },
];

export function SurfaceSelector() {
  const [application, setApplication] = useState<SelectorApplication>("Bonding");
  const [surface1, setSurface1] = useState("");
  const [surface2, setSurface2] = useState("");

  const eligible = useMemo(() => selectorCombinations.filter((entry) => entry.application === application), [application]);
  const firstSurfaces = useMemo(() => [...new Set(eligible.map((entry) => entry.surface1))].sort(), [eligible]);
  const secondSurfaces = useMemo(() => [...new Set(eligible.filter((entry) => !surface1 || entry.surface1 === surface1).map((entry) => entry.surface2))].sort(), [eligible, surface1]);
  const match = eligible.find((entry) => entry.surface1 === surface1 && entry.surface2 === surface2);

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
        <p>Select both surfaces and the type of work to see the spreadsheet&apos;s recommendations in ranked order.</p>
      </div>

      <div className="surface-selector-workspace">
        <fieldset className="surface-application-options">
          <legend>1 / Choose the job</legend>
          {applicationOptions.map((option) => (
            <button type="button" aria-pressed={application === option.value} onClick={() => chooseApplication(option.value)} key={option.value}>{option.label}</button>
          ))}
        </fieldset>

        <div className="surface-select-grid">
          <label><span>2 / First surface</span><select value={surface1} onChange={(event) => chooseFirstSurface(event.target.value)}><option value="">Select a surface</option>{firstSurfaces.map((surface) => <option key={surface}>{surface}</option>)}</select></label>
          <label><span>3 / Second surface</span><select value={surface2} disabled={!surface1} onChange={(event) => setSurface2(event.target.value)}><option value="">Select a surface</option>{secondSurfaces.map((surface) => <option key={surface}>{surface}</option>)}</select></label>
        </div>

        <div className={`surface-result ${match ? "ready" : ""}`} aria-live="polite">
          {match ? <>
            <div><span>Recommended order</span><strong>{surface1} → {surface2}</strong></div>
            <ol>{match.recommendations.map((name) => {
              const slug = selectorProductSlugs[name];
              return <li key={name}><b>{name}</b>{slug ? <Link href={`/products/${slug}`}>View product <span aria-hidden>→</span></Link> : <Link href={`/contact?source=product-selector&product=${encodeURIComponent(name)}`}>Ask about this product <span aria-hidden>→</span></Link>}</li>;
            })}</ol>
            <p>Confirm final suitability against the current technical data sheet and actual site conditions.</p>
          </> : <p>{surface1 ? "Choose the second surface to see ranked products." : "Start with the job type, then choose both surfaces."}</p>}
        </div>
      </div>
    </section>
  );
}
