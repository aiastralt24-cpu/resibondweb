const base = process.env.SITE_AUDIT_URL || "http://127.0.0.1:3000";
const strict = process.env.CONTENT_AUDIT_STRICT === "1";

async function text(path) {
  const response = await fetch(`${base}${path}`);
  if (!response.ok) throw new Error(`${path}: HTTP ${response.status}`);
  return response.text();
}

function decode(value = "") {
  return value.replaceAll("&amp;", "&").replaceAll("&quot;", '"').replaceAll("&#x27;", "'");
}

function heading(html) {
  return decode(html.match(/<h1(?:\s[^>]*)?>([\s\S]*?)<\/h1>/i)?.[1]?.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim() || "Unknown product");
}

const sitemap = await text("/sitemap.xml");
const productPaths = [...sitemap.matchAll(/<loc>[^<]+(\/products\/[^<]+)<\/loc>/g)].map((match) => match[1]);
const productChecks = await Promise.all(productPaths.map(async (path) => {
  const html = await text(path);
  return {
    path,
    product: heading(html),
    packImagePending: html.includes('data-pack-status="pending"'),
    specificationPending: html.includes("Specification pending"),
    tdsPending: html.includes("Pending official document"),
  };
}));

const contact = await text("/contact");
const blockers = [];
for (const product of productChecks) {
  if (product.packImagePending) blockers.push({ type: "product-pack-image", product: product.product, path: product.path });
  if (product.specificationPending) blockers.push({ type: "verified-specifications", product: product.product, path: product.path });
  if (product.tdsPending) blockers.push({ type: "official-tds", product: product.product, path: product.path });
}
if (contact.includes('type="button"') && contact.includes("Submission will be activated")) blockers.push({ type: "enquiry-endpoint", path: "/contact" });

const grouped = blockers.reduce((result, blocker) => {
  result[blocker.type] = (result[blocker.type] || 0) + 1;
  return result;
}, {});

console.log(JSON.stringify({
  base,
  productsAudited: productChecks.length,
  releaseReady: blockers.length === 0,
  blockersByType: grouped,
  blockers,
}, null, 2));

if (strict && blockers.length) process.exit(1);
