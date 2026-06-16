"use client";

import { ThemeProvider } from "./theme-provider";
import { LocaleProvider, useLocale } from "./locale-provider";
import { NavBar } from "./navbar";
import { translations } from "@/lib/i18n";

function ShellInner({ children }: { children: React.ReactNode }) {
  const { locale, setLocale } = useLocale();
  const t = translations[locale];

  return (
    <>
      <NavBar labels={t.nav} locale={locale} setLocale={setLocale} />
      {children}
    </>
  );
}

export function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <ShellInner>{children}</ShellInner>
      </LocaleProvider>
    </ThemeProvider>
  );
}
