import type { BlogPost, NavItem, Project, SkillGroup, SocialLink, TimelineItem } from '@/types';

export const SITE = {
  name: 'Thywill Naamwanuru Saanuo',
  shortName: 'Thywill',
  role: 'Full-Stack Developer',
  location: 'Kasoa, Ghana',
  tagline:
    'I design and ship reliable web products — PHP and Node on the server, React and Next.js in the browser.',
  email: 'thywillnaamwanuru89@gmail.com',
  phoneDisplay: '055 001 6447',
  phoneE164: '233550016447',
  whatsappUrl:
    'https://wa.me/233550016447?text=' +
    encodeURIComponent(
      'Hi Thywill — I found your portfolio and would like to talk about a project.',
    ),
  url: import.meta.env.VITE_SITE_URL || 'https://thywill.vercel.app',
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: 'Featured', href: '/#featured' },
  { label: 'Live Projects', href: '/#live-projects' },
  { label: 'Works', href: '/#my-works' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Education', href: '/#education' },
  { label: 'Contact', href: '/#contact' },
];

export const SOCIAL: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/Thywill89' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/thywill-naamwanuru-097656257' },
  { label: 'WhatsApp', href: SITE.whatsappUrl },
  { label: 'Email', href: `mailto:${SITE.email}` },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML & CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'PHP', 'REST APIs'],
  },
  {
    category: 'Database / Tools',
    items: ['Prisma', 'Supabase', 'MySQL', 'PostgreSQL', 'Git', 'Vercel', 'Hostinger'],
  },
];

