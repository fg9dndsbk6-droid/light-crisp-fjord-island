import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as cn, t as chapters } from "./utils-CUWe_u7_.mjs";
import { i as saveQuizBest, n as Button, t as AppShell } from "./app-shell-8kP3tobR.mjs";
import { t as quizQuestions } from "./quiz-CJgEKIVR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quiz-CF79VXsd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function QuizPage() {
	const [filter, setFilter] = (0, import_react.useState)("todos");
	const [index, setIndex] = (0, import_react.useState)(0);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const [score, setScore] = (0, import_react.useState)(0);
	const [done, setDone] = (0, import_react.useState)(false);
	const [answered, setAnswered] = (0, import_react.useState)(0);
	const pool = (0, import_react.useMemo)(() => filter === "todos" ? quizQuestions : quizQuestions.filter((q) => q.chapter === filter), [filter]);
	const q = pool[index];
	function reset(nextFilter = filter) {
		setFilter(nextFilter);
		setIndex(0);
		setPicked(null);
		setScore(0);
		setDone(false);
		setAnswered(0);
	}
	function choose(i) {
		if (picked !== null || !q) return;
		setPicked(i);
		setAnswered((n) => n + 1);
		if (i === q.answer) setScore((s) => s + 1);
	}
	function next() {
		if (!q) return;
		if (index + 1 >= pool.length) {
			saveQuizBest(Math.round(score / pool.length * 100));
			setDone(true);
			return;
		}
		setIndex((n) => n + 1);
		setPicked(null);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "px-4 py-8 sm:px-8 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-[0.18em] text-primary",
				children: "Treino"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-3xl tracking-tight sm:text-4xl",
				children: "Questões de fisiopatologia"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl font-serif text-ink-soft",
				children: "Trinta itens no estilo de prova, com gabarito comentado. Filtre por capítulo ou faça a bateria completa."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "no-print mt-6 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
					active: filter === "todos",
					onClick: () => reset("todos"),
					children: "Todos"
				}), chapters.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
					active: filter === c.slug,
					onClick: () => reset(c.slug),
					children: c.number
				}, c.slug))]
			}),
			done || !q ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10 max-w-xl rounded-xl border border-border bg-surface px-6 py-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.16em] text-muted",
						children: "Resultado"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 font-display text-4xl",
						children: [
							score,
							"/",
							pool.length
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-serif text-ink-soft",
						children: score / pool.length >= .8 ? "Excelente. Revise só os itens errados e siga." : score / pool.length >= .6 ? "Bom caminho. Releia as caixas de prova dos capítulos com mais erro." : "Vale reler o capítulo correspondente antes de nova tentativa."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-6",
						onClick: () => reset(),
						children: "Refazer"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							"Questão ",
							index + 1,
							" de ",
							pool.length,
							answered > 0 ? ` · acertos ${score}/${answered}` : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 h-1 overflow-hidden rounded-full bg-chip",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full bg-primary transition-[width] duration-200",
							style: { width: `${(index + (picked !== null ? 1 : 0)) / pool.length * 100}%` }
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-6 font-display text-xl leading-snug sm:text-2xl",
						children: q.prompt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-2",
						children: q.options.map((opt, i) => {
							const show = picked !== null;
							const correct = i === q.answer;
							const chosen = i === picked;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => choose(i),
								className: cn("w-full rounded-lg border px-4 py-3 text-left text-sm leading-relaxed transition-colors", !show && "border-border bg-surface hover:bg-chip", show && correct && "border-accent bg-chip text-fg", show && chosen && !correct && "border-primary bg-paper text-fg", show && !correct && !chosen && "border-border bg-surface text-muted"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mr-2 font-semibold text-muted",
									children: [String.fromCharCode(65 + i), "."]
								}), opt]
							}) }, opt);
						})
					}),
					picked !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 rounded-lg border border-border bg-surface px-4 py-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-[0.14em] text-muted",
								children: picked === q.answer ? "Correto" : "Revise"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-serif text-[0.98rem] leading-relaxed text-ink-soft",
								children: q.explanation
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "mt-4",
								onClick: next,
								children: index + 1 >= pool.length ? "Ver resultado" : "Próxima"
							})
						]
					}) : null
				]
			})
		]
	}) });
}
function FilterChip({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("h-10 rounded-full border px-3 text-sm", active ? "border-primary bg-primary text-primary-fg" : "border-border bg-surface hover:bg-chip"),
		children
	});
}
//#endregion
export { QuizPage as component };
