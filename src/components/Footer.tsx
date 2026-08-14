import { SITE, SOCIAL } from '@/lib/site';
import { GitHubIcon, LinkedInIcon } from '@/components/icons';
import { ArrowUp, Mail } from 'lucide-react';

const ICONS = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Email: Mail,
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-content flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-muted">
          © {year} {SITE.name}. Built in React.
        </p>
        <div className="flex items-center gap-3">
          {SOCIAL.map((item) => {
            const Icon = ICONS[item.label];
            return (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition hover:border-accent/50 hover:text-accent"
                aria-label={item.label}
                {...(item.href.startsWith('http')
                  ? { target: '_blank', rel: 'noreferrer noopener' }
                  : {})}
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            );
          })}
          <a
            href="#top"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-line px-3 text-sm font-medium text-ink transition hover:border-accent/50 hover:text-accent"
            aria-label="Back to top"
          >
            <ArrowUp size={16} aria-hidden="true" />
            Top
          </a>
        </div>
      </div>
    </footer>
  );
}
