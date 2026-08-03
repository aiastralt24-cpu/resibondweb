import type { Metadata } from "next";
import { products } from "@/lib/catalog";
import { EnquiryForm } from "@/components/enquiry-form";

export const metadata: Metadata = {
  title: "Contact & Product Enquiry",
  description: "Contact Resibond for product selection, dealer, project or technical enquiries.",
  alternates: { canonical: "/contact" },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ product?: string; source?: string }>;
}) {
  const query = await searchParams;

  return (
    <div className="contact-page">
      <section className="contact-enquiry" aria-labelledby="contact-title">
        <div className="contact-intro">
          <h1 id="contact-title">Tell us what you’re working on.</h1>
          <p>
            Share the surface, environment and project details. Our team will route your
            enquiry to the right product specialist.
          </p>
          <div className="contact-response-time">
            <span aria-hidden="true" />
            Usually answered within one business day.
          </div>
        </div>

        <div className="contact-form-panel" id="enquiry-form">
          <EnquiryForm products={products} product={query.product} source={query.source} />
        </div>
      </section>

      <section className="contact-office" aria-labelledby="contact-office-title">
        <div>
          <span className="section-index">Astral Adhesives customer care</span>
          <h2 id="contact-office-title">Speak directly with the team.</h2>
        </div>
        <address>
          <div><strong>Customer care</strong><a href="tel:+917311103331">+91 73111 03331</a></div>
          <div><strong>Email</strong><a href="mailto:customercare@astraladhesives.com">customercare@astraladhesives.com</a></div>
          <div><strong>Registered &amp; corporate office</strong><span>“Astral House”, 207/1, Behind Rajpath Club, Off S.G. Highway, Ahmedabad 380059, Gujarat</span></div>
        </address>
      </section>
    </div>
  );
}
