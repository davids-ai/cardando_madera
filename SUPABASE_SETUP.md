# Pasos de configuración Supabase

Tu proyecto Supabase ya está configurado en .env.local.

## 1. Ejecutar el esquema de base de datos

1. Ve a https://app.supabase.com
2. Selecciona tu proyecto "inrcebajzneiwxoqqcya"
3. Ve a **SQL Editor** en el panel izquierdo
4. Crea una nueva query
5. Copia y pega el contenido de `supabase/schema.sql`
6. Haz clic en **Run** para ejecutar

## 2. Cargar datos de ejemplo

1. Crea otra nueva query en SQL Editor
2. Copia y pega el contenido de `supabase/seed.sql`
3. Haz clic en **Run** para ejecutar

## 3. Crear usuario administrador

1. Ve a **Authentication** > **Users** en el panel izquierdo
2. Haz clic en **Add user**
3. Usa estos datos:
   - Email: `admin@cardandomadera.com`
   - Password: (elige una contraseña segura)
   - Auto send invite email: desactiva esta opción
4. Haz clic en **Create user**

## 4. Registrar el admin en la base de datos

1. De vuelta en SQL Editor, crea una nueva query
2. Ejecuta:
   ```sql
   INSERT INTO public.administradores (nombre, email, rol)
   VALUES ('Admin Cardando Madera', 'admin@cardandomadera.com', 'admin');
   ```

## 5. Iniciar la aplicación

Una vez completados estos pasos:
```bash
npm run dev
```

La app estará en http://localhost:3000

## Acceso al panel admin

URL: http://localhost:3000/admin/login
Usuario: admin@cardandomadera.com
Contraseña: (la que creaste en el paso 3)
