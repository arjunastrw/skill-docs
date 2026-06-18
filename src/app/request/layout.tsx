import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request Content",
  description:
    "Request new content for Agent Hub. Submit requests for skills, MCP servers, AI models, CLIs, prompts, or templates via GitHub issues.",
  openGraph: {
    title: "Request Content — Agent Hub",
    description:
      "Community-driven content requests. Suggest new agent skills, MCP servers, AI models, prompts, or templates.",
  },
};

export default function RequestLayout({ children }: { children: React.ReactNode }) {
  return children;
}
