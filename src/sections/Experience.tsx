import { Section } from '@/components/ui/Section';
import { TIMELINE } from '@/lib/site';
import { GraduationCap, Briefcase } from 'lucide-react';

export function Experience() {
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
          {TIMELINE.map((item) => (
            <li key={item.id} className="relative pl-12 sm:pl-16">
              <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-line bg-surface text-accent shadow-lg sm:h-10 sm:w-10">
                {item.kind === 'education' ? (
                  <GraduationCap size={16} aria-hidden="true" className="sm:h-5 sm:w-5" />
                ) : (
                  <Briefcase size={16} aria-hidden="true" className="sm:h-5 sm:w-5" />
                )}
              </div>
              
              <div className="rounded-xl border border-line bg-surface p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-glow">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-flex rounded-md bg-accent/10 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-accent">
                    {item.start} — {item.end}
                  </span>
                  <span className="font-mono text-xs text-muted">
                    {item.kind === 'education' ? '🎓 Education' : '💼 Work'}
                  </span>
                </div>
                
                <h3 className="font-display text-xl font-bold leading-tight">{item.title}</h3>
                <p className="mt-2 text-sm font-medium text-muted">
                  {item.org}
                  {item.location && (
                    <>
                      <span className="mx-2">·</span>
                      {item.location}
                    </>
                  )}
                </p>
                
                <ul className="mt-4 space-y-2 border-t border-line pt-4">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
