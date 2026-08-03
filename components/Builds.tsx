import { builds } from "@/lib/content";

export function Builds() {
  return (
    <section id="builds" className="section-pad border-t border-line py-14 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 font-mono text-[11px] tracking-[0.14em] text-ink-mute uppercase">
          Work
        </h2>

        <ul className="divide-y divide-line border-y border-line">
          {builds.map((build) => (
            <li
              key={build.id}
              className="flex flex-col gap-3 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-sans text-[1.1rem] font-medium tracking-[-0.01em] text-ink">
                    {build.name}
                  </h3>
                  <span className="font-mono text-[10px] tracking-[0.12em] text-ink-mute uppercase">
                    {build.status}
                  </span>
                </div>
                <p className="mt-1.5 text-[0.98rem] leading-relaxed text-ink-mute">
                  {build.blurb}
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-3">
                {build.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] tracking-[0.1em] text-ink/50 uppercase transition-colors hover:text-signal"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
