import { CrudCard } from "@/components/admin/crud-card";
import { createEventAction, deleteEventAction } from "@/lib/actions/admin";
import { getEvents } from "@/lib/supabase/queries";

export default async function AdminEventsPage() {
  const events = await getEvents();

  return (
    <main className="space-y-5">
      <h1 className="text-3xl font-bold">CRUD Eventos</h1>
      <CrudCard title="Crear evento">
        <form action={createEventAction} className="grid gap-3">
          <input name="titulo" required placeholder="Titulo" className="rounded-lg border px-3 py-2" />
          <textarea name="descripcion" required rows={4} placeholder="Descripcion" className="rounded-lg border px-3 py-2" />
          <input name="fecha_evento" type="date" className="rounded-lg border px-3 py-2" />
          <input name="lugar" required placeholder="Lugar" className="rounded-lg border px-3 py-2" />
          <input name="imagen" placeholder="URL imagen" className="rounded-lg border px-3 py-2" />
          <select name="estado" className="rounded-lg border px-3 py-2">
            <option value="futuro">Futuro</option>
            <option value="pasado">Pasado</option>
            <option value="cancelado">Cancelado</option>
          </select>
          <button type="submit" className="w-fit rounded-full bg-emerald-700 px-5 py-2 text-sm font-semibold text-white">
            Guardar
          </button>
        </form>
      </CrudCard>

      <CrudCard title="Eventos existentes">
        <div className="space-y-3">
          {events.map((item) => (
            <div key={item.id} className="flex items-center justify-between rounded-lg border border-amber-900/10 bg-white p-3 dark:bg-stone-900">
              <div>
                <p className="font-semibold">{item.titulo}</p>
                <p className="text-xs text-stone-500">{new Date(item.fecha_evento).toLocaleDateString("es-CO")} - {item.lugar}</p>
              </div>
              <form action={deleteEventAction}>
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
