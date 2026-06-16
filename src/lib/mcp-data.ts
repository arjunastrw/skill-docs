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
  {
    name: "Sequential Thinking",
    description:
      "Enables step-by-step reasoning for complex problems. Breaks down tasks into sequential thoughts, revisable and branchable — ideal for multi-step debugging, planning, and analysis.",
    category: "memory",
    install: "npx -y @modelcontextprotocol/server-sequential-thinking",
    envVars: [],
    useCases: [
      "Break down complex debugging into sequential steps",
      "Plan multi-step refactoring with revisable stages",
      "Reason through architectural decisions step by step",
    ],
  },
  {
    name: "Tavily Search",
    description:
      "Real-time web search optimized for AI agents. Returns clean, structured results with content extraction. Built specifically for agentic workflows.",
    category: "search",
    install: "npx -y @tavily/mcp-server-tavily",
    envVars: [{ name: "TAVILY_API_KEY", description: "API key from tavily.com (free tier available)" }],
    useCases: ["Real-time web research for current events", "Find documentation and code examples", "Fact-check and verify claims"],
  },
  {
    name: "Exa Search",
    description:
      "Semantic search engine designed for AI. Finds content by meaning, not just keywords. Returns clean, parsed content from web pages.",
    category: "search",
    install: "npx -y @anthropic/mcp-server-exa",
    envVars: [{ name: "EXA_API_KEY", description: "API key from exa.ai (free tier available)" }],
    useCases: ["Find similar content semantically", "Search for niche technical documentation", "Discover relevant research papers and articles"],
  },
  {
    name: "Perplexity Search",
    description:
      "AI-powered search with citations. Performs web searches and returns results with source links and summarized answers.",
    category: "search",
    install: "npx -y @anthropic/mcp-server-perplexity",
    envVars: [{ name: "PERPLEXITY_API_KEY", description: "API key from perplexity.ai" }],
    useCases: ["Research with cited sources", "Get up-to-date technical information", "Verify facts with linked references"],
  },
  {
    name: "Playwright",
    description:
      "Modern browser automation with Playwright. More powerful than Puppeteer — supports Chromium, Firefox, WebKit with auto-wait, network interception, and mobile emulation.",
    category: "browser",
    install: "npx -y @playwright/mcp",
    envVars: [],
    useCases: ["Cross-browser testing and automation", "Take screenshots across multiple browsers", "Automate complex web interactions with auto-waiting"],
  },
  {
    name: "Browserbase",
    description:
      "Cloud browser infrastructure for AI agents. Run headless browsers at scale with session management, stealth mode, and proxy rotation.",
    category: "browser",
    install: "npx -y @browserbasehq/mcp-server-browserbase",
    envVars: [{ name: "BROWSERBASE_API_KEY", description: "API key from browserbase.com" }, { name: "BROWSERBASE_PROJECT_ID", description: "Project ID from Browserbase dashboard" }],
    useCases: ["Cloud-based browser automation at scale", "Stealth web scraping with proxy rotation", "Session-based browsing with persistent state"],
  },
  {
    name: "Supabase",
    description:
      "Full Supabase platform access — database queries, auth management, storage, edge functions, and real-time subscriptions.",
    category: "database",
    install: "npx -y @supabase/mcp-server-supabase",
    envVars: [{ name: "SUPABASE_URL", description: "Your Supabase project URL" }, { name: "SUPABASE_SERVICE_ROLE_KEY", description: "Service role key for admin access" }],
    useCases: ["Query and manage Supabase databases", "Manage user authentication and policies", "Upload and manage files in storage buckets"],
  },
  {
    name: "Pinecone",
    description:
      "Vector database for semantic search and RAG. Store embeddings, query with similarity search, manage namespaces and indexes.",
    category: "memory",
    install: "npx -y @pinecone-database/mcp-server-pinecone",
    envVars: [{ name: "PINECONE_API_KEY", description: "API key from pinecone.io" }, { name: "PINECONE_ENVIRONMENT", description: "Pinecone environment (e.g., us-east-1)" }],
    useCases: ["Semantic search over document embeddings", "Build RAG pipelines with vector storage", "Similarity search for code and documentation"],
  },
  {
    name: "Chroma",
    description:
      "Open-source embedding database. Store and query vector embeddings locally — no cloud dependency. Ideal for development and small-scale RAG.",
    category: "memory",
    install: "npx -y @anthropic/mcp-server-chroma",
    envVars: [{ name: "CHROMA_DB_PATH", description: "Path to persist Chroma database (defaults to ./chroma_data)" }],
    useCases: ["Local RAG with embedded documents", "Semantic code search in your codebase", "Zero-cost vector search during development"],
  },
  {
    name: "Resend",
    description:
      "Email sending API for developers. Send transactional emails, design templates with React, track delivery and engagement.",
    category: "communication",
    install: "npx -y @resend/mcp-server-resend",
    envVars: [{ name: "RESEND_API_KEY", description: "API key from resend.com (free tier: 100 emails/day)" }],
    useCases: ["Send transactional emails from agent workflows", "Design and send HTML email templates", "Verify email delivery and track engagement"],
  },
  {
    name: "Slack",
    description:
      "Full Slack workspace integration. Send messages, create channels, search history, manage users, and react to events.",
    category: "communication",
    install: "npx -y @anthropic/mcp-server-slack",
    envVars: [{ name: "SLACK_BOT_TOKEN", description: "Bot token from api.slack.com/apps" }, { name: "SLACK_TEAM_ID", description: "Your Slack workspace team ID" }],
    useCases: ["Send automated notifications to channels", "Search conversation history for context", "Create and manage Slack channels programmatically"],
  },
  {
    name: "Discord",
    description:
      "Discord bot integration for sending messages, managing channels, reading message history, and interacting with guilds.",
    category: "communication",
    install: "npx -y @anthropic/mcp-server-discord",
    envVars: [{ name: "DISCORD_BOT_TOKEN", description: "Bot token from discord.com/developers" }],
    useCases: ["Send updates and notifications to Discord servers", "Read and analyze Discord conversations", "Automate community management tasks"],
  },
  {
    name: "Linear",
    description:
      "Project management for software teams. Create and manage issues, projects, cycles, and view team workflows.",
    category: "api",
    install: "npx -y @anthropic/mcp-server-linear",
    envVars: [{ name: "LINEAR_API_KEY", description: "Personal API key from linear.app/settings/api" }],
    useCases: ["Create issues from bug reports automatically", "Query team project status and sprint progress", "Link PRs to Linear issues in workflows"],
  },
  {
    name: "Jira",
    description:
      "Atlassian Jira integration for issue tracking, project management, and agile workflows. Full CRUD for issues, boards, and sprints.",
    category: "api",
    install: "npx -y @anthropic/mcp-server-jira",
    envVars: [{ name: "JIRA_HOST", description: "Your Jira instance URL (e.g., company.atlassian.net)" }, { name: "JIRA_EMAIL", description: "Atlassian account email" }, { name: "JIRA_API_TOKEN", description: "API token from id.atlassian.com" }],
    useCases: ["Create and triage Jira issues from agent", "Query sprint progress and team velocity", "Automate issue transitions based on PR status"],
  },
  {
    name: "GitLab",
    description:
      "GitLab platform integration. Manage repositories, merge requests, CI/CD pipelines, issues, and code review.",
    category: "api",
    install: "npx -y @anthropic/mcp-server-gitlab",
    envVars: [{ name: "GITLAB_PERSONAL_ACCESS_TOKEN", description: "Personal access token from gitlab.com" }, { name: "GITLAB_API_URL", description: "GitLab instance URL (defaults to gitlab.com)" }],
    useCases: ["Create and manage merge requests", "Trigger and monitor CI/CD pipelines", "Search code and issues across GitLab projects"],
  },
  {
    name: "Google Drive",
    description:
      "Access Google Drive files and folders. Search, read, create documents and spreadsheets. File management with permission awareness.",
    category: "api",
    install: "npx -y @anthropic/mcp-server-google-drive",
    envVars: [{ name: "GOOGLE_DRIVE_CREDENTIALS", description: "Service account JSON credentials from Google Cloud Console" }],
    useCases: ["Search and read documents in Google Drive", "Create and update spreadsheets programmatically", "Organize and manage team document folders"],
  },
  {
    name: "Stripe",
    description:
      "Payment infrastructure API. Manage customers, subscriptions, invoices, payment methods, and view financial data.",
    category: "api",
    install: "npx -y @stripe/mcp-server-stripe",
    envVars: [{ name: "STRIPE_SECRET_KEY", description: "Secret key from dashboard.stripe.com (use test key for dev)" }],
    useCases: ["Query customer and subscription data", "Generate financial reports from Stripe data", "Debug payment issues with live API access"],
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
