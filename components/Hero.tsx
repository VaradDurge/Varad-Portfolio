"use client";

import { BrandMark } from "@/components/BrandMark";
import { about, hero, site } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 65% 55% at 92% 8%, rgba(15, 110, 106, 0.16), transparent 58%),
            radial-gradient(ellipse 45% 40% at 8% 78%, rgba(184, 90, 42, 0.09), transparent 55%),
            radial-gradient(ellipse 35% 30% at 55% 100%, rgba(20, 143, 137, 0.07), transparent 60%),
            linear-gradient(165deg, #f8f5ef 0%, #f4f1eb 55%, #efe8dc 100%)
          `,
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-24 h-56 w-56 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(15, 110, 106, 0.22), transparent 70%)",
        }}
      />

      <div className="section-pad relative z-10 mx-auto max-w-3xl">
        <p className="mb-5 font-mono text-[11px] tracking-[0.14em] text-signal uppercase">
          Pune · PICT ’27
        </p>

        <h1 className="flex flex-wrap items-center gap-x-3 gap-y-2 font-sans text-[clamp(2.25rem,5.5vw,3.25rem)] font-medium tracking-[-0.02em] text-ink">
          <BrandMark
            id="16vc"
            title="16VC"
            className="!h-[0.55em] !w-[1.1em] !translate-y-0"
          />
          <span>{site.brand}</span>
        </h1>

        <a
          href={hero.fellow.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 rounded-sm bg-signal/10 px-2.5 py-1 font-mono text-[11px] tracking-[0.12em] text-signal uppercase transition-colors hover:bg-signal/15 hover:text-signal-bright"
        >
          <BrandMark id="16vc" title="16VC" className="!translate-y-0" />
          <span>{hero.fellow.label}</span>
        </a>

        <div
          aria-hidden="true"
          className="mt-5 h-[2px] rounded-full bg-gradient-to-r from-signal via-signal/50 to-rust/40"
          style={{ width: "4.5rem" }}
        />

        <p className="mt-6 font-sans text-[1.05rem] font-normal tracking-[-0.01em] text-ink-soft">
          {hero.headlineBefore}
          <a
            href={hero.headlineLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-signal underline decoration-signal/35 underline-offset-4 transition-colors hover:text-signal-bright hover:decoration-signal-bright"
          >
            {hero.headlineLink.label}
          </a>
          {hero.headlineAfter}
        </p>

        <p className="mt-3 max-w-xl text-[1.02rem] leading-relaxed text-ink-mute">
          {hero.support}
        </p>

        <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-ink-mute">
          {about.before}
          <a
            href={about.argus.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-signal underline decoration-signal/35 underline-offset-4 transition-colors hover:text-signal-bright hover:decoration-signal-bright"
          >
            {about.argus.label}
          </a>
          {about.mid}
          <a
            href={about.kami.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-rust underline decoration-rust/35 underline-offset-4 transition-colors hover:text-rust/80 hover:decoration-rust"
          >
            {about.kami.label}
          </a>
          {about.after}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {hero.ctas.map((cta, index) =>
            index === 0 ? (
              <a
                key={cta.label}
                href={cta.href}
                target={cta.external ? "_blank" : undefined}
                rel={cta.external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center bg-signal px-4 py-2.5 font-mono text-[11px] tracking-[0.12em] text-paper uppercase transition-colors hover:bg-signal-bright"
              >
                {cta.label}
              </a>
            ) : (
              <a
                key={cta.label}
                href={cta.href}
                className="inline-flex items-center border border-signal/25 px-4 py-2.5 font-mono text-[11px] tracking-[0.12em] text-signal uppercase transition-colors hover:border-signal/50 hover:bg-signal/5"
              >
                {cta.label}
              </a>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
