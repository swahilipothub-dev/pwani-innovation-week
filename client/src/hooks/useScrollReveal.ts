import { useEffect } from 'react';

const SELECTOR =
  '[data-animate-on-scroll]:not([data-animate-on-scroll="false"]), section, .section-container, .scroll-reveal, .card, .card-hover';

const useScrollReveal = (dependency?: string) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(SELECTOR),
    ).filter((element) => element.dataset.animateOnScrollState !== 'loaded');

    if (!elements.length) return;

    elements.forEach((element) => {
      if (element.dataset.animateOnScrollState === 'pending') return;
      element.dataset.animateOnScrollState = 'pending';
      element.classList.add('reveal-init');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.add('reveal-active');
            target.classList.remove('reveal-init');
            target.dataset.animateOnScrollState = 'loaded';
            observer.unobserve(target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -10%',
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [dependency]);
};

export default useScrollReveal;
