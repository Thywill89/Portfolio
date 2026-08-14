import { Section } from '@/components/ui/Section';
import { ABOUT } from '@/lib/site';

export function About() {
  return (
    <Section
      id="about"
      containerClassName="max-w-6xl px-4 sm:px-6"
    >
      <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-14">
        <div className="min-w-0">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            01 — About
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Student by schedule, developer by shipping.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Full-stack work for real clients, plus a degree that keeps me close to data and
            connected systems.
          </p>
          {ABOUT.bio.map((p) => (
            <p key={p} className="mt-4 text-base leading-relaxed text-muted">
              {p}
            </p>
          ))}
          <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {ABOUT.facts.map((fact) => (
              <div key={fact.label} className="rounded-xl border border-line bg-surface p-4">
                <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm font-semibold">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="w-full lg:max-w-[20rem]">
          <div className="overflow-hidden rounded-3xl border border-line bg-surface shadow-glow">
            <img
              src="/images/portrait.png"
              alt={ABOUT.photoAlt}
              width={720}
              height={960}
              loading="lazy"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
