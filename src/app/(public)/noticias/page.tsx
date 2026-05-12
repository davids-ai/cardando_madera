import Image from "next/image";
import Link from "next/link";
import { getNews } from "@/lib/supabase/queries";

export default async function NoticiasPage() {
  const news = await getNews();

  return (
    <main className="mx-auto max-w-7xl px-4 py-14 md:px-8">
      <h1 className="text-3xl font-bold">Noticias</h1>
      <p className="mt-2 text-stone-700 dark:text-stone-300">
        Actualizaciones de impacto social, cultura y educacion.
      </p>
      <section className="mt-8 grid gap-6 md:grid-cols-3">
        {news.map((item) => (
          <article key={item.id} className="overflow-hidden rounded-2xl border border-amber-900/10 bg-white dark:border-amber-100/10 dark:bg-stone-900">
            <Image
              src={item.imagen || "https://placehold.co/900x600"}
              alt={item.titulo}
              width={900}
              height={600}
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <p className="text-xs text-stone-500">{new Date(item.fecha).toLocaleDateString("es-CO")}</p>
              <h2 className="mt-2 text-lg font-semibold">{item.titulo}</h2>
              <p className="mt-2 line-clamp-3 text-sm text-stone-700 dark:text-stone-300">{item.contenido}</p>
              <Link href={`/noticias/${item.id}`} className="mt-3 inline-flex text-sm font-semibold text-emerald-700">
                Ver noticia
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
