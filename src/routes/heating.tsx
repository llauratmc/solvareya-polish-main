import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Flame,
  Droplets,
  Thermometer,
  Home,
  Building2,
  PackageCheck,
} from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import heatingImg from "@/assets/heating-equipment.jpg";
import warehouseImg from "@/assets/warehouse.jpg";

export const Route = createFileRoute("/heating")({
  head: () => ({
    meta: [
      { title: "Heating Equipment from Türkiye — Solvareya Group Ltd." },
      {
        name: "description",
        content:
          "Wholesale sourcing of boilers, water heaters, radiators and residential and commercial heating solutions from Turkish manufacturers.",
      },
      { property: "og:title", content: "Heating Equipment from Türkiye" },
      {
        property: "og:description",
        content: "Wholesale heating equipment from Turkish manufacturers.",
      },
      { property: "og:url", content: "/heating" },
    ],
    links: [{ rel: "canonical", href: "/heating" }],
  }),
  component: HeatingPage,
});

const CATS = [
  { k: "heating.cat.boilers", icon: Flame },
  { k: "heating.cat.wh", icon: Droplets },
  { k: "heating.cat.rad", icon: Thermometer },
  { k: "heating.cat.res", icon: Home },
  { k: "heating.cat.com", icon: Building2 },
  { k: "heating.cat.ws", icon: PackageCheck },
];

function HeatingPage() {
  const { t } = useI18n();
  return (
    <div className="min-h-dvh bg-background">
      <Header />
      <main className="pt-24 md:pt-32">
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img src={heatingImg} alt="" className="h-full w-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-ink-deep/55 via-ink-deep/72 to-background" />
          </div>
          <div className="container-x py-20 md:py-28">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
                {t("heating.eyebrow")}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-parchment md:text-5xl lg:text-6xl">
                {t("heating.page.title")}
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-parchment/75">
                {t("heating.page.lead")}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="hairline-t py-20 md:py-24">
          <div className="container-x">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
                {t("heating.cat.title")}
              </p>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {CATS.map((c, i) => {
                const Icon = c.icon;
                return (
                  <Reveal key={c.k} delay={100 + i * 60}>
                    <div className="premium-card premium-card-hover h-full p-8">
                      <Icon className="h-6 w-6 text-gold" />
                      <h3 className="mt-6 font-display text-lg font-semibold text-parchment">
                        {t(`${c.k}.t`)}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-parchment/65">
                        {t(`${c.k}.d`)}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className="hairline-t py-20 md:py-24"
          style={{
            backgroundImage: `linear-gradient(180deg, oklch(0.17 0.03 250 / 0.76) 0%, oklch(0.17 0.03 250 / 0.94) 100%), url(${warehouseImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container-x grid gap-10 lg:grid-cols-[minmax(0,1fr)_1.4fr]">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold text-parchment md:text-4xl">
                {t("heating.for.title")}
              </h2>
            </Reveal>
            <div className="space-y-6">
              {["heating.for.d1", "heating.for.d2", "heating.for.d3"].map((k, i) => (
                <Reveal key={k} delay={100 + i * 80}>
                  <div className="flex items-start gap-5 border-t border-white/8 pt-5">
                    <span className="font-serif text-2xl italic text-gold/70">0{i + 1}</span>
                    <p className="text-parchment/80">{t(k)}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="hairline-t py-20 md:py-24">
          <div className="container-x">
            <Reveal>
              <div className="premium-card flex flex-col items-start justify-between gap-6 p-10 md:flex-row md:items-center md:p-14">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-parchment md:text-3xl">
                    {t("heating.title")}
                  </h3>
                  <p className="mt-3 max-w-xl text-parchment/70">{t("heating.body")}</p>
                </div>
                <Link
                  to="/quote"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-ink-deep hover:bg-gold-soft"
                >
                  {t("heating.cta.full")} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
