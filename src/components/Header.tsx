import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";
import logo from "@/assets/solvareya-logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MOBILE_NAV = [
  { key: "nav.home", to: "/" as const },
  { key: "nav.about", to: "/about" as const },
  { key: "nav.services", to: "/services" as const },
  { key: "nav.heating", to: "/heating" as const },
  { key: "nav.network", to: "/network" as const },
  { key: "nav.contact", to: "/contact" as const },
];

const PRIMARY_NAV = [
  { key: "nav.home", to: "/" as const },
  { key: "nav.about", to: "/about" as const },
];

const SERVICE_NAV = [
  { key: "nav.services", to: "/services" as const },
  { key: "nav.heating", to: "/heating" as const },
  { key: "nav.network", to: "/network" as const },
];

export function Header() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const keepServicesOpen = () => {
    if (servicesCloseTimer.current) clearTimeout(servicesCloseTimer.current);
    setServicesOpen(true);
  };

  const closeServicesSoon = () => {
    servicesCloseTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(
    () => () => {
      if (servicesCloseTimer.current) clearTimeout(servicesCloseTimer.current);
    },
    [],
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ink-deep/94 backdrop-blur-xl hairline-b" : "bg-ink-deep/45 backdrop-blur-sm"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-5 min-[1150px]:h-22">
        <Link
          to="/"
          className="flex shrink-0 items-center"
          onClick={() => setOpen(false)}
          aria-label="Solvareya Group Ltd."
        >
          <img
            src={logo}
            alt="Solvareya Group Ltd."
            width={2454}
            height={1029}
            className="h-auto w-36 object-contain sm:w-40 min-[1150px]:w-44"
          />
        </Link>

        <nav className="hidden items-center gap-6 min-[1150px]:flex" aria-label={t("nav.menu")}>
          {PRIMARY_NAV.map((n) => (
            <Link
              key={n.key}
              to={n.to}
              className="text-[13px] font-medium tracking-wide text-parchment/80 transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {t(n.key)}
            </Link>
          ))}

          <div onMouseEnter={keepServicesOpen} onMouseLeave={closeServicesSoon}>
            <DropdownMenu open={servicesOpen} onOpenChange={setServicesOpen}>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 text-[13px] font-medium tracking-wide text-parchment/80 outline-none transition-colors hover:text-gold focus-visible:text-gold"
                >
                  {t("nav.services")}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                sideOffset={12}
                onMouseEnter={keepServicesOpen}
                onMouseLeave={closeServicesSoon}
                className="min-w-[220px] rounded-sm border-white/12 bg-ink-deep p-1.5 shadow-[0_24px_55px_-22px_rgb(0_0_0/.8)]"
              >
                {SERVICE_NAV.map((item) => (
                  <DropdownMenuItem key={item.key} asChild>
                    <Link
                      to={item.to}
                      onClick={() => setServicesOpen(false)}
                      className="cursor-pointer rounded-none px-3 py-2.5 text-[12px] font-medium tracking-wide text-parchment/75 focus:bg-white/[0.055] focus:text-gold"
                    >
                      {t(item.key)}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Link
            to="/contact"
            className="text-[13px] font-medium tracking-wide text-parchment/80 transition-colors hover:text-gold"
            activeProps={{ className: "text-gold" }}
          >
            {t("nav.contact")}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden min-[1150px]:block">
            <LanguageSwitcher />
          </div>
          <Link
            to="/quote"
            className="hidden whitespace-nowrap rounded-full bg-gold px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-deep transition-transform hover:-translate-y-px hover:bg-gold-soft min-[1150px]:inline-flex"
          >
            {t("nav.quote")}
          </Link>
          <button
            type="button"
            aria-label={open ? t("nav.close") : t("nav.menu")}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-parchment min-[1150px]:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="min-[1150px]:hidden">
          <div className="hairline-t bg-ink-deep/95 backdrop-blur-xl">
            <div className="container-x flex flex-col gap-4 py-6">
              {MOBILE_NAV.map((n) => (
                <Link
                  key={n.key}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-parchment/90"
                >
                  {t(n.key)}
                </Link>
              ))}
              <Link
                to="/quote"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex w-fit rounded-full bg-gold px-5 py-2.5 text-sm font-semibold uppercase tracking-widest text-ink-deep"
              >
                {t("nav.quote")}
              </Link>
              <div className="pt-2">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
