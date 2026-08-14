import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters.'),
  email: z.string().trim().email('Enter a valid email address.'),
  subject: z.string().trim().min(3, 'Subject must be at least 3 characters.'),
  message: z.string().trim().min(10, 'Message must be at least 10 characters.'),
  website: z.string().optional(),
});

export type ContactValues = z.infer<typeof contactSchema>;

export type SubmitResult =
  | { ok: true }
  | { ok: false; message: string };

export async function submitContact(values: ContactValues): Promise<SubmitResult> {
  if (values.website) {
    return { ok: true };
  }

  const formId = import.meta.env.VITE_FORMSPREE_ID;

  if (!formId) {
    return {
      ok: false,
      message:
        'The contact form is not configured yet. Email me directly using the address in the footer.',
    };
  }

  try {
    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        subject: values.subject,
        message: values.message,
      }),
    });

    if (!response.ok) {
      return {
        ok: false,
        message: 'Something went wrong sending your message. Please try again or email me directly.',
      };
    }

    return { ok: true };
  } catch {
    return {
      ok: false,
      message: 'Network error. Check your connection and try again, or email me directly.',
    };
  }
}
