import { memo, useEffect, useRef, useState } from 'react';

const VARIANT_CLASS = {
  'rice-flow': 'ambient-rice-flow',
  'contour-lines': 'ambient-contour-lines',
  'coastal-wave': 'ambient-coastal-wave',
  'passport-grain': 'ambient-passport-grain',
  'terracotta-glow': 'ambient-terracotta-glow',
};

function AmbientSectionBackground({ variant = 'rice-flow', className = '' }) {
  const variantClass = VARIANT_CLASS[variant] ?? VARIANT_CLASS['rice-flow'];
  const rootRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const element = rootRef.current;
    if (!element || typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: '120px 0px', threshold: 0 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className={`ambient-background pointer-events-none ${isVisible ? 'is-visible' : 'is-paused'} ${variantClass} ${className}`}
    >
      <span className="ambient-background__shape ambient-background__shape--one" />
      <span className="ambient-background__shape ambient-background__shape--two" />
    </div>
  );
}

export default memo(AmbientSectionBackground);

