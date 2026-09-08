"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function HomeHeroSlider() {
  const [active, setActive] = useState<0 | 1>(0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef<number | null>(null);

  const show = useCallback((slide: 0 | 1) => setActive(slide), []);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => setActive((current) => current === 0 ? 1 : 0), 8500);
    return () => window.clearTimeout(timer);
  }, [active, paused]);

  function handleKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    if (event.key === "ArrowLeft") { event.preventDefault(); show(0); }
    if (event.key === "ArrowRight") { event.preventDefault(); show(1); }
  }

  function handleTouchEnd(event: React.TouchEvent<HTMLElement>) {
    if (touchStart.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(distance) > 48) show(distance < 0 ? 1 : 0);
    touchStart.current = null;
  }

  return (
    <section className={`home-hero-slider is-slide-${active + 1}`} aria-roledescription="carousel" aria-label="Resibond product ranges" onKeyDown={handleKeyDown} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }} onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }} onTouchEnd={handleTouchEnd}>
      <article className={`hero hero-slide hero-slide-resibond ${active === 0 ? "active" : "inactive"}`} aria-hidden={active !== 0}>
        <span className="hero-gold-plane" aria-hidden="true" />
        <div className="hero-copy">
          <span className="hero-endorsement">Resibond · From Astral Adhesives</span>
          <h1>The Seal Specialist.</h1>
          <p>Professional sealing and bonding systems for critical joints across homes, projects and specialist applications.</p>
          <div className="actions"><Link className="button primary" href="/product-finder" tabIndex={active === 0 ? 0 : -1}>Find product <span>→</span></Link><Link className="button secondary" href="/products" tabIndex={active === 0 ? 0 : -1}>Explore range <span>→</span></Link></div>
        </div>
        <div className="hero-products hero-range-shot">
          <span className="hero-stage-number" aria-hidden="true">01 / 02</span>
          <Image className="hero-group-shot" src="/assets/products/Resibond-range-groupshot.png" alt="Resibond sealants and adhesives product range" width={1794} height={1118} priority />
        </div>
      </article>

      <article className={`hero hero-slide hero-slide-nxt ${active === 1 ? "active" : "inactive"}`} aria-hidden={active !== 1}>
        <div className="nxt-product-stage" aria-label="Resibond NXT FireShield, Duct Seal, Mirror Mount and Sanitary Super White cartridges">
          <Image className="nxt-hero-group-shot" src="/assets/products/resibond-nxt-product-stage-v3.jpg" alt="Resibond NXT FireShield, Duct Seal, Mirror Mount and Sanitary Super White cartridges" width={2100} height={2160} sizes="(max-width: 1100px) 100vw, 58vw" priority />
        </div>
        <div className="nxt-hero-copy">
          <div className="nxt-hero-logo-crop"><Image className="nxt-hero-logo" src="/assets/logos/RESIBOND NXT LOGO-02 1.jpg" alt="Resibond NXT" width={1181} height={1181} /></div>
          <span className="nxt-kicker">The Seal Specialist</span>
          <h2>NXT-Gen sealants for new-age needs.</h2>
          <p>A focused specialist range for fire protection, HVAC ducting, mirror installation and sanitary applications.</p>
          <div className="actions"><Link className="button gold" href="/brands/resibond-nxt" tabIndex={active === 1 ? 0 : -1}>Explore NXT <span>→</span></Link><Link className="button nxt-secondary" href="/product-finder" tabIndex={active === 1 ? 0 : -1}>Find NXT product <span>→</span></Link></div>
        </div>
      </article>

      <div className="hero-slider-controls" aria-label="Choose a hero slide">
        <button type="button" className={active === 0 ? "active" : ""} aria-label="Show Resibond range" aria-pressed={active === 0} onClick={() => show(0)}><span>01</span> Resibond</button>
        <button type="button" className={active === 1 ? "active" : ""} aria-label="Show Resibond NXT range" aria-pressed={active === 1} onClick={() => show(1)}><span>02</span> Resibond NXT</button>
      </div>
      <span className="sr-only" aria-live="polite">{active === 0 ? "Resibond range slide" : "Resibond NXT range slide"}</span>
    </section>
  );
}
