"use client";
import { useState } from "react";
import Link from "next/link";
import type { Product } from "@/lib/catalog";

export function EnquiryForm({products,product="",source="website"}:{products:Product[];product?:string;source?:string}){
  const [state,setState]=useState<"idle"|"loading"|"success"|"error">("idle");const [message,setMessage]=useState("");
  async function submit(event:React.FormEvent<HTMLFormElement>){event.preventDefault();setState("loading");setMessage("");const formElement=event.currentTarget;const form=new FormData(formElement);const body=Object.fromEntries(form.entries());
    try{const response=await fetch("/api/enquiries",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)});const data=await response.json();if(!response.ok)throw new Error(data.error);setState("success");setMessage("Thank you. Your enquiry has been received and our team can now follow it up.");formElement.reset();}catch(error){setState("error");setMessage(error instanceof Error?error.message:"We could not send your enquiry.");}}
  return <form className="contact-form" onSubmit={submit} aria-busy={state==="loading"}>
    <input type="hidden" name="source" value={source}/><label className="honeypot" aria-hidden>Website<input name="website" tabIndex={-1} autoComplete="off"/></label>
    <label>Full name<input name="name" autoComplete="name" minLength={2} required/></label><label>Mobile number<input name="mobile" type="tel" inputMode="tel" autoComplete="tel" placeholder="+91 98765 43210" required/></label>
    <label>Email (optional)<input type="email" name="email" autoComplete="email"/></label><label>City (optional)<input name="city" autoComplete="address-level2"/></label>
    <label>You are a<select name="userType" defaultValue=""><option value="">Select one</option><option>Home user</option><option>Contractor / applicator</option><option>Architect / consultant</option><option>Dealer / distributor</option><option>Industrial / OEM</option></select></label>
    <label>Product interest<select name="product" defaultValue={product}><option value="">Not sure yet</option>{products.map((item)=><option key={item.slug} value={item.slug}>{item.name}</option>)}</select></label>
    <label>Application or message<textarea name="application" minLength={3} required placeholder="Tell us what you need to seal or bond."/></label>
    <label className="consent-check"><input type="checkbox" required/><span>I agree that Resibond may contact me about this enquiry. <Link href="/privacy" target="_blank">Privacy notice</Link>.</span></label>
    <button className="button primary" disabled={state==="loading"} type="submit">{state==="loading"?"Sending…":"Send enquiry →"}</button>
    <p className={`form-status ${state}`} role="status">{message}</p>
  </form>;
}
