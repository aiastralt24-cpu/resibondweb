import { promises as fs } from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";

export type LeadStatus = "new" | "contacted" | "qualified" | "closed";
export type EnquiryInput = { name:string; mobile:string; email?:string; city?:string; user_type?:string; product_slug?:string; application:string; source:string; consent_at:string };
export type TdsInput = { name:string; mobile:string; product_slug:string; source:string; consent_at:string };
export type LeadRecord = Record<string, string | undefined> & { id:string; created_at:string; status:LeadStatus; notes:string };

const localFile = path.join(process.cwd(), ".data", "resibond-leads.json");

function supabaseConfig() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  return url && key ? { url, key } : null;
}

function headers(key:string) { return { apikey:key, Authorization:`Bearer ${key}`, "Content-Type":"application/json" }; }

async function localData():Promise<{enquiries:LeadRecord[];tds_downloads:LeadRecord[]}> {
  try { return JSON.parse(await fs.readFile(localFile, "utf8")); }
  catch { return { enquiries:[], tds_downloads:[] }; }
}

async function insert(table:"enquiries"|"tds_downloads", input:EnquiryInput|TdsInput) {
  const config = supabaseConfig();
  if (config) {
    const response = await fetch(`${config.url}/rest/v1/${table}`, { method:"POST", headers:{...headers(config.key), Prefer:"return=representation"}, body:JSON.stringify(input), cache:"no-store" });
    if (!response.ok) throw new Error(`Lead database rejected submission (${response.status}).`);
    return (await response.json())[0] as LeadRecord;
  }
  if (process.env.NODE_ENV === "production") throw new Error("Lead database is not configured.");
  const data = await localData();
  const record = { ...input, id:randomUUID(), created_at:new Date().toISOString(), status:"new" as LeadStatus, notes:"" } as LeadRecord;
  data[table].unshift(record); await fs.mkdir(path.dirname(localFile), {recursive:true}); await fs.writeFile(localFile, JSON.stringify(data,null,2)); return record;
}

export const createEnquiry = (input:EnquiryInput) => insert("enquiries", input);
export const createTdsLead = (input:TdsInput) => insert("tds_downloads", input);

export async function listLeads(table:"enquiries"|"tds_downloads") {
  const config=supabaseConfig();
  if(config){const response=await fetch(`${config.url}/rest/v1/${table}?select=*&order=created_at.desc&limit=500`,{headers:headers(config.key),cache:"no-store"});if(!response.ok)throw new Error("Unable to load leads.");return await response.json() as LeadRecord[];}
  return (await localData())[table];
}

export async function updateLead(table:"enquiries"|"tds_downloads", id:string, changes:{status?:LeadStatus;notes?:string}) {
  const config=supabaseConfig();
  if(config){const response=await fetch(`${config.url}/rest/v1/${table}?id=eq.${encodeURIComponent(id)}`,{method:"PATCH",headers:{...headers(config.key),Prefer:"return=representation"},body:JSON.stringify(changes),cache:"no-store"});if(!response.ok)throw new Error("Unable to update lead.");return (await response.json())[0] as LeadRecord;}
  if(process.env.NODE_ENV==="production")throw new Error("Lead database is not configured.");
  const data=await localData();const index=data[table].findIndex((lead)=>lead.id===id);if(index<0)throw new Error("Lead not found.");data[table][index]={...data[table][index],...changes};await fs.mkdir(path.dirname(localFile),{recursive:true});await fs.writeFile(localFile,JSON.stringify(data,null,2));return data[table][index];
}

export function clean(value:unknown,max=200){return typeof value==="string"?value.trim().slice(0,max):"";}
export function validMobile(value:string){return /^\+?[0-9][0-9\s-]{6,18}$/.test(value);}
