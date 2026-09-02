import { o as projectsData } from "./projectsData-CirWq4L7.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageLayout } from "./PageLayout-DeGFLLUS.mjs";
import { w as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as Route } from "./projects-1gE7fwW_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-C0o8ZhSD.js
var import_jsx_runtime = require_jsx_runtime();
var categories = [
	"All",
	"Road",
	"Airport",
	"Railway",
	"Urban Infra",
	"PWD",
	"BMC",
	"AMC",
	"Schools",
	"Turnkey"
];
var statuses = [
	"All",
	"Ongoing",
	"Completed",
	"Upcoming"
];
function ProjectsPage() {
	const search = Route.useSearch();
	const category = search.category ?? "All";
	const status = search.status ?? "All";
	const visibleProjects = projectsData.filter((project) => (category === "All" || project.category === category) && (status === "All" || project.status === status));
	const filterButton = (active) => active ? "border border-[#E65100] bg-[#E65100] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white" : "border border-[#E5E7EB] bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2C1D11]/70 hover:border-[#E65100]/40 hover:text-[#E65100]";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageLayout, {
		eyebrow: "Project portfolio",
		title: "Delivering infrastructure with measurable impact.",
		description: "Explore JMV project profiles by sector and delivery status. Project records remain structured for verified scope, client, and performance updates.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-[#E5E7EB] bg-white p-6 md:p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E65100]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 bg-[#E65100]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Filter by category" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: categories.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/projects",
						search: {
							category: item,
							status
						},
						className: filterButton(category === item),
						children: item
					}, item))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-[#2C1D11] bg-[#2C1D11] p-6 text-white md:p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E65100]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 bg-[#E65100]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Filter by status" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: statuses.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/projects",
						search: {
							category,
							status: item
						},
						className: filterButton(status === item),
						children: item
					}, item))
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 md:grid-cols-2 xl:grid-cols-3",
			children: visibleProjects.length ? visibleProjects.map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: ["group border border-[#E5E7EB] bg-white transition hover:-translate-y-1 hover:border-[#E65100]/40", index % 3 === 1 ? "xl:col-span-2" : ""].join(" "),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden bg-[#2C1D11]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: project.gallery[0],
							alt: project.title,
							className: "h-52 w-full object-cover opacity-85 transition duration-500 group-hover:scale-[1.02]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[#2C1D11]/80 via-[#2C1D11]/20 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute left-4 top-4 flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 bg-[#E65100]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: project.category })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute right-4 top-4 border border-white/20 bg-[#2C1D11]/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80",
							children: project.status
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 md:p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3 border-b border-[#E5E7EB] pb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E65100]",
								children: project.category
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] uppercase tracking-[0.18em] text-[#18181B]/60",
								children: project.year
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 text-2xl font-bold text-[#2C1D11]",
							children: project.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-[#18181B]/65",
							children: project.location
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-sm leading-7 text-[#18181B]/75",
							children: project.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex flex-wrap gap-2",
							children: project.metrics.map((metric) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "border border-[#E5E7EB] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-[#2C1D11]/70",
								children: metric
							}, metric))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/projects/$slug",
							params: { slug: project.slug },
							className: "mt-7 inline-flex items-center gap-2 border border-[#2C1D11] bg-[#FAFAFA] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2C1D11] transition hover:border-[#E65100] hover:text-[#E65100]",
							children: ["View project", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
						})
					]
				})]
			}, project.slug)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:col-span-2 xl:col-span-3 border border-[#E5E7EB] bg-white p-8 text-sm text-[#18181B]/70",
				children: "No project profiles match these filters yet."
			})
		})]
	});
}
//#endregion
export { ProjectsPage as component };
