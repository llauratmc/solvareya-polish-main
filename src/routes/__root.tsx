import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { I18nProvider, useI18n } from "@/i18n/I18nProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import logo from "@/assets/solvareya-logo.png";
import { SeoSync } from "@/components/SeoSync";

const SITE_URL = "https://www.solvareya.com";

function NotFoundComponent() {
  const { t } = useI18n();
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center px-4 pt-24">
        <div className="max-w-md text-center">
          <p className="font-serif text-6xl italic text-gold">404</p>
          <h1 className="mt-4 font-display text-2xl font-semibold text-parchment">
            {t("404.title")}
          </h1>
          <p className="mt-3 text-sm text-parchment/70">{t("404.body")}</p>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold uppercase tracking-widest text-ink-deep hover:bg-gold-soft"
            >
              {t("404.home")}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
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
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl font-semibold text-parchment">This page didn't load</h1>
        <p className="mt-2 text-sm text-parchment/70">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold uppercase tracking-widest text-ink-deep hover:bg-gold-soft"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold uppercase tracking-widest text-parchment hover:bg-white/5"
          >
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Solvareya Group Ltd.",
  url: SITE_URL,
  logo: `${SITE_URL}${logo}`,
  email: "info@solvareya.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ottawa",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  areaServed: ["CA", "TR", "EU", "CIS", "Asia"],
  slogan: "Smart Routes. Seamless Trade.",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Solvareya Group Ltd.",
  url: SITE_URL,
  inLanguage: ["en", "tr", "ru"],
  publisher: { "@type": "Organization", name: "Solvareya Group Ltd.", url: SITE_URL },
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: "Solvareya Group | International Trade & Sourcing Solutions" },
      {
        name: "description",
        content:
          "Solvareya Group provides international sourcing, re-export, trade coordination, heating equipment supply and value-added logistics solutions connecting Canada, Türkiye, Europe, CIS and Asia.",
      },
      { name: "theme-color", content: "#151f2e" },
      { property: "og:site_name", content: "Solvareya Group Ltd." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Solvareya Group | International Trade & Sourcing Solutions",
      },
      {
        name: "twitter:description",
        content:
          "International sourcing, re-export, trade coordination, heating equipment supply and value-added logistics across Canada, Türkiye, Europe, CIS and Asia.",
      },
      { name: "author", content: "Solvareya Group Ltd." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon", sizes: "any" },
      { rel: "icon", href: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Instrument+Serif:ital@0;1&display=swap",
      },
      { rel: "canonical", href: SITE_URL },
      { rel: "alternate", hrefLang: "en", href: SITE_URL },
      { rel: "alternate", hrefLang: "tr", href: SITE_URL },
      { rel: "alternate", hrefLang: "ru", href: SITE_URL },
      { rel: "alternate", hrefLang: "x-default", href: SITE_URL },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(orgSchema),
      },
      { type: "application/ld+json", children: JSON.stringify(websiteSchema) },
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
  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <SeoSync />
        <Outlet />
      </I18nProvider>
    </QueryClientProvider>
  );
}
