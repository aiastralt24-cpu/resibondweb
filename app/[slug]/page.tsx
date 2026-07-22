import { notFound } from "next/navigation";

export const dynamicParams = false;
export function generateStaticParams(){return [] as {slug:string}[]}
export default function UnknownTopLevelRoute(){notFound()}
