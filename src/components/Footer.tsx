import { Link } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import logo from "@/assets/solvareya-logo.png";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="hairline-t bg-ink-deep">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="inline-flex items-center" aria-label="Solvareya">
              <img
                src={logo}
                alt="Solvareya Group Ltd."
                width={2454}
                height={1029}
                className="h-auto w-48 object-contain"
              />
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-parchment/60">
              {t("footer.desc")}
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
              {t("footer.company")}
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-parchment/70">
              <li>
                <Link to="/" className="hover:text-gold">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold">
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link to="/heating" className="hover:text-gold">
                  {t("nav.heating")}
                </Link>
              </li>
              <li>
                <Link to="/network" className="hover:text-gold">
                  {t("nav.network")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
              {t("footer.getintouch")}
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-parchment/70">
              <li>
                <Link to="/quote" className="hover:text-gold">
                  {t("nav.quote")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold">
                  {t("nav.contact")}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-gold">
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-gold">
                  {t("footer.terms")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
              {t("footer.contact")}
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-parchment/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" />
                <span>{t("footer.location")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" />
                <a href="mailto:info@solvareya.com" className="hover:text-gold">
                  info@solvareya.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/5 pt-6">
          <p className="text-xs text-parchment/50">{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}
