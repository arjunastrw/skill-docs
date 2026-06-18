"use client";

import { useState } from "react";
import { translations } from "@/lib/i18n";
import { useLocale } from "./locale-provider";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";

const issueBase = "https://github.com/arjunastrw/skill-docs/issues/new?template=add-data.md";

const types = [
  { value: "skill", labelKey: "typeSkill" as const },
  { value: "mcp", labelKey: "typeMCP" as const },
  { value: "model", labelKey: "typeModel" as const },
  { value: "cli", labelKey: "typeCLI" as const },
  { value: "prompt", labelKey: "typePrompt" as const },
  { value: "template", labelKey: "typeTemplate" as const },
];

export function RequestModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { locale } = useLocale();
  const t = translations[locale];
  const [selectedType, setSelectedType] = useState("skill");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const issueUrl = `${issueBase}&title=data%3A+add+${selectedType}+—+${encodeURIComponent(name || "...")}&body=${encodeURIComponent(`**Type:** ${selectedType}\n\n**Name:** ${name}\n\n**Description:**\n${desc}`)}`;

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-md border-edge bg-white dark:bg-card">
        <DialogHeader>
          <DialogTitle className="font-display text-xl text-ink dark:text-manila">{t.request.openIssue}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 mt-2">
          <div>
            <label className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2 block">{t.request.selectType}</label>
            <div className="grid grid-cols-3 gap-2">
              {types.map((tp) => (
                <button key={tp.value} onClick={() => setSelectedType(tp.value)} className={`px-3 py-2 rounded-lg font-mono text-xs transition-colors ${selectedType === tp.value ? "bg-ink text-manila dark:bg-manila dark:text-ink" : "bg-secondary/50 dark:bg-secondary/40 text-pencil hover:text-ink dark:hover:text-manila"}`}>
                  {t.request[tp.labelKey as keyof typeof t.request]}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1 block">{t.request.nameLabel}</label>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder={t.request.namePlaceholder} className="w-full font-mono text-sm bg-secondary/50 dark:bg-secondary/40 border border-edge/40 rounded-lg px-3 py-2 text-ink dark:text-manila focus:outline-none focus:border-stamp/40" />
          </div>
          <div>
            <label className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1 block">{t.request.descLabel}</label>
            <textarea value={desc} onChange={(e) => setDesc(e.target.value)} placeholder={t.request.descPlaceholder} rows={4} className="w-full font-mono text-sm bg-secondary/50 dark:bg-secondary/40 border border-edge/40 rounded-lg px-3 py-2 text-ink dark:text-manila focus:outline-none focus:border-stamp/40 resize-none" />
          </div>
          <a href={issueUrl} target="_blank" rel="noopener noreferrer" className="block w-full text-center px-4 py-2.5 rounded-full bg-stamp text-white font-mono text-sm hover:opacity-90 transition-opacity" onClick={onClose}>
            {t.request.openIssue}
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
