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
