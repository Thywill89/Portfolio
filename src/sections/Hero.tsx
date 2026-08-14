import { Button } from '@/components/ui/Button';
import { OrbitPortrait } from '@/components/OrbitPortrait';
import { SITE } from '@/lib/site';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

const TAPE = [
  'React',
  'Next.js',
  'Node.js',
  'PHP',
  'Express',
  'Prisma',
  'Supabase',
  'Tailwind',
  'IoT',
  'Big Data',
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = Boolean(useReducedMotion());
  const tape = [...TAPE, ...TAPE];

  return (
    <section id="hero" className="relative isolate overflow-hidden border-b border-line">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <p
        className="pointer-events-none absolute -left-2 top-[18%] font-display text-[22vw] font-extrabold leading-none text-ink/[0.045] dark:text-ink/[0.06]"
        aria-hidden="true"
      >
        TNS
      </p>

      <div className="relative mx-auto grid min-h-[calc(100vh-8.5rem)] max-w-content items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:py-10">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Open for freelance
          </p>

          <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">
            {SITE.location}
          </p>
          <p className="mt-3 text-lg text-muted sm:text-xl">Hi there, I&apos;m</p>
          <h1 className="mt-1 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {SITE.name}
          </h1>
          <p className="mt-4 font-display text-2xl font-semibold leading-tight sm:text-3xl">
            I build <span className="text-accent">the web</span> that lasts.
          </p>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            Full-stack developer in Kasoa. Websites, APIs, and dashboards — designed, built, and
            delivered to production.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/#projects">
              See live work
              <ArrowDownRight size={16} aria-hidden="true" />
            </Button>
            <Button href="/#contact" variant="secondary">
              Start a project
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12, ease }}
        >
          <OrbitPortrait />
        </motion.div>
      </div>

      <div className="relative border-t border-line bg-surface/40 py-3">
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex min-w-full shrink-0 gap-10 pr-10">
            {tape.map((item, i) => (
              <span
                key={`${item}-${String(i)}`}
                className="font-mono text-xs uppercase tracking-[0.28em] text-muted"
              >
                {item} <span className="text-accent">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
