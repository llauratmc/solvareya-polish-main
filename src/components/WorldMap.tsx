import { useEffect, useId, useRef, useState } from "react";
import { Activity, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

type RegionId = "canada" | "turkiye" | "europe" | "cis" | "asia";

type Region = {
  id: RegionId;
  label: string;
  body: string;
  x: number;
  y: number;
  labelX: number;
  labelY: number;
  anchor?: "start" | "middle" | "end";
  coordinate: string;
};

const REGION_DATA: Omit<Region, "label">[] = [
  {
    id: "canada",
    body: "network.canada.d",
    x: 205,
    y: 226,
    labelX: 168,
    labelY: 195,
    anchor: "middle",
    coordinate: "45.4°N · 75.7°W",
  },
  {
    id: "turkiye",
    body: "network.turkiye.d",
    x: 598,
    y: 268,
    labelX: 598,
    labelY: 313,
    anchor: "middle",
    coordinate: "41.0°N · 29.0°E",
  },
  {
    id: "europe",
    body: "network.europe.d",
    x: 520,
    y: 214,
    labelX: 500,
    labelY: 181,
    anchor: "middle",
    coordinate: "50.1°N · 14.4°E",
  },
  {
    id: "cis",
    body: "network.cis.d",
    x: 710,
    y: 190,
    labelX: 724,
    labelY: 158,
    anchor: "middle",
    coordinate: "55.8°N · 37.6°E",
  },
  {
    id: "asia",
    body: "network.asia.d",
    x: 850,
    y: 287,
    labelX: 872,
    labelY: 255,
    anchor: "middle",
    coordinate: "31.2°N · 121.5°E",
  },
];

const ROUTES: { id: Exclude<RegionId, "turkiye">; d: string }[] = [
  { id: "canada", d: "M 598 268 Q 400 62 205 226" },
  { id: "europe", d: "M 598 268 Q 564 197 520 214" },
  { id: "cis", d: "M 598 268 Q 651 151 710 190" },
  { id: "asia", d: "M 598 268 Q 744 205 850 287" },
];

const LAND_PATHS = [
  "M70 132L105 91 162 68 224 78 270 111 319 121 342 159 315 196 278 207 250 244 209 252 176 231 148 240 118 212 88 202 61 168Z",
  "M263 271L304 264 331 294 322 337 304 365 294 410 270 456 252 432 246 387 229 356 240 315Z",
  "M433 134L473 113 516 121 548 143 567 171 552 195 521 198 492 216 452 201 427 168Z",
  "M468 221L515 204 565 220 591 263 578 317 550 371 510 391 480 348 459 299 451 255Z",
  "M541 175L595 162 632 182 630 220 598 237 562 221 538 201Z",
  "M574 119L635 91 715 82 790 95 842 123 902 138 939 171 926 207 891 219 874 256 832 266 790 246 747 255 702 231 658 222 624 191Z",
  "M704 239L740 248 754 294 736 323 714 293 698 261Z",
  "M815 273L852 267 891 294 879 325 844 314Z",
  "M815 371L871 350 930 370 941 405 908 431 856 424 816 400Z",
  "M349 145L374 128 400 144 393 168 365 174Z",
];

function isActivationKey(event: React.KeyboardEvent<SVGGElement>) {
  return event.key === "Enter" || event.key === " ";
}

export function WorldMap() {
  const { t } = useI18n();
  const [active, setActive] = useState<RegionId>("turkiye");
  const [visible, setVisible] = useState(false);
  const [depth, setDepth] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const uid = useId().replace(/:/g, "");
  const titleId = `${uid}-map-title`;
  const descriptionId = `${uid}-map-description`;
  const regions: Region[] = REGION_DATA.map((region) => ({
    ...region,
    label: `reach.${region.id}`,
  }));
  const selected = regions.find((region) => region.id === active) ?? regions[1];

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;
    const onScroll = () => {
      const rect = rootRef.current?.getBoundingClientRect();
      if (!rect) return;
      const progress = Math.max(
        -1,
        Math.min(1, (window.innerHeight / 2 - rect.top) / window.innerHeight),
      );
      setDepth(progress);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const selectRegion = (id: RegionId) => setActive(id);
  const isRouteActive = (id: RegionId) => active === "turkiye" || active === id;

  return (
    <div ref={rootRef} className={`network-map ${visible ? "network-map--visible" : ""}`}>
      <div className="network-map__topbar">
        <div>
          <p className="network-map__kicker">{t("network.intelligence")}</p>
          <p className="network-map__subline">{t("network.corridor")}</p>
        </div>
        <div className="network-map__status" aria-label={t("network.active")}>
          <span className="network-map__status-dot" aria-hidden="true" />
          {t("network.active")}
        </div>
      </div>

      <div className="network-map__stage">
        <svg
          viewBox="0 0 1000 520"
          className="network-map__svg"
          role="group"
          aria-labelledby={`${titleId} ${descriptionId}`}
          style={{ "--map-depth": `${depth * 5}px` } as React.CSSProperties}
        >
          <title id={titleId}>{t("network.map.title")}</title>
          <desc id={descriptionId}>{t("network.map.description")}</desc>
          <defs>
            <linearGradient id={`${uid}-land`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#263342" />
              <stop offset="0.55" stopColor="#182431" />
              <stop offset="1" stopColor="#111b26" />
            </linearGradient>
            <linearGradient id={`${uid}-route`} x1="0" x2="1">
              <stop offset="0" stopColor="#b98849" stopOpacity=".32" />
              <stop offset=".5" stopColor="#e2c38e" />
              <stop offset="1" stopColor="#b98849" stopOpacity=".45" />
            </linearGradient>
            <radialGradient id={`${uid}-ocean`} cx="55%" cy="47%" r="66%">
              <stop offset="0" stopColor="#172839" />
              <stop offset="1" stopColor="#09121d" />
            </radialGradient>
            <filter id={`${uid}-glow`} x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <pattern id={`${uid}-grid`} width="50" height="50" patternUnits="userSpaceOnUse">
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="#d8c29e"
                strokeOpacity=".075"
                strokeWidth=".7"
              />
            </pattern>
            <pattern id={`${uid}-texture`} width="9" height="9" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r=".7" fill="#d7c4a1" opacity=".13" />
            </pattern>
          </defs>

          <rect width="1000" height="520" fill={`url(#${uid}-ocean)`} />
          <rect x="18" y="18" width="964" height="484" rx="2" fill={`url(#${uid}-grid)`} />
          <g className="network-map__land" transform={`translate(0 ${depth * 0.4})`}>
            {LAND_PATHS.map((path, index) => (
              <path
                key={index}
                d={path}
                fill={`url(#${uid}-land)`}
                stroke="#8e795d"
                strokeOpacity=".25"
                strokeWidth="1"
              />
            ))}
            {LAND_PATHS.map((path, index) => (
              <path key={`texture-${index}`} d={path} fill={`url(#${uid}-texture)`} />
            ))}
          </g>

          <g className="network-map__coordinates" aria-hidden="true">
            <text x="36" y="48">
              60° N
            </text>
            <text x="36" y="488">
              30° S
            </text>
            <text x="895" y="48">
              120° E
            </text>
            <text x="895" y="488">
              PACIFIC
            </text>
            <path d="M38 58h38M38 462h38M924 58h38M924 462h38" />
          </g>

          <g fill="none">
            {ROUTES.map((route, index) => {
              const highlighted = isRouteActive(route.id);
              return (
                <g
                  key={route.id}
                  className={`network-route ${highlighted ? "network-route--active" : ""}`}
                  style={{ "--route-delay": `${180 + index * 180}ms` } as React.CSSProperties}
                >
                  <path d={route.d} className="network-route__glow" />
                  <path
                    id={`${uid}-route-${route.id}`}
                    d={route.d}
                    className="network-route__line"
                    stroke={`url(#${uid}-route)`}
                  />
                  <circle r="3.2" className="network-route__signal" filter={`url(#${uid}-glow)`}>
                    <animateMotion
                      dur={`${5.5 + index * 0.6}s`}
                      repeatCount="indefinite"
                      begin={`${index * 0.7}s`}
                    >
                      <mpath href={`#${uid}-route-${route.id}`} />
                    </animateMotion>
                  </circle>
                </g>
              );
            })}
          </g>

          <g className="network-map__points">
            {regions.map((region, index) => {
              const selectedPoint = region.id === active;
              const hub = region.id === "turkiye";
              return (
                <g
                  key={region.id}
                  role="button"
                  tabIndex={0}
                  aria-label={`${t("network.select")} ${t(region.label)}`}
                  aria-pressed={selectedPoint}
                  className={`network-point ${selectedPoint ? "network-point--active" : ""} ${hub ? "network-point--hub" : ""}`}
                  style={{ "--point-delay": `${720 + index * 120}ms` } as React.CSSProperties}
                  onClick={() => selectRegion(region.id)}
                  onMouseEnter={() => selectRegion(region.id)}
                  onKeyDown={(event) => {
                    if (isActivationKey(event)) {
                      event.preventDefault();
                      selectRegion(region.id);
                    }
                  }}
                >
                  <circle
                    cx={region.x}
                    cy={region.y}
                    r={hub ? 26 : 22}
                    className="network-point__target"
                  />
                  <circle
                    cx={region.x}
                    cy={region.y}
                    r={hub ? 14 : 11}
                    className="network-point__halo"
                  />
                  <circle
                    cx={region.x}
                    cy={region.y}
                    r={hub ? 5.5 : 4.5}
                    className="network-point__core"
                  />
                  <text
                    x={region.labelX}
                    y={region.labelY}
                    textAnchor={region.anchor}
                    className="network-point__label"
                  >
                    {t(region.label)}
                  </text>
                  <text
                    x={region.labelX}
                    y={region.labelY + 16}
                    textAnchor={region.anchor}
                    className="network-point__coord"
                  >
                    {region.coordinate}
                  </text>
                </g>
              );
            })}
          </g>

          <text x="392" y="346" className="network-map__corridor-label">
            {t("network.corridor.label")}
          </text>
        </svg>

        <div className="network-map__legend" aria-hidden="true">
          <span>01</span>
          <span>{t("network.route.status")}</span>
          <strong>{t("network.route.open")}</strong>
        </div>
      </div>

      <div className="network-map__controls">
        <div className="network-map__selector" role="group" aria-label={t("network.regions.title")}>
          {regions.map((region) => (
            <button
              key={region.id}
              type="button"
              className={region.id === active ? "is-active" : ""}
              aria-pressed={region.id === active}
              onClick={() => selectRegion(region.id)}
            >
              <span aria-hidden="true">{String(regions.indexOf(region) + 1).padStart(2, "0")}</span>
              {t(region.label)}
            </button>
          ))}
        </div>

        <section className="network-map__panel" aria-live="polite" aria-atomic="true">
          <div className="network-map__panel-index">
            {String(regions.indexOf(selected) + 1).padStart(2, "0")}
          </div>
          <div>
            <p className="network-map__panel-label">
              <Activity aria-hidden="true" />
              {t("network.region.profile")}
            </p>
            <h2>{t(selected.label)}</h2>
            <p>{t(selected.body)}</p>
          </div>
          <ArrowUpRight className="network-map__panel-icon" aria-hidden="true" />
        </section>
      </div>
    </div>
  );
}
