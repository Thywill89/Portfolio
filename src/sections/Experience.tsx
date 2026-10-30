import { Section } from '@/components/ui/Section';
import { TIMELINE } from '@/lib/site';
import { GraduationCap, Briefcase } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

export function Experience() {
  const reduce = Boolean(useReducedMotion());

  return (
    <Section
      id="experience"
      eyebrow="04 — Experience"
      title="Professional Journey"
      description="Building software while studying IoT and Big Data at GCTU. Freelance work meets academic learning."
    >
      <div className="relative">
        <div className="absolute left-[15px] top-0 h-full w-[2px] bg-gradient-to-b from-accent via-line to-transparent sm:left-[19px]" />
        <ol className="relative space-y-10">
          {TIMELINE.map((item, index) => (
            <motion.li
              key={item.id}
              initial={reduce ? false : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15, ease }}
              className="relative pl-12 sm:pl-16"
            >
              <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-accent bg-surface text-accent shadow-lg sm:h-10 sm:w-10">
                {item.kind === 'education' ? (
                  <GraduationCap size={16} aria-hidden="true" className="sm:h-5 sm:w-5" />
                ) : (
                  <Briefcase size={16} aria-hidden="true" className="sm:h-5 sm:w-5" />
                )}
              </div>
              
              <div className="group relative overflow-hidden rounded-xl border border-line bg-surface p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-glow">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="inline-flex rounded-lg bg-accent/15 px-2.5 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-accent">
                      {item.start} — {item.end}
                    </span>
                    <span className="font-mono text-xs text-muted">
                      {item.kind === 'education' ? 'Education' : 'Work'}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-xl font-bold leading-tight lg:text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm font-medium text-muted sm:text-base">
                    {item.org}
                  </p>
                  
                  <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted/90">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
