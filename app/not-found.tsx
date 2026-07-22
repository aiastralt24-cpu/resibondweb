import Link from "next/link";

export default function NotFound() {
  return <section className="not-found"><span className="section-index">404 / Page not found</span><h1>This joint does not connect.</h1><p>The page may have moved, or the address may be incomplete. Continue with the product catalogue or guided finder.</p><div className="actions"><Link className="button primary" href="/products">Explore products →</Link><Link className="button secondary" href="/product-finder">Use product finder →</Link></div></section>;
}
