import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { useSeo } from '@/hooks/useSeo';
import { BLOG_POSTS } from '@/lib/site';
import { formatDate } from '@/lib/utils';
import { Link } from 'react-router-dom';

export function BlogPage() {
  useSeo({
    title: 'Notes',
    description: 'Short notes from Thywill Naamwanuru Saanuo on freelance web work and IoT + the web.',
  });

  return (
    <Section
      id="blog"
      eyebrow="Notes"
      title="Writing"
      description="Short posts. Not a magazine — just what I am learning while shipping."
    >
      <div className="grid gap-4">
        {BLOG_POSTS.map((post) => (
          <Card key={post.slug} as="article">
            <p className="font-mono text-xs text-muted">
              {formatDate(post.date)} · {post.readTime}
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold">
              <Link to={`/blog/${post.slug}`} className="hover:text-accent">
                {post.title}
              </Link>
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
