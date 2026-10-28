import { ProjectCard } from '@/components/ProjectCard';
import { Section } from '@/components/ui/Section';
import { useSeo } from '@/hooks/useSeo';
import { PROJECTS } from '@/lib/site';
import { cn } from '@/lib/utils';
import { Filter } from 'lucide-react';
import { useMemo, useState } from 'react';

const ALL = 'All';

export function ProjectsPage() {
  useSeo({
    title: 'Projects',
    description: 'Complete portfolio of web applications and systems — PHP, React, Node.js, Next.js. Client projects and personal builds.',
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
      eyebrow="Portfolio"
      title="All Projects"
      description={`${PROJECTS.length} projects spanning client work, personal builds, and academic projects. Filter by technology stack.`}
    >
      <div className="mb-8 rounded-xl border border-line bg-surface p-4">
        <div className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted">
          <Filter size={14} />
          Filter by Technology
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by tech">
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => {
                setFilter(tag);
              }}
              className={cn(
                'rounded-lg border px-3 py-2 font-mono text-sm transition-all',
                filter === tag
                  ? 'border-accent bg-accent text-accent-fg shadow-glow'
                  : 'border-line bg-canvas text-muted hover:border-accent/50 hover:bg-accent/5 hover:text-ink',
              )}
              aria-pressed={filter === tag}
            >
              {tag}
              {filter === tag && (
                <span className="ml-2 text-xs">
                  ({visible.length})
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {visible.length === 0 ? (
        <div className="rounded-xl border border-dashed border-line bg-surface/50 p-12 text-center">
          <p className="text-muted">No projects match that filter.</p>
        </div>
      ) : (
        <>
          <div className="mb-6 flex items-center justify-between">
            <p className="font-mono text-sm text-muted">
              Showing {visible.length} of {PROJECTS.length} projects
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {visible.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </>
      )}
    </Section>
  );
}
