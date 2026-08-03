"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-paper/85 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="section-pad mx-auto flex h-12 max-w-3xl items-center justify-between sm:h-14">
        <a
          href="#top"
          className="font-sans text-[13px] font-medium tracking-[-0.01em] text-ink"
        >
          {site.name}
        </a>
        <nav className="flex items-center gap-5" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] tracking-[0.1em] text-ink-mute uppercase transition-colors hover:text-signal"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
