import { ContactIconMark } from "@/components/ContactIcons";
import { contacts } from "@/lib/content";

export function Contact() {
  return (
    <section
      id="contact"
      className="section-pad border-t border-line py-14 sm:py-16"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-6 font-mono text-[11px] tracking-[0.14em] text-ink-mute uppercase">
          Contact
        </h2>

        <ul className="flex flex-wrap items-center gap-5">
          {contacts.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                target={c.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  c.href.startsWith("mailto:") ? undefined : "noopener noreferrer"
                }
                aria-label={c.label}
                title={c.label}
                className="inline-flex text-ink-soft/70 transition-colors hover:text-signal"
              >
                <ContactIconMark icon={c.icon} />
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-12 font-mono text-[10px] tracking-[0.12em] text-ink-mute/70 uppercase">
          © {new Date().getFullYear()} Varad Durge
        </p>
      </div>
    </section>
  );
}
