import { Hero } from '@/sections/Hero';
import { FeaturedShowcase } from '@/sections/FeaturedShowcase';
import { LiveProjects } from '@/sections/LiveProjects';
import { MyWorks } from '@/sections/MyWorks';
import { Skills } from '@/sections/Skills';
import { Education } from '@/sections/Education';
import { Experience } from '@/sections/Experience';
import { Contact } from '@/sections/Contact';
import { useSeo } from '@/hooks/useSeo';
import { SITE } from '@/lib/site';

export function HomePage() {
  useSeo({
    description: `${SITE.name} is a full-stack developer in ${SITE.location}. React, Node.js, PHP, Next.js.`,
  });

  return (
    <>
      <Hero />
      <FeaturedShowcase />
      <LiveProjects />
      <MyWorks limit={6} />
      <Skills />
      <Education />
      <Experience />
      <Contact />
    </>
  );
}
