type SectionTitleProps = {
  overline: string;
  title: string;
  description?: string;
};

export function SectionTitle({ overline, title, description }: SectionTitleProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
        {overline}
      </p>
      <h2 className="mt-3 text-3xl font-semibold text-stone-900 md:text-4xl dark:text-stone-100">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-stone-700 dark:text-stone-300">{description}</p>
      ) : null}
    </div>
  );
}
