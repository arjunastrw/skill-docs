import type { Metadata } from "next";
import { ClientShell } from "@/components/client-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agent Skills — Agent Skill Reference",
  description:
    "Complete reference for agent skills: names, descriptions, trigger phrases, use cases, and combo suggestions. Find the right skill for any task.",
  keywords: ["agent", "skills", "ai", "cli", "reference", "opencode", "mcp"],
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
