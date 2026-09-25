import { GraduationCap, Layers, Sparkles } from 'lucide-react';
import Reveal from '@/components/shared/Reveal';
import SectionHeading from '@/components/shared/SectionHeading';
import { profile } from '@/data/profile';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Etapa final de titulación',
    description:
      'Todas las materias de Ingeniería de Sistemas completadas, pendiente la defensa de titulación.',
  },
  {
    icon: Layers,
    title: 'Técnico Superior',
    description:
      'Formación técnica profesional previa que complementa mi base universitaria.',
  },
  {
    icon: Sparkles,
    title: 'Proyectos tecnológicos',
    description:
      'Desarrollo de proyectos académicos y personales aplicando distintas tecnologías.',
  },
];

export default function About() {
  return (
    <section id="sobre-mi" className="py-24">
      <div className="container-section">
        <Reveal>
          <SectionHeading eyebrow="Sobre mí" title="Quién soy" />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1fr]">
          <Reveal delay={0.1}>
            <div className="space-y-5 text-base leading-relaxed text-muted">
              {profile.aboutDescription.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid gap-4">
              {highlights.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="card flex items-start gap-4 p-5 transition-colors hover:border-primary/40"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary-light">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{title}</h3>
                    <p className="mt-1 text-sm text-muted">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
