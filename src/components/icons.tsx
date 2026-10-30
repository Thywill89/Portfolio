import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

export function GitHubIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}

export function LinkedInIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function ReactIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="2.1" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.4" transform="rotate(120 12 12)" />
    </svg>
  );
}

export function NextJsIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm4.2 16.1h-1.7L9.6 9.8v8.3H7.8V5.9h1.8l4.8 8.1V5.9h1.8Z" />
    </svg>
  );
}

export function NodeJsIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 1.7 3.6 6.5v11l8.4 4.8 8.4-4.8v-11Zm0 2.1 6.5 3.7v7.4L12 18.6 5.5 14.9V7.5Z" />
    </svg>
  );
}

export function PhpIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M7.2 10.1h1.4l.3 1.6H10l-.4-2.3H7.2Zm4.4 0h1.3l.2 1.1h1.5l-.2-1.1h1.3l.5 2.3h-1.3l-.2-1h-1.4l.2 1h-1.4Zm5.5 0H19l.3 1.6h1.1l-.4-2.3h-2.4Zm-9.2 3.5H6.4L7 16h1.3l.2-1.1h1.3L9.6 16h1.4l.5-2.4H8.1Zm4.5 0h-1.5l.5 2.4h1.3l.2-1.1h1.5l-.2 1.1h1.3l.5-2.4h-3.4Zm5.5 0h-1.5L17 16h1.3l.2-1.1h1.3L19.6 16H21l.5-2.4h-3.4ZM2 12c0-3.3 4.5-6 10-6s10 2.7 10 6-4.5 6-10 6-10-2.7-10-6Z" />
    </svg>
  );
}

export function ExpressIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M24 18.6h-3.2l-2.4-3.1-2.4 3.1H12.8l3.9-5-3.7-4.8h3.3l2.2 3 2.2-3H24l-3.8 4.8Zm-13.3 0H0l6.7-8.6L.4 5.4h3.4l4.2 3.5 4.1-3.5h3.3L9.2 10l6.6 8.6H12l-2.6-3.4Z" />
    </svg>
  );
}

export function TypeScriptIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M1.5 1.5h21v21h-21Zm11.6 11.3H10v8.2H7.5v-8.2H4.3V10.4h8.8Zm7.3 3.4c0-1.5-1-2.4-3.2-2.4-1.6 0-2.8.4-3.6 1l.9 1.6c.6-.4 1.5-.8 2.6-.8.9 0 1.4.3 1.4.8 0 .6-.5.8-1.9 1.2-2 .6-3 1.5-3 3.2 0 1.8 1.2 3 3.4 3 1.5 0 2.6-.3 3.5-1l-.9-1.6c-.8.5-1.7.8-2.6.8-.9 0-1.5-.3-1.5-.9 0-.6.5-.8 2-1.3 2-.6 2.9-1.5 2.9-3.2Z" />
    </svg>
  );
}

export function PrismaIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="m21.6 16.3-7.8 4.6c-.5.3-1.1.3-1.6 0L2.4 13.8c-.7-.4-.6-1.5.2-1.7l4.3-1.1 8.5-8.3c.5-.5 1.4-.1 1.4.6l1.3 11.5 3.3 1c.7.2.7 1.2.2 1.5Zm-5.4-1.4L14.8 5.4 7.6 12.4l8.6 2.5Z" />
    </svg>
  );
}

export function SupabaseIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.6 2.2 4.3 14.3c-.5.6 0 1.5.8 1.5h6.4l-1.1 6c-.2.9.9 1.5 1.5.8l9.3-12.1c.5-.6 0-1.5-.8-1.5h-6.4l1.1-6c.2-.9-.9-1.5-1.5-.8Z" />
    </svg>
  );
}

export function TailwindIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 6c-2.7 0-4.4 1.3-5 4 1-1.3 2.1-1.8 3.4-1.5.7.2 1.3.7 1.9 1.3C13.1 11 14.2 12 16 12c2.7 0 4.4-1.3 5-4-1 1.3-2.1 1.8-3.4 1.5-.7-.2-1.3-.7-1.9-1.3C14.9 7 13.8 6 12 6ZM7 12c-2.7 0-4.4 1.3-5 4 1-1.3 2.1-1.8 3.4-1.5.7.2 1.3.7 1.9 1.3C8.1 17 9.2 18 11 18c2.7 0 4.4-1.3 5-4-1 1.3-2.1 1.8-3.4 1.5-.7-.2-1.3-.7-1.9-1.3C9.9 13 8.8 12 7 12Z" />
    </svg>
  );
}

export function MySqlIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.8 3.1c-1.2 0-2.2.4-2.8 1.2-.7.9-.8 2.2-.4 3.6.1.4.3.8.5 1.2l-2.4 4.5c-.3-.1-.6-.2-1-.2-1.7 0-2.9 1.3-3.6 2.4-.5.8-.8 1.6-1 2.1-.6.2-1.6.5-2.3.8-.8.4-1.2.8-1.3 1.2 0 .2 0 .4.2.5.3.3 1 0 1.7-.3.8-.4 1.5-1 2-1.7.8 1.4 2 2.4 3.6 2.4.5 0 1-.1 1.4-.4.5.4 1.1.6 1.8.6 2.4 0 4-2.6 4.6-4.1.3-.7.6-1.6.8-2.5 1.1.3 2.3.2 3.1-.3.4-.3.6-.6.6-1 0-.6-.6-1.1-1.7-1.4-1.1-.3-2.4-.3-3.3 0-.2-.7-.5-1.4-.9-2 .7-.8 1.1-1.7 1.1-2.6 0-1.3-.9-2.4-2.4-2.4Zm0 1.4c.7 0 1.1.5 1.1 1.2 0 .6-.3 1.3-.8 1.9-.5-.8-.8-1.6-.9-2.3.2-.5.4-.8.6-.8Zm-6.9 11c.4 0 .9.3 1.4.9l-.8 1.4c-.4-.5-.8-.8-1.2-.8-.7 0-1.5.8-2.1 1.8.2-.7.5-1.4.9-1.9.5-.7 1.1-1.4 1.8-1.4Zm4.3.2c.7 0 1.5.8 2.1 2.2-.3-1.4-1.1-2.2-2-2.2-.5 0-1 .3-1.4.8l.8 1.4c.2-.6.4-2.2.5-2.2Z" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}
