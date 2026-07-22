import { redirect } from "next/navigation";import { isAdmin } from "@/lib/admin-auth";import { AdminLogin } from "./admin-login";
export const dynamic="force-dynamic";
export default async function Page(){if(await isAdmin())redirect("/admin/enquiries");return <div className="admin-login-page"><section><span className="admin-kicker">Resibond operations</span><h1>Lead portal</h1><p>Secure access for enquiry and technical-document follow-up.</p></section><AdminLogin/></div>}
