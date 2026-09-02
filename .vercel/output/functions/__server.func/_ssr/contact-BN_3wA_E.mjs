import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageLayout } from "./PageLayout-DeGFLLUS.mjs";
import { f as MapPin, h as Instagram, l as Phone, p as Mail, u as MessageCircle, v as CircleCheck } from "../_libs/lucide-react.mjs";
import { n as contact, t as company } from "./site-B1va556S.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BN_3wA_E.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var tabs = [
	"General Enquiry",
	"Project Tender / Bidding",
	"Vendor Partnership",
	"Careers"
];
function ContactPage() {
	const [tab, setTab] = (0, import_react.useState)("General Enquiry");
	const [feedback, setFeedback] = (0, import_react.useState)(null);
	const secondaryPhone = contact.phones[1] ?? contact.phone;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageLayout, {
		eyebrow: "Contact // procurement & enquiries",
		title: "Tell us about your infrastructure requirement.",
		description: "Reach out for project discussions, tenders, vendor partnerships, or careers. We will route your enquiry to the right team.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "space-y-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-neutral-200 bg-[#2C1D11] p-7 text-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E65100]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 bg-[#E65100]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Verified contact" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-4 text-sm text-white/75",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-1 h-5 w-5 shrink-0 text-[#E65100]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1 text-xl font-bold leading-tight text-white md:text-2xl",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `tel:${contact.phone.replace(/\s/g, "")}`,
										className: "block hover:text-white/80",
										children: contact.phone
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `tel:${secondaryPhone.replace(/\s/g, "")}`,
										className: "block hover:text-white/80",
										children: secondaryPhone
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `mailto:${contact.email}`,
								className: "flex items-center gap-3 hover:text-white",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-5 w-5 text-[#E65100]" }), contact.email]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`,
								target: "_blank",
								rel: "noreferrer",
								className: "flex items-center gap-3 hover:text-white",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5 text-[#E65100]" }),
									"WhatsApp: ",
									contact.whatsapp
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: company.instagramUrl,
								target: "_blank",
								rel: "noreferrer",
								className: "flex items-center gap-3 hover:text-white",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-5 w-5 text-[#E65100]" }), "@jmv_engineering_infra"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-3 text-white/75",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5 text-[#E65100]" }), "Mumbai & Ahmedabad"]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-neutral-200 bg-white p-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E65100]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 bg-[#E65100]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Office presence" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 text-sm leading-7 text-[#18181B]/70",
						children: [
							"Mumbai Head Office",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							contact.mumbaiAddress,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Ahmedabad Office",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							contact.ahmedabadAddress
						]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "border border-neutral-200 bg-white p-7 md:p-9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2 border-b border-neutral-200 pb-5",
					children: tabs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setTab(item);
							setFeedback(null);
						},
						className: tab === item ? "border border-[#E65100] bg-[#E65100] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white" : "border border-neutral-200 bg-[#FAFAFA] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#2C1D11]/70",
						children: item
					}, item))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-8 space-y-5",
					onSubmit: (event) => {
						event.preventDefault();
						const form = new FormData(event.currentTarget);
						setFeedback(form.get("name") && form.get("email") ? "success" : "error");
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-sm font-semibold text-[#2C1D11]",
								children: ["Name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									name: "name",
									required: true,
									className: "mt-2 w-full border border-neutral-200 bg-[#FAFAFA] px-4 py-3 text-sm font-normal outline-none focus:border-[#E65100]"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-sm font-semibold text-[#2C1D11]",
								children: ["Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									name: "email",
									type: "email",
									className: "mt-2 w-full border border-neutral-200 bg-[#FAFAFA] px-4 py-3 text-sm font-normal outline-none focus:border-[#E65100]"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm font-semibold text-[#2C1D11]",
							children: ["Phone", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "phone",
								type: "tel",
								className: "mt-2 w-full border border-neutral-200 bg-[#FAFAFA] px-4 py-3 text-sm font-normal outline-none focus:border-[#E65100]"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm font-semibold text-[#2C1D11]",
							children: ["Message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "message",
								required: true,
								rows: 5,
								placeholder: `Tell us about your ${tab.toLowerCase()}...`,
								className: "mt-2 w-full resize-none border border-neutral-200 bg-[#FAFAFA] px-4 py-3 text-sm font-normal outline-none focus:border-[#E65100]"
							})]
						}),
						feedback === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-2 border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5" }), "Your enquiry has been received successfully."]
						}) : null,
						feedback === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "border border-red-200 bg-red-50 p-4 text-sm text-red-800",
							children: "Please complete the required fields before submitting."
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							className: "bg-[#E65100] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white",
							children: ["Submit ", tab]
						})
					]
				})]
			})]
		})
	});
}
//#endregion
export { ContactPage as component };
