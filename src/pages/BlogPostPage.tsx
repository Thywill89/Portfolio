import { Button } from '@/components/ui/Button';
import { useSeo } from '@/hooks/useSeo';
import { BLOG_POSTS } from '@/lib/site';
import { formatDate } from '@/lib/utils';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

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
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="font-display text-3xl font-bold">Post Not Found</h1>
          <p className="mt-4 text-muted">That blog post does not exist.</p>
          <Button to="/blog" variant="secondary" className="mt-6">
            <ArrowLeft size={16} aria-hidden="true" />
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 sm:py-20">
      <article className="mx-auto max-w-3xl px-4 sm:px-6">
        <Link
          to="/blog"
          className="group mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          <span>Back to Blog</span>
        </Link>

        <header className="mb-10 border-b border-line pb-8">
          <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-muted">
            <span className="inline-flex items-center gap-2">
              <Calendar size={16} />
              {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock size={16} />
              {post.readTime}
            </span>
          </div>
          <h1 className="font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-muted">{post.excerpt}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-line bg-surface px-3 py-1 font-mono text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          {(paragraphs ?? [post.excerpt]).map((p, i) => (
            <p key={i} className="mb-6 text-base leading-relaxed text-muted">
              {p}
            </p>
          ))}
        </div>

        <footer className="mt-12 border-t border-line pt-8">
          <Button to="/blog" variant="ghost">
            <ArrowLeft size={16} aria-hidden="true" />
            All Posts
          </Button>
        </footer>
      </article>
    </div>
  );
}
