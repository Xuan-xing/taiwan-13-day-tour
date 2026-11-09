import { useLayoutEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import { JOURNEY_MAP_NODES, JOURNEY_MAP_SEGMENTS, JOURNEY_MAP_VIEWBOX } from '../data/itinerary/index.js';

function segmentCurve(segment, from, to) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const distance = Math.max(Math.hypot(dx, dy), 1);
  const normalX = -dy / distance;
  const normalY = dx / distance;
  const modeOffset = segment.curve ?? ({
    land: 24,
    transfer: 20,
    rail: 16,
    'ferry-out': 82,
    'ferry-return': 82,
  }[segment.mode] ?? 24);
  const c1 = {
    x: from.x + dx * 0.32 + normalX * modeOffset,
    y: from.y + dy * 0.32 + normalY * modeOffset,
  };
  const c2 = {
    x: from.x + dx * 0.72 + normalX * modeOffset,
    y: from.y + dy * 0.72 + normalY * modeOffset,
  };
  return `C ${c1.x.toFixed(2)} ${c1.y.toFixed(2)} ${c2.x.toFixed(2)} ${c2.y.toFixed(2)} ${to.x} ${to.y}`;
}

function buildJourneyPath() {
  const byId = new Map(JOURNEY_MAP_NODES.map((node) => [node.id, node]));
  const first = byId.get(JOURNEY_MAP_SEGMENTS[0]?.from);
  if (!first) return '';
  return `M ${first.x} ${first.y} ${JOURNEY_MAP_SEGMENTS.map((segment) => {
    const from = byId.get(segment.from);
    const to = byId.get(segment.to);
    return from && to ? segmentCurve(segment, from, to) : '';
  }).join(' ')}`;
}

function getLabelPosition(node) {
  const rightEdge = node.x > JOURNEY_MAP_VIEWBOX.x + JOURNEY_MAP_VIEWBOX.width - 110;
  return {
    x: rightEdge ? node.x - 14 : node.x + 14,
    anchor: rightEdge ? 'end' : 'start',
  };
}

export default function TaiwanJourneyMap({ onSelectRoute }) {
  const rootRef = useRef(null);
  const routeRef = useRef(null);
  const routePulseRef = useRef(null);
  const nodeRefs = useRef([]);
  const routePath = useMemo(buildJourneyPath, []);

  useLayoutEffect(() => {
    const route = routeRef.current;
    const root = rootRef.current;
    const pulse = routePulseRef.current;
    if (!route || !root) return undefined;
    if (pulse) pulse.style.opacity = '0';
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const length = route.getTotalLength();
    route.style.strokeDasharray = `${length}`;
    route.style.strokeDashoffset = `${reduce ? 0 : length}`;
    const nodes = nodeRefs.current.filter(Boolean);
    if (reduce) {
      nodes.forEach((node) => { node.style.opacity = '1'; });
      if (pulse) pulse.style.opacity = '0';
      return undefined;
    }
    const ctx = gsap.context(() => {
      gsap.to(route, {
        strokeDashoffset: 0,
        duration: 2.8,
        ease: 'power2.out',
        onComplete: () => {
          gsap.to(nodes, { opacity: 1, duration: 0.32, stagger: 0.11, ease: 'power1.out' });
          if (!pulse) return;
          pulse.style.opacity = '0.7';
          const progress = { value: 0 };
          gsap.to(progress, {
            value: 1,
            duration: 18,
            ease: 'none',
            repeat: -1,
            onUpdate: () => {
              const point = route.getPointAtLength(length * progress.value);
              pulse.setAttribute('cx', point.x.toFixed(2));
              pulse.setAttribute('cy', point.y.toFixed(2));
            },
          });
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="relative mx-auto w-full max-w-xl overflow-hidden" id="overview-map">
      <svg viewBox={`${JOURNEY_MAP_VIEWBOX.x} ${JOURNEY_MAP_VIEWBOX.y} ${JOURNEY_MAP_VIEWBOX.width} ${JOURNEY_MAP_VIEWBOX.height}`} role="img" aria-labelledby="journey-map-title journey-map-description" className="block h-auto w-full">
        <title id="journey-map-title">Taiwan 13-day journey route</title>
        <desc id="journey-map-description">A complete regional route from Taichung through Green Island and the east coast to Taipei.</desc>
        <image href="/images/maps/taiwanHigh.svg" x={JOURNEY_MAP_VIEWBOX.x} y={JOURNEY_MAP_VIEWBOX.y} width={JOURNEY_MAP_VIEWBOX.width} height={JOURNEY_MAP_VIEWBOX.height} preserveAspectRatio="xMidYMid meet" opacity=".32" pointerEvents="none" aria-hidden="true" />
        <path d={routePath} ref={routeRef} fill="none" stroke="#8A3324" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
        <circle ref={routePulseRef} r="5" fill="#D9AA3B" pointerEvents="none" aria-hidden="true" />
        {JOURNEY_MAP_NODES.filter((node) => node.visibleMarker).map((node, index) => {
          const label = getLabelPosition(node);
          return (
            <g
              key={node.id}
              ref={(element) => { nodeRefs.current[index] = element; }}
              role="button"
              tabIndex={0}
              aria-label={`Open ${node.label}, ${node.detail}`}
              onClick={() => onSelectRoute?.(node.routeId)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  onSelectRoute?.(node.routeId);
                }
              }}
              className="journey-map-node cursor-pointer outline-none"
              style={{ opacity: 0 }}
            >
              <circle cx={node.x} cy={node.y} r="13" fill="#F5F5F0" stroke="#2D4030" strokeWidth="2" vectorEffect="non-scaling-stroke" />
              <circle cx={node.x} cy={node.y} r="5" fill="#8A3324" />
              <text x={label.x} y={node.y - 5} textAnchor={label.anchor} fill="#2D4030" fontSize="14" fontWeight="600">{node.label}</text>
              <text x={label.x} y={node.y + 14} textAnchor={label.anchor} fill="rgba(45,64,48,.68)" fontSize="10">{node.detail}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
