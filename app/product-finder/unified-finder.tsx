"use client";

import { useState } from "react";
import type { Product } from "@/lib/catalog";
import { Finder } from "./finder";
import { SurfaceSelector } from "./surface-selector";

type FinderMode = "surfaces" | "application";

const modes: { value: FinderMode; label: string; description: string }[] = [
  { value: "surfaces", label: "Match two surfaces", description: "Know both materials? Get a ranked recommendation." },
  { value: "application", label: "Browse by application", description: "Know the job? Filter the complete product range." },
];

export function UnifiedFinder({ products }: { products: Product[] }) {
  const [mode, setMode] = useState<FinderMode>("surfaces");

  return (
    <div className="unified-finder">
      <div className="finder-mode-heading">
        <div className="finder-mode-tabs" role="tablist" aria-label="Product finder method">
          {modes.map((item, index) => <button id={`finder-tab-${item.value}`} type="button" role="tab" aria-selected={mode === item.value} aria-controls={`finder-panel-${item.value}`} onClick={() => setMode(item.value)} key={item.value}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.label}</strong><small>{item.description}</small></button>)}
        </div>
      </div>

      <div id="finder-panel-surfaces" role="tabpanel" aria-labelledby="finder-tab-surfaces" hidden={mode !== "surfaces"}><SurfaceSelector /></div>
      <div id="finder-panel-application" role="tabpanel" aria-labelledby="finder-tab-application" hidden={mode !== "application"}><Finder products={products} /></div>
    </div>
  );
}
