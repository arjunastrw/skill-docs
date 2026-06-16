export interface MCPServer {
  name: string;
  description: string;
  category:
    | "filesystem"
    | "database"
    | "api"
    | "browser"
    | "search"
    | "communication"
    | "memory";
  install: string;
  envVars: { name: string; description: string }[];
  useCases: string[];
}

export const mcpServers: MCPServer[] = [
  {
    name: "Filesystem",
    description:
      "Secure file system operations with configurable access controls. Read, write, move, search, and list files within allowed directories only.",
    category: "filesystem",
    install: "npx -y @modelcontextprotocol/server-filesystem <allowed-directory>",
    envVars: [
      {
        name: "--allowed-paths",
        description: "Comma-separated list of directories the server can access",
      },
    ],
    useCases: [
      "Read project files and documentation",
      "List directory structures for codebase analysis",
      "Write generated code to disk with permission control",
    ],
  },
  {
    name: "GitHub",
    description:
      "Full GitHub API access for repository management, issues, pull requests, code search, and workflow operations.",
    category: "api",
    install: "npx -y @modelcontextprotocol/server-github",
    envVars: [
      {
        name: "GITHUB_PERSONAL_ACCESS_TOKEN",
        description: "GitHub personal access token with repo and workflow scopes",
      },
    ],
    useCases: [
      "Create and manage issues and pull requests",
      "Search across repositories",
      "Read and write file contents in repos",
    ],
  },
  {
    name: "Brave Search",
    description:
      "Web and local search via Brave Search API. Returns structured search results with titles, URLs, and snippets.",
    category: "search",
    install: "npx -y @modelcontextprotocol/server-brave-search",
    envVars: [
      {
        name: "BRAVE_API_KEY",
        description: "API key from Brave Search (free tier available at brave.com/search/api)",
      },
    ],
    useCases: [
      "Web search for current information and documentation",
      "Find code examples and solutions online",
      "Research latest library versions and changelogs",
    ],
  },
  {
    name: "Puppeteer",
    description:
      "Headless Chrome browser automation. Navigate pages, click elements, fill forms, take screenshots, and extract data.",
    category: "browser",
    install: "npx -y @modelcontextprotocol/server-puppeteer",
    envVars: [],
    useCases: [
      "Automate web scraping and data extraction",
      "Take screenshots of rendered pages",
      "Test web applications through browser automation",
    ],
  },
  {
    name: "PostgreSQL",
    description:
      "Connect to PostgreSQL databases for schema inspection, query execution, and data exploration with read-only safety by default.",
    category: "database",
    install: "npx -y @modelcontextprotocol/server-postgres <connection-string>",
    envVars: [
      {
        name: "DATABASE_URL",
        description: "PostgreSQL connection string (postgresql://user:pass@host:port/db)",
      },
    ],
    useCases: [
      "Inspect database schemas and table structures",
      "Run analytical queries and generate reports",
      "Debug data issues with live database access",
    ],
  },
  {
    name: "SQLite",
    description:
      "Local SQLite database operations. Query, create tables, insert data, and analyze local .db files with zero setup.",
    category: "database",
    install: "npx -y @modelcontextprotocol/server-sqlite --db-path <path-to-db>",
    envVars: [
      {
        name: "--db-path",
        description: "Path to the SQLite database file",
      },
    ],
    useCases: [
      "Query and analyze local SQLite databases",
      "Create and seed test databases",
      "Inspect application data stores",
    ],
  },
  {
    name: "Fetch",
    description:
      "Make HTTP requests to any URL. Supports GET, POST, PUT, DELETE with custom headers and body. Returns response data, status, and headers.",
    category: "api",
    install: "npx -y @modelcontextprotocol/server-fetch",
    envVars: [],
    useCases: [
      "Call REST APIs for data retrieval and mutation",
      "Test API endpoints during development",
      "Fetch external data for analysis and processing",
    ],
  },
  {
    name: "Memory",
    description:
      "Persistent knowledge graph for storing and retrieving structured information across conversations. Entities, relations, and observations.",
    category: "memory",
    install: "npx -y @modelcontextprotocol/server-memory",
    envVars: [
      {
        name: "--memory-path",
        description: "Path to persist the knowledge graph file (JSON)",
      },
    ],
    useCases: [
      "Remember user preferences and project context across sessions",
      "Build a persistent knowledge base from conversations",
      "Track relationships between code entities and decisions",
    ],
  },
  {
    name: "Notion",
    description:
      "Full Notion workspace integration. Read, create, and update pages, databases, and blocks in your Notion workspace.",
    category: "api",
    install: "npx -y @modelcontextprotocol/server-notion",
    envVars: [
      {
        name: "NOTION_API_TOKEN",
        description: "Notion integration token from notion.so/my-integrations",
      },
    ],
    useCases: [
      "Query and update Notion databases programmatically",
      "Create documentation pages from generated content",
      "Sync project management data between tools",
    ],
  },
];

