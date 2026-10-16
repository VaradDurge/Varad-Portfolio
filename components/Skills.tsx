"use client";

import { useState } from "react";
import { AccordionSection } from "@/components/AccordionSection";
import { skills } from "@/lib/content";

type Filter = (typeof skills.filters)[number];

export function Skills() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible =
    filter === "All"
      ? skills.items
      : skills.items.filter((item) => item.tags.includes(filter));

  return (
    <AccordionSection id="stack" number="04" title="stack" defaultOpen>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        {skills.filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`rounded-full border px-3 py-1 font-mono text-[11px] tracking-wide transition-colors ${
              filter === f
                ? "border-accent bg-accent text-bg"
                : "border-border text-muted hover:border-fg/40 hover:text-fg"
            }`}
          >
            {f}
          </button>
        ))}
        <span className="ml-1 font-mono text-[10px] text-muted">
          ( click to filter )
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {visible.map((item) => (
          <span
            key={item.label}
            className="rounded-full border border-dashed border-border px-3 py-1.5 font-mono text-[11px] text-fg/90 transition-colors hover:border-fg/40"
          >
            {item.label}
          </span>
        ))}
      </div>
    </AccordionSection>
  );
}
