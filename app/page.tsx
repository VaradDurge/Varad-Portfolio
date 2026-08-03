import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Builds } from "@/components/Builds";
import { ProofTimeline } from "@/components/ProofTimeline";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <a
        href="#builds"
        className="absolute left-4 top-4 z-[100] -translate-y-16 bg-ink px-4 py-2 font-mono text-[11px] tracking-[0.12em] text-paper uppercase transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Builds />
        <ProofTimeline />
        <Contact />
      </main>
    </>
  );
}
