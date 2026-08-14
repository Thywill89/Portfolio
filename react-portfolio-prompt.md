# Prompt: Production-Ready React Portfolio Website

Copy everything below into your AI coding tool (Claude Code, Cursor, etc.) as a single prompt. Fill in the bracketed placeholders with your real details before sending it.

---

## The Prompt

Build a production-ready personal portfolio website for me using **React**. Follow these specifications exactly.

### Tech Stack
- **React 18** with **Vite** (not CRA)
- **TypeScript** (strict mode)
- **Tailwind CSS** for styling
- **React Router v6** for routing
- **Framer Motion** for animations
- **React Hook Form** + **Zod** for the contact form and validation
- **Lucide React** for icons
- Deploy target: **Vercel**

### Who This Site Is For
I'm Thywill Naamwanuru Saanuo, a full-stack developer based in Kasoa, Ghana. I'm a BSc. Internet of Things and Big Data student at GCTU (Ghana Communication Technology University), and a freelance web developer with about 2 years of experience. My stack: PHP, React, Node.js, Next.js. I want the portfolio itself built in React to showcase strong frontend skills, but the content should reflect that I work full-stack.

### Pages / Sections (single-page scroll with routed sub-pages for Projects and Blog if applicable)
1. **Hero** — name, role/title, short tagline, CTA buttons (View Work, Contact Me), subtle animated background or particles (kept lightweight, no heavy WebGL)
2. **About** — short bio, what I do, current focus (student + freelance dev), photo placeholder
3. **Skills** — grouped by category (Frontend: React, Next.js, Tailwind; Backend: Node.js, Express, PHP; Database/Tools: Prisma, Supabase, Git); use a clean grid or tag-based layout, not overdone progress bars
4. **Projects** — card grid, each with: title, short description, tech stack tags, live link, GitHub link, image/screenshot. Include a featured project card for **77 Massage Treat** (77massagetreat.com), a live client project. Support filtering by tech tag.
5. **Experience/Timeline** — freelance work + education (GCTU, IoT and Big Data)
6. **Contact** — working contact form (use a service like EmailJS, Formspree, or a simple Node/Express endpoint — pick one and implement it fully, not just UI), plus links to GitHub, LinkedIn, email
7. **Footer** — social links, copyright, "back to top"

### Production-Ready Requirements (non-negotiable)
- **Responsive**: mobile-first, tested down to 320px width
- **Dark/light mode** toggle with persisted preference (use `localStorage` in the real deployed site — not inside any sandboxed preview)
- **SEO**: proper `<title>`, meta description, Open Graph tags, favicon, semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`)
- **Performance**: lazy-load route components and below-the-fold images, optimize images (WebP where possible), Lighthouse score 90+ on all categories
- **Accessibility**: proper alt text, keyboard navigation, visible focus states, sufficient color contrast, ARIA labels on icon-only buttons
- **Code quality**: ESLint + Prettier configured, sensible folder structure (`components/`, `sections/`, `hooks/`, `lib/`, `types/`), reusable UI components (Button, Card, Section wrapper)
- **Environment variables** for any API keys (contact form service, analytics), with a `.env.example` file
- **Error handling**: form validation errors shown clearly, fallback UI for failed states
- **Analytics-ready**: leave a clearly marked spot to drop in Google Analytics / Plausible script

### Design Direction
- Modern, clean, developer-portfolio aesthetic — not generic Bootstrap-looking
- One accent color + neutral palette, consistent spacing scale
- Smooth scroll-triggered animations on section entry (Framer Motion `whileInView`), kept subtle — not distracting
- Custom cursor or hover micro-interactions are a nice-to-have, not required

### Deliverables
1. Full file/folder structure
2. All component code, fully typed
3. `README.md` with setup instructions and deployment steps for Vercel
4. `.env.example`

Build this section by section — start with the project scaffold and folder structure, then Hero + Navbar, then the remaining sections, then the contact form logic, then polish (SEO, dark mode, accessibility pass) last.

---

### Notes before you use this
- Swap in your real GitHub/LinkedIn links and a couple more real projects beyond 77 Massage Treat when you get to the Projects section.
- If you want it in **Next.js** instead of Vite+React later (better SEO out of the box via SSR, and you already know Next.js), that's a one-line change to the prompt — say so and I'll adjust it.
