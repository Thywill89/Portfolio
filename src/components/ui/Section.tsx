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
    <section id={id} className={cn('scroll-mt-24 py-24 sm:py-32 lg:py-40', className)}>
      <motion.div
        className={cn('mx-auto max-w-content px-4 sm:px-6', containerClassName)}
        initial={reduce ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {(eyebrow || title || description) && (
          <header className="mb-16 max-w-3xl lg:mb-20">
            {eyebrow ? (
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="mt-6 text-lg leading-relaxed text-muted/90 sm:text-xl">
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
