import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ProjectPreview } from '@/components/ProjectPreview';
import { cn } from '@/lib/utils';
import type { Project } from '@/types';
import { ArrowUpRight, Code2, ExternalLink } from 'lucide-react';
import { GitHubIcon } from '@/components/icons';
import { Link } from 'react-router-dom';

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <Card
      featured={featured}
      className={cn(
        'group flex h-full flex-col overflow-hidden p-0 transition-all duration-300',
        featured && 'md:flex-row',
      )}
    >
      <Link
        to={`/projects/${project.slug}`}
        className={cn(
          'relative block min-h-[14rem] overflow-hidden bg-canvas',
          featured ? 'aspect-[16/10] md:aspect-auto md:min-h-[18rem] md:w-[48%]' : 'aspect-[16/10]',
        )}
        aria-label={`${project.title} details`}
      >
        <ProjectPreview
          project={project}
          className="h-full transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          {project.featured ? (
            <span className="inline-flex items-center gap-1 rounded-md bg-accent/15 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-accent">
              <span className="h-1 w-1 rounded-full bg-accent" />
              Featured
            </span>
          ) : null}
          <span className="font-mono text-xs text-muted">{project.year}</span>
          <span className="font-mono text-xs text-muted">• {project.role}</span>
        </div>
        <h3 className="font-display text-xl font-bold leading-tight">
          <Link
            to={`/projects/${project.slug}`}
            className="transition-colors hover:text-accent"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>
        
        <div className="mt-4 border-t border-line pt-4">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-muted">
            Tech Stack
          </p>
          <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md border border-line bg-surface/50 px-2.5 py-1 font-mono text-[11px] text-ink transition-colors hover:border-accent/50 hover:bg-accent/5"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.liveUrl ? (
            <Button href={project.liveUrl} size="sm">
              <ExternalLink size={14} aria-hidden="true" />
              Live
            </Button>
          ) : null}
          {project.githubUrl ? (
            <Button href={project.githubUrl} variant="secondary" size="sm">
              <GitHubIcon size={14} />
              Code
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
  );
}
