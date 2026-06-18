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
