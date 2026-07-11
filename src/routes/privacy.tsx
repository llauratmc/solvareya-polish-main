import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n/I18nProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Solvareya Group Ltd." },
      {
        name: "description",
        content: "How Solvareya Group Ltd. handles inquiries and personal data.",
      },
      { property: "og:title", content: "Privacy Policy — Solvareya Group Ltd." },
      { property: "og:url", content: "https://www.solvareya.com/privacy" },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: "https://www.solvareya.com/privacy" }],
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
          {t("privacy.title")}
        </h1>
        <p className="mt-3 text-sm text-parchment/50">{t("privacy.updated")}</p>
        <div className="mt-10 space-y-6 leading-relaxed text-parchment/75">
          <p>{t("privacy.p1")}</p>
          <p>{t("privacy.p2")}</p>
          <p>{t("privacy.p3")}</p>
          <p>{t("privacy.p4")}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
