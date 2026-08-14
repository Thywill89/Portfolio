import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  containerClassName,
}: SectionProps) {
  const reduce = useReducedMotion();

  return (
    <section id={id} className={cn('scroll-mt-24 py-20 sm:py-24', className)}>
      <motion.div
        className={cn('mx-auto max-w-content px-4 sm:px-6', containerClassName)}
        initial={reduce ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {(eyebrow || title || description) && (
          <header className="mb-12 max-w-2xl">
            {eyebrow ? (
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                {description}
              </p>
            ) : null}
          </header>
        )}
        {children}
      </motion.div>
    </section>
  );
}
