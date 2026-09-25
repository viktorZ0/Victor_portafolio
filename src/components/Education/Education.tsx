import { Award, GraduationCap } from 'lucide-react';
import Reveal from '@/components/shared/Reveal';
import SectionHeading from '@/components/shared/SectionHeading';
import { education } from '@/data/education';

const iconByEntry: Record<string, typeof GraduationCap> = {
  'ingenieria-sistemas': GraduationCap,
  'tecnico-superior': Award,
};

export default function Education() {
  return (
    <section id="formacion" className="py-24">
      <div className="container-section">
        <Reveal>
          <SectionHeading
            eyebrow="Formación"
            title="Formación académica"
            description="Mi recorrido de formación profesional y técnica."
          />
        </Reveal>

        <div className="relative mt-14 space-y-8 border-l border-border pl-8 sm:pl-10">
          {education.map((entry, index) => {
            const Icon = iconByEntry[entry.id] ?? GraduationCap;
            const isCompleted = entry.status === 'completed';

            return (
              <Reveal key={entry.id} delay={index * 0.1}>
                <div className="relative">
                  <span
                    className={`absolute -left-[calc(2rem+1px)] top-1 flex h-8 w-8 items-center justify-center rounded-full border sm:-left-[calc(2.5rem+1px)] ${
                      isCompleted
                        ? 'border-accent/50 bg-accent/10 text-accent'
                        : 'border-primary/50 bg-primary/10 text-primary-light'
                    }`}
                  >
                    <Icon size={16} />
                  </span>

                  <div className="card p-6">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="text-lg font-semibold text-white">
                        {entry.degree}
                      </h3>
                      <span
                        className={`badge ${
                          isCompleted
                            ? 'border-accent/30 text-accent'
                            : 'border-primary/30 text-primary-light'
                        }`}
                      >
                        {entry.statusLabel}
                      </span>
                    </div>

                    <p className="mt-2 text-sm font-medium text-muted">
                      {entry.institution} · {entry.period}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      {entry.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
