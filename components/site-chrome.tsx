"use client";
import { usePathname } from "next/navigation";
import { SiteHeader } from "./site-header";import { SiteFooter } from "./site-footer";
import { SiteMotion } from "./site-motion";
export function SiteChrome({children}:{children:React.ReactNode}){const admin=usePathname().startsWith("/admin");return <>{!admin&&<><SiteMotion/><SiteHeader/></>}<main id="main-content" tabIndex={-1}>{children}</main>{!admin&&<SiteFooter/>}</>}
