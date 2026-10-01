import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpen, Download, GraduationCap, ListChecks, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { chapters } from "@/lib/content";
import { loadProgress } from "@/lib/progress";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Capa", icon: BookOpen },
  ...chapters.map((c) => ({
    to: `/capitulo/${c.slug}`,
    label: `${c.number} · ${c.title}`,
    icon: GraduationCap,
    slug: c.slug,
  })),
  { to: "/quiz", label: "Questões", icon: ListChecks },
  { to: "/referencias", label: "Glossário e fontes", icon: BookOpen },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setDone(loadProgress().chapters);
  }, [pathname]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const readCount = chapters.filter((c) => done[c.slug]).length;

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-fg"
      >
        Ir ao conteúdo
      </a>
      <header className="no-print sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-md hover:bg-chip lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
            <Link to="/" className="flex items-baseline gap-2">
              <span className="font-display text-lg tracking-tight">FisioPatho</span>
              <span className="hidden text-xs uppercase tracking-[0.16em] text-muted sm:inline">
                Apostila
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <p className="hidden text-xs text-muted sm:block">
              {readCount}/{chapters.length} capítulos
            </p>
            <Button asChild size="sm" variant="outline">
              <a href="/apostila-fisiopatologia.pdf" download>
                <Download className="size-3.5" />
                PDF
              </a>
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-6xl">
        <aside
          className={cn(
            "no-print z-30 border-border bg-bg lg:sticky lg:top-14 lg:block lg:h-[calc(100dvh-3.5rem)] lg:w-64 lg:shrink-0 lg:overflow-y-auto lg:border-r",
            open
              ? "fixed inset-x-0 top-14 bottom-0 overflow-y-auto border-b px-4 py-4"
              : "hidden px-3 py-6",
          )}
        >
          <p className="mb-3 px-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
            Sumário
          </p>
          <nav className="flex flex-col gap-1 pb-8">
            {nav.map((item) => {
              const active =
                item.to === "/"
                  ? pathname === "/"
                  : pathname === item.to || pathname.startsWith(item.to + "/");
              const slug = "slug" in item ? item.slug : undefined;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "flex min-h-11 items-center gap-2 rounded-md px-3 text-sm leading-snug transition-colors",
                    active ? "bg-chip text-fg" : "text-ink-soft hover:bg-chip/70",
                  )}
                >
                  <span className="min-w-0 flex-1">{item.label}</span>
                  {slug && done[slug] ? (
                    <span className="size-1.5 shrink-0 rounded-full bg-accent" aria-label="lido" />
                  ) : null}
                </Link>
              );
            })}
          </nav>
        </aside>
        <div id="conteudo" className="min-w-0 flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}
