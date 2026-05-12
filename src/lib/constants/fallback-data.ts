import { Event, GalleryItem, News, Stat, Testimonial } from "@/lib/types/database";

export const fallbackStats: Stat[] = [
  { id: "1", nombre: "Estudiantes beneficiados", valor: 120, icono: "Users" },
  { id: "2", nombre: "Talleres realizados", valor: 48, icono: "BookOpenCheck" },
  { id: "3", nombre: "Conciertos realizados", valor: 16, icono: "Music2" },
  { id: "4", nombre: "Actividades comunitarias", valor: 32, icono: "HeartHandshake" },
];

export const fallbackEvents: Event[] = [
  {
    id: "1",
    titulo: "Concierto comunitario de cierre de taller",
    descripcion: "Encuentro artístico con niños, jóvenes y familias alrededor de la música.",
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
    titulo: "Iniciamos nuevos talleres musicales gratuitos para la comunidad",
    contenido:
      "La fundacion abre una nueva temporada de formacion artistica con enfoque cultural y comunitario.",
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
      "La fundacion me ayudo a descubrir mi talento y a creer en mi futuro musical.",
    imagen:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
    rol: "Participante",
  },
];

export const fallbackGallery: GalleryItem[] = [
  {
    id: "1",
    titulo: "Taller de música comunitaria",
    imagen:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
    descripcion: "Sesion de expresion artistica para niños y jóvenes.",
  },
];
