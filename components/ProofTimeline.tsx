import { BrandMark } from "@/components/BrandMark";
import { proofClusters } from "@/lib/content";

export function ProofTimeline() {
  return (
    <section id="proof" className="section-pad border-t border-line py-14 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 font-mono text-[11px] tracking-[0.14em] text-ink-mute uppercase">
          Signal
        </h2>

        <div className="space-y-10">
          {proofClusters.map((cluster) => (
            <div key={cluster.id}>
              <h3 className="mb-3 font-mono text-[10px] tracking-[0.16em] text-ink-mute/80 uppercase">
                {cluster.label}
              </h3>
              <ul className="list-none space-y-4 border-l border-line pl-4">
                {cluster.items.map((item) => (
                  <li key={item.id} className="space-y-1">
                    <p className="font-sans text-[0.98rem] font-medium tracking-[-0.01em] text-ink">
                      <span className="inline-flex flex-wrap items-center gap-x-2 gap-y-1.5">
                        {item.marks.map((mark, i) => (
                          <span
                            key={mark.label}
                            className="inline-flex items-center gap-1.5"
                          >
                            {i > 0 && (
                              <span
                                className="mx-0.5 text-ink-mute/50"
                                aria-hidden="true"
                              >
                                ·
                              </span>
                            )}
                            <BrandMark id={mark.logo} title={mark.label} />
                            <span>{mark.label}</span>
                          </span>
                        ))}
                      </span>
                    </p>
                    <p className="text-[0.95rem] leading-relaxed text-ink-mute">
                      {item.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
