import { o as projectsData, s as servicesData } from "./projectsData-CirWq4L7.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link, l as useLocation } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageLayout-DeGFLLUS.js
var import_jsx_runtime = require_jsx_runtime();
var labelMap = {
	about: "About",
	services: "Services",
	projects: "Projects",
	capabilities: "Capabilities",
	people: "People",
	locations: "Locations",
	news: "News",
	gallery: "Gallery",
	careers: "Careers",
	contact: "Contact"
};
function toTitleCase(value) {
	return value.split("-").filter(Boolean).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
function Breadcrumbs() {
	const pathname = useLocation().pathname;
	if (pathname === "/") return null;
	const segments = pathname.split("/").filter(Boolean);
	const crumbs = [{
		label: "Home",
		to: "/"
	}];
	let currentPath = "";
	segments.forEach((segment) => {
		currentPath += `/${segment}`;
		let label = labelMap[segment] ?? toTitleCase(segment);
		if (segment === "services" && segments[1]) {
			const slug = segments[1];
			const service = servicesData.find((item) => item.slug === slug);
			if (service) label = service.title;
		}
		if (segment === "projects" && segments[1]) {
			const project = projectsData.find((item) => item.slug === segments[1]);
			if (project) label = project.title;
		}
		crumbs.push({
			label,
			to: currentPath
		});
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "Breadcrumb",
		className: "mb-2 text-sm text-jmv-charcoal/60",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "flex flex-wrap items-center gap-2",
			children: crumbs.map((crumb, index) => {
				const isLast = index === crumbs.length - 1;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-2",
					children: [index > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-jmv-charcoal/35",
						children: "/"
					}), isLast ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium text-jmv-brown",
						children: crumb.label
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: crumb.to,
						className: "transition-colors hover:text-jmv-orange",
						children: crumb.label
					})]
				}, `${crumb.to}-${index}`);
			})
		})
	});
}
function PageLayout({ eyebrow, title, description, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-[#FAFAFA] text-[#1A1A1A]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate overflow-hidden bg-[#2C1D11] text-white",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80",
						alt: "Infrastructure construction and engineering",
						className: "h-full w-full object-cover opacity-30"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(230,81,0,0.42),_transparent_30%)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-[#2C1D11]/90 via-[#2C1D11]/80 to-[#2C1D11]/50" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-y-0 right-0 hidden w-1/3 border-l border-white/10 bg-white/[0.02] lg:block" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:pb-28 lg:pt-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E65100]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 bg-[#E65100]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: eyebrow })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-6 text-4xl font-extrabold tracking-[-0.06em] text-white md:text-6xl lg:text-7xl",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg",
							children: description
						})
					]
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, {}), children]
		})]
	});
}
//#endregion
export { PageLayout as t };
