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
  headlineBefore: "Founder of ",
  headlineLink: {
    label: "Argus Labs",
    href: "https://arguslabs.in",
  },
  headlineAfter: " · ECE @ PICT",
  fellow: {
    label: "16VC Founder Fellow",
    href: "https://16vc.co",
  },
  support:
    "Building forensic observability for AI agent pipelines. Currently in beta.",
  ctas: [
    { label: "Argus", href: "https://arguslabs.in", external: true },
    { label: "Contact", href: "#contact", external: false },
  ],
};

export const about = {
  before:
    "I’m 20, studying Electronics and Computer Engineering at PICT, Pune (Class of 2027). I founded ",
  argus: {
    label: "Argus Labs",
    href: "https://arguslabs.in",
  },
  mid: ", co-build ",
  kami: {
    label: "Kami",
    href: "https://www.trykami.app",
  },
  after: ", and spend time in founder programs and builder rooms around India.",
};

export type BuildLink = {
  label: "Website" | "GitHub";
  href: string;
};

export type Build = {
  id: string;
  name: string;
  status: string;
  blurb: string;
  links: BuildLink[];
};

export const builds: Build[] = [
  {
    id: "argus",
    name: "Argus Labs",
    status: "Beta",
    blurb: "Forensic observability for AI agent pipelines.",
    links: [
      { label: "Website", href: "https://arguslabs.in" },
      { label: "GitHub", href: "https://github.com/VaradDurge/ARGUS" },
    ],
  },
  {
    id: "kami",
    name: "Kami",
    status: "Open source",
    blurb: "AI GTM for early-stage startups. 57★ on GitHub.",
    links: [
      { label: "Website", href: "https://www.trykami.app" },
      { label: "GitHub", href: "https://github.com/saranambiar/kami" },
    ],
  },
  {
    id: "promptfuzz",
    name: "PromptFuzz",
    status: "Public",
    blurb: "Adversarial LLM security testing CLI.",
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
        detail: "Reached the final rounds of the EF Bangalore interview process.",
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

export const nav = [
  { label: "Work", href: "#builds" },
  { label: "Signal", href: "#proof" },
  { label: "Contact", href: "#contact" },
];
