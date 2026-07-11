import { useI18n } from "@/i18n/I18nProvider";
import { LOCALES, type Locale } from "@/i18n/translations";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label={`${t("lang.label")}: ${locale.toUpperCase()}`}
          className="inline-flex h-9 min-w-[58px] items-center justify-center gap-1.5 border border-white/12 bg-ink-deep/35 px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-parchment/85 outline-none transition-colors hover:border-gold/40 hover:text-gold focus-visible:ring-2 focus-visible:ring-gold/50"
        >
          {locale}
          <ChevronDown className="h-3 w-3 opacity-65" aria-hidden="true" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="min-w-[76px] rounded-sm border-white/12 bg-ink-deep p-1 shadow-[0_18px_45px_-18px_rgb(0_0_0/.75)]"
      >
        <DropdownMenuRadioGroup
          value={locale}
          onValueChange={(value) => setLocale(value as Locale)}
        >
          {LOCALES.map((language: Locale) => (
            <DropdownMenuRadioItem
              key={language}
              value={language}
              className="cursor-pointer rounded-none py-2 pl-7 pr-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-parchment/75 focus:bg-white/[0.06] focus:text-gold"
            >
              {language}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
