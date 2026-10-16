"use client";

import Image from "next/image";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-10 sm:pt-32 sm:pb-14">
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-xl border border-dashed border-border">
          <div className="relative aspect-[2.35/1] w-full bg-surface">
            <Image
              src={hero.banner}
              alt="Startup poster — building Argus"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>

        <div className="relative -mt-10 ml-4 flex items-end gap-4 sm:-mt-12 sm:ml-6 sm:gap-5">
          <div className="glitch-hover relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border-2 border-bg shadow-xl sm:h-28 sm:w-28">
            <Image
              src={hero.profile}
              alt="Varad Durge"
              fill
              priority
              className="object-cover"
              sizes="112px"
            />
          </div>
        </div>

        <div className="mt-5 px-1 sm:px-2">
          <h1 className="font-serif text-[clamp(2.4rem,6vw,3.5rem)] leading-[1.05] tracking-[-0.02em] text-fg">
            {hero.name}
            <span
              aria-hidden="true"
              className="caret-blink ml-0.5 inline-block h-[0.85em] w-[0.08em] translate-y-[0.08em] bg-accent align-baseline"
            />
          </h1>

          <p className="mt-3 max-w-xl text-[0.98rem] leading-relaxed text-muted">
            {hero.tagline}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={hero.cta.href}
              className="inline-flex items-center rounded-full bg-accent px-4 py-2 font-mono text-[11px] tracking-wide text-bg transition-opacity hover:opacity-90"
            >
              {hero.cta.label}
            </a>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {hero.chips.map((chip) => (
              <a
                key={chip.label}
                href={chip.href}
                target={chip.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  chip.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="inline-flex items-center rounded-full border border-dashed border-border px-3 py-1.5 font-mono text-[11px] tracking-wide text-muted transition-colors hover:border-fg/40 hover:text-fg"
              >
                {chip.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
