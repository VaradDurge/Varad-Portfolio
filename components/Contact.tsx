"use client";

import { AccordionSection } from "@/components/AccordionSection";
import { ContactIconMark } from "@/components/ContactIcons";
import { contactCloser, contacts } from "@/lib/content";

export function Contact() {
  return (
    <AccordionSection id="contact" number="05" title="contact" defaultOpen>
      <p className="mb-5 max-w-xl text-sm leading-relaxed text-muted">
        {contactCloser}
      </p>
      <div className="flex flex-wrap gap-3">
        {contacts.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={
              item.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
            aria-label={item.label}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-dashed border-border text-muted transition-colors hover:border-fg/40 hover:text-fg"
          >
            <ContactIconMark icon={item.icon} />
          </a>
        ))}
      </div>
    </AccordionSection>
  );
}
