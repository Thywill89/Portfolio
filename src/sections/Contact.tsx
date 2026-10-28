import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { SITE, SOCIAL } from '@/lib/site';
import { Download, Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from '@/components/icons';
import { useEffect, useState } from 'react';

export function Contact() {
  const [cvExists, setCvExists] = useState(false);

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
          <div className="rounded-xl border border-line bg-surface p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">Email</h3>
                <a
                  className="mt-1 block font-mono text-sm text-accent underline-offset-2 hover:underline"
                  href={`mailto:${SITE.email}`}
                >
                  {SITE.email}
                </a>
                <p className="mt-2 text-sm text-muted">Response within 24-48 hours</p>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <p className="font-mono text-xs uppercase tracking-wider text-muted">Connect</p>
            <ul className="space-y-2">
              {SOCIAL.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group flex items-center gap-3 rounded-lg border border-transparent px-3 py-2 text-sm font-medium transition-colors hover:border-line hover:bg-surface"
                    {...(item.href.startsWith('http')
                      ? { target: '_blank', rel: 'noreferrer noopener' }
                      : {})}
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-md bg-surface text-muted transition-colors group-hover:bg-accent/10 group-hover:text-accent">
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
                </li>
              ))}
            </ul>
          </div>

          {cvExists && (
            <div className="mt-6">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2.5 text-sm font-medium transition-all duration-300 hover:border-accent hover:bg-accent hover:text-accent-fg hover:shadow-glow"
              >
                <Download size={16} aria-hidden="true" />
                Download CV
              </a>
            </div>
          )}
        </div>

        <div className="rounded-xl border border-line bg-surface p-6 sm:p-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
            <WhatsAppIcon size={28} />
          </div>
          <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-ink">
            Quick Chat via WhatsApp
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Fastest way to reach me for project discussions, questions, or collaboration opportunities.
          </p>
          <div className="mt-4 rounded-lg bg-canvas/50 p-4">
            <p className="font-mono text-xs uppercase tracking-wider text-muted">Phone</p>
            <p className="mt-1 font-mono text-lg font-semibold text-ink">{SITE.phoneDisplay}</p>
          </div>
          <Button href={SITE.whatsappUrl} className="mt-6 w-full">
            <WhatsAppIcon size={16} />
            Open WhatsApp Chat
          </Button>
        </div>
      </div>
    </Section>
  );
}
