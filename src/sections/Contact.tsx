import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { SITE, SOCIAL } from '@/lib/site';
import { Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from '@/components/icons';

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="05 — Contact"
      title="Let’s build something that ships."
      description="Freelance and student-friendly timelines. Message me on WhatsApp — a site, an API, or both."
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div>
          <p className="text-sm leading-relaxed text-muted">
            Prefer email? Write to{' '}
            <a className="text-accent underline-offset-2 hover:underline" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            . I usually reply within a couple of days.
          </p>
          <ul className="mt-6 space-y-3">
            {SOCIAL.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent"
                  {...(item.href.startsWith('http')
                    ? { target: '_blank', rel: 'noreferrer noopener' }
                    : {})}
                >
                  {item.label === 'GitHub' ? (
                    <GitHubIcon size={16} />
                  ) : item.label === 'LinkedIn' ? (
                    <LinkedInIcon size={16} />
                  ) : item.label === 'WhatsApp' ? (
                    <WhatsAppIcon size={16} />
                  ) : (
                    <Mail size={16} aria-hidden="true" />
                  )}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
            <WhatsAppIcon size={24} />
          </div>
          <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink">
            Chat on WhatsApp
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Fastest way to reach me. Tap below to open a chat with{' '}
            <span className="text-ink">{SITE.phoneDisplay}</span>.
          </p>
          <Button
            href={SITE.whatsappUrl}
            className="mt-6 w-full sm:w-auto"
          >
            Message on WhatsApp
            <WhatsAppIcon size={16} />
          </Button>
        </div>
      </div>
    </Section>
  );
}
