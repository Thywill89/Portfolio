import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;

const LIVE_PROJECTS = [
  {
    name: '77 Massage Treat',
    url: 'https://77massagetreat.com',
    description: 'Massage & wellness studio website',
    status: 'Live in production',
  },
  {
    name: 'Campus Connect',
    url: '#',
    description: 'Student portal (placeholder link)',
    status: 'In development',
  },
  {
    name: 'Your project here',
    url: '#',
    description: 'Placeholder for future live project',
    status: 'Coming soon',
  },
];

export function LiveProjects() {
  const reduce = Boolean(useReducedMotion());

  return (
    <Section
      id="live-projects"
      eyebrow="Live On The Web"
      title="Production Sites"
      description="Client projects and personal products currently running in production."
      containerClassName="max-w-6xl"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {LIVE_PROJECTS.map((project, index) => (
          <motion.div
            key={project.name}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1, ease }}
            className="group relative overflow-hidden rounded-xl border border-line bg-surface p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-glow"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            
            <div className="relative">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                <ExternalLink size={24} />
              </div>

              <h3 className="font-display text-lg font-bold lg:text-xl">
                {project.name}
              </h3>
              
              <p className="mt-2 text-sm text-muted/90">
                {project.description}
              </p>

              <div className="mt-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-xs text-accent">
                  {project.status}
                </span>
              </div>

              {project.url !== '#' && (
                <Button 
                  href={project.url}
                  variant="ghost"
                  size="sm"
                  className="mt-5 w-full"
                >
                  Visit Site
                  <ExternalLink size={14} />
                </Button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
