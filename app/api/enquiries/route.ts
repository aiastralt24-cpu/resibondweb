import { NextRequest, NextResponse } from "next/server";
import { clean, createEnquiry, validMobile } from "@/lib/leads";
import { allowRequest } from "@/lib/rate-limit";
export async function POST(request:NextRequest){
  const ip=request.headers.get("x-forwarded-for")?.split(",")[0]||"local";if(!allowRequest(`enquiry:${ip}`,5))return NextResponse.json({error:"Too many attempts. Please try again shortly."},{status:429});
  const body=await request.json().catch(()=>null);if(!body)return NextResponse.json({error:"Invalid request."},{status:400});
  const name=clean(body.name,100),mobile=clean(body.mobile,20),application=clean(body.application,2000);
  if(name.length<2||!validMobile(mobile)||application.length<3||body.website)return NextResponse.json({error:"Please provide a valid name, mobile number and application."},{status:400});
  try{const lead=await createEnquiry({name,mobile,email:clean(body.email,160)||undefined,city:clean(body.city,100)||undefined,user_type:clean(body.userType,80)||undefined,product_slug:clean(body.product,100)||undefined,application,source:clean(body.source,120)||"website",consent_at:new Date().toISOString()});return NextResponse.json({ok:true,id:lead.id},{status:201});}catch{return NextResponse.json({error:"We could not save the enquiry. Please try again."},{status:503});}
}
