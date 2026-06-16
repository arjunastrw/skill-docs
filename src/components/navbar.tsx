"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { LangSwitcher } from "./lang-switcher";
import { type Locale } from "@/lib/i18n";

interface NavBarProps {
  labels: { start: string; skills: string; mcp: string };
  locale: Locale;
  setLocale: (l: Locale) => void;
}

const links = [
  { href: "/", key: "start" as const },
  { href: "/skills", key: "skills" as const },
  { href: "/mcp", key: "mcp" as const },
];

export function NavBar({ labels, locale, setLocale }: NavBarProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <nav className="sticky top-0 z-20 border-b border-edge/60 bg-manila/90 dark:bg-background/90 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
          {/* Logo + Desktop Links */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="font-mono text-sm font-semibold text-ink dark:text-manila tracking-tight hover:text-stamp transition-colors"
            >
              Agent Skills
            </Link>
            <div className="hidden sm:flex items-center gap-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative px-3 py-1.5 rounded-full text-sm font-mono transition-colors ${
                    isActive(l.href)
                      ? "text-ink dark:text-manila bg-secondary/60 dark:bg-secondary/50"
                      : "text-pencil hover:text-ink dark:hover:text-manila"
                  }`}
                >
                  {labels[l.key]}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: theme + lang */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LangSwitcher locale={locale} setLocale={setLocale} />
            {/* Hamburger (mobile) */}
            <button
              className="sm:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-px bg-ink dark:bg-manila transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
                }`}
              />
              <span
                className={`block w-5 h-px bg-ink dark:bg-manila transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu overlay */}
        {menuOpen && (
          <div className="sm:hidden border-t border-edge/60 bg-manila/95 dark:bg-background/95 backdrop-blur-md px-6 py-4">
            {links.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-3 font-mono text-base border-b border-edge/20 last:border-0 transition-all duration-300 ${
                  isActive(l.href)
                    ? "text-stamp"
                    : "text-ink dark:text-manila"
                }`}
                style={{
                  animationDelay: `${i * 100}ms`,
                  animationFillMode: "backwards",
                }}
              >
                {labels[l.key]}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
