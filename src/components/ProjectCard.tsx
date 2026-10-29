import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ProjectPreview } from '@/components/ProjectPreview';
import { cn } from '@/lib/utils';
import type { Project } from '@/types';
import { ArrowUpRight, Code2, ExternalLink } from 'lucide-react';
import { GitHubIcon } from '@/components/icons';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
  index?: number;
};

export function ProjectCard({ project, featured = false, index = 0 }: ProjectCardProps) {
  const reduce = Boolean(useReducedMotion());

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease }}
    >
      <Card
        featured={featured}
        className={cn(
          'group flex h-full flex-col overflow-hidden p-0 transition-all duration-300 hover:shadow-2xl',
          featured && 'md:flex-row',
        )}
      >
        <Link
          to={`/projects/${project.slug}`}
          className={cn(
            'relative block min-h-[14rem] overflow-hidden bg-canvas',
            featured ? 'aspect-[16/10] md:aspect-auto md:min-h-[20rem] md:w-[48%]' : 'aspect-[16/10]',
          )}
          aria-label={`${project.title} details`}
        >
          <ProjectPreview
            project={project}
            className="h-full transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-canvas/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute top-4 right-4 flex gap-2">
            {project.featured ? (
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-accent/95 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-accent-fg backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-fg" />
                Featured
              </span>
            ) : null}
          </div>
        </Link>
        <div className="flex flex-1 flex-col p-6 lg:p-7">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs font-medium text-accent">{project.year}</span>
            <span className="text-muted">•</span>
            <span className="font-mono text-xs text-muted">{project.role}</span>
          </div>
          <h3 className="font-display text-xl font-bold leading-tight lg:text-2xl">
            <Link
              to={`/projects/${project.slug}`}
              className="transition-colors hover:text-accent"
            >
              {project.title}
            </Link>
          </h3>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-muted/90 sm:text-base">{project.summary}</p>
          
          <div className="mt-5 border-t border-line pt-5">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-muted">
              Tech Stack
            </p>
            <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-lg border border-line bg-surface/50 px-3 py-1.5 font-mono text-[11px] font-medium text-ink transition-all hover:border-accent/50 hover:bg-accent/5 hover:scale-105"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {project.liveUrl ? (
              <Button href={project.liveUrl} size="sm">
                <ExternalLink size={14} aria-hidden="true" />
                Live Site
              </Button>
            ) : null}
            {project.githubUrl ? (
              <Button href={project.githubUrl} variant="secondary" size="sm">
                <GitHubIcon size={14} />
                Source
              </Button>
            ) : null}
            <Button to={`/projects/${project.slug}`} variant="ghost" size="sm">
              <Code2 size={14} aria-hidden="true" />
              Case Study
              <ArrowUpRight size={12} aria-hidden="true" />
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
