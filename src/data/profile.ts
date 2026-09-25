import type { SocialLink } from '@/types';

/**
 * DATOS PERSONALES CENTRALIZADOS
 * -------------------------------
 * Edita este archivo para actualizar tu información en todo el sitio.
 * Los valores entre corchetes, ej. [TU EMAIL], son placeholders: reemplázalos
 * por tu información real. No se ha inventado ningún dato personal.
 */
export const profile = {
  name: 'Víctor',
  fullName: '[TU NOMBRE COMPLETO]',
  role: 'Ingeniero de Sistemas en etapa final de titulación',
  tagline:
    'Desarrollo soluciones web y aplicaciones enfocadas en resolver problemas reales.',
  heroDescription:
    'Profesional en Ingeniería de Sistemas con formación como Técnico Superior y experiencia en el desarrollo de soluciones tecnológicas.',
  aboutDescription: [
    'Completé todas las materias de la carrera de Ingeniería de Sistemas y actualmente me encuentro en la etapa final del proceso de titulación: solo me falta realizar la defensa para obtener oficialmente mi título profesional.',
    'Cuento además con formación previa como Técnico Superior, obtenida en un instituto técnico. Esta base técnica complementa mi formación universitaria en el desarrollo de software.',
    'Tengo un fuerte interés por el desarrollo de software y las tecnologías de la información, y he trabajado en distintos proyectos académicos y tecnológicos que puedes conocer en la sección de proyectos.',
  ],
  location: '[TU UBICACIÓN]',
  photo: null as string | null, // Ejemplo: '/src/assets/profile-photo.jpg'
  email: '[TU EMAIL]',
  social: {
    github: '[TU GITHUB]',
    linkedin: '[TU LINKEDIN]',
  },
};

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: profile.social.github, icon: 'github' },
  { label: 'LinkedIn', href: profile.social.linkedin, icon: 'linkedin' },
  { label: 'Email', href: `mailto:${profile.email}`, icon: 'mail' },
];

export const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Formación', href: '#formacion' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
];
