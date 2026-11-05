import { memo, useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronRight, Mountain, Wind } from 'lucide-react';
import { FEATURED_ITINERARY, JINSHAN_PLANS } from '../data';
import SectionBikePass from './SectionBikePass';
import AmbientSectionBackground from './AmbientSectionBackground';

const Stat = memo(function Stat({ label, value }) {
  return (
    <div className="border-l border-[#2D4030]/15 pl-4 first:border-l-0 first:pl-0">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2D4030]/45">
        {label}
      </p>
      <p className="mt-1.5 font-display text-2xl tracking-[-0.03em] text-[#2D4030]">
        {value}
      </p>
    </div>
  );
});

const ModeToggle = memo(function ModeToggle({ mode, onChange }) {
  const options = [
    ['pro', FEATURED_ITINERARY.dayTwo.modes.pro],
    ['chill', FEATURED_ITINERARY.dayTwo.modes.chill],
  ];

  return (
    <div
      aria-label="Choose Day 2 evening plan"
      className="inline-flex rounded-full border border-[#2D4030]/15 bg-[#F5F5F0] p-1"
      role="group"
    >
      {options.map(([value, option]) => {
        const active = mode === value;

        return (
          <button
            key={value}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(value)}
            className={`min-h-11 rounded-full px-3.5 py-2.5 text-xs font-semibold tracking-[-0.01em] transition-colors duration-300 ease-out active:scale-[.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A3324] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F5F0] sm:px-4 ${
              active
                ? 'bg-[#2D4030] text-[#F5F5F0]'
                : 'text-[#2D4030]/50 hover:text-[#2D4030]'
            }`}
          >
            {option.label}{' '}
            <span className="hidden sm:inline">· {option.labelDetail}</span>
          </button>
        );
      })}
    </div>
  );
});

const ImagePanel = memo(function ImagePanel({ image, alt, day }) {
  return (
    <div className="group relative aspect-[16/9] overflow-hidden bg-[#2D4030] sm:aspect-[16/10]">
      <img
        src={image}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#14251d]/75 via-[#14251d]/10 to-transparent" />
      <div className="absolute inset-x-5 bottom-5 flex items-end justify-between text-[#F5F5F0] sm:inset-x-7 sm:bottom-7">
        <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#F5F5F0]/75">
          {day}
        </span>
        <ArrowUpRight size={17} strokeWidth={1.5} className="text-[#F5F5F0]/75" />
      </div>
    </div>
  );
});

function ItineraryCard({ children, data, eyebrow }) {
  return (
    <article className="flex h-full flex-col overflow-hidden border border-[#2D4030]/15 bg-[#F5F5F0]">
      <ImagePanel image={data.image} alt={data.imageAlt} day={data.day} />

      <div className="flex flex-1 flex-col p-5 sm:p-7 lg:p-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.23em] text-[#8A3324]">
          {eyebrow}
        </p>

        <p className="mt-4 max-w-md text-xs font-medium leading-5 text-[#2D4030]/60">
          {data.route}
        </p>

        <h3 className="mt-4 max-w-lg font-display text-[clamp(2rem,3.5vw,3.35rem)] leading-[0.92] tracking-[-0.055em] text-[#2D4030]">
          {data.title}
        </h3>

        {children}
      </div>
    </article>
  );
}

const JinshanPlanCard = memo(function JinshanPlanCard({ plan }) {
  return (
    <article className="group border-t border-[#2D4030]/15 pt-4">
      <div className="relative aspect-[16/9] overflow-hidden bg-[#dfe8e0] sm:aspect-[3/2]">
        <img
          src={plan.image}
          alt={plan.imageAlt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14251d]/55 via-transparent to-transparent" />
        <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#F5F5F0]">
          {plan.tag}
        </span>
      </div>

      <div className="pt-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8A3324]">
          {plan.eyebrow}
        </p>
        <h3 className="mt-2 font-display text-2xl leading-none tracking-[-0.04em] text-[#2D4030]">
          {plan.title}
        </h3>
        <p className="mt-3 text-xs font-medium leading-5 text-[#2D4030]/60">
          {plan.route}
        </p>
        <div className="mt-3 flex gap-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#2D4030]/45">
          <span>{plan.distance}</span>
          <span>{plan.time}</span>
        </div>
        <p className="mt-3 text-sm leading-6 text-[#2D4030]/70">{plan.detail}</p>
      </div>
    </article>
  );
});

