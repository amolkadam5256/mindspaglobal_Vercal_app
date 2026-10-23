'use client';

import { useEffect, useRef } from 'react';

export function useScrollAnimation(childSelector?: string) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            if (childSelector) {
              const children = (entry.target as HTMLElement).querySelectorAll(childSelector);
              children.forEach((child, i) => {
                setTimeout(() => child.classList.add('is-visible'), i * 90);
              });
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [childSelector]);

  return ref;
}
