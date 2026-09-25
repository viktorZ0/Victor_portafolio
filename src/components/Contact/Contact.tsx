import { useState, type FormEvent } from 'react';
import { Github, Info, Linkedin, Mail, Send } from 'lucide-react';
import Reveal from '@/components/shared/Reveal';
import SectionHeading from '@/components/shared/SectionHeading';
import { profile } from '@/data/profile';

const contactMethods = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Github, label: 'GitHub', value: profile.social.github, href: profile.social.github },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: profile.social.linkedin,
    href: profile.social.linkedin,
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // Formulario únicamente visual: no hay backend conectado todavía.
    // No se envía ningún dato; solo se muestra un mensaje de confirmación.
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-24">
      <div className="container-section">
        <Reveal>
          <SectionHeading
            eyebrow="Contacto"
            title="¿Tienes un proyecto en mente?"
            description="Estoy abierto a oportunidades, colaboraciones y nuevos proyectos."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal delay={0.1}>
            <div className="space-y-4">
              {contactMethods.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={label === 'Email' ? undefined : '_blank'}
                  rel={label === 'Email' ? undefined : 'noreferrer'}
                  className="card flex items-center gap-4 p-5 transition-colors hover:border-primary/40"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary-light">
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-muted">{label}</p>
                    <p className="truncate font-medium text-white">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <form onSubmit={handleSubmit} className="card space-y-5 p-6 sm:p-8">
              <div className="flex items-start gap-2 rounded-xl border border-primary/30 bg-primary/5 p-3 text-xs text-primary-light">
                <Info size={16} className="mt-0.5 shrink-0" />
                <p>
                  Este formulario es solamente visual por ahora: el portafolio
                  no tiene backend conectado, por lo que no envía mensajes
                  reales. Utiliza los datos de contacto para escribirme
                  directamente.
                </p>
              </div>

              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-white">
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="w-full rounded-xl border border-border bg-surface-alt px-4 py-3 text-sm text-white placeholder:text-muted focus:border-primary/60"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-white">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-border bg-surface-alt px-4 py-3 text-sm text-white placeholder:text-muted focus:border-primary/60"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-white">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full resize-none rounded-xl border border-border bg-surface-alt px-4 py-3 text-sm text-white placeholder:text-muted focus:border-primary/60"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                <Send size={18} />
                Enviar mensaje
              </button>

              {submitted && (
                <p role="status" className="text-center text-sm text-accent">
                  Formulario de demostración: aún no está conectado a un
                  servicio de envío real.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
