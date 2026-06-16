"use client";

import { useState, useMemo } from "react";
import { skills, categories, comboSuggestions, type Skill } from "@/lib/skills-data";
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
}: {
  skill: Skill;
  index: number;
  onSelect: (skill: Skill) => void;
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
      <Card className="card-catalog overflow-hidden border-edge bg-white/80 backdrop-blur-sm">
        <div
          className="category-stripe"
          style={{ backgroundColor: categoryColorMap[skill.category] }}
        />
        <CardContent className="p-5">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-mono text-sm font-semibold text-ink tracking-tight leading-snug">
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
              {categories.find((c) => c.id === skill.category)?.label ??
                skill.category}
            </Badge>
          </div>
          <p className="text-sm text-pencil leading-relaxed line-clamp-3">
            {skill.description}
          </p>
          {skill.triggers.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1">
              {skill.triggers.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-mono text-muted-foreground bg-secondary/60 px-1.5 py-0.5 rounded-sm"
                >
                  {t}
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
}: {
  skill: Skill | null;
  open: boolean;
  onClose: () => void;
}) {
  if (!skill) return null;
  const cat = categories.find((c) => c.id === skill.category);
  const relatedSkills = skills.filter(
    (s) => s.name !== skill.name && skill.combos.includes(s.name)
  );

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto border-edge bg-white">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-1">
            <Badge
              variant="secondary"
              className="font-mono text-[10px] uppercase tracking-wider"
              style={{
                backgroundColor:
                  (cat ? categoryColorMap[cat.id] : "#8b7b6b") + "18",
                color: cat ? categoryColorMap[cat.id] : "#8b7b6b",
                borderColor: "transparent",
              }}
            >
              {cat?.label ?? skill.category}
            </Badge>
          </div>
          <DialogTitle className="font-display text-2xl text-ink">
            {skill.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-5 mt-2">
          <p className="text-pencil leading-relaxed">{skill.description}</p>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
              Trigger Phrases
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {skill.triggers.length > 0 ? (
                skill.triggers.map((t) => (
                  <code
                    key={t}
                    className="font-mono text-xs bg-secondary/70 text-ink px-2 py-0.5 rounded-sm"
                  >
                    {t}
                  </code>
                ))
              ) : (
                <span className="text-sm text-muted-foreground italic">
                  No specific triggers
                </span>
              )}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
              When To Use
            </h4>
            <p className="text-sm text-ink bg-secondary/40 rounded-md p-3 border-l-2 border-primary/20">
              {skill.whenToUse}
            </p>
          </div>

          {skill.combos.length > 0 && (
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
                Combos With
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {skill.combos.map((c) => {
                  const comboSkill = skills.find((s) => s.name === c);
                  return (
                    <Badge
                      key={c}
                      variant="outline"
                      className="font-mono text-xs border-edge text-pencil"
                    >
                      {comboSkill?.name ?? c}
                    </Badge>
                  );
                })}
              </div>
            </div>
          )}

          {relatedSkills.length > 0 && (
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
                Used Together By
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

  const filteredSkills = useMemo(() => {
    const q = search.toLowerCase().trim();
    return skills.filter((s) => {
      const matchesSearch =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.triggers.some((t) => t.toLowerCase().includes(q));
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
      <header className="border-b border-edge/60 bg-white/40 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-stamp mb-4">
            Agent Skill Reference
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-ink leading-[1.05] mb-4">
            OpenCode
            <br />
            Skills
          </h1>
          <p className="text-lg text-pencil max-w-xl leading-relaxed">
            {skills.length} specialized agent skills for software engineering,
            media generation, design, and tooling. Each skill provides exact
            instructions and workflows for a specific task.
          </p>
        </div>
      </header>

      {/* Search + Filter */}
      <section className="sticky top-0 z-10 border-b border-edge/60 bg-manila/90 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col sm:flex-row gap-3">
          <Input
            placeholder="Search skills..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-sm font-mono text-sm bg-white/70"
          />
          <div className="flex flex-wrap gap-1.5">
            <Badge
              variant={activeCategory === null ? "default" : "outline"}
              className="cursor-pointer font-mono text-xs"
              onClick={() => setActiveCategory(null)}
            >
              All ({skills.length})
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
                {cat.label} ({categoryCounts[cat.id] || 0})
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
              ? categories.find((c) => c.id === activeCategory)?.label
              : "All Skills"}
            <span className="ml-2 text-pencil">
              ({filteredSkills.length})
            </span>
          </h2>
        </div>

        {filteredSkills.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-display text-2xl text-muted-foreground mb-2">
              No skills found
            </p>
            <p className="text-pencil text-sm">
              Try a different search term or category filter.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map((skill, i) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                index={i}
                onSelect={setSelectedSkill}
              />
            ))}
          </div>
        )}
      </section>

      {/* Combo Suggestions */}
      <section className="border-t border-edge/60 bg-white/30">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-2">
            Skill Combinations
          </h2>
          <p className="text-pencil mb-10 max-w-lg">
            Common scenarios and which skills work best together. Each combo
            forms a complete workflow for a real task.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {comboSuggestions.map((combo) => (
              <Card
                key={combo.scenario}
                className="border-edge bg-white/70 hover:bg-white transition-colors"
              >
                <CardContent className="p-5">
                  <h3 className="font-display text-xl text-ink mb-2">
                    {combo.scenario}
                  </h3>
                  <p className="text-sm text-pencil mb-4 leading-relaxed">
                    {combo.description}
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
                          className="font-mono text-[11px] border-edge/60 text-pencil cursor-pointer hover:border-stamp/40 hover:text-ink transition-colors"
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
      <footer className="border-t border-edge/60 bg-white/40">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-mono text-xs text-muted-foreground">
            OpenCode Skills Reference · {skills.length} skills across{" "}
            {categories.length} categories
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            Deploy via GitHub Pages
          </p>
        </div>
      </footer>

      {/* Skill Detail Modal */}
      <SkillDetailDialog
        skill={selectedSkill}
        open={!!selectedSkill}
        onClose={() => setSelectedSkill(null)}
      />
    </main>
  );
}
