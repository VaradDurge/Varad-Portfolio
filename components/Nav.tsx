"use client";

import { useEffect, useState } from "react";
import { CommandPalette } from "@/components/CommandPalette";
import { ThemeToggle } from "@/components/ThemeToggle";
import { nav, site } from "@/lib/content";

export function Nav() {
  const [cmdOpen, setCmdOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmdOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-3">
        <div className="pointer-events-auto flex items-center gap-1 rounded-full border border-border bg-surface/80 px-2 py-1.5 shadow-lg backdrop-blur-md sm:gap-2 sm:px-3">
          <a
            href="#top"
            className="rounded-full px-2.5 py-1 font-mono text-[11px] tracking-wide text-fg transition-colors hover:bg-fg/5"
          >
            {site.name.split(" ")[0].toLowerCase()}
          </a>

          <nav
            className="hidden items-center gap-0.5 sm:flex"
            aria-label="Primary"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-2.5 py-1 font-mono text-[11px] tracking-wide text-muted transition-colors hover:bg-fg/5 hover:text-fg"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mx-0.5 h-4 w-px bg-border" aria-hidden="true" />

          <button
            type="button"
            onClick={() => setCmdOpen(true)}
            className="hidden items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[11px] tracking-wide text-muted transition-colors hover:bg-fg/5 hover:text-fg md:inline-flex"
            aria-label="Open command palette"
          >
            <span>cmd</span>
            <kbd className="rounded border border-border px-1 py-px text-[10px]">
              ⌘K
            </kbd>
          </button>

          <ThemeToggle />
        </div>
      </header>
      <CommandPalette open={cmdOpen} onClose={() => setCmdOpen(false)} />
    </>
  );
}
