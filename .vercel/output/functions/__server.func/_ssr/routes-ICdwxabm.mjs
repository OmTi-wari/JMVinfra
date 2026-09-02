import { r as __toESM } from "../_runtime.mjs";
import { o as projectsData, s as servicesData, t as hero_default } from "./projectsData-CirWq4L7.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as ArrowUpRight, S as Building2, c as Plane, g as HardHat, i as TrainFront, m as Landmark, n as Wrench, o as School, s as Route, w as ArrowRight } from "../_libs/lucide-react.mjs";
import { i as stats, n as contact } from "./site-B1va556S.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-ICdwxabm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var about_default = "/assets/about-DdzPrH_T.jpg";
function Reveal({ children, className, delay = 0, as = "div" }) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	const Tag = as;
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.disconnect();
				}
			});
		}, {
			threshold: .12,
			rootMargin: "0px 0px -60px 0px"
		});
		observer.observe(el);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		"data-visible": visible,
		style: { transitionDelay: `${delay}ms` },
		className: cn("reveal", className),
		children
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-jmv-orange",
						children: "Who we are"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-jmv-brown md:text-[3.2rem]",
						children: ["Engineering ideas", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block",
							children: "into built reality."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-5 text-base leading-8 text-jmv-charcoal/70",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "JMV Engineering Infra delivers dependable construction and infrastructure outcomes through disciplined planning, rigorous site execution, and a practical understanding of what modern projects demand." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "From public roads and civic works to turnkey infrastructure packages, we work with a strong focus on safety, integrity, quality control, and long-term performance." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 h-px w-28 bg-jmv-orange",
						"aria-hidden": "true"
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 120,
				className: "relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden border border-jmv-orange/25 bg-white p-3 shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: about_default,
							alt: "Infrastructure construction site with structural steel and concrete support",
							width: 1200,
							height: 1408,
							loading: "lazy",
							className: "aspect-[4/5] w-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": "true",
							className: "absolute inset-4 border border-jmv-orange/50"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": "true",
							className: "absolute -bottom-5 -left-5 hidden h-20 w-20 border-b-2 border-l-2 border-jmv-orange sm:block"
						})
					]
				})
			})]
		})
	});
}
function SectionHeading({ eyebrow, title, subtitle, align = "left", className, id }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("max-w-2xl", align === "center" && "mx-auto text-center", className),
		children: [
			eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-accent",
				children: eyebrow
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id,
				className: "mt-4 text-3xl font-extrabold leading-[1.1] text-primary sm:text-4xl md:text-[2.75rem]",
				children: title
			}),
			subtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-base leading-relaxed text-muted-foreground",
				children: subtitle
			}) : null
		]
	});
}
var fields = [
	{
		id: "name",
		label: "Name",
		type: "text",
		required: true,
		autoComplete: "name"
	},
	{
		id: "company",
		label: "Company",
		type: "text",
		required: false,
		autoComplete: "organization"
	},
	{
		id: "email",
		label: "Email",
		type: "email",
		required: true,
		autoComplete: "email"
	},
	{
		id: "phone",
		label: "Phone",
		type: "tel",
		required: false,
		autoComplete: "tel"
	},
	{
		id: "requirement",
		label: "Project / Requirement",
		type: "text",
		required: false
	}
];
var details = [
	{
		label: "Phone",
		value: contact.phone
	},
	{
		label: "Email",
		value: contact.email
	},
	{
		label: "Office Address",
		value: contact.address
	},
	{
		label: "WhatsApp",
		value: contact.whatsapp
	}
];
function Contact() {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "border-t border-border bg-concrete/50 py-24 lg:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Contact",
					title: "Let's Build Something Strong Together.",
					subtitle: "Share your project details and our team will get back to you to discuss scope, requirements and the right approach."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-12 space-y-6",
					children: details.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-border pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "eyebrow text-muted-foreground",
							children: item.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 text-sm font-medium text-primary",
							children: item.value
						})]
					}, item.label))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "border border-border bg-card p-8 sm:p-10",
						onSubmit: (e) => {
							e.preventDefault();
							setSent(true);
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-6 sm:grid-cols-2",
								children: [fields.map((field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: field.id === "requirement" ? "sm:col-span-2" : void 0,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: field.id,
										className: "block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground",
										children: field.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: field.id,
										name: field.id,
										type: field.type,
										required: field.required,
										suppressHydrationWarning: true,
										autoComplete: "autoComplete" in field ? field.autoComplete : void 0,
										className: "mt-2 w-full border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
									})]
								}, field.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "sm:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "message",
										className: "block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground",
										children: "Message"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										id: "message",
										name: "message",
										rows: 5,
										suppressHydrationWarning: true,
										className: "mt-2 w-full resize-none border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								suppressHydrationWarning: true,
								className: "mt-8 w-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent sm:w-auto",
								children: "Send Enquiry"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								"aria-live": "polite",
								className: "mt-4 text-sm text-muted-foreground",
								children: sent ? "Thank you — your enquiry has been recorded. Connect a backend to receive submissions by email." : ""
							})
						]
					})
				})]
			})
		})
	});
}
function CtaBanner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-[2rem] border border-jmv-orange/25 bg-gradient-to-r from-jmv-orange to-jmv-orange-burnt px-8 py-12 text-white shadow-lift sm:px-12 lg:flex lg:items-center lg:justify-between lg:px-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-white/75",
						children: "Let’s build"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl",
						children: "Need a dependable infrastructure partner?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base leading-relaxed text-white/80",
						children: "Share your project scope, timing and location to explore the right delivery model for your requirements."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#contact",
				className: "mt-8 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white px-6 py-3 text-sm font-semibold text-jmv-orange transition-colors hover:bg-jmv-grey lg:mt-0",
				children: ["GET IN TOUCH", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
					className: "h-4 w-4",
					strokeWidth: 2
				})]
			})]
		}) })
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative isolate min-h-[92vh] overflow-hidden bg-[#2C1D11]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_default,
				alt: "Bridge and infrastructure construction site with structural engineering framework",
				width: 1920,
				height: 1280,
				fetchPriority: "high",
				className: "absolute inset-0 -z-20 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(230,81,0,0.42),transparent_30%),linear-gradient(90deg,rgba(27,18,13,0.9)_0%,rgba(27,18,13,0.74)_42%,rgba(27,18,13,0.4)_100%)]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:48px_48px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-y-0 right-0 hidden w-1/3 border-l border-white/10 bg-white/[0.02] lg:block" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-6 pb-20 pt-32 sm:justify-center lg:px-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E65100]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 bg-[#E65100]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "JMV ENGINEERING INFRA" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 text-[2.6rem] font-extrabold leading-[0.96] tracking-[-0.05em] text-white sm:text-6xl lg:text-[5.2rem]",
							children: ["BUILDING TODAY.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 block text-white/85",
								children: "STRONGER TOMORROW."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-7 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg",
							children: "Engineering, construction and turnkey infrastructure solutions built around quality, safety and dependable execution."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#projects",
								className: "border border-[#E65100] bg-[#E65100] px-7 py-4 text-center text-sm font-semibold tracking-[0.12em] text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[#2C1D11]",
								children: "EXPLORE OUR WORK"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								className: "border border-white/25 bg-transparent px-7 py-4 text-center text-sm font-semibold tracking-[0.12em] text-white transition-colors duration-200 hover:bg-white/10",
								children: "GET IN TOUCH"
							})]
						})
					]
				})
			})
		]
	});
}
var tabs = [
	"All",
	"Road",
	"Airport",
	"Railway",
	"Urban"
];
function Projects() {
	const [activeTab, setActiveTab] = (0, import_react.useState)("All");
	const visibleProjects = activeTab === "All" ? projectsData : projectsData.filter((project) => project.category === activeTab);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "projects",
		className: "bg-jmv-grey py-24 lg:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-jmv-orange",
						children: "Featured projects"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-jmv-brown md:text-[3rem]",
						children: "Work shaped by scale, complexity, and accountability."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						suppressHydrationWarning: true,
						onClick: () => setActiveTab(tab),
						className: activeTab === tab ? "rounded-full bg-jmv-orange px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white" : "rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-jmv-brown/75",
						children: tab
					}, tab))
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 md:grid-cols-2",
				children: visibleProjects.map((project, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 70,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-b border-border bg-jmv-grey p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-jmv-orange",
										children: project.category
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-medium text-jmv-charcoal/70",
										children: project.status
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-2xl font-bold text-jmv-brown",
									children: project.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-jmv-charcoal/65",
									children: project.location
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-7 text-jmv-charcoal/70",
								children: project.summary
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 flex flex-wrap gap-2",
								children: project.metrics.map((metric) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full border border-border bg-jmv-grey px-3 py-1 text-xs font-medium text-jmv-charcoal/75",
									children: metric
								}, metric))
							})]
						})]
					})
				}, project.slug))
			})]
		})
	});
}
var icons = {
	"road-construction": Route,
	"airport-epc": Plane,
	"railway-projects": TrainFront,
	mmrd: Landmark,
	"pwd-projects": Building2,
	"bmc-projects": HardHat,
	"amc-projects": Wrench,
	"school-projects": School,
	"turnkey-solutions": ArrowUpRight
};
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "services",
		className: "mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-jmv-orange",
				children: "What we build"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-jmv-brown md:text-[3rem]",
				children: "Infrastructure solutions designed for reliability, safety and performance."
			})]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3",
			children: servicesData.map((service, i) => {
				const Icon = icons[service.slug] ?? Building2;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					as: "li",
					delay: i * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/services/$slug",
						params: { slug: service.slug },
						className: "group block h-full rounded-[1.75rem] border border-border bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-jmv-orange/40 hover:shadow-lift",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "h-full",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-jmv-grey text-jmv-orange",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: "h-5 w-5",
											strokeWidth: 1.8,
											"aria-hidden": "true"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full border border-border bg-jmv-grey px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-jmv-charcoal/65",
										children: service.category
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 text-2xl font-bold text-jmv-brown",
									children: service.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm leading-7 text-jmv-charcoal/70",
									children: service.shortDescription
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex items-center justify-between border-t border-border pt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-semibold uppercase tracking-[0.12em] text-jmv-orange",
										children: "View scope"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 text-jmv-orange transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
								})
							]
						})
					})
				}, service.slug);
			})
		})]
	});
}
function Statement() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-label": "Locations and presence",
		className: "bg-jmv-brown py-24 text-white lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-jmv-orange",
						children: "Locations & presence"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-white md:text-[3rem]",
						children: "Project-ready operations across India’s infrastructure corridors."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/70",
					children: "Mumbai | Ahmedabad"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-6 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[1.75rem] border border-white/10 bg-white/5 p-8 shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-jmv-orange",
							children: "Mumbai"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-3xl font-bold",
							children: "Urban infrastructure leadership"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-base leading-8 text-white/75",
							children: "Strategic project coordination for large-scale civil works, urban networks, and public delivery programs spanning high-velocity infrastructure environments."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[1.75rem] border border-white/10 bg-white/5 p-8 shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-jmv-orange",
							children: "Ahmedabad"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-3xl font-bold",
							children: "Regional execution capability"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-base leading-8 text-white/75",
							children: "Operational reach across civic, institutional, and infrastructure work requiring reliable planning, responsive execution, and strong site coordination."
						})
					]
				})]
			})]
		})
	});
}
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-label": "Company highlights",
		className: "border-y border-border bg-concrete/60",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6 py-14 lg:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4",
				children: stats.map((stat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-l-2 border-accent/70 pl-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "sr-only",
							children: stat.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-3xl font-extrabold tracking-tight text-primary sm:text-4xl",
							children: stat.value
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 block text-sm font-medium text-muted-foreground",
							children: stat.label
						})] })]
					})
				}, stat.label))
			})
		})
	});
}
function WhyChooseUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-jmv-brown py-20 lg:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-8 md:grid-cols-2 xl:grid-cols-4",
				children: [
					{
						id: "01",
						label: "INTEGRITY",
						detail: "Transparent delivery and accountable project leadership."
					},
					{
						id: "02",
						label: "QUALITY",
						detail: "Standards-driven execution across every site and phase."
					},
					{
						id: "03",
						label: "SAFETY",
						detail: "Operational discipline that protects people, sites and outcomes."
					},
					{
						id: "04",
						label: "RESULTS",
						detail: "Practical infrastructure solutions focused on tangible progress."
					}
				].map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-l border-white/15 pl-5 text-white",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.16em] text-jmv-orange",
							children: value.id
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-2xl font-bold tracking-[-0.03em]",
							children: value.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-7 text-white/70",
							children: value.detail
						})
					]
				}, value.id))
			})
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyChooseUs, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Statement, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBanner, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
	] });
}
//#endregion
export { Index as component };
