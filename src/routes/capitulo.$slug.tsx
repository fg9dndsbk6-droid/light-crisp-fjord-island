import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useEffect } from "react";
import { AppShell } from "@/components/app-shell";
import { BlockView } from "@/components/blocks";
import { Button } from "@/components/ui/button";
import { chapters, getChapter, getChapterIndex } from "@/lib/content";
import { markChapterRead } from "@/lib/progress";

export const Route = createFileRoute("/capitulo/$slug")({
  component: ChapterPage,
});

function ChapterPage() {
  const { slug } = Route.useParams();
  const chapter = getChapter(slug);
  if (!chapter) throw notFound();
  const idx = getChapterIndex(slug);
  const prev = idx > 0 ? chapters[idx - 1] : null;
  const next = idx < chapters.length - 1 ? chapters[idx + 1] : null;

  useEffect(() => {
    markChapterRead(slug);
  }, [slug]);

  return (
    <AppShell>
      <article className="px-4 py-8 sm:px-8 sm:py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Capítulo {chapter.number} · {chapter.date}
        </p>
        <h1 className="mt-2 font-display text-3xl tracking-tight text-fg sm:text-4xl">
          {chapter.title}
        </h1>
        <p className="mt-2 max-w-2xl font-serif text-lg text-ink-soft">{chapter.subtitle}</p>
        <p className="mt-2 text-sm text-muted">
          {chapter.readingMin} min · {chapter.sources}
        </p>

        <section className="mt-8 rounded-xl border border-border bg-surface px-5 py-5">
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            Objetivos de aprendizagem
          </h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 font-serif text-[0.98rem] text-ink-soft marker:text-primary">
            {chapter.objectives.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </section>

        <nav className="no-print mt-8 overflow-x-auto">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
            Neste capítulo
          </p>
          <ul className="flex min-w-max gap-2 pb-2">
            {chapter.sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="inline-flex h-10 items-center rounded-full border border-border bg-surface px-3 text-xs text-ink-soft hover:bg-chip"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {chapter.sections.map((section) => (
          <section key={section.id} className="mt-4">
            <h2
              id={section.id}
              className="mt-12 mb-4 scroll-mt-28 border-b border-border pb-2 font-display text-2xl font-medium tracking-tight sm:text-3xl"
            >
              {section.title}
            </h2>
            {section.blocks.map((block, i) => (
              <BlockView key={`${section.id}-${i}`} block={block} />
            ))}
          </section>
        ))}

        <div className="no-print mt-14 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          {prev ? (
            <Button asChild variant="outline">
              <Link to="/capitulo/$slug" params={{ slug: prev.slug }}>
                <ArrowLeft className="size-4" />
                {prev.title}
              </Link>
            </Button>
          ) : (
            <Button asChild variant="outline">
              <Link to="/">
                <ArrowLeft className="size-4" />
                Capa
              </Link>
            </Button>
          )}
          {next ? (
            <Button asChild>
              <Link to="/capitulo/$slug" params={{ slug: next.slug }}>
                {next.title}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          ) : (
            <Button asChild>
              <Link to="/quiz">
                <Check className="size-4" />
                Ir às questões
              </Link>
            </Button>
          )}
        </div>
      </article>
    </AppShell>
  );
}
