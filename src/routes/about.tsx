import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import bosphorusImg from "@/assets/bosphorus.jpg";
import warehouseImg from "@/assets/warehouse.jpg";
import portImg from "@/assets/hero-port.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Solvareya Group Ltd." },
      {
        name: "description",
        content:
          "About Solvareya Group Ltd. — an international B2B trade company coordinating routes between Canada, Türkiye, Europe, the CIS and Asia.",
      },
      { property: "og:title", content: "About — Solvareya Group Ltd." },
      { property: "og:description", content: "Solvareya's approach to international B2B trade." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useI18n();
  const sections = [
    { key: "about.s1", number: "01", image: portImg, reverse: false },
    { key: "about.s2", number: "02", image: bosphorusImg, reverse: true },
    { key: "about.s3", number: "03", image: warehouseImg, reverse: false },
  ];
  return (
    <div className="min-h-dvh bg-background">
      <Header />
      <main className="pt-24 md:pt-32">
        <section className="container-x pb-8 pt-16 md:pb-12 md:pt-24 lg:pb-16">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
              {t("about.hero.eyebrow")}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight text-parchment md:text-5xl lg:text-6xl">
              {t("about.hero.title")}
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-parchment/75">
              {t("about.hero.lead")}
            </p>
          </Reveal>
        </section>

        <div className="gold-divider container-x" />

        <section className="container-x space-y-20 pb-20 pt-8 md:space-y-28 md:pb-28 md:pt-12 lg:space-y-32 lg:pt-16">
          {sections.map((section, index) => (
            <article
              key={section.key}
              className="grid items-center gap-10 md:gap-14 lg:grid-cols-2 lg:gap-20"
            >
              <Reveal className={section.reverse ? "lg:order-2" : ""}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/8 bg-ink shadow-[var(--shadow-elegant)]">
                  <img
                    src={section.image}
                    alt={t(`${section.key}.alt`)}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out motion-safe:hover:scale-[1.02]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-deep/35 via-transparent to-transparent" />
                </div>
              </Reveal>

              <Reveal delay={100 + index * 40} className={section.reverse ? "lg:order-1" : ""}>
                <div className="border-t border-white/10 pt-6 md:pt-8">
                  <span className="font-serif text-3xl italic text-gold/70">{section.number}</span>
                  <h2 className="mt-4 font-display text-2xl font-semibold text-parchment md:text-3xl lg:text-4xl">
                    {t(`${section.key}.t`)}
                  </h2>
                  <p className="mt-5 max-w-xl leading-relaxed text-parchment/70 md:text-lg">
                    {t(`${section.key}.d`)}
                  </p>
                </div>
              </Reveal>
            </article>
          ))}
        </section>

        <section
          className="relative hairline-t py-24 md:py-32"
          style={{
            backgroundImage: `linear-gradient(180deg, oklch(0.17 0.03 250 / 0.76) 0%, oklch(0.17 0.03 250 / 0.94) 100%), url(${warehouseImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container-x">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
                {t("about.values.eyebrow")}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold text-parchment md:text-4xl lg:text-5xl">
                {t("about.values.title")}
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {["about.v1", "about.v2", "about.v3", "about.v4"].map((k, i) => (
                <Reveal key={k} delay={140 + i * 80}>
                  <div className="border-t border-gold/40 pt-5">
                    <span className="font-serif text-lg italic text-gold/80">0{i + 1}</span>
                    <h3 className="mt-3 font-display text-base font-semibold text-parchment">
                      {t(`${k}.t`)}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-parchment/70">{t(`${k}.d`)}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="hairline-t py-20">
          <div className="container-x">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <p className="max-w-xl text-parchment/75">{t("value.body")}</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-parchment hover:border-gold hover:text-gold"
                >
                  {t("home.preview.services.cta")}
                </Link>
                <Link
                  to="/quote"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-ink-deep hover:bg-gold-soft"
                >
                  {t("hero.cta.quote")} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
