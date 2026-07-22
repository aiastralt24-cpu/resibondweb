"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links=[{href:"/products",label:"Products"},{href:"/solutions",label:"Solutions"},{href:"/substrates",label:"Substrates"},{href:"/product-finder",label:"Product Finder"},{href:"/about",label:"About"}];

export function SiteHeader() {
  const pathname=usePathname();
  const active=(href:string)=>pathname===href||pathname.startsWith(`${href}/`);
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Resibond home">
        <Image src="/assets/logos/resibond-logo-white-transparent.png" alt="Resibond" width={180} height={52} priority />
      </Link>
      <nav aria-label="Primary navigation">
        {links.map((link)=><Link key={link.href} className={active(link.href)?"active":""} aria-current={active(link.href)?"page":undefined} href={link.href}>{link.label}</Link>)}
      </nav>
      <details className="mobile-menu">
        <summary>Menu</summary>
        <div>
          {links.map((link)=><Link key={link.href} aria-current={active(link.href)?"page":undefined} href={link.href}>{link.label}</Link>)}
        </div>
      </details>
      <Link className="header-cta" href="/contact">Enquire <span aria-hidden>→</span></Link>
    </header>
  );
}
