import { createFileRoute } from "@tanstack/react-router";
import { BlockView } from "@/components/blocks";
import { chapters, glossary, quizQuestions, references } from "@/lib/content";

export const Route = createFileRoute("/imprimir")({ component: PrintPage });

function PrintPage() {
  return (
    <div className="mx-auto max-w-3xl bg-bg px-6 py-10 text-fg print:max-w-none print:bg-white print:px-0 print:py-0">
      <header className="border-b border-border pb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Medicina · Fisiopatologia
        </p>
        <h1 className="mt-2 font-display text-4xl leading-tight">
          Apostila de inflamação e reparo tecidual
        </h1>
        <p className="mt-3 font-serif text-lg text-ink-soft">
          Leucócitos, inflamação aguda, inflamação crônica, regeneração e cicatrização.
        </p>
        <p className="mt-4 text-sm text-muted">
          Prof. Percicote · aulas de 11, 18 e 25/08/2026 · fontes: Ross, Robbins & Cotran,
          Abbas · material organizado a partir das notas de aula.
        </p>
      </header>

      <nav className="mt-8">
        <h2 className="font-display text-2xl">Sumário</h2>
        <ol className="mt-3 list-decimal space-y-1 pl-5 font-serif">
          {chapters.map((c) => (
            <li key={c.slug}>
              Capítulo {c.number} — {c.title}
            </li>
          ))}
          <li>Questões comentadas</li>
          <li>Glossário e referências</li>
        </ol>
      </nav>

      {chapters.map((chapter) => (
        <article key={chapter.slug} className="page-break mt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Capítulo {chapter.number}
          </p>
          <h1 className="mt-1 font-display text-3xl">{chapter.title}</h1>
          <p className="mt-1 font-serif text-lg text-ink-soft">{chapter.subtitle}</p>
          <ul className="mt-4 list-disc space-y-1 pl-5 font-serif text-sm text-ink-soft">
            {chapter.objectives.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
          {chapter.sections.map((section) => (
            <section key={section.id} className="mt-6">
              <h2 className="mb-3 font-display text-2xl">{section.title}</h2>
              {section.blocks.map((block, i) => (
                <BlockView key={`${section.id}-${i}`} block={block} />
              ))}
            </section>
          ))}
        </article>
      ))}

      <section className="page-break mt-12">
        <h1 className="font-display text-3xl">Questões comentadas</h1>
        <ol className="mt-6 space-y-6">
          {quizQuestions.map((q, i) => (
            <li key={q.id} className="font-serif">
              <p className="font-sans font-medium text-fg">
                {i + 1}. {q.prompt}
              </p>
              <ul className="mt-2 list-none space-y-1 text-sm text-ink-soft">
                {q.options.map((o, j) => (
                  <li key={o}>
                    {String.fromCharCode(65 + j)}) {o}
                    {j === q.answer ? "  ← gabarito" : ""}
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-sm text-muted">{q.explanation}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="page-break mt-12">
        <h1 className="font-display text-3xl">Glossário</h1>
        <dl className="mt-4 space-y-2">
          {glossary.map((g) => (
            <div key={g.term}>
              <dt className="font-medium">{g.term}</dt>
              <dd className="font-serif text-sm text-ink-soft">{g.def}</dd>
            </div>
          ))}
        </dl>
        <h2 className="mt-10 font-display text-2xl">Referências</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 font-serif text-sm">
          {references.map((r) => (
            <li key={r.id}>{r.text}</li>
          ))}
        </ol>
      </section>
    </div>
  );
}
