"use client";

import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      className="flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-fg/5 hover:text-fg"
    >
      {isLight ? (
        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 3.5a1 1 0 0 1 1 1V6a1 1 0 1 1-2 0V4.5a1 1 0 0 1 1-1Zm0 12.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm7.5-3.5a1 1 0 0 1-1 1H17a1 1 0 1 1 0-2h1.5a1 1 0 0 1 1 1ZM7 12a1 1 0 0 1-1 1H4.5a1 1 0 1 1 0-2H6a1 1 0 0 1 1 1Zm9.95 5.45a1 1 0 0 1-1.41 0l-1.06-1.06a1 1 0 1 1 1.41-1.41l1.06 1.06a1 1 0 0 1 0 1.41ZM8.52 8.52a1 1 0 0 1-1.41 0L6.05 7.46A1 1 0 0 1 7.46 6.05l1.06 1.06a1 1 0 0 1 0 1.41Zm8.97-2.06a1 1 0 0 1 0 1.41l-1.06 1.06a1 1 0 1 1-1.41-1.41l1.06-1.06a1 1 0 0 1 1.41 0ZM8.52 15.48a1 1 0 0 1 0 1.41l-1.06 1.06a1 1 0 1 1-1.41-1.41l1.06-1.06a1 1 0 0 1 1.41 0ZM12 17a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V18a1 1 0 0 1 1-1Z"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
          <path
            fill="currentColor"
            d="M21 14.3A8.5 8.5 0 0 1 9.7 3 7 7 0 1 0 21 14.3Z"
          />
        </svg>
      )}
    </button>
  );
}
