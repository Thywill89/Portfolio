import { ProjectCard } from '@/components/ProjectCard';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { PROJECTS } from '@/lib/site';
import { ArrowRight } from 'lucide-react';

export function MyWorks({ limit }: { limit?: number }) {
  const visible = typeof limit === 'number' ? PROJECTS.slice(0, limit) : PROJECTS;

  return (
    <Section
      id="my-works"
      eyebrow="Portfolio"
      title="My Works"
      description="Products with purpose. Built beyond the prototype."
      containerClassName="max-w-7xl"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>

      {limit && PROJECTS.length > limit && (
        <div className="mt-12 text-center">
          <Button to="/projects" variant="secondary" size="lg">
            View All Projects
            <ArrowRight size={18} />
          </Button>
        </div>
      )}
    </Section>
  );
}
