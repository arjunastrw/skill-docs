"use client";

import { type Locale } from "@/lib/i18n";

export function LangSwitcher({
  locale,
  setLocale,
}: {
  locale: Locale;
  setLocale: (l: Locale) => void;
}) {
  return (
    <div className="flex items-center gap-0.5 border border-edge/60 rounded-full p-0.5 bg-white/60 dark:bg-card/60">
      <button
        onClick={() => setLocale("en")}
        className={`px-2.5 py-1 rounded-full text-xs font-mono transition-colors ${
          locale === "en"
            ? "bg-ink text-manila dark:bg-manila dark:text-ink"
            : "text-pencil hover:text-ink dark:hover:text-manila"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLocale("id")}
        className={`px-2.5 py-1 rounded-full text-xs font-mono transition-colors ${
          locale === "id"
            ? "bg-ink text-manila dark:bg-manila dark:text-ink"
            : "text-pencil hover:text-ink dark:hover:text-manila"
        }`}
      >
        ID
      </button>
    </div>
  );
}
