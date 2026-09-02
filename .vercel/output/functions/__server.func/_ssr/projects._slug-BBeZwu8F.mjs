import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects._slug-BBeZwu8F.js
var $$splitComponentImporter = () => import("./projects._slug-MU9CSKoa.mjs");
var Route = createFileRoute("/projects/$slug")({
	head: ({ params }) => ({ meta: [{ title: `${params.slug.replace(/-/g, " ")} | JMV Projects` }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
