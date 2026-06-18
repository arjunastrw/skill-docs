import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prompt Templates",
  description:
    "Curated AI agent prompt templates for coding, debugging, design, writing, analysis, and DevOps. Copy and use with any compatible CLI.",
  openGraph: {
    title: "Prompt Templates — Agent Hub",
    description:
      "15 community-curated prompt templates for AI agents. Copy-ready prompts for coding, debugging, design, DevOps, and more.",
  },
};

export default function PromptsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
