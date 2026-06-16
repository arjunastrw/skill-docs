# Design: Agent Hub — Complete Multi-Page Reference

**Date:** 2026-06-16  
**Status:** Approved (grilled)  
**Branch:** main

## Overview

Rename and expand the site from a single-focus skills catalog into a comprehensive **Agent Hub** — the go-to reference for AI agent developers. Covers CLI tools, agent skills, MCP servers, AI models, and configuration patterns.

## Pages (5 total)

| Route | Page | Content |
|-------|------|---------|
| `/` | Start | Agent CLI comparison (15+) + install guides |
| `/skills` | Skills | 103+ agent skills catalog (existing) |
| `/mcp` | MCP | 30+ MCP server catalog + build guide |
| `/models` | Models | 20-30 AI model comparison + detail cards |
| `/config` | Config | Per-CLI agent configuration reference |

## Branding

- **Name:** Agent Hub
- **Scope:** Brand rename only — title, metadata, nav, footer, i18n
- **Repo:** `github.com/arjunastrw/skill-docs` (unchanged)
- **URL:** `arjunastrw.github.io/skill-docs` (unchanged)

## New Pages Spec

### Models Page (`/models`)

**Comparison Table columns:**
- Model name, Provider, Context window, Pricing (input/output per 1M tokens), Max output tokens, Modalities (text/image/audio/video), Knowledge cutoff

**Detail Card (modal):**
- Benchmark scores (MMLU, HumanEval, etc.)
- Strengths & weaknesses
- Best use cases
- API format example

**Models covered (initial 20+):**
Claude (Opus, Sonnet, Haiku), GPT (4o, 4.1, o4-mini), Gemini (2.5 Pro, 2.5 Flash), Llama 4, DeepSeek V3 / R1, Mistral Large, Qwen, Grok, Command R+, Nova, etc.

**Data source:** Static curated file `src/lib/models-data.ts`. Pricing manually updated via PRs (provider pricing pages change infrequently). Context windows and benchmarks auto-checked against official docs via build script.

### Config Page (`/config`)

**Per-CLI reference — tabbed interface:**
- **Claude Code:** `CLAUDE.md` format, location (`~/.claude/`, project root), sections (context, style, tools), AGENTS.md
- **Codex:** `.codex/config.json`, pet config, skills registration
- **Copilot CLI:** `.github/copilot-instructions.md`, VS Code settings sync
- **Gemini CLI:** `GEMINI.md`, `.gemini/` directory structure
- **opencode:** `opencode.json`, `.opencode/` directory, MCP config, agent rules
- **Cursor:** `.cursorrules`, global vs project rules, `.cursor/` directory
- **Windsurf:** `.windsurfrules`, Cascade config
- **Amazon Q:** `.amazonq/` config structure

**Side-by-side comparison** — table showing equivalent config files across CLIs.

**Data source:** Static file `src/lib/config-data.ts`.

## Data Expansion

### CLI (8 → 15+)
Add: Aider, Continue (VS Code), Cody (Sourcegraph), Tabby, PearAI, Zed AI, Cody CLI, Replit Agent, v0 (Vercel), Bolt.new

### MCP (9 → 30+)
Add: Sequential Thinking, Tavily Search, Exa Search, Perplexity Search, Playwright, Browserbase, Supabase, Pinecone, Chroma, Weaviate, Resend, SendGrid, Slack, Discord, Linear, Jira, GitLab, Google Drive, Google Maps, Stripe, Vercel AI SDK

## Global Search

**Location:** Nav bar (expandable search icon or inline on desktop)

**Behavior:**
- Searches across all data sources: CLI, Skills, MCP, Models
- Results grouped by section with section color indicator
- Keyboard navigation (↑↓ Enter Esc)
- Click result → navigate to page + auto-open detail modal if applicable
- Empty state: "No results across Agent Hub"

**Implementation:**
- Client component `GlobalSearch` in nav bar
- Build search index at page load from all data arrays
- Fuse.js or custom fuzzy matching for fast filtering

## Auto-Sync Architecture

### Build-time (data freshness)
- GitHub Actions workflow with `schedule` trigger (daily)
- Fetch from:
  - npm registry API → CLI version, downloads, metadata
  - GitHub API → MCP server stars, last commit
  - Models: curated static data, PR-based updates (pricing pages change infrequently)
- Merge fetched data with curated static overrides
- Rebuild and deploy if data changed

### Client-side (live freshness)
- On page load, check `last_updated` timestamp in data
- If data > 24h old, fetch fresh data from a JSON endpoint (gh-pages hosted)
- Show subtle "Updating..." indicator
- Fallback: always show static data first, refresh in background

### Fallback
- All data has complete static TypeScript files
- If fetch fails → static data still works
- If build fails → previous deployment stays live

## Tech Stack (unchanged)
- Next.js 16 (app router, static export)
- shadcn/ui + Tailwind CSS v4
- TypeScript
- GitHub Pages (Actions deploy)

## File Structure After Changes

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx            # Start
│   ├── skills/page.tsx     # Skills
│   ├── mcp/page.tsx        # MCP
│   ├── models/page.tsx     # NEW
│   └── config/page.tsx     # NEW
├── components/
│   ├── client-shell.tsx
│   ├── global-search.tsx   # NEW
│   ├── lang-switcher.tsx
│   ├── locale-provider.tsx
│   ├── navbar.tsx
│   ├── theme-provider.tsx
│   ├── theme-toggle.tsx
│   └── ui/                 # shadcn
├── lib/
│   ├── cli-data.ts         # EXPANDED
│   ├── mcp-data.ts         # EXPANDED
│   ├── models-data.ts      # NEW
│   ├── config-data.ts      # NEW
│   ├── skills-data.ts
│   ├── i18n.ts             # EXPANDED
│   └── utils.ts
└── scripts/
    └── sync-data.ts        # NEW - build-time sync
```

## Non-Goals
- No user accounts or personalization
- No comments or ratings
- No real-time chat or agent execution
- No payment or subscription
- All static, all free, all open source

## Verifications
- `npm run build` passes zero errors
- All 5 routes generate HTML in `out/`
- Global search returns correct cross-page results
- EN/ID toggle works on all new pages
- Dark mode works on all new pages
- Nav links navigate correctly
- Mobile responsive all pages at 375px, 768px
