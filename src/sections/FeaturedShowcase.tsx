import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const ease = [0.22, 1, 0.36, 1] as const;

type FeaturedProject = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  tags: string[];
  theme: string;
  screenshot?: boolean;
};

const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: '77-massage',
    title: '77 Massage Treat',
    subtitle: 'Live client production site.',
    description:
      'A clean, conversion-focused website for a massage and wellness studio. Built to communicate treatments, enable easy booking, and perform fast on mobile networks.',
    highlight: 'Full-stack client project',
    liveUrl: 'https://77massagetreat.com',
    image: '/images/77-massage-treat.webp',
    tags: ['PHP', 'JavaScript', 'MySQL'],
    theme: 'from-accent/10 to-secondary/10',
  },
  {
    id: 'merillafits',
    title: 'Merilla Fits',
    subtitle: 'Live client shop.',
    description:
      'A mobile-first catalog for shoes, bags, and everyday style in Ghana. Browse the collection and order on WhatsApp — no checkout form, just a working storefront.',
    highlight: 'Full-stack client project',
    liveUrl: 'https://merilla-fits.vercel.app/',
    image: '/images/merilla-fits.png',
    tags: ['React', 'Supabase', 'Tailwind', 'Vercel'],
    theme: 'from-secondary/10 to-accent/10',
  },
  {
    id: 'sevan-fitness-gym',
    title: 'Sevan Fitness Gym',
    subtitle: 'Live gym operations dashboard.',
    description:
      'A Next.js gym dashboard for members, renewals, payments, and revenue. Deployed on Cloudflare Workers, with Prisma and PostgreSQL behind the app.',
    highlight: 'Full-stack client project',
    liveUrl: 'https://sevan-gym.thywillnaamwanuru89.workers.dev/',
    image: '/images/sevan-fitness-gym.png',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    theme: 'from-secondary/10 to-accent/10',
    screenshot: true,
  },
];

export function FeaturedShowcase() {
  const reduce = Boolean(useReducedMotion());

  return (
    <Section
      id="featured"
      containerClassName="max-w-7xl"
    >
      <div className="space-y-20 lg:space-y-32">
        {FEATURED_PROJECTS.map((project, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <motion.div
              key={project.id}
              initial={reduce ? false : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="group relative overflow-hidden rounded-2xl border border-line bg-surface"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.theme} opacity-20`} />
              
              <div className={`grid gap-8 lg:grid-cols-2 ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                <div
                  className={`relative overflow-hidden ${
                    project.screenshot
                      ? 'flex items-center justify-center bg-white p-3 sm:p-5'
                      : 'aspect-[16/10] bg-canvas lg:aspect-auto'
                  } ${isEven ? '' : 'lg:col-start-2'}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className={
                      project.screenshot
                        ? 'h-auto w-full object-contain'
                        : 'h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
                    }
                  />
                  {project.screenshot ? null : (
                    <div className="absolute inset-0 bg-gradient-to-t from-canvas/80 to-transparent" />
                  )}
                </div>

                <div className="relative flex flex-col justify-center p-8 lg:p-12">
                  <span className="mb-3 inline-flex w-fit rounded-lg bg-accent/15 px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                    {project.highlight}
                  </span>

                  <h2 className="font-display text-3xl font-bold tracking-tight lg:text-4xl xl:text-5xl">
                    {project.title}
                  </h2>
                  
                  <p className="mt-3 font-display text-xl font-semibold text-muted lg:text-2xl">
                    {project.subtitle}
                  </p>

                  <p className="mt-6 text-base leading-relaxed text-muted/90 lg:text-lg">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-line bg-canvas px-3 py-1.5 font-mono text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.liveUrl && (
                      <Button href={project.liveUrl}>
                        <ExternalLink size={16} />
                        Visit Site
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button href={project.githubUrl} variant="secondary">
                        View Source
                      </Button>
                    )}
                    <Link to={`/projects/${project.id}`}>
                      <Button variant="ghost">
                        Full Case Study
                        <ArrowRight size={16} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
