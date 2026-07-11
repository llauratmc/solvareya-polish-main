
CREATE TABLE public.quote_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  company_name TEXT NOT NULL,
  business_email TEXT NOT NULL,
  phone TEXT,
  country TEXT NOT NULL,
  service_required TEXT NOT NULL,
  product_requirement TEXT,
  message TEXT NOT NULL,
  consent BOOLEAN NOT NULL DEFAULT false,
  locale TEXT,
  honeypot TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.quote_requests TO anon, authenticated;
GRANT ALL ON public.quote_requests TO service_role;

ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a quote request"
  ON public.quote_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    consent = true
    AND coalesce(honeypot, '') = ''
    AND length(first_name) BETWEEN 1 AND 100
    AND length(last_name) BETWEEN 1 AND 100
    AND length(company_name) BETWEEN 1 AND 200
    AND length(business_email) BETWEEN 3 AND 255
    AND length(country) BETWEEN 2 AND 100
    AND length(service_required) BETWEEN 2 AND 100
    AND length(message) BETWEEN 5 AND 4000
  );
