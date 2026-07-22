"use client";

import { useState } from "react";
import Link from "next/link";
import type { Product } from "@/lib/catalog";

export function EnquiryForm({
  products,
  product = "",
  source = "website",
}: {
  products: Product[];
  product?: string;
  source?: string;
}) {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setMessage("");
    const formElement = event.currentTarget;
    const body = Object.fromEntries(new FormData(formElement).entries());

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error);
      setState("success");
      setMessage("Thank you. Your enquiry has been received. Our team will be in touch shortly.");
      formElement.reset();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "We could not send your enquiry.");
    }
  }

  return (
    <form className="contact-form" onSubmit={submit} aria-busy={state === "loading"}>
      <input type="hidden" name="source" value={source} />
      <label className="honeypot" aria-hidden="true">
        Website<input name="website" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="contact-field-grid">
        <label>
          <span>Your name <em>Required</em></span>
          <input name="name" autoComplete="name" minLength={2} placeholder="Enter your name" required />
        </label>
        <label>
          <span>Mobile number <em>Required</em></span>
          <input name="mobile" type="tel" inputMode="tel" autoComplete="tel" placeholder="+91 98765 43210" required />
        </label>
        <label>
          <span>Email address <em>Optional</em></span>
          <input type="email" name="email" autoComplete="email" placeholder="Enter your email address" />
        </label>
        <label>
          <span>City <em>Optional</em></span>
          <input name="city" autoComplete="address-level2" placeholder="Enter your city" />
        </label>
        <label>
          <span>I am a</span>
          <select name="userType" defaultValue="">
            <option value="">Select an option</option>
            <option>Home user</option>
            <option>Contractor / applicator</option>
            <option>Architect / consultant</option>
            <option>Dealer / distributor</option>
            <option>Industrial / OEM</option>
          </select>
        </label>
        <label>
          <span>Product interest</span>
          <select name="product" defaultValue={product}>
            <option value="">Not sure yet</option>
            {products.map((item) => <option key={item.slug} value={item.slug}>{item.name}</option>)}
          </select>
        </label>
      </div>

      <label className="contact-message-field">
        <span>Application or project details <em>Required</em></span>
        <textarea
          name="application"
          minLength={3}
          required
          placeholder="Describe the surfaces, environment, application, size and any exposure conditions."
        />
      </label>

      <label className="consent-check">
        <input type="checkbox" required />
        <span>
          I agree that Resibond may contact me about this enquiry. <Link href="/privacy" target="_blank">Privacy notice</Link>.
        </span>
      </label>

      <button className="contact-submit" disabled={state === "loading"} type="submit">
        <span>{state === "loading" ? "Sending…" : "Send enquiry"}</span>
        <span aria-hidden="true">→</span>
      </button>

      <p className="contact-privacy-note">Your details are used only to respond to this enquiry.</p>
      <p className={`form-status ${state}`} role="status">{message}</p>
    </form>
  );
}
