import { CrudCard } from "@/components/admin/crud-card";
import { getEvents, getGallery, getNews, getStats, getTestimonials } from "@/lib/supabase/queries";

export default async function AdminHomePage() {
  const [news, events, stats, testimonials, gallery] = await Promise.all([
    getNews(),
    getEvents(),
    getStats(),
    getTestimonials(),
    getGallery(),
  ]);

  return (
    <main className="space-y-5">
      <h1 className="text-3xl font-bold">Dashboard administrativo</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <CrudCard title="Noticias">{news.length} registros</CrudCard>
        <CrudCard title="Eventos">{events.length} registros</CrudCard>
        <CrudCard title="Estadisticas">{stats.length} registros</CrudCard>
        <CrudCard title="Testimonios">{testimonials.length} registros</CrudCard>
        <CrudCard title="Galeria">{gallery.length} registros</CrudCard>
      </div>
      <CrudCard title="Gestion dinamica">
        Todo el contenido se administra desde este panel sin tocar codigo.
      </CrudCard>
    </main>
  );
}
