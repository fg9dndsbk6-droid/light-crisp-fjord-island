import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as FileText, l as Download, p as ArrowRight, u as Clock } from "../_libs/lucide-react.mjs";
import { t as chapters } from "./utils-CUWe_u7_.mjs";
import { n as Button, t as AppShell } from "./app-shell-8kP3tobR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CZRTFPkv.js
var import_jsx_runtime = require_jsx_runtime();
var thumbs = [
	"/figures/leuco_p1_img2.jpg",
	"/figures/aguda_p1_img1.jpg",
	"/figures/cronica_p4_img2.jpg",
	"/figures/regen_p3_img1.jpg"
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "px-4 py-10 sm:px-8 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
				children: "Medicina · Fisiopatologia"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 max-w-3xl font-display text-4xl leading-[1.1] tracking-tight text-fg sm:text-5xl",
				children: "Inflamação, defesa celular e reparo tecidual"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-2xl font-serif text-lg leading-relaxed text-ink-soft",
				children: "Apostila de estudo construída a partir das aulas de leucócitos, inflamação aguda, inflamação crônica e cicatrização. Texto didático, figuras originais do material e correlações de prova — para ler no celular ou baixar em PDF."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/capitulo/$slug",
							params: { slug: chapters[0].slug },
							children: ["Começar o capítulo 1", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/apostila-fisiopatologia.pdf",
							download: true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "Baixar PDF"]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "ghost",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/quiz",
							children: "Treinar questões"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-10 grid gap-4 text-sm text-muted sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border bg-surface px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-[11px] uppercase tracking-[0.14em]",
							children: "Professor"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 font-medium text-fg",
							children: "Percicote"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border bg-surface px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-[11px] uppercase tracking-[0.14em]",
							children: "Fontes de aula"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 font-medium text-fg",
							children: "Ross · Robbins & Cotran"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border bg-surface px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-[11px] uppercase tracking-[0.14em]",
							children: "Aulas"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 font-medium text-fg",
							children: "11, 18 e 25 de agosto de 2026"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-14 font-display text-2xl tracking-tight",
				children: "Capítulos"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 grid gap-4",
				children: chapters.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/capitulo/$slug",
					params: { slug: c.slug },
					className: "group grid overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-primary/30 sm:grid-cols-[9.5rem_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-36 overflow-hidden bg-chip sm:h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: thumbs[i],
							alt: "",
							className: "size-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-[1.03]"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-center px-5 py-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[11px] font-semibold uppercase tracking-[0.16em] text-primary",
								children: ["Capítulo ", c.number]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 font-display text-xl text-fg",
								children: c.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: c.subtitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 flex items-center gap-3 text-xs text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3.5" }),
										c.readingMin,
										" min"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-3.5" }),
										c.sections.length,
										" seções"
									]
								})]
							})
						]
					})]
				}, c.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-14 max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl tracking-tight",
					children: "Como estudar"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "mt-4 list-decimal space-y-2 pl-5 font-serif text-ink-soft marker:font-sans marker:text-sm marker:font-semibold marker:text-primary",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Leia o capítulo inteiro; as caixas vermelhas são pegadinhas de prova." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "As figuras saíram do seu material de aula — use a legenda para descrever o que a banca espera." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Quando um conceito da aula estava impreciso, a caixa “Atenção” corrige com a literatura." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Feche com as 30 questões. Errou? A explicação devolve a página mental certa." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Baixe o PDF para anotar no tablet ou imprimir." })
					]
				})]
			})
		]
	}) });
}
//#endregion
export { Home as component };
