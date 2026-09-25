import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Terminal } from 'lucide-react';
import { profile } from '@/data/profile';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[90vh] items-center overflow-hidden pt-16"
    >
      {/* Fondo decorativo: grid sutil + gradiente radial */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 bg-gradient-radial from-primary/20 via-transparent to-transparent blur-3xl" />

      <div className="container-section relative grid items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="mb-4 font-mono text-sm text-primary-light">
            Hola, soy {profile.name} 👋
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {profile.role}
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted">
            {profile.heroDescription}
          </p>

          <p className="mt-3 max-w-xl text-base text-muted">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#proyectos" className="btn-primary">
              Ver proyectos
              <ArrowRight size={18} />
            </a>
            <a href="#contacto" className="btn-secondary">
              Contactarme
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Perfil de GitHub"
              className="text-muted transition-colors hover:text-white"
            >
              <Github size={22} />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Perfil de LinkedIn"
              className="text-muted transition-colors hover:text-white"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="relative hidden justify-self-center lg:flex"
        >
          <div className="animate-float">
            <div className="card flex h-72 w-72 flex-col justify-between p-6 shadow-glow">
              <div className="flex items-center gap-2 text-muted">
                <Terminal size={18} />
                <span className="font-mono text-xs">perfil.ts</span>
              </div>
              <div className="space-y-2 font-mono text-sm">
                <p className="text-primary-light">
                  const <span className="text-accent">perfil</span> = {'{'}
                </p>
                <p className="pl-4 text-muted">
                  estado: <span className="text-white">"titulación"</span>,
                </p>
                <p className="pl-4 text-muted">
                  formación: <span className="text-white">"técnico superior"</span>,
                </p>
                <p className="pl-4 text-muted">
                  enfoque: <span className="text-white">"desarrollo web"</span>,
                </p>
                <p className="text-primary-light">{'}'}</p>
              </div>
              <div className="h-1.5 w-full rounded-full bg-surface-alt">
                <div className="h-1.5 w-3/4 rounded-full bg-gradient-to-r from-primary to-accent" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
