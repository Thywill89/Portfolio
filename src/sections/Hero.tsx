import { Button } from '@/components/ui/Button';
import {
  ExpressIcon,
  MySqlIcon,
  NextJsIcon,
  NodeJsIcon,
  PhpIcon,
  PrismaIcon,
  ReactIcon,
  SupabaseIcon,
  TailwindIcon,
  TypeScriptIcon,
} from '@/components/icons';
import { SITE } from '@/lib/site';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Code2, Terminal } from 'lucide-react';
import { useEffect, useState } from 'react';

const STACK = [
  { name: 'React', Icon: ReactIcon },
  { name: 'Next.js', Icon: NextJsIcon },
  { name: 'Node.js', Icon: NodeJsIcon },
  { name: 'PHP', Icon: PhpIcon },
  { name: 'Express', Icon: ExpressIcon },
  { name: 'TypeScript', Icon: TypeScriptIcon },
  { name: 'Prisma', Icon: PrismaIcon },
  { name: 'Supabase', Icon: SupabaseIcon },
  { name: 'Tailwind', Icon: TailwindIcon },
  { name: 'MySQL', Icon: MySqlIcon },
];

const ROLES = [
  'Full-Stack Developer',
  'Frontend Engineer',
  'Backend Developer',
  'Web Developer',
  'Software Engineer',
  'React Developer',
];

const PROMPT_LINES = [
  '$ whoami',
  'Thywill Naamwanuru Saanuo ~ Software Engineer | Full-Stack Developer',
  '',
  '$ cat skills.txt',
  'Frontend: React, Next.js, TypeScript',
  'Backend: Node.js, PHP, Express, APIs',
  'Database: MySQL, PostgreSQL, Prisma',
  '',
  '$ ls projects/',
  '77massagetreat.com  iot-lab',
  'sevan-fitness  school-mgmt',
  'merillafits E-commerce',
  '',
  '$ echo $STATUS',
  'Available for hire',
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = Boolean(useReducedMotion());
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

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

  useEffect(() => {
    if (reduce) return;
    
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [reduce]);

  const stack = [...STACK, ...STACK];

  return (
    <section id="hero" className="relative isolate overflow-hidden border-b border-line">
      <div className="relative mx-auto min-h-[calc(100vh-8.5rem)] max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Left: Text Content - NO blur on text itself */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="flex flex-col justify-center"
          >
            {/* Status badge - solid background, crisp text */}
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-lg border border-line bg-surface px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              hi
            </div>

            {/* Main heading - crisp, strong contrast */}
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              <span className="block mb-2">I'm</span>
              <span className="text-accent">{SITE.shortName} Naamwanuru Saanuo</span>
            </h1>

            {/* Role cycling - crisp text */}
            <div className="mt-6 h-[2.5rem] sm:h-[3rem] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentRoleIndex}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.5, ease }}
                  className="font-display text-2xl font-bold leading-tight text-muted sm:text-3xl"
                >
                  {ROLES[currentRoleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Description - crisp, good contrast */}
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
              Building reliable products with React, Node.js, Express, PHP, and Next.js. From concept to
              deployment, I ship clean code and working software.
            </p>

            {/* CTAs - crisp buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/#featured">
                <Code2 size={16} aria-hidden="true" />
                View Projects
              </Button>
              <Button href="/#contact" variant="secondary">
                Get in Touch
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </div>
          </motion.div>

          {/* Right: Terminal Only */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="flex items-center justify-end"
          >
            {/* Terminal card - solid background, crisp text */}
            <div className="w-full overflow-hidden rounded-xl border border-line bg-surface p-4 shadow-lg sm:p-6 lg:w-[92%] lg:translate-x-4">
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
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="min-w-0 flex-1 overflow-x-auto">
                  <div className="space-y-1 font-mono text-xs leading-relaxed text-muted sm:text-[13px]">
                    {displayedLines.map((line, i) => (
                      <div
                        key={i}
                        className={
                          line.startsWith('$')
                            ? 'text-accent'
                            : line === ''
                              ? 'h-3'
                              : ''
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
                <img
                  src="/images/portrait.jpg"
                  alt={SITE.name}
                  className="h-40 w-32 shrink-0 rounded-lg border border-line object-cover object-[center_18%] sm:h-52 sm:w-40 lg:h-60 lg:w-48"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tech stack marquee */}
      <div className="relative overflow-hidden border-t border-line bg-surface/40 py-3.5">
        <div className="flex">
          <div className="animate-marquee flex min-w-full shrink-0 items-center gap-8 pr-8 sm:gap-12 sm:pr-12">
            {stack.map((item, i) => (
              <span
                key={`${item.name}-${String(i)}`}
                className="inline-flex items-center gap-2 whitespace-nowrap font-mono text-xs uppercase tracking-[0.22em] text-muted"
              >
                <item.Icon size={16} className="text-accent" />
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
