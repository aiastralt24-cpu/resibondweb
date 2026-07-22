import Link from "next/link";
import type { Product } from "@/lib/catalog";
import { ProductPack } from "./product-pack";

export function ProductCard({ product, context="catalogue", reason }: { product: Product; context?:"catalogue"|"finder"|"solution"|"related"|"homepage"; reason?:string }) {
  return (
    <article className="product-card">
      <Link className="product-image" href={`/products/${product.slug}`}>
        <ProductPack name={product.name} image={product.image} width={260} height={520} />
      </Link>
      <div className="product-card-copy">
        <div className="product-meta"><span>{product.chemistry}</span><span>{product.range}</span></div>
        <h2><Link href={`/products/${product.slug}`}>{product.name}</Link></h2>
        <p>{context==="finder"&&reason?reason:context==="solution"?`A ${product.chemistry.toLowerCase()} route for ${product.applications.slice(0,2).join(" and ").toLowerCase()}.`:context==="related"?`${product.chemistry} chemistry · ${product.environment.join(" and ").toLowerCase()} use.`:product.positioning}</p>
        <Link className="text-link" href={`/products/${product.slug}`}>View product <span aria-hidden>→</span></Link>
      </div>
    </article>
  );
}
