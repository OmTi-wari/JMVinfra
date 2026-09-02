import { o as projectsData, s as servicesData } from "./projectsData-CirWq4L7.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link, v as useParams } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageLayout } from "./PageLayout-DeGFLLUS.mjs";
import { w as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services._slug-Bb8vmJs4.js
var import_jsx_runtime = require_jsx_runtime();
function ServiceDetailPage() {
	const { slug } = useParams({ from: "/services/$slug" });
	const service = servicesData.find((item) => item.slug === slug || item.id === slug);
	if (!service) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageLayout, {
		eyebrow: "Service unavailable",
		title: "Service Not Found",
		description: `The requested service slug "${slug}" does not match any current service in our portfolio.`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border border-[#E5E7EB] bg-white p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-[#18181B]/75",
				children: ["Attempted slug: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold text-[#2C1D11]",
					children: slug
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/services",
					className: "inline-flex items-center border border-[#2C1D11] bg-[#FAFAFA] px-5 py-3 text-sm font-semibold text-[#2C1D11] transition hover:border-[#E65100] hover:text-[#E65100]",
					children: "← Back to All Services"
				})
			})]
		})
	});
	const otherServices = servicesData.filter((item) => item.id !== service.id).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden bg-[#2C1D11] py-24 text-white lg:py-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: service.heroImage,
				alt: service.title,
				className: "absolute inset-0 -z-20 h-full w-full object-cover opacity-30"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-to-r from-[#2C1D11] via-[#2C1D11]/95 to-[#2C1D11]/80" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 lg:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "transition hover:text-white",
							children: "Home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							className: "transition hover:text-white",
							children: "Services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-white",
							children: service.title
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-4xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E65100]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 bg-[#E65100]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: service.eyebrow })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-5 text-5xl font-extrabold leading-none tracking-[-0.05em] text-white md:text-6xl xl:text-7xl",
								children: service.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-2xl text-lg leading-8 text-white/75",
								children: service.overview
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "inline-flex items-center border border-[#E65100] bg-[#E65100] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-[#2C1D11]",
									children: "Enquire now"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/services",
									className: "inline-flex items-center border border-white/20 bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/10",
									children: "View all services"
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-white/15 bg-white/5 p-6 backdrop-blur-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E65100]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 bg-[#E65100]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Service overview" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-6 space-y-4 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between border-b border-white/10 pb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-white/60",
										children: "Category"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "font-medium text-white",
										children: service.category ?? "Infrastructure"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between border-b border-white/10 pb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-white/60",
										children: "Delivery"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "font-medium text-white",
										children: "Turnkey execution"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between pb-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-white/60",
										children: "Focus"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "font-medium text-white",
										children: "Project certainty"
									})]
								})
							]
						})]
					})]
				})]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/services",
					className: "inline-flex items-center gap-2 border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm font-semibold text-[#2C1D11] transition hover:border-[#E65100] hover:text-[#E65100]",
					children: "← Back to All Services"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-20 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-[#E5E7EB] bg-white p-6 md:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E65100]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 bg-[#E65100]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Scope & technical specification" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6",
						children: service.scopeOfWork.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "grid grid-cols-[auto_1fr] gap-4 border-t border-[#E5E7EB] py-4 first:border-t-0 first:pt-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E65100]",
								children: String(index + 1).padStart(2, "0")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-l border-[#E5E7EB] pl-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2C1D11]/60",
									children: "Technical scope"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-base leading-7 text-[#18181B]/80",
									children: item
								})]
							})]
						}, item))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-[#2C1D11] bg-[#2C1D11] p-6 text-white md:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E65100]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 bg-[#E65100]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Key capabilities" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-5",
						children: service.keyCapabilities.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3 border-l border-white/15 pl-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[10px] uppercase tracking-[0.18em] text-[#E65100]",
								children: String(index + 1).padStart(2, "0")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm leading-6 text-white/80",
								children: item
							})]
						}, item))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-20 grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-[#E5E7EB] bg-[#FAFAFA] p-6 md:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E65100]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 bg-[#E65100]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Quality standards" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-4",
						children: service.qualityStandards.map((standard, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-l border-[#E5E7EB] pl-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-[10px] uppercase tracking-[0.18em] text-[#2C1D11]/60",
								children: ["0", index + 1]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-7 text-[#18181B]/80",
								children: standard
							})]
						}, standard))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-[#E5E7EB] bg-white p-6 md:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E65100]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 bg-[#E65100]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Equipment deployed" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-4",
						children: service.equipmentDeployed.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3 border-l border-[#E5E7EB] pl-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[10px] uppercase tracking-[0.18em] text-[#E65100]",
								children: String(index + 1).padStart(2, "0")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm leading-7 text-[#18181B]/80",
								children: item
							})]
						}, item))
					})]
				})]
			}),
			service.processSteps && service.processSteps.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E65100]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 bg-[#E65100]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Delivery sequence" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 md:grid-cols-2 xl:grid-cols-5",
					children: service.processSteps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-[#E5E7EB] bg-white p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-mono text-[10px] uppercase tracking-[0.18em] text-[#E65100]",
								children: ["Step ", String(step.step).padStart(2, "0")]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-xl font-bold text-[#2C1D11]",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-6 text-[#18181B]/75",
								children: step.description
							})
						]
					}, step.step))
				})]
			}) : null,
			projectsData.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 flex items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E65100]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 bg-[#E65100]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Executed projects" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/projects",
						className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#2C1D11] hover:text-[#E65100]",
						children: ["View all projects", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-3",
					children: projectsData.slice(0, 3).map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/projects",
						className: "group border border-[#E5E7EB] bg-white p-6 transition hover:-translate-y-1 hover:border-[#E65100]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E65100]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 bg-[#E65100]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: project.category })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex items-center rounded-full bg-[#FAFAFA] px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#E65100]",
									children: project.status
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-2xl font-bold text-[#2C1D11]",
								children: project.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-xs text-[#18181B]/60",
								children: [
									project.location,
									" • ",
									project.year
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-7 text-[#18181B]/75",
								children: project.summary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-center justify-between border-t border-[#E5E7EB] pt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2C1D11]",
									children: "Learn more"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 text-[#E65100] transition-transform duration-300 group-hover:translate-x-0.5" })]
							})
						]
					}, project.slug))
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6 flex items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E65100]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 bg-[#E65100]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Related services" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/services",
						className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#2C1D11] hover:text-[#E65100]",
						children: ["View all services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-3",
					children: otherServices.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/services/$slug",
						params: { slug: item.slug ?? item.id },
						className: "group border border-[#E5E7EB] bg-white p-6 transition hover:-translate-y-1 hover:border-[#E65100]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E65100]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 bg-[#E65100]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.eyebrow })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-2xl font-bold text-[#2C1D11]",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-7 text-[#18181B]/75",
								children: item.shortDescription
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-center justify-between border-t border-[#E5E7EB] pt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2C1D11]",
									children: "Explore"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 text-[#E65100] transition-transform duration-300 group-hover:translate-x-0.5" })]
							})
						]
					}, item.id))
				})]
			})
		]
	})] });
}
var SplitComponent = ServiceDetailPage;
//#endregion
export { SplitComponent as component };
