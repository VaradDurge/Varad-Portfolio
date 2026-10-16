import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Signal } from "@/components/Signal";
import { Builds } from "@/components/Builds";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <a
        href="#about"
        className="absolute left-4 top-4 z-[100] -translate-y-16 rounded-full bg-accent px-4 py-2 font-mono text-[11px] tracking-wide text-bg uppercase transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <div className="accent-blur" aria-hidden="true" />
      <div className="side-guides" aria-hidden="true" />
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-grid opacity-60"
        aria-hidden="true"
      />
      <Nav />
      <main className="relative z-10 pb-24">
        <Hero />
        <About />
        <Signal />
        <Builds />
        <Skills />
        <Contact />
        <footer className="mx-auto mt-8 max-w-3xl border-t border-dashed border-border px-4 py-8 sm:px-6">
          <p className="font-mono text-[11px] tracking-wide text-muted">
            © {new Date().getFullYear()} Varad Durge
          </p>
        </footer>
      </main>
    </>
  );
}
