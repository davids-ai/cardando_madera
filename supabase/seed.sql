insert into public.estadisticas (nombre, valor, icono)
values
  ('beneficiarios', 20, 'Users'),
  ('talleres realizados', 14, 'Hammer'),
  ('voluntarios', 12, 'HeartHandshake'),
  ('actividades culturales', 18, 'Music2');

insert into public.eventos (titulo, descripcion, fecha_evento, lugar, imagen, estado)
values (
  'Festival comunitario de arte',
  'Encuentro de expresion artistica con ninos y jovenes.',
  now() + interval '14 days',
  'Duitama, Boyaca',
  'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80',
  'futuro'
);

insert into public.noticias (titulo, contenido, imagen, fecha, autor)
values (
  'Nueva temporada de talleres culturales',
  'La fundacion abre su ciclo de formacion artistica gratuita para la comunidad.',
  'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=80',
  now(),
  'Equipo Cardando Madera'
);

insert into public.testimonios (nombre, mensaje, imagen, rol)
values (
  'Maria Gomez',
  'La fundacion me ayudo a descubrir mi talento y fortalecer mi proyecto de vida.',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80',
  'Participante'
);

insert into public.galeria (titulo, imagen, descripcion)
values (
  'Taller de pintura comunitaria',
  'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80',
  'Actividad con infancia y juventud de la comunidad.'
);
