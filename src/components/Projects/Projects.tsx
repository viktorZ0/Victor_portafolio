import Reveal from '@/components/shared/Reveal';
import SectionHeading from '@/components/shared/SectionHeading';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <section id="proyectos" className="py-24">
      <div className="container-section">
        <Reveal>
          <SectionHeading
            eyebrow="Proyectos"
            title="Proyectos desarrollados"
            description="Una selección de proyectos tecnológicos en los que he trabajado. Los datos se gestionan desde src/data/projects.ts."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