const JinshanPlans = memo(function JinshanPlans() {
  return (
    <div className="mt-20 border-t border-[#2D4030]/15 pt-8 sm:mt-28">
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
        <div>
          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8A3324]">
            <span className="h-px w-9 bg-[#8A3324]" />
            When you reach Jinshan
          </div>
          <h3 className="mt-5 max-w-md font-display text-[clamp(2.8rem,5vw,5.4rem)] leading-[0.88] tracking-[-0.07em] text-[#2D4030]">
            Choose your
            <br />
            <em className="text-[#8A3324]">next good turn.</em>
          </h3>
          <p className="mt-5 max-w-sm text-sm leading-6 text-[#2D4030]/65">
            Jinshan is the useful decision point on the north coast. Pause for
            food and hot springs, make a short Yehliu loop, or keep rolling to
            Jiufen before the light fades.
          </p>
          <div className="mt-7 border-l-2 border-[#8A3324] pl-4 text-xs leading-5 text-[#2D4030]/65">
            <p className="font-bold uppercase tracking-[0.18em] text-[#8A3324]">
              Practical handoff
            </p>
            <p className="mt-1">
              Send your overnight bag ahead to Jiufen and keep a rain shell in
              the handlebar bag. The coast can turn wet within one hour.
            </p>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {JINSHAN_PLANS.map((plan) => (
            <JinshanPlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
});

export default function ItinerarySection() {
  const [dayTwoMode, setDayTwoMode] = useState('pro');
  const elevationRef = useRef(null);
  const activityRef = useRef(null);
  const transitionTimerRef = useRef(null);
  const dayOne = FEATURED_ITINERARY.dayOne;
  const dayTwo = FEATURED_ITINERARY.dayTwo;
  const selectedMode = dayTwo.modes[dayTwoMode];

  useEffect(() => {
    return () => {
      if (transitionTimerRef.current) {
        window.clearTimeout(transitionTimerRef.current);
      }
    };
  }, []);

  const changeDayTwoMode = (nextMode) => {
    if (nextMode === dayTwoMode || transitionTimerRef.current) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const contentNodes = [elevationRef.current, activityRef.current].filter(Boolean);

    if (reducedMotion || contentNodes.length === 0) {
      setDayTwoMode(nextMode);
      return;
    }

    contentNodes.forEach((node) => node.classList.add('translate-y-2', 'opacity-0'));
    transitionTimerRef.current = window.setTimeout(() => {
      setDayTwoMode(nextMode);
      requestAnimationFrame(() => {
        contentNodes.forEach((node) => node.classList.remove('translate-y-2', 'opacity-0'));
        transitionTimerRef.current = null;
      });
    }, 240);
  };

  return (
    <section
      id="itinerary"
      className="relative scroll-mt-24 overflow-hidden bg-[#F5F5F0] px-4 py-20 sm:px-8 sm:py-28"
    >
      <AmbientSectionBackground variant="coastal-wave" />
      <SectionBikePass direction="rtl" className="top-24 sm:top-32" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 grid gap-7 border-b border-[#2D4030]/15 pb-9 lg:grid-cols-[1fr_0.48fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8A3324]">
              <span className="h-px w-9 bg-[#8A3324]" />
              A two-day field note
            </div>
            <h2 className="mt-5 max-w-4xl font-display text-[clamp(3.4rem,7vw,7.2rem)] leading-[0.84] tracking-[-0.075em] text-[#2D4030]">
              Coastlines in the morning.
              <br />
              <em className="text-[#8A3324]">City lights by night.</em>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-[#2D4030]/62 lg:pb-1">
            A compact northbound loop for riders who want the Pacific wind, old
            mountain towns and a considered way back into Taipei.
          </p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          <ItineraryCard data={dayOne} eyebrow="Day one / The approach">
            <div className="mt-8 grid grid-cols-2 gap-5 border-y border-[#2D4030]/15 py-5">
              <Stat label="Distance" value={dayOne.distance} />
              <Stat label="Elevation" value={dayOne.elevation} />
            </div>

            <div className="mt-7 flex-1">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2D4030]/45">
                  Highlights
                </p>
                <Mountain size={17} strokeWidth={1.5} className="text-[#2D4030]/45" />
              </div>
              <p className="mt-3 max-w-xl text-sm leading-6 text-[#2D4030]/72">
                {dayOne.highlights}
              </p>
            </div>

            <div className="mt-8 border-l-2 border-[#8A3324] pl-4 text-sm leading-6 text-[#8A3324]">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em]">
                Planner note
              </p>
              <p className="mt-1">{dayOne.plannerNote}</p>
            </div>
          </ItineraryCard>

          <ItineraryCard data={dayTwo} eyebrow="Day two / Choose your finish">
            <div className="mt-8 flex flex-col gap-4 border-y border-[#2D4030]/15 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="grid grid-cols-2 gap-5">
                <Stat label="Distance" value={dayTwo.distance} />
                <div ref={elevationRef} className="transition-all duration-[240ms] ease-out motion-reduce:transition-none">
                  <Stat label="Elevation" value={selectedMode.elevation} />
                </div>
              </div>

              <ModeToggle mode={dayTwoMode} onChange={changeDayTwoMode} />
            </div>

            <div ref={activityRef} className="mt-7 flex-1 transition-all duration-[240ms] ease-out motion-reduce:transition-none">
              <div className="flex items-center gap-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2D4030]/45">
                  Evening activity
                </p>
                <span className="rounded-full bg-[#8A3324] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                  {selectedMode.tag}
                </span>
              </div>

              <h4 className="mt-3 max-w-lg font-display text-2xl tracking-[-0.035em] text-[#2D4030] sm:text-3xl">
                {selectedMode.activity}
              </h4>
              <p className="mt-3 max-w-xl text-sm leading-6 text-[#2D4030]/72">
                {selectedMode.description}
              </p>
            </div>

            <div className="mt-8 flex items-start gap-3 border-t border-[#2D4030]/15 pt-5 text-xs leading-5 text-[#2D4030]/58">
              <Wind size={16} strokeWidth={1.5} className="mt-0.5 shrink-0 text-[#8A3324]" />
              <p>
                Keep a light layer in your handlebar bag. Maokong cools quickly
                after sunset, even when Taipei is still warm.
              </p>
            </div>
          </ItineraryCard>
        </div>

        <JinshanPlans />

        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-[#2D4030]/15 pt-5 text-xs text-[#2D4030]/52 sm:flex-row sm:items-center">
          <p>Next: choose pace, transfers and route details in Planner.</p>
          <a href="#planner" className="group inline-flex min-h-11 items-center gap-2 font-semibold text-[#2D4030] transition active:scale-[.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A3324] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F5F0]">
            Continue in Planner
            <ChevronRight aria-hidden="true" size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
