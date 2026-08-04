import Link from "next/link";

export type BreadcrumbItem = { label: string; href?: string };

export function Breadcrumbs({
  items,
  backHref,
  backLabel,
}: {
  items: BreadcrumbItem[];
  backHref: string;
  backLabel: string;
}) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link className="breadcrumb-back" href={backHref}>← Back to {backLabel}</Link>
      <ol>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`}>
            {item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
