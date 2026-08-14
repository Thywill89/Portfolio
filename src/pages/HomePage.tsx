import { About } from '@/sections/About';
import { Contact } from '@/sections/Contact';
import { Experience } from '@/sections/Experience';
import { Hero } from '@/sections/Hero';
import { Projects } from '@/sections/Projects';
import { Skills } from '@/sections/Skills';
import { useSeo } from '@/hooks/useSeo';
import { SITE } from '@/lib/site';

export function HomePage() {
  useSeo({
    description: `${SITE.name} is a full-stack developer in ${SITE.location}. React, Node.js, PHP, Next.js.`,
  });

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects limit={3} />
      <Experience />
      <Contact />
    </>
  );
}
