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
    environment: ["Interior"], applications: ["Glazing", "Mirrors", "Tinted panels", "ACP joints", "Window-frame sealing", "Electrical sealing", "Electronic component sealing"],
    substrates: ["Glass", "Aluminium", "Stainless steel", "Galvanized steel", "Concrete", "Masonry", "Brick", "Ceramic tiles", "PVC", "UPVC", "Polycarbonate", "Acrylic", "Painted surfaces", "Wood"], benefits: ["Neutral-cure chemistry", "RAL shades available in the 280 ml cartridge", "Suitable for visible finishing joints"],
    packSizes: ["260 ml", "280 ml", "600 ml sausage"], colours: ["RAL shades available in 280 ml"], shelfLife: "12 months from manufacture in unopened packaging", storage: "Store dry in the original closed pack between 2–40°C.", tdsUrl: "/documents/tds/resibond-neutral-3010-tds-july-2026.pdf", sourceUrl: "https://www.astraladhesives.com/resibond-neutral-3010.html", preparation: ["Surfaces must be clean, dry and free from dust, oil and loose material.", "Confirm substrate compatibility before full application."],
    applicationSteps: ["Cut the nozzle to the required bead size.", "Apply a continuous bead to the prepared joint.", "Tool the bead before skin formation."],
    limitations: ["Final technical limits must be confirmed against the official TDS.", "Test colour and substrate compatibility before use."], related: ["weather-5010", "gp-100", "premium-gp-1010"]
  },
  {
    slug: "weather-5010", name: "Weather 5010", range: "Resibond", chemistry: "Neutral",
    image: "/assets/products/Weather 5010_2026.png", positioning: "Weather-facing sealing for exposed building joints.",
    description: "A neutral silicone route for perimeter sealing, curtain walls, ACP and other exterior building joints.",
    environment: ["Exterior"], applications: ["Glazing", "ACP joints", "Weatherproofing", "Building perimeters", "Curtain walls", "Exterior glazing"],
    substrates: ["Glass", "Aluminium", "Stainless steel", "Galvanized steel", "Concrete", "Masonry", "Brick", "Ceramic tiles", "UPVC", "Polycarbonate", "ACP", "Painted surfaces", "Wood"], benefits: ["Designed for exterior sealing", "Neutral-cure chemistry", "For curtain walls and exterior glazing"],
    packSizes: ["280 ml", "600 ml sausage"], colours: ["Clear", "Black", "White", "Grey", "Brown"], shelfLife: "12 months from manufacture in unopened packaging", storage: "Store dry in the original closed cartridge between 2–40°C.", tdsUrl: "/documents/tds/resibond-weather-5010-tds-july-2026.pdf", sourceUrl: "https://www.astraladhesives.com/resibond-weather-5010.html", preparation: ["Ensure joints are dry, sound and contamination-free.", "Use appropriate joint backing where required by the specification."],
    applicationSteps: ["Mask joint edges for a clean finish.", "Gun a continuous bead without air pockets.", "Tool and remove masking before skin formation."], limitations: ["Refer to the official TDS for movement capability and primer requirements."], related: ["neutral-3010", "gp-100", "premium-gp-1010"]
  },
  {
    slug: "hybrid-2-in-1", name: "Hybrid 2 in 1", range: "Resibond", chemistry: "Hybrid",
    image: "/assets/products/Hybrid 2IN1_2026.png", positioning: "One route for strong sealing and bonding.",
    description: "A hybrid product intended for interior and exterior sealing and bonding where adhesion and a clean finish are both important.",
    environment: ["Interior", "Exterior"], applications: ["Bonding", "Mounting", "Metal fabrication", "Exterior gap filling"], substrates: ["Concrete", "Cement mortar", "Brick", "Masonry", "Natural stone", "Granite", "Marble", "Ceramic tiles", "Porcelain", "Glass", "Aluminium", "Anodized aluminium", "Stainless steel", "Gypsum board", "Wood", "UPVC", "PVC", "Polycarbonate", "Painted surfaces"],
    benefits: ["Sealing and bonding in one product", "Permanently elastic and non-shrinking", "Paintable after cure", "Solvent-free and low odour", "Primerless adhesion", "Excellent UV resistance"], packSizes: ["290 ml cartridge", "600 ml sausage"], colours: ["Black", "White", "Grey"], shelfLife: "12 months in original packaging", storage: "Store in a dry, well-ventilated place below 30°C.", tdsUrl: "/documents/tds/resibond-hybrid-2-in-1-tds-july-2026.pdf", sourceUrl: "https://www.astraladhesives.com/resibond-hybrid-2in1-xtra-strength.html",
    preparation: ["Remove dust, grease and weak surface material.", "Carry out a small adhesion test on unfamiliar surfaces."], applicationSteps: ["Apply in beads or dots appropriate to the assembly.", "Join components within the open time.", "Support bonded parts until adequate initial hold develops."],
    limitations: ["Load, cure and compatibility limits require confirmation from the official TDS."], related: ["zero-nail", "saves-nails"]
  },
  {
    slug: "zero-nail", name: "Zero Nail", range: "Resibond", chemistry: "Hybrid", image: "/assets/products/Zero Nail_2026.png",
    positioning: "Instant grab adhesive sealant for fixing without visible fasteners.", description: "An instant-grab bonding route for common interior and exterior fixing work.",
    environment: ["Interior", "Exterior"], applications: ["Bonding", "Mounting", "Fixing", "Interior bonding", "Exterior gap filling", "Mirrors", "Mirror installation", "Joinery", "Louver installation", "Stone bonding", "Wood bonding"], substrates: ["Mirror", "ACP", "Louvers", "Concrete", "Cement mortar", "Brick", "Masonry", "Natural stone", "Granite", "Marble", "Ceramic tiles", "Porcelain", "Glass", "Aluminium", "Anodized aluminium", "Stainless steel", "Gypsum board", "Wood", "UPVC", "PVC", "Polycarbonate", "Painted surfaces"], benefits: ["Instant grab", "Reduces dependence on visible mechanical fasteners", "Suitable for common mounting jobs"],
    packSizes: ["435 g cartridge"], colours: ["White"], shelfLife: "12 months in original packaging", storage: "Store in a dry, well-ventilated place below 30°C.", tdsUrl: "/documents/tds/resibond-zero-nail-tds-july-2026.pdf", sourceUrl: "https://www.astraladhesives.com/resibond-zero-nail.html", preparation: ["Surfaces must be strong, clean and free of release agents.", "Plan bead positions and temporary support before applying."], applicationSteps: ["Apply a zig-zag bead at approximately 10 cm spacing.", "Press firmly for 2–3 minutes and adjust within 5 minutes.", "Support heavy items and allow the bond to cure overnight."], limitations: ["Do not rely on the adhesive for unsupported structural loads.", "Not for high-temperature gasketing; check the TDS before use on restricted plastics and bituminous substrates."], related: ["hybrid-2-in-1", "saves-nails"]
  },
  {
    slug: "gp-100", name: "GP 100", range: "Resibond", chemistry: "Acetoxy", image: "/assets/products/GP 100_2026.png",
    positioning: "General-purpose acetoxy silicone for everyday sealing.", description: "A one-component, room-temperature curing acetoxy silicone for general sealing and gap filling around windows, frames and wall junctions.", environment: ["Interior"], applications: ["Window-frame sealing", "Air-conditioner edge gaps", "Window-to-wall joints", "General gap filling"], substrates: ["Glass", "Aluminium", "Window frames", "Frame-to-wall joints", "AC-to-window edge gaps", "Walls", "Ceramic", "Porous surfaces", "Non-porous surfaces"], benefits: ["Elongation above 300%", "High solid content", "Broad substrate adhesion", "RoHS compliant"], packSizes: ["240 ml cartridge", "260 ml cartridge"], colours: ["Clear", "Black", "White", "Grey"], shelfLife: "12 months in original packaging", storage: "Store in a dry, well-ventilated place below 30°C.", tdsUrl: "/documents/tds/resibond-gp-100-tds-july-2026.pdf", sourceUrl: "https://www.astraladhesives.com/resibond-general-purpose-gp-100.html", preparation: ["Clean and dry the joint before application."], applicationSteps: ["Apply a continuous bead that completely fills the joint.", "Tool immediately for a smooth finish."], limitations: ["Not recommended for general glazing, zinc, brass, copper or polished surfaces such as mirrors."], related: ["premium-gp-1010", "weather-5010"]
  },
  {
    slug: "premium-gp-1010", name: "Premium GP 1010", range: "Resibond", chemistry: "Acetoxy", image: "/assets/products/Premium GP 1010_2026.png",
    positioning: "Premium general-purpose acetoxy silicone.", description: "A premium room-temperature curing silicone for interior sealing on glass, aluminium, metal, wood, porcelain and ceramic.", environment: ["Interior"], applications: ["Window-frame sealing", "Glass-to-frame sealing", "Air-conditioner edge gaps", "Window-to-wall joints", "Glass-to-glass joints", "General gap filling"], substrates: ["Aluminium", "Glass", "Window frames", "Door frames", "Frame-to-wall joints", "AC-to-window edge gaps", "Walls", "Metal", "Wood", "Porcelain", "Ceramic"], benefits: ["Elongation above 350%", "Non-sagging application", "Strong bond and clean finish", "RoHS compliant"], packSizes: ["260 ml", "280 ml"], colours: ["Clear", "Black", "White", "Grey"], shelfLife: "12 months from manufacture in unopened packaging", storage: "Store dry in the original closed cartridge between 2–40°C.", tdsUrl: "/documents/tds/resibond-premium-gp-1010-tds-july-2026.pdf", sourceUrl: "https://www.astraladhesives.com/resibond-premium-gp-1010.html", preparation: ["Ensure the application area is clean and dry."], applicationSteps: ["Apply an even bead to the joint.", "Tool before a surface skin develops."], limitations: ["Confirm sensitive-surface compatibility from the official TDS."], related: ["gp-100", "neutral-3010"]
  },
  {
    slug: "kitchen-sink", name: "Kitchen & Sink", range: "Resibond", chemistry: "Acrylic", image: "/assets/products/Kitchen & Sink_2026.png",
    positioning: "Permanently flexible acrylic sealant for kitchen sink and countertop joints.", description: "A high-quality, water-based acrylic sealant developed for sink and countertop sealing.",
    environment: ["Interior"], applications: ["Kitchen sink sealing", "Countertop sealing"], substrates: ["Kitchen sinks", "Countertops"], benefits: ["Prevents mould formation", "Water and fungus resistant", "Permanently elastic", "Low VOC"],
    packSizes: ["300 ml cartridge"], colours: ["White"], shelfLife: "18 months in original packaging", storage: "Store in a dry, well-ventilated place below 30°C.", tdsUrl: "/documents/tds/resibond-kitchen-sink-tds-july-2026.pdf", preparation: ["Remove residual dirt, old sealant, grease and contaminants; leave the joint clean and dry."], applicationSteps: ["Mask surrounding areas for a neat finish.", "Apply into the base of the joint, wetting both sides.", "Tool immediately and do not disturb for 24 hours after skin formation."], limitations: ["Do not use in continuous water immersion.", "Do not apply if rain or frost is imminent."], related: ["sanitary-super-white", "bathmate"]
  },
  {
    slug: "bathmate", name: "Bathmate", range: "Resibond", chemistry: "Acrylic", image: "/assets/products/Bathmate_2026.png",
    positioning: "Flexible acrylic sealant for bathrooms and interior finishing.", description: "A permanently flexible, water-based acrylic sealant for washbasins, wall-to-wood joints and electrical switch boards.", environment: ["Interior"], applications: ["Washbasin-to-wall gaps", "Electrical board surrounds"], substrates: ["Washbasins", "Walls", "Wood", "Electrical boards", "Ceramic"], benefits: ["Anti-fungal and mould resistant", "Forms a watertight seal", "Strong adhesion to ceramic", "High flexibility", "Eco-friendly"], packSizes: ["75 g tube", "150 g tube", "300 ml cartridge"], colours: ["White", "Black", "Brown"], shelfLife: "18 months in original packaging", storage: "Store in a dry, well-ventilated place below 30°C.", tdsUrl: "/documents/tds/resibond-bathmate-tds-july-2026.pdf", sourceUrl: "https://www.astraladhesives.com/resibond-bathmate.html", preparation: ["Remove soap residue, moisture and loose material."], applicationSteps: ["Apply a neat continuous bead and tool immediately.", "Allow at least 24 hours before painting or water exposure."], limitations: ["Do not use in continuous water immersion.", "Do not apply if rain or frost is imminent."], related: ["doors-windows", "sanitary-super-white"]
  },
  {
    slug: "doors-windows", name: "Doors & Windows", range: "Resibond", chemistry: "Acrylic", image: "/assets/products/Doors-and-Windows_2026.png",
    positioning: "Paintable acrylic sealant for door, window and masonry gaps.", description: "A permanently flexible water-based acrylic sealant for UPVC frames, sills, masonry joints, electrical boards and cracks in plaster or concrete.", environment: ["Interior"], applications: ["Window-frame sealing", "General gap filling", "Gypsum board joints", "UPVC doors and windows", "Window sills and plinths", "Electrical board surrounds", "Cracks in plaster and concrete"], substrates: ["UPVC", "PVC", "Plastic", "Window frames", "Door frames", "Window sills", "Frame-to-wall joints", "Plinths", "Walls", "Ceramic", "Masonry", "Porous masonry surfaces", "Plaster", "Concrete", "Gypsum board", "Electrical boards"], benefits: ["Paintable after cure", "Crack bridging", "Anti-fungal", "Water-based"], packSizes: ["300 ml"], colours: ["Black", "White", "Grey"], shelfLife: "18 months from manufacture when stored cool and away from heat", storage: "Store dry in the original closed cartridge between 2–40°C.", tdsUrl: "/documents/tds/resibond-doors-windows-tds-july-2026.pdf", sourceUrl: "https://www.astraladhesives.com/resibond-doors-and-windows.html", preparation: ["Remove dust and loose paint from the gap."], applicationSteps: ["Fill the gap without trapping air.", "Tool flush with adjacent surfaces.", "Allow at least 24 hours before painting or water exposure."], limitations: ["Protect from water until cured."], related: ["bathmate", "gp-100", "premium-gp-1010"]
  },
  {
    slug: "thermoseal", name: "Thermoseal", range: "Resibond", chemistry: "Neutral", image: "/assets/products/Thermoseal_2026.png",
    positioning: "High-temperature neutral silicone for automotive and industrial gasket work.", description: "A heavy-duty neutral-cure silicone for forming and replacing gaskets in engines and other automotive or industrial assemblies.", environment: ["Specialist"], applications: ["High-temperature sealing", "Formed-in-place gaskets", "Engines", "Automotive repair", "Industrial assemblies", "Electrical sealing", "Electronic component sealing", "Commercial kitchens"], substrates: ["Metal flanges", "Metal lap joints", "Engine components", "Automotive components", "Electrical assemblies", "Electronic components", "Industrial assemblies", "Commercial kitchens"], benefits: ["Up to 310°C intermittent resistance", "Up to 250°C continuous resistance", "Oil resistant", "Heavy-duty application"], packSizes: ["300 ml"], colours: ["Red (technical grade)"], shelfLife: "12 months from manufacture in unopened packaging", storage: "Store dry in the original closed cartridge between 2–40°C.", tdsUrl: "/documents/tds/resibond-thermoseal-7010-tds-july-2026.pdf", sourceUrl: "https://www.astraladhesives.com/resibond-thermoseal-7010.html", preparation: ["Remove old gasket material, oil and contamination."], applicationSteps: ["Apply a uniform continuous bead around the prepared flange.", "Allow the specified cure before returning the assembly to service."], limitations: ["Temperature resistance is application-dependent; consult the current TDS."], related: ["neutral-3010", "hybrid-2-in-1"]
  },
  {
    slug: "saves-nails", name: "Saves Nails", range: "Resibond", chemistry: "SBS", image: "/assets/products/Saves Nails_2026.png",
    positioning: "Instant-grab construction adhesive for interior and exterior fixing.", description: "A high-strength SBS adhesive for bonding construction substrates without exposed mechanical fixings.", environment: ["Interior", "Exterior"], applications: ["Bonding", "Fixing", "Interior bonding", "Panel bonding", "Wall moulding", "Batten installation", "Nameplate fixing"], substrates: ["Concrete", "Wood", "Aluminium", "Particle board", "MDF", "Stone", "Ceramic", "Metal", "Plaster", "Brick", "Masonry"], benefits: ["Instant grab", "High mechanical strength", "Paintable", "Single component", "Interior and exterior use"], packSizes: ["290 ml cartridge"], colours: ["Beige"], shelfLife: "12 months in original packaging", storage: "Store in a dry, well-ventilated place below 30°C.", tdsUrl: "/documents/tds/resibond-saves-nails-tds-july-2026.pdf", sourceUrl: "https://saathi.astraladhesives.com/", preparation: ["Ensure substrates are clean, dry and free from grease, oil, dust and loose paint."], applicationSteps: ["Apply a 4–6 mm bead with beads no more than 45 cm apart.", "Use the TDS one-way or two-way bonding method for the load and substrate.", "Support stressed assemblies for at least 24 hours."], limitations: ["Plasticiser migration may occur with some PVC materials.", "Do not use where continued elevated-temperature exposure will occur.", "Keep away from ignition sources."], related: ["zero-nail", "hybrid-2-in-1"]
  },
  {
    slug: "fireshield", name: "FireShield", range: "Resibond NXT", chemistry: "Acrylic", image: "/assets/products/fireshield-nxt-2026-v2.png",
    positioning: "Fire-stop acrylic sealant for tested fire-rated joint systems.", description: "A water-based, low-odour acrylic fire-stop sealant with movement capability for fire-rated joint applications.",
    environment: ["Interior", "Specialist"], applications: ["Fire doors", "Fire windows", "Fire-rated wall and floor joints", "Cable penetrations", "Partition wall joints", "Metal pipe penetrations", "Service penetration sealing"], substrates: ["Concrete", "Fire-retardant pipes", "Electrical cables", "Fire-rated doors", "Fire-rated windows"], benefits: ["BS 476-20 four-hour fire-rated within the tested system", "Paintable", "Low VOC", "Smoke, fume and water resistant", "No halogenated materials"],
    packSizes: ["300 ml cartridge"], colours: ["White"], tdsUrl: "/documents/tds/resibond-nxt-fireshield-tds-july-2026.pdf", preparation: ["Follow the approved joint design and official technical documentation.", "Confirm substrate, backing material and required fire classification."], applicationSteps: ["Install only within a verified system specification.", "Apply to the documented joint dimensions and tooling requirements."], limitations: ["Do not infer a fire rating from the product name alone.", "System test evidence and the official TDS are required before specification."], related: ["duct-seal", "doors-windows"]
  },
  {
    slug: "duct-seal", name: "Duct Seal", range: "Resibond NXT", chemistry: "Acrylic", image: "/assets/products/duct-seal-nxt-2026-v2.png",
    positioning: "Acrylic sealant for professional HVAC duct joints.", description: "A dedicated product for sealing HVAC ductwork in interior and specialist installations.", environment: ["Interior", "Specialist"], applications: ["HVAC ducts"], substrates: ["HVAC ductwork"], benefits: ["Designed for HVAC duct joints", "Professional NXT range", "Acrylic chemistry"],
    packSizes: ["300 ml cartridge"], colours: ["White"], shelfLife: "18 months in original packaging", storage: "Store in a dry, well-ventilated place below 30°C.", tdsUrl: "/documents/tds/resibond-nxt-duct-seal-tds-july-2026.pdf", preparation: ["Remove residual dirt, contaminants and old sealant; leave the duct joint clean and dry."], applicationSteps: ["Apply into the base of the joint, wetting both sides.", "Tool immediately and do not disturb for 24 hours after skin formation."], limitations: ["Do not use in continuous water immersion.", "Do not apply if rain or frost is imminent."], related: ["fireshield", "thermoseal"]
  },
  {
    slug: "mirror-mount", name: "Mirror Mount", range: "Resibond NXT", chemistry: "Hybrid", image: "/assets/products/mirror-mount-nxt-2026-v2.png",
    positioning: "Hybrid adhesive for mounting mirrors and tinted panels.", description: "A dedicated professional product for interior mirror and tinted-panel installation.", environment: ["Interior"], applications: ["Mirrors", "Mirror installation", "Tinted panels", "Tinted panel mounting"], substrates: ["Mirror", "Tinted panels"], benefits: ["Designed for mirror installation", "Hybrid chemistry", "Professional mounting range"],
    packSizes: ["435 g cartridge"], colours: ["White"], shelfLife: "12 months in original packaging", storage: "Store in a dry, well-ventilated place below 30°C.", tdsUrl: "/documents/tds/resibond-nxt-mirror-mount-tds-july-2026.pdf", preparation: ["Confirm mirror-backing compatibility before use.", "Ensure the support surface is stable, clean and suitably prepared."], applicationSteps: ["Apply 10 mm vertical strips at 100 mm intervals.", "Maintain approximately 2 mm bead thickness.", "Support the mirror for at least 24 hours and keep its edges ventilated."], limitations: ["Not recommended for structural glazing.", "Test adhesion to the plastic film on safety mirrors before use."], related: ["zero-nail", "neutral-3010"]
  },
  {
    slug: "turf-grass", name: "Turf Grass", range: "Resibond NXT", chemistry: "Hybrid", image: "/assets/products/turf-grass-nxt-2026-v2.png",
    positioning: "Hybrid adhesive for artificial-grass installation.", description: "A dedicated professional product for bonding artificial grass in exterior and specialist installations.", environment: ["Exterior", "Specialist"], applications: ["Artificial grass installation"], substrates: ["Artificial grass"], benefits: ["Designed for artificial-grass installation", "Hybrid chemistry", "Professional installation range"],
    packSizes: ["600 ml sausage"], colours: ["Beige"], shelfLife: "12 months in original packaging", storage: "Store in a dry, well-ventilated place below 30°C.", tdsUrl: "/documents/tds/resibond-nxt-turf-grass-tds-july-2026.pdf", preparation: ["Ensure surfaces are clean and free from dust, grease, oil and other contaminants."], applicationSteps: ["Apply to seaming tape and spread evenly with a serrated trowel.", "Weight the joint, join the artificial grass and maintain alignment.", "Allow approximately 24 hours for full cure."], limitations: ["Coverage is approximately 4 linear metres per cartridge on a typical seam.", "Cured adhesive must be removed mechanically."], related: ["hybrid-2-in-1", "zero-nail"]
  },
  {
    slug: "sanitary-super-white", name: "Sanitary Super White", range: "Resibond NXT", chemistry: "Acetoxy", image: "/assets/products/sanitary-super-white-nxt-2026-v3.png",
    positioning: "Professional sanitary sealing route with advanced mould resistance.", description: "A one-part acetoxy silicone for washbasins, bathtubs, commodes, urinals and glass shower cubicles.", environment: ["Interior"], applications: ["Washbasin-to-wall gaps", "Shower units", "Bathtub sealing", "Commode and urinal sealing", "Washbasins", "Sanitary sealing"], substrates: ["Glass shower cubicles", "Bathtubs", "Commodes", "Urinals", "Washbasins", "Sanitary fixtures"], benefits: ["Fungus and mildew resistant", "ASTM G21 certified", "Excellent water resistance", "Ozone and UV resistant", "Suitable for humid conditions"],
    packSizes: ["280 ml cartridge"], colours: ["White"], shelfLife: "12 months in original packaging", storage: "Store in a dry, well-ventilated place below 30°C.", tdsUrl: "/documents/tds/resibond-nxt-sanitary-super-white-tds-july-2026.pdf", preparation: ["Remove old sealant, dirt, grease and contaminants; leave the joint clean and dry."], applicationSteps: ["Apply into the base of the joint, wetting both sides.", "Tool immediately and do not disturb for 24 hours after skin formation."], limitations: ["Not recommended for general glazing, zinc, brass, copper or polished surfaces such as mirrors.", "Do not apply if rain or frost is imminent."], related: ["bathmate", "kitchen-sink", "neutral-3010"]
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
  "Building perimeters": ["exterior joint", "perimeter joint", "building envelope"],
  "Countertop sealing": ["worktop sealing", "counter sealing", "kitchen counter"],
  "Electronic component sealing": ["electronics", "electrical components"],
  "Fixing": ["nail-free fixing", "wall decor fixing"],
  "Formed-in-place gaskets": ["gasket making", "gasket replacement", "engine flange"],
  "High-temperature sealing": ["heat resistant", "high temperature", "gasket sealing"],
  "Service penetration sealing": ["electrical cables", "cable trays", "conduits", "pipes", "penetrations"],
  "Interior bonding": ["indoor bonding", "interior adhesive"],
  "Louver installation": ["louvre", "louvers", "louver bonding", "decorative louver"],
  "Mirror installation": ["mirror backing", "back-coated glass", "mirror mounting"],
  "Mounting": ["wall panel", "panel fixing", "nail-free fixing", "decorative panel"],
  "Sanitary sealing": ["washbasin to wall", "basin sealing", "sanitary joint"],
  "Wall moulding": ["wall trim", "moulding fixing"],
  "Skirting installation": ["skirting board", "baseboard"],
  "Stone bonding": ["stone fixing", "stone adhesive"],
  "UPVC doors and windows": ["uPVC frames", "PVC windows"],
  "Window-frame sealing": ["window perimeter", "window sealing"],
  "Wood bonding": ["wood fixing", "wood adhesive"],
};
export const substrateAliases: Record<string, string[]> = {
  ACP: ["aluminium composite panel", "acp sheet"],
  Aluminium: ["aluminum"],
  "Anodized aluminium": ["anodised aluminium", "anodized aluminum"],
  "Aluminium roofing": ["aluminum roofing", "metal roofing"],
  "Artificial grass": ["turf", "synthetic grass"],
  Ceramic: ["ceramics", "tile", "tiles"],
  "Ceramic tiles": ["ceramic", "ceramics", "tile", "tiles"],
  "Countertops": ["countertop", "worktop", "kitchen counter"],
  "Door frames": ["doors", "door frame", "door perimeter"],
  "Electrical boards": ["electrical panel", "electrical board surround"],
  "Electrical cables": ["power cable", "cable penetration"],
  "Galvanized steel": ["galvanised steel", "GI", "GI sheet"],
  "Gypsum board": ["drywall", "plasterboard"],
  "MDF": ["medium density fibreboard", "medium density fiberboard"],
  "Particle board": ["particleboard", "chipboard"],
  "Stainless steel": ["SS", "stainless"],
  "Fire doors": ["fire-rated doors", "fire door assemblies"],
  "Fire windows": ["fire-rated windows", "fire window assemblies"],
  "Frame-to-wall joints": ["window to wall", "door to wall", "perimeter joint"],
  Louvers: ["louvres"],
  "Window frames": ["windows", "window frame", "window perimeter"],
  "Washbasins": ["wash basin", "basins"],
  UPVC: ["uPVC", "PVC window frame"],
};
export const productSearchAliases: Record<string, string[]> = {
  "gp-100": ["general purpose 100", "skirting"],
  "premium-gp-1010": ["gp 1010", "premium 1010", "skirting"],
  "turf-grass": ["truf grass", "artificial grass"],
  "zero-nail": ["louver", "louvre", "no nails"],
};
