"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type SplitTextRecord = { element: HTMLElement; text: string };

function splitMaskedWords(element: HTMLElement, records: SplitTextRecord[]) {
  if (element.dataset.maskedRevealReady === "true") return;
  const text = element.textContent?.trim() ?? "";
  if (!text) return;
  records.push({ element, text });
  element.textContent = "";
  element.setAttribute("aria-label", text);
  text.split(/(\s+)/).forEach((part) => {
    if (!part.trim()) {
      element.appendChild(document.createTextNode(part));
      return;
    }
    const mask = document.createElement("span");
    const word = document.createElement("span");
    mask.className = "word-mask";
    mask.setAttribute("aria-hidden", "true");
    word.className = "word";
    word.textContent = part;
    mask.appendChild(word);
    element.appendChild(mask);
  });
  element.dataset.maskedRevealReady = "true";
  element.classList.add("is-split");
}

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
    const splitRecords: SplitTextRecord[] = [];
    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const hero = document.querySelector<HTMLElement>("[data-motion-hero]");
        if (hero) {
          const compact = window.matchMedia("(max-width: 760px)").matches;
          const headline = hero.querySelector<HTMLElement>("[data-masked-reveal]");
          if (headline) splitMaskedWords(headline, splitRecords);
          const words = headline?.querySelectorAll<HTMLElement>(".word");
          const heroTimeline = gsap.timeline({ defaults: { ease: "expo.out" } });
          heroTimeline
            .fromTo(hero.querySelector(".hero-gold-plane"), { scaleX: 0 }, { scaleX: 1, duration: compact ? 0.65 : 0.9, ease: "power3.inOut" })
            .fromTo(hero.querySelector(".hero-endorsement"), { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: compact ? 0.35 : 0.5 }, "-=0.48");
          if (words?.length) heroTimeline.fromTo(words, { yPercent: 110 }, { yPercent: 0, duration: compact ? 0.58 : 0.78, stagger: compact ? 0.025 : 0.04 }, "-=0.3");
          heroTimeline
            .fromTo(hero.querySelector(".hero-copy > p"), { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: compact ? 0.4 : 0.58 }, "-=0.5")
            .fromTo(hero.querySelector(".hero-copy .actions"), { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: compact ? 0.38 : 0.52 }, "-=0.38")
            .fromTo(hero.querySelector(".hero-group-shot"), { autoAlpha: 0, y: compact ? 24 : 44, scale: 0.965 }, { autoAlpha: 1, y: 0, scale: 1, duration: compact ? 0.72 : 1 }, "-=0.08")
            .fromTo(hero.querySelector(".hero-stage-number"), { autoAlpha: 0, x: 12 }, { autoAlpha: 1, x: 0, duration: 0.4 }, "-=0.62");
        }

        document.querySelectorAll<HTMLElement>("[data-inner-page-hero]").forEach((innerHero) => {
          const compact = window.matchMedia("(max-width: 700px)").matches;
          const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
          timeline
            .fromTo(innerHero.querySelector(".section-index"), { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: compact ? 0.34 : 0.42 })
            .fromTo(innerHero.querySelector("h1"), { autoAlpha: 0, y: compact ? 24 : 34, clipPath: "inset(0 0 22% 0)" }, { autoAlpha: 1, y: 0, clipPath: "inset(0 0 0% 0)", duration: compact ? 0.68 : 0.84 }, "-=0.18")
            .fromTo(innerHero.querySelector(".internal-page-hero__copy > p"), { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: compact ? 0.42 : 0.54 }, "-=0.42");
        });

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
      splitRecords.forEach(({ element, text }) => {
        element.textContent = text;
        element.removeAttribute("aria-label");
        delete element.dataset.maskedRevealReady;
        element.classList.remove("is-split");
      });
    };
  }, [pathname]);

  return null;
}
