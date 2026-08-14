import { Analytics } from '@/components/Analytics';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() =>
  import('@/pages/HomePage').then((m) => ({ default: m.HomePage })),
);
const ProjectsPage = lazy(() =>
  import('@/pages/ProjectsPage').then((m) => ({ default: m.ProjectsPage })),
);
const ProjectDetailPage = lazy(() =>
  import('@/pages/ProjectDetailPage').then((m) => ({ default: m.ProjectDetailPage })),
);
const BlogPage = lazy(() =>
  import('@/pages/BlogPage').then((m) => ({ default: m.BlogPage })),
);
const BlogPostPage = lazy(() =>
  import('@/pages/BlogPostPage').then((m) => ({ default: m.BlogPostPage })),
);
const NotFoundPage = lazy(() =>
  import('@/pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })),
);

function RouteFallback() {
  return (
    <div className="mx-auto max-w-content px-4 py-24 text-sm text-muted" role="status">
      Loading…
    </div>
  );
}

export default function App() {
  return (
    <div id="top" className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="flex-1">
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}
