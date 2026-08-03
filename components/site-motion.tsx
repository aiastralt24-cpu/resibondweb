"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const revealGroups = [
  ".finder-links > a",
  ".product-grid > *",
  ".feature-columns > a",
  ".astral-proof-grid > div",
  ".astral-business-grid > article",
  ".data-columns > div",
  ".instruction-grid > div",
  ".solution-index-list > a",
  ".application-row",
  ".substrate-family",
  ".faq-list > details",
];

const revealBlocks = [
  ".section-heading",
  ".finder-intro",
  ".shade-feature-copy",
  ".shade-feature-product",
  ".application-feature > div",
  ".astral-story > div",
  ".enquiry-band > div",
  ".page-hero > *",
  ".content-page > *",
  ".about-astral > *",
  ".portfolio-brand-grid",
  ".astral-business-heading",
  ".contact-enquiry > *",
  ".substrate-directory-hero > *",
  ".product-hero-image",
  ".product-hero-copy",
  ".product-section.split > *",
  ".technical-panel > *",
];

export function SiteMotion() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    document.documentElement.classList.add("motion-ready");

    const header = document.querySelector<HTMLElement>(".site-header");
    let frame = 0;
    const syncHeader = () => {
      frame = 0;
      header?.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(syncHeader);
    };
    syncHeader();
    window.addEventListener("scroll", onScroll, { passive: true });

    const productLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".sticky-product-nav a[href^='#']"));
    const productSections = productLinks
      .map((link) => document.querySelector<HTMLElement>(link.hash))
      .filter((section): section is HTMLElement => Boolean(section));
    const sectionObserver = productSections.length
      ? new IntersectionObserver((entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (!visible) return;
          productLinks.forEach((link) => {
            const current = link.hash === `#${visible.target.id}`;
            link.classList.toggle("active", current);
            if (current) link.setAttribute("aria-current", "location");
            else link.removeAttribute("aria-current");
          });
        }, { rootMargin: "-22% 0px -62%", threshold: [0, 0.15, 0.4] })
      : null;
    productSections.forEach((section) => sectionObserver?.observe(section));

    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const heroTimeline = gsap.timeline({ defaults: { ease: "expo.out" } });
        const hero = document.querySelector(".hero");
        if (hero) {
          heroTimeline
            .fromTo(".hero-endorsement", { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.55 })
            .fromTo(".hero-copy h1", { autoAlpha: 0, y: 34 }, { autoAlpha: 1, y: 0, duration: 0.85 }, "-=0.34")
            .fromTo(".hero-copy > p", { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, duration: 0.65 }, "-=0.5")
            .fromTo(".hero-copy .actions", { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.55 }, "-=0.4")
            .fromTo(".hero-group-shot", { autoAlpha: 0, y: 38, scale: 0.96 }, { autoAlpha: 1, y: 0, scale: 1, duration: 1.05 }, "-=0.75");
        }

        revealBlocks.forEach((selector) => {
          gsap.utils.toArray<HTMLElement>(selector).forEach((element) => {
            if (element.closest("[hidden]")) return;
            gsap.fromTo(element, { autoAlpha: 0, y: 28 }, {
              autoAlpha: 1,
              y: 0,
              duration: 0.62,
              ease: "expo.out",
              scrollTrigger: { trigger: element, start: "top 88%", once: true },
            });
          });
        });

        revealGroups.forEach((selector) => {
          const elements = gsap.utils.toArray<HTMLElement>(selector).filter((element) => !element.closest("[hidden]"));
          if (!elements.length) return;
          ScrollTrigger.batch(elements, {
            start: "top 90%",
            once: true,
            onEnter: (batch) => gsap.fromTo(batch, { autoAlpha: 0, y: 22 }, {
              autoAlpha: 1,
              y: 0,
              duration: 0.56,
              stagger: 0.07,
              ease: "expo.out",
              overwrite: true,
            }),
          });
        });

        media.add("(min-width: 761px)", () => {
          const shadeProduct = document.querySelector<HTMLElement>(".shade-feature-product img");
          if (shadeProduct) {
            gsap.fromTo(shadeProduct, { y: 12 }, {
              y: -12,
              ease: "none",
              scrollTrigger: { trigger: ".shade-feature", start: "top bottom", end: "bottom top", scrub: 0.8 },
            });
          }
        });
      });
    });

    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 120);
    return () => {
      window.clearTimeout(refresh);
      window.removeEventListener("scroll", onScroll);
      sectionObserver?.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
      context.revert();
      media.revert();
    };
  }, [pathname]);

  return null;
}
