import type { BrandId } from "@/components/BrandMark";

export const site = {
  name: "Varad Durge",
  brand: "Varad Durge",
  title: "Varad Durge — Founder of Argus Labs",
  description:
    "Founder of Argus Labs. Undergraduate at PICT, Pune. Building forensic observability for AI agent pipelines.",
  url: "https://varaddurge.dev",
};

export const hero = {
  name: "Varad Durge.",
  tagline:
    "Building forensic observability for AI agent pipelines. Founder of Argus Labs · ECE @ PICT ’27.",
  cta: { label: "see my work", href: "#builds" },
  chips: [
    { label: "building Argus", href: "https://arguslabs.in" },
    { label: "16VC Founder Fellow", href: "https://16vc.co" },
    { label: "open to founders", href: "#contact" },
  ],
  banner: "/banner.png",
  profile: "/profile.jpg",
};

export const about = {
  paragraphs: [
    "I’m 20, studying Electronics and Computer Engineering at PICT, Pune (Class of 2027). I founded Argus Labs, co-build Kami, and spend time in founder programs and builder rooms around India.",
    "Argus is forensic observability for AI agent pipelines — currently in beta. I care about shipping systems that hold up when agents fail in production, not just demos that look good in a slide deck.",
  ],
  links: [
    {
      label: "Argus Labs",
      href: "https://x.com/VaraadDurgaay/status/2107335870475104563?s=20",
    },
    {
      label: "Kami",
      href: "https://x.com/VaraadDurgaay/status/2080681555916423679?s=20",
    },
  ],
  snapshot: [
    "Building Argus Labs (beta).",
    "Co-building Kami.",
    "16VC Founder Fellow.",
    "In founder rooms across India.",
  ],
};

export type BuildLink = {
  label: "Website" | "GitHub";
  href: string;
};

export type Build = {
  id: string;
  name: string;
  status: string;
  year: string;
  featured: boolean;
  blurb: string;
  stack: string[];
  links: BuildLink[];
};

export const builds: Build[] = [
  {
    id: "argus",
    name: "Argus Labs",
    status: "Beta",
    year: "2025",
    featured: true,
    blurb: "Forensic observability for AI agent pipelines.",
    stack: ["TypeScript", "Node.js", "React", "Postgres"],
    links: [
      { label: "Website", href: "https://arguslabs.in" },
      { label: "GitHub", href: "https://github.com/VaradDurge/ARGUS" },
    ],
  },
  {
    id: "kami",
    name: "Kami",
    status: "Live",
    year: "2025",
    featured: true,
    blurb: "AI GTM for early-stage startups. 57★ on GitHub.",
    stack: ["TypeScript", "React", "Python", "LLMs"],
    links: [
      { label: "Website", href: "https://www.trykami.app" },
      { label: "GitHub", href: "https://github.com/saranambiar/kami" },
    ],
  },
  {
    id: "promptfuzz",
    name: "PromptFuzz",
    status: "Public",
    year: "2025",
    featured: true,
    blurb: "Adversarial LLM security testing CLI.",
    stack: ["Python", "Click", "httpx", "pytest"],
    links: [
      { label: "GitHub", href: "https://github.com/VaradDurge/PromptFuzz" },
    ],
  },
];

export type ProofMark = {
  logo: BrandId;
  label: string;
};

export type ProofItem = {
  id: string;
  marks: ProofMark[];
  detail: string;
};

export type ProofCluster = {
  id: string;
  label: string;
  items: ProofItem[];
};

