import { memo, useId, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

function MiniBikeSvg({ rearWheel, frontWheel, crank }) {
  return (
    <svg className="h-auto w-full" viewBox="0 0 260 150" role="img" aria-label="Touring bicycle moving through the route">
      <g ref={rearWheel} fill="none" stroke="currentColor" strokeWidth="2.5">
        <circle cx="55" cy="104" r="34" />
        <path d="M55 70v68M21 104h68M31 80l48 48M31 128l48-48" strokeWidth="1" opacity=".42" />
      </g>
      <g ref={frontWheel} fill="none" stroke="currentColor" strokeWidth="2.5">
        <circle cx="205" cy="104" r="34" />
        <path d="M205 70v68M171 104h68M181 80l48 48M181 128l48-48" strokeWidth="1" opacity=".42" />
      </g>
      <g className="bike-frame" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M55 104L90 104L120 54L155 104L205 104L150 55L120 54L90 104M120 54L110 35M110 35L126 35M150 55L164 36M157 35L174 35" />
        <path d="M105 35c8-15 24-16 37-6M102 36h16M165 36h12" />
      </g>
      <g ref={crank} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <circle cx="120" cy="104" r="7" />
        <path d="M120 104l11 9M131 113h8M120 104l-10-10M110 94h-8" />
      </g>
      <circle cx="107" cy="30" r="4" fill="currentColor" />
    </svg>
  );
}

function SectionBikePass({ direction = 'ltr', className = '' }) {
  const root = useRef(null);
  const bike = useRef(null);
  const rearWheel = useRef(null);
  const frontWheel = useRef(null);
  const crank = useRef(null);
  const glowLine = useRef(null);
  const highlight = useRef(null);
  const glowId = useId().replace(/:/g, '');

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const path = root.current?.querySelector('[data-bike-path]');
      const haloLine = glowLine.current;
      const activeLine = highlight.current;
      if (!path || !bike.current || !haloLine || !activeLine) return;

      const start = 0.14;
      const end = 0.69;
      const directionScale = direction === 'rtl' ? -1 : 1;
      const motionPath = {
        path,
        align: path,
        alignOrigin: [0.5, 0.86],
        autoRotate: false,
      };
      const travel = gsap.to(bike.current, { motionPath, duration: 1, ease: 'none', paused: true });
      const totalLength = path.getTotalLength();
      const trailLength = 0.17;
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const motionEase = gsap.parseEase('power2.inOut');

      gsap.set(bike.current, {
        scaleX: directionScale,
        transformOrigin: '50% 86%',
      });
      gsap.set([rearWheel.current, frontWheel.current, crank.current], {
        transformOrigin: 'center center',
        rotation: 0,
      });
      if (!reducedMotion) {
        gsap.set([bike.current, rearWheel.current, frontWheel.current, crank.current], {
          willChange: 'transform',
        });
      }
      [haloLine, activeLine].forEach((line) => {
        line.setAttribute('pathLength', '1');
        line.setAttribute('stroke-dasharray', `${trailLength} ${1 - trailLength}`);
      });
      haloLine.style.strokeDashoffset = '0';
      activeLine.style.strokeDashoffset = '0';
      travel.progress(start);

      const toScreenPoint = (point) => {
        const svg = path.ownerSVGElement;
        const matrix = path.getScreenCTM();
        if (!svg || !matrix) return point;
        const svgPoint = svg.createSVGPoint();
        svgPoint.x = point.x;
        svgPoint.y = point.y;
        return svgPoint.matrixTransform(matrix);
      };

      const clampedAngle = (progress) => {
        const before = path.getPointAtLength(totalLength * Math.max(0, progress - 0.012));
        const after = path.getPointAtLength(totalLength * Math.min(1, progress + 0.012));
        const screenBefore = toScreenPoint(before);
        const screenAfter = toScreenPoint(after);
        let angle = Math.atan2(screenAfter.y - screenBefore.y, screenAfter.x - screenBefore.x) * (180 / Math.PI);
        if (angle > 90) angle -= 180;
        if (angle < -90) angle += 180;
        return gsap.utils.clamp(-18, 18, angle);
      };

      const updateVisuals = (progress) => {
        const normalized = gsap.utils.clamp(0, 1, (progress - start) / (end - start));
        const eased = motionEase(normalized);
        gsap.set(bike.current, { rotation: clampedAngle(progress) });
        gsap.set([rearWheel.current, frontWheel.current], { rotation: eased * 620 });
        gsap.set(crank.current, { rotation: eased * 980 });
        const offset = `${-Math.max(0, normalized - trailLength)}`;
        haloLine.style.strokeDashoffset = offset;
        activeLine.style.strokeDashoffset = offset;
      };

      updateVisuals(start);
      if (reducedMotion) return;

      gsap.to(travel, {
        progress: end,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: root.current?.parentElement ?? root.current,
          start: 'top 85%',
          end: 'bottom 20%',
          scrub: 0.8,
          invalidateOnRefresh: true,
          onUpdate: () => updateVisuals(travel.progress()),
        },
      });
    }, root);

    return () => {
      ctx.revert();
      gsap.killTweensOf([bike.current, rearWheel.current, frontWheel.current, crank.current]);
    };
  }, [direction]);

  const path = direction === 'rtl'
    ? 'M105 22 C80 4 66 38 46 20 S18 6 -5 23'
    : 'M-5 23 C18 6 34 38 54 20 S82 4 105 22';

  return (
    <div ref={root} aria-hidden="true" className={`pointer-events-none absolute inset-x-0 z-0 h-24 overflow-visible sm:h-28 ${className}`}>
      <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
        <defs>
          <filter id={glowId} x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="2.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path data-bike-path d={path} fill="none" stroke="transparent" strokeWidth="2" />
        <path d={path} pathLength="1" fill="none" stroke="#FFFFFF" strokeOpacity=".16" strokeWidth=".95" strokeLinecap="round" strokeDasharray="none" vectorEffect="non-scaling-stroke" />
        <path ref={glowLine} d={path} fill="none" stroke="#C4D4C5" strokeOpacity=".72" strokeWidth="4.8" strokeLinecap="round" vectorEffect="non-scaling-stroke" filter={`url(#${glowId})`} />
        <path ref={highlight} d={path} fill="none" stroke="#FFFFFF" strokeOpacity=".98" strokeWidth="1.65" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      </svg>
      <div ref={bike} className="absolute left-0 top-0 w-[18vw] max-w-[84px] min-w-[48px] text-ink opacity-75 sm:w-[9vw] sm:max-w-[108px]">
        <MiniBikeSvg rearWheel={rearWheel} frontWheel={frontWheel} crank={crank} />
      </div>
    </div>
  );
}

export default memo(SectionBikePass);
