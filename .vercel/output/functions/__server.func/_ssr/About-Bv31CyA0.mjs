import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageLayout } from "./PageLayout-DeGFLLUS.mjs";
import { w as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/framer-motion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/About-Bv31CyA0.js
var import_jsx_runtime = require_jsx_runtime();
var partnerProfiles = [{
	name: "Santosh Omprakash Pandey",
	designation: "Partner & Executive Director",
	credentials: "B.E. (Civil), PGDM",
	focus: "Engineering Direction, Project Planning, Turnkey EPC Execution & Strategic Operations.",
	image: "/assets/santosh-CYLuqF80.jpeg"
}, {
	name: "Pushpa Omprakash Pandey",
	designation: "Partner & Administrative Director",
	credentials: "Executive Partner",
	focus: "Corporate Planning, Financial Governance, Stakeholder Management & Operational Strategy.",
	image: "/assets/Pushpa-B4SBIBLy.png"
}];
var leadershipMembers = [
	{
		name: "Chief Project Engineer - Infrastructure",
		designation: "Infrastructure Strategy",
		credentials: "Project Engineering",
		focus: "Roadways, rail systems, and integrated execution coordination.",
		image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80"
	},
	{
		name: "Head of Safety & Quality Control",
		designation: "Safety & Assurance",
		credentials: "Compliance Leadership",
		focus: "Quality control, site audits, safety systems, and process compliance.",
		image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=80"
	},
	{
		name: "Senior Site Operations Manager",
		designation: "Field Execution",
		credentials: "Operations Control",
		focus: "Mobilization planning, resource deployment, and site productivity.",
		image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80"
	}
];
var metrics = [
	{
		label: "SECTORS SERVED",
		value: "Roadways, Airport EPC, Rail, Urban Infra"
	},
	{
		label: "CREDENTIALS",
		value: "B.E. Civil & PGDM Led Leadership"
	},
	{
		label: "FOOTPRINT",
		value: "Mumbai & Ahmedabad Operations"
	},
	{
		label: "GOVERNANCE",
		value: "PWD, BMC, AMC & MMRDA Alignment"
	}
];
var pillars = [
	{
		id: "01",
		title: "VISION",
		text: "Engineering progress built on unyielding structural integrity and sustainable infrastructure."
	},
	{
		id: "02",
		title: "MISSION",
		text: "Executing complex civil, EPC, and turnkey projects with absolute timeline and safety compliance."
	},
	{
		id: "03",
		title: "SAFETY POLICY",
		text: "Strict Zero-Harm site culture with mandatory daily toolbox talks and hazard controls."
	},
	{
		id: "04",
		title: "QUALITY ASSURANCE",
		text: "In-situ material testing, bitumen and concrete diagnostics, and continuous site audits."
	}
];
var fadeUp = {
	initial: {
		opacity: 0,
		y: 20
	},
	whileInView: {
		opacity: 1,
		y: 0
	},
	viewport: {
		once: true,
		amount: .2
	},
	transition: {
		duration: .5,
		ease: "easeOut"
	}
};
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageLayout, {
		eyebrow: "CORPORATE IDENTITY // OVERVIEW",
		title: "Built on Engineering Discipline & Trusted Execution.",
		description: "JMV Engineering Infra delivers dependable civil and EPC infrastructure solutions across roads, rail, airport, and urban development programmes.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.section, {
				...fadeUp,
				className: "border border-neutral-200 bg-[#FAFAFA]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid divide-y divide-neutral-200 md:grid-cols-4 md:divide-x md:divide-y-0",
					children: metrics.map((metric) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-5 py-6 md:px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2C1D11]/60",
							children: metric.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-6 text-[#18181B]",
							children: metric.value
						})]
					}, metric.label))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
				...fadeUp,
				className: "mt-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 max-w-3xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-[#E65100]",
						children: "Principles"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl font-extrabold tracking-[-0.05em] text-[#2C1D11] md:text-4xl",
						children: "Principles Driving Infrastructure Realities"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 border-t border-neutral-200 md:grid-cols-2 xl:grid-cols-4",
					children: pillars.map((pillar, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `border-neutral-200 pt-6 ${index === 0 ? "xl:border-l-0" : "xl:border-l"} xl:pl-6`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E65100]",
							children: [
								pillar.id,
								" / ",
								pillar.title
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-base leading-7 text-[#18181B]",
							children: pillar.text
						})]
					}, pillar.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
				...fadeUp,
				className: "mt-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-10 max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-[#E65100]",
							children: "Leadership & partners"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-3xl font-extrabold tracking-[-0.05em] text-[#2C1D11] md:text-4xl",
							children: "Company Leadership & Partners"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-base leading-7 text-[#18181B]/70",
							children: "Guided by Civil Engineering Expertise & Strategic Governance."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-8 lg:grid-cols-2",
					children: partnerProfiles.map((partner) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
						...fadeUp,
						className: "border border-neutral-200 bg-white",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-b border-neutral-200 px-5 py-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E65100]",
								children: "Partner profile"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid md:grid-cols-[0.92fr_1.08fr]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "overflow-hidden border-2 border-[#E65100] bg-[#F3F4F6] p-1",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: partner.image,
										alt: partner.name,
										className: "h-[420px] w-full object-cover transition duration-500 hover:scale-105",
										loading: "lazy"
									})
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col justify-center border-t border-neutral-200 p-6 md:border-l md:border-t-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-2xl font-extrabold tracking-[-0.05em] text-[#2C1D11] md:text-[2.1rem]",
										children: partner.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 border-y border-neutral-200 py-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2C1D11]/60",
											children: partner.designation
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-3 flex flex-wrap gap-2",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "border border-neutral-200 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2C1D11]",
												children: partner.credentials
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2C1D11]/60",
											children: "Key responsibilities"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-3 space-y-2 text-sm leading-6 text-[#18181B]/80",
											children: partner.focus.split(",").map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "border-b border-neutral-200 pb-2 last:border-b-0 last:pb-0",
												children: item.trim()
											}, item))
										})]
									})
								]
							})]
						})]
					}, partner.name))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
				...fadeUp,
				className: "mt-24 bg-[#2C1D11] px-6 py-12 text-[#FAFAFA] md:px-10 md:py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-[#E65100]",
						children: "Founders' statement"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
						className: "mt-6 max-w-5xl text-2xl font-medium leading-relaxed tracking-[-0.04em] text-[#FAFAFA] md:text-4xl",
						children: "\"Engineering progress is built on unyielding quality, absolute safety, and execution integrity.\""
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-4xl text-base leading-8 text-[#FAFAFA]/75 md:text-lg",
						children: "By combining technical civil engineering expertise with strategic management, JMV ensures each project across roads, railways, airports, and municipal infrastructure is delivered to specification, on schedule, and with accountable governance from site mobilisation to completion."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
				...fadeUp,
				className: "mt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-[#E65100]",
							children: "Operations"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl font-extrabold tracking-[-0.05em] text-[#2C1D11] md:text-4xl",
							children: "Engineering & Site Execution Division"
						})] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-5 md:grid-cols-3",
						children: leadershipMembers.map((member) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
							...fadeUp,
							className: "border border-neutral-200 bg-white hover:-translate-y-1 transition-transform",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden border-b border-neutral-200 bg-[#F3F4F6]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: member.image,
									alt: member.name,
									className: "h-72 w-full object-cover transition duration-500 hover:scale-105",
									loading: "lazy"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E65100]",
										children: member.designation
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 text-2xl font-bold tracking-[-0.04em] text-[#2C1D11]",
										children: member.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 border-t border-neutral-200 pt-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2C1D11]/60",
											children: member.credentials
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-sm leading-7 text-[#18181B]/75",
										children: member.focus
									})
								]
							})]
						}, member.name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex items-center justify-between gap-4 border border-neutral-200 bg-[#F3F4F6] px-5 py-4 text-sm text-[#2C1D11]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: "Expanding our engineering teams on site"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/careers",
							className: "inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E65100]",
							children: ["Explore Opportunities", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { AboutPage as t };
