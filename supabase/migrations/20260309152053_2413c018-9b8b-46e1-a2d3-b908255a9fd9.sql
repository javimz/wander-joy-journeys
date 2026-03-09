
-- Table for travel inquiry requests
CREATE TABLE public.inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  destination TEXT NOT NULL,
  travel_dates TEXT,
  travelers INTEGER DEFAULT 1,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public form)
CREATE POLICY "Anyone can submit an inquiry"
ON public.inquiries FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only service role can read (admin access only)
CREATE POLICY "Service role can read inquiries"
ON public.inquiries FOR SELECT
TO service_role
USING (true);