export const PROJECTS: Project[] = [
  {
    slug: '77-massage-treat',
    title: '77 Massage Treat',
    summary:
      'Live client site for a massage and wellness studio — services, booking, and a mobile-first experience.',
    description:
      'A production website for 77 Massage Treat, built as a freelance engagement. The brief was a clean, conversion-focused presence: communicate the studio’s treatments, make it easy to enquire or book, and stay fast on mobile networks. I handled frontend layout, content structure, and the backend pieces needed to keep the site live and maintainable.',
    tags: ['PHP', 'JavaScript', 'CSS', 'MySQL'],
    liveUrl: 'https://77massagetreat.com',
    image: '/images/77-massage-treat.webp',
    featured: true,
    year: '2025',
    role: 'Full-stack (client project)',
  },
  {
    slug: 'iot-lab-monitor',
    title: 'IoT Lab Monitor',
    summary:
      'Dashboard for live sensor streams — temperature, humidity, and occupancy — built around my IoT & Big Data coursework.',
    description:
      'A React dashboard backed by a Node/Express API that ingests sensor readings and surfaces them as live cards and simple trend charts. Prisma models the device and reading tables; the UI is built to stay readable on a lab tablet. This project sits at the overlap of my degree and freelance work: data in, a usable interface out.',
    tags: ['React', 'Node.js', 'Express', 'Prisma'],
    githubUrl: 'https://github.com/Thywill89/Portfolio',
    image: '/images/project-iot.svg',
    year: '2025',
    role: 'Academic / personal',
  },
  {
    slug: 'sevan-fitness-gym',
    title: 'Sevan Fitness Gym',
    summary:
      'Gym management system for member registration, renewals, and revenue tracking.',
    description:
      'A complete gym management solution handling member registration, membership renewals, attendance tracking, and revenue reporting. Built to streamline day-to-day operations for fitness centers.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
    image: '/images/project-campus.svg',
    year: '2024',
    role: 'Client project',
  },
  {
    slug: 'saraboff',
    title: 'SaraBoff Hotel Management',
    summary:
      'Hotel management system for room bookings, guest records, and operations.',
    description:
      'A hotel management platform covering room reservations, guest information management, check-in/check-out processes, and operational reporting for hospitality businesses.',
    tags: ['PHP', 'MySQL', 'JavaScript'],
    image: '/images/project-iot.svg',
    year: '2024',
    role: 'Client project',
  },
  {
    slug: 'event-ticketing',
    title: 'Event Ticketing System',
    summary:
      'Online ticketing platform for event registration and ticket sales.',
    description:
      'A web-based ticketing system for event organizers to manage ticket sales, registrations, and attendee information. Supports multiple ticket types and payment processing.',
    tags: ['PHP', 'MySQL', 'JavaScript'],
    githubUrl: 'https://github.com/Thywill89/Event_Ticketing',
    image: '/images/project-campus.svg',
    year: '2024',
    role: 'Personal project',
  },
  {
    slug: 'merillafits',
    title: 'MerillaFits',
    summary:
      'Fitness and wellness platform for workout tracking and health management.',
    description:
      'A fitness management application for tracking workouts, nutrition plans, and wellness goals. Built to help users maintain their fitness journey with progress tracking and personalized recommendations.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
    image: '/images/project-campus.svg',
    year: '2024',
    role: 'Personal project',
  },
  {
    slug: 'school-management-sys',
    title: 'School Management System',
    summary:
      'Comprehensive school administration system for student records and academic management.',
    description:
      'A full-featured school management platform handling student enrollment, academic records, grade management, attendance tracking, and administrative reporting for educational institutions.',
    tags: ['PHP', 'MySQL', 'JavaScript'],
    image: '/images/project-iot.svg',
    year: '2024',
    role: 'Client project',
  },
  {
    slug: 'sysswift',
    title: 'SySSwift',
    summary:
      'Business management and workflow automation system.',
    description:
      'A comprehensive business management solution providing workflow automation, task management, and operational tools. Designed to streamline business processes and improve team productivity.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
    image: '/images/project-iot.svg',
    year: '2024',
    role: 'Personal project',
  },
  {
    slug: 'neighborhood-textiles',
    title: 'Neighborhood Textiles',
    summary:
      'Business website for a textile company showcasing products and services.',
    description:
      'A professional web presence for Neighborhood Textiles, featuring product catalogs, service information, and customer contact forms. Built to enhance online visibility and customer engagement.',
    tags: ['PHP', 'CSS', 'JavaScript'],
    image: '/images/project-campus.svg',
    year: '2024',
    role: 'Client project',
  },
  {
    slug: 'shop-albie',
    title: 'Shop Albie',
    summary:
      'E-commerce platform for online retail with product management and checkout.',
    description:
      'An online shopping platform with product catalog, shopping cart functionality, secure checkout process, and order management. Built for small to medium retail businesses.',
    tags: ['PHP', 'MySQL', 'JavaScript'],
    githubUrl: 'https://github.com/sysswift/Shop-Albie',
    image: '/images/project-iot.svg',
    year: '2024',
    role: 'Personal project',
  },
  {
    slug: 'campus-connect',
    title: 'Campus Connect',
    summary:
      'A Next.js student hub for notices, resources, and simple auth — structured like a real product, not a class demo.',
    description:
      'Campus Connect is a small student portal: announcements, resource links, and authenticated views. Next.js handles routing and rendering; Supabase covers auth and data. I used it to practice the same patterns I apply on freelance jobs — typed forms, empty states, and a layout that does not fall apart at 320px.',
    tags: ['Next.js', 'React', 'Supabase', 'Tailwind'],
    githubUrl: 'https://github.com/Thywill89/Portfolio',
    image: '/images/project-campus.svg',
    year: '2026',
    role: 'Personal product',
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    id: 'freelance',
    kind: 'work',
    title: 'Freelance Full-Stack Developer',
    org: 'Independent',
    location: 'Kasoa, Ghana · Remote',
    start: '2024',
    end: 'Present',
    points: [
      'Ship client websites and web apps with PHP, React, Node.js, and Next.js.',
      'Own the full loop: brief, UI, backend, deploy, and handoff.',
      'Recent live work includes 77 Massage Treat (77massagetreat.com).',
    ],
  },
  {
    id: 'gctu',
    kind: 'education',
    title: 'BSc. Internet of Things and Big Data',
    org: 'Ghana Communication Technology University (GCTU)',
    location: 'Ghana',
    start: '2023',
    end: 'Present',
    points: [
      'Coursework across connected devices, data pipelines, and applied software.',
      'Building projects that join sensor data with usable web interfaces.',
    ],
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'shipping-client-sites-from-kasoa',
    title: 'Shipping client sites from Kasoa — what actually matters',
    excerpt:
      'Freelance web work is less about the framework and more about mobile performance, clear CTAs, and a host that stays up.',
    date: '2026-06-12',
    readTime: '5 min',
    tags: ['Freelance', 'PHP', 'React'],
  },
  {
    slug: 'iot-meets-the-web',
    title: 'When IoT data needs a UI',
    excerpt:
      'Sensor streams are useless if nobody can read them. Notes from pairing Node APIs with a React dashboard.',
    date: '2026-03-04',
    readTime: '6 min',
    tags: ['IoT', 'Node.js', 'React'],
  },
];

export const ABOUT = {
  photoAlt:
    'Thywill Naamwanuru Saanuo standing in a lobby, wearing a mauve shirt and black trousers',
  bio: [
    'I’m a full-stack developer based in Kasoa, Ghana. For about two years I’ve been building websites and web apps for clients while studying Internet of Things and Big Data at GCTU.',
    'I like work that has a clear job to do: a studio that needs bookings, a dashboard that has to make sensor data readable, a small business that needs to look trustworthy on a phone. I move between PHP and Node on the backend and React or Next.js on the frontend.',
    'Right now I’m focused on stronger frontend craft (this site is part of that) without dropping the backend work that pays the bills.',
  ],
  facts: [
    { label: 'Based in', value: 'Kasoa, Ghana' },
    { label: 'Focus', value: 'Student + freelance' },
    { label: 'Experience', value: '~2 years' },
    { label: 'Open to', value: 'Remote & local work' },
  ],
};
