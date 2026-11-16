import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import TransitionBike from './TransitionBike';
import { ROUTE_TRANSITION_LANDMARKS } from '../data/itinerary/routeTransitionLandmarks';

export default function RouteTransitionOverlay({ transition, onCover, onComplete }) {
  const overlayRef = useRef(null);
  const panelRef = useRef(null);
  const landmarkRef = useRef(null);
  const bikeRef = useRef(null);
  const landmark = transition ? ROUTE_TRANSITION_LANDMARKS[transition.to] : null;

  useLayoutEffect(() => {
    if (!transition || !overlayRef.current || !panelRef.current) return undefined;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      let doneFrame;
      const frame = window.requestAnimationFrame(() => {
        gsap.set(panelRef.current, { xPercent: 0 });
        gsap.set(landmarkRef.current, { yPercent: 0, opacity: landmark ? 1 : 0, scale: landmark?.scale ?? 1 });
        onCover?.();
        doneFrame = window.requestAnimationFrame(() => onComplete?.());
      });
      return () => {
        window.cancelAnimationFrame(frame);
        if (doneFrame) window.cancelAnimationFrame(doneFrame);
      };
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
      gsap.set(landmarkRef.current, {
        yPercent: 100,
        opacity: 0,
        scale: landmark?.scale ?? 1,
        transformOrigin: '50% 100%',
      });
      gsap.set(bike?.root, { opacity: 0.35 });
      gsap.set([...wheels, crank].filter(Boolean), { transformOrigin: '50% 50%' });

      timeline
        .to(panelRef.current, { xPercent: 0, duration: 0.5, ease: 'power2.out' })
        .to(landmarkRef.current, { yPercent: 0, opacity: 1, duration: 0.56, ease: 'power2.out' })
        .to(bike?.root, { opacity: 1, duration: 0.18, ease: 'power1.out' }, '<')
        .to(wheels, { rotation: 720, duration: 0.66, ease: 'none' }, '<')
        .to(crank, { rotation: 720, duration: 0.66, ease: 'none' }, '<')
        .call(() => onCover?.())
        .to(bike?.root, { opacity: 0, duration: 0.2, ease: 'power1.out' }, '+=.08')
        .to(landmarkRef.current, { opacity: 0, duration: 0.2, ease: 'power1.out' }, '<')
        .to(panelRef.current, { xPercent: -100, duration: 0.5, ease: 'power2.inOut' });
    }, overlayRef);

    return () => ctx.revert();
  }, [transition, landmark, onCover, onComplete]);

  if (!transition) return null;

  return (
    <div ref={overlayRef} className="route-transition-overlay pointer-events-none fixed inset-0 z-[100] overflow-hidden" style={{ pointerEvents: 'auto' }} aria-hidden="true">
      <div ref={panelRef} className="route-transition-overlay__panel absolute inset-0">
        {landmark && (
          <div
            ref={landmarkRef}
            className="route-transition-landmark pointer-events-none absolute bottom-0 left-0 right-0 z-[1] mx-auto"
            style={{ width: landmark.width }}
          >
            <img src={landmark.asset} alt="" aria-hidden="true" className="block h-auto w-full object-contain" />
          </div>
        )}
        <div className="relative z-[2] flex h-full w-full items-center justify-center">
          <TransitionBike ref={bikeRef} />
        </div>
      </div>
    </div>
  );
}



