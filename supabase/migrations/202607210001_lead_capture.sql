create extension if not exists pgcrypto;

create type public.lead_status as enum ('new', 'contacted', 'qualified', 'closed');

create table public.enquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  name text not null check (char_length(name) between 2 and 100),
  mobile text not null check (char_length(mobile) between 7 and 20),
  email text,
  city text,
  user_type text,
  product_slug text,
  application text not null check (char_length(application) between 3 and 2000),
  source text not null default 'website',
  consent_at timestamptz not null,
  status public.lead_status not null default 'new',
  notes text not null default ''
);

create table public.tds_downloads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 2 and 100),
  mobile text not null check (char_length(mobile) between 7 and 20),
  product_slug text not null,
  source text not null default 'product-page',
  consent_at timestamptz not null,
  status public.lead_status not null default 'new',
  notes text not null default ''
);

create index enquiries_created_at_idx on public.enquiries (created_at desc);
create index enquiries_status_created_idx on public.enquiries (status, created_at desc);
create index enquiries_product_created_idx on public.enquiries (product_slug, created_at desc);
create index tds_downloads_created_at_idx on public.tds_downloads (created_at desc);
create index tds_downloads_product_created_idx on public.tds_downloads (product_slug, created_at desc);

alter table public.enquiries enable row level security;
alter table public.tds_downloads enable row level security;

-- No public policies: only the server-side service role can access lead records.
