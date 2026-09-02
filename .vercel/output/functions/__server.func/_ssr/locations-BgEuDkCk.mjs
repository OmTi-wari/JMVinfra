import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageLayout } from "./PageLayout-DeGFLLUS.mjs";
import { _ as ExternalLink, f as MapPin, l as Phone } from "../_libs/lucide-react.mjs";
import { n as contact } from "./site-B1va556S.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/locations-BgEuDkCk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LocationsMap({ city, address, coordinates }) {
	const mapElement = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		let disposed = false;
		let map;
		import("../_libs/leaflet.mjs").then((n) => /* @__PURE__ */ __toESM(n.t())).then((L) => {
			if (disposed || !mapElement.current) return;
			map = L.map(mapElement.current, { scrollWheelZoom: false });
			L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a>" }).addTo(map);
			L.circleMarker(coordinates, {
				radius: 10,
				color: "#fafafa",
				weight: 3,
				fillColor: "#e65100",
				fillOpacity: 1
			}).addTo(map).bindPopup(`<strong>${city}</strong><br />${address}`).openPopup();
			map.setView(coordinates, 14);
		});
		return () => {
			disposed = true;
			map?.remove();
		};
	}, [
		address,
		city,
		coordinates
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative isolate overflow-hidden bg-jmv-brown",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: mapElement,
			className: "h-56 w-full",
			"aria-label": `${city} office map`
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute left-4 top-4 rounded-full bg-white/95 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-jmv-brown shadow-md",
			children: city
		})]
	});
}
var offices = [{
	city: "Mumbai Head Office",
	address: contact.mumbaiAddress,
	note: "Regional operations and project coordination for urban, transit, and strategic infrastructure delivery.",
	coordinates: [19.2041, 72.8726]
}, {
	city: "Ahmedabad Office",
	address: contact.ahmedabadAddress,
	note: "Operational presence for civic works, institutional delivery, and regional infrastructure support.",
	coordinates: [23.0195, 72.6581]
}];
function LocationsPage() {
	const phoneHref = `tel:${contact.phone.replace(/\s/g, "")}`;
	const whatsappHref = `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageLayout, {
		eyebrow: "Regional presence // operations",
		title: "Operating close to the projects and people we serve.",
		description: "JMV maintains strategic regional presence in Mumbai and Ahmedabad to stay close to sites, stakeholders, and the pace of infrastructure delivery.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mt-10 grid gap-6 lg:grid-cols-2",
			children: offices.map((office) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "overflow-hidden border border-neutral-200 bg-white",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocationsMap, {
					city: office.city,
					address: office.address,
					coordinates: office.coordinates
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-7 md:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E65100]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 bg-[#E65100]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: office.city })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-2xl font-bold tracking-[-0.04em] text-[#2C1D11]",
							children: office.address
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-7 text-[#18181B]/70",
							children: office.note
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-7 border-t border-neutral-200 pt-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: phoneHref,
									className: "inline-flex items-center gap-2 border border-[#E65100] bg-[#E65100] px-5 py-3 text-sm font-semibold text-white",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " Call office"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `${whatsappHref}?text=Hello%20JMV%20${encodeURIComponent(office.city)}`,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-2 border border-neutral-200 bg-[#F3F4F6] px-5 py-3 text-sm font-semibold text-[#2C1D11]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4" }), " WhatsApp team"]
								})]
							})
						})
					]
				})]
			}, office.city))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mt-20 border border-neutral-200 bg-[#F3F4F6] p-8 md:p-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E65100]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 bg-[#E65100]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Project proximity" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-3xl font-extrabold tracking-[-0.05em] text-[#2C1D11] md:text-4xl",
					children: "Planning a project across regions?"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: phoneHref,
						className: "inline-flex items-center gap-2 bg-[#E65100] px-5 py-3 text-sm font-semibold text-white",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }),
							" ",
							contact.phone
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `mailto:${contact.email}`,
						className: "inline-flex items-center gap-2 border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-[#2C1D11]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }),
							" ",
							contact.email
						]
					})]
				})]
			})
		})]
	});
}
//#endregion
export { LocationsPage as component };
