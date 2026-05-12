import { redirect } from "next/navigation";
import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { signOutAction } from "@/lib/actions/admin";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export default async function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-[#f7f0e6] px-4 py-8 dark:bg-stone-950 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row">
        <div className="space-y-3">
          <AdminSidebar />
          <form action={signOutAction}>
            <button
              type="submit"
              className="w-full rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700"
            >
              Cerrar sesion
            </button>
          </form>
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
