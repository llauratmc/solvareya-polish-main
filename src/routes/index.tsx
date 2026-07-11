import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/hero-port.jpg";
import heatingImg from "@/assets/heating-equipment.jpg";
import bosphorusImg from "@/assets/bosphorus.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Solvareya Group | International Trade, Re-Export & Sourcing Solutions" },
      {
        name: "description",
        content:
          "Solvareya Group provides tailored international trade, sourcing, brokerage, re-export and value-added logistics solutions connecting Türkiye, Canada, Europe and global markets.",
      },
      { property: "og:title", content: "Solvareya Group | International Trade & Sourcing" },
      {
        property: "og:description",
        content:
          "Tailored international trade, sourcing, brokerage and re-export solutions between Türkiye, Canada, Europe, the CIS and Asia.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const { t } = useI18n();
  return (
    <div className="min-h-dvh bg-background">
      <Header />
      <main>
        <Hero />
        <Intro />
        <Preview
          eyebrow={t("home.preview.services.eyebrow")}
          title={t("home.preview.services.title")}
          body={t("services.title")}
          img={bosphorusImg}
          to="/services"
          cta={t("home.preview.services.cta")}
          number="01"
        />
        <Preview
          eyebrow={t("home.preview.heating.eyebrow")}
          title={t("heating.page.title")}
          body={t("heating.body")}
          img={heatingImg}
          to="/heating"
          cta={t("home.preview.heating.cta")}
          number="02"
          reverse
        />
        <Preview
          eyebrow={t("home.preview.network.eyebrow")}
          title={t("network.page.title")}
          body={t("network.page.lead")}
          img={heroImg}
          to="/network"
          cta={t("home.preview.network.cta")}
          number="03"
        />
        <WhyStrip />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  const { t } = useI18n();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [allowVideo, setAllowVideo] = useState(false);
  const [mediaState, setMediaState] = useState<"poster" | "loading" | "playing" | "fallback">(
    "poster",
  );

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (
      navigator as Navigator & {
        connection?: EventTarget & { saveData?: boolean; effectiveType?: string };
      }
    ).connection;
    const updateMedia = () => {
      const constrainedConnection =
        connection?.saveData === true ||
        ["slow-2g", "2g"].includes(connection?.effectiveType ?? "");
      const enabled = !reducedMotion.matches && !constrainedConnection;
      setAllowVideo(enabled);
      if (!enabled) setMediaState("poster");
    };

    updateMedia();
    reducedMotion.addEventListener("change", updateMedia);
    connection?.addEventListener("change", updateMedia);

    return () => {
      reducedMotion.removeEventListener("change", updateMedia);
      connection?.removeEventListener("change", updateMedia);
    };
  }, []);

  useEffect(() => {
    if (!allowVideo) return;
    const video = videoRef.current;
    if (!video) return;

    setMediaState("loading");
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");

    const playPromise = video.play();
    if (playPromise) {
      void playPromise.catch(() => setMediaState("fallback"));
    }
  }, [allowVideo]);

  return (
    <section className="home-hero relative isolate overflow-hidden">
      <div className="home-hero__media absolute inset-0 -z-10">
        <img
          src="/hero-port-wide.jpg"
          alt=""
          className="home-hero__poster h-full w-full object-cover"
        />
        {allowVideo && (
          <video
            ref={videoRef}
            className={`home-hero__video ${mediaState === "playing" ? "is-playing" : ""} ${
              mediaState === "fallback" ? "media-fallback" : ""
            }`}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/hero-port-wide.jpg"
            aria-hidden="true"
            onPlaying={() => setMediaState("playing")}
            onError={() => setMediaState("fallback")}
          >
            <source src="/hero-port-wide-mobile.mp4" type="video/mp4" media="(max-width: 640px)" />
            <source src="/hero-port-wide.webm" type="video/webm" />
            <source src="/hero-port-wide.mp4" type="video/mp4" />
          </video>
        )}
        <div className="home-hero__overlay absolute inset-0" />
      </div>

      <div className="container-x flex min-h-screen min-h-[100svh] flex-col justify-center py-32 md:min-h-[92vh] md:py-40">
        <Reveal>
          <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-gold/90">
            <span className="h-px w-8 bg-gold/60" /> {t("hero.eyebrow")}
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="home-hero__title mt-6 max-w-[1080px] font-display font-semibold text-parchment">
            <span className="block">{t("hero.title.line1")}</span>
            <span className="block text-gold-gradient">{t("hero.title.line2")}</span>
          </h1>
        </Reveal>
        <Reveal delay={220}>
          <p className="home-hero__subtitle mt-7 max-w-[610px] text-base leading-relaxed text-parchment/78 md:mt-8 md:text-lg">
            {t("hero.subtitle")}
          </p>
        </Reveal>
        <Reveal delay={320}>
          <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center">
            <Link
              to="/quote"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-ink-deep transition-all hover:-translate-y-px hover:bg-gold-soft"
            >
              {t("hero.cta.quote")} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-parchment transition-colors hover:border-gold hover:text-gold"
            >
              {t("hero.cta.services")}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Intro() {
  const { t } = useI18n();
  return (
    <section className="hairline-t py-24 md:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-[minmax(0,1fr)_1.3fr] lg:items-start">
        <Reveal>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
              {t("home.intro.eyebrow")}
            </p>
            <EditorialTradeMap />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <h2 className="font-display text-3xl font-semibold leading-tight text-parchment md:text-4xl lg:text-5xl">
              {t("home.intro.title")}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-xl leading-relaxed text-parchment/70">
              {t("home.intro.body")}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-gold hover:text-gold-soft"
            >
              {t("home.intro.cta")} <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function EditorialTradeMap() {
  const { t } = useI18n();
  const uid = useId().replace(/:/g, "");
  const [saveData, setSaveData] = useState(false);

  useEffect(() => {
    const connection = (
      navigator as Navigator & {
        connection?: EventTarget & { saveData?: boolean };
      }
    ).connection;
    const updatePreference = () => setSaveData(connection?.saveData === true);

    updatePreference();
    connection?.addEventListener("change", updatePreference);
    return () => connection?.removeEventListener("change", updatePreference);
  }, []);
  const regions = [
    { key: "reach.canada", x: 107, y: 104, tx: 82, ty: 88 },
    { key: "reach.europe", x: 257, y: 94, tx: 242, ty: 78 },
    { key: "reach.turkiye", x: 292, y: 121, tx: 292, ty: 146, hub: true },
    { key: "reach.cis", x: 355, y: 83, tx: 366, ty: 70 },
    { key: "reach.asia", x: 421, y: 133, tx: 439, ty: 121 },
  ];
  const routes = [
    "M292 121 Q198 38 107 104",
    "M292 121 Q278 88 257 94",
    "M292 121 Q320 66 355 83",
    "M292 121 Q361 82 421 133",
  ];

  return (
    <div
      className={`editorial-map ${saveData ? "is-data-saving" : ""}`}
      role="img"
      aria-label={t("home.intro.map.alt")}
    >
      <svg viewBox="0 0 520 250" aria-hidden="true">
        <defs>
          <linearGradient id={`${uid}-map-route`} x1="0" x2="1">
            <stop offset="0" stopColor="#9d7443" stopOpacity=".2" />
            <stop offset=".55" stopColor="#d5b278" stopOpacity=".72" />
            <stop offset="1" stopColor="#9d7443" stopOpacity=".18" />
          </linearGradient>
          <pattern id={`${uid}-map-dots`} width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r=".65" fill="#d5c6ad" opacity=".12" />
          </pattern>
        </defs>

        <g className="editorial-map__land">
          <path d="M31 74L55 45 94 34 133 43 167 65 179 95 160 118 128 123 108 145 72 139 48 119 25 105Z" />
          <path d="M139 151L165 149 180 169 171 203 153 231 139 213 135 179Z" />
          <path d="M235 63L259 52 284 60 296 77 284 95 259 101 236 88Z" />
          <path d="M245 106L277 99 304 119 300 158 280 194 253 180 238 143Z" />
          <path d="M284 72L322 61 365 48 418 54 461 74 491 103 476 126 443 130 422 151 386 144 355 151 321 129 299 106Z" />
          <path d="M379 153L399 160 407 188 394 204 380 183Z" />
          <path d="M430 190L470 183 496 202 483 224 448 222 427 207Z" />
        </g>
        <rect width="520" height="250" fill={`url(#${uid}-map-dots)`} opacity=".5" />

        <g className="editorial-map__routes" fill="none" stroke={`url(#${uid}-map-route)`}>
          {routes.map((route, index) => (
            <path
              key={route}
              d={route}
              style={{ "--map-route-delay": `${index * 0.45}s` } as React.CSSProperties}
            />
          ))}
        </g>

        <g className="editorial-map__points">
          {regions.map((region) => (
            <g key={region.key} className={region.hub ? "is-hub" : ""}>
              <circle
                cx={region.x}
                cy={region.y}
                r={region.hub ? 8 : 6}
                className="editorial-map__halo"
              />
              <circle
                cx={region.x}
                cy={region.y}
                r={region.hub ? 2.8 : 2.2}
                className="editorial-map__dot"
              />
              <text x={region.tx} y={region.ty} textAnchor="middle">
                {t(region.key)}
              </text>
            </g>
          ))}
        </g>
        <path className="editorial-map__rule" d="M22 224H132M388 224H498" />
      </svg>
    </div>
  );
}

function Preview({
  eyebrow,
  title,
  body,
  img,
  to,
  cta,
  number,
  reverse,
}: {
  eyebrow: string;
  title: string;
  body: string;
  img: string;
  to: "/services" | "/heating" | "/network";
  cta: string;
  number: string;
  reverse?: boolean;
}) {
  return (
    <section className="hairline-t py-24 md:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal className={reverse ? "lg:order-2" : ""}>
          <div className="relative overflow-hidden rounded-2xl border border-white/8 shadow-[var(--shadow-elegant)]">
            <img src={img} alt="" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/45 via-transparent to-transparent" />
            <span className="absolute left-6 top-6 font-serif text-4xl italic text-gold/80">
              {number}
            </span>
          </div>
        </Reveal>
        <div className={reverse ? "lg:order-1" : ""}>
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
              {eyebrow}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-3xl font-semibold text-parchment md:text-4xl lg:text-5xl">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-xl leading-relaxed text-parchment/70">{body}</p>
          </Reveal>
          <Reveal delay={200}>
            <Link
              to={to}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-gold hover:text-gold-soft"
            >
              {cta} <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WhyStrip() {
  const { t } = useI18n();
  const items = ["why.1", "why.2", "why.3", "why.4", "why.5", "why.6"];
  return (
    <section className="hairline-t bg-ink py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
            {t("why.eyebrow")}
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold text-parchment md:text-4xl lg:text-5xl">
            {t("why.title")}
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {items.map((k, i) => (
            <Reveal key={k} delay={100 + i * 60}>
              <div className="border-t border-white/8 pt-6">
                <span className="font-serif text-2xl italic text-gold/70">0{i + 1}</span>
                <h3 className="mt-3 font-display text-base font-semibold text-parchment">
                  {t(`${k}.t`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-parchment/65">{t(`${k}.d`)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const { t } = useI18n();
  return (
    <section className="hairline-t py-24 md:py-32">
      <div className="container-x">
        <div className="premium-card p-10 md:p-16">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
                {t("quote.eyebrow")}
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-parchment md:text-4xl lg:text-5xl">
                {t("quote.title")}
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-parchment/70">
                {t("quote.subtitle")}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
              <Link
                to="/quote"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-ink-deep hover:bg-gold-soft"
              >
                {t("hero.cta.quote")} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-parchment hover:border-gold hover:text-gold"
              >
                {t("nav.contact")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
