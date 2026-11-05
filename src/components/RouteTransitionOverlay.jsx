import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import TransitionBike from './TransitionBike';

export default function RouteTransitionOverlay({ transition, onCover, onComplete }) {
  const overlayRef = useRef(null);
  const panelRef = useRef(null);
  const bikeRef = useRef(null);

  useLayoutEffect(() => {
    if (!transition || !overlayRef.current || !panelRef.current) return undefined;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      const frame = window.requestAnimationFrame(() => {
        onCover?.();
        onComplete?.();
      });
      return () => window.cancelAnimationFrame(frame);
    }

    const ctx = gsap.context(() => {
      const bike = bikeRef.current;
      const wheels = bike?.wheels ?? [];
      const crank = bike?.crank;
      const timeline = gsap.timeline({
        defaults: { overwrite: 'auto' },
        onComplete: () => onComplete?.(),
      });

      gsap.set(panelRef.current, { xPercent: 100 });
      gsap.set(bike?.root, { opacity: 0.35 });
      gsap.set([...wheels, crank].filter(Boolean), { transformOrigin: '50% 50%' });

      timeline
        .to(panelRef.current, { xPercent: 0, duration: 0.5, ease: 'power2.out' })
        .to(bike?.root, { opacity: 1, duration: 0.18, ease: 'power1.out' }, '-=.05')
        .to(wheels, { rotation: 720, duration: 0.66, ease: 'none' }, '<')
        .to(crank, { rotation: 720, duration: 0.66, ease: 'none' }, '<')
        .call(() => onCover?.())
        .to(bike?.root, { opacity: 0, duration: 0.2, ease: 'power1.out' }, '+=.08')
        .to(panelRef.current, { xPercent: -100, duration: 0.5, ease: 'power2.inOut' });
    }, overlayRef);

    return () => ctx.revert();
  }, [transition, onCover, onComplete]);

  if (!transition) return null;

  return (
    <div ref={overlayRef} className="route-transition-overlay pointer-events-none fixed inset-0 z-[100] overflow-hidden" style={{ pointerEvents: 'auto' }} aria-hidden="true">
      <div ref={panelRef} className="absolute inset-0 bg-terracotta">
        <div className="flex h-full w-full items-center justify-center">
          <TransitionBike ref={bikeRef} />
        </div>
      </div>
    </div>
  );
}
