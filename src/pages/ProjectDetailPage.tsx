import { Button } from '@/components/ui/Button';
import { ProjectPreview } from '@/components/ProjectPreview';
import { Section } from '@/components/ui/Section';
import { useSeo } from '@/hooks/useSeo';
import { PROJECTS } from '@/lib/site';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
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
    <Section id="project-detail" eyebrow={project.role} title={project.title}>
      <div className="mb-8 overflow-hidden rounded-2xl border border-line">
        <ProjectPreview project={project} className="min-h-[18rem] sm:min-h-[22rem]" />
      </div>
      <p className="max-w-2xl text-lg leading-relaxed text-muted">{project.description}</p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
          >
            {tag}
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-wrap gap-3">
        {project.liveUrl ? (
          <Button href={project.liveUrl}>
            Live site
            <ArrowUpRight size={16} aria-hidden="true" />
          </Button>
        ) : null}
        {project.githubUrl ? (
          <Button href={project.githubUrl} variant="secondary">
            <GitHubIcon size={16} />
            GitHub
          </Button>
        ) : null}
        <Button to="/projects" variant="ghost">
          <ArrowLeft size={16} aria-hidden="true" />
          All projects
        </Button>
      </div>
      <p className="mt-10">
        <Link to="/" className="text-sm text-muted hover:text-accent">
          ← Home
        </Link>
      </p>
    </Section>
  );
}
