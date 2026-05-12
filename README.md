# Fundacion Cardando Madera - Plataforma Web

Plataforma profesional, moderna y escalable para la Fundacion Cardando Madera (Duitama, Boyaca, Colombia), construida con Next.js App Router, React, TypeScript, TailwindCSS y Supabase.

## Stack

- Next.js (App Router)
- React + TypeScript
- TailwindCSS
- Supabase (Auth, PostgreSQL, Storage, RLS)
- Framer Motion

## Caracteristicas implementadas

- Landing page moderna y responsive con identidad visual calida.
- Secciones dinamicas de impacto, eventos, noticias, galeria y testimonios.
- Modo claro/oscuro.
- SEO base en metadata.
- Panel administrativo seguro con login.
- CRUD dinamico para:
  - Noticias
  - Eventos
  - Estadisticas
  - Testimonios
  - Galeria
- Middleware para proteger rutas administrativas.
- Scripts SQL para tablas, RLS, policies y bucket de storage.

## Estructura principal

- src/app: rutas App Router (publicas, admin, API)
- src/components: UI reutilizable, layout, secciones y admin
- src/lib/supabase: clientes y queries
- src/lib/actions: server actions CRUD
- supabase/schema.sql: esquema y policies
- supabase/seed.sql: datos iniciales

## Variables de entorno

Usa .env.example como base:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

## Configuracion de Supabase

1. Crear un proyecto en Supabase.
2. Ejecutar supabase/schema.sql en SQL Editor.
3. Ejecutar supabase/seed.sql para datos de ejemplo.
4. Crear un usuario administrador en Auth.
5. Insertar su correo en la tabla administradores.

## Ejecucion local

```bash
npm install
npm run dev
```

## Requisito importante de Node.js

Este proyecto usa Next.js moderno. Requiere Node.js 20.9+ para ejecutar dev, build y lint correctamente.

## Seguridad

- RLS habilitado para todas las tablas de contenido.
- Policies publicas para lectura y policies de admin para escritura.
- Middleware de proteccion de /admin.
- Verificacion de rol admin en server actions.

## Produccion

Antes de desplegar:

1. Configurar variables de entorno en el proveedor (Vercel u otro).
2. Validar tablas/policies en Supabase.
3. Probar flujo de login admin.
4. Revisar URLs de imagen y CORS en Storage.
