import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpenCode Skills — Agent Skill Reference",
  description:
    "Complete reference for OpenCode agent skills: names, descriptions, trigger phrases, use cases, and combo suggestions. Find the right skill for any task.",
  keywords: ["opencode", "skills", "agent", "ai", "cli", "reference"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
