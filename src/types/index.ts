export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: 'GitHub' | 'LinkedIn' | 'Email';
  href: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  featured?: boolean;
  year: string;
  role: string;
};

export type TimelineItem = {
  id: string;
  kind: 'work' | 'education';
  title: string;
  org: string;
  location: string;
  start: string;
  end: string;
  points: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
};
