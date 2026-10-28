import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { useSeo } from '@/hooks/useSeo';
import { BLOG_POSTS } from '@/lib/site';
import { formatDate } from '@/lib/utils';
import { Calendar, Clock, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export function BlogPage() {
  useSeo({
    title: 'Notes',
    description: 'Technical notes and observations from building web applications — freelance work, IoT, and full-stack development.',
  });

  return (
    <Section
      id="blog"
      eyebrow="Blog"
      title="Technical Notes"
      description="Short posts on web development, freelance work, and IoT integration. Practical lessons from shipping real projects."
    >
      <div className="grid gap-6">
        {BLOG_POSTS.map((post) => (
          <Card key={post.slug} as="article" className="group hover:border-accent/30">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-fg">
                <FileText size={24} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="mb-2 flex flex-wrap items-center gap-3 text-xs text-muted">
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={14} />
                    {formatDate(post.date)}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold leading-tight">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="transition-colors hover:text-accent"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-line bg-canvas/50 px-2.5 py-1 font-mono text-[11px] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
