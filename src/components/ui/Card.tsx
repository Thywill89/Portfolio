import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

type CardProps = HTMLAttributes<HTMLElement> & {
  as?: 'article' | 'div' | 'li';
  featured?: boolean;
};

export function Card({
  as: Tag = 'article',
  featured = false,
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <Tag
      className={cn(
        'rounded-2xl border bg-surface p-6 transition',
        featured
          ? 'border-accent/40 shadow-glow'
          : 'border-line hover:border-accent/35 hover:shadow-glow',
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
