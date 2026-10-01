import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Download, FileText } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Button } from "@/components/ui/button";
import { chapters } from "@/lib/content";

export const Route = createFileRoute("/")({ component: Home });

const thumbs = [
  "/figures/leuco_p1_img2.jpg",
  "/figures/aguda_p1_img1.jpg",
  "/figures/cronica_p4_img2.jpg",
  "/figures/regen_p3_img1.jpg",
];

function Home() {
  return (
    <AppShell>
      <main className="px-4 py-10 sm:px-8 sm:py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Medicina · Fisiopatologia
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-[1.1] tracking-tight text-fg sm:text-5xl">
          Inflamação, defesa celular e reparo tecidual
        </h1>
        <p className="mt-5 max-w-2xl font-serif text-lg leading-relaxed text-ink-soft">
          Apostila de estudo construída a partir das aulas de leucócitos, inflamação aguda,
          inflamação crônica e cicatrização. Texto didático, figuras originais do material e
          correlações de prova — para ler no celular ou baixar em PDF.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/capitulo/$slug" params={{ slug: chapters[0].slug }}>
              Começar o capítulo 1
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <a href="/apostila-fisiopatologia.pdf" download>
              <Download className="size-4" />
              Baixar PDF
            </a>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/quiz">Treinar questões</Link>
          </Button>
        </div>

        <dl className="mt-10 grid gap-4 text-sm text-muted sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-surface px-4 py-3">
            <dt className="text-[11px] uppercase tracking-[0.14em]">Professor</dt>
            <dd className="mt-1 font-medium text-fg">Percicote</dd>
          </div>
          <div className="rounded-lg border border-border bg-surface px-4 py-3">
            <dt className="text-[11px] uppercase tracking-[0.14em]">Fontes de aula</dt>
            <dd className="mt-1 font-medium text-fg">Ross · Robbins & Cotran</dd>
          </div>
          <div className="rounded-lg border border-border bg-surface px-4 py-3">
            <dt className="text-[11px] uppercase tracking-[0.14em]">Aulas</dt>
            <dd className="mt-1 font-medium text-fg">11, 18 e 25 de agosto de 2026</dd>
          </div>
        </dl>

        <h2 className="mt-14 font-display text-2xl tracking-tight">Capítulos</h2>
        <div className="mt-5 grid gap-4">
          {chapters.map((c, i) => (
            <Link
              key={c.slug}
              to="/capitulo/$slug"
              params={{ slug: c.slug }}
              className="group grid overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-primary/30 sm:grid-cols-[9.5rem_1fr]"
            >
              <div className="h-36 overflow-hidden bg-chip sm:h-full">
                <img
                  src={thumbs[i]}
                  alt=""
                  className="size-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col justify-center px-5 py-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                  Capítulo {c.number}
                </p>
                <h3 className="mt-1 font-display text-xl text-fg">{c.title}</h3>
                <p className="mt-1 text-sm text-muted">{c.subtitle}</p>
                <p className="mt-3 flex items-center gap-3 text-xs text-muted">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="size-3.5" />
                    {c.readingMin} min
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <FileText className="size-3.5" />
                    {c.sections.length} seções
                  </span>
                </p>
              </div>
            </Link>
          ))}
        </div>

        <section className="mt-14 max-w-2xl">
          <h2 className="font-display text-2xl tracking-tight">Como estudar</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 font-serif text-ink-soft marker:font-sans marker:text-sm marker:font-semibold marker:text-primary">
            <li>Leia o capítulo inteiro; as caixas vermelhas são pegadinhas de prova.</li>
            <li>As figuras saíram do seu material de aula — use a legenda para descrever o que a banca espera.</li>
            <li>Quando um conceito da aula estava impreciso, a caixa “Atenção” corrige com a literatura.</li>
            <li>Feche com as 30 questões. Errou? A explicação devolve a página mental certa.</li>
            <li>Baixe o PDF para anotar no tablet ou imprimir.</li>
          </ol>
        </section>
      </main>
    </AppShell>
  );
}
