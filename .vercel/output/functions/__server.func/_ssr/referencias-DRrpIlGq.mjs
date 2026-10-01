import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as AppShell } from "./app-shell-8kP3tobR.mjs";
import { n as references, t as glossary } from "./refs-B40l5rnm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/referencias-DRrpIlGq.js
var import_jsx_runtime = require_jsx_runtime();
function RefsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "px-4 py-8 sm:px-8 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-[0.18em] text-primary",
				children: "Material de apoio"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-3xl tracking-tight sm:text-4xl",
				children: "Glossário e referências"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl font-serif text-ink-soft",
				children: "Termos que caem em prova e as fontes usadas para complementar as anotações de aula quando a literatura diverge ou aprofunda o mecanismo."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 font-display text-2xl",
				children: "Glossário"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "mt-4 divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface",
				children: glossary.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-1 px-4 py-3 sm:grid-cols-[11rem_1fr] sm:gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-medium text-fg",
						children: g.term
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "font-serif text-sm leading-relaxed text-ink-soft",
						children: g.def
					})]
				}, g.term))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 font-display text-2xl",
				children: "Referências"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-4 list-decimal space-y-3 pl-5 font-serif text-[0.98rem] leading-relaxed text-ink-soft",
				children: references.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: r.text }, r.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 max-w-2xl text-sm text-muted",
				children: "Figuras reproduzidas do material de aula do estudante, para uso didático pessoal. Esta apostila não substitui o tratado de patologia nem o atlas de histologia — serve como roteiro de estudo alinhado às aulas."
			})
		]
	}) });
}
//#endregion
export { RefsPage as component };
