export type SelectorApplication = "Bonding" | "Gap filling - interior" | "Gap filling - exterior";

export type SelectorCombination = {
  surface1: string;
  surface2: string;
  application: SelectorApplication;
  recommendations: string[];
};

const row = (surface1: string, surface2: string, application: SelectorApplication, ...recommendations: string[]): SelectorCombination => ({
  surface1,
  surface2,
  application,
  recommendations,
});

// Imported from Website content.xlsx / Combination. Product labels are kept
// distinct from the website catalogue so GP 1010 is not merged into Premium GP 1010.
export const selectorCombinations: SelectorCombination[] = [
  row("Metal", "Louvers", "Bonding", "Hybrid 2 in 1", "Zero Nail", "Saves Nails"),
  row("Metal", "Stone", "Bonding", "Hybrid 2 in 1", "Zero Nail", "Saves Nails"),
  row("Metal", "WPC", "Bonding", "Hybrid 2 in 1", "Zero Nail", "Saves Nails"),
  row("Metal", "Concrete", "Bonding", "Hybrid 2 in 1", "Zero Nail", "Saves Nails"),
  row("Metal", "Ceramics", "Bonding", "Hybrid 2 in 1", "Zero Nail", "Saves Nails"),
  row("Metal", "Glass - back coated", "Bonding", "Mirror Mount", "Neutral 3010", "Hybrid 2 in 1"),
  row("Glass", "Wood", "Bonding", "Hybrid 2 in 1", "Neutral 3010", "Zero Nail"),
  row("Glass", "MDF", "Bonding", "Hybrid 2 in 1", "Neutral 3010", "Zero Nail"),
  row("Glass", "Plywood", "Bonding", "Hybrid 2 in 1", "Neutral 3010", "Zero Nail"),
  row("Glass", "HDHMR", "Bonding", "Hybrid 2 in 1", "Neutral 3010", "Zero Nail"),
  row("Glass", "Louvers", "Bonding", "Hybrid 2 in 1", "Neutral 3010", "Zero Nail"),
  row("Glass", "Stone", "Bonding", "Zero Nail", "Saves Nails"),
  row("Wood", "Stone", "Bonding", "Zero Nail", "Saves Nails"),
  row("Wood", "Concrete", "Bonding", "Zero Nail", "Saves Nails"),
  row("Wood", "Ceramics", "Bonding", "Zero Nail", "Saves Nails"),
  row("Wood", "Glass - back coated", "Bonding", "Zero Nail", "Mirror Mount", "Neutral 3010"),
  row("Acrylic", "Stone", "Bonding", "Zero Nail", "Mirror Mount", "Neutral 3010"),
  row("Acrylic", "Ceramics", "Bonding", "Zero Nail", "Mirror Mount", "Neutral 3010"),
  row("Metal", "Metal", "Gap filling - interior", "Hybrid 2 in 1", "Neutral 3010", "Premium GP 1010"),
  row("Metal", "Glass", "Gap filling - interior", "Hybrid 2 in 1", "Neutral 3010", "Premium GP 1010", "GP 100"),
  row("Metal", "Wood", "Gap filling - interior", "Hybrid 2 in 1", "Neutral 3010", "Premium GP 1010", "GP 100"),
  row("Metal", "Acrylic", "Gap filling - interior", "Hybrid 2 in 1", "Neutral 3010", "Premium GP 1010"),
  row("Metal", "MDF", "Gap filling - interior", "Hybrid 2 in 1", "Neutral 3010", "Premium GP 1010", "GP 100"),
  row("Metal", "Plywood", "Gap filling - interior", "Hybrid 2 in 1", "Neutral 3010", "Premium GP 1010", "GP 100"),
  row("Metal", "HDHMR", "Gap filling - interior", "Hybrid 2 in 1", "Neutral 3010", "Premium GP 1010", "GP 100"),
  row("Metal", "Louvers", "Gap filling - interior", "Hybrid 2 in 1", "Neutral 3010", "Premium GP 1010", "GP 100"),
  row("Metal", "Stone", "Gap filling - interior", "Hybrid 2 in 1", "Neutral 3010", "Premium GP 1010", "GP 100"),
  row("Metal", "Concrete", "Gap filling - interior", "Hybrid 2 in 1", "Neutral 3010", "Premium GP 1010", "GP 100"),
  row("Metal", "Ceramics", "Gap filling - interior", "Hybrid 2 in 1", "Neutral 3010", "Premium GP 1010", "GP 100"),
  row("Glass", "Glass", "Gap filling - interior", "Neutral 3010", "Premium GP 1010", "GP 100"),
  row("Glass", "Wood", "Gap filling - interior", "GP 100", "Neutral 3010", "Premium GP 1010"),
  row("Wood", "Wood", "Gap filling - interior", "Hybrid 2 in 1", "Neutral 3010", "Premium GP 1010"),
  row("Wood", "Stone", "Gap filling - interior", "Hybrid 2 in 1", "Neutral 3010", "Premium GP 1010", "GP 100"),
  row("Wood", "Concrete", "Gap filling - interior", "Hybrid 2 in 1", "Neutral 3010", "Premium GP 1010", "GP 100"),
  row("MDF", "MDF", "Gap filling - interior", "Hybrid 2 in 1", "Neutral 3010", "Premium GP 1010", "GP 100"),
  row("MDF", "Stone", "Gap filling - interior", "Hybrid 2 in 1", "Neutral 3010", "Premium GP 1010", "GP 100"),
  row("MDF", "Concrete", "Gap filling - interior", "Hybrid 2 in 1", "Neutral 3010", "Premium GP 1010", "GP 100"),
  row("MDF", "Ceramics", "Gap filling - interior", "Hybrid 2 in 1", "Neutral 3010", "Premium GP 1010", "GP 100"),
  row("Plywood", "Ceramics", "Gap filling - interior", "Hybrid 2 in 1", "Neutral 3010", "Premium GP 1010"),
  row("Plywood", "Glass - back coated", "Gap filling - interior", "Hybrid 2 in 1", "Neutral 3010", "Premium GP 1010"),
  row("Stone", "Stone", "Gap filling - interior", "Hybrid 2 in 1", "Neutral 3010", "Premium GP 1010", "GP 100"),
  row("Stone", "Concrete", "Gap filling - interior", "Hybrid 2 in 1", "Neutral 3010", "Premium GP 1010", "GP 100"),
  row("Stone", "Ceramics", "Gap filling - interior", "Sanitary Super White", "Neutral 3010", "Premium GP 1010"),
  row("Concrete", "Concrete", "Gap filling - interior", "Hybrid 2 in 1", "Doors & Windows"),
  row("Concrete", "Ceramics", "Gap filling - interior", "Sanitary Super White", "Neutral 3010", "Premium GP 1010"),
  row("Metal", "Metal", "Gap filling - exterior", "Weather 5010", "Hybrid 2 in 1"),
  row("Metal", "Glass", "Gap filling - exterior", "Weather 5010", "Hybrid 2 in 1"),
  row("Metal", "Wood", "Gap filling - exterior", "Weather 5010", "Hybrid 2 in 1"),
  row("Metal", "Stone", "Gap filling - exterior", "Weather 5010", "Hybrid 2 in 1"),
  row("Metal", "Concrete", "Gap filling - exterior", "Weather 5010", "Hybrid 2 in 1"),
  row("Metal", "Ceramics", "Gap filling - exterior", "Weather 5010", "Hybrid 2 in 1"),
  row("Glass", "Glass", "Gap filling - exterior", "Weather 5010"),
  row("Wood", "Wood", "Gap filling - exterior", "Weather 5010", "Hybrid 2 in 1"),
  row("Wood", "Concrete", "Gap filling - exterior", "Weather 5010", "Hybrid 2 in 1"),
  row("Concrete", "Concrete", "Gap filling - exterior", "Weather 5010", "Hybrid 2 in 1"),
  row("Concrete", "Ceramics", "Gap filling - exterior", "Weather 5010", "Hybrid 2 in 1"),
  row("Ceramics", "Ceramics", "Gap filling - exterior", "Weather 5010", "Hybrid 2 in 1"),
  row("Ceramics", "Glass - back coated", "Gap filling - exterior", "Weather 5010", "Hybrid 2 in 1"),
  row("Glass - back coated", "Glass - back coated", "Gap filling - exterior", "Weather 5010", "Hybrid 2 in 1"),
  row("Wash Basin", "Concrete wall", "Gap filling - exterior", "Sanitary Super White", "Bathmate"),
];

export const selectorProductSlugs: Record<string, string> = {
  "Bathmate": "bathmate",
  "Doors & Windows": "doors-windows",
  "GP 100": "gp-100",
  "Hybrid 2 in 1": "hybrid-2-in-1",
  "Mirror Mount": "mirror-mount",
  "Neutral 3010": "neutral-3010",
  "Premium GP 1010": "premium-gp-1010",
  "Sanitary Super White": "sanitary-super-white",
  "Saves Nails": "saves-nails",
  "Weather 5010": "weather-5010",
  "Zero Nail": "zero-nail",
};
