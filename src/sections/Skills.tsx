import { Section } from '@/components/ui/Section';
import { SKILL_GROUPS } from '@/lib/site';

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 — Skills"
      title="A stack that covers both sides of the request."
      description="Frontend craft with React and Next.js. Backend work in Node and PHP. Tools I actually reach for on jobs."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {SKILL_GROUPS.map((group) => (
          <div key={group.category} className="rounded-2xl border border-line bg-surface p-6">
            <h3 className="font-display text-lg font-semibold">{group.category}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line bg-canvas px-3 py-1 text-sm text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
