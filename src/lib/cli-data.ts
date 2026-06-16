export interface AgentCLI {
  name: string;
  vendor: string;
  platform: string;
  pricing: string;
  install: string;
  authSetup: string;
  quickStart: string;
  docsUrl: string;
  features: string[];
  description: string;
}

export const agentCLIs: AgentCLI[] = [
  {
    name: "Claude Code",
    vendor: "Anthropic",
    platform: "macOS, Linux",
    pricing: "Free with API key (usage-based)",
    install: "npm install -g @anthropic-ai/claude-code",
    authSetup:
      "Run `claude auth` and paste your Anthropic API key, or set ANTHROPIC_API_KEY env var.",
    quickStart: "claude",
    docsUrl: "https://docs.anthropic.com/en/docs/claude-code",
    features: [
      "Full codebase context",
      "Terminal + editor integration",
      "Git-aware operations",
      "Multi-file edits",
      "Custom commands & hooks",
      "MCP support",
    ],
    description:
      "Anthropic's agentic coding CLI. Operates directly in your terminal with full project awareness. Reads, writes, and edits code across your entire codebase. Supports custom slash commands, IDE integrations, and MCP servers for extended capabilities.",
  },
  {
    name: "Codex",
    vendor: "OpenAI",
    platform: "macOS, Linux",
    pricing: "Free with API key (usage-based)",
    install: "npm install -g @openai/codex",
    authSetup:
      "Run `codex auth` and authenticate with your OpenAI account, or set OPENAI_API_KEY.",
    quickStart: "codex",
    docsUrl: "https://github.com/openai/codex",
    features: [
      "Desktop pet UI + CLI",
      "Multi-model support",
      "Custom skills & plugins",
      "Image generation (built-in)",
      "Sandbox execution",
      "Codex Pets (desktop companions)",
    ],
    description:
      "OpenAI's agentic coding tool combining a terminal CLI with a desktop pet interface. Supports multi-model routing, custom skill creation, built-in image generation, and sandboxed code execution. Distinctive for its playful desktop companion (Codex Pets).",
  },
  {
    name: "GitHub Copilot CLI",
    vendor: "GitHub / Microsoft",
    platform: "macOS, Linux, Windows",
    pricing: "Free with GitHub account (Copilot subscription optional)",
    install: "npm install -g @github/copilot-cli",
    authSetup:
      "Run `gh auth login` to authenticate with your GitHub account. Requires GitHub Copilot subscription for full features.",
    quickStart: "gh copilot suggest 'explain this repo'",
    docsUrl: "https://docs.github.com/en/copilot",
    features: [
      "Native GitHub integration",
      "PR review & generation",
      "Shell command suggestions",
      "Issue triage",
      "Workspace awareness",
    ],
    description:
      "GitHub's CLI companion for Copilot. Deeply integrated with GitHub workflows — PR reviews, issue management, shell command generation. Works alongside the VS Code Copilot extension for a unified experience across terminal and editor.",
  },
  {
    name: "Gemini CLI",
    vendor: "Google",
    platform: "macOS, Linux",
    pricing: "Free with API key (usage-based)",
    install: "npm install -g @google/gemini-cli",
    authSetup:
      "Run `gemini auth` and authenticate with your Google Cloud project, or set GOOGLE_API_KEY.",
    quickStart: "gemini",
    docsUrl: "https://github.com/google-gemini/gemini-cli",
    features: [
      "Google Cloud integration",
      "Multi-modal (text + image input)",
      "Long context (1M+ tokens)",
      "Vertex AI support",
      "Skills system",
    ],
    description:
      "Google's CLI for Gemini models. Supports ultra-long context windows (1M+ tokens), multi-modal inputs including images, and tight integration with Google Cloud and Vertex AI. Ideal for large codebase analysis and cloud-native workflows.",
  },
  {
    name: "opencode",
    vendor: "Open Source Community",
    platform: "macOS, Linux, Windows",
    pricing: "Free and open source",
    install: "npm install -g opencode",
    authSetup:
      "Set ANTHROPIC_API_KEY or OPENAI_API_KEY env var. Supports multiple providers via config.",
    quickStart: "opencode",
    docsUrl: "https://opencode.ai",
    features: [
      "Multi-provider (Anthropic, OpenAI, Google, open source)",
      "Skills ecosystem",
      "MCP support",
      "Custom agents & subagents",
      "Extensible plugin system",
      "Open source (MIT)",
    ],
    description:
      "Open-source agentic CLI framework with a rich skills ecosystem. Provider-agnostic — works with Anthropic, OpenAI, Google, and local models. Supports MCP servers, custom subagents, plugin extensions, and a growing community skill library.",
  },
  {
    name: "Cursor",
    vendor: "Cursor Inc",
    platform: "macOS, Linux, Windows",
    pricing: "Free tier + Pro $20/month",
    install: "Download from cursor.com",
    authSetup:
      "Sign in with email or GitHub account. API usage included in subscription plans.",
    quickStart: "Open Cursor IDE, Cmd+I for inline AI, Cmd+K for composer",
    docsUrl: "https://docs.cursor.com",
    features: [
      "Full IDE (VS Code fork)",
      "Inline AI edits (Cmd+I)",
      "Composer (multi-file agent)",
      "Codebase indexing",
      "Terminal AI",
      "Rules & .cursorrules",
    ],
    description:
      "Cursor is a VS Code-based IDE with deeply integrated AI. Features inline editing, multi-file composer agent, and full codebase context. Popular for its speed and the seamless blend of traditional IDE with agentic capabilities. Not a standalone CLI — runs as a full IDE.",
  },
  {
    name: "Windsurf",
    vendor: "Codeium",
    platform: "macOS, Linux, Windows",
    pricing: "Free tier + Pro $15/month",
    install: "Download from codeium.com/windsurf",
    authSetup:
      "Sign in with Codeium account (email or GitHub). Free tier available with rate limits.",
    quickStart: "Open Windsurf IDE, use Cascade agent for multi-file edits",
    docsUrl: "https://docs.codeium.com/windsurf",
    features: [
      "Full IDE (VS Code fork)",
      "Cascade agent (multi-file)",
      "Supercomplete (full-line AI)",
      "Codebase indexing",
      "Context-aware autocomplete",
    ],
    description:
      "Windsurf is Codeium's AI-native IDE based on VS Code. The Cascade agent handles multi-file reasoning and edits. Known for fast autocomplete and competitive pricing. Like Cursor, runs as a full IDE rather than a standalone CLI.",
  },
  {
    name: "Amazon Q CLI",
    vendor: "AWS",
    platform: "macOS, Linux",
    pricing: "Free for AWS users (usage included in AWS account)",
    install: "npm install -g @aws/amazon-q-cli",
    authSetup:
      "Run `q auth` and authenticate with your AWS account via AWS Builder ID or IAM Identity Center.",
    quickStart: "q chat",
    docsUrl: "https://docs.aws.amazon.com/amazonq",
    features: [
      "AWS service integration",
      "Infrastructure-as-code gen",
      "Security scanning",
      "Code transformation",
      "AWS console companion",
    ],
    description:
      "Amazon Q CLI is AWS's agentic coding tool tailored for cloud developers. Deeply integrated with AWS services — generates infrastructure-as-code, scans for security issues, transforms codebases, and understands your AWS environment natively.",
  },
];
