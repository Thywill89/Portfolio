import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { SITE, SOCIAL } from '@/lib/site';
import { Download, Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from '@/components/icons';
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

export function Contact() {
  const [cvExists, setCvExists] = useState(false);
  const reduce = Boolean(useReducedMotion());

  useEffect(() => {
    fetch('/cv.pdf', { method: 'HEAD' })
      .then((res) => {
        setCvExists(res.ok);
      })
      .catch(() => {
        setCvExists(false);
      });
  }, []);

  return (
    <Section
      id="contact"
      eyebrow="05 — Contact"
      title="Let's build something together"
      description="Open to freelance projects and remote opportunities. Reach out via WhatsApp or email."
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease }}
            className="rounded-xl border border-line bg-surface p-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Mail size={22} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">Email</h3>
                <a
                  className="mt-1.5 block font-mono text-sm text-accent underline-offset-2 hover:underline"
                  href={`mailto:${SITE.email}`}
                >
                  {SITE.email}
                </a>
                <p className="mt-2 text-sm text-muted">Response within 24-48 hours</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="mt-6 space-y-3"
          >
            <p className="font-mono text-xs uppercase tracking-wider text-muted">Connect</p>
            <ul className="space-y-2">
              {SOCIAL.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={reduce ? false : { opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05, ease }}
                >
                  <a
                    href={item.href}
                    className="group flex items-center gap-3 rounded-lg border border-transparent px-3 py-2.5 text-sm font-medium transition-all hover:border-line hover:bg-surface hover:shadow-sm"
                    {...(item.href.startsWith('http')
                      ? { target: '_blank', rel: 'noreferrer noopener' }
                      : {})}
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-md bg-surface text-muted transition-all group-hover:bg-accent/10 group-hover:text-accent group-hover:scale-110">
                      {item.label === 'GitHub' ? (
                        <GitHubIcon size={16} />
                      ) : item.label === 'LinkedIn' ? (
                        <LinkedInIcon size={16} />
                      ) : item.label === 'WhatsApp' ? (
                        <WhatsAppIcon size={16} />
                      ) : (
                        <Mail size={16} aria-hidden="true" />
                      )}
                    </span>
                    <span className="group-hover:text-accent">{item.label}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {cvExists && (
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.4, ease }}
              className="mt-6"
            >
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2.5 text-sm font-medium transition-all duration-300 hover:border-accent hover:bg-accent hover:text-accent-fg hover:shadow-glow"
              >
                <Download size={16} aria-hidden="true" />
                Download CV
              </a>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className="group relative overflow-hidden rounded-xl border border-line bg-surface p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-glow sm:p-8"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="relative">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
              <WhatsAppIcon size={28} />
            </div>
            <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-ink">
              Quick Chat via WhatsApp
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted/90 sm:text-base">
              Fastest way to reach me for project discussions, questions, or collaboration opportunities.
            </p>
            <div className="mt-5 rounded-lg bg-canvas/50 p-4">
              <p className="font-mono text-xs uppercase tracking-wider text-muted">Phone</p>
              <p className="mt-1.5 font-mono text-lg font-semibold text-ink">{SITE.phoneDisplay}</p>
            </div>
            <Button href={SITE.whatsappUrl} className="mt-6 w-full">
              <WhatsAppIcon size={16} />
              Open WhatsApp Chat
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
