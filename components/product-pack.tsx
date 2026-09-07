import Image from "next/image";

export function ProductPack({ name, image, className, width = 260, height = 520, priority = false }: { name: string; image?: string; className?: string; width?: number; height?: number; priority?: boolean }) {
  if (image) {
    const isLandscape = name === "Turf Grass";
    const imageClassName = [className, isLandscape ? "product-pack-landscape" : ""].filter(Boolean).join(" ");
    return <Image className={imageClassName} src={image} alt={`${name} product pack`} width={isLandscape ? 820 : width} height={isLandscape ? 254 : height} priority={priority} />;
  }
  return <div className={`pack-placeholder ${className || ""}`} data-pack-status="pending" role="img" aria-label={`${name} official product pack image pending`}><Image src="/assets/logos/RESIBOND NXT LOGO-02 1.jpg" alt="Resibond NXT" width={180} height={80} /><strong>{name}</strong><span>Official pack image pending</span></div>;
}