export const proofClusters: ProofCluster[] = [
  {
    id: "programs",
    label: "Programs",
    items: [
      {
        id: "build-club",
        marks: [
          { logo: "buildclub", label: "Build Club Pune" },
          { logo: "yc", label: "YC Bangalore School" },
        ],
        detail: "Validated Argus; selected for the one-day YC Bangalore School.",
      },
      {
        id: "16vc",
        marks: [{ logo: "16vc", label: "16VC Founder Fellowship" }],
        detail: "Founder Fellow — a few weeks into the program.",
      },
    ],
  },
  {
    id: "hackathons",
    label: "Hackathons",
    items: [
      {
        id: "hermes",
        marks: [
          { logo: "growthx", label: "GrowthX" },
          { logo: "hermes", label: "Hermes Build-a-Thon" },
        ],
        detail: "Top teams in Pune; mentor Nishad reached out to work together.",
      },
    ],
  },
  {
    id: "finals",
    label: "Final rounds",
    items: [
      {
        id: "ef",
        marks: [{ logo: "ef", label: "EF Bangalore" }],
        detail:
          "Selected for EF Bangalore — said no due to academic commitments.",
      },
      {
        id: "naitive",
        marks: [
          { logo: "naitive", label: "nAItive" },
          { logo: "hfarm", label: "H-FARM" },
        ],
        detail:
          "Final rounds for nAItive — the AI-native founder fellowship by Leonid Boguslavsky at H-FARM, Italy.",
      },
    ],
  },
  {
    id: "circuit",
    label: "Circuit",
    items: [
      {
        id: "presence",
        marks: [
          { logo: "claude", label: "Claude Mumbai" },
          { logo: "cursor", label: "Cafe Cursor" },
        ],
        detail: "Recent stops on the builder circuit (Cafe Cursor, 25 Jul).",
      },
    ],
  },
];

export const skills = {
  filters: ["All", "Founder", "Product", "Engineering"] as const,
  items: [
    { label: "TypeScript", tags: ["Engineering", "Product"] },
    { label: "React", tags: ["Engineering", "Product"] },
    { label: "Next.js", tags: ["Engineering", "Product"] },
    { label: "Node.js", tags: ["Engineering"] },
    { label: "Python", tags: ["Engineering"] },
    { label: "Postgres", tags: ["Engineering"] },
    { label: "LLMs / Agents", tags: ["Engineering", "Product", "Founder"] },
    { label: "Observability", tags: ["Engineering", "Founder"] },
    { label: "GTM", tags: ["Founder", "Product"] },
    { label: "Fundraising", tags: ["Founder"] },
    { label: "Product Design", tags: ["Product", "Founder"] },
    { label: "Git / GitHub", tags: ["Engineering"] },
    { label: "Vercel", tags: ["Engineering"] },
    { label: "System Design", tags: ["Engineering"] },
  ],
};

export type ContactIcon =
  | "email"
  | "x"
  | "linkedin"
  | "instagram"
  | "github";

export type ContactLink = {
  label: string;
  href: string;
  icon: ContactIcon;
};

export const contacts: ContactLink[] = [
  {
    label: "Email",
    href: "mailto:varaddurge@gmail.com",
    icon: "email",
  },
  {
    label: "X",
    href: "https://x.com/VaraadDurgaay",
    icon: "x",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/varaddurge",
    icon: "linkedin",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/vsdurgaay/",
    icon: "instagram",
  },
  {
    label: "GitHub",
    href: "https://github.com/VaradDurge",
    icon: "github",
  },
];

export const contactCloser =
  "Building in public. Happy to talk Argus, Kami, or founder things.";

export const nav = [
  { label: "about", href: "#about" },
  { label: "signal", href: "#signal" },
  { label: "builds", href: "#builds" },
  { label: "stack", href: "#stack" },
  { label: "contact", href: "#contact" },
];

export const commandLinks = [
  { label: "About", href: "#about", group: "Navigate" },
  { label: "Signal", href: "#signal", group: "Navigate" },
  { label: "Builds", href: "#builds", group: "Navigate" },
  { label: "Stack", href: "#stack", group: "Navigate" },
  { label: "Contact", href: "#contact", group: "Navigate" },
  { label: "Argus Labs", href: "https://arguslabs.in", group: "Links", external: true },
  { label: "Kami", href: "https://www.trykami.app", group: "Links", external: true },
  { label: "GitHub", href: "https://github.com/VaradDurge", group: "Links", external: true },
  { label: "Email", href: "mailto:varaddurge@gmail.com", group: "Links", external: true },
];
