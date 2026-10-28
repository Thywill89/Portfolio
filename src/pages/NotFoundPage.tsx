import { Button } from '@/components/ui/Button';
import { useSeo } from '@/hooks/useSeo';
import { Home, Search } from 'lucide-react';

export function NotFoundPage() {
  useSeo({ title: '404 — Page Not Found', description: 'This page does not exist.' });

  return (
    <div className="flex min-h-[calc(100vh-12rem)] items-center justify-center px-4 py-16">
      <div className="text-center">
        <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-line bg-surface text-muted">
          <Search size={40} />
        </div>
        <h1 className="mb-4 font-display text-6xl font-extrabold text-accent">404</h1>
        <h2 className="mb-4 font-display text-2xl font-bold">Page Not Found</h2>
        <p className="mx-auto mb-8 max-w-md text-muted">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button to="/">
            <Home size={16} aria-hidden="true" />
            Back to Home
          </Button>
          <Button to="/projects" variant="secondary">
            View Projects
          </Button>
        </div>
      </div>
    </div>
  );
}
