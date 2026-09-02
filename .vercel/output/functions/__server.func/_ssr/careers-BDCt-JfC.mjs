import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageLayout } from "./PageLayout-DeGFLLUS.mjs";
import { b as Check, t as X, w as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/careers-BDCt-JfC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var departments = [
	"All",
	"Engineering",
	"Site Operations",
	"Project Management",
	"Quality/Safety"
];
var jobs = [
	{
		title: "Site Engineer",
		department: "Engineering",
		location: "Mumbai / Ahmedabad",
		detail: "Support planning, coordination, site records, and execution quality across active infrastructure packages."
	},
	{
		title: "Project Coordinator",
		department: "Project Management",
		location: "Mumbai / Ahmedabad",
		detail: "Help connect schedules, stakeholders, reporting, and delivery decisions across project teams."
	},
	{
		title: "Site Operations Lead",
		department: "Site Operations",
		location: "Project-based",
		detail: "Coordinate site readiness, field resources, safe work planning, and daily progress controls."
	},
	{
		title: "QA / HSE Officer",
		department: "Quality/Safety",
		location: "Project-based",
		detail: "Support inspection, quality records, safety briefings, and compliance processes on site."
	}
];
function CareersPage() {
	const [department, setDepartment] = (0, import_react.useState)("All");
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [sent, setSent] = (0, import_react.useState)(false);
	const visible = jobs.filter((job) => department === "All" || job.department === department);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageLayout, {
		eyebrow: "Careers // project teams",
		title: "Build with a team focused on reliable infrastructure delivery.",
		description: "We are looking for motivated professionals who value field execution, safety, technical rigor, and disciplined project delivery.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-10 grid gap-5 border-t border-neutral-200 pt-10 md:grid-cols-3",
				children: [
					["Learn in the field.", "Work close to real infrastructure, experienced teams, and practical delivery decisions."],
					["Own the outcome.", "Bring care and accountability to work that affects communities and project partners."],
					["Grow with purpose.", "Build capability across engineering, safety, coordination, and project leadership."]
				].map(([title, copy], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `border-t border-neutral-200 pt-5 ${index > 0 ? "md:border-l md:border-t-0 md:pl-6 md:pt-0" : ""}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E65100]",
							children: ["0", index + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-2xl font-bold tracking-[-0.04em] text-[#2C1D11]",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-7 text-[#18181B]/70",
							children: copy
						})
					]
				}, title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-8 flex flex-wrap gap-2",
					children: departments.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setDepartment(item),
						className: department === item ? "border border-[#E65100] bg-[#E65100] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white" : "border border-neutral-200 bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#2C1D11]/70",
						children: item
					}, item))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 md:grid-cols-2",
					children: visible.map((job) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "border border-neutral-200 bg-white p-6 md:p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-4 border-b border-neutral-200 pb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E65100]",
									children: job.department
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2C1D11]/60",
									children: job.location
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-5 text-2xl font-bold tracking-[-0.04em] text-[#2C1D11]",
								children: job.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-7 text-[#18181B]/70",
								children: job.detail
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => {
									setSelected(job);
									setSent(false);
								},
								className: "mt-6 inline-flex items-center gap-2 border border-[#2C1D11] bg-[#FAFAFA] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2C1D11]",
								children: ["View role", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
							})
						]
					}, job.title))
				})]
			}),
			selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-[#2C1D11]/80 p-6",
				role: "dialog",
				"aria-modal": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative max-h-[90vh] w-full max-w-lg overflow-y-auto border border-neutral-200 bg-white p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setSelected(null),
							className: "absolute right-5 top-5 border border-neutral-200 bg-[#F3F4F6] p-2 text-[#2C1D11]",
							"aria-label": "Close application",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E65100]",
							children: "Application"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-3xl font-bold tracking-[-0.05em] text-[#2C1D11]",
							children: selected.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-[#18181B]/60",
							children: [
								selected.department,
								" · ",
								selected.location
							]
						}),
						sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 border border-emerald-200 bg-emerald-50 p-5 text-sm leading-7 text-emerald-800",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mb-2 h-5 w-5" }), "Application received. Our team will review your details."]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "mt-8 space-y-5",
							onSubmit: (event) => {
								event.preventDefault();
								setSent(true);
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block text-sm font-semibold text-[#2C1D11]",
									children: ["Name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										name: "name",
										className: "mt-2 w-full border border-neutral-200 bg-[#FAFAFA] px-4 py-3 text-sm font-normal outline-none focus:border-[#E65100]"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block text-sm font-semibold text-[#2C1D11]",
									children: ["Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										type: "email",
										name: "email",
										className: "mt-2 w-full border border-neutral-200 bg-[#FAFAFA] px-4 py-3 text-sm font-normal outline-none focus:border-[#E65100]"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block text-sm font-semibold text-[#2C1D11]",
									children: ["Experience", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										name: "experience",
										placeholder: "Years / relevant background",
										className: "mt-2 w-full border border-neutral-200 bg-[#FAFAFA] px-4 py-3 text-sm font-normal outline-none focus:border-[#E65100]"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block text-sm font-semibold text-[#2C1D11]",
									children: ["Resume upload simulation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										type: "file",
										name: "resume",
										className: "mt-2 w-full border border-neutral-200 bg-[#F3F4F6] px-4 py-3 text-sm font-normal"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "w-full bg-[#E65100] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white",
									children: "Submit application"
								})
							]
						})
					]
				})
			}) : null
		]
	});
}
var SplitComponent = CareersPage;
//#endregion
export { SplitComponent as component };
