type CrudCardProps = {
  title: string;
  children: React.ReactNode;
};

export function CrudCard({ title, children }: CrudCardProps) {
  return (
    <section className="rounded-2xl border border-amber-900/10 bg-white p-5 dark:border-amber-100/10 dark:bg-stone-900">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
