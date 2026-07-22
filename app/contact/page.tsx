import type { Metadata } from "next";
import { products } from "@/lib/catalog";
import { EnquiryForm } from "@/components/enquiry-form";

export const metadata: Metadata = {
  title: "Contact & Product Enquiry",
  description: "Contact Resibond for product selection, dealer, project or technical enquiries.",
  alternates: { canonical: "/contact" },
};

const supportRoutes = [
  {
    number: "01",
    title: "Product selection",
    copy: "Not sure which product fits your application? Share the surfaces and conditions with us.",
  },
  {
    number: "02",
    title: "Technical support",
    copy: "Need help with application, performance, compatibility or technical documents?",
  },
  {
    number: "03",
    title: "Dealer enquiries",
    copy: "Talk to the team about distribution, partnerships and bulk requirements.",
  },
];

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
          <div className="contact-step" aria-hidden="true">
            <span>Details</span>
            <strong>01</strong>
          </div>
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

      <section className="contact-support" aria-label="Enquiry support routes">
        {supportRoutes.map((route) => (
          <article key={route.number}>
            <strong className="support-number" aria-hidden="true">{route.number}</strong>
            <div>
              <h2>{route.title}</h2>
              <p>{route.copy}</p>
              <a href="#enquiry-form">Start an enquiry <span aria-hidden="true">→</span></a>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
