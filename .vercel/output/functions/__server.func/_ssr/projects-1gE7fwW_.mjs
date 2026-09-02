import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-1gE7fwW_.js
var $$splitComponentImporter = () => import("./projects-C0o8ZhSD.mjs");
var Route = createFileRoute("/projects")({
	validateSearch: (search) => ({
		category: typeof search.category === "string" ? search.category : "All",
		status: typeof search.status === "string" ? search.status : "All"
	}),
	head: () => ({ meta: [{ title: "Projects | JMV Engineering Infra" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
