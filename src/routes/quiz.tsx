import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { Button } from "@/components/ui/button";
import { chapters, quizQuestions } from "@/lib/content";
import { saveQuizBest } from "@/lib/progress";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/quiz")({ component: QuizPage });

function QuizPage() {
  const [filter, setFilter] = useState<string>("todos");
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [answered, setAnswered] = useState(0);

  const pool = useMemo(
    () =>
      filter === "todos"
        ? quizQuestions
        : quizQuestions.filter((q) => q.chapter === filter),
    [filter],
  );

  const q = pool[index];

  function reset(nextFilter = filter) {
    setFilter(nextFilter);
    setIndex(0);
    setPicked(null);
    setScore(0);
    setDone(false);
    setAnswered(0);
  }

  function choose(i: number) {
    if (picked !== null || !q) return;
    setPicked(i);
    setAnswered((n) => n + 1);
    if (i === q.answer) setScore((s) => s + 1);
  }

  function next() {
    if (!q) return;
    if (index + 1 >= pool.length) {
      const finalScore = score;
      saveQuizBest(Math.round((finalScore / pool.length) * 100));
      setDone(true);
      return;
    }
    setIndex((n) => n + 1);
    setPicked(null);
  }

  return (
    <AppShell>
      <main className="px-4 py-8 sm:px-8 sm:py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Treino
        </p>
        <h1 className="mt-2 font-display text-3xl tracking-tight sm:text-4xl">
          Questões de fisiopatologia
        </h1>
        <p className="mt-2 max-w-2xl font-serif text-ink-soft">
          Trinta itens no estilo de prova, com gabarito comentado. Filtre por capítulo ou faça a
          bateria completa.
        </p>

        <div className="no-print mt-6 flex flex-wrap gap-2">
          <FilterChip active={filter === "todos"} onClick={() => reset("todos")}>
            Todos
          </FilterChip>
          {chapters.map((c) => (
            <FilterChip
              key={c.slug}
              active={filter === c.slug}
              onClick={() => reset(c.slug)}
            >
              {c.number}
            </FilterChip>
          ))}
        </div>

        {done || !q ? (
          <section className="mt-10 max-w-xl rounded-xl border border-border bg-surface px-6 py-8">
            <p className="text-xs uppercase tracking-[0.16em] text-muted">Resultado</p>
            <p className="mt-2 font-display text-4xl">
              {score}/{pool.length}
            </p>
            <p className="mt-2 font-serif text-ink-soft">
              {score / pool.length >= 0.8
                ? "Excelente. Revise só os itens errados e siga."
                : score / pool.length >= 0.6
                  ? "Bom caminho. Releia as caixas de prova dos capítulos com mais erro."
                  : "Vale reler o capítulo correspondente antes de nova tentativa."}
            </p>
            <Button className="mt-6" onClick={() => reset()}>
              Refazer
            </Button>
          </section>
        ) : (
          <section className="mt-8 max-w-2xl">
            <p className="text-sm text-muted">
              Questão {index + 1} de {pool.length}
              {answered > 0 ? ` · acertos ${score}/${answered}` : null}
            </p>
            <div className="mt-2 h-1 overflow-hidden rounded-full bg-chip">
              <div
                className="h-full bg-primary transition-[width] duration-200"
                style={{ width: `${((index + (picked !== null ? 1 : 0)) / pool.length) * 100}%` }}
              />
            </div>
            <h2 className="mt-6 font-display text-xl leading-snug sm:text-2xl">{q.prompt}</h2>
            <ul className="mt-5 space-y-2">
              {q.options.map((opt, i) => {
                const show = picked !== null;
                const correct = i === q.answer;
                const chosen = i === picked;
                return (
                  <li key={opt}>
                    <button
                      type="button"
                      onClick={() => choose(i)}
                      className={cn(
                        "w-full rounded-lg border px-4 py-3 text-left text-sm leading-relaxed transition-colors",
                        !show && "border-border bg-surface hover:bg-chip",
                        show && correct && "border-accent bg-chip text-fg",
                        show && chosen && !correct && "border-primary bg-paper text-fg",
                        show && !correct && !chosen && "border-border bg-surface text-muted",
                      )}
                    >
                      <span className="mr-2 font-semibold text-muted">
                        {String.fromCharCode(65 + i)}.
                      </span>
                      {opt}
                    </button>
                  </li>
                );
              })}
            </ul>
            {picked !== null ? (
              <div className="mt-5 rounded-lg border border-border bg-surface px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                  {picked === q.answer ? "Correto" : "Revise"}
                </p>
                <p className="mt-2 font-serif text-[0.98rem] leading-relaxed text-ink-soft">
                  {q.explanation}
                </p>
                <Button className="mt-4" onClick={next}>
                  {index + 1 >= pool.length ? "Ver resultado" : "Próxima"}
                </Button>
              </div>
            ) : null}
          </section>
        )}
      </main>
    </AppShell>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "h-10 rounded-full border px-3 text-sm",
        active ? "border-primary bg-primary text-primary-fg" : "border-border bg-surface hover:bg-chip",
      )}
    >
      {children}
    </button>
  );
}
