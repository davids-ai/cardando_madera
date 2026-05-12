-- Admin profile table
create table if not exists public.administradores (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  email text unique not null,
  rol text not null default 'admin'
);

-- News
create table if not exists public.noticias (
  id uuid primary key default gen_random_uuid(),
  titulo text not null,
  contenido text not null,
  imagen text,
  fecha timestamptz not null default now(),
  autor text not null,
  created_at timestamptz not null default now()
);

-- Events
create table if not exists public.eventos (
  id uuid primary key default gen_random_uuid(),
  titulo text not null,
  descripcion text not null,
  fecha_evento timestamptz not null,
  lugar text not null,
  imagen text,
  estado text not null default 'futuro' check (estado in ('futuro', 'pasado', 'cancelado')),
  created_at timestamptz not null default now()
);

-- Impact stats
create table if not exists public.estadisticas (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  valor integer not null default 0,
  icono text
);

-- Testimonials
create table if not exists public.testimonios (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  mensaje text not null,
  imagen text,
  rol text not null
);

-- Gallery
create table if not exists public.galeria (
  id uuid primary key default gen_random_uuid(),
  titulo text not null,
  imagen text not null,
  descripcion text
);

-- RLS
alter table public.administradores enable row level security;
alter table public.noticias enable row level security;
alter table public.eventos enable row level security;
alter table public.estadisticas enable row level security;
alter table public.testimonios enable row level security;
alter table public.galeria enable row level security;

-- Helper function to validate admin role by auth email
create or replace function public.is_admin_user()
returns boolean
language sql
stable
as $$
  select exists (
    select 1
    from public.administradores a
    where a.email = auth.jwt() ->> 'email'
  );
$$;

-- Public read access
create policy "Public can read noticias"
on public.noticias for select
using (true);

create policy "Public can read eventos"
on public.eventos for select
using (true);

create policy "Public can read estadisticas"
on public.estadisticas for select
using (true);

create policy "Public can read testimonios"
on public.testimonios for select
using (true);

create policy "Public can read galeria"
on public.galeria for select
using (true);

-- Admin CRUD access
create policy "Admins manage noticias"
on public.noticias for all
using (public.is_admin_user())
with check (public.is_admin_user());

create policy "Admins manage eventos"
on public.eventos for all
using (public.is_admin_user())
with check (public.is_admin_user());

create policy "Admins manage estadisticas"
on public.estadisticas for all
using (public.is_admin_user())
with check (public.is_admin_user());

create policy "Admins manage testimonios"
on public.testimonios for all
using (public.is_admin_user())
with check (public.is_admin_user());

create policy "Admins manage galeria"
on public.galeria for all
using (public.is_admin_user())
with check (public.is_admin_user());

create policy "Admins read administrators"
on public.administradores for select
using (public.is_admin_user());

-- Storage bucket
insert into storage.buckets (id, name, public)
values ('fundacion-media', 'fundacion-media', true)
on conflict (id) do nothing;

create policy "Public read fundacion media"
on storage.objects for select
using (bucket_id = 'fundacion-media');

create policy "Admins upload fundacion media"
on storage.objects for insert
with check (bucket_id = 'fundacion-media' and public.is_admin_user());

create policy "Admins update fundacion media"
on storage.objects for update
using (bucket_id = 'fundacion-media' and public.is_admin_user());

create policy "Admins delete fundacion media"
on storage.objects for delete
using (bucket_id = 'fundacion-media' and public.is_admin_user());
