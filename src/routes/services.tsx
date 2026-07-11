import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Handshake,
  Route as RouteIcon,
  ShieldCheck,
  Warehouse,
} from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import bosphorusImg from "@/assets/bosphorus.jpg";
import warehouseImg from "@/assets/warehouse.jpg";
import heroImg from "@/assets/hero-port.jpg";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  url: "https://www.solvareya.com/services",
  provider: {
    "@type": "Organization",
    name: "Solvareya Group Ltd.",
    url: "https://www.solvareya.com",
  },
  areaServed: ["CA", "TR", "EU", "CIS", "Asia"],
  serviceType: [
    "Brokerage & Re-Export",
    "Alternative Trade Solutions",
    "Warehousing & Value-Added Services",
  ],
};

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Solvareya Group Ltd." },
      {
        name: "description",
        content:
          "Brokerage & re-export, alternative trade solutions and warehousing with value-added services. Compliance-conscious international trade coordination.",
      },
      { property: "og:title", content: "Services — Solvareya Group Ltd." },
      {
        property: "og:description",
        content:
          "Compliance-conscious international trade services coordinated end-to-end by one team.",
      },
      { property: "og:url", content: "https://www.solvareya.com/services" },
    ],
    links: [{ rel: "canonical", href: "https://www.solvareya.com/services" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(serviceSchema) }],
  }),
  component: ServicesPage,
});

const BLOCKS = [
  {
    id: "brokerage",
    key: "services.brokerage",
    icon: Handshake,
    img: heroImg,
    items: ["li1", "li2", "li3", "li4"],
  },
  {
    id: "alternative",
    key: "services.alt",
    icon: RouteIcon,
    img: bosphorusImg,
    items: ["li1", "li2", "li3", "li4"],
  },
  {
    id: "warehousing",
    key: "services.wh",
    icon: Warehouse,
    img: warehouseImg,
    items: ["li1", "li2", "li3", "li4"],
  },
  {
    id: "sourcing",
    key: "services.sourcing",
    icon: Handshake,
    img: heroImg,
    items: ["li1", "li2", "li3", "li4"],
  },
];

function ServicesPage() {
  const { t } = useI18n();
  return (
    <div className="min-h-dvh bg-background">
      <Header />
      <main className="pt-24 md:pt-32">
        <section className="container-x pb-16 pt-8 md:pb-24">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
              {t("services.eyebrow")}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold text-parchment md:text-5xl lg:text-6xl">
              {t("services.page.title")}
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-parchment/70">
              {t("services.page.subtitle")}
            </p>
          </Reveal>
        </section>

        <div className="gold-divider container-x" />

        {BLOCKS.map((b, idx) => {
          const Icon = b.icon;
          const reverse = idx % 2 === 1;
          return (
            <section
              key={b.id}
              id={b.id}
              className="container-x grid gap-12 py-20 lg:grid-cols-2 lg:items-center lg:gap-16"
            >
              <Reveal className={reverse ? "lg:order-2" : ""}>
                <div className="relative overflow-hidden rounded-2xl border border-white/8 shadow-[var(--shadow-elegant)]">
                  <img src={b.img} alt="" loading="lazy" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/38 to-transparent" />
                </div>
              </Reveal>
              <div className={reverse ? "lg:order-1" : ""}>
                <Reveal>
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gold/10 text-gold">
                    <Icon className="h-5 w-5" />
                  </span>
                </Reveal>
                <Reveal delay={80}>
                  <h2 className="mt-6 font-display text-3xl font-semibold text-parchment md:text-4xl">
                    {t(`${b.key}.title`)}
                  </h2>
                </Reveal>
                <Reveal delay={140}>
                  <p className="mt-5 leading-relaxed text-parchment/70">{t(`${b.key}.body`)}</p>
                </Reveal>
                <ul className="mt-8 space-y-3">
                  {b.items.map((li, i) => (
                    <Reveal key={li} delay={180 + i * 60} as="li">
                      <div className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        <span className="text-sm text-parchment/80">{t(`${b.key}.${li}`)}</span>
                      </div>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </section>
          );
        })}

        <section className="hairline-t bg-ink py-20">
          <div className="container-x grid gap-10 lg:grid-cols-[auto_1fr] lg:items-start">
            <ShieldCheck className="h-10 w-10 text-gold" />
            <div>
              <Reveal>
                <h3 className="font-display text-2xl font-semibold text-parchment md:text-3xl">
                  {t("services.compliance.title")}
                </h3>
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-4 max-w-3xl leading-relaxed text-parchment/70">
                  {t("services.compliance.body")}
                </p>
              </Reveal>
              <Reveal delay={160}>
                <Link
                  to="/quote"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-ink-deep hover:bg-gold-soft"
                >
                  {t("hero.cta.quote")} <ArrowRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
