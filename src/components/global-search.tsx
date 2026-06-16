"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { skills } from "@/lib/skills-data";
import { agentCLIs } from "@/lib/cli-data";
import { mcpServers } from "@/lib/mcp-data";
import { aiModels } from "@/lib/models-data";
import { agentConfigs } from "@/lib/config-data";
import { translations } from "@/lib/i18n";
import { useLocale } from "./locale-provider";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";

type Result = {
  type: "cli" | "skills" | "mcp" | "models" | "config";
  label: string;
  href: string;
  snippet: string;
};

export function GlobalSearch({ labels }: { labels: (typeof translations)["en"]["nav"] }) {
  const { locale } = useLocale();
  const t = translations[locale];
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIdx, setSelectedIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    if (query.length < 2) return [];
    const q = query.toLowerCase();
    const all: Result[] = [];

    agentCLIs.forEach((c) => {
      if (c.name.toLowerCase().includes(q) || c.vendor.toLowerCase().includes(q)) {
        all.push({ type: "cli", label: c.name, href: "/", snippet: c.description.slice(0, 100) });
      }
    });
    skills.forEach((s) => {
      if (s.name.toLowerCase().includes(q) || s.triggers.some((t) => t.toLowerCase().includes(q))) {
        all.push({ type: "skills", label: s.name, href: "/skills", snippet: s.description.slice(0, 100) });
      }
    });
    mcpServers.forEach((m) => {
      if (m.name.toLowerCase().includes(q)) {
        all.push({ type: "mcp", label: m.name, href: "/mcp", snippet: m.description.slice(0, 100) });
      }
    });
    aiModels.forEach((m) => {
      if (m.name.toLowerCase().includes(q) || m.provider.toLowerCase().includes(q)) {
        all.push({ type: "models", label: m.name, href: "/models", snippet: `${m.provider} · ${m.contextWindow} · ${m.pricingInput}/1M in` });
      }
    });
    agentConfigs.forEach((c) => {
      if (c.cli.toLowerCase().includes(q) || c.configFile.toLowerCase().includes(q)) {
        all.push({ type: "config", label: c.cli, href: "/config", snippet: c.configFile });
      }
    });
    return all.slice(0, 12);
  }, [query]);

  useEffect(() => {
    setSelectedIdx(0);
  }, [results.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
        setTimeout(() => inputRef.current?.focus(), 50);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setSelectedIdx((i) => Math.min(i + 1, results.length - 1)); }
    if (e.key === "ArrowUp") { e.preventDefault(); setSelectedIdx((i) => Math.max(i - 1, 0)); }
    if (e.key === "Enter" && results[selectedIdx]) {
      const r = results[selectedIdx];
      setOpen(false); setQuery("");
      router.push(r.href);
    }
  };

  const sectionColors: Record<string, string> = { cli: "#b8860b", skills: "#c73e3a", mcp: "#6a3fb8", models: "#2b7a4b", config: "#1a6b8a" };

  return (
    <>
      <button onClick={() => { setOpen(true); setTimeout(() => inputRef.current?.focus(), 50); }} className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-edge/40 bg-white/40 dark:bg-card/40 text-xs font-mono text-muted-foreground hover:border-stamp/40 hover:text-ink dark:hover:text-manila transition-colors">
        <span>{labels.search ?? "Search..."}</span>
        <kbd className="text-[10px] bg-secondary/60 dark:bg-secondary/40 px-1 py-0.5 rounded text-muted-foreground">⌘K</kbd>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]" onClick={() => setOpen(false)}>
          <div ref={containerRef} className="w-full max-w-lg bg-white dark:bg-card rounded-2xl border border-edge shadow-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="p-3 border-b border-edge/30">
              <Input ref={inputRef} value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKeyDown} placeholder={t.globalSearch.placeholder} className="w-full font-mono text-sm border-0 bg-transparent focus-visible:outline-none focus-visible:ring-0" />
            </div>
            <div className="max-h-[50vh] overflow-y-auto p-2">
              {results.length === 0 && query.length >= 2 && (
                <div className="text-center py-8"><p className="text-sm text-muted-foreground mb-1">{t.globalSearch.noResults}</p><p className="text-xs text-pencil">{t.globalSearch.noResultsHint}</p></div>
              )}
              {results.map((r, i) => (
                <button
                  key={`${r.type}-${r.label}`}
                  className={`w-full text-left px-3 py-2.5 rounded-lg flex items-start gap-3 transition-colors ${i === selectedIdx ? "bg-secondary/60 dark:bg-secondary/40" : "hover:bg-secondary/30 dark:hover:bg-secondary/20"}`}
                  onClick={() => { setOpen(false); setQuery(""); router.push(r.href); }}
                  onMouseEnter={() => setSelectedIdx(i)}
                >
                  <Badge variant="secondary" className="shrink-0 font-mono text-[9px] uppercase mt-0.5 px-1.5 py-0" style={{ backgroundColor: (sectionColors[r.type] ?? "#8b7b6b") + "20", color: sectionColors[r.type] ?? "#8b7b6b", borderColor: "transparent" }}>
                    {t.globalSearch.sections[r.type as keyof typeof t.globalSearch.sections]}
                  </Badge>
                  <div className="min-w-0">
                    <p className="font-mono text-sm font-semibold text-ink dark:text-manila">{r.label}</p>
                    <p className="text-xs text-pencil truncate">{r.snippet}</p>
                  </div>
                </button>
              ))}
            </div>
            <div className="px-3 py-2 border-t border-edge/30 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
              <span>↑↓ Navigate · ↵ Open · Esc Close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
