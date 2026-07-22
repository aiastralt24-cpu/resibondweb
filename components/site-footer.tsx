import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-intro">
        <Image src="/assets/logos/resibond-logo-white-transparent.png" alt="Resibond" width={240} height={70} />
        <p>Professional sealing and bonding systems for homes, projects and specialist applications.</p>
      </div>
      <div className="footer-links">
        <div><strong>Discover</strong><Link href="/products">Products</Link><Link href="/solutions">Solutions</Link><Link href="/applications">Application directory</Link><Link href="/substrates">Substrates</Link></div>
        <div><strong>Technical</strong><Link href="/chemistries">Chemistries</Link><Link href="/technical-data-sheets">Technical data sheets</Link><Link href="/product-finder">Product finder</Link></div>
        <div><strong>Company</strong><Link href="/about">About</Link><Link href="/contact?source=dealer-enquiry">Dealer enquiry</Link><Link href="/contact">Contact</Link></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Resibond · <Link href="/privacy">Privacy</Link></span><span>Product information is subject to official technical documentation.</span></div>
    </footer>
  );
}
