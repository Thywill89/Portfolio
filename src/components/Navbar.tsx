import { SITE } from '@/lib/site';
import { cn } from '@/lib/utils';
import { Briefcase, Code2, GraduationCap, Home, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const SECTION_IDS = ['hero', 'featured', 'live-projects', 'my-works', 'skills', 'education', 'experience', 'contact'] as const;

type SectionId = (typeof SECTION_IDS)[number];

const NAV_BUTTONS: ReadonlyArray<{
  label: string;
  href: string;
  icon: typeof Home;
  match: readonly SectionId[];
}> = [
  { label: 'Home', href: '/#hero', icon: Home, match: ['hero'] },
  { label: 'Work', href: '/#featured', icon: Briefcase, match: ['featured', 'live-projects', 'my-works'] },
  { label: 'Skills', href: '/#skills', icon: Code2, match: ['skills'] },
  { label: 'Education', href: '/#education', icon: GraduationCap, match: ['education'] },
  { label: 'Contact', href: '/#contact', icon: Mail, match: ['contact'] },
];

export function Navbar() {
  const location = useLocation();
  const onHome = location.pathname === '/';
  const active = useScrollSpy(onHome ? [...SECTION_IDS] : []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line/80 bg-canvas/95 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-content items-center justify-between gap-4 px-4 sm:px-6">
          <Link
            to="/"
            className="shrink-0 font-display text-lg font-bold tracking-tight transition-colors hover:text-accent"
            aria-label={`${SITE.name} home`}
          >
            <span className="text-accent">T</span>NS
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <nav
        className="pointer-events-none fixed inset-x-0 bottom-8 z-50 bg-transparent"
        aria-label="Primary navigation"
      >
        <div className="pointer-events-auto mx-auto flex max-w-sm items-center justify-between px-6 sm:max-w-md">
          {NAV_BUTTONS.map((item) => {
            const isActive =
              (onHome && item.match.includes(active as SectionId)) ||
              (item.label === 'Work' && location.pathname.startsWith('/projects')) ||
              (item.label === 'Home' && onHome && (active === 'hero' || !active));
            const Icon = item.icon;

            return (
              <a
                key={item.href}
                href={item.href}
                aria-label={item.label}
                title={item.label}
                className={cn(
                  'inline-flex size-11 items-center justify-center rounded-full border transition',
                  isActive
                    ? 'border-accent bg-accent text-accent-fg shadow-glow'
                    : 'border-line bg-surface text-muted hover:border-accent/50 hover:text-ink',
                )}
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}
