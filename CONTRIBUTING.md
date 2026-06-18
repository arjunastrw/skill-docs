# Contributing to Agent Hub

Thanks for helping build the reference for AI agent developers!

## Quick Contribution Guide

### Adding a Skill

Edit `src/lib/skills-data.ts`. Add an object to the `skills` array:

```typescript
{
  name: "my-skill-name",
  description: "What this skill does in 1-2 sentences.",
  triggers: ["trigger phrase 1", "trigger phrase 2"],
  category: "process", // process | design | media-gen | code | tooling | docs
  combos: ["brainstorming", "tdd"], // related skill names
  whenToUse: "When to use this skill in 1-2 sentences.",
}
```

Categories:
- `process` — Workflow & process skills
- `design` — Design & visual skills
- `media-gen` — Media generation (images, video, music)
- `code` — Code & engineering skills
- `tooling` — CLI tools & infrastructure
- `docs` — Document & writing skills

### Adding a CLI

Edit `src/lib/cli-data.ts`. Add to the `agentCLIs` array:

```typescript
{
  name: "CLI Name",
  vendor: "Company/Organization",
  platform: "macOS, Linux",
  pricing: "Free / Paid details",
  install: "npm install -g cli-package",
  authSetup: "How to authenticate.",
  quickStart: "cli start-command",
  docsUrl: "https://docs.example.com",
  features: ["Feature 1", "Feature 2", "Feature 3"],
  description: "1-2 sentence description.",
}
```

### Adding an MCP Server

Edit `src/lib/mcp-data.ts`. Add to the `mcpServers` array:

```typescript
{
  name: "Server Name",
  description: "What this server does.",
  category: "api", // filesystem | database | api | browser | search | communication | memory
  install: "npx -y @scope/server-name",
  envVars: [{ name: "ENV_VAR", description: "What it does" }],
  useCases: ["Use case 1", "Use case 2", "Use case 3"],
}
```

### Adding an AI Model

Edit `src/lib/models-data.ts`. Add to the `aiModels` array:

```typescript
{
  name: "Model Name",
  provider: "Provider Name",
  contextWindow: "128K tokens",
  pricingInput: "$1.00",
  pricingOutput: "$4.00",
  maxOutput: "16K tokens",
  modalities: ["text", "image"],
  knowledgeCutoff: "Month Year",
  benchMMLU: "85.0%",
  benchHumanEval: "88.0%",
  strengths: ["Strength 1", "Strength 2"],
  bestUseCases: ["Use case 1", "Use case 2"],
}
```

### Adding a Prompt Template

Edit `src/lib/prompts-data.ts`. Add to the `promptTemplates` array:

```typescript
{
  title: "Descriptive Title",
  category: "coding", // coding | debugging | design | writing | analysis | devops
  cli: ["claude-code", "codex"], // compatible CLI names (lowercase, hyphenated)
  prompt: "The actual prompt text here...",
  description: "What this prompt does.",
  contributor: "github-username", // optional
}
```

### Adding an Agent Template

Edit `src/lib/templates-data.ts`. Add to the `agentTemplates` array:

```typescript
{
  name: "Template Name",
  description: "What this template does.",
  role: "agent-role",
  cli: "claude-code", // primary CLI name (lowercase, hyphenated)
  config: "# CLAUDE.md\n\n... actual config content ...",
  howToUse: "Instructions for using this template.",
  contributor: "github-username", // optional
}
```

## PR Process

1. Fork the repo
2. Create a branch: `git checkout -b add/your-thing`
3. Make your change — follow existing data format exactly
4. Build locally: `npm run build` (must pass with zero errors)
5. Commit: `git commit -m "feat: add [name of thing]"`
6. Push: `git push origin add/your-thing`
7. Open a PR against `main`

## Need Help?

- Request new content by opening an issue using the **Add Data** template
- Found a bug? Use the **Bug Report** template
- Have a feature idea? Use the **Feature Request** template
