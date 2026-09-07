"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links=[{href:"/products",label:"Products"},{href:"/solutions",label:"Solutions"},{href:"/substrates",label:"Substrates"},{href:"/product-finder",label:"Product Finder"},{href:"/about",label:"About"}];

export function SiteHeader() {
  const pathname=usePathname();
  const [menuOpen,setMenuOpen]=useState(false);
  const menuButtonRef=useRef<HTMLButtonElement>(null);
  const closeButtonRef=useRef<HTMLButtonElement>(null);
  const active=(href:string)=>pathname===href||pathname.startsWith(`${href}/`);
  useEffect(()=>setMenuOpen(false),[pathname]);
  useEffect(()=>{
    if(!menuOpen)return;
    const previousOverflow=document.body.style.overflow;
    document.body.style.overflow="hidden";
    closeButtonRef.current?.focus();
    const close=(event:KeyboardEvent)=>{if(event.key==="Escape"){setMenuOpen(false);menuButtonRef.current?.focus();}};
    document.addEventListener("keydown",close);
    return()=>{document.body.style.overflow=previousOverflow;document.removeEventListener("keydown",close);};
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
        <button ref={menuButtonRef} className="mobile-menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={()=>setMenuOpen(true)}>Menu</button>
        {menuOpen?<nav id="mobile-navigation" aria-label="Mobile navigation">
          <div className="mobile-menu-header">
            <Link href="/" aria-label="Resibond home" onClick={()=>setMenuOpen(false)}><Image src="/assets/logos/resibond-logo-white-transparent.png" alt="Resibond" width={180} height={52} /></Link>
            <button ref={closeButtonRef} className="mobile-menu-close" type="button" aria-label="Close menu" onClick={()=>{setMenuOpen(false);menuButtonRef.current?.focus();}}><span aria-hidden>×</span></button>
          </div>
          <div className="mobile-menu-links">
            {links.map((link,index)=><Link key={link.href} className={active(link.href)?"active":""} aria-current={active(link.href)?"page":undefined} href={link.href} onClick={()=>setMenuOpen(false)}><span>{String(index+1).padStart(2,"0")}</span><strong>{link.label}</strong><i aria-hidden>→</i></Link>)}
          </div>
          <div className="mobile-menu-footer">
            <span>The Seal Specialist</span>
            <Link href="/contact" onClick={()=>setMenuOpen(false)}>Start an enquiry <span aria-hidden>→</span></Link>
          </div>
        </nav>:null}
      </div>
      <Link className="header-cta" href="/contact">Enquire <span aria-hidden>→</span></Link>
    </header>
  );
}
