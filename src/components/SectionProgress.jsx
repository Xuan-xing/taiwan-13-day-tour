import { useEffect, useMemo, useState } from 'react';

const DEFAULT_SECTIONS = [
  { id: 'top', label: 'Route' },
  { id: 'itinerary', label: 'Itinerary' },
  { id: 'planner', label: 'Planner' },
  { id: 'passport', label: 'Passport' },
  { id: 'cta', label: 'CTA' },
];

export default function SectionProgress({ sections = DEFAULT_SECTIONS }) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? 'top');
  const sectionIds = useMemo(() => sections.map((section) => section.id), [sections]);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-28% 0px -52% 0px', threshold: [0, 0.2, 0.5, 0.8] },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [sectionIds]);

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (!target) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <nav
      aria-label="Page sections"
      className="pointer-events-none relative z-30 mx-3 mb-3 mt-14 px-0 md:fixed md:inset-x-auto md:bottom-auto md:right-5 md:top-1/2 md:mx-0 md:mt-0 md:-translate-y-1/2"
    >
      <div className="pointer-events-none mx-auto flex max-w-md items-center justify-center gap-1 rounded-full border border-ink/10 bg-rice/90 p-1.5 shadow-[0_12px_34px_rgba(45,64,48,.08)] backdrop-blur-md md:max-w-none md:flex-col md:items-stretch md:gap-1.5 md:rounded-2xl md:p-2">
        {sections.map((section, index) => {
          const active = activeId === section.id;
          return (
            <button
              key={section.id}
              type="button"
              aria-current={active ? 'page' : undefined}
              aria-label={`Go to ${section.label}`}
              onClick={() => scrollToSection(section.id)}
              className={`pointer-events-auto group flex min-h-11 min-w-0 flex-1 items-center justify-center gap-1.5 rounded-full px-2.5 py-2 text-[9px] font-bold uppercase tracking-[.13em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-rice md:flex-none md:justify-start md:rounded-xl md:px-2.5 md:py-2.5 md:text-left ${active ? 'bg-ink text-rice' : 'text-ink/45 hover:text-ink'}`}
            >
              <span className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors ${active ? 'bg-terracotta' : 'bg-ink/20 group-hover:bg-terracotta/60'}`} />
              <span className="truncate">{String(index + 1).padStart(2, '0')} {section.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
