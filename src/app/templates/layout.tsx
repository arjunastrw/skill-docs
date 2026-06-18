import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agent Templates",
  description:
    "Ready-to-use agent configuration templates for code review, testing, documentation, security auditing, and DevOps. Copy and deploy in seconds.",
  openGraph: {
    title: "Agent Templates — Agent Hub",
    description:
      "8 pre-built agent configurations. Code reviewer, test writer, documentation agent, security auditor — copy the config and go.",
  },
};

export default function TemplatesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
