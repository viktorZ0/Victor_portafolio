import type { SkillCategory } from '@/types';

/**
 * HABILIDADES Y TECNOLOGÍAS
 * --------------------------
 * Agrega, elimina o mueve tecnologías libremente. No se muestran niveles
 * de dominio ni porcentajes: solo se listan las tecnologías conocidas.
 */
export const skills: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Desarrollo Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    id: 'backend',
    title: 'Backend',
    skills: ['PHP', 'Python'],
  },
  {
    id: 'database',
    title: 'Bases de datos',
    skills: ['MySQL', 'PostgreSQL'],
  },
  {
    id: 'tools',
    title: 'Herramientas',
    skills: ['Git', 'GitHub', 'Visual Studio', 'Visual Studio Code'],
  },
  {
    id: 'other',
    title: 'Otros',
    skills: ['[Agregar tecnología]'],
  },
];
