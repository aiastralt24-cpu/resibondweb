import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin-auth";
import { listLeads } from "@/lib/leads";

const csv=(value:unknown)=>`"${String(value??"").replaceAll('"','""')}"`;
export async function GET(_:Request,{params}:{params:Promise<{type:string}>}){
  if(!await isAdmin())return NextResponse.json({error:"Unauthorized."},{status:401});
  const {type}=await params;const table=type==="enquiries"?"enquiries":type==="tds-downloads"?"tds_downloads":null;
  if(!table)return NextResponse.json({error:"Unknown lead type."},{status:404});
  const rows=await listLeads(table);const columns=table==="enquiries"?["created_at","name","mobile","email","city","user_type","product_slug","application","source","status","notes"]:["created_at","name","mobile","product_slug","source","status","notes"];
  const content=[columns.join(","),...rows.map((row)=>columns.map((key)=>csv(row[key])).join(","))].join("\n");
  return new NextResponse(content,{headers:{"Content-Type":"text/csv; charset=utf-8","Content-Disposition":`attachment; filename="resibond-${type}.csv"`}});
}
