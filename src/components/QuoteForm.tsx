import { useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import { submitQuote } from "@/lib/quote.functions";

const SERVICES = [
  "quote.f.opt.heating",
  "quote.f.opt.brokerage",
  "quote.f.opt.alternative",
  "quote.f.opt.warehousing",
  "quote.f.opt.sourcing",
  "quote.f.opt.trade",
];

type FieldErrors = Partial<Record<string, string>>;

export function QuoteForm() {
  const { t, locale } = useI18n();
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [errorText, setErrorText] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = {
      first_name: String(fd.get("first_name") || "").trim(),
      last_name: String(fd.get("last_name") || "").trim(),
      company_name: String(fd.get("company_name") || "").trim(),
      business_email: String(fd.get("business_email") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      country: String(fd.get("country") || "").trim(),
      service_required: String(fd.get("service_required") || "").trim(),
      product_requirement: String(fd.get("product_requirement") || "").trim(),
      origin_country: String(fd.get("origin_country") || "").trim(),
      destination_country: String(fd.get("destination_country") || "").trim(),
      estimated_quantity: String(fd.get("estimated_quantity") || "").trim(),
      message: String(fd.get("message") || "").trim(),
      consent: fd.get("consent") === "on",
      locale,
      honeypot: String(fd.get("website") || ""),
    };

    const errs: FieldErrors = {};
    if (!data.first_name) errs.first_name = t("val.required");
    if (!data.last_name) errs.last_name = t("val.required");
    if (!data.company_name) errs.company_name = t("val.required");
    if (!data.business_email) errs.business_email = t("val.required");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.business_email))
      errs.business_email = t("val.email");
    if (!data.country) errs.country = t("val.required");
    if (!data.service_required) errs.service_required = t("val.required");
    if (!data.message) errs.message = t("val.required");
    else if (data.message.length < 5) errs.message = t("val.min");
    if (!data.consent) errs.consent = t("val.consent");

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");
    setErrorText(null);
    try {
      await submitQuote({ data: { ...data, consent: true as const } });
      setStatus("ok");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorText(t("quote.error"));
    }
  }

  if (status === "ok") {
    return (
      <div className="premium-card p-10 text-center">
        <h3 className="font-display text-2xl text-parchment">{t("quote.success.title")}</h3>
        <p className="mt-3 text-parchment/70">{t("quote.success.body")}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full border border-gold/40 px-5 py-2 text-sm font-medium text-gold hover:bg-gold/10"
        >
          {t("quote.success.again")}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="premium-card p-6 md:p-10">
      {/* Honeypot */}
      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <SectionHeading number="01" label={t("quote.section.company")} />
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <Field name="first_name" label={t("quote.f.first")} error={errors.first_name} required />
        <Field name="last_name" label={t("quote.f.last")} error={errors.last_name} required />
        <Field name="company_name" label={t("quote.f.company")} error={errors.company_name} required />
        <Field
          name="business_email"
          type="email"
          label={t("quote.f.email")}
          error={errors.business_email}
          required
        />
        <Field name="phone" type="tel" label={t("quote.f.phone")} error={errors.phone} />
        <Field name="country" label={t("quote.f.country")} error={errors.country} required />
      </div>

      <div className="mt-10">
        <SectionHeading number="02" label={t("quote.section.requirement")} />
      </div>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div className="md:col-span-2">
          <Label required htmlFor="service_required">{t("quote.f.service")}</Label>
          <select
            id="service_required"
            name="service_required"
            required
            defaultValue=""
            className={selectCls(!!errors.service_required)}
          >
            <option value="" disabled>
              {t("quote.f.select")}
            </option>
            {SERVICES.map((k) => (
              <option key={k} value={t(k)}>
                {t(k)}
              </option>
            ))}
          </select>
          {errors.service_required && <ErrorText>{errors.service_required}</ErrorText>}
        </div>

        <div className="md:col-span-2">
          <Field name="product_requirement" label={t("quote.f.product")} />
        </div>

        <Field name="origin_country" label={t("quote.f.origin")} />
        <Field name="destination_country" label={t("quote.f.destination")} />
        <div className="md:col-span-2">
          <Field name="estimated_quantity" label={t("quote.f.quantity")} />
        </div>

        <div className="md:col-span-2">
          <Label required htmlFor="message">{t("quote.f.message")}</Label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={inputCls(!!errors.message)}
          />
          {errors.message && <ErrorText>{errors.message}</ErrorText>}
        </div>
      </div>

      <div className="mt-6 flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          className="mt-1 h-4 w-4 shrink-0 accent-[oklch(0.74_0.11_82)]"
        />
        <label htmlFor="consent" className="text-sm text-parchment/75">
          {t("quote.f.consent")}
        </label>
      </div>
      {errors.consent && <ErrorText>{errors.consent}</ErrorText>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-gold px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-ink-deep transition-all hover:-translate-y-px hover:bg-gold-soft disabled:opacity-60 md:w-auto"
      >
        {status === "sending" ? t("quote.f.submitting") : t("quote.f.submit")}
      </button>

      {errorText && <p className="mt-4 text-sm text-destructive">{errorText}</p>}
    </form>
  );
}

function SectionHeading({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-baseline gap-4 border-b border-white/8 pb-3">
      <span className="font-serif text-lg italic text-gold/70">{number}</span>
      <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-parchment/70">
        {label}
      </span>
    </div>
  );
}

function inputCls(err: boolean) {
  return `mt-2 block w-full rounded-lg border bg-white/[0.03] px-4 py-3 text-sm text-parchment placeholder:text-parchment/40 outline-none transition focus:border-gold focus:bg-white/[0.05] focus:ring-2 focus:ring-gold/30 ${
    err ? "border-destructive/70" : "border-white/10"
  }`;
}
function selectCls(err: boolean) {
  return `${inputCls(err)} appearance-none pr-10 bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23c9a84c%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:16px_16px] bg-[position:right_1rem_center] bg-no-repeat`;
}

function Label({
  htmlFor,
  required,
  children,
}: {
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="text-[11px] font-semibold uppercase tracking-widest text-parchment/60">
      {children}
      {required && <span className="ml-1 text-gold">*</span>}
    </label>
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return <p className="mt-1.5 text-xs text-destructive/90">{children}</p>;
}

function Field({
  name,
  label,
  type = "text",
  required,
  error,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <Label htmlFor={name} required={required}>
        {label}
      </Label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete="off"
        className={inputCls(!!error)}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}
