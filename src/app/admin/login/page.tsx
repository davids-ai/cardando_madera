"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { createClient } from "@/lib/supabase/client";

export default function AdminLoginPage() {
  const supabase = createClient();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") || "");
    const password = String(formData.get("password") || "");

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    setLoading(false);

    if (error) {
      toast.error("Credenciales invalidas");
      return;
    }

    toast.success("Bienvenido al panel");
    router.push("/admin");
    router.refresh();
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f0e6] px-4 dark:bg-stone-950">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-3xl border border-amber-900/10 bg-white p-6 shadow-sm dark:border-amber-100/10 dark:bg-stone-900"
      >
        <h1 className="text-2xl font-bold">Login administrador</h1>
        <p className="mt-2 text-sm text-stone-600 dark:text-stone-300">
          Acceso seguro al dashboard de gestion dinamica.
        </p>

        <div className="mt-5 space-y-3">
          <input
            name="email"
            required
            type="email"
            placeholder="Correo"
            className="w-full rounded-xl border border-stone-300 px-4 py-3 text-sm dark:border-stone-700 dark:bg-stone-950"
          />
          <input
            name="password"
            required
            type="password"
            placeholder="Contrasena"
            className="w-full rounded-xl border border-stone-300 px-4 py-3 text-sm dark:border-stone-700 dark:bg-stone-950"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-5 w-full rounded-xl bg-emerald-700 px-4 py-3 text-sm font-semibold text-white disabled:opacity-70"
        >
          {loading ? "Ingresando..." : "Ingresar"}
        </button>
      </form>
    </main>
  );
}
