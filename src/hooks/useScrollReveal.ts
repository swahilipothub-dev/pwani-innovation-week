import { useInView } from 'react-intersection-observer';

interface Options {
  threshold?: number;
  triggerOnce?: boolean;
}

export function useScrollReveal(options: Options = {}) {
  const { threshold = 0.15, triggerOnce = false } = options;
  const { ref, inView } = useInView({ threshold, triggerOnce });
  return { ref, inView };
}

export const fadeUp = (inView: boolean, delay = 0): React.CSSProperties => ({
  opacity: inView ? 1 : 0,
  transform: inView ? 'translateY(0)' : 'translateY(32px)',
  transition: `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms`,
});

export const fadeLeft = (inView: boolean, delay = 0): React.CSSProperties => ({
  opacity: inView ? 1 : 0,
  transform: inView ? 'translateX(0)' : 'translateX(-32px)',
  transition: `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms`,
});

export const fadeRight = (inView: boolean, delay = 0): React.CSSProperties => ({
  opacity: inView ? 1 : 0,
  transform: inView ? 'translateX(0)' : 'translateX(32px)',
  transition: `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms`,
});

export const scaleIn = (inView: boolean, delay = 0): React.CSSProperties => ({
  opacity: inView ? 1 : 0,
  transform: inView ? 'scale(1)' : 'scale(0.9)',
  transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
});
