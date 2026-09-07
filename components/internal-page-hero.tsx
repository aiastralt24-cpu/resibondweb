type InternalPageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
};

export function InternalPageHero({
  eyebrow,
  title,
  description,
  className = "",
}: InternalPageHeroProps) {
  return <header className={`internal-page-hero ${className}`.trim()} data-inner-page-hero>
    <div className="internal-page-hero__copy">
      <span className="section-index">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  </header>;
}
