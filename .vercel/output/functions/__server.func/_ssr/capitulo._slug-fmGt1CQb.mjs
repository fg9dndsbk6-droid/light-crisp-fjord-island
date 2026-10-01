import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { J as notFound, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as Check, m as ArrowLeft, p as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as Route } from "./router-qd3Ec9cb.mjs";
import { i as getChapterIndex, r as getChapter, t as chapters } from "./utils-CUWe_u7_.mjs";
import { n as Button, r as markChapterRead, t as AppShell } from "./app-shell-8kP3tobR.mjs";
import { t as BlockView } from "./blocks-BRXHFFPp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/capitulo._slug-fmGt1CQb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ChapterPage() {
	const { slug } = Route.useParams();
	const chapter = getChapter(slug);
	if (!chapter) throw notFound();
	const idx = getChapterIndex(slug);
	const prev = idx > 0 ? chapters[idx - 1] : null;
	const next = idx < chapters.length - 1 ? chapters[idx + 1] : null;
	(0, import_react.useEffect)(() => {
		markChapterRead(slug);
	}, [slug]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "px-4 py-8 sm:px-8 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs font-semibold uppercase tracking-[0.18em] text-primary",
				children: [
					"Capítulo ",
					chapter.number,
					" · ",
					chapter.date
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-3xl tracking-tight text-fg sm:text-4xl",
				children: chapter.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl font-serif text-lg text-ink-soft",
				children: chapter.subtitle
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-muted",
				children: [
					chapter.readingMin,
					" min · ",
					chapter.sources
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 rounded-xl border border-border bg-surface px-5 py-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs font-semibold uppercase tracking-[0.16em] text-muted",
					children: "Objetivos de aprendizagem"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 list-disc space-y-1.5 pl-5 font-serif text-[0.98rem] text-ink-soft marker:text-primary",
					children: chapter.objectives.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: o }, o))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "no-print mt-8 overflow-x-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted",
					children: "Neste capítulo"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex min-w-max gap-2 pb-2",
					children: chapter.sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${s.id}`,
						className: "inline-flex h-10 items-center rounded-full border border-border bg-surface px-3 text-xs text-ink-soft hover:bg-chip",
						children: s.title
					}) }, s.id))
				})]
			}),
			chapter.sections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: section.id,
					className: "mt-12 mb-4 scroll-mt-28 border-b border-border pb-2 font-display text-2xl font-medium tracking-tight sm:text-3xl",
					children: section.title
				}), section.blocks.map((block, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockView, { block }, `${section.id}-${i}`))]
			}, section.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "no-print mt-14 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between",
				children: [prev ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/capitulo/$slug",
						params: { slug: prev.slug },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), prev.title]
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Capa"]
					})
				}), next ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/capitulo/$slug",
						params: { slug: next.slug },
						children: [next.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/quiz",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }), "Ir às questões"]
					})
				})]
			})
		]
	}) });
}
//#endregion
export { ChapterPage as component };
