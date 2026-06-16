export interface AgentConfig {
  cli: string;
  configFile: string;
  location: string;
  format: string;
  sections: { name: string; description: string; example: string }[];
  bestPractices: string[];
}

export const agentConfigs: AgentConfig[] = [
  {
    cli: "Claude Code",
    configFile: "CLAUDE.md (or AGENTS.md)",
    location: "Project root, ~/.claude/, or any parent directory",
    format: "Markdown",
    sections: [
      {
        name: "Project Context",
        description: "What this project does, tech stack, architecture overview",
        example: "# Project: E-commerce Platform\n\nBuilt with Next.js 16, TypeScript, Prisma ORM, PostgreSQL. Monorepo with Turborepo.",
      },
      {
        name: "Code Style",
        description: "Formatting, naming, conventions",
        example: "## Code Style\n- Use tabs for indentation\n- PascalCase for components\n- camelCase for functions\n- Follow existing patterns in the codebase",
      },
      {
        name: "Commands",
        description: "Build, test, lint commands the agent should use",
        example: "## Commands\n- Build: `npm run build`\n- Test: `npm run test`\n- Lint: `npm run lint`\n- Dev: `npm run dev`",
      },
      {
        name: "Instructions",
        description: "Behavioral rules for the agent",
        example: "## Instructions\n- Never commit without asking\n- Write tests before implementation\n- Use TypeScript strict mode\n- Follow the existing folder structure",
      },
    ],
    bestPractices: [
      "Place CLAUDE.md in project root for team-wide settings",
      "Use ~/.claude/CLAUDE.md for personal preferences",
      "Keep it concise — Claude reads the whole file on every session",
      "Include test commands so the agent can self-verify",
      "Mention which libraries are available to avoid hallucinated imports",
    ],
  },
  {
    cli: "Codex",
    configFile: "AGENTS.md or .codex/config.json",
    location: "Project root or ~/.codex/",
    format: "Markdown (AGENTS.md) or JSON (.codex/config)",
    sections: [
      {
        name: "Project Description",
        description: "What the project is and its purpose",
        example: "# Project: API Service\n\nREST API for user management. Express.js, PostgreSQL, Docker.",
      },
      {
        name: "Rules",
        description: "Agent behavior rules",
        example: "## Rules\n- Always use TypeScript\n- Prefer async/await over callbacks\n- Add error handling to all routes",
      },
      {
        name: "Skills",
        description: "Custom skills registration",
        example: "## Skills\n- Custom skill: deploy-to-aws (see .codex/skills/deploy-to-aws.md)",
      },
    ],
    bestPractices: [
      "Use AGENTS.md for project-wide config",
      "Place pet config in ~/.codex/pets/",
      "Register custom skills under .codex/skills/",
      "Set OPENAI_API_KEY in your shell profile",
    ],
  },
  {
    cli: "GitHub Copilot CLI",
    configFile: ".github/copilot-instructions.md",
    location: "Project root under .github/",
    format: "Markdown",
    sections: [
      {
        name: "Instructions",
        description: "Custom instructions for Copilot's behavior",
        example: "## Copilot Instructions\n\n- Use TypeScript for all new code\n- Prefer functional components in React\n- Write tests with Vitest\n- Follow the existing naming conventions",
      },
    ],
    bestPractices: [
      "File must be named copilot-instructions.md",
      "Place in .github/ directory of your repo",
      "Works with both CLI and VS Code extension",
      "Instructions apply to all contributors of the repo",
    ],
  },
  {
    cli: "Gemini CLI",
    configFile: "GEMINI.md",
    location: "Project root or ~/.gemini/",
    format: "Markdown",
    sections: [
      {
        name: "Context",
        description: "Project overview and key information",
        example: "# Context\n\nThis is a Python data pipeline using Apache Beam. Runs on Google Cloud Dataflow.",
      },
      {
        name: "Environment",
        description: "Development environment details",
        example: "# Environment\n- Python 3.12\n- Virtual env: .venv\n- GCP project: my-project-id",
      },
      {
        name: "Preferences",
        description: "Code style and agent preferences",
        example: "# Preferences\n- Prefer type hints everywhere\n- Use pathlib over os.path\n- Format with black\n- Test with pytest",
      },
    ],
    bestPractices: [
      "Reference GCP project IDs for cloud operations",
      "Mention Python version explicitly",
      "Include virtual environment setup commands",
      "List installed packages that Gemini should know about",
    ],
  },
  {
    cli: "opencode",
    configFile: "opencode.json / opencode.jsonc",
    location: "Project root, ~/.config/opencode/, or ~/",
    format: "JSON or JSONC",
    sections: [
      {
        name: "MCP Servers",
        description: "MCP server configurations",
        example: '"mcpServers": {\n  "filesystem": {\n    "command": "npx",\n    "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/allowed"]\n  }\n}',
      },
      {
        name: "Agents & Subagents",
        description: "Custom agent definitions",
        example: '"agents": {\n  "reviewer": {\n    "description": "Code review specialist",\n    "systemPrompt": "You are a thorough code reviewer..."\n  }\n}',
      },
      {
        name: "Skills",
        description: "Skill registration paths",
        example: '"skills": {\n  "paths": ["~/.agents/skills/", "./.opencode/skills/"]\n}',
      },
      {
        name: "Permissions",
        description: "File access and tool permissions",
        example: '"permissions": {\n  "allow": ["src/**", "tests/**"],\n  "deny": ["*.env", "secrets/**"]\n}',
      },
    ],
    bestPractices: [
      "Use opencode.jsonc for comments support",
      "Global config: ~/.config/opencode/opencode.jsonc",
      "Project config: <project>/.opencode/opencode.jsonc",
      "MCP server paths should be absolute or relative to config file",
    ],
  },
  {
    cli: "Cursor",
    configFile: ".cursorrules",
    location: "Project root",
    format: "Markdown or plain text",
    sections: [
      {
        name: "Project Rules",
        description: "Codebase-wide rules for Cursor's AI",
        example: "You are an expert TypeScript developer.\n\n- Always use functional React components\n- Prefer server components in Next.js\n- Use the project's existing API client\n- Never use any() type",
      },
      {
        name: "Cursor-specific (.cursor/)",
        description: "Advanced configuration directory",
        example: "# .cursor/ directory can contain:\n# - rules/ (multiple .mdc rule files)\n# - commands/ (custom slash commands)\n# - prompts/ (reusable prompt templates)",
      },
    ],
    bestPractices: [
      "Place .cursorrules in project root for team consistency",
      "Use .cursor/ for advanced multi-file configuration",
      "Cursor auto-loads .cursorrules on every session",
      "Rules should be project-specific, not generic",
    ],
  },
  {
    cli: "Windsurf",
    configFile: ".windsurfrules",
    location: "Project root",
    format: "Markdown or plain text",
    sections: [
      {
        name: "Cascade Rules",
        description: "Behavior rules for the Cascade agent",
        example: "# Windsurf Rules\n\n- TypeScript strict mode for all files\n- Prefer named exports over default exports\n- Use the existing logger utility\n- Run tests before committing changes",
      },
    ],
    bestPractices: [
      "Keep rules focused on project-specific conventions",
      "Cascade reads rules on every interaction",
      "Update rules when team conventions change",
      "Place in version control for team consistency",
    ],
  },
  {
    cli: "Amazon Q CLI",
    configFile: ".amazonq/",
    location: "Project root or ~/.amazonq/",
    format: "Directory with YAML/JSON files",
    sections: [
      {
        name: "AWS Context",
        description: "AWS account and region settings",
        example: "aws:\n  profile: my-aws-profile\n  region: us-east-1\n  account_id: \"123456789012\"",
      },
      {
        name: "Customization",
        description: "Custom prompts and behavior",
        example: "customizations:\n  - path: .amazonq/custom-rules.md\n  - path: .amazonq/cdk-patterns.md",
      },
    ],
    bestPractices: [
      "Configure AWS profile for resource-aware operations",
      "Add CDK/CloudFormation patterns for infra generation",
      "Works best with projects using AWS CDK or SAM",
      "Keep AWS account context scoped to project needs",
    ],
  },
];
