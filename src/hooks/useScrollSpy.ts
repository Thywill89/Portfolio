import { useEffect, useState } from 'react';

export function useScrollSpy(ids: string[], offset = 120) {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? '');

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const top = visible[0]?.target.id;
        if (top) setActiveId(top);
      },
      { rootMargin: `-${String(offset)}px 0px -45% 0px`, threshold: [0.1, 0.25, 0.5] },
    );

    for (const el of elements) observer.observe(el);
    return () => {
      observer.disconnect();
    };
  }, [ids, offset]);

  return activeId;
}
