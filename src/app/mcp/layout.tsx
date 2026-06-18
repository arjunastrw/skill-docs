import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MCP Servers",
  description:
    "29 Model Context Protocol servers catalog. Browse filesystem, database, API, browser, search, and communication servers with install guides.",
  openGraph: {
    title: "MCP Server Catalog — Agent Hub",
    description:
      "Extend your agent with 29 MCP servers. Each with install commands, environment variables, and real use cases.",
  },
};

export default function MCPLayout({ children }: { children: React.ReactNode }) {
  return children;
}
