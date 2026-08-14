import { NAV_ITEMS, SITE } from '@/lib/site';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const SECTION_IDS = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];

export function Navbar() {
  const [open, setOpen] = useState(false);
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

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition',
        scrolled
          ? 'border-line/80 bg-canvas/80 backdrop-blur-md'
          : 'border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-4 sm:px-6">
        <Link
          to="/"
          className="font-display text-lg font-bold tracking-tight"
          aria-label={`${SITE.name} home`}
        >
          <span className="text-accent">T</span>NS
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const id = item.href.replace('/#', '');
            const isActive = onHome && active === id;
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-full px-3 py-2 text-sm font-medium transition',
                  isActive ? 'text-accent' : 'text-muted hover:text-ink',
                )}
              >
                {item.label}
              </a>
            );
          })}
          <Link
            to="/projects"
            className={cn(
              'rounded-full px-3 py-2 text-sm font-medium transition',
              location.pathname.startsWith('/projects')
                ? 'text-accent'
                : 'text-muted hover:text-ink',
            )}
          >
            Projects
          </Link>
          <Link
            to="/blog"
            className={cn(
              'rounded-full px-3 py-2 text-sm font-medium transition',
              location.pathname.startsWith('/blog')
                ? 'text-accent'
                : 'text-muted hover:text-ink',
            )}
          >
            Notes
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => {
              setOpen((v) => !v);
            }}
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          className="border-t border-line bg-canvas px-4 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-ink hover:bg-line/50"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/projects"
                className="block rounded-lg px-3 py-2 text-sm font-medium text-ink hover:bg-line/50"
              >
                All projects
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="block rounded-lg px-3 py-2 text-sm font-medium text-ink hover:bg-line/50"
              >
                Notes
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
