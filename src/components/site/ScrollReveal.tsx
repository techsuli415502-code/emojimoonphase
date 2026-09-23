"use client";

import { useEffect } from "react";

/**
 * Adds an IntersectionObserver that toggles the `is-visible` class on every
 * element marked with `.reveal` once it scrolls into view. The class names
 * live in globals.css.
 */
export function ScrollRevealProvider() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("IntersectionObserver" in window)) {
      // No support? Just show everything.
      document
        .querySelectorAll(".reveal")
        .forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
    );

    const els = document.querySelectorAll(".reveal:not(.is-visible)");
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
