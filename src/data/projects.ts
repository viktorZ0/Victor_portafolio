import type { Project } from '@/types';

/**
 * PROYECTOS
 * ---------
 * Esta es la única fuente de datos de proyectos: la sección "Proyectos" del
 * sitio se genera automáticamente a partir de este arreglo.
 *
 * Para agregar un proyecto nuevo, copia uno de los objetos de abajo y
 * modifica sus campos. `featured: true` le da mayor protagonismo visual.
 *
 * `image` puede ser una ruta local (por ejemplo, en src/assets/projects/)
 * o una URL propia. Si se deja en `null`, se muestra un placeholder con
 * gradiente en su lugar. `liveUrl` y `githubUrl` pueden ser `null` si aún
 * no existen.
 *
 * Los tres proyectos siguientes son EJEMPLOS EDITABLES / PLACEHOLDERS.
 * Reemplaza su descripción, tecnologías y enlaces con información real.
 */
export const projects: Project[] = [
  {
    id: 'sistema-gestion-gimnasio',
    title: 'Sistema de gestión de gimnasio',
    description:
      '[EDITABLE] Proyecto de ejemplo: sistema para administrar miembros, membresías, pagos y rutinas de un gimnasio. Describe aquí el problema que resuelve, tu rol en el proyecto y los resultados obtenidos.',
    image: null,
    technologies: ['[Tecnología 1]', '[Tecnología 2]', '[Tecnología 3]'],
    liveUrl: null,
    githubUrl: null,
    featured: true,
  },
  {
    id: 'plataforma-gestion-eventos',
    title: 'Plataforma de gestión de eventos',
    description:
      '[EDITABLE] Proyecto de ejemplo: plataforma para la organización de eventos, registro de asistentes y control de entradas. Reemplaza esta descripción con el detalle real del proyecto.',
    image: null,
    technologies: ['[Tecnología 1]', '[Tecnología 2]', '[Tecnología 3]'],
    liveUrl: null,
    githubUrl: null,
    featured: true,
  },
  {
    id: 'proyecto-simulacion',
    title: 'Proyecto de simulación',
    description:
      '[EDITABLE] Proyecto de ejemplo: simulación de un proceso o sistema (académico o personal). Describe el objetivo de la simulación, el enfoque utilizado y los resultados.',
    image: null,
    technologies: ['[Tecnología 1]', '[Tecnología 2]'],
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
];
