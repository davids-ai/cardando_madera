export type News = {
  id: string;
  titulo: string;
  contenido: string;
  imagen: string | null;
  fecha: string;
  autor: string;
  created_at: string;
};

export type Event = {
  id: string;
  titulo: string;
  descripcion: string;
  fecha_evento: string;
  lugar: string;
  imagen: string | null;
  estado: "futuro" | "pasado" | "cancelado";
  created_at: string;
};

export type Stat = {
  id: string;
  nombre: string;
  valor: number;
  icono: string | null;
};

export type Testimonial = {
  id: string;
  nombre: string;
  mensaje: string;
  imagen: string | null;
  rol: string;
};

export type GalleryItem = {
  id: string;
  titulo: string;
  imagen: string;
  descripcion: string | null;
};

export type Administrator = {
  id: string;
  nombre: string;
  email: string;
  rol: string;
};
