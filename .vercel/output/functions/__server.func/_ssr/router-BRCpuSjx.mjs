import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useLocation, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as Menu, f as MapPin, h as Instagram, l as Phone, t as X, y as ChevronDown } from "../_libs/lucide-react.mjs";
import { n as contact, r as navLinks, t as company } from "./site-B1va556S.mjs";
import { t as Route } from "./projects-1gE7fwW_.mjs";
import { t as Route$13 } from "./projects._slug-BBeZwu8F.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BRCpuSjx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var jmv_logo_default = "/assets/jmv-logo-dhZaHCsP.jpg";
var businessAreas = [
	"Road Construction",
	"Airport EPC",
	"Railway Projects",
	"MMRD, PWD, BMC",
	"AMC & Maintenance",
	"Turnkey Solutions"
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-[#2C1D11] text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-r border-white/10 pr-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: jmv_logo_default,
								alt: `${company.legalName} logo`,
								className: "h-14 w-14 rounded-none border border-white/10 object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg font-extrabold leading-snug tracking-tight text-white",
								children: company.legalName
							}) })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-sm text-sm leading-7 text-white/70",
							children: company.tagline
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Footer quick links",
						className: "lg:pl-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E65100]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 bg-[#E65100]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Fast links" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-3",
							children: navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: link.href,
								className: "text-sm text-white/80 transition-colors hover:text-[#E65100]",
								children: link.label
							}) }, link.href))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:pl-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E65100]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 bg-[#E65100]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Business areas" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-3 text-sm text-white/80",
							children: businessAreas.map((area) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "border-l border-white/10 pl-3",
								children: area
							}, area))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:pl-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E65100]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 bg-[#E65100]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Locations" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-5 space-y-4 text-sm text-white/80",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2 border-l border-white/10 pl-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 text-[#E65100]" }), "Mumbai"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2 border-l border-white/10 pl-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 text-[#E65100]" }), "Ahmedabad"]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:pl-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E65100]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 bg-[#E65100]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Contact" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-5 space-y-4 text-sm text-white/80",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2 border-l border-white/10 pl-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-[#E65100]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: contact.phones.join(" / ") })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "border-l border-white/10 pl-3 text-white/80",
									children: contact.email
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "border-l border-white/10 pl-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: contact.instagramUrl,
										target: "_blank",
										rel: "noreferrer noopener",
										className: "inline-flex items-center gap-2 text-white/80 transition-colors hover:text-[#E65100]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, {
											className: "h-4 w-4",
											strokeWidth: 1.5,
											"aria-hidden": "true"
										}), contact.instagramHandle]
									})
								})
							]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 border-t border-white/10 pt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-white/60",
					children: [
						"© 2026 ",
						company.legalName,
						". All rights reserved."
					]
				})
			})]
		})
	});
}
var businessServices = [
	{
		label: "Road Construction",
		to: "/services/road-construction"
	},
	{
		label: "Airport EPC",
		to: "/services/airport-epc"
	},
	{
		label: "Railway Projects",
		to: "/services/railway-projects"
	},
	{
		label: "MMRD",
		to: "/services/mmrd"
	},
	{
		label: "PWD",
		to: "/services/pwd-projects"
	},
	{
		label: "BMC",
		to: "/services/bmc-projects"
	},
	{
		label: "AMC",
		to: "/services/amc-projects"
	},
	{
		label: "School Projects",
		to: "/services/school-projects"
	},
	{
		label: "Turnkey Solutions",
		to: "/services/turnkey-solutions"
	}
];
var projectLinks = [
	{
		label: "Ongoing",
		to: "/projects",
		search: { filter: "ongoing" }
	},
	{
		label: "Completed",
		to: "/projects",
		search: { filter: "completed" }
	},
	{
		label: "Upcoming",
		to: "/projects",
		search: { filter: "upcoming" }
	},
	{
		label: "Road",
		to: "/projects",
		search: { category: "road" }
	},
	{
		label: "Airport",
		to: "/projects",
		search: { category: "airport" }
	},
	{
		label: "Railway",
		to: "/projects",
		search: { category: "railway" }
	},
	{
		label: "Urban",
		to: "/projects",
		search: { category: "urban" }
	}
];
function Navbar() {
	const location = useLocation();
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [mobileSection, setMobileSection] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const isPathMatch = (path) => {
		if (path === "/") return location.pathname === "/";
		return location.pathname === path || location.pathname.startsWith(`${path}/`);
	};
	const renderNavLink = (link) => {
		const active = isPathMatch(link.href);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: link.href,
			className: cn("relative text-sm font-medium transition-colors", active ? "text-jmv-orange" : "text-jmv-brown/80 hover:text-jmv-orange"),
			children: link.label
		}, link.href);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed inset-x-0 top-0 z-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-white/10 bg-[#2C1D11] text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex max-w-7xl items-center justify-end gap-4 px-6 py-2 text-[11px] font-medium tracking-[0.08em] uppercase lg:px-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden items-center gap-4 text-white/75 sm:flex",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									className: "h-3.5 w-3.5",
									strokeWidth: 2
								}), "Mumbai"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white/40",
								children: "|"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									className: "h-3.5 w-3.5",
									strokeWidth: 2
								}), "Ahmedabad"]
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("border-b border-[#E5E7EB] transition-all duration-300", scrolled ? "bg-[#FAFAFA]/90 backdrop-blur-md" : "bg-[#FAFAFA]"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "group flex items-center gap-3",
							"aria-label": company.legalName,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: jmv_logo_default,
								alt: `${company.legalName} logo`,
								className: "h-12 w-12 rounded-none border border-[#E5E7EB] object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "hidden text-[0.8rem] font-semibold leading-tight tracking-tight text-[#2C1D11] sm:block",
								children: ["Jai Maa Vindhyavasini", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[#18181B]/60",
									children: "Engineering Infra"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden items-center gap-6 lg:flex",
							"aria-label": "Primary navigation",
							children: [navLinks.map((link) => {
								if (link.label === "Services") {
									const active = isPathMatch(link.href);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "group relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											suppressHydrationWarning: true,
											className: cn("flex items-center gap-1 text-sm font-medium transition-colors", active ? "text-[#E65100]" : "text-[#2C1D11]/80 hover:text-[#E65100]"),
											children: [link.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
												className: "h-4 w-4",
												strokeWidth: 2
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "invisible absolute left-0 top-full z-40 mt-3 w-[520px] border border-[#E5E7EB] bg-white p-4 opacity-0 shadow-lift transition-all duration-200 group-hover:visible group-hover:opacity-100",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "grid grid-cols-2 gap-2",
												children: businessServices.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													to: item.to,
													className: cn("border border-transparent px-3 py-2.5 text-sm text-[#18181B] transition-colors hover:border-[#E65100]/30 hover:bg-[#FAFAFA] hover:text-[#E65100]", isPathMatch(item.to) && "border-[#E65100]/30 bg-[#FAFAFA] text-[#E65100]"),
													children: item.label
												}, item.to))
											})
										})]
									}, link.href);
								}
								if (link.label === "Projects") {
									const active = isPathMatch(link.href);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "group relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											suppressHydrationWarning: true,
											className: cn("flex items-center gap-1 text-sm font-medium transition-colors", active ? "text-[#E65100]" : "text-[#2C1D11]/80 hover:text-[#E65100]"),
											children: [link.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
												className: "h-4 w-4",
												strokeWidth: 2
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "invisible absolute left-0 top-full z-40 mt-3 w-[300px] border border-[#E5E7EB] bg-white p-4 opacity-0 shadow-lift transition-all duration-200 group-hover:visible group-hover:opacity-100",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "space-y-2",
												children: projectLinks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
													to: item.to,
													search: item.search,
													className: cn("block border border-transparent px-3 py-2 text-sm text-[#18181B] transition-colors hover:border-[#E65100]/30 hover:bg-[#FAFAFA] hover:text-[#E65100]", (location.pathname === "/projects" && item.search.filter === (location.search?.filter ?? "") || item.search.category === (location.search?.category ?? "")) && "border-[#E65100]/30 bg-[#FAFAFA] text-[#E65100]"),
													children: item.label
												}, item.label))
											})
										})]
									}, link.href);
								}
								return renderNavLink(link);
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: cn("border px-5 py-2.5 text-sm font-semibold transition-colors", isPathMatch("/contact") ? "border-[#E65100] bg-[#E65100] text-white" : "border-[#E65100] bg-[#E65100] text-white hover:bg-[#2C1D11]"),
								children: "ENQUIRE NOW"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							suppressHydrationWarning: true,
							onClick: () => setOpen((v) => !v),
							"aria-expanded": open,
							"aria-controls": "mobile-nav",
							"aria-label": open ? "Close menu" : "Open menu",
							className: "flex h-11 w-11 items-center justify-center border border-[#E5E7EB] bg-white text-[#2C1D11] lg:hidden",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "mobile-nav",
				className: cn("fixed inset-0 z-40 bg-jmv-ivory transition-transform duration-300 ease-out lg:hidden", open ? "translate-x-0" : "translate-x-full"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-full flex-col",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-border px-6 py-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							onClick: () => setOpen(false),
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: jmv_logo_default,
								alt: `${company.legalName} logo`,
								className: "h-11 w-11 rounded-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-left text-sm font-semibold text-jmv-brown",
								children: "Jai Maa Vindhyavasini"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setOpen(false),
							"aria-label": "Close menu",
							className: "flex h-10 w-10 items-center justify-center rounded-full border border-border text-jmv-brown",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex-1 space-y-2 overflow-y-auto px-6 py-6",
						"aria-label": "Mobile navigation",
						children: [navLinks.map((link) => {
							const active = isPathMatch(link.href);
							if (link.label === "Services") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-b border-border pb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									suppressHydrationWarning: true,
									onClick: () => setMobileSection(mobileSection === "services" ? null : "services"),
									className: "flex w-full items-center justify-between py-3 text-left text-base font-semibold text-jmv-brown",
									children: [link.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("h-4 w-4 transition-transform", mobileSection === "services" && "rotate-180") })]
								}), mobileSection === "services" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-2 pb-2",
									children: businessServices.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: item.to,
										onClick: () => setOpen(false),
										className: cn("block rounded-xl px-3 py-2 text-sm text-jmv-charcoal", isPathMatch(item.to) && "bg-jmv-grey text-jmv-orange"),
										children: item.label
									}, item.to))
								})]
							}, link.href);
							if (link.label === "Projects") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-b border-border pb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									suppressHydrationWarning: true,
									onClick: () => setMobileSection(mobileSection === "projects" ? null : "projects"),
									className: "flex w-full items-center justify-between py-3 text-left text-base font-semibold text-jmv-brown",
									children: [link.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("h-4 w-4 transition-transform", mobileSection === "projects" && "rotate-180") })]
								}), mobileSection === "projects" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-2 pb-2",
									children: projectLinks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: item.to,
										search: item.search,
										onClick: () => setOpen(false),
										className: cn("block rounded-xl px-3 py-2 text-sm text-jmv-charcoal", (location.pathname === "/projects" && item.search.filter === (location.search?.filter ?? "") || item.search.category === (location.search?.category ?? "")) && "bg-jmv-grey text-jmv-orange"),
										children: item.label
									}, item.label))
								})]
							}, link.href);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: link.href,
								onClick: () => setOpen(false),
								className: cn("block border-b border-border py-3 text-base font-semibold", active ? "text-jmv-orange" : "text-jmv-brown"),
								children: link.label
							}, link.href);
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							onClick: () => setOpen(false),
							className: "mt-4 block rounded-full bg-jmv-orange px-5 py-3 text-center text-sm font-semibold text-white",
							children: "ENQUIRE NOW"
						})]
					})]
				})
			})
		]
	});
}
var styles_default = "/assets/styles-CkCN45u9.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-jmv-ivory px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-lg text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-jmv-orange",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 text-5xl font-extrabold tracking-tight text-jmv-brown md:text-6xl",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base text-jmv-charcoal/70",
					children: "The page you’re looking for doesn’t exist or has moved. Head back to the JMV infrastructure homepage."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-full bg-jmv-orange px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-jmv-orange-burnt",
						children: "Return home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-jmv-ivory px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold tracking-tight text-jmv-brown",
					children: "This page didn’t load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-jmv-charcoal/70",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-full bg-jmv-orange px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-jmv-orange-burnt",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-full border border-border bg-white px-4 py-2.5 text-sm font-semibold text-jmv-brown transition-colors hover:bg-jmv-grey",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$12 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Jai Maa Vindhyavasini Engineering Infra" },
			{
				name: "description",
				content: "Engineering, construction and infrastructure solutions built around quality, reliability and long-term performance."
			},
			{
				name: "author",
				content: "Jai Maa Vindhyavasini Engineering Infra"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
			},
			{
				rel: "icon",
				href: jmv_logo_default,
				type: "image/jpeg"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$12.useRouteContext();
	const location = useLocation();
	(0, import_react.useEffect)(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth"
		});
	}, [location.pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-screen bg-jmv-ivory text-jmv-charcoal",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "pt-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
			]
		})
	});
}
var $$splitComponentImporter$10 = () => import("./routes-ICdwxabm.mjs");
var title = "Jai Maa Vindhyavasini Engineering Infra | Engineering & Construction";
var description = "Engineering, construction and infrastructure solutions built around quality, reliability and long-term performance.";
var Route$11 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title },
		{
			name: "description",
			content: description
		},
		{
			property: "og:title",
			content: title
		},
		{
			property: "og:description",
			content: description
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./about-CiwKk6sC.mjs");
var Route$10 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About | JMV Engineering Infra" }] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./capabilities-D2FTO_pc.mjs");
var Route$9 = createFileRoute("/capabilities")({
	head: () => ({ meta: [{ title: "Capabilities | JMV Engineering Infra" }, {
		name: "description",
		content: "Capabilities and execution systems for infrastructure delivery, quality assurance, HSE, fleet mobilization, and project management."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./careers-BsOjbZSF.mjs");
var Route$8 = createFileRoute("/careers")({
	head: () => ({ meta: [{ title: "Careers | JMV Engineering Infra" }] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./contact-BN_3wA_E.mjs");
var Route$7 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Contact | JMV Engineering Infra" }] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./gallery-BVlSK9-P.mjs");
var Route$6 = createFileRoute("/gallery")({
	head: () => ({ meta: [{ title: "Gallery | JMV Engineering Infra" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./locations-BgEuDkCk.mjs");
var Route$5 = createFileRoute("/locations")({
	head: () => ({ meta: [{ title: "Locations | JMV Engineering Infra" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./news-BnqieKEQ.mjs");
var Route$4 = createFileRoute("/news")({
	head: () => ({ meta: [{ title: "News & Media | JMV Engineering Infra" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./people-CoKVX9SS.mjs");
var Route$3 = createFileRoute("/people")({
	head: () => ({ meta: [{ title: "Leadership | JMV Engineering Infra" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./services-d8qvuOmF.mjs");
var Route$2 = createFileRoute("/services")({
	head: () => ({ meta: [{ title: "Services | JMV Engineering Infra" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./services._slug-Bb8vmJs4.mjs");
var Route$1 = createFileRoute("/services/$slug")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$11.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$12
});
var AboutRoute = Route$10.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$12
});
var CapabilitiesRoute = Route$9.update({
	id: "/capabilities",
	path: "/capabilities",
	getParentRoute: () => Route$12
});
var CareersRoute = Route$8.update({
	id: "/careers",
	path: "/careers",
	getParentRoute: () => Route$12
});
var ContactRoute = Route$7.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$12
});
var GalleryRoute = Route$6.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$12
});
var LocationsRoute = Route$5.update({
	id: "/locations",
	path: "/locations",
	getParentRoute: () => Route$12
});
var NewsRoute = Route$4.update({
	id: "/news",
	path: "/news",
	getParentRoute: () => Route$12
});
var PeopleRoute = Route$3.update({
	id: "/people",
	path: "/people",
	getParentRoute: () => Route$12
});
var ProjectsRoute = Route.update({
	id: "/projects",
	path: "/projects",
	getParentRoute: () => Route$12
});
var ServicesRoute = Route$2.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$12
});
var ProjectsSlugRoute = Route$13.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ProjectsRoute
});
var ServicesSlugRoute = Route$1.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ServicesRoute
});
var ProjectsRouteChildren = { ProjectsSlugRoute };
var ProjectsRouteWithChildren = ProjectsRoute._addFileChildren(ProjectsRouteChildren);
var ServicesRouteChildren = { ServicesSlugRoute };
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	CapabilitiesRoute,
	CareersRoute,
	ContactRoute,
	GalleryRoute,
	LocationsRoute,
	NewsRoute,
	PeopleRoute,
	ProjectsRoute: ProjectsRouteWithChildren,
	ServicesRoute: ServicesRoute._addFileChildren(ServicesRouteChildren)
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
