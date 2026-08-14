import { useEffect } from 'react';
import { SITE } from '@/lib/site';

type SeoProps = {
  title?: string;
  description?: string;
};

export function useSeo({ title, description }: SeoProps) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} — ${SITE.shortName}`
      : `${SITE.name} — ${SITE.role}`;
    document.title = fullTitle;

    const meta = document.querySelector('meta[name="description"]');
    if (meta && description) {
      meta.setAttribute('content', description);
    }
  }, [title, description]);
}
