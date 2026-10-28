import { Button } from '@/components/ui/Button';
import { ProjectPreview } from '@/components/ProjectPreview';
import { Section } from '@/components/ui/Section';
import { useSeo } from '@/hooks/useSeo';
import { PROJECTS } from '@/lib/site';
import { ArrowLeft, ArrowUpRight, Calendar, Layers, User } from 'lucide-react';
import { GitHubIcon } from '@/components/icons';
import { Link, useParams } from 'react-router-dom';

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = PROJECTS.find((item) => item.slug === slug);

  useSeo({
    title: project?.title ?? 'Project',
    description: project?.summary,
  });

  if (!project) {
    return (
      <Section id="missing-project" title="Project not found">
        <p className="text-muted">That slug does not match a project in this portfolio.</p>
        <Button to="/projects" className="mt-6" variant="secondary">
          <ArrowLeft size={16} aria-hidden="true" />
          Back to projects
        </Button>
      </Section>
    );
  }

  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Link
          to="/projects"
          className="group mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          <span>Back to Projects</span>
        </Link>

        <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-2">
              {project.featured && (
                <span className="inline-flex items-center gap-1 rounded-md bg-accent/15 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-accent">
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  Featured
                </span>
              )}
              <span className="font-mono text-xs text-muted">{project.role}</span>
            </div>
            <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted">{project.summary}</p>
          </div>
        </div>

        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          <div className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Calendar size={18} />
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted">Year</p>
              <p className="mt-1 font-display text-sm font-semibold">{project.year}</p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <User size={18} />
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted">Role</p>
              <p className="mt-1 font-display text-sm font-semibold">{project.role}</p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Layers size={18} />
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted">Stack</p>
              <p className="mt-1 font-display text-sm font-semibold">
                {project.tags.slice(0, 2).join(', ')}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-10 overflow-hidden rounded-2xl border border-line shadow-xl">
          <ProjectPreview project={project} className="min-h-[20rem] sm:min-h-[28rem]" />
        </div>

        <div className="prose prose-lg mx-auto mb-10">
          <h2 className="font-display text-2xl font-bold">Overview</h2>
          <p className="text-muted">{project.description}</p>
        </div>

        <div className="mb-10 rounded-xl border border-line bg-surface p-6 sm:p-8">
          <h3 className="mb-4 font-display text-xl font-bold">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-canvas px-3 py-2 font-mono text-sm transition-colors hover:border-accent/50 hover:bg-accent/5"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 border-t border-line pt-8">
          {project.liveUrl && (
            <Button href={project.liveUrl}>
              <ArrowUpRight size={16} aria-hidden="true" />
              Visit Live Site
            </Button>
          )}
          {project.githubUrl && (
            <Button href={project.githubUrl} variant="secondary">
              <GitHubIcon size={16} />
              View Code
            </Button>
          )}
          <Button to="/projects" variant="ghost">
            <ArrowLeft size={16} aria-hidden="true" />
            All Projects
          </Button>
        </div>
      </div>
    </div>
  );
}
