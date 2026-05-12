export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f7f0e6] dark:bg-stone-950">
      <div className="flex items-center gap-3 rounded-full border border-amber-900/20 bg-white px-5 py-3 text-sm font-semibold text-amber-900 dark:border-amber-100/20 dark:bg-stone-900 dark:text-amber-100">
        <span className="h-3 w-3 animate-pulse rounded-full bg-emerald-600" />
        Cargando experiencia cultural...
      </div>
    </div>
  );
}
