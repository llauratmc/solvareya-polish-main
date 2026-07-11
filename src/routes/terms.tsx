import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n/I18nProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — Solvareya Group Ltd." },
      {
        name: "description",
        content: "Terms governing the use of the Solvareya Group Ltd. website.",
      },
      { property: "og:title", content: "Terms of Use — Solvareya Group Ltd." },
      { property: "og:url", content: "https://www.solvareya.com/terms" },
    ],
    links: [{ rel: "canonical", href: "https://www.solvareya.com/terms" }],
  }),
  component: Page,
});

function Page() {
  const { t } = useI18n();
  return (
    <div className="min-h-dvh bg-background">
      <Header />
      <main className="container-x max-w-3xl pb-24 pt-32 md:pt-40">
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
          {t("footer.legal")}
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-parchment md:text-5xl">
          {t("terms.title")}
        </h1>
        <p className="mt-3 text-sm text-parchment/50">{t("terms.updated")}</p>
        <div className="mt-10 space-y-6 leading-relaxed text-parchment/75">
          <p>{t("terms.p1")}</p>
          <p>{t("terms.p2")}</p>
          <p>{t("terms.p3")}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