export const mcpCategories = [
  { id: "filesystem", label: "File System", color: "#4a6741" },
  { id: "database", label: "Database", color: "#1a6b8a" },
  { id: "api", label: "API & Services", color: "#6a3fb8" },
  { id: "browser", label: "Browser", color: "#c73e3a" },
  { id: "search", label: "Search", color: "#b8860b" },
  { id: "communication", label: "Communication", color: "#2b7a4b" },
  { id: "memory", label: "Memory & Knowledge", color: "#8b7b6b" },
] as const;

export const mcpBuildGuide = {
  python: {
    title: "Python (FastMCP)",
    steps: [
      {
        title: "Install FastMCP",
        code: "pip install fastmcp",
        description:
          "FastMCP is a high-level Python framework for building MCP servers with minimal boilerplate.",
      },
      {
        title: "Create your first server",
        code: `from fastmcp import FastMCP

# Create an MCP server named "Demo"
mcp = FastMCP("Demo")

@mcp.tool()
def hello(name: str) -> str:
    """Say hello to someone."""
    return f"Hello, {name}!"

@mcp.resource("config://app")
def get_config() -> str:
    """Return app configuration."""
    return '{"version": "1.0.0"}'

if __name__ == "__main__":
    mcp.run()`,
        description:
          "Define tools with @mcp.tool() and resources with @mcp.resource(). FastMCP handles protocol serialization automatically.",
      },
      {
        title: "Run the server",
        code: "python server.py",
        description:
          "FastMCP runs a stdio-based MCP server. Connect it to your agent via the MCP config file.",
      },
      {
        title: "Connect to agent",
        code: `{
  "mcpServers": {
    "demo": {
      "command": "python",
      "args": ["server.py"],
      "cwd": "/path/to/your/project"
    }
  }
}`,
        description:
          "Add this to your agent's MCP config (claude_desktop_config.json, .opencode/mcp.json, etc). The agent will auto-start the server on launch.",
      },
    ],
  },
  nodejs: {
    title: "Node.js (MCP SDK)",
    steps: [
      {
        title: "Initialize project",
        code: "mkdir my-mcp-server && cd my-mcp-server && npm init -y && npm install @modelcontextprotocol/sdk zod",
        description:
          "Create a new Node.js project and install the MCP SDK with Zod for input validation.",
      },
      {
        title: "Create the server",
        code: `import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
  name: "Demo",
  version: "1.0.0",
});

server.tool(
  "hello",
  "Say hello to someone",
  { name: z.string().describe("Name to greet") },
  async ({ name }) => ({
    content: [{ type: "text", text: \`Hello, \${name}!\` }],
  })
);

const transport = new StdioServerTransport();
await server.connect(transport);`,
        description:
          "Define tools with server.tool(). Each tool has a name, description, Zod schema for parameters, and an async handler function.",
      },
      {
        title: "Run the server",
        code: "node server.js",
        description:
          "The server communicates over stdio. Keep it running — your agent will manage the process.",
      },
      {
        title: "Connect to agent",
        code: `{
  "mcpServers": {
    "demo": {
      "command": "node",
      "args": ["server.js"],
      "cwd": "/path/to/my-mcp-server"
    }
  }
}`,
        description:
          "Same MCP config pattern. Add to your agent config, restart the agent, and the server will be available as tools.",
      },
    ],
  },
};
