import type { Metadata } from "next";
import { ClientShell } from "@/components/client-shell";
import "./globals.css";

const baseUrl = "https://agent-hub.web.id";
const siteName = "Agent Hub";
const siteDescription =
  "Complete reference for AI agent developers: CLI comparison, agent skills, MCP servers, AI models, prompt templates, and configuration guides.";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${siteName} — AI Agent Reference`,
    template: `%s — ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "agent",
    "skills",
    "ai",
    "cli",
    "mcp",
    "models",
    "prompts",
    "reference",
    "opencode",
    "claude code",
    "codex",
    "copilot",
  ],
  authors: [{ name: "Agent Hub Contributors" }],
  creator: "Agent Hub",
  publisher: "Agent Hub",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName,
    title: `${siteName} — AI Agent Reference`,
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — AI Agent Reference`,
    description: siteDescription,
    images: ["/og-image.png"],
    creator: "@agent_hub",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
