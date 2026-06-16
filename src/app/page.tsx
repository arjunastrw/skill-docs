"use client";

import { useState, useMemo } from "react";
import { skills, categories, comboSuggestions, type Skill } from "@/lib/skills-data";
import { translations, type Locale } from "@/lib/i18n";
import { useTheme } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { LangSwitcher } from "@/components/lang-switcher";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const categoryColorMap: Record<string, string> = {
  process: "#b8860b",
  design: "#c73e3a",
  "media-gen": "#6a3fb8",
  code: "#2b7a4b",
  tooling: "#1a6b8a",
  docs: "#8b7b6b",
};

function SkillCard({
  skill,
  index,
  onSelect,
  t,
  catLabel,
}: {
  skill: Skill;
  index: number;
  onSelect: (s: Skill) => void;
  t: (typeof translations)["en"];
  catLabel: string;
}) {
  return (
    <div
      className="card-reveal cursor-pointer"
      style={{ animationDelay: `${index * 35}ms` }}
      onClick={() => onSelect(skill)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onSelect(skill);
      }}
      role="button"
      tabIndex={0}
    >
      <Card className="card-catalog overflow-hidden border-edge bg-white/80 dark:bg-card/80 backdrop-blur-sm">
        <div
          className="category-stripe"
          style={{ backgroundColor: categoryColorMap[skill.category] }}
        />
        <CardContent className="p-5">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-mono text-sm font-semibold text-ink dark:text-manila tracking-tight leading-snug">
              {skill.name}
            </h3>
            <Badge
              variant="secondary"
              className="shrink-0 font-mono text-[10px] uppercase tracking-wider px-1.5 py-0"
              style={{
                backgroundColor: categoryColorMap[skill.category] + "18",
                color: categoryColorMap[skill.category],
                borderColor: "transparent",
              }}
            >
              {catLabel}
            </Badge>
          </div>
          <p className="text-sm text-pencil leading-relaxed line-clamp-3">
            {skill.description}
          </p>
          {skill.triggers.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1">
              {skill.triggers.slice(0, 3).map((tr) => (
                <span
                  key={tr}
                  className="text-[11px] font-mono text-muted-foreground bg-secondary/60 dark:bg-secondary/40 px-1.5 py-0.5 rounded-sm"
                >
                  {tr}
                </span>
              ))}
              {skill.triggers.length > 3 && (
                <span className="text-[11px] font-mono text-muted-foreground">
                  +{skill.triggers.length - 3}
                </span>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function SkillDetailDialog({
  skill,
  open,
  onClose,
  t,
}: {
  skill: Skill | null;
  open: boolean;
  onClose: () => void;
  t: (typeof translations)["en"];
}) {
  if (!skill) return null;
  const catLabel =
    t.categories[skill.category as keyof typeof t.categories] ?? skill.category;
  const relatedSkills = skills.filter(
    (s) => s.name !== skill.name && skill.combos.includes(s.name)
  );

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
                  (categoryColorMap[skill.category] ?? "#8b7b6b") + "18",
                color: categoryColorMap[skill.category] ?? "#8b7b6b",
                borderColor: "transparent",
              }}
            >
              {catLabel}
            </Badge>
          </div>
          <DialogTitle className="font-display text-2xl text-ink dark:text-manila">
            {skill.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-5 mt-2">
          <p className="text-pencil leading-relaxed">{skill.description}</p>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
              {t.skill.triggers}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {skill.triggers.length > 0 ? (
                skill.triggers.map((tr) => (
                  <code
                    key={tr}
                    className="font-mono text-xs bg-secondary/70 dark:bg-secondary/50 text-ink dark:text-manila px-2 py-0.5 rounded-sm"
                  >
                    {tr}
                  </code>
                ))
              ) : (
                <span className="text-sm text-muted-foreground italic">
                  {t.skill.noTriggers}
                </span>
              )}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
              {t.skill.whenToUse}
            </h4>
            <p className="text-sm text-ink dark:text-manila bg-secondary/40 dark:bg-secondary/30 rounded-md p-3 border-l-2 border-primary/20">
              {skill.whenToUse}
            </p>
          </div>

          {skill.combos.length > 0 && (
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
                {t.skill.combosWith}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {skill.combos.map((c) => (
                  <Badge
                    key={c}
                    variant="outline"
                    className="font-mono text-xs border-edge text-pencil"
                  >
                    {c}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {relatedSkills.length > 0 && (
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
                {t.skill.usedTogetherBy}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {relatedSkills.map((rs) => (
                  <Badge
                    key={rs.name}
                    variant="outline"
                    className="font-mono text-xs border-edge text-pencil"
                  >
                    {rs.name}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [locale, setLocale] = useState<Locale>("en");

  const t = translations[locale];

  const filteredSkills = useMemo(() => {
    const q = search.toLowerCase().trim();
    return skills.filter((s) => {
      const matchesSearch =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.triggers.some((tr) => tr.toLowerCase().includes(q));
      const matchesCategory = !activeCategory || s.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const categoryCounts = useMemo(() => {
    const map: Record<string, number> = {};
    skills.forEach((s) => {
      map[s.category] = (map[s.category] || 0) + 1;
    });
    return map;
  }, []);

  return (
    <main className="flex-1">
      {/* Hero */}
      <header className="border-b border-edge/60 bg-white/40 dark:bg-card/40 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6 pt-6 pb-16 md:pb-24">
          {/* Top bar: theme + lang */}
          <div className="flex justify-end items-center gap-2 mb-8">
            <LangSwitcher locale={locale} setLocale={setLocale} />
            <ThemeToggle />
          </div>

          <p className="font-mono text-xs uppercase tracking-[0.2em] text-stamp mb-4">
            {t.site.subtitle}
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-ink dark:text-manila leading-[1.05] mb-4">
            {t.site.title.split(" ").map((w, i) => (
              <span key={i}>
                {w}
                {i === 0 && <br />}
                {i === 0 ? " " : ""}
              </span>
            ))}
          </h1>
          <p className="text-lg text-pencil max-w-xl leading-relaxed">
            {t.site.description}
          </p>
        </div>
      </header>

      {/* Search + Filter */}
      <section className="sticky top-0 z-10 border-b border-edge/60 bg-manila/90 dark:bg-background/90 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col sm:flex-row gap-3">
          <Input
            placeholder={t.search.placeholder}
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
              {t.filter.all} ({skills.length})
            </Badge>
            {categories.map((cat) => (
              <Badge
                key={cat.id}
                variant={activeCategory === cat.id ? "default" : "outline"}
                className="cursor-pointer font-mono text-xs"
                style={
                  activeCategory === cat.id
                    ? { backgroundColor: categoryColorMap[cat.id] }
                    : { borderColor: categoryColorMap[cat.id] + "40" }
                }
                onClick={() =>
                  setActiveCategory(activeCategory === cat.id ? null : cat.id)
                }
              >
                {t.categories[cat.id as keyof typeof t.categories]} (
                {categoryCounts[cat.id] || 0})
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Grid */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
            {activeCategory
              ? t.categories[activeCategory as keyof typeof t.categories]
              : t.allSkills}
            <span className="ml-2 text-pencil">
              ({filteredSkills.length})
            </span>
          </h2>
        </div>

        {filteredSkills.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-display text-2xl text-muted-foreground mb-2">
              {t.skill.noSkillsFound}
            </p>
            <p className="text-pencil text-sm">{t.skill.noSkillsHint}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map((skill, i) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                index={i}
                onSelect={setSelectedSkill}
                t={t}
                catLabel={
                  t.categories[
                    skill.category as keyof typeof t.categories
                  ] ?? skill.category
                }
              />
            ))}
          </div>
        )}
      </section>

      {/* Combo Suggestions */}
      <section className="border-t border-edge/60 bg-white/30 dark:bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-3xl md:text-4xl text-ink dark:text-manila mb-2">
            {t.combos.title}
          </h2>
          <p className="text-pencil mb-10 max-w-lg">{t.combos.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {comboSuggestions.map((combo) => (
              <Card
                key={combo.scenario}
                className="border-edge bg-white/70 dark:bg-card/70 hover:bg-white dark:hover:bg-card transition-colors"
              >
                <CardContent className="p-5">
                  <h3 className="font-display text-xl text-ink dark:text-manila mb-2">
                    {combo.scenario}
                  </h3>
                  <p className="text-sm text-pencil mb-4 leading-relaxed">
                    {t.comboScenarios[
                      combo.scenario as keyof typeof t.comboScenarios
                    ] ?? combo.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {combo.skills.map((s) => {
                      const sk = skills.find((x) => x.name === s);
                      const catColor = sk
                        ? categoryColorMap[sk.category]
                        : "#8b7b6b";
                      return (
                        <Badge
                          key={s}
                          variant="outline"
                          className="font-mono text-[11px] border-edge/60 text-pencil cursor-pointer hover:border-stamp/40 hover:text-ink dark:hover:text-manila transition-colors"
                          onClick={() => {
                            const found = skills.find((x) => x.name === s);
                            if (found) setSelectedSkill(found);
                          }}
                        >
                          <span
                            className="inline-block w-1.5 h-1.5 rounded-full mr-1.5"
                            style={{ backgroundColor: catColor }}
                          />
                          {s}
                        </Badge>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-edge/60 bg-white/40 dark:bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-mono text-xs text-muted-foreground">
            {t.footer.line1
              .replace("{count}", String(skills.length))
              .replace("{cats}", String(categories.length))}
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            {t.footer.line2}
          </p>
        </div>
      </footer>

      {/* Skill Detail Modal */}
      <SkillDetailDialog
        skill={selectedSkill}
        open={!!selectedSkill}
        onClose={() => setSelectedSkill(null)}
        t={t}
      />
    </main>
  );
}
