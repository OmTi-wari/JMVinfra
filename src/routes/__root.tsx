import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useLocation,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { reportLovableError } from "../lib/lovable-error-reporting";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-jmv-ivory px-4">
      <div className="max-w-lg text-center">
        <p className="eyebrow text-jmv-orange">404</p>
        <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-jmv-brown md:text-6xl">
          Page not found
        </h1>
        <p className="mt-4 text-base text-jmv-charcoal/70">
          The page you’re looking for doesn’t exist or has moved. Head back to the JMV
          infrastructure homepage.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-jmv-orange px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-jmv-orange-burnt"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-jmv-ivory px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold tracking-tight text-jmv-brown">
          This page didn’t load
        </h1>
        <p className="mt-2 text-sm text-jmv-charcoal/70">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-jmv-orange px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-jmv-orange-burnt"
          >
            Try again
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full border border-border bg-white px-4 py-2.5 text-sm font-semibold text-jmv-brown transition-colors hover:bg-jmv-grey"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Jai Maa Vindhyavasini Engineering Infra" },
      {
        name: "description",
        content:
          "Engineering, construction and infrastructure solutions built around quality, reliability and long-term performance.",
      },
      { name: "author", content: "Jai Maa Vindhyavasini Engineering Infra" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-jmv-ivory text-jmv-charcoal">
        <Navbar />
        <main className="pt-20">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
