import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { submitContact, contactSchema, type ContactValues } from '@/lib/contact';
import { SITE, SOCIAL } from '@/lib/site';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, Send } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '@/components/icons';
import {
  useState,
  type InputHTMLAttributes,
  type TextareaHTMLAttributes,
} from 'react';
import { useForm } from 'react-hook-form';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [serverMessage, setServerMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', subject: '', message: '', website: '' },
  });

  const onSubmit = async (values: ContactValues) => {
    setStatus('idle');
    const result = await submitContact(values);
    if (result.ok) {
      setStatus('success');
      reset();
      return;
    }
    setStatus('error');
    setServerMessage(result.message);
  };

  return (
    <Section
      id="contact"
      eyebrow="05 — Contact"
      title="Let’s build something that ships."
      description="Freelance and student-friendly timelines. Tell me what you need — a site, an API, or both."
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
                  ) : (
                    <Mail size={16} aria-hidden="true" />
                  )}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={(event) => {
            void handleSubmit(onSubmit)(event);
          }}
          className="rounded-2xl border border-line bg-surface p-6 sm:p-8"
          noValidate
        >
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input id="website" tabIndex={-1} autoComplete="off" {...register('website')} />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              id="name"
              label="Name"
              error={errors.name?.message}
              {...register('name')}
            />
            <Field
              id="email"
              label="Email"
              type="email"
              error={errors.email?.message}
              {...register('email')}
            />
          </div>
          <Field
            id="subject"
            label="Subject"
            className="mt-4"
            error={errors.subject?.message}
            {...register('subject')}
          />
          <Field
            id="message"
            label="Message"
            as="textarea"
            className="mt-4"
            error={errors.message?.message}
            {...register('message')}
          />

          {status === 'success' ? (
            <p className="mt-4 rounded-xl border border-accent/30 bg-accent/10 px-3 py-2 text-sm text-accent" role="status">
              Message sent. I’ll get back to you soon.
            </p>
          ) : null}
          {status === 'error' ? (
            <p className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-600 dark:text-red-300" role="alert">
              {serverMessage}
            </p>
          ) : null}

          <Button type="submit" className="mt-6 w-full sm:w-auto" disabled={isSubmitting}>
            {isSubmitting ? 'Sending…' : 'Send message'}
            <Send size={16} aria-hidden="true" />
          </Button>
        </form>
      </div>
    </Section>
  );
}

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  as?: 'input' | 'textarea';
  type?: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement> &
  TextareaHTMLAttributes<HTMLTextAreaElement>;

const Field = ({
  id,
  label,
  error,
  as = 'input',
  type = 'text',
  className,
  ...rest
}: FieldProps) => {
  const shared = cn(
    'w-full rounded-xl border border-line bg-canvas px-3 py-2.5 text-sm text-ink placeholder:text-muted/70 focus-visible:border-accent',
  );

  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      {as === 'textarea' ? (
        <textarea id={id} rows={5} className={shared} aria-invalid={Boolean(error)} {...rest} />
      ) : (
        <input id={id} type={type} className={shared} aria-invalid={Boolean(error)} {...rest} />
      )}
      {error ? (
        <p className="mt-1 text-sm text-red-600 dark:text-red-300" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
};
