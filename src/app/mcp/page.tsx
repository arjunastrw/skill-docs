"use client";

import { useState, useMemo } from "react";
import { mcpServers, mcpCategories, mcpBuildGuide, type MCPServer } from "@/lib/mcp-data";
import { translations } from "@/lib/i18n";
import { useLocale } from "@/components/locale-provider";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const categoryColorMap = Object.fromEntries(
  mcpCategories.map((c) => [c.id, c.color])
);

function MCPServerCard({
  server,
  index,
  onSelect,
  catLabel,
}: {
  server: MCPServer;
  index: number;
  onSelect: (s: MCPServer) => void;
  catLabel: string;
}) {
  return (
    <div
      className="card-reveal cursor-pointer"
      style={{ animationDelay: `${index * 35}ms` }}
      onClick={() => onSelect(server)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onSelect(server);
      }}
      role="button"
      tabIndex={0}
    >
      <Card className="card-catalog overflow-hidden border-edge bg-white/80 dark:bg-card/80 backdrop-blur-sm">
        <div
          className="category-stripe"
          style={{ backgroundColor: categoryColorMap[server.category] }}
        />
        <CardContent className="p-5">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-mono text-sm font-semibold text-ink dark:text-manila tracking-tight leading-snug">
              {server.name}
            </h3>
            <Badge
              variant="secondary"
              className="shrink-0 font-mono text-[10px] uppercase tracking-wider px-1.5 py-0"
              style={{
                backgroundColor: categoryColorMap[server.category] + "18",
                color: categoryColorMap[server.category],
                borderColor: "transparent",
              }}
            >
              {catLabel}
            </Badge>
          </div>
          <p className="text-sm text-pencil leading-relaxed line-clamp-3">
            {server.description}
          </p>
          <div className="mt-3">
            <code className="font-mono text-[11px] bg-secondary/60 dark:bg-secondary/50 text-ink dark:text-manila/80 px-1.5 py-0.5 rounded-sm block truncate">
              {server.install}
            </code>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function MCPServerDialog({
  server,
  open,
  onClose,
  t,
}: {
  server: MCPServer | null;
  open: boolean;
  onClose: () => void;
  t: (typeof translations)["en"];
}) {
  if (!server) return null;
  const catLabel =
    mcpCategories.find((c) => c.id === server.category)?.label ??
    server.category;

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto border-edge bg-white dark:bg-card">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-1">
            <Badge
              variant="secondary"
              className="font-mono text-[10px] uppercase tracking-wider"
              style={{
                backgroundColor:
                  (categoryColorMap[server.category] ?? "#8b7b6b") + "18",
                color: categoryColorMap[server.category] ?? "#8b7b6b",
                borderColor: "transparent",
              }}
            >
              {catLabel}
            </Badge>
          </div>
          <DialogTitle className="font-display text-2xl text-ink dark:text-manila">
            {server.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-5 mt-2">
          <p className="text-pencil leading-relaxed">{server.description}</p>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
              {t.mcp.install}
            </h4>
            <code className="block font-mono text-xs bg-secondary/70 dark:bg-secondary/50 text-ink dark:text-manila p-2.5 rounded-md overflow-x-auto">
              {server.install}
            </code>
          </div>

          {server.envVars.length > 0 && (
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
                {t.mcp.envVars}
              </h4>
              <div className="space-y-2">
                {server.envVars.map((env) => (
                  <div
                    key={env.name}
                    className="bg-secondary/40 dark:bg-secondary/30 rounded-md p-2.5"
                  >
                    <code className="font-mono text-xs text-ink dark:text-manila font-semibold">
                      {env.name}
                    </code>
                    <p className="text-xs text-pencil mt-0.5">
                      {env.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
              {t.mcp.useCases}
            </h4>
            <ul className="space-y-1.5">
              {server.useCases.map((uc) => (
                <li
                  key={uc}
                  className="text-sm text-ink dark:text-manila flex items-start gap-2"
                >
                  <span className="text-stamp mt-1">•</span>
                  {uc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function MCPPage() {
  const { locale } = useLocale();
  const t = translations[locale];
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedServer, setSelectedServer] = useState<MCPServer | null>(null);
  const [buildTab, setBuildTab] = useState<"python" | "nodejs">("python");

  const filteredServers = useMemo(() => {
    const q = search.toLowerCase().trim();
    return mcpServers.filter((s) => {
      const matchesSearch =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.useCases.some((u) => u.toLowerCase().includes(q));
      const matchesCategory =
        !activeCategory || s.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const categoryCounts = useMemo(() => {
    const map: Record<string, number> = {};
    mcpServers.forEach((s) => {
      map[s.category] = (map[s.category] || 0) + 1;
    });
    return map;
  }, []);

  const guide = mcpBuildGuide[buildTab];

  return (
    <main className="flex-1">
      {/* Hero */}
      <header className="border-b border-edge/60 bg-white/40 dark:bg-card/40 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-stamp mb-4">
            {t.mcp.subtitle}
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-ink dark:text-manila leading-[1.05] mb-4">
            {t.mcp.title}
          </h1>
          <p className="text-lg text-pencil max-w-2xl leading-relaxed">
            {t.mcp.description}
          </p>
        </div>
      </header>

      {/* Search + Filter */}
      <section className="sticky top-[57px] z-10 border-b border-edge/60 bg-manila/90 dark:bg-background/90 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col sm:flex-row gap-3">
          <Input
            placeholder={t.mcp.searchPlaceholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-sm font-mono text-sm bg-white/70 dark:bg-card/70"
          />
          <div className="flex flex-wrap gap-1.5">
            <Badge
              variant={activeCategory === null ? "default" : "outline"}
              className="cursor-pointer font-mono text-xs"
              onClick={() => setActiveCategory(null)}
            >
              {t.mcp.allServers} ({mcpServers.length})
            </Badge>
            {mcpCategories.map((cat) => (
              <Badge
                key={cat.id}
                variant={activeCategory === cat.id ? "default" : "outline"}
                className="cursor-pointer font-mono text-xs"
                style={
                  activeCategory === cat.id
                    ? { backgroundColor: cat.color }
                    : { borderColor: cat.color + "40" }
                }
                onClick={() =>
                  setActiveCategory(
                    activeCategory === cat.id ? null : cat.id
                  )
                }
              >
                {cat.label} ({categoryCounts[cat.id] || 0})
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Server Grid */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
            {activeCategory
              ? mcpCategories.find((c) => c.id === activeCategory)?.label
              : t.mcp.allServers}
            <span className="ml-2 text-pencil">
              ({filteredServers.length})
            </span>
          </h2>
        </div>

        {filteredServers.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-display text-2xl text-muted-foreground mb-2">
              {t.mcp.noServersFound}
            </p>
            <p className="text-pencil text-sm">{t.mcp.noServersHint}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredServers.map((server, i) => (
              <MCPServerCard
                key={server.name}
                server={server}
                index={i}
                onSelect={setSelectedServer}
                catLabel={
                  mcpCategories.find((c) => c.id === server.category)
                    ?.label ?? server.category
                }
              />
            ))}
          </div>
        )}
      </section>

      {/* Build Guide */}
      <section className="border-t border-edge/60 bg-white/30 dark:bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-3xl md:text-4xl text-ink dark:text-manila mb-2">
            {t.mcp.buildGuide}
          </h2>
          <p className="text-pencil mb-8 max-w-lg">{t.mcp.buildGuideDesc}</p>

          {/* Tabs */}
          <div className="flex gap-2 mb-8">
            {(["python", "nodejs"] as const).map((tab) => {
              const tabGuide = mcpBuildGuide[tab];
              return (
                <button
                  key={tab}
                  onClick={() => setBuildTab(tab)}
                  className={`px-4 py-2 rounded-full font-mono text-sm transition-colors ${
                    buildTab === tab
                      ? "bg-ink text-manila dark:bg-manila dark:text-ink"
                      : "text-pencil border border-edge/40 hover:border-stamp/40"
                  }`}
                >
                  {tabGuide.title}
                </button>
              );
            })}
          </div>

          {/* Guide Steps */}
          <div className="space-y-8 max-w-3xl">
            {guide.steps.map((step, i) => (
              <div key={step.title}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs text-stamp w-6 h-6 rounded-full border border-stamp/30 flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <h3 className="font-mono text-sm font-semibold text-ink dark:text-manila">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm text-pencil mb-3 ml-9">
                  {step.description}
                </p>
                <pre className="ml-9 bg-secondary/60 dark:bg-secondary/40 rounded-lg p-4 overflow-x-auto">
                  <code className="font-mono text-xs text-ink dark:text-manila whitespace-pre">
                    {step.code}
                  </code>
                </pre>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-edge/60 bg-white/40 dark:bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center">
          <p className="font-mono text-xs text-muted-foreground">
            Agent Skills Reference · {mcpServers.length} MCP servers
          </p>
        </div>
      </footer>

      <MCPServerDialog
        server={selectedServer}
        open={!!selectedServer}
        onClose={() => setSelectedServer(null)}
        t={t}
      />
    </main>
  );
}
