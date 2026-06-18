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
