import { useInView } from 'react-intersection-observer';

interface Options {
  threshold?: number;
  triggerOnce?: boolean;
}

export function useScrollReveal(options: Options = {}) {
  const { threshold = 0.15, triggerOnce = true } = options;
  const { ref, inView } = useInView({ threshold, triggerOnce });
  return { ref, inView };
}

export const fadeUp = (_inView: boolean, _delay = 0): React.CSSProperties => ({
  opacity: 1,
  transform: 'none',
  transition: 'none',
});

export const fadeLeft = (_inView: boolean, _delay = 0): React.CSSProperties => ({
  opacity: 1,
  transform: 'none',
  transition: 'none',
});

export const fadeRight = (_inView: boolean, _delay = 0): React.CSSProperties => ({
  opacity: 1,
  transform: 'none',
  transition: 'none',
});

export const scaleIn = (_inView: boolean, _delay = 0): React.CSSProperties => ({
  opacity: 1,
  transform: 'none',
  transition: 'none',
});
