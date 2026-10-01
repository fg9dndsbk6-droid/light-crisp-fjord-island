import { cn } from "@/lib/utils";
import { RichText } from "@/lib/rich-text";
import type { Block, CalloutTone, FigureSpec } from "@/lib/content/types";
import { BookOpen, HeartPulse, Lightbulb, TriangleAlert } from "lucide-react";

const toneMeta: Record<
  CalloutTone,
  { label: string; icon: typeof BookOpen; bar: string }
> = {
  prova: { label: "Alta incidência", icon: BookOpen, bar: "border-l-primary" },
  clinica: { label: "Correlação clínica", icon: HeartPulse, bar: "border-l-accent" },
  atencao: { label: "Atenção", icon: TriangleAlert, bar: "border-l-fg" },
  memo: { label: "Para memorizar", icon: Lightbulb, bar: "border-l-accent" },
};

export function FigureCard({
  figure,
  className,
}: {
  figure: FigureSpec;
  className?: string;
}) {
  return (
    <figure className={cn("my-6", className)}>
      <div className="overflow-hidden rounded-lg border border-border bg-chip">
        <img
          src={figure.src}
          alt={figure.alt}
          className="mx-auto max-h-[520px] w-full object-contain"
          loading="eager"
        />
      </div>
      <figcaption className="mt-2.5 text-sm leading-relaxed text-muted">
        {figure.caption}
      </figcaption>
    </figure>
  );
}

export function Callout({
  tone,
  title,
  text,
}: {
  tone: CalloutTone;
  title: string;
  text: string;
}) {
  const meta = toneMeta[tone];
  const Icon = meta.icon;
  return (
    <aside
      className={cn(
        "my-6 rounded-lg border border-border border-l-4 bg-surface px-4 py-4 sm:px-5",
        meta.bar,
      )}
    >
      <div className="mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
        <Icon className="size-3.5" strokeWidth={1.75} />
        {meta.label}
      </div>
      <p className="font-display text-lg text-fg">{title}</p>
      <div className="mt-2 font-serif text-[0.98rem] leading-relaxed text-ink-soft">
        <RichText text={text} as="div" />
      </div>
    </aside>
  );
}

export function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return (
        <p className="mb-4 font-serif text-[1.05rem] leading-[1.7] text-ink-soft">
          <RichText text={block.text} />
        </p>
      );
    case "h2":
      return (
        <h2
          id={block.id}
          className="mt-12 mb-4 scroll-mt-28 font-display text-2xl font-medium tracking-tight text-fg sm:text-3xl"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          id={block.id}
          className="mt-8 mb-3 scroll-mt-28 font-display text-xl font-medium text-fg"
        >
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul className="mb-5 list-disc space-y-2 pl-5 font-serif text-[1.05rem] leading-relaxed text-ink-soft marker:text-primary">
          {block.items.map((item) => (
            <li key={item.slice(0, 48)}>
              <RichText text={item} />
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="mb-5 list-decimal space-y-2.5 pl-5 font-serif text-[1.05rem] leading-relaxed text-ink-soft marker:font-sans marker:text-sm marker:font-semibold marker:text-primary">
          {block.items.map((item, i) => (
            <li key={i}>
              <RichText text={item} />
            </li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div className="my-6 overflow-x-auto rounded-lg border border-border bg-surface">
          <table className="w-full text-left text-sm">
            <thead className="bg-chip text-xs uppercase tracking-[0.12em] text-muted">
              <tr>
                {block.headers.map((h) => (
                  <th key={h} className="px-3 py-2.5 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="border-t border-border align-top">
                  {row.map((cell, j) => (
                    <td key={j} className="px-3 py-2.5 font-serif text-ink-soft">
                      <RichText text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {block.caption ? (
            <p className="border-t border-border px-3 py-2 text-xs text-muted">
              {block.caption}
            </p>
          ) : null}
        </div>
      );
    case "figure":
      return <FigureCard figure={block.figure} />;
    case "figures":
      return (
        <div className="my-6 grid gap-6 sm:grid-cols-2">
          {block.figures.map((f) => (
            <FigureCard key={f.src} figure={f} className="my-0" />
          ))}
        </div>
      );
    case "callout":
      return <Callout tone={block.tone} title={block.title} text={block.text} />;
    default:
      return null;
  }
}
