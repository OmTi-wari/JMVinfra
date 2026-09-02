import { s as servicesData } from "./projectsData-CirWq4L7.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { f as Outlet, g as Link, l as useLocation } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageLayout } from "./PageLayout-DeGFLLUS.mjs";
import { C as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-CI0syh_i.js
var import_jsx_runtime = require_jsx_runtime();
function ServiceCard({ service }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group flex h-full flex-col overflow-hidden border border-[#E5E7EB] bg-white transition-all duration-300 hover:-translate-y-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden border-b border-[#E5E7EB] bg-[#2C1D11]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: service.heroImage,
					alt: service.title,
					className: "h-52 w-full object-cover opacity-85 transition duration-500 group-hover:scale-[1.02]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[#2C1D11]/80 via-[#2C1D11]/20 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute left-5 top-5 flex items-center gap-2 border border-white/15 bg-[#2C1D11]/60 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 bg-[#E65100]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: service.category ?? "Service" })]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E65100]",
						children: service.eyebrow
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 text-[#E65100] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-5 text-2xl font-bold text-[#2C1D11]",
					children: service.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-7 text-[#18181B]/75",
					children: service.shortDescription
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 border-t border-[#E5E7EB] pt-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E65100]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 bg-[#E65100]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Core delivery" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-3",
						children: (service.highlights ?? []).map((highlight, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3 border-l border-[#E5E7EB] pl-3 text-sm leading-6 text-[#18181B]/75",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[10px] uppercase tracking-[0.14em] text-[#E65100]",
								children: String(index + 1).padStart(2, "0")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: highlight })]
						}, highlight))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-auto pt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/services/$slug",
						params: { slug: service.slug ?? service.id },
						className: "inline-flex items-center gap-2 border border-[#2C1D11] bg-[#FAFAFA] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2C1D11] transition hover:border-[#E65100] hover:text-[#E65100]",
						children: ["Explore Service", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })]
					})
				})
			]
		})]
	});
}
function ServicesPage() {
	if (useLocation().pathname !== "/services") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageLayout, {
		eyebrow: "Business areas",
		title: "Engineering capability across critical infrastructure sectors.",
		description: "We support public works, transit, civil infrastructure, municipal delivery, and bespoke turnkey execution with precision and accountability.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-[#E5E7EB] bg-white p-6 md:p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E65100]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 bg-[#E65100]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Capability portfolio" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-xl text-base leading-7 text-[#18181B]/75 md:text-lg",
					children: "We engineer dependable delivery across civil works, transit, aviation, and municipal environments with a strong emphasis on technical coordination, operational clarity, and project continuity."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-[#2C1D11] bg-[#2C1D11] p-6 text-white md:p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E65100]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 bg-[#E65100]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Execution model" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-2xl font-bold tracking-[-0.04em] text-white",
					children: "Precision-led delivery for live infrastructure conditions."
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 md:grid-cols-2 xl:grid-cols-3",
			children: servicesData.map((service, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: index === 1 ? "xl:col-span-2" : "",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, { service })
			}, service.slug ?? service.id))
		})]
	});
}
var SplitComponent = ServicesPage;
//#endregion
export { SplitComponent as component };
