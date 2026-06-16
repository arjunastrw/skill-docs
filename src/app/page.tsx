"use client";

import { useState } from "react";
import { agentCLIs } from "@/lib/cli-data";
import { translations, type Locale } from "@/lib/i18n";
import { useLocale } from "@/components/locale-provider";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function StartPage() {
  const { locale } = useLocale();
  const t = translations[locale];
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const copy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1500);
  };

  return (
    <main className="flex-1">
      {/* Hero */}
      <header className="border-b border-edge/60 bg-white/40 dark:bg-card/40 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-stamp mb-4">
            {t.start.subtitle}
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-ink dark:text-manila leading-[1.05] mb-4">
            {t.start.title}
          </h1>
          <p className="text-lg text-pencil max-w-2xl leading-relaxed">
            {t.start.description}
          </p>
        </div>
      </header>

      {/* Comparison Table */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground mb-6">
          {t.start.subtitle}
        </h2>
        <div className="overflow-x-auto rounded-xl border border-edge/60">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-edge/60 bg-secondary/40 dark:bg-secondary/30">
                <th className="text-left px-4 py-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {t.start.tableHeaders.cli}
                </th>
                <th className="text-left px-4 py-3 font-mono text-xs uppercase tracking-wider text-muted-foreground hidden md:table-cell">
                  {t.start.tableHeaders.vendor}
                </th>
                <th className="text-left px-4 py-3 font-mono text-xs uppercase tracking-wider text-muted-foreground hidden lg:table-cell">
                  {t.start.tableHeaders.platform}
                </th>
                <th className="text-left px-4 py-3 font-mono text-xs uppercase tracking-wider text-muted-foreground hidden sm:table-cell">
                  {t.start.tableHeaders.pricing}
                </th>
                <th className="text-left px-4 py-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {t.start.tableHeaders.features}
                </th>
              </tr>
            </thead>
            <tbody>
              {agentCLIs.map((cli) => (
                <tr
                  key={cli.name}
                  className="border-b border-edge/30 last:border-0 hover:bg-secondary/20 dark:hover:bg-secondary/10 transition-colors"
                >
                  <td className="px-4 py-3">
                    <span className="font-mono font-semibold text-ink dark:text-manila">
                      {cli.name}
                    </span>
                    <p className="text-xs text-pencil mt-0.5 line-clamp-1">
                      {cli.description}
                    </p>
                  </td>
                  <td className="px-4 py-3 text-pencil hidden md:table-cell">
                    {cli.vendor}
                  </td>
                  <td className="px-4 py-3 text-pencil hidden lg:table-cell text-xs">
                    {cli.platform}
                  </td>
                  <td className="px-4 py-3 hidden sm:table-cell">
                    <Badge
                      variant="outline"
                      className={`font-mono text-[11px] border-edge/40 ${
                        cli.pricing.toLowerCase().includes("free")
                          ? "text-green"
                          : "text-pencil"
                      }`}
                    >
                      {cli.pricing}
                    </Badge>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-1">
                      {cli.features.slice(0, 3).map((f) => (
                        <span
                          key={f}
                          className="text-[10px] font-mono bg-secondary/50 dark:bg-secondary/40 text-pencil dark:text-manila/70 px-1.5 py-0.5 rounded-sm"
                        >
                          {f}
                        </span>
                      ))}
                      {cli.features.length > 3 && (
                        <span className="text-[10px] font-mono text-muted-foreground">
                          +{cli.features.length - 3}
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Install Guides */}
      <section className="border-t border-edge/60 bg-white/30 dark:bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-3xl md:text-4xl text-ink dark:text-manila mb-2">
            {t.start.installGuides}
          </h2>
          <p className="text-pencil mb-10 max-w-lg">
            {t.start.installGuidesDesc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {agentCLIs.map((cli, i) => (
              <Card
                key={cli.name}
                className="border-edge bg-white/70 dark:bg-card/70 hover:bg-white dark:hover:bg-card transition-colors"
              >
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-mono text-lg font-semibold text-ink dark:text-manila">
                      {cli.name}
                    </h3>
                    <Badge variant="outline" className="font-mono text-[10px] border-edge/40 text-pencil">
                      {cli.vendor}
                    </Badge>
                  </div>

                  <p className="text-sm text-pencil mb-4">{cli.description}</p>

                  {/* Install command */}
                  <div className="mb-3">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {t.start.tableHeaders.install}
                    </span>
                    <div className="mt-1 relative">
                      <code className="block font-mono text-xs bg-secondary/60 dark:bg-secondary/50 text-ink dark:text-manila p-2.5 rounded-md overflow-x-auto">
                        {cli.install}
                      </code>
                      <button
                        onClick={() => copy(cli.install, i)}
                        className="absolute top-1.5 right-1.5 font-mono text-[10px] text-pencil hover:text-stamp transition-colors bg-white/60 dark:bg-card/60 px-2 py-0.5 rounded"
                      >
                        {copiedIdx === i ? "Copied" : "Copy"}
                      </button>
                    </div>
                  </div>

                  {/* Auth */}
                  <div className="mb-3">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {t.start.authSetup}
                    </span>
                    <p className="text-xs text-pencil mt-0.5">
                      {cli.authSetup}
                    </p>
                  </div>

                  {/* Quick start */}
                  <div className="mb-4">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {t.start.quickStart}
                    </span>
                    <code className="block font-mono text-xs bg-secondary/60 dark:bg-secondary/50 text-ink dark:text-manila p-2 rounded-md mt-1">
                      $ {cli.quickStart}
                    </code>
                  </div>

                  <a
                    href={cli.docsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-stamp hover:underline"
                  >
                    {t.start.docs} →
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-edge/60 bg-white/40 dark:bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center">
          <p className="font-mono text-xs text-muted-foreground">
            Agent Hub · {agentCLIs.length} agent CLIs
          </p>
        </div>
      </footer>
    </main>
  );
}
