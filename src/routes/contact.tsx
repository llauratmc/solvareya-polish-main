import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Solvareya Group Ltd." },
      {
        name: "description",
        content: "Get in touch with Solvareya Group Ltd. in Ottawa, Ontario, Canada.",
      },
      { property: "og:title", content: "Contact — Solvareya" },
      { property: "og:description", content: "Contact Solvareya Group Ltd." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();
  return (
    <div className="min-h-dvh bg-background">
      <Header />
      <main className="pt-24 md:pt-32">
        <section className="container-x py-16 md:py-24">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
              {t("nav.contact")}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-parchment md:text-5xl lg:text-6xl">
              {t("contact.page.title")}
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-parchment/75">
              {t("contact.page.lead")}
            </p>
          </Reveal>
        </section>

        <section className="hairline-t py-20 md:py-24">
          <div className="container-x grid gap-14 lg:grid-cols-2">
            <div className="space-y-10">
              <Reveal>
                <div className="border-t border-white/8 pt-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold/80">
                    {t("footer.contact")}
                  </p>
                  <a
                    href="mailto:info@solvareya.com"
                    className="mt-4 inline-flex items-center gap-3 font-display text-2xl text-parchment hover:text-gold md:text-3xl"
                  >
                    <Mail className="h-5 w-5 text-gold/70" />
                    info@solvareya.com
                  </a>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="border-t border-white/8 pt-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold/80">
                    {t("footer.location")}
                  </p>
                  <p className="mt-4 flex items-center gap-3 text-parchment/85">
                    <MapPin className="h-5 w-5 text-gold/70" />
                    Ottawa, Ontario, Canada
                  </p>
                </div>
              </Reveal>
              <Reveal delay={180}>
                <p className="max-w-md text-sm leading-relaxed text-parchment/60">
                  {t("contact.response")}
                </p>
              </Reveal>
            </div>

            <div>
              <Reveal>
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
                  {t("contact.help.title")}
                </p>
              </Reveal>
              <div className="mt-8 space-y-6">
                {["contact.help.d1", "contact.help.d2", "contact.help.d3"].map((k, i) => (
                  <Reveal key={k} delay={100 + i * 80}>
                    <div className="flex items-start gap-4 border-t border-white/8 pt-5">
                      <span className="font-serif text-xl italic text-gold/70">0{i + 1}</span>
                      <p className="text-parchment/80">{t(k)}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={340}>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link
                    to="/quote"
                    className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-ink-deep hover:bg-gold-soft"
                  >
                    {t("hero.cta.quote")} <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-parchment hover:border-gold hover:text-gold"
                  >
                    {t("home.preview.services.cta")}
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
