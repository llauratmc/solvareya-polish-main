import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Ship } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { WorldMap } from "@/components/WorldMap";

export const Route = createFileRoute("/network")({
  head: () => ({
    meta: [
      { title: "Global Trade Network — Solvareya Group Ltd." },
      {
        name: "description",
        content:
          "Solvareya's international partner network connecting Canada, Türkiye, Europe, the CIS and Asia.",
      },
      { property: "og:title", content: "Global Trade Network — Solvareya" },
      {
        property: "og:description",
        content: "International partner network across key trade corridors.",
      },
      { property: "og:url", content: "/network" },
    ],
    links: [{ rel: "canonical", href: "/network" }],
  }),
  component: NetworkPage,
});

function NetworkPage() {
  const { t } = useI18n();
  return (
    <div className="min-h-dvh bg-background">
      <Header />
      <main className="pt-24 md:pt-32">
        <section className="container-x py-16 md:py-24">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
              {t("reach.eyebrow")}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight text-parchment md:text-5xl lg:text-6xl">
              {t("network.page.title")}
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-parchment/75">
              {t("network.page.lead")}
            </p>
          </Reveal>
        </section>

        <section className="hairline-t overflow-hidden py-12 md:py-20">
          <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-10">
            <Reveal>
              <WorldMap />
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 max-w-xl text-sm text-parchment/60">
                <Ship className="mr-2 inline h-4 w-4 text-gold/70" />
                {t("network.disclaimer")}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="hairline-t py-20">
          <div className="container-x flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <p className="max-w-xl text-parchment/75">{t("reach.subtitle")}</p>
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-ink-deep hover:bg-gold-soft"
            >
              {t("hero.cta.quote")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
