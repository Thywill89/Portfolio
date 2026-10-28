import { Button } from '@/components/ui/Button';
import { SITE } from '@/lib/site';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Code2, Terminal } from 'lucide-react';
import { useEffect, useState } from 'react';

const STACK = [
  'React',
  'Next.js',
  'Node.js',
  'PHP',
  'Express',
  'TypeScript',
  'Prisma',
  'Supabase',
  'Tailwind',
  'MySQL',
];

const PROMPT_LINES = [
  '$ whoami',
  'thywill@kasoa ~ Full-Stack Developer',
  '',
  '$ cat skills.txt',
  'Frontend: React, Next.js, TypeScript',
  'Backend: Node.js, PHP, Express, APIs',
  'Database: MySQL, PostgreSQL, Prisma',
  '',
  '$ ls projects/',
  '77massagetreat.com  campus-connect',
  'iot-lab  sevan-fitness  school-mgmt',
  '',
  '$ echo $STATUS',
  'Available for freelance & remote work',
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = Boolean(useReducedMotion());
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    if (reduce || currentLineIndex >= PROMPT_LINES.length) {
      setDisplayedLines(PROMPT_LINES);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedLines((prev) => [...prev, PROMPT_LINES[currentLineIndex]!]);
      setCurrentLineIndex((prev) => prev + 1);
    }, 120);

    return () => clearTimeout(timer);
  }, [currentLineIndex, reduce]);

  const stack = [...STACK, ...STACK];

  return (
    <section id="hero" className="relative isolate overflow-hidden border-b border-line">
      {/* Background image - clearly visible */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 dark:opacity-30"
          style={{ backgroundImage: 'url(/images/portrait.png)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FAFAF7]/60 dark:to-[#0b0f14]/60" />
      </div>
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
      
      <div className="relative mx-auto min-h-[calc(100vh-8.5rem)] max-w-content px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.2fr,1fr] lg:gap-12">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="flex flex-col justify-center"
          >
            {/* Frosted glass panel behind text content */}
            <div className="absolute inset-x-4 top-16 bottom-16 rounded-2xl bg-surface/70 backdrop-blur-md dark:bg-surface/60 sm:inset-x-6 lg:inset-x-auto lg:left-0 lg:right-[52%] lg:top-20 lg:bottom-20" aria-hidden="true" />
            
            <div className="relative mb-6 inline-flex w-fit items-center gap-2 rounded-lg border border-line bg-surface/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-muted backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Open for freelance
            </div>

            <div className="mb-4 flex items-center gap-2 font-mono text-xs text-accent">
              <Terminal size={14} />
              <span>{SITE.location}</span>
            </div>

            <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl [text-shadow:_0_2px_8px_rgb(0_0_0_/_40%),_0_4px_16px_rgb(0_0_0_/_30%)] dark:[text-shadow:_0_2px_12px_rgb(0_0_0_/_60%),_0_4px_20px_rgb(0_0_0_/_40%)]">
              {SITE.shortName}
              <br />
              <span className="text-accent">Naamwanuru</span>
            </h1>

            <p className="mt-6 font-display text-xl font-semibold leading-tight text-muted sm:text-2xl [text-shadow:_0_1px_4px_rgb(0_0_0_/_30%)] dark:[text-shadow:_0_1px_6px_rgb(0_0_0_/_50%)]">
              Full-Stack Developer
            </p>

            <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted sm:text-base [text-shadow:_0_1px_3px_rgb(0_0_0_/_25%)] dark:[text-shadow:_0_1px_4px_rgb(0_0_0_/_40%)]">
              Building reliable web products with React, Node.js, and PHP. From concept to
              deployment — I ship clean code and working software.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/#projects">
                <Code2 size={16} aria-hidden="true" />
                View Projects
              </Button>
              <Button href="/#contact" variant="secondary">
                Get in Touch
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-line pt-8 text-sm">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted">Location</p>
                <p className="mt-1 text-xs font-medium sm:text-sm">Kasoa, GH</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted">Experience</p>
                <p className="mt-1 text-xs font-medium sm:text-sm">~2 Years</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted">Work Type</p>
                <p className="mt-1 text-xs font-medium sm:text-sm">Remote</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="flex items-center"
          >
            <div className="w-full overflow-hidden rounded-xl border border-line bg-surface/80 p-4 shadow-xl backdrop-blur-sm sm:p-6">
              <div className="mb-3 flex items-center justify-between border-b border-line pb-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                    <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                    <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <span className="ml-2 font-mono text-xs text-muted">bash</span>
                </div>
                <Terminal size={14} className="text-muted" />
              </div>
              <div className="overflow-x-auto">
                <div className="min-w-0 space-y-1 font-mono text-xs leading-relaxed sm:text-[13px]">
                  {displayedLines.map((line, i) => (
                    <div
                      key={i}
                      className={
                        line.startsWith('$')
                          ? 'text-accent'
                          : line === ''
                            ? 'h-3'
                            : 'text-muted'
                      }
                    >
                      {line || '\u00A0'}
                    </div>
                  ))}
                  {!reduce && currentLineIndex < PROMPT_LINES.length && (
                    <span className="inline-block h-4 w-2 animate-pulse bg-accent" />
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative overflow-hidden border-t border-line bg-surface/40 py-3">
        <div className="flex">
          <div className="animate-marquee flex min-w-full shrink-0 gap-6 pr-6 sm:gap-10 sm:pr-10">
            {stack.map((item, i) => (
              <span
                key={`${item}-${String(i)}`}
                className="whitespace-nowrap font-mono text-xs uppercase tracking-[0.28em] text-muted"
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
