import { createHmac, scryptSync, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const COOKIE = "resibond_admin";
function secret(){return process.env.ADMIN_SESSION_SECRET || (process.env.NODE_ENV!=="production"?"local-resibond-admin-session-secret":null);}
function sign(payload:string){const key=secret();if(!key)throw new Error("ADMIN_SESSION_SECRET is required in production.");return createHmac("sha256",key).update(payload).digest("hex");}

export function verifyPassword(password:string){
  const stored=process.env.ADMIN_PASSWORD_HASH;
  if(!stored && process.env.NODE_ENV!=="production") return password==="resibond-local-admin";
  if(!stored)return false;
  const [algorithm,salt,hash]=stored.split(":"); if(algorithm!=="scrypt"||!salt||!hash)return false;
  const candidate=scryptSync(password,salt,64); const expected=Buffer.from(hash,"hex");
  return candidate.length===expected.length&&timingSafeEqual(candidate,expected);
}
export function createSession(email:string){const payload=Buffer.from(JSON.stringify({email,exp:Date.now()+8*60*60*1000})).toString("base64url");return `${payload}.${sign(payload)}`;}
export async function isAdmin(){if(!secret())return false;const value=(await cookies()).get(COOKIE)?.value;if(!value)return false;const [payload,signature]=value.split(".");if(!payload||!signature)return false;const expected=Buffer.from(sign(payload));const supplied=Buffer.from(signature);if(expected.length!==supplied.length||!timingSafeEqual(expected,supplied))return false;try{const session=JSON.parse(Buffer.from(payload,"base64url").toString());return typeof session.email==="string"&&typeof session.exp==="number"&&session.exp>Date.now();}catch{return false;}}
export const adminCookie={name:COOKIE,options:{httpOnly:true,sameSite:"lax" as const,secure:process.env.NODE_ENV==="production",path:"/",maxAge:8*60*60}};
