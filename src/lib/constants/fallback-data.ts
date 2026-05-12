import { Event, GalleryItem, News, Stat, Testimonial } from "@/lib/types/database";

export const fallbackStats: Stat[] = [
  { id: "1", nombre: "Beneficiarios", valor: 20, icono: "Users" },
  { id: "2", nombre: "Talleres realizados", valor: 14, icono: "Hammer" },
  { id: "3", nombre: "Voluntarios", valor: 12, icono: "HeartHandshake" },
  { id: "4", nombre: "Actividades culturales", valor: 18, icono: "Music2" },
];

export const fallbackEvents: Event[] = [
  {
    id: "1",
    titulo: "Festival Comunitario de Arte",
    descripcion: "Jornada artistica con ninos, jovenes y familias del barrio.",
    fecha_evento: new Date().toISOString(),
    lugar: "Casa Cultural Cardando Madera",
    imagen:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
    estado: "futuro",
    created_at: new Date().toISOString(),
  },
];

export const fallbackNews: News[] = [
  {
    id: "1",
    titulo: "Iniciamos nuevos talleres gratuitos para la comunidad",
    contenido:
      "La fundacion abre una nueva temporada de formacion artistica con enfoque social.",
    imagen:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=80",
    fecha: new Date().toISOString(),
    autor: "Equipo Cardando Madera",
    created_at: new Date().toISOString(),
  },
];

export const fallbackTestimonials: Testimonial[] = [
  {
    id: "1",
    nombre: "Maria Gomez",
    mensaje:
      "La fundacion me ayudo a descubrir mi talento y a creer en mi futuro.",
    imagen:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
    rol: "Participante",
  },
];

export const fallbackGallery: GalleryItem[] = [
  {
    id: "1",
    titulo: "Taller de pintura comunitaria",
    imagen:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80",
    descripcion: "Sesion de expresion artistica para ninos y jovenes.",
  },
];
