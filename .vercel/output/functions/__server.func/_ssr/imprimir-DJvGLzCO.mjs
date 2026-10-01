import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as chapters } from "./utils-CUWe_u7_.mjs";
import { t as BlockView } from "./blocks-BRXHFFPp.mjs";
import { t as quizQuestions } from "./quiz-CJgEKIVR.mjs";
import { n as references, t as glossary } from "./refs-B40l5rnm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/imprimir-DJvGLzCO.js
var import_jsx_runtime = require_jsx_runtime();
function PrintPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl bg-bg px-6 py-10 text-fg print:max-w-none print:bg-white print:px-0 print:py-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "border-b border-border pb-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
						children: "Medicina · Fisiopatologia"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl leading-tight",
						children: "Apostila de inflamação e reparo tecidual"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-serif text-lg text-ink-soft",
						children: "Leucócitos, inflamação aguda, inflamação crônica, regeneração e cicatrização."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted",
						children: "Prof. Percicote · aulas de 11, 18 e 25/08/2026 · fontes: Ross, Robbins & Cotran, Abbas · material organizado a partir das notas de aula."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Sumário"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "mt-3 list-decimal space-y-1 pl-5 font-serif",
					children: [
						chapters.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Capítulo ",
							c.number,
							" — ",
							c.title
						] }, c.slug)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Questões comentadas" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Glossário e referências" })
					]
				})]
			}),
			chapters.map((chapter) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "page-break mt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.18em] text-primary",
						children: ["Capítulo ", chapter.number]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 font-display text-3xl",
						children: chapter.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-serif text-lg text-ink-soft",
						children: chapter.subtitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 list-disc space-y-1 pl-5 font-serif text-sm text-ink-soft",
						children: chapter.objectives.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: o }, o))
					}),
					chapter.sections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mb-3 font-display text-2xl",
							children: section.title
						}), section.blocks.map((block, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockView, { block }, `${section.id}-${i}`))]
					}, section.id))
				]
			}, chapter.slug)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "page-break mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl",
					children: "Questões comentadas"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-6 space-y-6",
					children: quizQuestions.map((q, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "font-serif",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-sans font-medium text-fg",
								children: [
									i + 1,
									". ",
									q.prompt
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-2 list-none space-y-1 text-sm text-ink-soft",
								children: q.options.map((o, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									String.fromCharCode(65 + j),
									") ",
									o,
									j === q.answer ? "  ← gabarito" : ""
								] }, o))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: q.explanation
							})
						]
					}, q.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "page-break mt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl",
						children: "Glossário"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-4 space-y-2",
						children: glossary.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-medium",
							children: g.term
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "font-serif text-sm text-ink-soft",
							children: g.def
						})] }, g.term))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-10 font-display text-2xl",
						children: "Referências"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-3 list-decimal space-y-2 pl-5 font-serif text-sm",
						children: references.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: r.text }, r.id))
					})
				]
			})
		]
	});
}
//#endregion
export { PrintPage as component };
