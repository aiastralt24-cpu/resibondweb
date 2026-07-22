import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SiteChrome } from "@/components/site-chrome";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: { default: "Resibond | Professional Sealants & Adhesives", template: "%s | Resibond" },
  description: "Discover Resibond sealants and adhesives by product, chemistry, application or substrate.",
  openGraph: { type: "website", siteName: "Resibond", title: "Resibond professional sealants and adhesives", description: "Find the right Resibond product for every critical joint." },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth"><body><a className="skip-link" href="#main-content">Skip to main content</a><SiteChrome>{children}</SiteChrome><Analytics /></body></html>;
}
