import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/data/profile';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="container-section flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-mono text-sm font-semibold text-white">
            © {year} {profile.name}
          </p>
          <p className="mt-1 text-sm text-muted">
            Ingeniería de Sistemas · Técnico Superior
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-white"
          >
            <Github size={20} />
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-white"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-muted transition-colors hover:text-white"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
