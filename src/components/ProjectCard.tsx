import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ProjectPreview } from '@/components/ProjectPreview';
import { cn } from '@/lib/utils';
import type { Project } from '@/types';
import { ArrowUpRight } from 'lucide-react';
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
      className={cn('flex h-full flex-col overflow-hidden p-0', featured && 'md:flex-row')}
    >
      <Link
        to={`/projects/${project.slug}`}
        className={cn(
          'block min-h-[14rem] overflow-hidden bg-canvas',
          featured ? 'aspect-[16/10] md:aspect-auto md:min-h-[18rem] md:w-[48%]' : 'aspect-[16/10]',
        )}
        aria-label={`${project.title} details`}
      >
        <ProjectPreview project={project} className="h-full transition duration-500 hover:scale-[1.02]" />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          {project.featured ? (
            <span className="rounded-full bg-accent/15 px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-accent">
              Featured
            </span>
          ) : null}
          <span className="font-mono text-xs text-muted">{project.year}</span>
        </div>
        <h3 className="font-display text-xl font-semibold">
          <Link to={`/projects/${project.slug}`} className="hover:text-accent">
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tech stack">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.liveUrl ? (
            <Button href={project.liveUrl} size="sm">
              Live site
              <ArrowUpRight size={14} aria-hidden="true" />
            </Button>
          ) : null}
          {project.githubUrl ? (
            <Button href={project.githubUrl} variant="secondary" size="sm">
              <GitHubIcon size={14} />
              GitHub
            </Button>
          ) : null}
          <Button to={`/projects/${project.slug}`} variant="ghost" size="sm">
            Details
          </Button>
        </div>
      </div>
    </Card>
  );
}
