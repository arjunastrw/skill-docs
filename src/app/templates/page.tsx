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
