import { CrudCard } from "@/components/admin/crud-card";
import { createNewsAction, deleteNewsAction } from "@/lib/actions/admin";
import { getNews } from "@/lib/supabase/queries";

export default async function AdminNewsPage() {
  const news = await getNews();

  return (
    <main className="space-y-5">
      <h1 className="text-3xl font-bold">CRUD Noticias</h1>

      <CrudCard title="Crear noticia">
        <form action={createNewsAction} className="grid gap-3">
          <input name="titulo" required placeholder="Titulo" className="rounded-lg border px-3 py-2" />
          <textarea name="contenido" required placeholder="Contenido" rows={5} className="rounded-lg border px-3 py-2" />
          <input name="imagen" placeholder="URL imagen" className="rounded-lg border px-3 py-2" />
          <input name="autor" placeholder="Autor" className="rounded-lg border px-3 py-2" />
          <input name="fecha" type="date" className="rounded-lg border px-3 py-2" />
          <button type="submit" className="w-fit rounded-full bg-emerald-700 px-5 py-2 text-sm font-semibold text-white">
            Guardar
          </button>
        </form>
      </CrudCard>

      <CrudCard title="Noticias existentes">
        <div className="space-y-3">
          {news.map((item) => (
            <div key={item.id} className="flex items-center justify-between rounded-lg border border-amber-900/10 bg-white p-3 dark:bg-stone-900">
              <div>
                <p className="font-semibold">{item.titulo}</p>
                <p className="text-xs text-stone-500">{new Date(item.fecha).toLocaleDateString("es-CO")}</p>
              </div>
              <form action={deleteNewsAction}>
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
