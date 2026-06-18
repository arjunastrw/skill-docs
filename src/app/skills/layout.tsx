import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "103 agent skills for software engineering, media generation, design, and tooling. Find triggers, combos, and use cases for every skill.",
  openGraph: {
    title: "Agent Skills Catalog — Agent Hub",
    description:
      "Browse 103 specialized agent skills with trigger phrases, combo suggestions, and when-to-use guidance.",
  },
};

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
