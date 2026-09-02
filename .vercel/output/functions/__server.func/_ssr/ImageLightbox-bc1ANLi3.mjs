import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ImageLightbox-bc1ANLi3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ImageLightbox({ images, title }) {
	const [activeImage, setActiveImage] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 sm:grid-cols-2",
		children: images.map((image, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => setActiveImage(image),
			className: "group overflow-hidden rounded-2xl border border-border bg-jmv-grey text-left",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: `${title} gallery image ${index + 1}`,
				className: "aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
			})
		}, image))
	}), activeImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center bg-jmv-brown/90 p-6",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": `${title} enlarged image`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => setActiveImage(null),
			className: "absolute right-5 top-5 rounded-full bg-white p-3 text-jmv-brown",
			"aria-label": "Close image",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: activeImage,
			alt: `${title} enlarged`,
			className: "max-h-[85vh] max-w-full rounded-xl object-contain"
		})]
	}) : null] });
}
//#endregion
export { ImageLightbox as t };
