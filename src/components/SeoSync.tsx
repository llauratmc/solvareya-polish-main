import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";
import { useI18n } from "@/i18n/I18nProvider";

const SITE_URL = "https://www.solvareya.com";
const PAGE_KEYS: Record<string, string> = {
  "/": "home",
  "/about": "about",
  "/services": "services",
  "/heating": "heating",
  "/network": "network",
  "/quote": "quote",
  "/contact": "contact",
  "/privacy": "privacy",
  "/terms": "terms",
};

function setMeta(selector: string, attribute: "name" | "property", value: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }
  element.content = content;
}

export function SeoSync() {
  const { locale, t } = useI18n();
  const { pathname } = useLocation();
  useEffect(() => {
    const page = PAGE_KEYS[pathname] ?? "notfound";
    const title = t(`meta.${page}.title`);
    const description = t(`meta.${page}.desc`);
    const canonical = `${SITE_URL}${pathname}`;
    document.title = title;
    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:url"]', "property", "og:url", canonical);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonical;
    for (const hreflang of ["en", "tr", "ru", "x-default"]) {
      let alternate = document.head.querySelector<HTMLLinkElement>(
        `link[rel="alternate"][hreflang="${hreflang}"]`,
      );
      if (!alternate) {
        alternate = document.createElement("link");
        alternate.rel = "alternate";
        alternate.hreflang = hreflang;
        document.head.appendChild(alternate);
      }
      alternate.href = canonical;
    }
    document.documentElement.lang = locale;
  }, [locale, pathname, t]);
  return null;
}
