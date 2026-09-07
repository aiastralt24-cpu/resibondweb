export type TechnicalDatum = { label: string; value: string; standard?: string };

export type ProductTechnicalProfile = {
  version: string;
  issueDate: string;
  storage: string;
  shelfLife: string;
  data: TechnicalDatum[];
  certifications?: string[];
  coverage?: string;
  restrictions: string[];
  handling?: string[];
};

const commonStorage = "Store in a dry, well-ventilated place below 30°C.";
const datum = (label: string, value: string, standard?: string): TechnicalDatum => ({ label, value, ...(standard ? { standard } : {}) });

export const technicalProfiles: Record<string, ProductTechnicalProfile> = {
  "bathmate": {
    version: "01", issueDate: "05 June 2026", storage: commonStorage, shelfLife: "18 months in original packaging",
    data: [datum("Paste density", "1.40-1.55 g/cc", "ASTM D 1475"), datum("Skin formation", "5-10 min"), datum("Tack-free time", "60 min", "ASTM C 679-15"), datum("Elongation", ">500%", "ASTM D 412"), datum("Hardness", "Shore A 35-45", "ASTM D 2240"), datum("Tensile strength", ">3 kg/cm²", "ASTM D 412")],
    certifications: ["ASTM G21 certified"], restrictions: ["Do not use in continuous water immersion.", "Do not apply if rain or frost is imminent."],
  },
  "doors-windows": {
    version: "01", issueDate: "05 June 2026", storage: commonStorage, shelfLife: "18 months in original packaging",
    data: [datum("Paste density", "1.45-1.55 g/cc", "ASTM D 1475"), datum("Skin formation", "5-10 min"), datum("Tack-free time", "120 min", "ASTM C 679-15"), datum("Elongation", ">500%", "ASTM D 412"), datum("Hardness", "Shore A 40-55", "ASTM D 2240"), datum("Tensile strength", ">3 kg/cm²", "ASTM D 412")],
    restrictions: ["Do not use in continuous water immersion.", "Do not apply if rain or frost is imminent."],
  },
  "gp-100": {
    version: "01", issueDate: "05 June 2026", storage: commonStorage, shelfLife: "12 months in original packaging",
    data: [datum("Paste density", "0.93-0.95 g/cc", "ASTM D 1475"), datum("Skin formation", "3-5 min"), datum("Tack-free time", "15-30 min", "ASTM C 679-15"), datum("Elongation", ">300%", "ASTM D 412"), datum("Hardness", "Shore A 16-20", "ASTM D 2240"), datum("Tensile strength", ">8 kg/cm²", "ASTM D 412"), datum("Service temperature", "-20°C to 150°C")],
    certifications: ["RoHS compliant"], restrictions: ["Not recommended for general glazing applications.", "Not recommended on zinc, brass, copper or polished surfaces such as mirrors."],
  },
  "premium-gp-1010": {
    version: "01", issueDate: "05 June 2026", storage: commonStorage, shelfLife: "12 months in original packaging",
    data: [datum("Paste density", "0.94-0.98 g/cc", "ASTM D 1475"), datum("Skin formation", "4-8 min"), datum("Tack-free time", "20-40 min", "ASTM C 679-15"), datum("Elongation", ">350%", "ASTM D 412"), datum("Hardness", "Shore A 18-24", "ASTM D 2240"), datum("Tensile strength", ">10 kg/cm²", "ASTM D 412"), datum("Service temperature", "-20°C to 150°C")],
    certifications: ["RoHS compliant"], restrictions: ["Not recommended for general glazing applications.", "Not recommended on zinc, brass, copper or polished surfaces such as mirrors."],
  },
  "hybrid-2-in-1": {
    version: "01", issueDate: "05 June 2026", storage: commonStorage, shelfLife: "12 months in original packaging",
    data: [datum("Paste density", "1.45-1.55 g/cc", "ASTM D 1475"), datum("Skin formation", "20-22 min"), datum("Tack-free time", "15 hrs", "ASTM C 679-15"), datum("Elongation", "300-700%", "ASTM D 412"), datum("Hardness", "Shore A 35-50", "ASTM D 2240"), datum("Tensile strength", ">15 kg/cm²", "ASTM D 412")],
    restrictions: ["Test adhesion on difficult or coated substrates.", "Surface temperatures above 50°C may cause rapid cure or bubbles; temperatures below 5°C may slow curing."],
  },
  "kitchen-sink": {
    version: "02", issueDate: "11 April 2025", storage: commonStorage, shelfLife: "18 months in original packaging",
    data: [datum("Paste density", "1.40-1.55 g/cc", "ASTM D 1475"), datum("Skin formation", "5-10 min"), datum("Tack-free time", "60 min", "ASTM C 679-15"), datum("Elongation", ">500%", "ASTM D 412"), datum("Hardness", "Shore A 35-45", "ASTM D 2240"), datum("Tensile strength", ">3 kg/cm²", "ASTM D 412")],
    restrictions: ["Do not use in continuous water immersion.", "Do not apply if rain or frost is imminent."],
  },
  "neutral-3010": {
    version: "01", issueDate: "05 June 2026", storage: commonStorage, shelfLife: "12 months in original packaging",
    data: [datum("Paste density", "Clear/Grey: 0.98-1.020 g/cc; Black/White: 1.25-1.35 g/cc", "ASTM D 1475"), datum("Elongation", ">400%", "ASTM D 412"), datum("Service temperature", "-40°C to 200°C")],
    certifications: ["RoHS compliant", "Non-toxic certified"], restrictions: ["Not recommended for structural glazing applications."],
  },
  "saves-nails": {
    version: "01", issueDate: "05 June 2026", storage: commonStorage, shelfLife: "12 months in original packaging",
    data: [datum("Paste density", "1.300-1.400 g/cc", "ASTM D 1475"), datum("Skin formation", "10-15 sec"), datum("Hardness", "Shore A 70-80", "ASTM D 2240"), datum("Lap shear strength", ">15 kg/cm²", "ASTM D 1002-10")],
    restrictions: ["Keep away from flames and ignition sources above the flash point.", "Plasticiser migration may occur with some PVC materials.", "Solvent may affect veneer plywood.", "Do not use where continued elevated-temperature exposure will occur."],
  },
  "thermoseal": {
    version: "01", issueDate: "05 June 2026", storage: commonStorage, shelfLife: "12 months in original packaging",
    data: [datum("Paste density", "1.0-1.1 g/cc", "ASTM D 1475"), datum("Skin formation", "15-20 min"), datum("Tack-free time", "180 min", "ASTM C 679-15"), datum("Elongation", ">600%", "ASTM D 412"), datum("Hardness", "Shore A 18-24", "ASTM D 2240"), datum("Tensile strength", ">10 kg/cm²", "ASTM D 412"), datum("Continuous exposure", "Up to 250°C"), datum("Intermittent exposure", "Up to 310°C")],
    restrictions: ["Do not use where continuous contact with gasoline, synthetic fuels or solvents is expected."],
  },
  "weather-5010": {
    version: "01", issueDate: "05 June 2026", storage: commonStorage, shelfLife: "12 months in original packaging",
    data: [datum("Paste density", "Clear: 0.99-1.1 g/cc; other colours: 1.35-1.45 g/cc", "ASTM D 1475"), datum("Skin formation", "20-30 min"), datum("Tack-free time", "180 min", "ASTM C 679-15"), datum("Elongation", ">600%", "ASTM D 412"), datum("Hardness", "Shore A 18-25", "ASTM D 2240"), datum("Tensile strength", ">10 kg/cm²", "ASTM D 412"), datum("Service temperature", "-40°C to 200°C")],
    restrictions: ["Not recommended for structural bonding."],
  },
  "zero-nail": {
    version: "01", issueDate: "05 June 2026", storage: commonStorage, shelfLife: "12 months in original packaging",
    data: [datum("Paste density", "1.40-1.55 g/cc", "ASTM D 1475"), datum("Skin formation", "20 min"), datum("Elongation", "<200%", "ASTM D 412"), datum("Hardness", "Shore A 50-60", "ASTM D 2240"), datum("Tensile strength", ">20 kg/cm²", "ASTM D 412"), datum("Hanging load capacity", "Up to 100 kg per 6 cm²")],
    restrictions: ["Not for high-temperature applications such as gasketing.", "Consult the TDS restrictions before use on PE, PP, PTFE, polycarbonate, silicone rubber or bituminous substrates."],
  },
  "duct-seal": {
    version: "01", issueDate: "10 June 2026", storage: commonStorage, shelfLife: "18 months in original packaging",
    data: [datum("Paste density", "1.40-1.55 g/cc", "ASTM D 1475"), datum("Skin formation", "5-10 min"), datum("Tack-free time", "120 min", "ASTM C 679-15"), datum("Elongation", ">500%", "ASTM D 412"), datum("Hardness", "Shore A 30-35", "ASTM D 2240"), datum("Tensile strength", ">3 kg/cm²", "ASTM D 412")],
    restrictions: ["Do not use in continuous water immersion.", "Do not apply if rain or frost is imminent."],
  },
  "fireshield": {
    version: "01", issueDate: "10 June 2026", storage: commonStorage, shelfLife: "18 months in original packaging",
    data: [datum("Paste density", "1.45-1.60 g/cc", "ASTM D 1475"), datum("Skin formation", "5-10 min"), datum("Tack-free time", "120 min", "ASTM C 679-15"), datum("Elongation", ">100%", "ASTM D 412"), datum("Hardness", "Shore A 14-18", "ASTM D 2240"), datum("Tensile strength", ">3 kg/cm²", "ASTM D 412")],
    certifications: ["BS 476-20: four-hour fire-rated, subject to the tested system specification"], restrictions: ["Do not use in continuous water immersion.", "Do not apply if rain or frost is imminent.", "A product name alone does not establish a system fire rating."],
  },
  "mirror-mount": {
    version: "01", issueDate: "10 June 2026", storage: commonStorage, shelfLife: "12 months in original packaging",
    data: [datum("Paste density", "1.5-1.6 g/cc", "ASTM D 1475"), datum("Skin formation", "20-22 min"), datum("Tack-free time", "8 hrs", "ASTM C 679-15"), datum("Elongation", "250-500%", "ASTM D 412"), datum("Hardness", "Shore A 35-50", "ASTM D 2240"), datum("Tensile strength", ">15 kg/cm²", "ASTM D 412")],
    restrictions: ["Not recommended for structural glazing.", "Test adhesion to the plastic film on safety mirrors before use."], handling: ["Apply 10 mm vertical strips at 100 mm intervals.", "Maintain approximately 2 mm bead thickness.", "Support the mirror for at least 24 hours and keep edges ventilated."],
  },
  "sanitary-super-white": {
    version: "01", issueDate: "10 June 2026", storage: commonStorage, shelfLife: "12 months in original packaging",
    data: [datum("Paste density", "0.94-0.98 g/cc", "ASTM D 1475"), datum("Skin formation", "4-8 min"), datum("Tack-free time", "15-30 min", "ASTM C 679-15"), datum("Elongation", ">350%", "ASTM D 412"), datum("Hardness", "Shore A 18-24", "ASTM D 2240"), datum("Tensile strength", ">12 kg/cm²", "ASTM D 412")],
    certifications: ["ASTM G21 certified"], restrictions: ["Not recommended for general glazing applications.", "Not recommended on zinc, brass, copper or polished surfaces such as mirrors.", "Do not apply if rain or frost is imminent."],
  },
  "turf-grass": {
    version: "01", issueDate: "10 June 2026", storage: commonStorage, shelfLife: "12 months in original packaging",
    data: [datum("Paste density", "1.50-1.60 g/cc", "ASTM D 1475"), datum("Skin formation", "20-30 min"), datum("Tack-free time", "15 hrs", "ASTM C 679-15"), datum("Elongation", "150-200%", "ASTM D 412"), datum("Hardness", "Shore A 40-45", "ASTM D 2240"), datum("Lap shear strength", "15-19 kg/cm²", "ASTM D 1002")],
    coverage: "Approximately 4 linear metres of jointing tape per cartridge on a typical seam.", restrictions: ["Remove uncured excess with white spirit or suitable wipes; cured adhesive must be removed mechanically."],
  },
};
