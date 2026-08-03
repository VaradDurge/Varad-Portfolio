type BrandId =
  | "yc"
  | "ef"
  | "16vc"
  | "cursor"
  | "claude"
  | "buildclub"
  | "growthx"
  | "hermes"
  | "naitive"
  | "hfarm";

const sizeClass = "h-[1em] w-[1em] shrink-0 translate-y-[-0.05em]";

export function BrandMark({
  id,
  title,
  className = "",
}: {
  id: BrandId;
  title?: string;
  className?: string;
}) {
  const cls = `${sizeClass} ${className}`.trim();

  switch (id) {
    case "yc":
      return (
        <svg
          viewBox="0 0 24 24"
          className={cls}
          aria-hidden="true"
          focusable="false"
        >
          {title ? <title>{title}</title> : null}
          <rect width="24" height="24" rx="3" fill="#F26522" />
          <path
            d="M7.2 6.2h2.55l2.25 4.85L14.3 6.2H16.8l-3.55 6.55V17.8h-2.35v-5.05L7.2 6.2z"
            fill="#fff"
          />
        </svg>
      );
    case "ef":
      return (
        <svg
          viewBox="0 0 24 24"
          className={cls}
          aria-hidden="true"
          focusable="false"
        >
          {title ? <title>{title}</title> : null}
          <rect width="24" height="24" rx="3" fill="#6200EE" />
          <text
            x="12"
            y="16.2"
            textAnchor="middle"
            fill="#FF7043"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="11"
            fontWeight="800"
            letterSpacing="-0.04em"
          >
            EF
          </text>
        </svg>
      );
    case "16vc":
      // Official 16VC wordmark (white on black) — matches Cursor Networking / brand mark
      return (
        <svg
          viewBox="0 0 48 24"
          className={`h-[1em] w-[2em] shrink-0 translate-y-[-0.05em] ${className}`.trim()}
          aria-hidden="true"
          focusable="false"
        >
          {title ? <title>{title}</title> : null}
          <rect width="48" height="24" rx="3" fill="#0A0A0A" />
          <text
            x="24"
            y="16"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
            fontSize="11"
            fontWeight="700"
            letterSpacing="-0.03em"
          >
            16VC
          </text>
        </svg>
      );
    case "cursor":
      return (
        <svg
          viewBox="0 0 24 24"
          className={cls}
          aria-hidden="true"
          focusable="false"
        >
          {title ? <title>{title}</title> : null}
          <rect width="24" height="24" rx="5" fill="#EDEDEB" />
          <g transform="rotate(90 12 12)">
            <path
              d="M12 4.2 19.2 8.4v7.2L12 19.8 4.8 15.6V8.4L12 4.2Z"
              fill="#14120F"
            />
            <path
              d="M12 7.1 15.8 14.2h-2.1l-.9-1.8H11.2l-.9 1.8H8.2L12 7.1Z"
              fill="#fff"
            />
          </g>
        </svg>
      );
    case "claude":
      return (
        <svg
          viewBox="0 0 100 100"
          className={cls}
          aria-hidden="true"
          focusable="false"
        >
          {title ? <title>{title}</title> : null}
          <path
            fill="#C15F3C"
            d="m19.6 66.5 19.7-11 .3-1-.3-.5h-1l-3.3-.2-11.2-.3L14 53l-9.5-.5-2.4-.5L0 49l.2-1.5 2-1.3 2.9.2 6.3.5 9.5.6 6.9.4L38 49.1h1.6l.2-.7-.5-.4-.4-.4L29 41l-10.6-7-5.6-4.1-3-2-1.5-2-.6-4.2 2.7-3 3.7.3.9.2 3.7 2.9 8 6.1L37 36l1.5 1.2.6-.4.1-.3-.7-1.1L33 25l-6-10.4-2.7-4.3-.7-2.6c-.3-1-.4-2-.4-3l3-4.2L28 0l4.2.6L33.8 2l2.6 6 4.1 9.3L47 29.9l2 3.8 1 3.4.3 1h.7v-.5l.5-7.2 1-8.7 1-11.2.3-3.2 1.6-3.8 3-2L61 2.6l2 2.9-.3 1.8-1.1 7.7L59 27.1l-1.5 8.2h.9l1-1.1 4.1-5.4 6.9-8.6 3-3.5L77 13l2.3-1.8h4.3l3.1 4.7-1.4 4.9-4.4 5.6-3.7 4.7-5.3 7.1-3.2 5.7.3.4h.7l12-2.6 6.4-1.1 7.6-1.3 3.5 1.6.4 1.6-1.4 3.4-8.2 2-9.6 2-14.3 3.3-.2.1.2.3 6.4.6 2.8.2h6.8l12.6 1 3.3 2 1.9 2.7-.3 2-5.1 2.6-6.8-1.6-16-3.8-5.4-1.3h-.8v.4l4.6 4.5 8.3 7.5L89 80.1l.5 2.4-1.3 2-1.4-.2-9.2-7-3.6-3-8-6.8h-.5v.7l1.8 2.7 9.8 14.7.5 4.5-.7 1.4-2.6 1-2.7-.6-5.8-8-6-9-4.7-8.2-.5.4-2.9 30.2-1.3 1.5-3 1.2-2.5-2-1.4-3 1.4-6.2 1.6-8 1.3-6.4 1.2-7.9.7-2.6v-.2H49L43 72l-9 12.3-7.2 7.6-1.7.7-3-1.5.3-2.8L24 86l10-12.8 6-7.9 4-4.6-.1-.5h-.3L17.2 77.4l-4.7.6-2-2 .2-3 1-1 8-5.5Z"
          />
        </svg>
      );
    case "buildclub":
      return (
        <svg
          viewBox="0 0 24 24"
          className={cls}
          aria-hidden="true"
          focusable="false"
        >
          {title ? <title>{title}</title> : null}
          <rect width="24" height="24" rx="5" fill="#111" />
          <circle cx="7" cy="12" r="2.4" fill="#3B82F6" />
          <path
            d="M12 8.8 14.8 12 12 15.2 9.2 12 12 8.8Z"
            fill="#EF4444"
          />
          <circle cx="17" cy="12" r="2.4" fill="#8B5CF6" />
        </svg>
      );
    case "growthx":
      return (
        <svg
          viewBox="0 0 24 24"
          className={cls}
          aria-hidden="true"
          focusable="false"
        >
          {title ? <title>{title}</title> : null}
          <rect width="24" height="24" rx="4" fill="#2563EB" />
          <path
            d="M7.2 6.4 12 11.2 16.8 6.4h2.2L13.1 12.3 19 18.2h-2.2L12 13.4 7.2 18.2H5L10.9 12.3 5 6.4h2.2Z"
            fill="#fff"
          />
        </svg>
      );
    case "hermes":
      return (
        <svg
          viewBox="0 0 24 24"
          className={cls}
          aria-hidden="true"
          focusable="false"
        >
          {title ? <title>{title}</title> : null}
          <rect width="24" height="24" rx="4" fill="#0B0F19" />
          <path
            d="M12 4.5c2.8 0 5 1.9 5 4.4 0 1.6-.9 3-2.3 3.8L16.5 19h-2.3l-1.4-4.2h-1.6L9.8 19H7.5l1.8-6.3C7.9 11.9 7 10.5 7 8.9c0-2.5 2.2-4.4 5-4.4Zm0 2.1c-1.5 0-2.7 1-2.7 2.3S10.5 11.2 12 11.2s2.7-1 2.7-2.3S13.5 6.6 12 6.6Z"
            fill="#F5C542"
          />
        </svg>
      );
    case "naitive":
      // nAItive fellowship mark — typography from naitive.institute / native.institute
      return (
        <svg
          viewBox="0 0 48 24"
          className={`h-[1em] w-[2em] shrink-0 translate-y-[-0.05em] ${className}`.trim()}
          aria-hidden="true"
          focusable="false"
        >
          {title ? <title>{title}</title> : null}
          <rect width="48" height="24" rx="3" fill="#F4F0E8" />
          <text
            x="5"
            y="16.2"
            fill="#1A1814"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontSize="11"
            fontWeight="600"
          >
            n
          </text>
          <text
            x="12.5"
            y="16.2"
            fill="#E24B2A"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontSize="11"
            fontWeight="700"
          >
            AI
          </text>
          <text
            x="25.5"
            y="16.2"
            fill="#1A1814"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontSize="11"
            fontWeight="600"
          >
            tive
          </text>
        </svg>
      );
    case "hfarm":
      // H-FARM campus mark (partner for nAItive)
      return (
        <svg
          viewBox="0 0 24 24"
          className={cls}
          aria-hidden="true"
          focusable="false"
        >
          {title ? <title>{title}</title> : null}
          <rect width="24" height="24" rx="4" fill="#111" />
          <path
            d="M7.2 6.2h2.2v4.3h5.2V6.2h2.2v11.6h-2.2v-4.9H9.4v4.9H7.2V6.2Z"
            fill="#C6E000"
          />
        </svg>
      );
    default:
      return null;
  }
}

export type { BrandId };
