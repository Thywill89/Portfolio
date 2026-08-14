import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { useSeo } from '@/hooks/useSeo';
import { BLOG_POSTS } from '@/lib/site';
import { formatDate } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';
import { useParams } from 'react-router-dom';

const BODIES: Record<string, string[]> = {
  'shipping-client-sites-from-kasoa': [
    'The stack is rarely the bottleneck. Clients remember whether the site loaded on a mid-range Android, whether the WhatsApp or booking link was obvious, and whether you answered when something broke after launch.',
    'PHP still earns its keep on small-business sites. React earns its keep when the UI has real state. I pick based on the job, not the trend cycle.',
  ],
  'iot-meets-the-web': [
    'A sensor that writes to a table is only half a product. Someone still has to glance at a screen and trust the number.',
    'The useful work is boring on purpose: timestamps, empty states, and a Node API that does not fall over when a device drops off the network.',
  ],
};

export function BlogPostPage() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((item) => item.slug === slug);
  const paragraphs = slug ? BODIES[slug] : undefined;

  useSeo({ title: post?.title ?? 'Note', description: post?.excerpt });

  if (!post) {
    return (
      <Section id="missing-post" title="Note not found">
        <Button to="/blog" variant="secondary">
          <ArrowLeft size={16} aria-hidden="true" />
          Back to notes
        </Button>
      </Section>
    );
  }

  return (
    <Section id="blog-post" eyebrow={formatDate(post.date)} title={post.title}>
      <p className="mb-8 text-sm text-muted">{post.readTime}</p>
      <div className="max-w-2xl space-y-4 text-base leading-relaxed text-muted">
        {(paragraphs ?? [post.excerpt]).map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <Button to="/blog" variant="ghost" className="mt-10">
        <ArrowLeft size={16} aria-hidden="true" />
        All notes
      </Button>
    </Section>
  );
}
