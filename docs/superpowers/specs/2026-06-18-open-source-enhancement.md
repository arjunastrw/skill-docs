# Design: Agent Hub — Open Source Enhancement

**Date:** 2026-06-18  
**Status:** Approved  
**Branch:** main

## Overview

Turn Agent Hub into a community-driven open source project. Add infrastructure for contributor onboarding, two new content pages, and a request/submit engagement system.

## Goals

- Lower contribution barrier → data contributions via simple PRs
- Grow content → Prompts Library + Agent Templates pages
- Engage community → Request/submit system with voting
- Professionalize → LICENSE, badges, templates, changelog

## Infrastructure (Open Source Readiness)

### Files to Create/Update

| File | Content |
|------|---------|
| `LICENSE` | MIT License |
| `README.md` | Project description, 7 pages overview, tech stack, quick start, deploy guide, contributing link, license badge |
| `CONTRIBUTING.md` | How to add skills, MCP servers, models, CLI data, prompts, templates. File paths, data schemas, PR process. JSON schema validation. |
| `CODE_OF_CONDUCT.md` | Contributor Covenant 2.1 |
| `.github/ISSUE_TEMPLATE/bug-report.md` | Bug template |
| `.github/ISSUE_TEMPLATE/feature-request.md` | Feature request template |
| `.github/ISSUE_TEMPLATE/add-data.md` | Data addition template (skill/MCP/model/CLI/prompt/template) |
| `.github/PULL_REQUEST_TEMPLATE.md` | PR checklist |
| `.github/FUNDING.yml` | Optional — sponsor links |
| `CHANGELOG.md` | Track versions and changes |

### Badges (README top)

```markdown
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]
[![GitHub stars](https://img.shields.io/github/stars/arjunastrw/skill-docs)]
[![GitHub contributors](https://img.shields.io/github/contributors/arjunastrw/skill-docs)]
[![Deploy Status](https://img.shields.io/github/actions/workflow/status/arjunastrw/skill-docs/.github/workflows/deploy.yml)]
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fagent-hub.web.id)]
```

## New Data Files

- `src/lib/prompts-data.ts` — Prompt templates per CLI/use case
- `src/lib/templates-data.ts` — Agent config templates

### Prompt Data Schema

```typescript
interface PromptTemplate {
  title: string;
  category: "coding" | "debugging" | "design" | "writing" | "analysis" | "devops";
  cli: string[]; // compatible CLIs
  prompt: string; // the actual prompt text
  description: string;
  contributor?: string; // GitHub username
}
```

Initial: ~15-20 curated prompts across 6 categories.

### Template Data Schema

```typescript
interface AgentTemplate {
  name: string;
  description: string;
  role: string; // e.g., "code-reviewer", "test-writer"
  cli: string; // primary CLI
  config: string; // the actual config file content
  howToUse: string;
  contributor?: string;
}
```

Initial: ~8-10 templates for common agent roles.

## New Pages

### Prompts Page (`/prompts`)

| Section | Content |
|---------|---------|
| Hero | Title, subtitle, description |
| Search + Filter | By category (coding, debugging, design, writing, analysis, devops) + CLI |
| Prompt Grid | Cards: title, category badge, CLI compatibility badges, prompt preview (truncated), copy button |
| Detail Modal | Full prompt text (copyable with syntax highlight), category, compatible CLIs, contributor attribution |

### Templates Page (`/templates`)

| Section | Content |
|---------|---------|
| Hero | Title, subtitle, description |
| Search | By CLI name |
| Templates Grid | Cards: agent role name, description, primary CLI badge |
| Detail Panel | Expandable: description, how-to-use, full config (copyable code block), contributor |

## Request/Submit System

### Request Dialog (Global)

- Button in nav bar: "Request" (pill style, next to search)
- Modal with 3-step form:
  1. Select type: Skill / MCP Server / Model / CLI / Prompt / Template
  2. Fill name + description
  3. Preview GitHub issue → "Open Issue" button
- Opens `github.com/arjunastrw/skill-docs/issues/new?template=add-data.md&title=...&body=...`

### Requests Page (`/request`)

- Static page: explains how to submit requests for new content
- Shows links to each issue template type (skill, MCP, model, CLI, prompt, template)
- "Submit Request" button opens modal (same as nav bar modal)
- Static fallback content always available

## i18n Scope

- All new page UI chrome: EN + ID
- Prompt/template content: EN only (community contributed, English is lingua franca for prompts)
- Request system UI: EN + ID

## Nav Bar Update

```
[Start] [Skills] [MCP] [Models] [Config] [Prompts] [Templates]  [🔍] [Request] [☽] [EN|ID]
```

Desktop: 7 links + search + request
Mobile: hamburger with 7 links + request

## Non-Goals

- No backend/DB for voting — uses GitHub issues 👍 reactions
- No user authentication
- No dynamic content — all static
- Prompt/template moderation is via PR review process

## Verifications

- `npm run build` clean with 9 routes (7 pages + 404 + not-found)
- All pages responsive at 375px, 768px
- EN/ID toggle works on all new pages
- Dark mode works on all new pages
- Issue templates render correctly on GitHub
- CONTRIBUTING.md covers all data types
