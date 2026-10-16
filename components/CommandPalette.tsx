"use client";

import { useEffect, useMemo, useState } from "react";
import { commandLinks } from "@/lib/content";

export function CommandPalette({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commandLinks;
    return commandLinks.filter((item) => item.label.toLowerCase().includes(q));
  }, [query]);

  useEffect(() => {
    if (!open) {
      setQuery("");
      setActive(0);
    }
  }, [open]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((i) => Math.min(i + 1, Math.max(filtered.length - 1, 0)));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        const item = filtered[active];
        if (!item) return;
        if (item.external) {
          window.open(item.href, "_blank", "noopener,noreferrer");
        } else {
          window.location.href = item.href;
        }
        onClose();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, filtered, active, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-start justify-center bg-bg/70 px-4 pt-[18vh] backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        className="w-full max-w-md overflow-hidden rounded-xl border border-border bg-surface shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-b border-border px-3 py-2.5">
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Jump to section or link…"
            className="w-full bg-transparent font-mono text-sm text-fg outline-none placeholder:text-muted"
          />
        </div>
        <ul className="max-h-72 overflow-auto py-1">
          {filtered.length === 0 ? (
            <li className="px-3 py-3 font-mono text-xs text-muted">No matches</li>
          ) : (
            filtered.map((item, index) => (
              <li key={`${item.group}-${item.label}`}>
                <button
                  type="button"
                  className={`flex w-full items-center justify-between px-3 py-2 text-left text-sm transition-colors ${
                    index === active
                      ? "bg-fg/8 text-fg"
                      : "text-muted hover:bg-fg/5 hover:text-fg"
                  }`}
                  onMouseEnter={() => setActive(index)}
                  onClick={() => {
                    if (item.external) {
                      window.open(item.href, "_blank", "noopener,noreferrer");
                    } else {
                      window.location.href = item.href;
                    }
                    onClose();
                  }}
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                    {item.group}
                  </span>
                </button>
              </li>
            ))
          )}
        </ul>
        <div className="border-t border-border px-3 py-2 font-mono text-[10px] tracking-wider text-muted uppercase">
          ↑↓ navigate · ↵ open · esc close
        </div>
      </div>
    </div>
  );
}
