import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-intro">
        <div className="footer-brand-lockup">
          <Image src="/assets/logos/resibond-logo-white-transparent.png" alt="Resibond" width={240} height={70} />
          <strong>The Seal Specialist</strong>
          <span>From Astral Adhesives</span>
        </div>
        <p>Professional sealing and bonding systems for homes, projects and specialist applications, backed by Astral&apos;s focus on quality and innovation.</p>
      </div>
      <div className="footer-links">
        <div><strong>Discover</strong><Link href="/products">Products</Link><Link href="/brands">Product ranges</Link><Link href="/solutions">Solutions</Link><Link href="/applications">Application directory</Link><Link href="/substrates">Substrates</Link></div>
        <div><strong>Technical</strong><Link href="/chemistries">Chemistries</Link><Link href="/environments">Interior & exterior</Link><Link href="/technical-data-sheets">Technical data sheets</Link><Link href="/product-finder">Product finder</Link></div>
        <div><strong>Company</strong><Link href="/about">About Resibond & Astral</Link><a href="https://www.astraladhesives.com/" target="_blank" rel="noreferrer">Astral Adhesives ↗</a><a href="https://www.astralltd.com/" target="_blank" rel="noreferrer">Astral Limited ↗</a><Link href="/contact?source=dealer-enquiry">Dealer enquiry</Link><Link href="/contact">Contact</Link></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Resibond · <Link href="/privacy">Privacy</Link></span><span>Product information is subject to official technical documentation.</span></div>
    </footer>
  );
}
