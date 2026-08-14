import { Section } from '@/components/ui/Section';
import { TIMELINE } from '@/lib/site';
import { GraduationCap, Briefcase } from 'lucide-react';

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="04 — Experience"
      title="Work and study, in parallel."
      description="Freelance shipping alongside a BSc. in Internet of Things and Big Data."
    >
      <ol className="relative space-y-8 border-l border-line pl-6 sm:pl-8">
        {TIMELINE.map((item) => (
          <li key={item.id} className="relative">
            <span className="absolute -left-[1.85rem] top-1 flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface text-accent sm:-left-[2.35rem]">
              {item.kind === 'education' ? (
                <GraduationCap size={16} aria-hidden="true" />
              ) : (
                <Briefcase size={16} aria-hidden="true" />
              )}
            </span>
            <p className="font-mono text-xs uppercase tracking-wider text-accent">
              {item.start} — {item.end}
            </p>
            <h3 className="mt-1 font-display text-xl font-semibold">{item.title}</h3>
            <p className="text-sm text-muted">
              {item.org} · {item.location}
            </p>
            <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
