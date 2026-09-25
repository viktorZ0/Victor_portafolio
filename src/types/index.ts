export interface Project {
  id: string;
  title: string;
  description: string;
  /** Ruta local (src/assets/projects/...) o URL. Si es null se usa un placeholder con gradiente. */
  image: string | null;
  technologies: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  featured: boolean;
}

export type SkillCategoryId =
  | 'frontend'
  | 'backend'
  | 'database'
  | 'tools'
  | 'other';

export interface SkillCategory {
  id: SkillCategoryId;
  title: string;
  skills: string[];
}

export type EducationStatus = 'in-progress' | 'completed';

export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  period: string;
  status: EducationStatus;
  statusLabel: string;
  description: string;
}

export type ExperienceType =
  | 'laboral'
  | 'practicas'
  | 'freelance'
  | 'academico'
  | 'personal';

export interface ExperienceEntry {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: ExperienceType;
  description: string;
  isPlaceholder?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'mail';
}
