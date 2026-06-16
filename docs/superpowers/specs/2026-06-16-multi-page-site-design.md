# Design: Multi-Page Agent Skills Site with Start & MCP

**Date:** 2026-06-16
**Status:** Approved
**Branch:** main

## Overview

Expand the single-page Agent Skills reference into a 3-section site:

1. **Start** (`/`) — Agent CLI comparison table + per-CLI install guides
2. **Skills** (`/skills`) — Existing skills catalog (relocated from `/`)
3. **MCP** (`/mcp`) — MCP server catalog + build guide

## Route Architecture

```
src/app/
├── layout.tsx          # Shared Nav bar + ThemeProvider
├── page.tsx            # Start page (CLI comparison)
├── skills/
│   └── page.tsx        # Skills catalog
└── mcp/
    └── page.tsx        # MCP catalog + build guide
```

All routes static export (`output: "export"`). Nav uses `<Link>` for client-side SPA-like transitions.

## Data Files

- `src/lib/cli-data.ts` — Agent CLI comparison data
- `src/lib/mcp-data.ts` — MCP server catalog data
- `src/lib/skills-data.ts` — Existing skills data (unchanged)
- `src/lib/i18n.ts` — i18n extended for new sections

## Component Architecture

### Shared (new)

- **NavBar** — Floating pill, sticky top. Links: Start, Skills, MCP. Right: ThemeToggle, LangSwitcher. Hamburger at `<768px` with staggered reveal.
- Footer preserved — rename "Agent Skills Reference"

### Start Page (`/`)

| Section          | Content                                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------------------------- |
| Hero             | Title, subtitle, description (what agent CLIs are, why compare)                                               |
| Comparison Table | Responsive table: CLI name, vendor, platform, pricing, install cmd, key feature                               |
| Install Guides   | 2-col grid cards per CLI: logo, name, `npm install -g` command (copyable), auth setup, quick start, docs link |

### Skills Page (`/skills`)

Existing content moved from `page.tsx` → `skills/page.tsx`. All existing components preserved: SkillCard, SkillDetailDialog, search, filter, combos section.

### MCP Page (`/mcp`)

| Section         | Content                                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------------------ |
| Hero            | MCP server catalog intro                                                                                           |
| Search + Filter | By category (filesystem, database, API, browser, search, communication)                                            |
| MCP Server Grid | Cards with name, description, category badge, install command, env vars                                            |
| Detail Modal    | Full server info: all config, use cases                                                                            |
| Build Guide     | Tabbed section: Python (FastMCP) + Node.js (MCP SDK). Step-by-step with code blocks. Hello World example for each. |

## Nav Bar Design

```
┌──────────────────────────────────────────────────────┐
│  [Start]   [Skills]   [MCP]              ☽   EN│ID  │
└──────────────────────────────────────────────────────┘
```

- Floating pill, `mt-6 mx-auto`, `rounded-full`
- Active link: underline accent (`bg-stamp` bar, 2px height, smooth transition)
- Backdrop blur, border `border-edge/60`
- Mobile: hamburger → overlay with staggered list reveal, morph to X

## i18n Scope

- All UI chrome for Start + MCP pages: EN + ID
- CLI descriptions: EN only (technical reference)
- MCP server descriptions: EN only (technical reference)
- Build guide: EN + ID code comments

## MCP Servers Covered (Initial)

1. Filesystem — secure file read/write
2. GitHub — repo, issue, PR management
3. Brave Search — web + local search
4. Puppeteer — browser automation
5. PostgreSQL — database query
6. SQLite — local database
7. Fetch — HTTP requests
8. Memory — knowledge graph
9. Notion — workspace integration

## Agent CLIs Covered (Initial)

1. Claude Code (Anthropic)
2. Codex (OpenAI)
3. GitHub Copilot CLI
4. Gemini CLI (Google)
5. opencode
6. Cursor
7. Windsurf
8. Amazon Q CLI

## Non-Goals

- No live CLI execution — static reference only
- MCP build guide is read-only reference, not interactive playground
- No user accounts, comments, or ratings
- Skill descriptions remain in English

## Verifications

- `npm run build` passes with zero errors
- All 3 routes generate static HTML in `out/`
- Nav links navigate correctly (client-side after hydration)
- Dark mode toggle works across all pages
- Language switcher persists across page navigation
- Mobile responsive (test at 375px, 768px)
