import { CrudCard } from "@/components/admin/crud-card";
import { createStatAction, deleteStatAction } from "@/lib/actions/admin";
import { getStats } from "@/lib/supabase/queries";

export default async function AdminStatsPage() {
  const stats = await getStats();

  return (
    <main className="space-y-5">
      <h1 className="text-3xl font-bold">CRUD Estadisticas</h1>
      <CrudCard title="Crear estadistica">
        <form action={createStatAction} className="grid gap-3 md:grid-cols-3">
          <input name="nombre" required placeholder="Nombre" className="rounded-lg border px-3 py-2" />
          <input name="valor" required type="number" placeholder="Valor" className="rounded-lg border px-3 py-2" />
          <input name="icono" placeholder="Icono" className="rounded-lg border px-3 py-2" />
          <button type="submit" className="w-fit rounded-full bg-emerald-700 px-5 py-2 text-sm font-semibold text-white">
            Guardar
          </button>
        </form>
      </CrudCard>

      <CrudCard title="Estadisticas existentes">
        <div className="space-y-3">
          {stats.map((item) => (
            <div key={item.id} className="flex items-center justify-between rounded-lg border border-amber-900/10 bg-white p-3 dark:bg-stone-900">
              <div>
                <p className="font-semibold">{item.nombre}</p>
                <p className="text-xs text-stone-500">Valor: {item.valor}</p>
              </div>
              <form action={deleteStatAction}>
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
