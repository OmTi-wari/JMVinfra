import { a as project_4_default, i as project_3_default, n as project_1_default, o as projectsData, r as project_2_default } from "./projectsData-CirWq4L7.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link, v as useParams } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageLayout } from "./PageLayout-DeGFLLUS.mjs";
import { T as ArrowLeft, w as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as ImageLightbox } from "./ImageLightbox-bc1ANLi3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects._slug-Mv6rqtI8.js
var import_jsx_runtime = require_jsx_runtime();
var imageMap = {
	"/src/assets/project-1.jpg": project_1_default,
	"/src/assets/project-2.jpg": project_2_default,
	"/src/assets/project-3.jpg": project_3_default,
	"/src/assets/project-4.jpg": project_4_default
};
function ProjectDetailPage() {
	const { slug } = useParams({ from: "/projects/$slug" });
	const project = projectsData.find((item) => item.slug === slug);
	if (!project) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageLayout, {
		eyebrow: "Project unavailable",
		title: "This project profile isn’t published yet.",
		description: "Browse other active and completed infrastructure work or get in touch for project updates.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/projects",
			className: "inline-flex rounded-full bg-jmv-orange px-5 py-3 text-sm font-semibold text-white",
			children: "Back to projects"
		})
	});
	const related = projectsData.filter((item) => item.slug !== project.slug).slice(0, 3);
	const meta = [
		["Client", project.client],
		["Location", project.location],
		["Role", project.role],
		["Category", project.category],
		["Status", project.status],
		["Year", project.year]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageLayout, {
		eyebrow: `${project.category} · ${project.status}`,
		title: project.title,
		description: project.summary,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-[0.72fr_1.28fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "h-fit rounded-2xl bg-jmv-brown p-7 text-white lg:sticky lg:top-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-jmv-orange",
						children: "Project profile"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-6 space-y-5",
						children: meta.map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-b border-white/10 pb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs uppercase tracking-[0.12em] text-white/50",
								children: label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-sm font-semibold text-white",
								children: value
							})]
						}, label))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-jmv-orange",
							children: "Executive summary"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl font-bold text-jmv-brown",
							children: "Built for the demands of a live infrastructure environment."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-base leading-8 text-jmv-charcoal/70",
							children: project.summary
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-14",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-jmv-orange",
							children: "Scope of execution"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 grid gap-3 sm:grid-cols-2",
							children: project.scopeOfExecution.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-xl border border-border bg-white p-4 text-sm leading-7 text-jmv-charcoal/75",
								children: item
							}, item))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-14",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-jmv-orange",
							children: "Engineering challenges overcome"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-3",
							children: project.engineeringChallenges.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "border-l-2 border-jmv-orange pl-4 text-sm leading-7 text-jmv-charcoal/75",
								children: item
							}, item))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-14",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-jmv-orange",
							children: "Project gallery"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageLightbox, {
								images: project.gallery.map((image) => imageMap[image] ?? image),
								title: project.title
							})
						})]
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16 border-t border-border pt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-jmv-orange",
						children: "Related projects"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl font-bold text-jmv-brown",
						children: "More work in this portfolio."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/projects",
						className: "inline-flex items-center gap-2 text-sm font-semibold text-jmv-orange",
						children: ["All projects ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-7 flex snap-x gap-5 overflow-x-auto pb-4",
					children: related.length ? related.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/projects/$slug",
						params: { slug: item.slug },
						className: "w-[min(80vw,20rem)] shrink-0 snap-start rounded-2xl border border-border bg-white p-5 shadow-soft hover:border-jmv-orange/50",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-jmv-orange",
								children: item.status
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-bold text-jmv-brown",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-jmv-charcoal/65",
								children: item.location
							})
						]
					}, item.slug)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-jmv-charcoal/65",
						children: "[Related Project Profile Pending Verification]"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/projects",
				className: "mt-10 inline-flex items-center gap-2 text-sm font-semibold text-jmv-brown",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back to projects"]
			})
		]
	});
}
var SplitComponent = ProjectDetailPage;
//#endregion
export { SplitComponent as component };
