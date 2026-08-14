import { cn } from '@/lib/utils';
import type { Project } from '@/types';

type ProjectPreviewProps = {
  project: Project;
  className?: string;
};

export function ProjectPreview({ project, className }: ProjectPreviewProps) {
  if (project.slug === '77-massage-treat') {
    return (
      <img
        src={project.image}
        alt="77 Massage Treat licensed therapists"
        width={1600}
        height={893}
        className={cn('h-full min-h-[14rem] w-full object-cover object-center', className)}
      />
    );
  }

  if (project.slug === 'iot-lab-monitor') {
    return (
      <div
        className={cn(
          'flex h-full min-h-[14rem] w-full gap-3 bg-[#0b1220] p-5 text-left',
          className,
        )}
      >
        <div className="hidden w-16 shrink-0 flex-col gap-2 sm:flex">
          <span className="h-2 w-full rounded bg-accent" />
          <span className="h-2 w-4/5 rounded bg-[#2a3b52]" />
          <span className="h-2 w-3/5 rounded bg-[#2a3b52]" />
        </div>
        <div className="grid min-w-0 flex-1 grid-cols-2 gap-2">
          <div className="rounded-xl bg-[#172338] p-3">
            <p className="text-[10px] text-[#94a0ac]">Temperature</p>
            <p className="mt-1 font-display text-2xl text-accent">27.4°</p>
          </div>
          <div className="rounded-xl bg-[#172338] p-3">
            <p className="text-[10px] text-[#94a0ac]">Humidity</p>
            <p className="mt-1 font-display text-2xl text-sky-300">61%</p>
          </div>
          <div className="col-span-2 flex items-end rounded-xl bg-[#172338] p-3">
            <svg viewBox="0 0 200 48" className="h-12 w-full" aria-hidden="true">
              <polyline
                points="0,36 30,28 60,32 90,14 120,18 150,8 180,12 200,4"
                fill="none"
                stroke="rgb(45 212 191)"
                strokeWidth="3"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'flex h-full min-h-[14rem] w-full flex-col bg-[#0f1412] p-5 text-left',
        className,
      )}
    >
      <div className="h-7 w-40 rounded-lg bg-accent/90" />
      <div className="mt-4 h-10 rounded-xl bg-[#1e2a26]" />
      <div className="mt-3 grid flex-1 grid-cols-2 gap-2">
        <div className="rounded-xl bg-[#1e2a26]" />
        <div className="space-y-2">
          <div className="h-1/2 rounded-xl bg-[#1e2a26]" />
          <div className="h-1/2 rounded-xl bg-[#1e2a26]" />
        </div>
      </div>
      <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-zinc-400">
        {project.title}
      </p>
    </div>
  );
}
