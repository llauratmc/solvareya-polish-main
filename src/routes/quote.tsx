import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n/I18nProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { QuoteForm } from "@/components/QuoteForm";
import { Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Request a Quote — Solvareya Group Ltd." },
      {
        name: "description",
        content:
          "Send the details of your international trade requirement — our team will respond with next steps.",
      },
      { property: "og:title", content: "Request a Quote — Solvareya" },
      { property: "og:description", content: "Request a quote from Solvareya Group Ltd." },
      { property: "og:url", content: "/quote" },
    ],
    links: [{ rel: "canonical", href: "/quote" }],
  }),
  component: QuotePage,
});

function QuotePage() {
  const { t } = useI18n();
  return (
    <div className="min-h-dvh bg-background">
      <Header />
      <main className="pt-24 md:pt-32">
        <section className="container-x py-16 md:py-24">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_1.4fr]">
            <div>
              <Reveal>
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
                  {t("quote.eyebrow")}
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-4 font-display text-4xl font-semibold text-parchment md:text-5xl lg:text-6xl">
                  {t("quote.page.title")}
                </h1>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-6 max-w-md leading-relaxed text-parchment/75">
                  {t("quote.page.lead")}
                </p>
              </Reveal>
              <Reveal delay={220}>
                <div className="mt-10 space-y-5 border-t border-white/8 pt-6 text-sm text-parchment/75">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold/80">
                      {t("footer.contact")}
                    </p>
                    <a
                      href="mailto:info@solvareya.com"
                      className="mt-2 flex items-center gap-2 hover:text-gold"
                    >
                      <Mail className="h-4 w-4 text-gold/70" /> info@solvareya.com
                    </a>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold/80">
                      {t("footer.location")}
                    </p>
                    <p className="mt-2 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gold/70" /> Ottawa, Ontario, Canada
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <QuoteForm />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
