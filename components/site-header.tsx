"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links=[{href:"/products",label:"Products"},{href:"/solutions",label:"Solutions"},{href:"/substrates",label:"Substrates"},{href:"/product-finder",label:"Product Finder"},{href:"/about",label:"About"}];

export function SiteHeader() {
  const pathname=usePathname();
  const [menuOpen,setMenuOpen]=useState(false);
  const active=(href:string)=>pathname===href||pathname.startsWith(`${href}/`);
  useEffect(()=>setMenuOpen(false),[pathname]);
  useEffect(()=>{
    if(!menuOpen)return;
    const close=(event:KeyboardEvent)=>{if(event.key==="Escape")setMenuOpen(false)};
    document.addEventListener("keydown",close);
    return()=>document.removeEventListener("keydown",close);
  },[menuOpen]);
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Resibond home">
        <Image src="/assets/logos/resibond-logo-white-transparent.png" alt="Resibond" width={180} height={52} priority />
      </Link>
      <nav aria-label="Primary navigation">
        {links.map((link)=><Link key={link.href} className={active(link.href)?"active":""} aria-current={active(link.href)?"page":undefined} href={link.href}>{link.label}</Link>)}
      </nav>
      <div className={`mobile-menu ${menuOpen?"open":""}`}>
        <button className="mobile-menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={()=>setMenuOpen((value)=>!value)}>{menuOpen?"Close":"Menu"}</button>
        {menuOpen?<><button className="mobile-menu-backdrop" type="button" aria-label="Close menu" onClick={()=>setMenuOpen(false)}/><nav id="mobile-navigation" aria-label="Mobile navigation">{links.map((link)=><Link key={link.href} aria-current={active(link.href)?"page":undefined} href={link.href} onClick={()=>setMenuOpen(false)}>{link.label}</Link>)}</nav></>:null}
      </div>
      <Link className="header-cta" href="/contact">Enquire <span aria-hidden>→</span></Link>
    </header>
  );
}
