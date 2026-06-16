import type { Metadata } from "next";
import { ClientShell } from "@/components/client-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agent Hub — AI Agent Reference",
  description:
    "Complete reference for AI agent developers: CLI comparison, agent skills, MCP servers, AI models, and configuration guides.",
  keywords: ["agent", "skills", "ai", "cli", "mcp", "models", "reference", "opencode"],
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
