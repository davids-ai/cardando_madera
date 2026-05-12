import { CrudCard } from "@/components/admin/crud-card";
import { createTestimonialAction, deleteTestimonialAction } from "@/lib/actions/admin";
import { getTestimonials } from "@/lib/supabase/queries";

export default async function AdminTestimonialsPage() {
  const testimonials = await getTestimonials();

  return (
    <main className="space-y-5">
      <h1 className="text-3xl font-bold">CRUD Testimonios</h1>
      <CrudCard title="Crear testimonio">
        <form action={createTestimonialAction} className="grid gap-3">
          <input name="nombre" required placeholder="Nombre" className="rounded-lg border px-3 py-2" />
          <input name="rol" required placeholder="Rol" className="rounded-lg border px-3 py-2" />
          <textarea name="mensaje" required placeholder="Mensaje" rows={4} className="rounded-lg border px-3 py-2" />
          <input name="imagen" placeholder="URL imagen" className="rounded-lg border px-3 py-2" />
          <button type="submit" className="w-fit rounded-full bg-emerald-700 px-5 py-2 text-sm font-semibold text-white">
            Guardar
          </button>
        </form>
      </CrudCard>

      <CrudCard title="Testimonios existentes">
        <div className="space-y-3">
          {testimonials.map((item) => (
            <div key={item.id} className="flex items-center justify-between rounded-lg border border-amber-900/10 bg-white p-3 dark:bg-stone-900">
              <div>
                <p className="font-semibold">{item.nombre}</p>
                <p className="text-xs text-stone-500">{item.rol}</p>
              </div>
              <form action={deleteTestimonialAction}>
                <input type="hidden" name="id" value={item.id} />
                <button type="submit" className="rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
                  Eliminar
                </button>
              </form>
            </div>
          ))}
        </div>
      </CrudCard>
    </main>
  );
}
