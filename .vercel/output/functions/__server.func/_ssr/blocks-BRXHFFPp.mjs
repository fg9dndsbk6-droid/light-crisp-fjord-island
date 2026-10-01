import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Lightbulb, f as BookOpen, n as TriangleAlert, o as HeartPulse } from "../_libs/lucide-react.mjs";
import { n as cn } from "./utils-CUWe_u7_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blocks-BRXHFFPp.js
var import_jsx_runtime = require_jsx_runtime();
function RichText({ text, as: Tag = "span" }) {
	const parts = [];
	const re = /\*\*(.+?)\*\*/g;
	let last = 0;
	let m;
	let i = 0;
	while (m = re.exec(text)) {
		if (m.index > last) parts.push(text.slice(last, m.index));
		parts.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
			className: "font-semibold text-fg",
			children: m[1]
		}, i++));
		last = m.index + m[0].length;
	}
	if (last < text.length) parts.push(text.slice(last));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: parts });
}
var toneMeta = {
	prova: {
		label: "Alta incidência",
		icon: BookOpen,
		bar: "border-l-primary"
	},
	clinica: {
		label: "Correlação clínica",
		icon: HeartPulse,
		bar: "border-l-accent"
	},
	atencao: {
		label: "Atenção",
		icon: TriangleAlert,
		bar: "border-l-fg"
	},
	memo: {
		label: "Para memorizar",
		icon: Lightbulb,
		bar: "border-l-accent"
	}
};
function FigureCard({ figure, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: cn("my-6", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden rounded-lg border border-border bg-chip",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: figure.src,
				alt: figure.alt,
				className: "mx-auto max-h-[520px] w-full object-contain",
				loading: "eager"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "mt-2.5 text-sm leading-relaxed text-muted",
			children: figure.caption
		})]
	});
}
function Callout({ tone, title, text }) {
	const meta = toneMeta[tone];
	const Icon = meta.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: cn("my-6 rounded-lg border border-border border-l-4 bg-surface px-4 py-4 sm:px-5", meta.bar),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "size-3.5",
					strokeWidth: 1.75
				}), meta.label]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-lg text-fg",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 font-serif text-[0.98rem] leading-relaxed text-ink-soft",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichText, {
					text,
					as: "div"
				})
			})
		]
	});
}
function BlockView({ block }) {
	switch (block.type) {
		case "p": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-4 font-serif text-[1.05rem] leading-[1.7] text-ink-soft",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichText, { text: block.text })
		});
		case "h2": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			id: block.id,
			className: "mt-12 mb-4 scroll-mt-28 font-display text-2xl font-medium tracking-tight text-fg sm:text-3xl",
			children: block.text
		});
		case "h3": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			id: block.id,
			className: "mt-8 mb-3 scroll-mt-28 font-display text-xl font-medium text-fg",
			children: block.text
		});
		case "ul": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mb-5 list-disc space-y-2 pl-5 font-serif text-[1.05rem] leading-relaxed text-ink-soft marker:text-primary",
			children: block.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichText, { text: item }) }, item.slice(0, 48)))
		});
		case "ol": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mb-5 list-decimal space-y-2.5 pl-5 font-serif text-[1.05rem] leading-relaxed text-ink-soft marker:font-sans marker:text-sm marker:font-semibold marker:text-primary",
			children: block.items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichText, { text: item }) }, i))
		});
		case "table": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "my-6 overflow-x-auto rounded-lg border border-border bg-surface",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-left text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "bg-chip text-xs uppercase tracking-[0.12em] text-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: block.headers.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-3 py-2.5 font-semibold",
						children: h
					}, h)) })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: block.rows.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
					className: "border-t border-border align-top",
					children: row.map((cell, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-3 py-2.5 font-serif text-ink-soft",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RichText, { text: cell })
					}, j))
				}, i)) })]
			}), block.caption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "border-t border-border px-3 py-2 text-xs text-muted",
				children: block.caption
			}) : null]
		});
		case "figure": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FigureCard, { figure: block.figure });
		case "figures": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "my-6 grid gap-6 sm:grid-cols-2",
			children: block.figures.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FigureCard, {
				figure: f,
				className: "my-0"
			}, f.src))
		});
		case "callout": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
			tone: block.tone,
			title: block.title,
			text: block.text
		});
		default: return null;
	}
}
//#endregion
export { BlockView as t };
