import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageLayout } from "./PageLayout-DeGFLLUS.mjs";
import { w as ArrowRight, x as CalendarDays } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/news-BnqieKEQ.js
var import_jsx_runtime = require_jsx_runtime();
var news = [
	{
		type: "Press release",
		date: "[Publication date]",
		title: "JMV Engineering Infra expands its project delivery capability",
		detail: "[Verified press release summary] A structured space for company announcements, capability updates, and stakeholder news."
	},
	{
		type: "Project update",
		date: "[Publication date]",
		title: "Infrastructure delivery update from active project environments",
		detail: "[Verified project update] Progress, safety, and execution information will be published here as it is confirmed."
	},
	{
		type: "Industry note",
		date: "[Publication date]",
		title: "Building stronger systems for long-term infrastructure performance",
		detail: "[Verified editorial content] Perspectives on planning, quality, coordination, and responsible project delivery."
	}
];
function NewsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageLayout, {
		eyebrow: "News & media",
		title: "Updates from our work, people, and infrastructure focus.",
		description: "Corporate news, project updates, and press-ready stories from JMV Engineering Infra.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 md:grid-cols-3",
			children: news.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "group rounded-2xl border border-border bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:border-jmv-orange/40",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-jmv-orange",
							children: item.type
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-4xl font-extrabold tracking-[-0.08em] text-jmv-orange/20",
							children: ["0", index + 1]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-8 text-2xl font-bold text-jmv-brown",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-7 text-jmv-charcoal/70",
						children: item.detail
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-center gap-2 border-t border-border pt-5 text-xs text-jmv-charcoal/60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-4 w-4 text-jmv-orange" }), item.date]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-jmv-orange",
						children: ["Read update ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })]
					})
				]
			}, item.title))
		})
	});
}
//#endregion
export { NewsPage as component };
