import Reveal from '@/components/shared/Reveal';
import SectionHeading from '@/components/shared/SectionHeading';
import { skills } from '@/data/skills';

export default function Skills() {
  return (
    <section id="habilidades" className="py-24">
      <div className="container-section">
        <Reveal>
          <SectionHeading
            eyebrow="Habilidades"
            title="Tecnologías con las que trabajo"
            description="Un panorama de las tecnologías y herramientas que utilizo para construir soluciones."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, index) => (
            <Reveal key={category.id} delay={index * 0.08}>
              <div className="card h-full p-6 transition-colors hover:border-primary/40">
                <h3 className="text-base font-semibold text-white">
                  {category.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
