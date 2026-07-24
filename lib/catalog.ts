export type Product = {
  slug: string;
  name: string;
  range: "Resibond" | "Resibond NXT";
  chemistry: "Acrylic" | "Acetoxy" | "Neutral" | "Hybrid" | "SBS";
  image?: string;
  positioning: string;
  description: string;
  environment: string[];
  applications: string[];
  substrates: string[];
  benefits: string[];
  packSizes: string[];
  colours: string[];
  shelfLife?: string;
  storage?: string;
  tdsUrl?: string;
  sourceUrl?: string;
  preparation: string[];
  applicationSteps: string[];
  limitations: string[];
  related: string[];
};

export const products: Product[] = [
  {
    slug: "neutral-3010", name: "Neutral 3010", range: "Resibond", chemistry: "Neutral",
    image: "/assets/products/Neutral 3010_2026.png", positioning: "Colour-matched neutral silicone for visible joints.",
    description: "A neutral-cure silicone route for glazing, mirrors, metal frames and finish-sensitive joints, with an extensive shade system.",
    environment: ["Interior", "Exterior"], applications: ["Glazing", "Mirrors", "Tinted panels", "ACP joints"],
    substrates: ["Glass", "Mirror", "Metal", "ACP", "Tinted panels"], benefits: ["Neutral-cure chemistry", "100+ shade options", "Suitable for visible finishing joints"],
    packSizes: ["280 ml", "600 ml"], colours: ["100+ shades"], shelfLife: "12 months from manufacture in unopened packaging", storage: "Store dry in the original closed pack between 2–40°C.", tdsUrl: "https://www.astraladhesives.com/media/catalog/product/attachment/r/e/resibond_neutal-3010_tds.pdf", sourceUrl: "https://www.astraladhesives.com/resibond-neutral-3010.html", preparation: ["Surfaces must be clean, dry and free from dust, oil and loose material.", "Confirm substrate compatibility before full application."],
    applicationSteps: ["Cut the nozzle to the required bead size.", "Apply a continuous bead to the prepared joint.", "Tool the bead before skin formation."],
    limitations: ["Final technical limits must be confirmed against the official TDS.", "Test colour and substrate compatibility before use."], related: ["weather-5010", "gp-100", "premium-gp-1010"]
  },
  {
    slug: "weather-5010", name: "Weather 5010", range: "Resibond", chemistry: "Neutral",
    image: "/assets/products/Weather 5010_2026.png", positioning: "Weather-facing sealing for exposed building joints.",
    description: "A neutral silicone route for perimeter sealing, curtain walls, ACP and other exterior building joints.",
    environment: ["Exterior"], applications: ["Weatherproofing", "Building perimeters", "Curtain walls", "Exterior glazing"],
    substrates: ["ACP", "Glass", "Aluminium", "Building joints"], benefits: ["Designed for exterior sealing", "Neutral-cure chemistry", "Broad building-envelope relevance"],
    packSizes: ["300 ml"], colours: ["Multiple shades"], shelfLife: "12 months from manufacture in unopened packaging", storage: "Store dry in the original closed cartridge between 2–40°C.", tdsUrl: "https://www.astraladhesives.com/media/catalog/product/attachment/r/e/resibond_weather_5010_tds.pdf", sourceUrl: "https://www.astraladhesives.com/resibond-weather-5010.html", preparation: ["Ensure joints are dry, sound and contamination-free.", "Use appropriate joint backing where required by the specification."],
    applicationSteps: ["Mask joint edges for a clean finish.", "Gun a continuous bead without air pockets.", "Tool and remove masking before skin formation."], limitations: ["Refer to the official TDS for movement capability and primer requirements."], related: ["neutral-3010", "gp-100", "premium-gp-1010"]
  },
  {
    slug: "hybrid-2-in-1", name: "Hybrid 2 in 1", range: "Resibond", chemistry: "Hybrid",
    image: "/assets/products/Hybrid 2IN1_2026.png", positioning: "One route for strong sealing and bonding.",
    description: "A hybrid product intended for interior and exterior sealing and bonding where adhesion and a clean finish are both important.",
    environment: ["Interior", "Exterior"], applications: ["Sealing", "Bonding", "Mounting", "Metal fabrication"], substrates: ["Metal", "Construction materials"],
    benefits: ["Sealing and bonding in one product", "Permanently elastic and non-shrinking", "Paintable after cure", "Solvent-free and low odour"], packSizes: ["290 ml"], colours: ["Multiple shades"], shelfLife: "12 months from manufacture in unopened packaging", storage: "Store dry in the original closed cartridge between 2–40°C.", tdsUrl: "https://www.astraladhesives.com/media/catalog/product/attachment/r/e/resibond_hybrid_2_in_1xtra_strength_tds.pdf", sourceUrl: "https://www.astraladhesives.com/resibond-hybrid-2in1-xtra-strength.html",
    preparation: ["Remove dust, grease and weak surface material.", "Carry out a small adhesion test on unfamiliar surfaces."], applicationSteps: ["Apply in beads or dots appropriate to the assembly.", "Join components within the open time.", "Support bonded parts until adequate initial hold develops."],
    limitations: ["Load, cure and compatibility limits require confirmation from the official TDS."], related: ["zero-nail", "saves-nails"]
  },
  {
    slug: "zero-nail", name: "Zero Nail", range: "Resibond", chemistry: "Hybrid", image: "/assets/products/Zero Nail_2026.png",
    positioning: "Construction adhesive for fixing without visible fasteners.", description: "A bonding route for mirrors, ceramics, louvers, stone, metal, wood and general fixing work.",
    environment: ["Interior"], applications: ["Mounting", "Fixing", "Mirror installation", "Joinery", "Louver installation"], substrates: ["Mirror", "Ceramic", "Louvers", "Metal", "Stone", "Wood"], benefits: ["Broad substrate map", "Reduces dependence on visible mechanical fasteners", "Suitable for common mounting jobs"],
    packSizes: ["435 g"], colours: ["Construction adhesive"], shelfLife: "12 months from manufacture in unopened packaging", storage: "Store dry in the original closed pack between 2–40°C.", sourceUrl: "https://www.astraladhesives.com/resibond-zero-nail.html", preparation: ["Surfaces must be strong, clean and free of release agents.", "Plan bead positions and temporary support before applying."], applicationSteps: ["Apply a zig-zag bead at approximately 10–12 cm spacing.", "Press firmly for 3–5 minutes and adjust within 6–8 minutes.", "Support heavy items and allow the bond to cure overnight."], limitations: ["Do not rely on the adhesive for unsupported structural loads.", "Mirror compatibility must be confirmed before use."], related: ["hybrid-2-in-1", "saves-nails"]
  },
  {
    slug: "gp-100", name: "GP 100", range: "Resibond", chemistry: "Acetoxy", image: "/assets/products/GP 100_2026.png",
    positioning: "General-purpose acetoxy silicone for everyday sealing.", description: "A one-component, room-temperature curing acetoxy silicone for general sealing and gap filling around windows, frames and wall junctions.", environment: ["Interior", "Exterior"], applications: ["Window-frame sealing", "Air-conditioner edge gaps", "Window-to-wall joints", "General gap filling", "Skirting installation"], substrates: ["Glass", "Aluminium", "Ceramic", "Common building surfaces"], benefits: ["Elongation above 300%", "High silicone content", "Broad substrate adhesion", "RoHS compliant"], packSizes: ["260 ml"], colours: ["Multiple shades"], shelfLife: "12 months from manufacture in unopened packaging", storage: "Store dry in the original closed cartridge between 2–40°C.", tdsUrl: "https://www.astraladhesives.com/media/catalog/product/attachment/r/e/resibond_general_purpose_gp_100_tds.pdf", sourceUrl: "https://www.astraladhesives.com/resibond-general-purpose-gp-100.html", preparation: ["Clean and dry the joint before application."], applicationSteps: ["Apply a continuous bead that completely fills the joint.", "Tool immediately for a smooth finish."], limitations: ["Acetoxy chemistry may not suit sensitive substrates; verify compatibility in the official TDS."], related: ["premium-gp-1010", "weather-5010"]
  },
  {
    slug: "premium-gp-1010", name: "Premium GP 1010", range: "Resibond", chemistry: "Acetoxy", image: "/assets/products/Premium GP 1010_2026.png",
    positioning: "Premium general-purpose acetoxy silicone.", description: "A premium room-temperature curing silicone for interior and exterior sealing on glass, aluminium, metal, wood, porcelain and ceramic.", environment: ["Interior", "Exterior"], applications: ["Glass-to-frame sealing", "Air-conditioner edge gaps", "Window-to-wall joints", "Glass-to-glass joints", "Skirting installation"], substrates: ["Aluminium", "Glass", "Metal", "Wood", "Porcelain", "Ceramic"], benefits: ["Elongation above 350%", "Non-sagging application", "Strong bond and clean finish", "RoHS compliant"], packSizes: ["280 ml"], colours: ["Multiple shades"], shelfLife: "12 months from manufacture in unopened packaging", storage: "Store dry in the original closed cartridge between 2–40°C.", tdsUrl: "https://www.astraladhesives.com/media/catalog/product/attachment/r/e/resibond_premium_gp-1010_tds.pdf", sourceUrl: "https://www.astraladhesives.com/resibond-premium-gp-1010.html", preparation: ["Ensure the application area is clean and dry."], applicationSteps: ["Apply an even bead to the joint.", "Tool before a surface skin develops."], limitations: ["Confirm sensitive-surface compatibility from the official TDS."], related: ["gp-100", "neutral-3010"]
  },
  {
    slug: "bathmate", name: "Bathmate", range: "Resibond", chemistry: "Acrylic", image: "/assets/products/Bathmate_2026.png",
    positioning: "Flexible acrylic gap filler for bathrooms, kitchens and interior finishing.", description: "A water-based flexible acrylic sealant for gaps around washbasins, kitchen sinks, gypsum boards and electrical boards.", environment: ["Interior"], applications: ["Washbasin-to-wall gaps", "Kitchen sink sealing", "Gypsum board joints", "Electrical board surrounds"], substrates: ["Sanitary fixtures", "Walls", "Gypsum board", "Interior construction surfaces"], benefits: ["Anti-fungal and mould resistant", "Forms a watertight seal", "Paintable", "Bright white cured appearance"], packSizes: ["75 g", "300 ml"], colours: ["White"], shelfLife: "18 months from manufacture when stored cool and away from heat", storage: "Store dry in the original closed cartridge between 2–40°C.", tdsUrl: "https://www.astraladhesives.com/media/catalog/product/attachment/b/a/bathmate_tds.pdf", sourceUrl: "https://www.astraladhesives.com/resibond-bathmate.html", preparation: ["Remove soap residue, moisture and loose material."], applicationSteps: ["Apply a neat continuous bead and tool immediately.", "Allow at least 24 hours before painting or water exposure."], limitations: ["Protect the fresh seal from water during the first 24 hours."], related: ["doors-windows", "neutral-3010"]
  },
  {
    slug: "doors-windows", name: "Doors & Windows", range: "Resibond", chemistry: "Acrylic", image: "/assets/products/Doors-and-Windows_2026.png",
    positioning: "Paintable acrylic sealant for door, window and masonry gaps.", description: "A permanently flexible water-based acrylic sealant for UPVC frames, sills, masonry joints, electrical boards and cracks in plaster or concrete.", environment: ["Interior", "Exterior"], applications: ["UPVC doors and windows", "Window sills and plinths", "Electrical board surrounds", "Cracks in plaster and concrete"], substrates: ["UPVC", "PVC", "Plastic", "Ceramic", "Masonry", "Plaster", "Concrete"], benefits: ["Paintable after cure", "Crack bridging", "Anti-fungal", "Water-based"], packSizes: ["300 ml"], colours: ["White"], shelfLife: "18 months from manufacture when stored cool and away from heat", storage: "Store dry in the original closed cartridge between 2–40°C.", sourceUrl: "https://www.astraladhesives.com/resibond-doors-and-windows.html", preparation: ["Remove dust and loose paint from the gap."], applicationSteps: ["Fill the gap without trapping air.", "Tool flush with adjacent surfaces.", "Allow at least 24 hours before painting or water exposure."], limitations: ["Protect from water until cured."], related: ["bathmate", "gp-100", "premium-gp-1010"]
  },
  {
    slug: "thermoseal", name: "Thermoseal", range: "Resibond", chemistry: "Neutral", image: "/assets/products/Thermoseal_2026.png",
    positioning: "High-temperature neutral silicone for automotive and industrial gasket work.", description: "A heavy-duty neutral-cure silicone for forming and replacing gaskets in engines and other automotive or industrial assemblies.", environment: ["Specialist"], applications: ["Formed-in-place gaskets", "Engines", "Automotive repair", "Industrial assemblies", "Electrical sealing", "Electronic component sealing"], substrates: ["Metal flanges", "Engine components", "Electrical assemblies", "Electronic components", "Industrial assemblies"], benefits: ["Up to 310°C intermittent resistance", "Up to 250°C continuous resistance", "Oil resistant", "Heavy-duty application"], packSizes: ["300 ml"], colours: ["Technical grade"], shelfLife: "12 months from manufacture in unopened packaging", storage: "Store dry in the original closed cartridge between 2–40°C.", tdsUrl: "https://www.astraladhesives.com/media/catalog/product/attachment/r/e/resibond_thermoseal_7010_tds_.pdf", sourceUrl: "https://www.astraladhesives.com/resibond-thermoseal-7010.html", preparation: ["Remove old gasket material, oil and contamination."], applicationSteps: ["Apply a uniform continuous bead around the prepared flange.", "Allow the specified cure before returning the assembly to service."], limitations: ["Temperature resistance is application-dependent; consult the current TDS."], related: ["neutral-3010", "hybrid-2-in-1"]
  },
  {
    slug: "saves-nails", name: "Saves Nails", range: "Resibond", chemistry: "SBS", image: "/assets/products/Saves Nails_2026.png",
    positioning: "Grab adhesive for common interior fixing work.", description: "An SBS adhesive route for mounting and fixing construction materials without exposed nails.", environment: ["Interior"], applications: ["Mounting", "Fixing", "Interior bonding"], substrates: ["Construction materials"], benefits: ["Fast-grab positioning", "SBS chemistry", "Alternative to visible nails for suitable loads"], packSizes: ["Specification pending"], colours: ["Specification pending"], preparation: ["Ensure substrates are clean, stable and suitably absorbent."], applicationSteps: ["Apply in spaced beads.", "Press into place and adjust promptly.", "Support until the bond can hold the item."], limitations: ["Not a substitute for structural fixings.", "Confirm load and substrate limits in the official TDS."], related: ["zero-nail", "hybrid-2-in-1"]
  },
  {
    slug: "fireshield", name: "FireShield", range: "Resibond NXT", chemistry: "Acrylic", image: "/assets/products/FireShield_NXT_2026.png",
    positioning: "Specialist sealing route for fire doors, fire windows and related joints.", description: "A professional-range product associated with fire-door, fire-window, commercial-kitchen and window applications in the supplied product map.",
    environment: ["Interior", "Specialist"], applications: ["Fire doors", "Fire windows", "Commercial kitchens", "Windows"], substrates: ["Fire-rated assemblies", "Windows"], benefits: ["Application-specific professional range", "Mapped to fire-door and fire-window use cases", "Technical specification required before use"],
    packSizes: ["Specification pending"], colours: ["Specification pending"], preparation: ["Follow the approved joint design and official technical documentation.", "Confirm substrate, backing material and required fire classification."], applicationSteps: ["Install only within a verified system specification.", "Apply to the documented joint dimensions and tooling requirements."], limitations: ["Do not infer a fire rating from the product name alone.", "System test evidence and the official TDS are required before specification."], related: ["duct-seal", "doors-windows"]
  },
  {
    slug: "duct-seal", name: "Duct Seal", range: "Resibond NXT", chemistry: "Acrylic", image: "/assets/products/Duct Seal_NXT_2026.png",
    positioning: "Professional sealing route for HVAC duct joints.", description: "An application-led product mapped to HVAC ducts in the supplied substrate and application schedule.", environment: ["Interior", "Specialist"], applications: ["HVAC ducts"], substrates: ["HVAC ductwork"], benefits: ["Clear HVAC application route", "Professional NXT range", "Acrylic chemistry mapping"],
    packSizes: ["Specification pending"], colours: ["Specification pending"], preparation: ["Remove dust, oil and loose material from the duct joint.", "Confirm the required joint construction from project documentation."], applicationSteps: ["Apply continuously to the prepared duct joint.", "Tool and inspect the seal before service."], limitations: ["Pressure, temperature and code-compliance limits require the official TDS."], related: ["fireshield", "thermoseal"]
  },
  {
    slug: "mirror-mount", name: "Mirror Mount", range: "Resibond NXT", chemistry: "Hybrid", image: "/assets/products/Mirror Mount_NXT_2026.png",
    positioning: "Dedicated mounting route for mirrors and tinted panels.", description: "A professional hybrid product associated with mirror and tinted-panel mounting in the supplied product map.", environment: ["Interior"], applications: ["Mirror installation", "Tinted panel mounting"], substrates: ["Mirror", "Tinted panels"], benefits: ["Purpose-led mirror positioning", "Hybrid chemistry mapping", "Professional mounting range"],
    packSizes: ["Specification pending"], colours: ["Specification pending"], preparation: ["Confirm mirror-backing compatibility before use.", "Ensure the support surface is stable, clean and suitably prepared."], applicationSteps: ["Apply in separated vertical beads to allow ventilation.", "Position and support the mirror until the bond has developed."], limitations: ["Mirror-backing compatibility and support time must be verified from the official TDS."], related: ["zero-nail", "neutral-3010"]
  },
  {
    slug: "turf-grass", name: "Turf Grass", range: "Resibond NXT", chemistry: "Hybrid", image: "/assets/products/Turf Grass_NXT_2026.png",
    positioning: "Application-specific bonding route for artificial grass.", description: "A professional hybrid product associated with artificial-grass installation in the supplied product map.", environment: ["Exterior", "Specialist"], applications: ["Artificial grass installation"], substrates: ["Artificial grass"], benefits: ["Single-purpose discovery route", "Hybrid chemistry mapping", "Professional installation positioning"],
    packSizes: ["Specification pending"], colours: ["Specification pending"], preparation: ["Ensure the installation surface is stable, clean and appropriately drained.", "Confirm system compatibility with the turf backing."], applicationSteps: ["Apply according to the verified turf-installation method.", "Maintain alignment and pressure during the required initial set."], limitations: ["Coverage, weather and cure requirements must be confirmed from the official TDS."], related: ["hybrid-2-in-1", "zero-nail"]
  },
  {
    slug: "sanitary-super-white", name: "Sanitary Super White", range: "Resibond NXT", chemistry: "Acetoxy", image: "/assets/products/Sanitary Super White_NXT_2026.png",
    positioning: "Professional sanitary sealing route for wet-area fixtures.", description: "An acetoxy product mapped to shower units, toilets and washbasins in the supplied application schedule.", environment: ["Interior"], applications: ["Shower units", "Toilets", "Washbasins", "Sanitary sealing"], substrates: ["Sanitary fixtures"], benefits: ["Purpose-led sanitary range", "Acetoxy chemistry mapping", "Mapped to common wet-area fixtures"],
    packSizes: ["Specification pending"], colours: ["Super white"], preparation: ["Remove moisture, soap residue and contamination.", "Confirm compatibility with sensitive fixtures and finishes."], applicationSteps: ["Apply a continuous sanitary bead.", "Tool to a smooth profile that avoids water retention."], limitations: ["Acetoxy chemistry may not suit every sensitive substrate.", "Water exposure and cure timing require the official TDS."], related: ["bathmate", "neutral-3010"]
  }
];

