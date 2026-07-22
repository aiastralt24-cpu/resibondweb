export type SolutionHub = {
  slug: string;
  name: string;
  shortName: string;
  title: string;
  description: string;
  intro: string;
  body: string;
  productSlugs: string[];
  applicationLabels: string[];
  considerations: Array<{ title: string; text: string }>;
  faqs: Array<{ q: string; a: string }>;
};

export const solutions: SolutionHub[] = [
  {
    slug: "bathrooms", name: "Bathroom Sealants & Adhesives", shortName: "Bathrooms",
    title: "Sealants and adhesives for bathrooms and wet areas",
    description: "Explore Resibond bathroom sealants for washbasins, sinks, sanitary joints, showers and wet-area gap filling.",
    intro: "Bathroom joints need more than a clean finish. They must resist moisture, accommodate small movements and remain easy to maintain around sanitary fixtures.",
    body: "Use this guide to compare Resibond routes for sanitary sealing, washbasin-to-wall gaps, kitchen sinks and related interior wet-area applications. Final selection depends on the fixture, adjoining surface, water exposure and required finish.",
    productSlugs: ["bathmate", "sanitary-super-white", "neutral-3010"],
    applicationLabels: ["Sanitary sealing", "Kitchen sink sealing", "Washbasin-to-wall gaps", "Shower units", "Toilets", "Washbasins"],
    considerations: [
      { title: "Moisture exposure", text: "Distinguish splash zones from joints exposed to prolonged or continuous water." },
      { title: "Mould resistance", text: "Choose a sanitary route where hygiene and resistance to fungal growth are important." },
      { title: "Fixture compatibility", text: "Confirm compatibility with ceramic, acrylic, metal, stone and sensitive finishes." },
    ],
    faqs: [
      { q: "Which Resibond product is suitable for bathroom gaps?", a: "Bathmate is mapped to washbasin, sink and interior gap-filling applications. Sanitary Super White and Neutral 3010 cover other sanitary or glazing-related routes. Confirm the final choice from the current TDS." },
      { q: "How long should a bathroom sealant cure before water exposure?", a: "Cure time depends on product, bead size and site conditions. Bathmate guidance calls for at least 24 hours before water exposure; always follow the current product TDS." },
      { q: "Can every bathroom sealant be used on stone?", a: "No. Natural stone and sensitive finishes may require a compatible neutral-cure product and prior testing. Review the product TDS before application." },
    ],
  },
  {
    slug: "doors-windows", name: "Door & Window Sealants", shortName: "Doors & windows",
    title: "Sealants for doors, windows and perimeter gaps",
    description: "Find Resibond sealants for UPVC windows, aluminium frames, sills, wall junctions and door or window perimeter gaps.",
    intro: "Door and window joints connect different materials while remaining exposed to movement, air leakage, rain and finishing requirements.",
    body: "This hub brings together product routes for UPVC frames, aluminium and glass junctions, window sills, plinths and frame-to-wall gaps. Match the sealant to the substrate, joint movement, exterior exposure and whether the finished joint must be painted.",
    productSlugs: ["doors-windows", "gp-100", "premium-gp-1010", "neutral-3010"],
    applicationLabels: ["UPVC doors and windows", "Window sills and plinths", "Window-frame sealing", "Window-to-wall joints", "Air-conditioner edge gaps"],
    considerations: [
      { title: "Frame material", text: "Identify UPVC, aluminium, coated metal, wood, glass and surrounding masonry." },
      { title: "Movement and exposure", text: "Exterior perimeters need a product suited to weather and joint movement." },
      { title: "Paintable finish", text: "Use an appropriate acrylic route when the cured joint needs to accept paint." },
    ],
    faqs: [
      { q: "What sealant should be used around UPVC windows?", a: "Doors & Windows is mapped to UPVC frame and masonry gaps, while Neutral 3010 covers additional UPVC and glazing routes. Exposure and joint movement determine final suitability." },
      { q: "Can window perimeter sealant be painted?", a: "Doors & Windows is a paintable acrylic route. Silicone products generally require different finishing expectations, so check the relevant TDS." },
      { q: "Which product is used between a window frame and wall?", a: "GP 100, Premium GP 1010 and Doors & Windows are associated with different frame and wall-junction applications. Select according to frame material, exposure and finish." },
    ],
  },
  {
    slug: "glazing", name: "Glazing Sealants", shortName: "Glazing",
    title: "Glazing sealants for glass, frames and façades",
    description: "Compare Resibond glazing sealants for glass-to-glass, glass-to-frame, mirrors, curtain walls and exterior glazing joints.",
    intro: "Glazing joints demand reliable adhesion, a controlled bead profile and compatibility with glass, frames, coatings and adjoining façade materials.",
    body: "Explore neutral, acetoxy and specialist glazing routes for interior glass, mirrors, window frames and exposed façade joints. Structural or movement-critical glazing must always follow verified project documentation and the current technical data sheet.",
    productSlugs: ["neutral-3010", "weather-5010", "premium-gp-1010"],
    applicationLabels: ["Glazing", "Exterior glazing", "Glass-to-frame sealing", "Glass-to-glass joints", "Glass-to-metal frames", "Curtain walls", "Mirrors"],
    considerations: [
      { title: "Glass and coating compatibility", text: "Test adhesion and avoid chemistry that can affect sensitive coatings or finishes." },
      { title: "Interior or exterior", text: "Weather-facing glazing needs UV, water and movement performance suited to exposure." },
      { title: "Joint function", text: "Differentiate weather sealing, perimeter glazing and engineered structural applications." },
    ],
    faqs: [
      { q: "Which Resibond silicone is used for exterior glazing?", a: "Weather 5010 is mapped to exterior glazing and façade weather sealing. Neutral 3010 and other glazing products address different substrates and conditions." },
      { q: "Can acetoxy silicone be used on every glazing frame?", a: "No. Acetoxy chemistry may not suit sensitive metals, coatings or substrates. Confirm compatibility using the current TDS and an adhesion test." },
    ],
  },
  {
    slug: "weatherproofing", name: "Weatherproofing Sealants", shortName: "Weatherproofing",
    title: "Exterior sealants for weatherproof joints",
    description: "Discover Resibond exterior sealants for ACP joints, curtain walls, façades, building perimeters and exposed glazing.",
    intro: "Exterior joints must manage rain, sunlight, temperature changes and movement without losing adhesion or allowing water into the building envelope.",
    body: "This guide connects weatherproofing applications with Resibond products for ACP, glazing, curtain walls and building perimeters. Joint design, backing material, primer requirements and movement capability must be verified before specification.",
    productSlugs: ["weather-5010", "neutral-3010", "hybrid-2-in-1", "gp-100"],
    applicationLabels: ["Weatherproofing", "Building perimeters", "Exterior glazing", "Curtain walls", "ACP joints"],
    considerations: [
      { title: "UV and rain exposure", text: "Use a route intended for persistent weather and sunlight exposure." },
      { title: "Joint movement", text: "Allow for thermal movement, façade deflection and the specified joint geometry." },
      { title: "Substrate preparation", text: "Confirm cleaning, backing, masking and primer requirements for every interface." },
    ],
    faqs: [
      { q: "Which Resibond sealant is intended for weatherproofing?", a: "Weather 5010 is the primary mapped route for exterior weather sealing, façades, curtain walls and exposed glazing." },
      { q: "Can general-purpose silicone be used for façade joints?", a: "Do not assume general-purpose products meet façade movement or durability requirements. Use a product and joint design verified for the actual exposure." },
      { q: "Does every exterior joint require primer?", a: "Primer requirements vary by product and substrate. Conduct an adhesion assessment and follow the latest TDS and project specification." },
    ],
  },
  {
    slug: "mounting-bonding", name: "Mounting & Bonding Adhesives", shortName: "Mounting & bonding",
    title: "Mounting and bonding adhesives for interior and exterior fixing",
    description: "Find Resibond adhesives for mounting mirrors, panels, stone, wood, metal, tiles and mixed construction materials.",
    intro: "A successful mounting bond depends on more than grab strength. Substrate condition, load, bead layout, cure time and temporary support all influence performance.",
    body: "Compare hybrid and construction-adhesive routes for panels, mirrors, joinery and mixed-material fixing. Adhesives reduce visible fasteners in suitable applications, but they do not automatically replace mechanical support for structural or safety-critical loads.",
    productSlugs: ["hybrid-2-in-1", "zero-nail", "saves-nails", "mirror-mount"],
    applicationLabels: ["Mounting", "Fixing", "Mirror installation", "Interior bonding", "Joinery", "Bonding"],
    considerations: [
      { title: "Load and support", text: "Assess item weight, leverage and the need for temporary or permanent mechanical restraint." },
      { title: "Porous and non-porous surfaces", text: "Cure behaviour and adhesion vary across stone, wood, metal, glass, tiles and coated panels." },
      { title: "Bead layout", text: "Use the documented bead pattern so moisture can escape and the bond develops evenly." },
    ],
    faqs: [
      { q: "Which Resibond adhesive can mount panels without nails?", a: "Zero Nail and Saves Nails are mapped to fixing applications, while Hybrid 2 in 1 covers broader sealing and bonding work. Load and substrate determine final selection." },
      { q: "Can mounting adhesive be used for mirrors?", a: "Only use a product confirmed compatible with the mirror backing. Zero Nail and Mirror Mount are associated with mirror routes, subject to current technical guidance." },
      { q: "Do heavy items need temporary support?", a: "Yes. Heavy or safety-critical items may need temporary support during cure and permanent mechanical restraint depending on the load and application." },
    ],
  },
];

export const solutionBySlug = (slug: string) => solutions.find((solution) => solution.slug === slug);
