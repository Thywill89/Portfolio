import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { useSeo } from '@/hooks/useSeo';

export function NotFoundPage() {
  useSeo({ title: 'Not found', description: 'This page does not exist.' });

  return (
    <Section id="not-found" eyebrow="404" title="Page not found">
      <p className="text-muted">That URL is not part of this site.</p>
      <Button to="/" className="mt-6">
        Go home
      </Button>
    </Section>
  );
}
