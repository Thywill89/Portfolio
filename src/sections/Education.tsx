import { Section } from '@/components/ui/Section';
import { motion, useReducedMotion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;

const EDUCATION = [
  {
    degree: 'BSc. Internet of Things and Big Data',
    institution: 'Ghana Communication Technology University (GCTU)',
    period: '2023 — Present',
    location: 'Ghana',
    highlights: [
      'Coursework across connected devices, data pipelines, and applied software',
      'Building projects that join sensor data with usable web interfaces',
      'Focus on practical software engineering and system design',
    ],
    courses: [
      'Software Engineering',
      'IoT Systems',
      'Big Data Analytics',
      'Web Development',
      'Database Systems',
      'Cloud Computing',
      'System Analysis',
      'Mobile Development',
    ],
  },
  {
    degree: 'Senior High School',
    institution: 'Your High School Name',
    period: '20XX — 20XX',
    location: 'Ghana',
    highlights: [
      'Placeholder: Add your actual high school details',
      'Science/General Arts/Business program',
      'Academic achievements or activities',
    ],
    courses: [],
  },
];

export function Education() {
  const reduce = Boolean(useReducedMotion());

  return (
    <Section
      id="education"
      eyebrow="Academic Background"
      title="My Education"
      description="Formal training and continuous learning in software development and technology."
      containerClassName="max-w-6xl"
    >
      <div className="space-y-8">
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={edu.degree}
            initial={reduce ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.15, ease }}
            className="group relative overflow-hidden rounded-xl border border-line bg-surface transition-all duration-300 hover:border-accent/40 hover:shadow-glow"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            
            <div className="relative p-6 lg:p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110 lg:h-16 lg:w-16">
                  {index === 0 ? <GraduationCap size={28} /> : <Award size={28} />}
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-xl font-bold lg:text-2xl">
                        {edu.degree}
                      </h3>
                      <p className="mt-2 text-base font-medium text-muted lg:text-lg">
                        {edu.institution}
                      </p>
                      <p className="mt-1 font-mono text-sm text-muted">
                        {edu.location} · {edu.period}
                      </p>
                    </div>
                  </div>

                  {edu.highlights.length > 0 && (
                    <ul className="mt-5 space-y-2 border-t border-line pt-5">
                      {edu.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-3 text-sm leading-relaxed text-muted/90"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {edu.courses.length > 0 && (
                    <div className="mt-5 border-t border-line pt-5">
                      <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">
                        Key Courses
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course) => (
                          <span
                            key={course}
                            className="rounded-lg border border-line bg-canvas px-3 py-1.5 font-mono text-xs font-medium"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: 0.3, ease }}
        className="mt-8 rounded-xl border border-line bg-surface/50 p-6"
      >
        <p className="font-mono text-xs uppercase tracking-wider text-accent">
          Continuous Learning
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted/90">
          Beyond formal education, I stay current through building real projects, freelance work, and exploring new technologies. Each client project and personal build teaches me something new about scalable architecture, user experience, and shipping reliable software.
        </p>
      </motion.div>
    </Section>
  );
}
