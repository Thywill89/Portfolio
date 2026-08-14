import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

const variants = {
  primary:
    'bg-accent text-accent-fg hover:brightness-110 shadow-glow border border-transparent',
  secondary:
    'border border-line bg-surface text-ink hover:border-accent/50 hover:text-accent',
  ghost: 'text-ink hover:bg-line/60',
} as const;

const sizes = {
  md: 'h-11 px-5 text-sm',
  sm: 'h-9 px-3.5 text-sm',
  lg: 'h-12 px-6 text-base',
} as const;

type ButtonProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  children: ReactNode;
  href?: string;
  to?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
};

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  href,
  to,
  type = 'button',
  disabled,
  onClick,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50',
    variants[variant],
    sizes[size],
    className,
  );

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    const external = href.startsWith('http');
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
