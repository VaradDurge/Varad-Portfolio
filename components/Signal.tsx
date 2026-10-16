"use client";

import { AccordionSection } from "@/components/AccordionSection";
import { BrandMark } from "@/components/BrandMark";
import { proofClusters } from "@/lib/content";

export function Signal() {
  return (
    <AccordionSection id="signal" number="02" title="signal" defaultOpen>
      <div className="space-y-6">
        {proofClusters.map((cluster) => (
          <div key={cluster.id}>
            <p className="mb-3 font-mono text-[11px] tracking-wider text-muted uppercase">
              {cluster.label}
            </p>
            <ul className="space-y-3">
              {cluster.items.map((item) => (
                <li
                  key={item.id}
                  className="rounded-xl border border-dashed border-border p-3.5"
                >
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    {item.marks.map((mark) => (
                      <span
                        key={mark.label}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-2 py-1 font-mono text-[11px] text-fg"
                      >
                        <BrandMark
                          id={mark.logo}
                          title={mark.label}
                          className="!translate-y-0"
                        />
                        {mark.label}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-muted">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </AccordionSection>
  );
}
