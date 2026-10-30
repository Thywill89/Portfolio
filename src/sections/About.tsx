import { Section } from '@/components/ui/Section';
import { ABOUT } from '@/lib/site';
import { Code2, GraduationCap, Briefcase } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

export function About() {
  const reduce = Boolean(useReducedMotion());

  return (
    <Section id="about" containerClassName="max-w-6xl px-4 sm:px-6">
      <div className="max-w-4xl">
        <div className="min-w-0">
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-accent">
            01 — About
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Building web products while studying IoT & Big Data
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
            Full-stack developer combining academic learning with real-world client projects. Code
            that works, shipped on time.
          </p>

          <div className="mt-8 space-y-5">
            {ABOUT.bio.map((p, i) => (
              <motion.p
                key={p}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="text-base leading-relaxed text-muted/90 sm:text-lg"
              >
                {p}
              </motion.p>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {ABOUT.facts.map((fact, index) => {
              const icons = [GraduationCap, Briefcase, Code2];
              const Icon = icons[index] || Code2;
              return (
                <motion.div
                  key={fact.label}
                  initial={reduce ? false : { opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: index * 0.1, ease }}
                  className="group relative overflow-hidden rounded-xl border border-line bg-surface p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-glow"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                      <Icon size={20} />
                    </div>
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-wider text-muted">
                        {fact.label}
                      </dt>
                      <dd className="mt-1.5 font-display text-base font-semibold">{fact.value}</dd>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
