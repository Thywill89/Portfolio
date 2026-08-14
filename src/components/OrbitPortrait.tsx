import { ABOUT } from '@/lib/site';

const ORBIT = [
  { label: 'React', className: 'left-1/2 top-0 -translate-x-1/2 -translate-y-1/2' },
  { label: 'PHP', className: 'right-0 top-1/2 -translate-y-1/2 translate-x-1/2' },
  { label: 'Node', className: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2' },
  { label: 'Next.js', className: 'left-0 top-1/2 -translate-x-1/2 -translate-y-1/2' },
] as const;

export function OrbitPortrait() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[22rem] sm:max-w-[26rem]">
      <div className="absolute inset-[18%] overflow-hidden rounded-full border-2 border-accent shadow-glow">
        <img
          src="/images/portrait.png"
          alt={ABOUT.photoAlt}
          width={640}
          height={640}
          className="h-full w-full object-cover object-[center_12%]"
        />
      </div>
      <div className="animate-orbit pointer-events-none absolute inset-[6%]">
        {ORBIT.map((item) => (
          <span key={item.label} className={`absolute ${item.className}`}>
            <span className="animate-orbit-rev inline-block rounded-full border border-line bg-surface px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-ink shadow-sm">
              {item.label}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
