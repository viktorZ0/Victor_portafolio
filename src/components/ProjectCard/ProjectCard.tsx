import { ExternalLink, Github, ImageOff, Sparkles } from 'lucide-react';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, image, technologies, liveUrl, githubUrl, featured } =
    project;

  return (
    <article
      className={`card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow ${
        featured ? 'ring-1 ring-primary/30' : ''
      }`}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-surface-alt">
        {image ? (
          <img
            src={image}
            alt={`Captura del proyecto ${title}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 via-surface-alt to-accent/10 text-muted">
            <ImageOff size={28} aria-hidden="true" />
            <span className="sr-only">Sin imagen disponible</span>
          </div>
        )}

        {featured && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-white shadow-lg">
            <Sparkles size={12} />
            Destacado
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="badge">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary flex-1 !py-2.5 text-sm"
            >
              <ExternalLink size={16} />
              Ver proyecto
            </a>
          ) : (
            <span
              className="btn-secondary flex-1 cursor-not-allowed !py-2.5 text-sm opacity-50"
              aria-disabled="true"
              title="Enlace no disponible todavía"
            >
              <ExternalLink size={16} />
              Ver proyecto
            </span>
          )}

          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary flex-1 !py-2.5 text-sm"
            >
              <Github size={16} />
              Código
            </a>
          ) : (
            <span
              className="btn-secondary flex-1 cursor-not-allowed !py-2.5 text-sm opacity-50"
              aria-disabled="true"
              title="Enlace no disponible todavía"
            >
              <Github size={16} />
              Código
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
