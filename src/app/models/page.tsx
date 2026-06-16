"use client";

import { useState, useMemo } from "react";
import { aiModels, modelProviders, type AIModel } from "@/lib/models-data";
import { translations } from "@/lib/i18n";
import { useLocale } from "@/components/locale-provider";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const providerColors: Record<string, string> = {
  "Anthropic": "#c73e3a",
  "OpenAI": "#2b7a4b",
  "Google": "#1a6b8a",
  "Meta": "#6a3fb8",
  "DeepSeek / Providers": "#8b7b6b",
  "Mistral AI": "#b8860b",
  "Alibaba / Providers": "#4a6741",
  "xAI / Providers": "#1a1a2e",
  "Cohere": "#c73e3a",
};

function ModelCard({ model, index, onSelect }: { model: AIModel; index: number; onSelect: (m: AIModel) => void }) {
  return (
    <div className="card-reveal cursor-pointer" style={{ animationDelay: `${index * 35}ms` }} onClick={() => onSelect(model)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onSelect(model); }} role="button" tabIndex={0}>
      <Card className="card-catalog overflow-hidden border-edge bg-white/80 dark:bg-card/80 backdrop-blur-sm">
        <div className="category-stripe" style={{ backgroundColor: providerColors[model.provider] ?? "#8b7b6b" }} />
        <CardContent className="p-5">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-mono text-sm font-semibold text-ink dark:text-manila tracking-tight leading-snug">{model.name}</h3>
            <Badge variant="secondary" className="shrink-0 font-mono text-[10px] uppercase tracking-wider px-1.5 py-0" style={{ backgroundColor: (providerColors[model.provider] ?? "#8b7b6b") + "18", color: providerColors[model.provider] ?? "#8b7b6b", borderColor: "transparent" }}>{model.provider}</Badge>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs mb-3">
            <div><span className="text-muted-foreground">Context</span> <span className="font-mono text-ink dark:text-manila">{model.contextWindow}</span></div>
            <div><span className="text-muted-foreground">Max Output</span> <span className="font-mono text-ink dark:text-manila">{model.maxOutput}</span></div>
            <div><span className="text-muted-foreground">Input</span> <span className="font-mono text-green">{model.pricingInput}</span></div>
            <div><span className="text-muted-foreground">Output</span> <span className="font-mono text-green">{model.pricingOutput}</span></div>
          </div>
          <div className="flex flex-wrap gap-1">
            {model.modalities.map((m) => (
              <span key={m} className="text-[10px] font-mono bg-secondary/50 dark:bg-secondary/40 text-pencil dark:text-manila/70 px-1.5 py-0.5 rounded-sm">{m}</span>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function ModelDetailDialog({ model, open, onClose, t }: { model: AIModel | null; open: boolean; onClose: () => void; t: (typeof translations)["en"] }) {
  if (!model) return null;
  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto border-edge bg-white dark:bg-card">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="secondary" className="font-mono text-[10px] uppercase tracking-wider" style={{ backgroundColor: (providerColors[model.provider] ?? "#8b7b6b") + "18", color: providerColors[model.provider] ?? "#8b7b6b", borderColor: "transparent" }}>{model.provider}</Badge>
          </div>
          <DialogTitle className="font-display text-2xl text-ink dark:text-manila">{model.name}</DialogTitle>
        </DialogHeader>
        <div className="space-y-5 mt-2">
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-secondary/40 dark:bg-secondary/30 rounded-md p-2.5"><span className="text-muted-foreground text-xs">Context</span><p className="font-mono text-ink dark:text-manila font-semibold">{model.contextWindow}</p></div>
            <div className="bg-secondary/40 dark:bg-secondary/30 rounded-md p-2.5"><span className="text-muted-foreground text-xs">Max Output</span><p className="font-mono text-ink dark:text-manila font-semibold">{model.maxOutput}</p></div>
            <div className="bg-secondary/40 dark:bg-secondary/30 rounded-md p-2.5"><span className="text-muted-foreground text-xs">Input (1M tokens)</span><p className="font-mono text-green font-semibold">{model.pricingInput}</p></div>
            <div className="bg-secondary/40 dark:bg-secondary/30 rounded-md p-2.5"><span className="text-muted-foreground text-xs">Output (1M tokens)</span><p className="font-mono text-green font-semibold">{model.pricingOutput}</p></div>
            <div className="bg-secondary/40 dark:bg-secondary/30 rounded-md p-2.5"><span className="text-muted-foreground text-xs">Modalities</span><p className="font-mono text-ink dark:text-manila text-xs">{model.modalities.join(", ")}</p></div>
            <div className="bg-secondary/40 dark:bg-secondary/30 rounded-md p-2.5"><span className="text-muted-foreground text-xs">Knowledge Cutoff</span><p className="font-mono text-ink dark:text-manila text-xs">{model.knowledgeCutoff}</p></div>
            <div className="bg-secondary/40 dark:bg-secondary/30 rounded-md p-2.5"><span className="text-muted-foreground text-xs">MMLU</span><p className="font-mono text-stamp font-semibold">{model.benchMMLU}</p></div>
            <div className="bg-secondary/40 dark:bg-secondary/30 rounded-md p-2.5"><span className="text-muted-foreground text-xs">HumanEval</span><p className="font-mono text-stamp font-semibold">{model.benchHumanEval}</p></div>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">{t.models.strengths}</h4>
            <div className="flex flex-wrap gap-1.5">{model.strengths.map((s) => <Badge key={s} variant="outline" className="font-mono text-xs border-edge text-pencil">{s}</Badge>)}</div>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">{t.models.bestUseCases}</h4>
            <ul className="space-y-1.5">{model.bestUseCases.map((u) => <li key={u} className="text-sm text-ink dark:text-manila flex items-start gap-2"><span className="text-stamp mt-1">•</span>{u}</li>)}</ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function ModelsPage() {
  const { locale } = useLocale();
  const t = translations[locale];
  const [search, setSearch] = useState("");
  const [activeProvider, setActiveProvider] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<AIModel | null>(null);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return aiModels.filter((m) => {
      const ms = !q || m.name.toLowerCase().includes(q) || m.provider.toLowerCase().includes(q) || m.strengths.some((s) => s.toLowerCase().includes(q));
      const mp = !activeProvider || m.provider === activeProvider;
      return ms && mp;
    });
  }, [search, activeProvider]);

  return (
    <main className="flex-1">
      <header className="border-b border-edge/60 bg-white/40 dark:bg-card/40 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-stamp mb-4">{t.models.subtitle}</p>
          <h1 className="font-display text-5xl md:text-7xl text-ink dark:text-manila leading-[1.05] mb-4">{t.models.title}</h1>
          <p className="text-lg text-pencil max-w-2xl leading-relaxed">{t.models.description}</p>
        </div>
      </header>

      <section className="sticky top-[57px] z-10 border-b border-edge/60 bg-manila/90 dark:bg-background/90 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col sm:flex-row gap-3">
          <Input placeholder={t.models.searchPlaceholder} value={search} onChange={(e) => setSearch(e.target.value)} className="max-w-sm font-mono text-sm bg-white/70 dark:bg-card/70" />
          <div className="flex flex-wrap gap-1.5">
            <Badge variant={activeProvider === null ? "default" : "outline"} className="cursor-pointer font-mono text-xs" onClick={() => setActiveProvider(null)}>{t.models.allModels} ({aiModels.length})</Badge>
            {modelProviders.map((p) => (
              <Badge key={p} variant={activeProvider === p ? "default" : "outline"} className="cursor-pointer font-mono text-xs" style={activeProvider === p ? { backgroundColor: providerColors[p] ?? "#8b7b6b" } : { borderColor: (providerColors[p] ?? "#8b7b6b") + "40" }} onClick={() => setActiveProvider(activeProvider === p ? null : p)}>{p}</Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        {filtered.length === 0 ? (
          <div className="text-center py-20"><p className="font-display text-2xl text-muted-foreground mb-2">{t.models.noModelsFound}</p><p className="text-pencil text-sm">{t.models.noModelsHint}</p></div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((m, i) => <ModelCard key={m.name} model={m} index={i} onSelect={setSelectedModel} />)}
          </div>
        )}
      </section>

      <footer className="border-t border-edge/60 bg-white/40 dark:bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center"><p className="font-mono text-xs text-muted-foreground">Agent Hub · {aiModels.length} AI models</p></div>
      </footer>

      <ModelDetailDialog model={selectedModel} open={!!selectedModel} onClose={() => setSelectedModel(null)} t={t} />
    </main>
  );
}
