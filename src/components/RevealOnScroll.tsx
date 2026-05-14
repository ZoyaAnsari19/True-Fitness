"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Re-runs reveal animations after client-side navigation.
 * Legacy app.js only runs once; new .reveal nodes on / would stay opacity: 0 otherwise.
 */
export function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const revealEls = document.querySelectorAll<HTMLElement>(".reveal");
    if (revealEls.length === 0) return;

    if (!("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("in-view"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = el.dataset.delay || String(idx * 60);
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("in-view");
          io.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