export const productBySlug = (slug: string) => products.find((product) => product.slug === slug);
export const slugify = (value: string) => value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
export const chemistries = [...new Set(products.map((product) => product.chemistry))];
export const applications = [...new Set(products.flatMap((product) => product.applications))].sort();
export const substrates = [...new Set(products.flatMap((product) => product.substrates))].sort();
export const ranges = ["Resibond", "Resibond NXT"] as const;
export const environments = ["Interior", "Exterior", "Specialist"] as const;
export const applicationAliases: Record<string, string[]> = {
  "ACP joints": ["aluminium composite panel", "facade panel"],
  "Electronic component sealing": ["electronics", "electrical components"],
  "Louver installation": ["louvre", "louvers", "louver bonding"],
  "Skirting installation": ["skirting board", "baseboard"],
  "UPVC doors and windows": ["uPVC frames", "PVC windows"],
};
export const substrateAliases: Record<string, string[]> = {
  ACP: ["aluminium composite panel", "acp sheet"],
  Aluminium: ["aluminum"],
  "Artificial grass": ["turf", "synthetic grass"],
  Ceramic: ["ceramics", "tile", "tiles"],
  Louvers: ["louvres"],
  UPVC: ["uPVC", "PVC window frame"],
};
export const productSearchAliases: Record<string, string[]> = {
  "gp-100": ["general purpose 100", "skirting"],
  "premium-gp-1010": ["gp 1010", "premium 1010", "skirting"],
  "turf-grass": ["truf grass", "artificial grass"],
  "zero-nail": ["louver", "louvre", "no nails"],
};
