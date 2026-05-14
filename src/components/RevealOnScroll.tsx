"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function animateCount(el: HTMLElement) {
  const target = parseInt(el.dataset.count || "0", 10) || 0;
  const duration = 1600;
  const start = performance.now();
  const startVal = 0;
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    const val = Math.floor(startVal + (target - startVal) * eased);
    el.textContent = val.toLocaleString();
    if (t < 1) requestAnimationFrame(tick);
    else el.textContent = target.toLocaleString();
  };
  requestAnimationFrame(tick);
}

/**
 * Re-runs reveal + data-count observers after client-side navigation.
 * Legacy app.js only loads once; new nodes on / would stay hidden / static otherwise.
 */
export function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const cleanups: (() => void)[] = [];

    const revealEls = document.querySelectorAll<HTMLElement>(".reveal");
    if (revealEls.length > 0) {
      if (!("IntersectionObserver" in window)) {
        revealEls.forEach((el) => el.classList.add("in-view"));
      } else {
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
        cleanups.push(() => io.disconnect());
      }
    }

    const counters = document.querySelectorAll<HTMLElement>("[data-count]");
    if (counters.length > 0) {
      if (!("IntersectionObserver" in window)) {
        counters.forEach((el) => animateCount(el));
      } else {
        const co = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (!e.isIntersecting) return;
              animateCount(e.target as HTMLElement);
              co.unobserve(e.target);
            });
          },
          { threshold: 0.4 }
        );
        counters.forEach((el) => co.observe(el));
        cleanups.push(() => co.disconnect());
      }
    }

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, [pathname]);

  return null;
}
