import { Section } from '@/components/ui/Section';
import { SKILL_GROUPS } from '@/lib/site';
import { Code2, Database, Globe } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const CATEGORY_ICONS = {
  Frontend: Globe,
  Backend: Code2,
  'Database / Tools': Database,
} as const;

const ease = [0.22, 1, 0.36, 1] as const;

export function Skills() {
  const reduce = Boolean(useReducedMotion());

  return (
    <Section
      id="skills"
      eyebrow="02 — Skills"
      title="Full-stack capability"
      description="Modern web development from UI to database. Technologies I use daily on client projects and personal builds."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {SKILL_GROUPS.map((group, groupIndex) => {
          const Icon = CATEGORY_ICONS[group.category as keyof typeof CATEGORY_ICONS];
          return (
            <motion.div
              key={group.category}
              initial={reduce ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: groupIndex * 0.15, ease }}
              className="group relative overflow-hidden rounded-xl border border-line bg-surface p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-glow"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-accent-fg group-hover:scale-110">
                    {Icon && <Icon size={22} />}
                  </div>
                  <h3 className="font-display text-lg font-bold lg:text-xl">{group.category}</h3>
                </div>
                <ul className="space-y-2.5">
                  {group.items.map((item, itemIndex) => (
                    <motion.li
                      key={item}
                      initial={reduce ? false : { opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.3, delay: groupIndex * 0.15 + itemIndex * 0.05, ease }}
                      className="flex items-center gap-2.5 text-sm text-muted/90 transition-colors hover:text-ink"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      <span className="font-mono font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: 0.5, ease }}
        className="mt-12 rounded-xl border border-line bg-surface/50 p-6 lg:p-7"
      >
        <p className="font-mono text-xs uppercase tracking-wider text-accent">Working Style</p>
        <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="font-display text-sm font-semibold lg:text-base">Version Control</h4>
            <p className="mt-2 text-sm text-muted/90">Git workflows, GitHub, clean commits</p>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold lg:text-base">Deployment</h4>
            <p className="mt-2 text-sm text-muted/90">Vercel, Hostinger, cPanel, CI/CD</p>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold lg:text-base">Responsive Design</h4>
            <p className="mt-2 text-sm text-muted/90">Mobile-first, accessible, tested</p>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold lg:text-base">Documentation</h4>
            <p className="mt-2 text-sm text-muted/90">Clear handoffs, maintainable code</p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
