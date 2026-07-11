import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const Schema = z.object({
  first_name: z.string().trim().min(1).max(100),
  last_name: z.string().trim().min(1).max(100),
  company_name: z.string().trim().min(1).max(200),
  business_email: z.string().trim().email().max(255),
  phone: z.string().trim().max(50).optional().default(""),
  country: z.string().trim().min(2).max(100),
  service_required: z.string().trim().min(2).max(100),
  product_requirement: z.string().trim().max(500).optional().default(""),
  origin_country: z.string().trim().max(100).optional().default(""),
  destination_country: z.string().trim().max(100).optional().default(""),
  estimated_quantity: z.string().trim().max(100).optional().default(""),
  message: z.string().trim().min(5).max(4000),
  consent: z.literal(true),
  locale: z.string().max(5).optional().default("en"),
  honeypot: z.string().max(0).optional().default(""),
});

export const submitQuote = createServerFn({ method: "POST" })
  .validator((data: unknown) => Schema.parse(data))
  .handler(async ({ data }) => {
    const { createClient } = await import("@supabase/supabase-js");
    const url = process.env.SUPABASE_URL ?? process.env.VITE_SUPABASE_URL;
    const key = process.env.SUPABASE_PUBLISHABLE_KEY ?? process.env.VITE_SUPABASE_PUBLISHABLE_KEY;
    if (!url || !key) throw new Error("Backend not configured");
    const supabase = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
    const { error } = await supabase.from("quote_requests").insert({
      first_name: data.first_name,
      last_name: data.last_name,
      company_name: data.company_name,
      business_email: data.business_email,
      phone: data.phone || null,
      country: data.country,
      service_required: data.service_required,
      product_requirement: data.product_requirement || null,
      origin_country: data.origin_country || null,
      destination_country: data.destination_country || null,
      estimated_quantity: data.estimated_quantity || null,
      message: data.message,
      consent: data.consent,
      locale: data.locale,
      honeypot: data.honeypot || null,
    });
    if (error) {
      console.error("quote_requests insert error", error);
      throw new Error("Submission failed");
    }
    return { ok: true as const };
  });
