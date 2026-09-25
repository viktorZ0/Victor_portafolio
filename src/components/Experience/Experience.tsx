import { Briefcase } from 'lucide-react';
import Reveal from '@/components/shared/Reveal';
import SectionHeading from '@/components/shared/SectionHeading';
import { experience } from '@/data/education';

const typeLabels: Record<string, string> = {
  laboral: 'Experiencia laboral',
  practicas: 'Prácticas',
  freelance: 'Freelance',
  academico: 'Proyecto académico',
  personal: 'Proyecto personal',
};

export default function Experience() {
  return (
    <section id="experiencia" className="py-24">
      <div className="container-section">
        <Reveal>
          <SectionHeading
            eyebrow="Experiencia"
            title="Experiencia y proyectos"
            description="Aún no se ha agregado información específica de experiencia laboral. Esta sección queda preparada para completarse con experiencia laboral, prácticas, freelance o proyectos académicos y personales."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {experience.map((entry, index) => (
            <Reveal key={entry.id} delay={index * 0.1}>
              <div className="card relative h-full overflow-hidden p-6">
                {entry.isPlaceholder && (
                  <span className="badge absolute right-4 top-4 border-primary/30 text-primary-light">
                    Placeholder
                  </span>
                )}

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary-light">
                  <Briefcase size={18} />
                </div>

                <p className="mt-4 font-mono text-xs uppercase tracking-wide text-muted">
                  {typeLabels[entry.type]}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-white">
                  {entry.role}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {entry.organization} · {entry.period}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {entry.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
