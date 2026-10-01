import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime, b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as BookOpen, i as ListChecks, l as Download, r as Menu, s as GraduationCap, t as X } from "../_libs/lucide-react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as cn, t as chapters } from "./utils-CUWe_u7_.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app-shell-8kP3tobR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var KEY = "fisiopatho-progress-v1";
var empty = () => ({
	chapters: {},
	quizBest: 0
});
function loadProgress() {
	if (typeof localStorage === "undefined") return empty();
	try {
		const raw = localStorage.getItem(KEY);
		if (!raw) return empty();
		const parsed = JSON.parse(raw);
		return {
			chapters: parsed.chapters ?? {},
			quizBest: typeof parsed.quizBest === "number" ? parsed.quizBest : 0
		};
	} catch {
		return empty();
	}
}
function saveProgress(next) {
	localStorage.setItem(KEY, JSON.stringify(next));
}
function markChapterRead(slug) {
	const p = loadProgress();
	p.chapters[slug] = true;
	saveProgress(p);
	return p;
}
function saveQuizBest(score) {
	const p = loadProgress();
	p.quizBest = Math.max(p.quizBest, score);
	saveProgress(p);
	return p;
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40", {
	variants: {
		variant: {
			default: "bg-primary text-primary-fg hover:bg-primary/90",
			outline: "border border-border bg-surface text-fg hover:bg-chip",
			ghost: "text-fg hover:bg-chip",
			accent: "bg-accent text-primary-fg hover:bg-accent/90"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 px-3 text-xs",
			lg: "h-12 px-5",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var nav = [
	{
		to: "/",
		label: "Capa",
		icon: BookOpen
	},
	...chapters.map((c) => ({
		to: `/capitulo/${c.slug}`,
		label: `${c.number} · ${c.title}`,
		icon: GraduationCap,
		slug: c.slug
	})),
	{
		to: "/quiz",
		label: "Questões",
		icon: ListChecks
	},
	{
		to: "/referencias",
		label: "Glossário e fontes",
		icon: BookOpen
	}
];
function AppShell({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	const [done, setDone] = (0, import_react.useState)({});
	(0, import_react.useEffect)(() => {
		setDone(loadProgress().chapters);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	const readCount = chapters.filter((c) => done[c.slug]).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#conteudo",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-fg",
				children: "Ir ao conteúdo"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "no-print sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex size-11 items-center justify-center rounded-md hover:bg-chip lg:hidden",
							onClick: () => setOpen((v) => !v),
							"aria-label": open ? "Fechar menu" : "Abrir menu",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-baseline gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-lg tracking-tight",
								children: "FisioPatho"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden text-xs uppercase tracking-[0.16em] text-muted sm:inline",
								children: "Apostila"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "hidden text-xs text-muted sm:block",
							children: [
								readCount,
								"/",
								chapters.length,
								" capítulos"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "/apostila-fisiopatologia.pdf",
								download: true,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-3.5" }), "PDF"]
							})
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: cn("no-print z-30 border-border bg-bg lg:sticky lg:top-14 lg:block lg:h-[calc(100dvh-3.5rem)] lg:w-64 lg:shrink-0 lg:overflow-y-auto lg:border-r", open ? "fixed inset-x-0 top-14 bottom-0 overflow-y-auto border-b px-4 py-4" : "hidden px-3 py-6"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 px-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted",
						children: "Sumário"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex flex-col gap-1 pb-8",
						children: nav.map((item) => {
							const active = item.to === "/" ? pathname === "/" : pathname === item.to || pathname.startsWith(item.to + "/");
							const slug = "slug" in item ? item.slug : void 0;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.to,
								className: cn("flex min-h-11 items-center gap-2 rounded-md px-3 text-sm leading-snug transition-colors", active ? "bg-chip text-fg" : "text-ink-soft hover:bg-chip/70"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "min-w-0 flex-1",
									children: item.label
								}), slug && done[slug] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "size-1.5 shrink-0 rounded-full bg-accent",
									"aria-label": "lido"
								}) : null]
							}, item.to);
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					id: "conteudo",
					className: "min-w-0 flex-1",
					children
				})]
			})
		]
	});
}
//#endregion
export { saveQuizBest as i, Button as n, markChapterRead as r, AppShell as t };
