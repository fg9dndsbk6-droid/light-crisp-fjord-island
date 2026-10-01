import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { glossary, references } from "@/lib/content";

export const Route = createFileRoute("/referencias")({ component: RefsPage });

function RefsPage() {
  return (
    <AppShell>
      <main className="px-4 py-8 sm:px-8 sm:py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Material de apoio
        </p>
        <h1 className="mt-2 font-display text-3xl tracking-tight sm:text-4xl">
          Glossário e referências
        </h1>
        <p className="mt-3 max-w-2xl font-serif text-ink-soft">
          Termos que caem em prova e as fontes usadas para complementar as anotações de aula
          quando a literatura diverge ou aprofunda o mecanismo.
        </p>

        <h2 className="mt-10 font-display text-2xl">Glossário</h2>
        <dl className="mt-4 divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface">
          {glossary.map((g) => (
            <div key={g.term} className="grid gap-1 px-4 py-3 sm:grid-cols-[11rem_1fr] sm:gap-6">
              <dt className="font-medium text-fg">{g.term}</dt>
              <dd className="font-serif text-sm leading-relaxed text-ink-soft">{g.def}</dd>
            </div>
          ))}
        </dl>

        <h2 className="mt-12 font-display text-2xl">Referências</h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5 font-serif text-[0.98rem] leading-relaxed text-ink-soft">
          {references.map((r) => (
            <li key={r.id}>{r.text}</li>
          ))}
        </ol>
        <p className="mt-8 max-w-2xl text-sm text-muted">
          Figuras reproduzidas do material de aula do estudante, para uso didático pessoal. Esta
          apostila não substitui o tratado de patologia nem o atlas de histologia — serve como
          roteiro de estudo alinhado às aulas.
        </p>
      </main>
    </AppShell>
  );
}
