import { NAV_ITEMS, SITE } from '@/lib/site';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const SECTION_IDS = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === '/';
  const active = useScrollSpy(onHome ? SECTION_IDS : []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-all duration-200',
        scrolled
          ? 'border-line/80 bg-canvas/95 shadow-sm backdrop-blur-md'
          : 'border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          to="/"
          className="shrink-0 font-display text-lg font-bold tracking-tight transition-colors hover:text-accent"
          aria-label={`${SITE.name} home`}
        >
          <span className="text-accent">T</span>NS
        </Link>

        <nav
          className="flex flex-1 items-center justify-center overflow-x-auto scrollbar-hide"
          aria-label="Primary navigation"
        >
          <div className="flex items-center gap-1 px-2 sm:gap-2">
            {NAV_ITEMS.map((item) => {
              const id = item.href.replace('/#', '');
              const isActive = onHome && active === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'whitespace-nowrap rounded-full px-2.5 py-1.5 text-xs font-medium transition-all sm:px-3 sm:py-2 sm:text-sm',
                    isActive
                      ? 'bg-accent/10 text-accent'
                      : 'text-muted hover:bg-surface hover:text-ink',
                  )}
                >
                  {item.label}
                </a>
              );
            })}
            <Link
              to="/projects"
              className={cn(
                'whitespace-nowrap rounded-full px-2.5 py-1.5 text-xs font-medium transition-all sm:px-3 sm:py-2 sm:text-sm',
                location.pathname.startsWith('/projects')
                  ? 'bg-accent/10 text-accent'
                  : 'text-muted hover:bg-surface hover:text-ink',
              )}
            >
              Projects
            </Link>
            <Link
              to="/blog"
              className={cn(
                'whitespace-nowrap rounded-full px-2.5 py-1.5 text-xs font-medium transition-all sm:px-3 sm:py-2 sm:text-sm',
                location.pathname.startsWith('/blog')
                  ? 'bg-accent/10 text-accent'
                  : 'text-muted hover:bg-surface hover:text-ink',
              )}
            >
              Notes
            </Link>
          </div>
        </nav>

        <div className="shrink-0">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
