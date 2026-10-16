"use client";

import { useId, useState } from "react";

export function AccordionSection({
  id,
  number,
  title,
  defaultOpen = false,
  children,
}: {
  id: string;
  number: string;
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <section
      id={id}
      className="scroll-mt-28 border-t border-dashed border-border"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="group flex w-full items-center justify-between gap-4 py-5 text-left"
        >
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-[11px] tracking-wider text-muted">
              ({number})
            </span>
            <h2 className="font-serif text-2xl tracking-[-0.02em] text-fg sm:text-[1.75rem]">
              {title}
            </h2>
          </div>
          <span
            aria-hidden="true"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border font-mono text-lg text-muted transition-colors group-hover:border-fg/40 group-hover:text-fg"
          >
            {open ? "−" : "+"}
          </span>
        </button>

        <div
          id={panelId}
          hidden={!open}
          className="pb-8"
        >
          {children}
        </div>
      </div>
    </section>
  );
}
