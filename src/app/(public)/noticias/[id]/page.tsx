import Image from "next/image";
import { notFound } from "next/navigation";
import { getNewsById } from "@/lib/supabase/queries";

export default async function NoticiaDetallePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const news = await getNewsById(id);

  if (!news) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-14 md:px-8">
      <p className="text-sm text-stone-500">{new Date(news.fecha).toLocaleDateString("es-CO")} - {news.autor}</p>
      <h1 className="mt-2 text-4xl font-bold">{news.titulo}</h1>
      <Image
        src={news.imagen || "https://placehold.co/1200x700"}
        alt={news.titulo}
        width={1200}
        height={700}
        className="mt-6 h-auto w-full rounded-2xl object-cover"
      />
      <article className="prose prose-stone mt-6 max-w-none dark:prose-invert">
        <p>{news.contenido}</p>
      </article>
    </main>
  );
}
