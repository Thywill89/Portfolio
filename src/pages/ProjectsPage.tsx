import { ProjectCard } from '@/components/ProjectCard';
import { Section } from '@/components/ui/Section';
import { useSeo } from '@/hooks/useSeo';
import { PROJECTS } from '@/lib/site';
import { cn } from '@/lib/utils';
import { useMemo, useState } from 'react';

const ALL = 'All';

export function ProjectsPage() {
  useSeo({
    title: 'Projects',
    description: 'Selected full-stack work by Thywill Naamwanuru Saanuo — including 77 Massage Treat.',
  });

  const [filter, setFilter] = useState(ALL);
  const tags = useMemo(() => {
    const set = new Set<string>();
    for (const project of PROJECTS) {
      for (const tag of project.tags) set.add(tag);
    }
    return [ALL, ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, []);

  const visible = PROJECTS.filter((project) =>
    filter === ALL ? true : project.tags.includes(filter),
  );

  return (
    <Section
      id="all-projects"
      eyebrow="Archive"
      title="All projects"
      description="Filter by the tools used. Featured client work sits at the top."
    >
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects by tech">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => {
              setFilter(tag);
            }}
            className={cn(
              'rounded-full border px-3 py-1.5 text-sm transition',
              filter === tag
                ? 'border-accent bg-accent text-accent-fg'
                : 'border-line bg-surface text-muted hover:text-ink',
            )}
            aria-pressed={filter === tag}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
