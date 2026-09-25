import type { EducationEntry, ExperienceEntry } from '@/types';

/**
 * FORMACIÓN ACADÉMICA
 * -------------------
 * Edita institución, periodo y especialidad con tus datos reales.
 * El estado (materias completadas / pendiente de defensa, título obtenido)
 * refleja tu situación actual proporcionada.
 */
export const education: EducationEntry[] = [
  {
    id: 'ingenieria-sistemas',
    degree: 'Ingeniería de Sistemas',
    institution: 'UABJB - Universidad Autónoma del Beni José Ballivián',
    period: '2019 - en curso',
    status: 'in-progress',
    statusLabel: 'Materias completadas | En proceso de titulación',
    description:
      'Todas las materias de la carrera completadas. Actualmente en etapa final de titulación: pendiente la defensa para obtener el título profesional de Ingeniero de Sistemas.',
  },
  {
    id: 'tecnico-superior',
    degree: 'Técnico Superior',
    institution: 'Instituto Técnico INCOS - Beni',
    period: '2016 - 2019',
    status: 'completed',
    statusLabel: 'Título obtenido',
    description:
      'Formación técnica profesional que complementa mi base universitaria en Ingeniería de Sistemas.',
  },
];

/**
 * EXPERIENCIA Y PROYECTOS
 * ------------------------
 * No se ha proporcionado información laboral, por lo que esta sección se
 * deja preparada con placeholders. Agrega tus propias entradas siguiendo
 * la misma estructura (experiencia laboral, prácticas, freelance,
 * proyectos académicos o personales).
 */
export const experience: ExperienceEntry[] = [
  {
    id: 'placeholder-laboral',
    role: '[CARGO / ROL]',
    organization: '[NOMBRE DE LA EMPRESA U ORGANIZACIÓN]',
    period: '[AÑO - AÑO]',
    type: 'laboral',
    description:
      'Espacio reservado para agregar experiencia laboral, prácticas profesionales o trabajo freelance cuando esté disponible.',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-academico',
    role: '[NOMBRE DEL PROYECTO ACADÉMICO]',
    organization: '[UNIVERSIDAD / INSTITUTO]',
    period: '[AÑO - AÑO]',
    type: 'academico',
    description:
      'Espacio reservado para describir proyectos académicos relevantes desarrollados durante la carrera.',
    isPlaceholder: true,
  },
];
