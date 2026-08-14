import { ProjectCard } from '@/components/ProjectCard';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { PROJECTS } from '@/lib/site';
import { cn } from '@/lib/utils';
import { useMemo, useState } from 'react';

const ALL = 'All';

export function Projects({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState(ALL);

  const tags = useMemo(() => {
    const set = new Set<string>();
    for (const project of PROJECTS) {
      for (const tag of project.tags) set.add(tag);
    }
    return [ALL, ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, []);

  const filtered = PROJECTS.filter((project) =>
    filter === ALL ? true : project.tags.includes(filter),
  );
  const visible = typeof limit === 'number' ? filtered.slice(0, limit) : filtered;
  const featured = visible.find((p) => p.featured);
  const rest = visible.filter((p) => p !== featured);

  return (
    <Section
      id="projects"
      eyebrow="03 — Work"
      title="Selected projects"
      description="Live client work first. Filter by the stack I used."
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

      {visible.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-line p-8 text-sm text-muted">
          No projects match that tag yet.
        </p>
      ) : (
        <div className="grid gap-6">
          {featured ? <ProjectCard project={featured} featured /> : null}
          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      )}

      {limit ? (
        <div className="mt-10">
          <Button to="/projects" variant="secondary">
            View all projects
          </Button>
        </div>
      ) : null}
    </Section>
  );
}
