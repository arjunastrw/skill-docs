# Agent Hub — Open Source Enhancement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn Agent Hub into a community-driven open source project with 2 new content pages (Prompts, Templates), request system, and full contributor infrastructure.

**Architecture:** 7 pages in Next.js App Router with static export. New data files follow existing pattern (`src/lib/*-data.ts`). New pages follow existing page pattern with `useLocale()` for i18n, card grids, search/filter, detail modals. Request system uses GitHub issue template pre-fill URLs.

**Tech Stack:** Next.js 16 (App Router, static export), TypeScript, Tailwind CSS v4, shadcn/ui, GitHub Pages.

---

### Task 1: Open Source Infrastructure Files

**Files:**
- Create: `LICENSE`
- Modify: `README.md`
- Create: `CONTRIBUTING.md`
- Create: `CODE_OF_CONDUCT.md`
- Create: `CHANGELOG.md`

- [ ] **Step 1: Create MIT LICENSE**

Write the MIT License file with copyright holder "Agent Hub Contributors":

```
MIT License

Copyright (c) 2026 Agent Hub Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

- [ ] **Step 2: Rewrite README.md**

Overwrite the existing README.md:

```markdown
# Agent Hub

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/arjunastrw/skill-docs)](https://github.com/arjunastrw/skill-docs/stargazers)
[![GitHub contributors](https://img.shields.io/github/contributors/arjunastrw/skill-docs)](https://github.com/arjunastrw/skill-docs/graphs/contributors)
[![Deploy Status](https://img.shields.io/github/actions/workflow/status/arjunastrw/skill-docs/.github/workflows/deploy.yml)](https://github.com/arjunastrw/skill-docs/actions)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fagent-hub.web.id)](https://agent-hub.web.id)

The open-source reference for AI agent developers. Compare CLI tools, discover agent skills, browse MCP servers, compare AI models, configure agents, and find prompt templates — all in one place.

🌐 **[agent-hub.web.id](https://agent-hub.web.id)**

## Pages

| Page | Content |
|------|---------|
| **Start** | 16 Agent CLI comparison table + install guides |
| **Skills** | 103 agent skills catalog with triggers, combos, use cases |
| **MCP** | 29 MCP servers catalog + Python/Node.js build guide |
| **Models** | 18 AI models — pricing, context windows, benchmarks |
| **Config** | 8 CLI configuration references + side-by-side comparison |
| **Prompts** | Curated prompt templates by use case and CLI |
| **Templates** | Ready-to-use agent configuration templates |

## Tech Stack

- [Next.js 16](https://nextjs.org) — App Router, static export
- [Tailwind CSS v4](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com)
- TypeScript
- GitHub Pages (custom domain: agent-hub.web.id)

## Quick Start

```bash
git clone https://github.com/arjunastrw/skill-docs.git
cd skill-docs/skills-docs-site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding Content

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to add:
- New agent skills → `src/lib/skills-data.ts`
- New MCP servers → `src/lib/mcp-data.ts`
- New AI models → `src/lib/models-data.ts`
- New agent CLIs → `src/lib/cli-data.ts`
- New prompt templates → `src/lib/prompts-data.ts`
- New agent templates → `src/lib/templates-data.ts`

## Deploy

```bash
npm run build    # → out/
```

Static export. Deploy to any static host. This repo auto-deploys to GitHub Pages via Actions.

## License

MIT © Agent Hub Contributors
```

- [ ] **Step 3: Create CONTRIBUTING.md**

```markdown
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
```

- [ ] **Step 4: Create CODE_OF_CONDUCT.md**

```markdown
# Contributor Covenant Code of Conduct

## Our Pledge

We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.

We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.

## Our Standards

Examples of behavior that contributes to a positive environment:
- Demonstrating empathy and kindness toward other people
- Being respectful of differing opinions, viewpoints, and experiences
- Giving and gracefully accepting constructive feedback
- Accepting responsibility and apologizing to those affected by our mistakes, and learning from the experience
- Focusing on what is best not just for us as individuals, but for the overall community

Examples of unacceptable behavior:
- The use of sexualized language or imagery, and sexual attention or advances of any kind
- Trolling, insulting or derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others' private information without their explicit permission
- Other conduct which could reasonably be considered inappropriate in a professional setting

## Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the community leaders. All complaints will be reviewed and investigated promptly and fairly.

## Attribution

This Code of Conduct is adapted from the [Contributor Covenant](https://www.contributor-covenant.org), version 2.1.
```

- [ ] **Step 5: Create CHANGELOG.md**

```markdown
# Changelog

## [1.0.0] - 2026-06-18

### Added
- Agent Hub — 7-page reference site for AI agent developers
- Start page: 16 Agent CLI comparison table + install guides
- Skills page: 103 agent skills catalog with search and filter
- MCP page: 29 MCP servers catalog + Python/Node.js build guide
- Models page: 18 AI models comparison with benchmarks
- Config page: 8 CLI configuration references
- Prompts page: Curated prompt templates by use case
- Templates page: Ready-to-use agent configuration templates
- Global search (⌘K) across all pages
- Dark/light theme toggle
- English/Indonesian language support
- Custom domain: agent-hub.web.id
- GitHub Pages deployment via Actions
```

- [ ] **Step 6: Commit**

```bash
git add LICENSE README.md CONTRIBUTING.md CODE_OF_CONDUCT.md CHANGELOG.md
git commit -m "docs: open source infra — license, readme, contributing, coc, changelog"
```

---

### Task 2: GitHub Issue & PR Templates

**Files:**
- Create: `.github/ISSUE_TEMPLATE/bug-report.md`
- Create: `.github/ISSUE_TEMPLATE/feature-request.md`
- Create: `.github/ISSUE_TEMPLATE/add-data.md`
- Create: `.github/PULL_REQUEST_TEMPLATE.md`

- [ ] **Step 1: Create `.github/ISSUE_TEMPLATE/bug-report.md`**

```markdown
---
name: Bug Report
about: Report a bug in Agent Hub
title: "bug: "
labels: bug
assignees: ""
---

**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
A clear description of what you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
- Browser: [e.g. Chrome, Safari]
- Device: [e.g. Desktop, iPhone]
```

- [ ] **Step 2: Create `.github/ISSUE_TEMPLATE/feature-request.md`**

```markdown
---
name: Feature Request
about: Suggest a new feature for Agent Hub
title: "feat: "
labels: enhancement
assignees: ""
---

**Is your feature request related to a problem?**
A clear description of what the problem is.

**Describe the solution you'd like**
A clear description of what you want to happen.

**Describe alternatives you've considered**
Any alternative solutions or features you've thought about.

**Additional context**
Add any other context or screenshots.
```

- [ ] **Step 3: Create `.github/ISSUE_TEMPLATE/add-data.md`**

```markdown
---
name: Add Data
about: Request or submit new content (skill, CLI, MCP server, model, prompt, template)
title: "data: add [type] — [name]"
labels: data, community
assignees: ""
---

**Data type:** [skill / CLI / MCP server / AI model / prompt template / agent template]

**Name:** [Name of the thing to add]

**Description:** [What it is and why it should be included]

**Additional details:**
[Any relevant URLs, documentation, or context]

**I want to contribute this myself:** [Yes / No]
```

- [ ] **Step 4: Create `.github/PULL_REQUEST_TEMPLATE.md`**

```markdown
## Description
<!-- Describe your changes -->

## Type of change
- [ ] New data (skill, CLI, MCP server, model, prompt, template)
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation

## Checklist
- [ ] `npm run build` passes with zero errors
- [ ] I followed the data format in CONTRIBUTING.md
- [ ] All new data has accurate and complete fields
- [ ] Tested locally at http://localhost:3000

## Related Issue
<!-- Link to issue if applicable -->
Closes #
```

- [ ] **Step 5: Commit**

```bash
git add .github/
git commit -m "docs: add issue and PR templates"
```

---

### Task 3: Prompts Data File

**Files:**
- Create: `src/lib/prompts-data.ts`

- [ ] **Step 1: Create `src/lib/prompts-data.ts`**

```typescript
export interface PromptTemplate {
  title: string;
  category: "coding" | "debugging" | "design" | "writing" | "analysis" | "devops";
  cli: string[];
  prompt: string;
  description: string;
  contributor?: string;
}

export const promptTemplates: PromptTemplate[] = [
  {
    title: "Generate Unit Tests",
    category: "coding",
    cli: ["claude-code", "codex", "opencode", "gemini-cli", "copilot-cli"],
    prompt: "Write comprehensive unit tests for the following code. Cover happy path, edge cases, error states, and null/undefined inputs. Use the existing test framework in this project. Include test descriptions that explain what each test verifies.\n\n```\n[PASTE CODE HERE]\n```",
    description: "Generates thorough unit tests with edge case coverage for any code snippet. Adapts to the project's existing test framework.",
  },
  {
    title: "Code Review",
    category: "coding",
    cli: ["claude-code", "codex", "opencode", "cursor", "windsurf"],
    prompt: "Review the following code for:\n1. Bugs and logic errors\n2. Performance issues\n3. Security vulnerabilities\n4. Adherence to the project's coding standards\n5. Missing error handling\n6. Test coverage gaps\n\nProvide specific, actionable feedback for each finding. Suggest concrete fixes.\n\n```\n[PASTE CODE HERE]\n```",
    description: "Thorough code review covering bugs, performance, security, standards, and error handling.",
  },
  {
    title: "Refactor to Clean Architecture",
    category: "coding",
    cli: ["claude-code", "codex", "opencode"],
    prompt: "Refactor the following code following clean architecture principles:\n- Separate concerns (domain, application, infrastructure)\n- Extract interfaces for external dependencies\n- Use dependency injection\n- Keep functions small and focused\n- Maintain the existing public API\n\nExplain your changes and reasoning.\n\n```\n[PASTE CODE HERE]\n```",
    description: "Refactors code to follow clean architecture while preserving the public API.",
  },
  {
    title: "Debug Error Stack Trace",
    category: "debugging",
    cli: ["claude-code", "codex", "opencode", "gemini-cli", "copilot-cli"],
    prompt: "Analyze this error stack trace and:\n1. Identify the root cause\n2. Explain what went wrong in plain language\n3. Show the exact code fix needed\n4. Suggest how to prevent this class of error in the future\n5. Write a regression test that would catch this\n\n```\n[PASTE ERROR STACK TRACE]\n```",
    description: "Diagnoses error stack traces, identifies root cause, provides fix and prevention strategy.",
  },
  {
    title: "Find Performance Bottleneck",
    category: "debugging",
    cli: ["claude-code", "codex", "cursor"],
    prompt: "Analyze the following code for performance bottlenecks:\n1. Identify N+1 queries and inefficient loops\n2. Find unnecessary re-renders (React) or recomputations\n3. Check for memory leaks\n4. Suggest optimizations with before/after code\n5. Estimate performance improvement for each fix\n\n```\n[PASTE CODE HERE]\n```",
    description: "Finds performance issues, suggests optimizations with estimated impact.",
  },
  {
    title: "Design System Component",
    category: "design",
    cli: ["claude-code", "codex", "v0", "cursor"],
    prompt: "Create a reusable [COMPONENT NAME] component for the design system following these requirements:\n- Framework: [React/Vue/Svelte]\n- Styling: [Tailwind/CSS Modules/Styled Components]\n- Must support: [variants/sizes/states]\n- Accessibility: WCAG AA compliant\n- TypeScript types included\n- Usage example in comments\n\nThe component should handle loading, empty, error, and edge case states.",
    description: "Generates production-ready design system components with full state handling and accessibility.",
  },
  {
    title: "Landing Page Copy",
    category: "writing",
    cli: ["claude-code", "codex", "opencode"],
    prompt: "Write landing page copy for [PRODUCT NAME], a [ONE-SENTENCE DESCRIPTION]. Target audience: [TARGET AUDIENCE].\n\nSections to include:\n1. Hero headline + subheadline (max 10 words headline)\n2. Three feature highlights with benefit-focused descriptions\n3. Social proof section placeholder\n4. Single CTA\n\nTone: [professional/casual/technical/friendly]\n\nKeep copy concise. Use active voice. Focus on user benefits, not features.",
    description: "Generates conversion-focused landing page copy with proper structure and tone.",
  },
  {
    title: "Write Technical Documentation",
    category: "writing",
    cli: ["claude-code", "codex", "opencode", "gemini-cli"],
    prompt: "Write technical documentation for the following API/function:\n\n```\n[PASTE CODE OR API SPEC]\n```\n\nInclude:\n1. Overview (what it does)\n2. Parameters table (name, type, required, description)\n3. Return value\n4. Code examples (at least 3 different use cases)\n5. Error handling\n6. Related functions/references\n\nFormat as markdown. Use consistent terminology.",
    description: "Generates comprehensive API documentation with examples and error handling.",
  },
  {
    title: "Explain Complex Code",
    category: "analysis",
    cli: ["claude-code", "codex", "opencode", "gemini-cli"],
    prompt: "Explain the following code in detail:\n1. High-level summary (2-3 sentences)\n2. Walk through the execution flow step by step\n3. Identify all external dependencies\n4. Note any non-obvious patterns or conventions used\n5. Flag potential issues or areas for improvement\n\n```\n[PASTE CODE HERE]\n```",
    description: "Provides detailed code explanation with execution flow, dependencies, and improvement suggestions.",
  },
  {
    title: "Architecture Decision Record",
    category: "analysis",
    cli: ["claude-code", "codex", "opencode"],
    prompt: "Write an Architecture Decision Record (ADR) for the following decision:\n\n**Context:** [Describe the situation and problem]\n**Decision:** [What was decided]\n**Alternatives considered:** [What else was evaluated]\n**Consequences:** [What becomes easier/harder]\n\nFollow the Michael Nygard ADR format. Keep it concise and factual.",
    description: "Generates ADRs following the Nygard format for documenting architectural decisions.",
  },
  {
    title: "Docker Compose Setup",
    category: "devops",
    cli: ["claude-code", "codex", "opencode", "gemini-cli"],
    prompt: "Create a Docker Compose file for a [STACK NAME] development environment:\n- Services: [LIST SERVICES, e.g., Node.js app, PostgreSQL, Redis]\n- Include health checks for each service\n- Use named volumes for data persistence\n- Configure environment variables via .env file\n- Add a Makefile with common commands (up, down, logs, reset)\n\n```\n[PASTE ANY EXISTING CONFIG]\n```",
    description: "Generates Docker Compose setup with health checks, volumes, and convenience Makefile.",
  },
  {
    title: "CI/CD Pipeline Setup",
    category: "devops",
    cli: ["claude-code", "codex", "opencode"],
    prompt: "Create a GitHub Actions workflow for:\n1. Lint and type check on every push\n2. Run tests on every push\n3. Build and deploy to [TARGET] on main branch push\n\nLanguage: [TypeScript/Python/Go/etc.]\nPackage manager: [npm/pip/go mod]\nTest framework: [Jest/pytest/go test]\n\nInclude caching for dependencies and proper job dependencies.",
    description: "Generates production CI/CD pipeline with lint, test, build, and deploy stages.",
  },
  {
    title: "API Route Generator",
    category: "coding",
    cli: ["claude-code", "codex", "opencode", "cursor"],
    prompt: "Generate a REST API endpoint for [RESOURCE NAME] with:\n- CRUD operations (Create, Read, Update, Delete)\n- Input validation\n- Error responses with proper status codes\n- Authentication middleware\n- Database queries (use [ORM/Database])\n- TypeScript types for request/response\n\nFollow REST conventions. Return consistent response shapes.",
    description: "Generates complete REST API endpoints with validation, auth, and proper error handling.",
  },
  {
    title: "Database Migration Script",
    category: "devops",
    cli: ["claude-code", "codex", "opencode"],
    prompt: "Write a database migration for [DATABASE]:\n\n**Change:** [ADD/MODIFY/DROP] [TABLE/COLUMN]\n**Schema:**\n```\n[PASTE SCHEMA SNIPPET]\n```\n\nRequirements:\n- Make it reversible (include both up and down migrations)\n- Handle existing data (no data loss)\n- Add appropriate indexes\n- Include rollback instructions in comments",
    description: "Generates reversible database migrations with data safety and rollback instructions.",
  },
  {
    title: "React Hook Generator",
    category: "coding",
    cli: ["claude-code", "codex", "opencode", "cursor", "windsurf"],
    prompt: "Create a custom React hook called use[Name] that:\n- Purpose: [WHAT THE HOOK DOES]\n- Accepts: [PARAMETERS]\n- Returns: [RETURN VALUES]\n- Handles: loading, error, and edge case states\n- Includes cleanup in useEffect return\n- TypeScript generics where appropriate\n- JSDoc comments",
    description: "Generates production-ready React hooks with full TypeScript types and state handling.",
  },
];

export const promptCategories = [
  { id: "coding", label: "Coding", color: "#2b7a4b" },
  { id: "debugging", label: "Debugging", color: "#c73e3a" },
  { id: "design", label: "Design", color: "#6a3fb8" },
  { id: "writing", label: "Writing", color: "#8b7b6b" },
  { id: "analysis", label: "Analysis", color: "#1a6b8a" },
  { id: "devops", label: "DevOps", color: "#b8860b" },
] as const;
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add src/lib/prompts-data.ts
git commit -m "feat: add prompts data — 15 prompt templates across 6 categories"
```

---

### Task 4: Templates Data File

**Files:**
- Create: `src/lib/templates-data.ts`

- [ ] **Step 1: Create `src/lib/templates-data.ts`**

```typescript
export interface AgentTemplate {
  name: string;
  description: string;
  role: string;
  cli: string;
  config: string;
  howToUse: string;
  contributor?: string;
}

export const agentTemplates: AgentTemplate[] = [
  {
    name: "Code Reviewer Agent",
    description: "A thorough code reviewer that checks for bugs, performance, security, and style issues.",
    role: "code-reviewer",
    cli: "claude-code",
    config: `# CLAUDE.md — Code Reviewer Agent

## Role
You are an expert code reviewer. Your job is to review code changes and provide thorough, actionable feedback.

## Review Checklist
For every code change, evaluate:
1. **Correctness** — Are there bugs or logic errors?
2. **Performance** — Any N+1 queries, unnecessary allocations, or blocking operations?
3. **Security** — SQL injection, XSS, hardcoded secrets, missing auth checks?
4. **Style** — Does it follow the project's existing patterns?
5. **Tests** — Are edge cases covered? Are error states tested?
6. **Readability** — Clear variable names? Functions small enough?

## Output Format
For each finding, provide:
- **Severity:** critical / major / minor / nit
- **File + Line:** reference
- **Issue:** what's wrong
- **Fix:** concrete code suggestion`,
    howToUse: "Place this as CLAUDE.md in your project root. When you open Claude Code, it will act as a code reviewer. Say 'Review the changes in this PR' or point it to specific files.",
  },
  {
    name: "Test Writer Agent",
    description: "Generates comprehensive test suites with edge case coverage.",
    role: "test-writer",
    cli: "claude-code",
    config: `# CLAUDE.md — Test Writer Agent

## Role
You are a test engineer. Your only job is to write thorough, maintainable tests.

## Testing Standards
- Use the project's existing test framework
- Cover: happy path, edge cases, error states, null/undefined inputs
- One test = one behavior (clear test descriptions)
- No shared mutable state between tests
- Mocks only external dependencies, never internal modules
- Tests must be deterministic (no flaky tests)

## Test Naming
\`\`\`
describe('[ModuleName]', () => {
  it('should [expected behavior] when [condition]', () => { ... });
});
\`\`\`

## Before Writing Tests
1. First, understand what the code does
2. List all behaviors that need testing
3. Write tests for critical paths first
4. Then add edge case coverage
5. Run tests — all must pass`,
    howToUse: "Place as CLAUDE.md. Say 'Write tests for [file/function]' — the agent generates comprehensive test coverage.",
  },
  {
    name: "Documentation Agent",
    description: "Writes clear, concise technical documentation for code and APIs.",
    role: "documentation-writer",
    cli: "claude-code",
    config: `# CLAUDE.md — Documentation Agent

## Role
You are a technical writer. You produce clear, concise, and accurate documentation.

## Writing Style
- Active voice, present tense
- Short paragraphs (2-4 sentences)
- Code examples for every concept
- No marketing language — just technical facts
- Define terms on first use

## Document Structure
1. **Overview** — What it does in 1-2 sentences
2. **Quick Start** — Minimal example to get running
3. **API Reference** — Parameter tables, return types, examples
4. **Guides** — Task-oriented how-tos
5. **FAQ** — Answer questions users actually ask

## Output
Generate markdown. Use proper heading hierarchy.`,
    howToUse: "Place as CLAUDE.md. Say 'Document [function/module/API]' — the agent writes structured documentation.",
  },
  {
    name: "Security Auditor Agent",
    description: "Audits code for security vulnerabilities and provides remediation guidance.",
    role: "security-auditor",
    cli: "claude-code",
    config: `# CLAUDE.md — Security Auditor Agent

## Role
You are a security engineer. Audit code for vulnerabilities and provide actionable fixes.

## Check For
1. **OWASP Top 10** — Injection, broken auth, sensitive data exposure, XXE, access control, security misconfig, XSS, deserialization, vulnerable dependencies, logging
2. **API Security** — Rate limiting, proper auth, input validation, CORS config
3. **Infrastructure** — Hardcoded secrets, open ports, weak TLS config
4. **Dependencies** — Known CVEs, outdated packages

## Severity Rating
- **Critical** — Immediate exploit, data breach risk
- **High** — Likely exploitable with moderate effort
- **Medium** — Harder to exploit or limited impact
- **Low** — Best practice violation, minimal risk

## Output
List findings with severity, location, exploit scenario, and concrete fix.`,
    howToUse: "Place as CLAUDE.md. Say 'Audit [file/module] for security issues' — the agent performs OWASP-based review.",
  },
  {
    name: "DevOps Pipeline Agent",
    description: "Generates CI/CD configurations, Docker files, and infrastructure scripts.",
    role: "devops-engineer",
    cli: "claude-code",
    config: `# CLAUDE.md — DevOps Pipeline Agent

## Role
You are a DevOps engineer. Generate production-grade CI/CD and infrastructure configurations.

## Standards
- GitHub Actions for CI/CD (unless told otherwise)
- Docker multi-stage builds for efficiency
- Infrastructure as code (Terraform, Pulumi, or CDK as specified)
- Environment-specific configs (dev/staging/prod)
- Secrets never in code — use GitHub Secrets, Vault, or AWS Secrets Manager

## Pipeline Stages (minimum)
1. Install dependencies (with caching)
2. Lint + type check
3. Test (unit + integration)
4. Build
5. Deploy (with environment approval gate for production)

## Output
Complete, working configuration files with inline comments.`,
    howToUse: "Place as CLAUDE.md. Say 'Set up CI/CD for [project]' or 'Write a Dockerfile for [stack]'.",
  },
  {
    name: "Codex Code Reviewer",
    description: "A code reviewer agent optimized for OpenAI Codex.",
    role: "code-reviewer",
    cli: "codex",
    config: `# AGENTS.md — Code Reviewer

## Role
Code reviewer. Thorough, constructive, specific.

## Review Priority
1. Logic bugs and edge cases
2. Type safety (no \`any\`, proper generics)
3. Error handling completeness
4. Performance (avoid unnecessary work)
5. Style consistency with codebase

## Rules
- Always suggest a concrete fix, not just identify problems
- One suggestion per comment
- Approve PRs that are correct even if not perfect
- Flag missing tests for critical paths`,
    howToUse: "Place as AGENTS.md in project root. Open Codex and point it to the PR or files to review.",
  },
  {
    name: "opencode Full-Stack Agent",
    description: "Full-stack development agent for opencode with TypeScript + React preferences.",
    role: "full-stack-developer",
    cli: "opencode",
    config: `{
  "agents": {
    "default": {
      "systemPrompt": "You are a full-stack TypeScript developer. Prefer server components in Next.js, use Prisma for database access, write tests with Vitest, and follow the existing project patterns."
    }
  },
  "permissions": {
    "allow": ["src/**", "tests/**", "prisma/**", "*.config.*"],
    "deny": ["*.env*", "secrets/**", "node_modules/**"]
  }
}`,
    howToUse: "Save as opencode.jsonc in your project root. Open opencode in the project directory.",
  },
  {
    name: "Cursor TypeScript Expert",
    description: "TypeScript-focused development rules for Cursor IDE.",
    role: "typescript-developer",
    cli: "cursor",
    config: `You are an expert TypeScript developer.

- Use strict TypeScript — no \`any\`, prefer \`unknown\`
- Prefer \`interface\` over \`type\` for object shapes
- Use discriminated unions for state management
- Prefer \`const\` assertions and \`as const\` for literal types
- Use \`satisfies\` operator for type checking without widening
- Functions should have explicit return types
- Prefer arrow functions for callbacks, named functions for exported utilities
- Use template literal types where appropriate
- Never use \`@ts-ignore\` — fix the actual type error

## React Specific
- Prefer server components — only use 'use client' when needed
- Props interfaces named \`[Component]Props\`
- Event handlers: \`handle[Event]\` naming
- Use \`useCallback\`/\`useMemo\` only when measured performance gain exists`,
    howToUse: "Save as .cursorrules in your project root. Cursor auto-loads it on every session.",
  },
];

export const templateCLIs = [
  "claude-code",
  "codex",
  "opencode",
  "cursor",
  "windsurf",
  "gemini-cli",
];
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add src/lib/templates-data.ts
git commit -m "feat: add agent templates — 8 configs for code review, testing, docs, security, devops"
```

---

### Task 5: i18n Extend — Prompts, Templates, Request

**Files:**
- Modify: `src/lib/i18n.ts`

- [ ] **Step 1: Add prompts, templates, request to en object**

Insert before `};` at end of `en` object in `src/lib/i18n.ts`:

```typescript
  prompts: {
    title: "Prompts",
    subtitle: "Prompt Templates",
    description:
      "Curated prompt templates for AI agents. Copy and use these prompts with any compatible CLI. Community-contributed and tested.",
    searchPlaceholder: "Search prompts...",
    copy: "Copy",
    copied: "Copied",
    compatibleCLIs: "Compatible CLIs",
    noPromptsFound: "No prompts found",
    noPromptsHint: "Try a different search term or category filter.",
    allPrompts: "All Prompts",
    contributor: "Contributed by",
  },
  templates: {
    title: "Templates",
    subtitle: "Agent Templates",
    description:
      "Ready-to-use agent configuration templates. Copy a config, place it in your project, and your agent is set up for a specific role.",
    searchPlaceholder: "Search by CLI...",
    role: "Role",
    howToUse: "How to Use",
    noTemplatesFound: "No templates found",
    noTemplatesHint: "Try a different search term or CLI filter.",
    allTemplates: "All Templates",
    contributor: "Contributed by",
  },
  request: {
    title: "Request Content",
    subtitle: "Submit a Request",
    description:
      "Request new content for Agent Hub. Skills, MCP servers, AI models, CLIs, prompts, or templates — the community votes and contributors pick them up.",
    selectType: "What do you want to request?",
    typeSkill: "Agent Skill",
    typeMCP: "MCP Server",
    typeModel: "AI Model",
    typeCLI: "Agent CLI",
    typePrompt: "Prompt Template",
    typeTemplate: "Agent Template",
    nameLabel: "Name",
    namePlaceholder: "e.g., Super Debugger Skill",
    descLabel: "Description",
    descPlaceholder: "What it does and why it should be in Agent Hub...",
    previewIssue: "Preview Issue",
    openIssue: "Open GitHub Issue",
    howItWorks: "How It Works",
    howItWorksDesc:
      "Submit a request via GitHub issue. The community can vote with 👍 reactions. Contributors pick top-voted requests to implement.",
  },
```

- [ ] **Step 2: Add id translations**

Insert before `};` at end of `id` object:

```typescript
  prompts: {
    title: "Prompt",
    subtitle: "Template Prompt",
    description:
      "Template prompt terkurasi untuk AI agent. Salin dan gunakan prompt ini dengan CLI yang kompatibel. Kontribusi dan teruji oleh komunitas.",
    searchPlaceholder: "Cari prompt...",
    copy: "Salin",
    copied: "Tersalin",
    compatibleCLIs: "CLI Kompatibel",
    noPromptsFound: "Prompt tidak ditemukan",
    noPromptsHint:
      "Coba istilah pencarian atau filter kategori yang berbeda.",
    allPrompts: "Semua Prompt",
    contributor: "Kontributor",
  },
  templates: {
    title: "Template",
    subtitle: "Template Agent",
    description:
      "Template konfigurasi agent siap pakai. Salin config, letakkan di proyek, dan agent Anda siap untuk peran tertentu.",
    searchPlaceholder: "Cari berdasarkan CLI...",
    role: "Peran",
    howToUse: "Cara Menggunakan",
    noTemplatesFound: "Template tidak ditemukan",
    noTemplatesHint:
      "Coba istilah pencarian atau filter CLI yang berbeda.",
    allTemplates: "Semua Template",
    contributor: "Kontributor",
  },
  request: {
    title: "Request Konten",
    subtitle: "Kirim Permintaan",
    description:
      "Minta konten baru untuk Agent Hub. Skill, server MCP, model AI, CLI, prompt, atau template — komunitas vote dan kontributor yang mengerjakan.",
    selectType: "Apa yang ingin Anda minta?",
    typeSkill: "Skill Agent",
    typeMCP: "Server MCP",
    typeModel: "Model AI",
    typeCLI: "Agent CLI",
    typePrompt: "Template Prompt",
    typeTemplate: "Template Agent",
    nameLabel: "Nama",
    namePlaceholder: "contoh: Skill Super Debugger",
    descLabel: "Deskripsi",
    descPlaceholder: "Apa fungsinya dan mengapa harus ada di Agent Hub...",
    previewIssue: "Pratinjau Issue",
    openIssue: "Buka GitHub Issue",
    howItWorks: "Cara Kerja",
    howItWorksDesc:
      "Kirim permintaan melalui GitHub issue. Komunitas bisa vote dengan reaksi 👍. Kontributor mengerjakan permintaan teratas.",
  },
```

- [ ] **Step 3: Verify TypeScript**

```bash
npx tsc --noEmit
```
Expected: No errors.

- [ ] **Step 4: Commit**

```bash
git add src/lib/i18n.ts
git commit -m "feat: i18n — add prompts, templates, request translations (EN + ID)"
```

---

### Task 6: Prompts Page

**Files:**
- Create: `src/app/prompts/page.tsx`

- [ ] **Step 1: Create directory**

```bash
mkdir -p src/app/prompts
```

- [ ] **Step 2: Create `src/app/prompts/page.tsx`**

Create the prompts page component. This follows the same pattern as the models page — hero, search/filter, grid cards, detail modal. Key differences: cards show prompt preview with copy button, detail modal shows full prompt text.

Use `promptTemplates` from `@/lib/prompts-data`, `promptCategories`, and `useLocale()` from `@/components/locale-provider`. Translations from `translations[locale].prompts`.

The page structure:
- Hero with title, subtitle, description from `t.prompts`
- Sticky search bar with text input + category filter badges
- 3-column responsive grid of PromptCard components
- Each card: title, category colored badge, CLI compatibility badges (max 3), truncated prompt preview, copy button
- Dialog detail: full prompt in copyable code block, category, compatible CLIs, contributor if present
- Footer with "Agent Hub · {count} prompts"

```typescript
"use client";

import { useState, useMemo } from "react";
import { promptTemplates, promptCategories, type PromptTemplate } from "@/lib/prompts-data";
import { translations } from "@/lib/i18n";
import { useLocale } from "@/components/locale-provider";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const categoryColorMap = Object.fromEntries(promptCategories.map((c) => [c.id, c.color]));

function PromptCard({ prompt, index, onSelect, t }: { prompt: PromptTemplate; index: number; onSelect: (p: PromptTemplate) => void; t: (typeof translations)["en"] }) {
  const [copied, setCopied] = useState(false);
  const copy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="card-reveal cursor-pointer" style={{ animationDelay: `${index * 35}ms` }} onClick={() => onSelect(prompt)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onSelect(prompt); }} role="button" tabIndex={0}>
      <Card className="card-catalog overflow-hidden border-edge bg-white/80 dark:bg-card/80 backdrop-blur-sm">
        <div className="category-stripe" style={{ backgroundColor: categoryColorMap[prompt.category] }} />
        <CardContent className="p-5">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-mono text-sm font-semibold text-ink dark:text-manila tracking-tight leading-snug">{prompt.title}</h3>
            <Badge variant="secondary" className="shrink-0 font-mono text-[10px] uppercase tracking-wider px-1.5 py-0" style={{ backgroundColor: categoryColorMap[prompt.category] + "18", color: categoryColorMap[prompt.category], borderColor: "transparent" }}>
              {promptCategories.find((c) => c.id === prompt.category)?.label}
            </Badge>
          </div>
          <p className="text-xs text-pencil line-clamp-2 mb-3">{prompt.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-1">
              {prompt.cli.slice(0, 3).map((c) => (
                <span key={c} className="text-[10px] font-mono bg-secondary/50 dark:bg-secondary/40 text-pencil dark:text-manila/70 px-1.5 py-0.5 rounded-sm">{c}</span>
              ))}
            </div>
            <button onClick={copy} className="font-mono text-[10px] text-pencil hover:text-stamp transition-colors shrink-0">{copied ? t.prompts.copied : t.prompts.copy}</button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function PromptDetailDialog({ prompt, open, onClose, t }: { prompt: PromptTemplate | null; open: boolean; onClose: () => void; t: (typeof translations)["en"] }) {
  const [copied, setCopied] = useState(false);
  if (!prompt) return null;

  const copy = () => {
    navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto border-edge bg-white dark:bg-card">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="secondary" className="font-mono text-[10px] uppercase tracking-wider" style={{ backgroundColor: (categoryColorMap[prompt.category] ?? "#8b7b6b") + "18", color: categoryColorMap[prompt.category] ?? "#8b7b6b", borderColor: "transparent" }}>
              {promptCategories.find((c) => c.id === prompt.category)?.label}
            </Badge>
          </div>
          <DialogTitle className="font-display text-2xl text-ink dark:text-manila">{prompt.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-5 mt-2">
          <p className="text-pencil leading-relaxed">{prompt.description}</p>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">{t.prompts.compatibleCLIs}</h4>
            <div className="flex flex-wrap gap-1.5">
              {prompt.cli.map((c) => <Badge key={c} variant="outline" className="font-mono text-xs border-edge text-pencil">{c}</Badge>)}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Prompt</h4>
              <button onClick={copy} className="font-mono text-xs text-stamp hover:underline">{copied ? t.prompts.copied : t.prompts.copy}</button>
            </div>
            <pre className="bg-secondary/60 dark:bg-secondary/40 rounded-lg p-4 overflow-x-auto"><code className="font-mono text-xs text-ink dark:text-manila whitespace-pre-wrap">{prompt.prompt}</code></pre>
          </div>
          {prompt.contributor && (
            <p className="text-xs text-muted-foreground">{t.prompts.contributor}: <span className="font-mono text-pencil">@{prompt.contributor}</span></p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function PromptsPage() {
  const { locale } = useLocale();
  const t = translations[locale];
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedPrompt, setSelectedPrompt] = useState<PromptTemplate | null>(null);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return promptTemplates.filter((p) => {
      const ms = !q || p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.cli.some((c) => c.toLowerCase().includes(q));
      const mc = !activeCategory || p.category === activeCategory;
      return ms && mc;
    });
  }, [search, activeCategory]);

  const catCounts = useMemo(() => {
    const m: Record<string, number> = {};
    promptTemplates.forEach((p) => { m[p.category] = (m[p.category] || 0) + 1; });
    return m;
  }, []);

  return (
    <main className="flex-1">
      <header className="border-b border-edge/60 bg-white/40 dark:bg-card/40 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-stamp mb-4">{t.prompts.subtitle}</p>
          <h1 className="font-display text-5xl md:text-7xl text-ink dark:text-manila leading-[1.05] mb-4">{t.prompts.title}</h1>
          <p className="text-lg text-pencil max-w-2xl leading-relaxed">{t.prompts.description}</p>
        </div>
      </header>

      <section className="sticky top-[57px] z-10 border-b border-edge/60 bg-manila/90 dark:bg-background/90 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col sm:flex-row gap-3">
          <Input placeholder={t.prompts.searchPlaceholder} value={search} onChange={(e) => setSearch(e.target.value)} className="max-w-sm font-mono text-sm bg-white/70 dark:bg-card/70" />
          <div className="flex flex-wrap gap-1.5">
            <Badge variant={activeCategory === null ? "default" : "outline"} className="cursor-pointer font-mono text-xs" onClick={() => setActiveCategory(null)}>{t.prompts.allPrompts} ({promptTemplates.length})</Badge>
            {promptCategories.map((cat) => (
              <Badge key={cat.id} variant={activeCategory === cat.id ? "default" : "outline"} className="cursor-pointer font-mono text-xs" style={activeCategory === cat.id ? { backgroundColor: cat.color } : { borderColor: cat.color + "40" }} onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}>{cat.label} ({catCounts[cat.id] || 0})</Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        {filtered.length === 0 ? (
          <div className="text-center py-20"><p className="font-display text-2xl text-muted-foreground mb-2">{t.prompts.noPromptsFound}</p><p className="text-pencil text-sm">{t.prompts.noPromptsHint}</p></div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((p, i) => <PromptCard key={p.title} prompt={p} index={i} onSelect={setSelectedPrompt} t={t} />)}
          </div>
        )}
      </section>

      <footer className="border-t border-edge/60 bg-white/40 dark:bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center"><p className="font-mono text-xs text-muted-foreground">Agent Hub · {promptTemplates.length} prompt templates</p></div>
      </footer>

      <PromptDetailDialog prompt={selectedPrompt} open={!!selectedPrompt} onClose={() => setSelectedPrompt(null)} t={t} />
    </main>
  );
}
```

- [ ] **Step 3: Verify build**

```bash
npm run build
```
Expected: All routes compiled, no errors.

- [ ] **Step 4: Commit**

```bash
git add src/app/prompts/
git commit -m "feat: add prompts page — 15 templates, search, filter, copy"
```

---

### Task 7: Templates Page

**Files:**
- Create: `src/app/templates/page.tsx`

- [ ] **Step 1: Create directory**

```bash
mkdir -p src/app/templates
```

- [ ] **Step 2: Create `src/app/templates/page.tsx`**

Create the templates page component. Follows the existing patterns. Uses expandable cards (similar to config page pattern) since templates have longer config content.

```typescript
"use client";

import { useState, useMemo } from "react";
import { agentTemplates, templateCLIs, type AgentTemplate } from "@/lib/templates-data";
import { translations } from "@/lib/i18n";
import { useLocale } from "@/components/locale-provider";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function TemplatesPage() {
  const { locale } = useLocale();
  const t = translations[locale];
  const [search, setSearch] = useState("");
  const [activeCLI, setActiveCLI] = useState<string | null>(null);
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const copy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1500);
  };

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return agentTemplates.filter((t) => {
      const ms = !q || t.name.toLowerCase().includes(q) || t.description.toLowerCase().includes(q) || t.role.toLowerCase().includes(q);
      const mc = !activeCLI || t.cli === activeCLI;
      return ms && mc;
    });
  }, [search, activeCLI]);

  return (
    <main className="flex-1">
      <header className="border-b border-edge/60 bg-white/40 dark:bg-card/40 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-stamp mb-4">{t.templates.subtitle}</p>
          <h1 className="font-display text-5xl md:text-7xl text-ink dark:text-manila leading-[1.05] mb-4">{t.templates.title}</h1>
          <p className="text-lg text-pencil max-w-2xl leading-relaxed">{t.templates.description}</p>
        </div>
      </header>

      <section className="sticky top-[57px] z-10 border-b border-edge/60 bg-manila/90 dark:bg-background/90 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col sm:flex-row gap-3">
          <Input placeholder={t.templates.searchPlaceholder} value={search} onChange={(e) => setSearch(e.target.value)} className="max-w-sm font-mono text-sm bg-white/70 dark:bg-card/70" />
          <div className="flex flex-wrap gap-1.5">
            <Badge variant={activeCLI === null ? "default" : "outline"} className="cursor-pointer font-mono text-xs" onClick={() => setActiveCLI(null)}>{t.templates.allTemplates} ({agentTemplates.length})</Badge>
            {templateCLIs.map((cli) => (
              <Badge key={cli} variant={activeCLI === cli ? "default" : "outline"} className="cursor-pointer font-mono text-xs" onClick={() => setActiveCLI(activeCLI === cli ? null : cli)}>{cli}</Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        {filtered.length === 0 ? (
          <div className="text-center py-20"><p className="font-display text-2xl text-muted-foreground mb-2">{t.templates.noTemplatesFound}</p><p className="text-pencil text-sm">{t.templates.noTemplatesHint}</p></div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            {filtered.map((tmpl, i) => (
              <Card key={tmpl.name} className="border-edge bg-white/70 dark:bg-card/70 overflow-hidden">
                <button className="w-full text-left" onClick={() => setExpandedIdx(expandedIdx === i ? null : i)}>
                  <div className="p-5 flex items-start justify-between">
                    <div>
                      <h3 className="font-mono text-base font-semibold text-ink dark:text-manila">{tmpl.name}</h3>
                      <p className="text-xs text-pencil mt-1">{tmpl.description}</p>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="outline" className="font-mono text-[10px] border-edge/40 text-pencil">{tmpl.cli}</Badge>
                        <Badge variant="secondary" className="font-mono text-[10px]">{tmpl.role}</Badge>
                      </div>
                    </div>
                    <span className={`font-mono text-xs text-muted-foreground transition-transform duration-200 ${expandedIdx === i ? "rotate-180" : ""} shrink-0 mt-1`}>▼</span>
                  </div>
                </button>
                {expandedIdx === i && (
                  <div className="px-5 pb-5 space-y-4 border-t border-edge/30 pt-4">
                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">{t.templates.howToUse}</h4>
                      <p className="text-sm text-pencil">{tmpl.howToUse}</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Config</h4>
                        <button onClick={(e) => { e.stopPropagation(); copy(tmpl.config, i); }} className="font-mono text-xs text-stamp hover:underline">{copiedIdx === i ? "Copied" : "Copy"}</button>
                      </div>
                      <pre className="bg-secondary/60 dark:bg-secondary/40 rounded-lg p-4 overflow-x-auto max-h-64 overflow-y-auto"><code className="font-mono text-xs text-ink dark:text-manila whitespace-pre-wrap">{tmpl.config}</code></pre>
                    </div>
                    {tmpl.contributor && <p className="text-xs text-muted-foreground">{t.templates.contributor}: <span className="font-mono text-pencil">@{tmpl.contributor}</span></p>}
                  </div>
                )}
              </Card>
            ))}
          </div>
        )}
      </section>

      <footer className="border-t border-edge/60 bg-white/40 dark:bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center"><p className="font-mono text-xs text-muted-foreground">Agent Hub · {agentTemplates.length} agent templates</p></div>
      </footer>
    </main>
  );
}
```

- [ ] **Step 3: Verify build**

```bash
npm run build
```
Expected: All routes compiled, no errors.

- [ ] **Step 4: Commit**

```bash
git add src/app/templates/
git commit -m "feat: add templates page — 8 agent configs with expand/copy"
```

---

### Task 8: Request Page + Modal Component

**Files:**
- Create: `src/app/request/page.tsx`
- Create: `src/components/request-modal.tsx`

- [ ] **Step 1: Create directory**

```bash
mkdir -p src/app/request
```

- [ ] **Step 2: Create `src/app/request/page.tsx`**

```typescript
"use client";

import { useState } from "react";
import { translations } from "@/lib/i18n";
import { useLocale } from "@/components/locale-provider";
import { RequestModal } from "@/components/request-modal";
import { Badge } from "@/components/ui/badge";

const issueTemplateBase = "https://github.com/arjunastrw/skill-docs/issues/new?template=add-data.md";

const requestTypes = [
  { type: "skill", label: "Agent Skill", emoji: "🛠" },
  { type: "mcp", label: "MCP Server", emoji: "🔌" },
  { type: "model", label: "AI Model", emoji: "🧠" },
  { type: "cli", label: "Agent CLI", emoji: "💻" },
  { type: "prompt", label: "Prompt Template", emoji: "📝" },
  { type: "template", label: "Agent Template", emoji: "📋" },
];

export default function RequestPage() {
  const { locale } = useLocale();
  const t = translations[locale];
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="flex-1">
      <header className="border-b border-edge/60 bg-white/40 dark:bg-card/40 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-stamp mb-4">{t.request.subtitle}</p>
          <h1 className="font-display text-5xl md:text-7xl text-ink dark:text-manila leading-[1.05] mb-4">{t.request.title}</h1>
          <p className="text-lg text-pencil max-w-2xl leading-relaxed">{t.request.description}</p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="font-display text-2xl text-ink dark:text-manila mb-4">{t.request.howItWorks}</h2>
          <p className="text-pencil leading-relaxed">{t.request.howItWorksDesc}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {requestTypes.map((rt) => (
            <a
              key={rt.type}
              href={`${issueTemplateBase}&title=data%3A+add+${rt.type}+—+`}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 rounded-xl border border-edge/60 bg-white/70 dark:bg-card/70 hover:border-stamp/40 hover:bg-white dark:hover:bg-card transition-all text-left group"
            >
              <span className="text-2xl mb-2 block">{rt.emoji}</span>
              <h3 className="font-mono text-sm font-semibold text-ink dark:text-manila mb-1">{rt.label}</h3>
              <p className="text-xs text-pencil group-hover:text-stamp transition-colors">
                Open GitHub Issue →
              </p>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-manila dark:bg-manila dark:text-ink font-mono text-sm hover:opacity-80 transition-opacity"
          >
            {t.request.openIssue}
          </button>
        </div>
      </section>

      <footer className="border-t border-edge/60 bg-white/40 dark:bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center">
          <p className="font-mono text-xs text-muted-foreground">Agent Hub · Community requests via GitHub Issues</p>
        </div>
      </footer>

      <RequestModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
```

- [ ] **Step 3: Create `src/components/request-modal.tsx`**

```typescript
"use client";

import { useState } from "react";
import { translations } from "@/lib/i18n";
import { useLocale } from "./locale-provider";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";

const issueBase = "https://github.com/arjunastrw/skill-docs/issues/new?template=add-data.md";

const types = [
  { value: "skill", labelKey: "typeSkill" as const },
  { value: "mcp", labelKey: "typeMCP" as const },
  { value: "model", labelKey: "typeModel" as const },
  { value: "cli", labelKey: "typeCLI" as const },
  { value: "prompt", labelKey: "typePrompt" as const },
  { value: "template", labelKey: "typeTemplate" as const },
];

export function RequestModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { locale } = useLocale();
  const t = translations[locale];
  const [selectedType, setSelectedType] = useState("skill");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const issueUrl = `${issueBase}&title=data%3A+add+${selectedType}+—+${encodeURIComponent(name || "...")}&body=${encodeURIComponent(`**Type:** ${selectedType}\n\n**Name:** ${name}\n\n**Description:**\n${desc}`)}`;

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-md border-edge bg-white dark:bg-card">
        <DialogHeader>
          <DialogTitle className="font-display text-xl text-ink dark:text-manila">{t.request.openIssue}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 mt-2">
          <div>
            <label className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2 block">{t.request.selectType}</label>
            <div className="grid grid-cols-3 gap-2">
              {types.map((tp) => (
                <button key={tp.value} onClick={() => setSelectedType(tp.value)} className={`px-3 py-2 rounded-lg font-mono text-xs transition-colors ${selectedType === tp.value ? "bg-ink text-manila dark:bg-manila dark:text-ink" : "bg-secondary/50 dark:bg-secondary/40 text-pencil hover:text-ink dark:hover:text-manila"}`}>
                  {t.request[tp.labelKey as keyof typeof t.request]}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1 block">{t.request.nameLabel}</label>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder={t.request.namePlaceholder} className="w-full font-mono text-sm bg-secondary/50 dark:bg-secondary/40 border border-edge/40 rounded-lg px-3 py-2 text-ink dark:text-manila focus:outline-none focus:border-stamp/40" />
          </div>
          <div>
            <label className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1 block">{t.request.descLabel}</label>
            <textarea value={desc} onChange={(e) => setDesc(e.target.value)} placeholder={t.request.descPlaceholder} rows={4} className="w-full font-mono text-sm bg-secondary/50 dark:bg-secondary/40 border border-edge/40 rounded-lg px-3 py-2 text-ink dark:text-manila focus:outline-none focus:border-stamp/40 resize-none" />
          </div>
          <a href={issueUrl} target="_blank" rel="noopener noreferrer" className="block w-full text-center px-4 py-2.5 rounded-full bg-stamp text-white font-mono text-sm hover:opacity-90 transition-opacity" onClick={onClose}>
            {t.request.openIssue}
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
```

- [ ] **Step 4: Verify build**

```bash
npm run build
```
Expected: All routes compiled, no errors. `/request` page generated.

- [ ] **Step 5: Commit**

```bash
git add src/app/request/ src/components/request-modal.tsx
git commit -m "feat: add request page + modal — submit content requests via GitHub issues"
```

---

### Task 9: NavBar Update — Add 3 New Links

**Files:**
- Modify: `src/components/navbar.tsx`

- [ ] **Step 1: Update NavBar links and interface**

Edit `src/components/navbar.tsx`. Update the `links` array to include prompts, templates:

Find the `links` array definition and replace with:

```typescript
const links = [
  { href: "/", key: "start" as const },
  { href: "/skills", key: "skills" as const },
  { href: "/mcp", key: "mcp" as const },
  { href: "/models", key: "models" as const },
  { href: "/config", key: "config" as const },
  { href: "/prompts", key: "prompts" as const },
  { href: "/templates", key: "templates" as const },
];
```

- [ ] **Step 2: Update NavBar interface to include prompts and templates**

Find the `NavBarProps` interface and ensure it includes `prompts` and `templates`:

```typescript
interface NavBarProps {
  labels: { start: string; skills: string; mcp: string; models: string; config: string; prompts: string; templates: string };
  locale: Locale;
  setLocale: (l: Locale) => void;
}
```

- [ ] **Step 3: Add "Request" button next to search in nav**

After the `GlobalSearch` component in the nav, add a Request link:

```tsx
<Link
  href="/request"
  className="hidden sm:flex items-center px-3 py-1.5 rounded-full border border-stamp/30 text-xs font-mono text-stamp hover:bg-stamp/10 transition-colors"
>
  Request
</Link>
```

Don't forget to import `Link` from `next/link` (already imported).

- [ ] **Step 4: Ensure i18n nav includes prompts, templates**

Check `src/lib/i18n.ts` — the `nav` object should have `prompts` and `templates`. If not, add them:

en nav:
```typescript
prompts: "Prompts",
templates: "Templates",
```

id nav:
```typescript
prompts: "Prompt",
templates: "Template",
```

- [ ] **Step 5: Verify build**

```bash
npm run build
```
Expected: All 9 routes compiled, NavBar shows 7 links + Request button.

- [ ] **Step 6: Commit**

```bash
git add src/components/navbar.tsx
git commit -m "feat: nav — add prompts, templates, request links"
```

---

### Task 10: Final Build + Verify

- [ ] **Step 1: Run full build**

```bash
npm run build
```
Expected output shows all 9 routes:
```
┌ ○ /
├ ○ /_not-found
├ ○ /config
├ ○ /mcp
├ ○ /models
├ ○ /prompts        ← NEW
├ ○ /request        ← NEW
├ ○ /skills
└ ○ /templates      ← NEW
```

- [ ] **Step 2: Check output files**

```bash
ls out/*.html out/prompts.html out/request.html out/templates.html
```
Expected: `index.html`, `config.html`, `mcp.html`, `models.html`, `prompts.html`, `request.html`, `skills.html`, `templates.html`, `404.html`, `_not-found.html`

- [ ] **Step 3: Run TypeScript check**

```bash
npx tsc --noEmit
```
Expected: No errors.

- [ ] **Step 4: Final commit + push**

```bash
git add -A
git commit -m "chore: final build verification — 9 routes all passing"
git push origin main
```

---

## Verification Summary

After all tasks complete, verify:

| Check | Method |
|-------|--------|
| 9 routes build | `npm run build` shows 9 entries |
| TypeScript | `npx tsc --noEmit` — no errors |
| Dark mode | Toggle works on all new pages |
| EN/ID | Language switch works on all new pages |
| Global search | ⌘K finds prompts and templates |
| Request modal | Opens, fills form, generates correct GitHub URL |
| Mobile | All pages responsive at 375px |
| README badges | Render on GitHub repo page |
