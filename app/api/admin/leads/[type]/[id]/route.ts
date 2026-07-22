import { NextRequest, NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin-auth";
import { clean, type LeadStatus, updateLead } from "@/lib/leads";

const statuses:LeadStatus[]=["new","contacted","qualified","closed"];
export async function PATCH(request:NextRequest,{params}:{params:Promise<{type:string;id:string}>}){
  if(!await isAdmin())return NextResponse.json({error:"Unauthorized."},{status:401});
  const {type,id}=await params;const table=type==="enquiries"?"enquiries":type==="tds-downloads"?"tds_downloads":null;
  if(!table)return NextResponse.json({error:"Unknown lead type."},{status:404});
  const body=await request.json().catch(()=>null);const status=clean(body?.status,20) as LeadStatus;const notes=clean(body?.notes,2000);
  if(!statuses.includes(status))return NextResponse.json({error:"Invalid status."},{status:400});
  try{return NextResponse.json({ok:true,lead:await updateLead(table,id,{status,notes})});}catch{return NextResponse.json({error:"Unable to update lead."},{status:503});}
}
