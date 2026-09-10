import type { Metadata } from "next";
import { Archivo, Barlow_Condensed } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SiteChrome } from "@/components/site-chrome";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
  fallback: ["Arial Narrow", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: { default: "Resibond | Professional Sealants & Adhesives", template: "%s | Resibond" },
  description: "Discover Resibond sealants and adhesives by product, chemistry, application or substrate.",
  openGraph: { type: "website", siteName: "Resibond", title: "Resibond professional sealants and adhesives", description: "Find the right Resibond product for every critical joint.", images: [{ url: "/assets/products/resibond-range-without-nozzles-updated.png", alt: "Resibond sealants and adhesives range" }] },
  twitter: { card: "summary_large_image", images: ["/assets/products/resibond-range-without-nozzles-updated.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth" className={`${archivo.variable} ${barlowCondensed.variable}`}><body><a className="skip-link" href="#main-content">Skip to main content</a><SiteChrome>{children}</SiteChrome><Analytics /></body></html>;
}
