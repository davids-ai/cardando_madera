import { CrudCard } from "@/components/admin/crud-card";
import { createGalleryAction, deleteGalleryAction } from "@/lib/actions/admin";
import { getGallery } from "@/lib/supabase/queries";

export default async function AdminGalleryPage() {
  const gallery = await getGallery();

  return (
    <main className="space-y-5">
      <h1 className="text-3xl font-bold">CRUD Galeria</h1>
      <CrudCard title="Crear imagen de galeria">
        <form action={createGalleryAction} className="grid gap-3">
          <input name="titulo" required placeholder="Titulo" className="rounded-lg border px-3 py-2" />
          <input name="imagen" required placeholder="URL imagen" className="rounded-lg border px-3 py-2" />
          <textarea name="descripcion" placeholder="Descripcion" rows={3} className="rounded-lg border px-3 py-2" />
          <button type="submit" className="w-fit rounded-full bg-emerald-700 px-5 py-2 text-sm font-semibold text-white">
            Guardar
          </button>
        </form>
      </CrudCard>

      <CrudCard title="Galeria existente">
        <div className="space-y-3">
          {gallery.map((item) => (
            <div key={item.id} className="flex items-center justify-between rounded-lg border border-amber-900/10 bg-white p-3 dark:bg-stone-900">
              <div>
                <p className="font-semibold">{item.titulo}</p>
                <p className="text-xs text-stone-500">{item.descripcion || "Sin descripcion"}</p>
              </div>
              <form action={deleteGalleryAction}>
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
