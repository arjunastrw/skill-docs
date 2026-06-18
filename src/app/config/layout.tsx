import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agent Config",
  description:
    "Configuration reference for 8 agent CLIs. File locations, formats, sections, and best practices for CLAUDE.md, AGENTS.md, .cursorrules, and more.",
  openGraph: {
    title: "Agent Configuration Reference — Agent Hub",
    description:
      "How to configure every agent CLI. Side-by-side comparison of config files, locations, and best practices.",
  },
};

export default function ConfigLayout({ children }: { children: React.ReactNode }) {
  return children;
}
