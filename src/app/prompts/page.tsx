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
