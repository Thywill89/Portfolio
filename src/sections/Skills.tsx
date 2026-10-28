import { Section } from '@/components/ui/Section';
import { SKILL_GROUPS } from '@/lib/site';
import { Code2, Database, Globe } from 'lucide-react';

const CATEGORY_ICONS = {
  Frontend: Globe,
  Backend: Code2,
  'Database / Tools': Database,
} as const;

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 — Skills"
      title="Full-stack capability"
      description="Modern web development from UI to database. Technologies I use daily on client projects and personal builds."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {SKILL_GROUPS.map((group) => {
          const Icon = CATEGORY_ICONS[group.category as keyof typeof CATEGORY_ICONS];
          return (
            <div
              key={group.category}
              className="group rounded-xl border border-line bg-surface p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-glow"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-fg">
                  {Icon && <Icon size={20} />}
                </div>
                <h3 className="font-display text-lg font-bold">{group.category}</h3>
              </div>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
                  >
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    <span className="font-mono">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      
      <div className="mt-12 rounded-xl border border-line bg-surface/50 p-6">
        <p className="font-mono text-xs uppercase tracking-wider text-muted">Working Style</p>
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="font-display text-sm font-semibold">Version Control</h4>
            <p className="mt-1 text-sm text-muted">Git workflows, GitHub, clean commits</p>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold">Deployment</h4>
            <p className="mt-1 text-sm text-muted">Vercel, Hostinger, cPanel, CI/CD</p>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold">Responsive Design</h4>
            <p className="mt-1 text-sm text-muted">Mobile-first, accessible, tested</p>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold">Documentation</h4>
            <p className="mt-1 text-sm text-muted">Clear handoffs, maintainable code</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
