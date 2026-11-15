"use client";

import { useState } from "react";
import { AccordionSection } from "@/components/AccordionSection";
import { builds, type Build } from "@/lib/content";

function BuildCard({ build }: { build: Build }) {
  const [open, setOpen] = useState(build.featured);

  return (
    <article className="rounded-xl border border-dashed border-border p-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="mb-2 flex flex-wrap items-center gap-2">
            {build.status ? (
              <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] tracking-wider text-muted uppercase">
                {build.status}
              </span>
            ) : null}
            {build.featured ? (
              <span className="font-mono text-[10px] tracking-wider text-fg uppercase">
                ★ Featured
              </span>
            ) : null}
          </div>
          <h3 className="font-serif text-xl tracking-[-0.02em] text-fg">
            {build.name}
          </h3>
          <p className="mt-0.5 font-mono text-[11px] text-muted">{build.year}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {build.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted transition-colors hover:border-fg/40 hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted">{build.blurb}</p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {build.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-border bg-surface px-2 py-0.5 font-mono text-[10px] text-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mt-4 font-mono text-[11px] tracking-wide text-muted underline decoration-border underline-offset-4 transition-colors hover:text-fg hover:decoration-fg"
      >
        {open ? "Hide details" : "Show details"}
      </button>

      {open ? (
        <div className="mt-3 border-t border-dashed border-border pt-3 text-sm text-muted">
          <p>
            {build.name} — {build.blurb}{" "}
            {build.links.length > 0
              ? `Available via ${build.links.map((l) => l.label).join(" & ")}.`
              : null}
          </p>
        </div>
      ) : null}
    </article>
  );
}

export function Builds() {
  return (
    <AccordionSection id="builds" number="03" title="builds" defaultOpen>
      <div className="space-y-3">
        {builds.map((build) => (
          <BuildCard key={build.id} build={build} />
        ))}
      </div>
    </AccordionSection>
  );
}
