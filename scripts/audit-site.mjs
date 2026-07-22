const base = process.env.SITE_AUDIT_URL || "http://127.0.0.1:3000";
const errors = [];
const warnings = [];

function matches(html, pattern) {
  return [...html.matchAll(pattern)].map((match) => match[1] ?? match[0]);
}

function decode(value = "") {
  return value.replaceAll("&amp;", "&").replaceAll("&quot;", '"').replaceAll("&#x27;", "'").replaceAll("&lt;", "<").replaceAll("&gt;", ">");
}

async function fetchText(url) {
  const response = await fetch(url, { redirect: "manual" });
  return { response, text: await response.text() };
}

function auditHtml(url, html) {
  const path = new URL(url).pathname;
  const titles = matches(html, /<title[^>]*>([^<]+)<\/title>/gi);
  const descriptions = matches(html, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["'][^>]*>/gi);
  const canonicals = matches(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["'][^>]*>/gi);
  const h1s = matches(html, /<h1(?:\s[^>]*)?>([\s\S]*?)<\/h1>/gi);
  const images = [...html.matchAll(/<img\s([^>]+)>/gi)].map((match) => match[1]);
  const robots = matches(html, /<meta[^>]+name=["']robots["'][^>]+content=["']([^"']+)["'][^>]*>/gi);

  if (titles.length !== 1 || decode(titles[0]).trim().length < 12) errors.push(`${path}: expected one descriptive title`);
  if (descriptions.length !== 1 || decode(descriptions[0]).trim().length < 50) errors.push(`${path}: expected one meta description of at least 50 characters`);
  if (canonicals.length !== 1) errors.push(`${path}: expected one canonical link`);
  if (h1s.length !== 1) errors.push(`${path}: expected exactly one H1, found ${h1s.length}`);
  for (const attributes of images) {
    const alt = attributes.match(/\balt=["']([^"']*)["']/i)?.[1];
    if (alt === undefined || !decode(alt).trim()) errors.push(`${path}: image missing meaningful alt text`);
  }
  if (!html.includes('id="main-content"') || !html.includes('href="#main-content"')) errors.push(`${path}: skip-link/main landmark pair missing`);
  if (robots.some((value) => value.toLowerCase().includes("noindex"))) errors.push(`${path}: sitemap URL is marked noindex`);

  const schemaTypes = new Set(matches(html, /["']@type["']\s*:\s*["']([^"']+)["']/gi));
  if (path.startsWith("/products/") && !schemaTypes.has("Product")) errors.push(`${path}: Product schema missing`);
  if ((path.startsWith("/applications/") || path.startsWith("/substrates/")) && !schemaTypes.has("ItemList")) errors.push(`${path}: ItemList schema missing`);
  if ((path.startsWith("/products/") || path.startsWith("/applications/") || path.startsWith("/substrates/")) && !schemaTypes.has("FAQPage")) errors.push(`${path}: FAQPage schema missing`);
  if ((path.startsWith("/products/") || path.startsWith("/applications/") || path.startsWith("/substrates/") || path.startsWith("/chemistries/")) && !schemaTypes.has("BreadcrumbList")) errors.push(`${path}: BreadcrumbList schema missing`);
}

const sitemapResult = await fetchText(`${base}/sitemap.xml`);
if (!sitemapResult.response.ok) throw new Error(`Unable to read sitemap: ${sitemapResult.response.status}`);
const urls = matches(sitemapResult.text, /<loc>([^<]+)<\/loc>/g).map(decode);
if (urls.length < 60) errors.push(`Sitemap unexpectedly small: ${urls.length} URLs`);
if (new Set(urls).size !== urls.length) errors.push("Sitemap contains duplicate URLs");

const concurrency = 10;
for (let index = 0; index < urls.length; index += concurrency) {
  const batch = urls.slice(index, index + concurrency);
  const results = await Promise.all(batch.map(async (url) => ({ url, ...(await fetchText(url)) })));
  for (const { url, response, text } of results) {
    if (response.status !== 200) {
      errors.push(`${new URL(url).pathname}: HTTP ${response.status}`);
      continue;
    }
    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("text/html")) {
      errors.push(`${new URL(url).pathname}: expected HTML, received ${contentType}`);
      continue;
    }
    auditHtml(url, text);
  }
}

const noindexRoutes = ["/about", "/certificates", "/technical-data-sheets", "/projects", "/application-videos", "/events", "/gallery", "/testimonials", "/store-locator", "/compare"];
for (const route of noindexRoutes) {
  const { response, text } = await fetchText(`${base}${route}`);
  if (response.status !== 200) errors.push(`${route}: HTTP ${response.status}`);
  if (!/<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(text)) errors.push(`${route}: expected noindex metadata`);
  if (urls.some((url) => new URL(url).pathname === route)) errors.push(`${route}: noindex route leaked into sitemap`);
}

const contact = await fetchText(`${base}/contact?product=neutral-3010&source=audit`);
if (!contact.text.includes('value="neutral-3010"') || !contact.text.includes('value="audit"')) warnings.push("Contact attribution inputs were not visible in server HTML; verify after hydration.");

console.log(JSON.stringify({ base, auditedSitemapUrls: urls.length, errors, warnings }, null, 2));
if (errors.length) process.exit(1);
