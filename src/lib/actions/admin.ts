"use server";

import { revalidatePath } from "next/cache";
import { createServerSupabaseClient } from "@/lib/supabase/server";

async function ensureAdmin() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    throw new Error("No autorizado");
  }

  const { data: admin } = await supabase
    .from("administradores")
    .select("id")
    .eq("email", user.email)
    .maybeSingle();

  if (!admin) {
    throw new Error("Sin permisos de administrador");
  }

  return { supabase, user };
}

export async function signOutAction() {
  const supabase = await createServerSupabaseClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
}

export async function createNewsAction(formData: FormData) {
  const { supabase, user } = await ensureAdmin();

  const payload = {
    titulo: String(formData.get("titulo") || ""),
    contenido: String(formData.get("contenido") || ""),
    imagen: String(formData.get("imagen") || "") || null,
    fecha: String(formData.get("fecha") || new Date().toISOString()),
    autor: String(formData.get("autor") || user.email || "Administrador"),
  };

  await supabase.from("noticias").insert(payload);
  revalidatePath("/");
  revalidatePath("/noticias");
  revalidatePath("/admin/news");
}

export async function deleteNewsAction(formData: FormData) {
  const { supabase } = await ensureAdmin();
  const id = String(formData.get("id") || "");
  await supabase.from("noticias").delete().eq("id", id);
  revalidatePath("/");
  revalidatePath("/noticias");
  revalidatePath("/admin/news");
}

export async function createEventAction(formData: FormData) {
  const { supabase } = await ensureAdmin();
  const payload = {
    titulo: String(formData.get("titulo") || ""),
    descripcion: String(formData.get("descripcion") || ""),
    fecha_evento: String(formData.get("fecha_evento") || new Date().toISOString()),
    lugar: String(formData.get("lugar") || ""),
    imagen: String(formData.get("imagen") || "") || null,
    estado: String(formData.get("estado") || "futuro"),
  };

  await supabase.from("eventos").insert(payload);
  revalidatePath("/");
  revalidatePath("/eventos");
  revalidatePath("/admin/events");
}

export async function deleteEventAction(formData: FormData) {
  const { supabase } = await ensureAdmin();
  const id = String(formData.get("id") || "");
  await supabase.from("eventos").delete().eq("id", id);
  revalidatePath("/");
  revalidatePath("/eventos");
  revalidatePath("/admin/events");
}

export async function createStatAction(formData: FormData) {
  const { supabase } = await ensureAdmin();
  await supabase.from("estadisticas").insert({
    nombre: String(formData.get("nombre") || ""),
    valor: Number(formData.get("valor") || 0),
    icono: String(formData.get("icono") || "") || null,
  });
  revalidatePath("/");
  revalidatePath("/admin/stats");
}

export async function deleteStatAction(formData: FormData) {
  const { supabase } = await ensureAdmin();
  const id = String(formData.get("id") || "");
  await supabase.from("estadisticas").delete().eq("id", id);
  revalidatePath("/");
  revalidatePath("/admin/stats");
}

export async function createTestimonialAction(formData: FormData) {
  const { supabase } = await ensureAdmin();
  await supabase.from("testimonios").insert({
    nombre: String(formData.get("nombre") || ""),
    mensaje: String(formData.get("mensaje") || ""),
    imagen: String(formData.get("imagen") || "") || null,
    rol: String(formData.get("rol") || "Participante"),
  });
  revalidatePath("/");
  revalidatePath("/admin/testimonials");
}

export async function deleteTestimonialAction(formData: FormData) {
  const { supabase } = await ensureAdmin();
  const id = String(formData.get("id") || "");
  await supabase.from("testimonios").delete().eq("id", id);
  revalidatePath("/");
  revalidatePath("/admin/testimonials");
}

export async function createGalleryAction(formData: FormData) {
  const { supabase } = await ensureAdmin();
  await supabase.from("galeria").insert({
    titulo: String(formData.get("titulo") || ""),
    imagen: String(formData.get("imagen") || ""),
    descripcion: String(formData.get("descripcion") || "") || null,
  });
  revalidatePath("/");
  revalidatePath("/admin/gallery");
}

export async function deleteGalleryAction(formData: FormData) {
  const { supabase } = await ensureAdmin();
  const id = String(formData.get("id") || "");
  await supabase.from("galeria").delete().eq("id", id);
  revalidatePath("/");
  revalidatePath("/admin/gallery");
}
