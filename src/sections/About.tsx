import { Section } from '@/components/ui/Section';
import { ABOUT } from '@/lib/site';
import { Code2, GraduationCap, MapPin, Briefcase } from 'lucide-react';

export function About() {
  return (
    <Section id="about" containerClassName="max-w-6xl px-4 sm:px-6">
      <div className="max-w-4xl">
        <div className="min-w-0">
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-accent">
            01 — About
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Building web products while studying IoT & Big Data
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Full-stack developer combining academic learning with real-world client projects. Code
            that works, shipped on time.
          </p>

          <div className="mt-6 space-y-4">
            {ABOUT.bio.map((p) => (
              <p key={p} className="text-base leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {ABOUT.facts.map((fact, index) => {
              const icons = [MapPin, GraduationCap, Briefcase, Code2];
              const Icon = icons[index] || Code2;
              return (
                <div
                  key={fact.label}
                  className="flex items-start gap-4 rounded-xl border border-line bg-surface p-4 transition-all duration-300 hover:border-accent/30 hover:shadow-glow"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon size={18} />
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-wider text-muted">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 font-display text-sm font-semibold">{fact.value}</dd>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
