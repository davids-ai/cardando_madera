import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition",
        variant === "primary"
          ? "bg-emerald-700 text-white hover:bg-emerald-800"
          : "border border-amber-800/40 bg-white/80 text-amber-900 hover:bg-amber-100 dark:border-amber-100/40 dark:bg-stone-900 dark:text-amber-50 dark:hover:bg-stone-800",
      )}
    >
      {children}
    </Link>
  );
}
