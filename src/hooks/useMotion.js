import { useEffect, useRef } from 'react';

export function usePrefersReducedMotion() {
  const mediaRef = useRef(
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)')
      : null,
  );

  useEffect(() => {
    const media = mediaRef.current;
    if (!media) return undefined;

    const handler = () => {
      document.documentElement.dataset.motion = media.matches ? 'reduce' : 'normal';
    };

    handler();
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, []);

  return mediaRef.current?.matches ?? false;
}

export function useEntryAnimation(ref, options = {}) {
  const { delay = 0, duration = 450 } = options;

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const reduced =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      node.style.opacity = '1';
      node.style.transform = 'none';
      return undefined;
    }

    node.animate(
      [
        { opacity: 0, transform: 'translateY(12px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ],
      {
        duration,
        delay,
        easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
        fill: 'forwards',
      },
    );

    return undefined;
  }, [ref, delay, duration]);
}
