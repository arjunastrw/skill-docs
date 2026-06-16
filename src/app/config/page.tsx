"use client";

import { useState, useMemo } from "react";
import { agentConfigs, type AgentConfig } from "@/lib/config-data";
import { translations } from "@/lib/i18n";
import { useLocale } from "@/components/locale-provider";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function ConfigPage() {
  const { locale } = useLocale();
  const t = translations[locale];
  const [search, setSearch] = useState("");
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return agentConfigs.filter((c) => !q || c.cli.toLowerCase().includes(q) || c.configFile.toLowerCase().includes(q));
  }, [search]);

  return (
    <main className="flex-1">
      <header className="border-b border-edge/60 bg-white/40 dark:bg-card/40 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-stamp mb-4">{t.config.subtitle}</p>
          <h1 className="font-display text-5xl md:text-7xl text-ink dark:text-manila leading-[1.05] mb-4">{t.config.title}</h1>
          <p className="text-lg text-pencil max-w-2xl leading-relaxed">{t.config.description}</p>
        </div>
      </header>

      {/* Comparison Table */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="font-display text-2xl text-ink dark:text-manila mb-2">{t.config.comparisonTitle}</h2>
        <p className="text-pencil text-sm mb-6">{t.config.comparisonDesc}</p>
        <div className="overflow-x-auto rounded-xl border border-edge/60">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-edge/60 bg-secondary/40 dark:bg-secondary/30">
                <th className="text-left px-4 py-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">CLI</th>
                <th className="text-left px-4 py-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">Config File</th>
                <th className="text-left px-4 py-3 font-mono text-xs uppercase tracking-wider text-muted-foreground hidden sm:table-cell">Location</th>
                <th className="text-left px-4 py-3 font-mono text-xs uppercase tracking-wider text-muted-foreground hidden md:table-cell">Format</th>
              </tr>
            </thead>
            <tbody>
              {agentConfigs.map((cfg) => (
                <tr key={cfg.cli} className="border-b border-edge/30 last:border-0 hover:bg-secondary/20 dark:hover:bg-secondary/10 transition-colors">
                  <td className="px-4 py-3 font-mono font-semibold text-ink dark:text-manila">{cfg.cli}</td>
                  <td className="px-4 py-3 font-mono text-xs text-stamp">{cfg.configFile}</td>
                  <td className="px-4 py-3 text-xs text-pencil hidden sm:table-cell">{cfg.location}</td>
                  <td className="px-4 py-3 text-xs text-pencil hidden md:table-cell">{cfg.format}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed Configs */}
      <section className="border-t border-edge/60 bg-white/30 dark:bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8">
            <Input placeholder={t.config.searchPlaceholder} value={search} onChange={(e) => setSearch(e.target.value)} className="max-w-sm font-mono text-sm bg-white/70 dark:bg-card/70" />
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20"><p className="font-display text-2xl text-muted-foreground mb-2">{t.config.noConfigFound}</p><p className="text-pencil text-sm">{t.config.noConfigHint}</p></div>
          ) : (
            <div className="space-y-4 max-w-3xl">
              {filtered.map((cfg, i) => (
                <Card key={cfg.cli} className="border-edge bg-white/70 dark:bg-card/70 overflow-hidden">
                  <button className="w-full text-left" onClick={() => setExpandedIdx(expandedIdx === i ? null : i)}>
                    <div className="p-5 flex items-center justify-between">
                      <div>
                        <h3 className="font-mono text-base font-semibold text-ink dark:text-manila">{cfg.cli}</h3>
                        <p className="text-xs text-pencil mt-0.5 font-mono">{cfg.configFile}</p>
                      </div>
                      <span className={`font-mono text-xs text-muted-foreground transition-transform duration-200 ${expandedIdx === i ? "rotate-180" : ""}`}>▼</span>
                    </div>
                  </button>
                  {expandedIdx === i && (
                    <div className="px-5 pb-5 space-y-4 border-t border-edge/30 pt-4">
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="bg-secondary/40 dark:bg-secondary/30 rounded-md p-2.5"><span className="text-muted-foreground">Format</span><p className="font-mono text-ink dark:text-manila">{cfg.format}</p></div>
                        <div className="bg-secondary/40 dark:bg-secondary/30 rounded-md p-2.5"><span className="text-muted-foreground">Location</span><p className="font-mono text-ink dark:text-manila">{cfg.location}</p></div>
                      </div>

                      <div>
                        <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3">{t.config.sections}</h4>
                        {cfg.sections.map((sec) => (
                          <div key={sec.name} className="mb-4 last:mb-0">
                            <h5 className="font-mono text-sm font-semibold text-ink dark:text-manila mb-1">{sec.name}</h5>
                            <p className="text-xs text-pencil mb-2">{sec.description}</p>
                            <pre className="bg-secondary/60 dark:bg-secondary/50 rounded-md p-3 overflow-x-auto"><code className="font-mono text-xs text-ink dark:text-manila whitespace-pre-wrap">{sec.example}</code></pre>
                          </div>
                        ))}
                      </div>

                      <div>
                        <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">{t.config.bestPractices}</h4>
                        <ul className="space-y-1">{cfg.bestPractices.map((bp) => <li key={bp} className="text-sm text-ink dark:text-manila flex items-start gap-2"><span className="text-stamp mt-1">•</span>{bp}</li>)}</ul>
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <footer className="border-t border-edge/60 bg-white/40 dark:bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center"><p className="font-mono text-xs text-muted-foreground">Agent Hub · {agentConfigs.length} agent configs</p></div>
      </footer>
    </main>
  );
}
