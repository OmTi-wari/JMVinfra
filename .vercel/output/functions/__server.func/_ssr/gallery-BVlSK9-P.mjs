import { r as __toESM } from "../_runtime.mjs";
import { a as project_4_default, i as project_3_default, n as project_1_default, r as project_2_default } from "./projectsData-CirWq4L7.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageLayout } from "./PageLayout-DeGFLLUS.mjs";
import { t as ImageLightbox } from "./ImageLightbox-bc1ANLi3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-BVlSK9-P.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var categories = [
	"All",
	"Project Sites",
	"Machinery",
	"Corporate Events"
];
var images = [
	{
		src: project_1_default,
		title: "Project site progress",
		category: "Project Sites"
	},
	{
		src: project_2_default,
		title: "Road infrastructure works",
		category: "Project Sites"
	},
	{
		src: project_3_default,
		title: "Built environment delivery",
		category: "Corporate Events"
	},
	{
		src: project_4_default,
		title: "Infrastructure machinery",
		category: "Machinery"
	}
];
function GalleryPage() {
	const [category, setCategory] = (0, import_react.useState)("All");
	const visible = images.filter((item) => category === "All" || item.category === category);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageLayout, {
		eyebrow: "Media gallery",
		title: "A visual view of infrastructure in motion.",
		description: "Browse project sites, machinery, and corporate moments from the JMV delivery environment.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: categories.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setCategory(item),
					className: category === item ? "rounded-full bg-jmv-orange px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-white" : "rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-jmv-brown/70",
					children: item
				}, item))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageLightbox, {
					images: visible.map((item) => item.src),
					title: "JMV media gallery"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: visible.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm font-semibold text-jmv-brown",
					children: [item.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-xs font-normal text-jmv-charcoal/60",
						children: item.category
					})]
				}, item.src))
			})
		]
	});
}
//#endregion
export { GalleryPage as component };
