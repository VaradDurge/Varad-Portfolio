"use client";

import { AccordionSection } from "@/components/AccordionSection";
import { about } from "@/lib/content";

export function About() {
  return (
    <AccordionSection id="about" number="01" title="about" defaultOpen>
      <div className="space-y-4 text-[0.98rem] leading-relaxed text-muted">
        <p>
          I’m 21, studying Electronics and Computer Engineering at PICT, Pune
          (Class of 2027). I founded{" "}
          <a
            href={about.links[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg underline decoration-border underline-offset-4 transition-colors hover:decoration-fg"
          >
            Argus Labs
          </a>
          , co-build{" "}
          <a
            href={about.links[1].href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg underline decoration-border underline-offset-4 transition-colors hover:decoration-fg"
          >
            Kami
          </a>
          , and spend time in founder programs and builder rooms around India.
        </p>
        <p>{about.paragraphs[1]}</p>
      </div>

      <div className="mt-6 rounded-xl border border-dashed border-border p-4">
        <p className="mb-3 font-mono text-[11px] tracking-wider text-muted uppercase">
          Snapshot
        </p>
        <ul className="space-y-2">
          {about.snapshot.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-fg/90"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </AccordionSection>
  );
}
