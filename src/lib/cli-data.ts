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
  {
    name: "Aider",
    vendor: "Open Source",
    platform: "macOS, Linux, Windows",
    pricing: "Free and open source (bring your own API key)",
    install: "pip install aider-chat",
    authSetup:
      "Set OPENAI_API_KEY or ANTHROPIC_API_KEY env var. Supports many LLM providers.",
    quickStart: "aider",
    docsUrl: "https://aider.chat",
    features: [
      "Best-in-class code editing benchmark",
      "Multi-file git-aware edits",
      "Voice coding support",
      "Works with any LLM provider",
      "Map editor for large codebases",
    ],
    description:
      "Aider is a top-ranked open-source AI pair programming tool. Known for its exceptional benchmark scores on SWE-bench. Works directly in your terminal, makes git-committed changes across multiple files, and supports virtually every LLM provider.",
  },
  {
    name: "Continue",
    vendor: "Continue Dev",
    platform: "macOS, Linux, Windows",
    pricing: "Free and open source (bring your own API key)",
    install: "VS Code / JetBrains extension from continue.dev",
    authSetup:
      "Configure API keys in Continue config file. Supports local models via Ollama/LM Studio.",
    quickStart: "Install extension → Cmd+I to chat, Cmd+L to edit",
    docsUrl: "https://docs.continue.dev",
    features: [
      "IDE extension (VS Code + JetBrains)",
      "Custom slash commands",
      "Local model support (Ollama, LM Studio)",
      "Model-agnostic routing",
      "Open source (Apache 2.0)",
    ],
    description:
      "Continue is an open-source AI code assistant that works as a VS Code or JetBrains extension. Fully model-agnostic — works with OpenAI, Anthropic, Google, and local models. Supports custom slash commands, context providers, and model routing.",
  },
  {
    name: "Cody",
    vendor: "Sourcegraph",
    platform: "macOS, Linux, Windows",
    pricing: "Free tier + Pro $9/month",
    install: "VS Code / JetBrains extension from sourcegraph.com/cody",
    authSetup:
      "Sign in with Sourcegraph account (GitHub/Google/email). Free tier includes Claude 4 Haiku.",
    quickStart: "Install extension → Cmd+Shift+C to chat",
    docsUrl: "https://sourcegraph.com/docs/cody",
    features: [
      "Codebase-wide context (Sourcegraph index)",
      "Multi-model (Claude, GPT, Gemini)",
      "Custom commands",
      "Autocomplete",
      "Natural language code search",
    ],
    description:
      "Cody by Sourcegraph leverages the company's code search engine for deep codebase context. Understands your entire repository, not just open files. Supports Claude, GPT, and Gemini models with custom commands for repetitive workflows.",
  },
  {
    name: "Tabby",
    vendor: "TabbyML (Open Source)",
    platform: "macOS, Linux, Windows",
    pricing: "Free and open source (self-hosted)",
    install: "Docker: docker run -it -p 8080:8080 tabbyml/tabby",
    authSetup:
      "Self-hosted — no external auth needed. Connect IDE extension to your local Tabby server.",
    quickStart: "docker run -p 8080:8080 tabbyml/tabby serve --model StarCoder-1B",
    docsUrl: "https://tabby.tabbyml.com",
    features: [
      "Self-hosted AI coding assistant",
      "Code completion",
      "Local models (no data leaves your machine)",
      "GitHub/GitLab integration",
      "Open source",
    ],
    description:
      "Tabby is a self-hosted, open-source AI coding assistant. All code stays on your infrastructure. Supports local models for privacy-conscious teams. Provides code completion and chat via IDE extensions without sending code to external APIs.",
  },
  {
    name: "PearAI",
    vendor: "PearAI",
    platform: "macOS, Linux, Windows",
    pricing: "Free (open source)",
    install: "Download from trypear.ai",
    authSetup:
      "Bring your own API key (Anthropic, OpenAI, or local model). Configured in-app.",
    quickStart: "Open PearAI → Cmd+I for inline editing",
    docsUrl: "https://trypear.ai",
    features: [
      "VS Code fork IDE",
      "Multi-model support",
      "Open source",
      "Custom instructions",
      "Local model support",
    ],
    description:
      "PearAI is an open-source AI-powered IDE built on VS Code. Supports multiple AI providers and local models. Focused on transparency and user control — you bring your own API keys and choose your preferred model.",
  },
  {
    name: "v0",
    vendor: "Vercel",
    platform: "Web (browser-based)",
    pricing: "Free tier + Pro $20/month",
    install: "Web app at v0.dev — no install needed",
    authSetup: "Sign in with Vercel account (GitHub/Google/email).",
    quickStart: "v0.dev → describe your UI in natural language",
    docsUrl: "https://v0.dev/docs",
    features: [
      "UI generation from text prompts",
      "React + Tailwind + shadcn/ui output",
      "Iterative refinement",
      "Copy-paste ready code",
      "Figma import",
    ],
    description:
      "v0 by Vercel is a generative UI tool that creates React components from natural language. Generates production-ready Tailwind and shadcn/ui code. Browser-based — no IDE needed. Ideal for rapid prototyping and frontend development.",
  },
  {
    name: "Bolt.new",
    vendor: "StackBlitz",
    platform: "Web (browser-based)",
    pricing: "Free tier + Pro $20/month",
    install: "Web app at bolt.new — no install needed",
    authSetup:
      "Sign in with GitHub or email. Runs full-stack apps in-browser via WebContainers.",
    quickStart: "bolt.new → prompt your full-stack app idea",
    docsUrl: "https://bolt.new",
    features: [
      "Full-stack app generation",
      "In-browser execution (WebContainers)",
      "Instant deployment",
      "Node.js runtime in browser",
      "npm package support",
    ],
    description:
      "Bolt.new by StackBlitz generates and runs full-stack web apps entirely in the browser using WebContainers. Prompt an idea → get a running app with Node.js backend, npm packages, and instant deployment. No local setup required.",
  },
];
