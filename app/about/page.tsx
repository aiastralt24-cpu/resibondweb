import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata:Metadata={title:"About Resibond & Astral",description:"Meet Resibond, the seal specialist from Astral Adhesives, and learn about the Astral building-materials group.",alternates:{canonical:"/about"}};

const astralBusinesses=[
  {name:"Pipes",description:"Pipes, fittings and water tanks",href:"https://www.astralpipes.com/",label:"Visit Astral Pipes"},
  {name:"Adhesives",description:"Adhesives, sealants and construction chemicals",href:"https://www.astraladhesives.com/",label:"Visit Astral Adhesives"},
  {name:"Construction chemicals",description:"Solutions for building and maintenance",href:"https://www.trubuild.in/",label:"Visit Trubuild"},
  {name:"Paints",description:"Decorative, industrial and protective coatings",href:"https://www.astralltd.com/astral-paints/",label:"Visit Astral Paints"},
  {name:"Bathware",description:"Faucets and sanitaryware",href:"https://www.astralbathware.com/",label:"Visit Astral Bathware"},
];

export default function Page(){return <>
  <header className="page-hero about-hero">
    <span className="section-index">Resibond · From Astral Adhesives</span>
    <h1>The Seal Specialist.</h1>
    <p>An application-led range of professional sealants and adhesives for residential, commercial and specialist work.</p>
  </header>
  <section className="content-page about-intro"><div><span className="section-index">About Resibond</span><h2>Products organised around the job.</h2></div><article><p>Resibond brings specialist sealing and bonding products into one practical system. The range spans acrylic, acetoxy, neutral, hybrid and SBS technologies and can be explored by product, chemistry, application or substrate.</p><p>Product information is published only where supported by current official material. Compatibility, conditions and limitations should always be confirmed in the latest technical data sheet.</p><p><Link className="button primary" href="/products">Explore the product range →</Link></p></article></section>
  <section className="about-astral" id="astral-adhesives" aria-labelledby="about-astral-title">
    <div className="about-astral-heading"><div className="astral-adhesives-lockup"><Image className="astral-adhesives-mark" src="/assets/logos/astral-adhesives-logo-white-aligned.png" alt="Astral Adhesives" width={200} height={60}/></div><h2 id="about-astral-title">Bonding innovation with quality.</h2></div>
    <article><p>Astral Adhesives manufactures a diversified range of adhesives, sealants, putties and construction chemicals. Its official company information highlights backward integration, Good Manufacturing Practices, product consistency and a nationwide network of more than 1,800 distributors.</p><p>Astral Adhesives began more than two decades ago in specialty chemicals and is part of Astral Limited&apos;s growing building-materials portfolio.</p><div className="about-source-links"><a href="https://www.astraladhesives.com/" target="_blank" rel="noreferrer">Visit Astral Adhesives ↗</a><a href="https://www.astralltd.com/astral-adhesives/" target="_blank" rel="noreferrer">View Adhesives at Astral Limited ↗</a></div></article>
  </section>
  <section className="astral-portfolio" id="astral-portfolio" aria-labelledby="astral-portfolio-title">
    <div className="section-heading"><span className="section-index">Astral Adhesives portfolio</span><h2 id="astral-portfolio-title">Specialist brands for different bonding needs.</h2></div>
    <div className="portfolio-brand-grid">
      <article className="portfolio-brand-card resibond-card"><span>Sealants and bonding systems</span><div className="portfolio-brand-logo-wrap"><Image className="portfolio-brand-logo" src="/assets/logos/resibond-logo-blue-transparent.png" alt="Resibond" width={923} height={210}/></div><strong>The Seal Specialist</strong><p>Professional sealing and bonding solutions organised around chemistry, application, environment and substrate.</p><Link className="text-link" href="/products">Explore Resibond products →</Link></article>
      <article className="portfolio-brand-card bondtite-card"><span>Adhesive systems</span><div className="portfolio-brand-logo-wrap"><Image className="portfolio-brand-logo bondtite-logo" src="/assets/logos/bondtite-logo-cropped.png" alt="Bondtite" width={280} height={70}/></div><strong>A sibling brand from Astral Adhesives</strong><p>Bondtite covers high-strength epoxy, wood, PVA, spray and multi-surface adhesive needs across industrial, construction and do-it-yourself applications.</p><a className="text-link" href="https://www.bondtite.in/" target="_blank" rel="noreferrer">Visit Bondtite ↗</a></article>
    </div>
  </section>
  <section className="astral-businesses" id="astral-businesses">
    <div className="section-heading astral-business-heading"><span className="section-index">The wider group</span><div><Image src="/assets/logos/astral-limited-logo.png" alt="Astral Limited" width={250} height={48}/></div><a className="text-link" href="https://www.astralltd.com/about-astral/" target="_blank" rel="noreferrer" aria-label="About Astral Limited, opens in a new tab">About Astral Limited ↗</a></div>
    <div className="astral-business-grid">{astralBusinesses.map((business,index)=><article key={business.name}>
      <a className="astral-business-primary" href={business.href} target="_blank" rel="noreferrer" aria-label={`${business.label}, opens in a new tab`}>
        <span>{String(index+1).padStart(2,"0")}</span><h3>{business.name}</h3><p>{business.description}</p><strong>{business.label} <b aria-hidden="true">↗</b></strong>
      </a>
      {business.name==="Adhesives"?<Link className="astral-business-context" href="#astral-adhesives">Read about the Resibond connection ↑</Link>:null}
    </article>)}</div>
  </section>
</>}
