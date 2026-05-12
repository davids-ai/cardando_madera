import {
  fallbackEvents,
  fallbackGallery,
  fallbackNews,
  fallbackStats,
  fallbackTestimonials,
} from "@/lib/constants/fallback-data";
import type { Event, GalleryItem, News, Stat, Testimonial } from "@/lib/types/database";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function getStats(): Promise<Stat[]> {
  const supabase = await createServerSupabaseClient();
  if (!supabase) return fallbackStats;
  const { data, error } = await supabase.from("estadisticas").select("*").order("nombre");
  if (error || !data || data.length === 0) return fallbackStats;
  return data;
}

export async function getEvents(): Promise<Event[]> {
  const supabase = await createServerSupabaseClient();
  if (!supabase) return fallbackEvents;
  const { data, error } = await supabase
    .from("eventos")
    .select("*")
    .order("fecha_evento", { ascending: true });

  if (error || !data || data.length === 0) return fallbackEvents;
  return data;
}

export async function getNews(): Promise<News[]> {
  const supabase = await createServerSupabaseClient();
  if (!supabase) return fallbackNews;
  const { data, error } = await supabase
    .from("noticias")
    .select("*")
    .order("fecha", { ascending: false });

  if (error || !data || data.length === 0) return fallbackNews;
  return data;
}

export async function getNewsById(id: string): Promise<News | null> {
  const supabase = await createServerSupabaseClient();
  if (!supabase) {
    return fallbackNews.find((item) => item.id === id) ?? null;
  }
  const { data, error } = await supabase
    .from("noticias")
    .select("*")
    .eq("id", id)
    .single();

  if (error) return null;
  return data;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const supabase = await createServerSupabaseClient();
  if (!supabase) return fallbackTestimonials;
  const { data, error } = await supabase.from("testimonios").select("*");

  if (error || !data || data.length === 0) return fallbackTestimonials;
  return data;
}

export async function getGallery(): Promise<GalleryItem[]> {
  const supabase = await createServerSupabaseClient();
  if (!supabase) return fallbackGallery;
  const { data, error } = await supabase.from("galeria").select("*");

  if (error || !data || data.length === 0) return fallbackGallery;
  return data;
}
