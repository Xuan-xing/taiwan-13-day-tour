import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  Bike,
  Check,
  ChevronRight,
  Clock3,
  Download,
  Menu,
  Mountain,
  Package,
  TrainFront,
  Wind,
  X,
} from 'lucide-react';
import { useAppState } from '../state/AppState';
import { JINSHAN_PLANS } from '../data';
import AmbientSectionBackground from '../components/AmbientSectionBackground';
import SectionBikePass from '../components/SectionBikePass';
import SectionProgress from '../components/SectionProgress';

const SECTION_LINKS = [
  ['Route', 'top'],
  ['Itinerary', 'itinerary'],
  ['Planner', 'planner'],
  ['Passport', 'passport'],
  ['CTA', 'cta'],
];


const VISUAL_PRESETS = {
  urban: {
    heroSection: 'bg-[#f7f2e9]',
    heroGrid: 'lg:grid-cols-[1.2fr_.8fr]',
    heroMediaOrder: '',
    heroMedia: 'rounded-[1.75rem]',
    heroAspect: 'sm:aspect-[1.35]',
    storySection: 'bg-rice',
    itinerarySection: 'bg-[#f5f0e8]',
    itineraryGrid: 'lg:grid-cols-[1.15fr_.85fr]',
    plannerSection: 'bg-[#f1eee5]',
  },
  heritage: {
    heroSection: 'bg-[#f5efe7]',
    heroGrid: 'lg:grid-cols-[.88fr_1.12fr]',
    heroMediaOrder: 'lg:order-first',
    heroMedia: 'rounded-[1.25rem]',
    heroAspect: 'sm:aspect-[1.18]',
    storySection: 'bg-[#f1eee5]',
    itinerarySection: 'bg-rice',
    itineraryGrid: 'lg:grid-cols-2',
    plannerSection: 'bg-[#f5f0e8]',
  },
  harbour: {
    heroSection: 'bg-[#edf2ee]',
    heroGrid: 'lg:grid-cols-2',
    heroMediaOrder: 'lg:order-last',
    heroMedia: 'rounded-[3rem]',
    heroAspect: 'sm:aspect-[1.45]',
    storySection: 'bg-[#e8efea]',
    itinerarySection: 'bg-[#eef2ee]',
    itineraryGrid: 'lg:grid-cols-[.95fr_1.05fr]',
    plannerSection: 'bg-rice',
  },
  wild: {
    heroSection: 'bg-[#e8efea]',
    heroGrid: 'lg:grid-cols-[.82fr_1.18fr]',
    heroMediaOrder: 'lg:order-first',
    heroMedia: 'rounded-[2rem]',
    heroAspect: 'sm:aspect-[1.45]',
    storySection: 'bg-rice',
    itinerarySection: 'bg-[#edf2ee]',
    itineraryGrid: 'lg:grid-cols-2',
    plannerSection: 'bg-[#eef2ee]',
  },
  transfer: {
    heroSection: 'bg-[#f1eee5]',
    heroGrid: 'lg:grid-cols-[1.12fr_.88fr]',
    heroMediaOrder: 'lg:order-last',
    heroMedia: 'rounded-[1.25rem]',
    heroAspect: 'sm:aspect-[1.2]',
    storySection: 'bg-[#f1eee5]',
    itinerarySection: 'bg-rice',
    itineraryGrid: 'lg:grid-cols-[1.05fr_.95fr]',
    plannerSection: 'bg-[#f5f0e8]',
  },
  finish: {
    heroSection: 'bg-rice',
    heroGrid: 'lg:grid-cols-[1.05fr_.95fr]',
    heroMediaOrder: '',
    heroMedia: 'rounded-[2.25rem]',
    heroAspect: 'sm:aspect-[1.25]',
    storySection: 'bg-rice',
    itinerarySection: 'bg-[#F5F5F0]',
    itineraryGrid: 'lg:grid-cols-2',
    plannerSection: 'bg-[#f1eee5]',
  },
};

function formatValue(value, fallback = '—') {
  if (value === null || value === undefined || value === '') return fallback;
  return value;
}

function SiteHeader() {
  const { dispatch } = useAppState();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 py-4 sm:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-ink/10 bg-rice/85 px-4 py-3 shadow-[0_12px_40px_rgba(45,64,48,.06)] backdrop-blur-md sm:px-6">
<div className="flex items-center gap-3">
          <a href="#top" className="rounded-sm font-display text-lg font-semibold tracking-tight text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-rice">
            TW<span className="text-terracotta">/</span>13
          </a>
          <button type="button" onClick={() => dispatch({ type: 'SET_ACTIVE_ROUTE', value: 'overview' })} className="inline-flex min-h-9 items-center rounded-full border border-ink/15 px-3 text-[10px] font-bold uppercase tracking-[.16em] text-ink/60 transition hover:border-ink/35 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta">13-day overview</button>
        </div>
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 text-xs font-bold uppercase tracking-[.18em] text-ink/60 md:flex">
          {SECTION_LINKS.map(([label, href]) => (
            <a key={href} href={`#${href}`} className="rounded-sm transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-rice">
              {label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="min-h-11 min-w-11 rounded-full p-2 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-rice md:hidden"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="route-mobile-navigation"
        >
          {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>
        {open && (
          <nav id="route-mobile-navigation" aria-label="Mobile navigation" className="absolute left-4 right-4 top-16 max-h-[calc(100svh-5rem)] overflow-y-auto rounded-3xl border border-ink/10 bg-rice p-4 shadow-xl md:hidden">
            {SECTION_LINKS.map(([label, href]) => (
              <a key={href} href={`#${href}`} onClick={() => setOpen(false)} className="flex min-h-11 items-center rounded-xl px-3 py-3 text-sm font-semibold text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-inset">
                {label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

function RouteModeToggle() {
  const { state, dispatch } = useAppState();

  return (
    <div aria-label="Choose route mood" className="inline-flex rounded-full border border-ink/15 bg-white/60 p-1 text-xs font-semibold" role="group">
      {[
        ['art', 'Art Route'],
        ['wild', 'Wild Route'],
      ].map(([value, label]) => (
        <button
          type="button"
          key={value}
          aria-pressed={state.routeMode === value}
          onClick={() => dispatch({ type: 'SET_ROUTE', value })}
          className={`min-h-11 rounded-full px-4 py-2.5 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-rice ${state.routeMode === value ? 'bg-ink text-rice' : 'text-ink/60 hover:text-ink'}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

function RouteHero({ region }) {
  const firstDay = region.days[0];
  const [lead, detail] = region.title.split(' — ');
  const image = region.heroImage ?? firstDay?.image;
  const heroEyebrow = region.heroEyebrow ?? lead;
  const heroSummary = region.heroSummary ?? region.days.map((day) => day.route).join(' · ');
  const visual = VISUAL_PRESETS[region.visualPreset] ?? VISUAL_PRESETS.finish;

  return (
    <section id="top" className={`relative scroll-mt-24 overflow-hidden px-4 pb-16 pt-32 sm:px-8 sm:pb-24 sm:pt-40 ${visual.heroSection}`}>
      <AmbientSectionBackground variant="rice-flow" />
      <div className={`relative z-10 mx-auto grid max-w-7xl items-end gap-12 ${visual.heroGrid}`}>
        <div>
          <div className="mb-7 flex flex-wrap items-center gap-4">
            <RouteModeToggle />
            <span className="text-[10px] font-bold uppercase tracking-[.25em] text-ink/45">Site {String(region.siteNumber).padStart(2, '0')} · Day {region.dayRange[0]}–{region.dayRange[1]}</span>
          </div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[.28em]" style={{ color: region.accent }}>{heroEyebrow}</p>
          <h1 className="max-w-4xl font-display text-[clamp(3.1rem,8vw,7.8rem)] leading-[.9] tracking-[-.07em] text-ink">
            {detail ? <>{detail}<br /><em style={{ color: region.accent }}>{firstDay?.title}</em></> : firstDay?.title}
          </h1>
          <p className="mt-8 max-w-xl text-base leading-7 text-ink/65 sm:text-lg">{heroSummary}</p>
          <p className="mt-4 max-w-xl text-xs font-semibold leading-5 text-ink/45">{region.days.map((day) => day.route).join(' · ')}</p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a href="#itinerary" className="group inline-flex min-h-11 items-center gap-3 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-rice transition active:scale-[.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-rice">
              Explore the route <ArrowDownRight size={16} aria-hidden="true" className="transition group-hover:rotate-45" />
            </a>
            <span className="text-xs font-semibold text-ink/50">{region.dataStatus === 'pending-user-data' ? 'Details to be confirmed' : 'Field notes · Taiwan'}</span>
          </div>
        </div>
        <div className={`relative overflow-hidden bg-[#dfe8e0] ${visual.heroMediaOrder} ${visual.heroMedia} aspect-[1.08] ${visual.heroAspect}`}>
          {image ? (
            <img src={image} alt={region.heroImageAlt ?? firstDay.imageAlt} loading="eager" decoding="async" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
          ) : (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(138,51,36,.3),transparent_35%),linear-gradient(135deg,#dfe8e0,#8fa89a)]" aria-hidden="true" />
          )}
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-ink/5 to-ink/70" />
          <div className="absolute inset-x-5 bottom-5 z-10 flex items-end justify-between text-rice sm:inset-x-7 sm:bottom-7">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.24em] text-rice/60">Now riding</p>
              <p className="mt-1 font-display text-2xl">{region.title}</p>
            </div>
            <div className="rounded-full border border-rice/30 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.18em]">Scroll ↓</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RouteStory({ region }) {
  const visual = VISUAL_PRESETS[region.visualPreset] ?? VISUAL_PRESETS.finish;
  return (
    <section id="journey" className={`relative scroll-mt-24 overflow-hidden px-4 py-16 sm:px-8 sm:py-24 ${visual.storySection}`}>
      <AmbientSectionBackground variant="contour-lines" />
      <SectionBikePass direction={region.siteNumber % 2 === 0 ? 'rtl' : 'ltr'} className="top-24 sm:top-32" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="section-kicker">The route, in motion</p>
            <h2 className="section-title">{region.storyTitle ?? 'One region. Many horizons.'}</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-ink/55">{region.storyBody ?? 'A shared visual language for thirteen days of city streets, coastlines, islands and mountain transfers.'}</p>
        </div>
        <div className="flex items-center gap-4 border-t border-ink/10 pt-5 text-xs text-ink/45">
          <span className="h-px w-12 bg-terracotta" />
          {region.days.map((day) => `Day ${day.day}: ${day.route}`).join('  ·  ')}
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="border-l border-ink/15 pl-4 first:border-l-0 first:pl-0">
      <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-ink/45">{label}</p>
      <p className="mt-1.5 font-display text-2xl tracking-[-.03em] text-ink">{formatValue(value)}</p>
    </div>
  );
}

function RouteImage({ day }) {
  return (
    <div className="relative aspect-[16/9] overflow-hidden bg-[#dfe8e0] sm:aspect-[16/10]">
      {day.image ? (
        <img src={day.image} alt={day.imageAlt} loading="lazy" decoding="async" className="h-full w-full object-cover" />
      ) : (
        <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(138,51,36,.26),transparent_36%),linear-gradient(135deg,#dfe8e0,#a2b8a7)]" aria-hidden="true" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
      <span className="absolute bottom-5 left-5 text-[10px] font-bold uppercase tracking-[.24em] text-rice/80">Day {String(day.day).padStart(2, '0')}</span>
    </div>
  );
}

function JinshanPlans() {
  return (
    <div className="mt-20 border-t border-ink/15 pt-8 sm:mt-28">
      <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-14">
        <div>
          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.25em] text-terracotta"><span className="h-px w-9 bg-terracotta" />When you reach Jinshan</div>
          <h3 className="mt-5 max-w-md font-display text-[clamp(2.8rem,5vw,5.4rem)] leading-[.88] tracking-[-.07em] text-ink">Choose your<br /><em className="text-terracotta">next good turn.</em></h3>
          <p className="mt-5 max-w-sm text-sm leading-6 text-ink/65">Jinshan is the decision point between the north coast and Jiufen. Pause for food and hot springs, make a short Yehliu loop, or keep rolling before the light fades.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {JINSHAN_PLANS.map((plan) => (
            <article key={plan.id} className="border-t border-ink/15 pt-4">
              <div className="relative aspect-[16/9] overflow-hidden bg-[#dfe8e0] sm:aspect-[3/2]">
                <img src={plan.image} alt={plan.imageAlt} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-[.16em] text-rice">{plan.tag}</span>
              </div>
              <p className="mt-4 text-[10px] font-bold uppercase tracking-[.2em] text-terracotta">{plan.eyebrow}</p>
              <h4 className="mt-2 font-display text-2xl leading-none tracking-[-.04em] text-ink">{plan.title}</h4>
              <p className="mt-3 text-xs leading-5 text-ink/60">{plan.route}</p>
              <p className="mt-3 text-sm leading-6 text-ink/70">{plan.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function RouteItinerary({ region }) {
  const visual = VISUAL_PRESETS[region.visualPreset] ?? VISUAL_PRESETS.finish;
  const modeDay = region.days.find((day) => day.modeOptions);
  const [mode, setMode] = useState('pro');
  const selectedMode = modeDay?.modeOptions?.[mode];

  return (
    <section id="itinerary" className={`relative scroll-mt-24 overflow-hidden px-4 py-20 sm:px-8 sm:py-28 ${visual.itinerarySection}`}>
      <AmbientSectionBackground variant="coastal-wave" />
      <SectionBikePass direction={region.siteNumber % 2 === 0 ? 'ltr' : 'rtl'} className="top-24 sm:top-32" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 grid gap-7 border-b border-ink/15 pb-9 lg:grid-cols-[1fr_.45fr] lg:items-end">
          <div>
            <p className="section-kicker">A {region.days.length}-day field note</p>
            <h2 className="section-title">Read the road.<br /><em>Choose your rhythm.</em></h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-ink/60">Every card is driven by the regional itinerary data. Transport notes remain practical planning references until verified.</p>
        </div>

        <div className={`grid items-stretch gap-6 ${visual.itineraryGrid}`}>
          {region.days.map((day) => {
            const isPending = day.verificationStatus === 'pending-user-data';
            const modeDetails = day.modeOptions ? selectedMode : null;
            const elevation = modeDetails?.elevationM ?? day.elevationM;
            return (
              <article key={day.id} className="flex h-full flex-col overflow-hidden border border-ink/15 bg-rice">
                <RouteImage day={day} />
                <div className="flex flex-1 flex-col p-5 sm:p-7">
                  <p className="text-[10px] font-bold uppercase tracking-[.23em]" style={{ color: region.accent }}>Day {String(day.day).padStart(2, '0')} · {isPending ? 'Details pending' : 'Route note'}</p>
                  <p className="mt-4 text-xs font-medium leading-5 text-ink/60">{day.route}</p>
                  <h3 className="mt-4 font-display text-[clamp(2rem,3.5vw,3.25rem)] leading-[.92] tracking-[-.055em] text-ink">{day.title}</h3>
                  {day.modeOptions && (
                    <div className="mt-6 flex flex-wrap items-center gap-2 border-y border-ink/15 py-4" role="group" aria-label="Choose evening mode">
                      {Object.entries(day.modeOptions).map(([value, option]) => (
                        <button key={value} type="button" aria-pressed={mode === value} onClick={() => setMode(value)} className={`min-h-11 rounded-full px-4 py-2 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-rice ${mode === value ? 'bg-ink text-rice' : 'border border-ink/15 text-ink/60 hover:text-ink'}`}>
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}
                  <div className="mt-7 grid grid-cols-3 gap-4 border-y border-ink/15 py-5">
                    <Stat label="Distance" value={day.distanceKm ? `${day.distanceKm} km` : 'Pending'} />
                    <Stat label="Elevation" value={elevation ? `${elevation} m` : 'Pending'} />
                    <Stat label="Ride time" value={day.estimatedRideTime} />
                  </div>
                  {modeDetails && (
                    <div className="mt-6 border-l-2 border-terracotta pl-4">
                      <p className="text-[10px] font-bold uppercase tracking-[.18em] text-terracotta">{modeDetails.tag}</p>
                      <h4 className="mt-2 font-display text-2xl tracking-[-.035em] text-ink">{modeDetails.activity}</h4>
                      <p className="mt-2 text-sm leading-6 text-ink/70">{modeDetails.description}</p>
                    </div>
                  )}
                  {!modeDetails && (
                    <div className="mt-7 flex-1">
                      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.2em] text-ink/45"><Mountain size={16} aria-hidden="true" /> Highlights</div>
                      {day.highlights?.length ? (
                        <ul className="mt-3 space-y-2 text-sm leading-6 text-ink/72">{day.highlights.map((highlight) => <li key={highlight}>— {highlight}</li>)}</ul>
                      ) : (
                        <p className="mt-3 text-sm leading-6 text-ink/55">Details will be added after the regional itinerary is supplied.</p>
                      )}
                    </div>
                  )}
                  <div className="mt-8 border-l-2 pl-4 text-sm leading-6" style={{ borderColor: region.accent, color: region.accent }}>
                    <p className="text-[10px] font-bold uppercase tracking-[.18em]">Planner note</p>
                    <p className="mt-1">{day.plannerNote}</p>
                  </div>
                  {isPending && <p className="mt-5 text-xs font-semibold uppercase tracking-[.16em] text-ink/45">Pending user itinerary data</p>}
                </div>
              </article>
            );
          })}
        </div>
        {region.id === 'north-coast-taipei' && <JinshanPlans />}
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-ink/15 pt-5 text-xs text-ink/55 sm:flex-row sm:items-center">
          <p>Next: review transfers, luggage and bike logistics in Planner.</p>
          <a href="#planner" className="group inline-flex min-h-11 items-center gap-2 font-semibold text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-rice">Continue in Planner <ChevronRight size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-1" /></a>
        </div>
      </div>
    </section>
  );
}

function RoutePlanner({ region }) {
  const visual = VISUAL_PRESETS[region.visualPreset] ?? VISUAL_PRESETS.finish;
  const [selectedDayId, setSelectedDayId] = useState(region.days[0]?.id);
  const [style, setStyle] = useState('road');
  const [pace, setPace] = useState('steady');
  const selectedDay = useMemo(() => region.days.find((day) => day.id === selectedDayId) ?? region.days[0], [region.days, selectedDayId]);

  return (
    <section id="planner" className={`relative scroll-mt-24 overflow-hidden px-4 py-20 sm:px-8 sm:py-28 ${visual.plannerSection}`}>
      <AmbientSectionBackground variant="contour-lines" />
      <SectionBikePass direction={region.siteNumber % 2 === 0 ? 'rtl' : 'ltr'} className="top-20 sm:top-28" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl"><p className="section-kicker">Build your rhythm</p><h2 className="section-title">A plan that fits<br /><em>your kind of day.</em></h2></div>
        <div className="flex flex-col gap-5 border border-ink/10 bg-white/65 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[.24em] text-ink/45">Riding style</p>
            <div className="flex rounded-full bg-rice p-1" role="group" aria-label="Choose riding style">
              {[['road', 'Road'], ['gravel', 'Gravel']].map(([value, label]) => <button key={value} type="button" aria-pressed={style === value} onClick={() => setStyle(value)} className={`min-h-11 rounded-full px-4 py-2 text-xs font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta ${style === value ? 'bg-ink text-rice' : 'text-ink/55'}`}>{label}</button>)}
            </div>
          </div>
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[.24em] text-ink/45">Pace</p>
            <div className="flex gap-3 text-xs font-semibold" role="group" aria-label="Choose riding pace">
              {[['relaxed', 'Slow burn'], ['steady', 'Steady'], ['push', 'Push']].map(([value, label]) => <button key={value} type="button" aria-pressed={pace === value} onClick={() => setPace(value)} className={`min-h-11 border-b-2 px-1 pb-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta ${pace === value ? 'border-terracotta text-ink' : 'border-transparent text-ink/45'}`}>{label}</button>)}
            </div>
          </div>
        </div>
        <div className="mt-7 grid gap-5 lg:grid-cols-[.8fr_1.2fr]">
          <div className="border border-ink/10 bg-rice p-5 sm:p-7">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.2em] text-ink/45"><Clock3 size={15} aria-hidden="true" /> Select a day</div>
            <div className="mt-5 space-y-2">
              {region.days.map((day) => <button key={day.id} type="button" onClick={() => setSelectedDayId(day.id)} aria-pressed={selectedDay?.id === day.id} className={`flex min-h-11 w-full items-center justify-between border-b border-ink/10 px-2 py-3 text-left text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta ${selectedDay?.id === day.id ? 'font-semibold text-ink' : 'text-ink/55'}`}><span>Day {String(day.day).padStart(2, '0')} · {day.title}</span><ChevronRight size={15} aria-hidden="true" /></button>)}
            </div>
          </div>
          <div className="border border-ink/10 bg-rice p-5 sm:p-7">
            <div className="flex items-start justify-between gap-4"><div><p className="section-kicker">Field logistics</p><h3 className="mt-2 font-display text-3xl tracking-[-.04em] text-ink">{selectedDay?.title}</h3></div><Bike size={22} className="text-ink/40" aria-hidden="true" /></div>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              {[
                ['Season', selectedDay?.seasonalNote, Wind],
                ['Luggage', selectedDay?.luggageTransfer, Package],
                ['Bike rental', selectedDay?.bikeRental, Bike],
                ['Connection', selectedDay?.transitConnection, TrainFront],
              ].map(([label, value, Icon]) => <div key={label} className="border-t border-ink/10 pt-4"><div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.18em] text-ink/45"><Icon size={14} aria-hidden="true" /> {label}</div><p className="mt-2 text-sm leading-6 text-ink/65">{formatValue(value, 'Pending itinerary details.')}</p></div>)}
            </div>
            <div className="mt-6 border-l-2 border-terracotta pl-4 text-sm leading-6 text-terracotta"><p className="text-[10px] font-bold uppercase tracking-[.18em]">Transport plan</p><p className="mt-1">{formatValue(selectedDay?.transportPlan)}</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoutePassport({ region }) {
  const { state, dispatch } = useAppState();
  const [preview, setPreview] = useState('');
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const lastFocusedRef = useRef(null);
  const previewUrlRef = useRef('');
  const routeBadges = region.passportStops?.map((stop) => state.badges.find((badge) => badge.id === stop.id) ?? stop) ?? state.badges;
  const activeBadge = routeBadges.find((badge) => badge.id === state.activeBadgeId);

  const releasePreviewUrl = () => {
    if (!previewUrlRef.current) return;
    URL.revokeObjectURL(previewUrlRef.current);
    previewUrlRef.current = '';
  };

  useEffect(() => () => releasePreviewUrl(), []);

  useEffect(() => {
    if (state.uploadState !== 'verifying') return undefined;
    const timer = window.setTimeout(() => dispatch({ type: 'VERIFY_SUCCESS' }), 1600);
    return () => window.clearTimeout(timer);
  }, [state.uploadState, dispatch]);

  useEffect(() => {
    if (!state.isUploadModalOpen) return undefined;
    lastFocusedRef.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => closeButtonRef.current?.focus());
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeUpload();
        return;
      }
      if (event.key !== 'Tab' || !dialogRef.current) return;
      const focusable = [...dialogRef.current.querySelectorAll('button:not([disabled]), input:not([disabled]), [href], [tabindex]:not([tabindex="-1"])')].filter((element) => element.offsetParent !== null);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      requestAnimationFrame(() => lastFocusedRef.current?.focus?.());
    };
  }, [state.isUploadModalOpen, dispatch]);

  const closeUpload = () => {
    releasePreviewUrl();
    setPreview('');
    dispatch({ type: 'CLOSE_UPLOAD' });
  };

  const choosePhoto = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    releasePreviewUrl();
    const url = URL.createObjectURL(file);
    previewUrlRef.current = url;
    setPreview(url);
    dispatch({ type: 'SET_PREVIEW', value: url });
    dispatch({ type: 'START_VERIFY' });
  };

  const goToPlanner = (event) => {
    event.preventDefault();
    closeUpload();
    requestAnimationFrame(() => document.getElementById('planner')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' }));
  };

  return (
    <section id="passport" className="relative scroll-mt-24 overflow-hidden bg-ink px-4 py-20 text-rice sm:px-8 sm:py-28">
      <AmbientSectionBackground variant="passport-grain" />
      <div className="relative z-10 mx-auto max-w-7xl"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="mb-5 text-xs font-bold uppercase tracking-[.28em] text-[#c4d4c5]">Digital passport / {routeBadges.length} stamps</p><h2 className="font-display text-[clamp(3rem,6vw,6.5rem)] leading-[.9] tracking-[-.07em]">Leave with<br /><em className="text-[#c4d4c5]">proof.</em></h2><p className="mt-7 max-w-sm text-base leading-7 text-rice/60">Collect the landmarks that made this route yours. Choose a badge to open the camera window and verify a moment.</p></div><div className="grid gap-3 sm:grid-cols-2">{routeBadges.map((badge) => { const locked = badge.state === 'locked'; return <button key={badge.id} type="button" disabled={locked} aria-disabled={locked} onClick={() => dispatch({ type: 'OPEN_UPLOAD', value: badge.id })} className={`group rounded-3xl border p-5 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rice focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${locked ? 'cursor-not-allowed border-rice/10 opacity-45' : 'border-rice/15 hover:border-rice/40'}`}><div className="flex items-start justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-full border border-current text-xl" style={{ color: badge.color }}>{badge.icon}</span>{badge.state === 'verified' ? <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-[.14em] text-[#c4d4c5]"><Check size={13} aria-hidden="true" /> Verified</span> : <ArrowUpRight size={16} className="text-rice/40" aria-hidden="true" />}</div><h3 className="mt-8 font-display text-2xl">{badge.name}</h3><p className="mt-1 text-xs text-rice/50">{badge.place}</p></button>; })}</div></div></div>
      {state.isUploadModalOpen && activeBadge && <div className="fixed inset-0 z-50 grid place-items-center bg-ink/70 px-4 backdrop-blur-sm"><div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="route-passport-title" aria-describedby="route-passport-status" className="relative max-h-[90svh] w-full max-w-md overflow-y-auto rounded-[2rem] bg-rice p-5 text-ink shadow-2xl sm:p-7"><button ref={closeButtonRef} type="button" onClick={closeUpload} aria-label="Close upload modal" className="absolute right-5 top-5 min-h-11 min-w-11 rounded-full p-2 text-ink/50 hover:bg-ink/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"><X size={18} aria-hidden="true" /></button><p id="route-passport-title" className="pr-12 text-[10px] font-bold uppercase tracking-[.24em] text-ink/45">Passport stamp / {activeBadge.name}</p><div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-2xl bg-ink"><div className="absolute inset-5 border border-rice/50" />{preview && <img src={preview} alt={`Selected photo for ${activeBadge.name}`} decoding="async" className="h-full w-full object-cover opacity-70" />}<div id="route-passport-status" role="status" aria-live="polite" aria-busy={state.uploadState === 'verifying'} className="absolute inset-x-0 bottom-5 text-center text-xs font-bold uppercase tracking-[.2em] text-rice">{state.uploadState === 'verifying' ? 'Verifying landmark...' : state.uploadState === 'success' ? 'Landmark verified' : 'Frame your landmark'}</div></div>{state.uploadState === 'success' ? <div className="mt-5 flex flex-col gap-3 rounded-xl bg-[#dfe8e0] p-4 text-sm sm:flex-row sm:items-center sm:justify-between"><div><span className="flex items-center gap-2 font-semibold"><Check size={17} aria-hidden="true" /> Badge unlocked</span><p className="mt-1 text-xs text-ink/60">Next: choose pace and logistics in Planner.</p></div><a href="#planner" onClick={goToPlanner} className="inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-4 py-2 text-xs font-semibold text-rice focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta">Continue to Planner</a></div> : <label htmlFor="route-passport-upload" className="mt-5 flex min-h-11 cursor-pointer items-center justify-between rounded-xl bg-ink px-4 py-3 text-sm font-semibold text-rice focus-within:ring-2 focus-within:ring-terracotta">{state.uploadState === 'verifying' ? 'Checking your frame' : 'Choose a photo'}<Download size={17} aria-hidden="true" /><input id="route-passport-upload" type="file" accept="image/*" className="sr-only" onChange={choosePhoto} disabled={state.uploadState === 'verifying'} aria-label="Choose a landmark photo" /></label>}</div></div>}
    </section>
  );
}

function RouteCTA({ region }) {
  const { state, dispatch } = useAppState();
  const timeoutRef = useRef(null);
  useEffect(() => () => timeoutRef.current && window.clearTimeout(timeoutRef.current), []);
  const download = () => {
    dispatch({ type: 'SHOW_TOAST', value: 'Demo only: GPX download is not connected yet.' });
    timeoutRef.current = window.setTimeout(() => dispatch({ type: 'CLEAR_TOAST' }), 3000);
  };

  return (
    <section id="cta" className="relative scroll-mt-24 overflow-hidden bg-terracotta px-4 py-20 text-rice sm:px-8 sm:py-24">
      <AmbientSectionBackground variant="terracotta-glow" />
      <SectionBikePass direction={region.siteNumber % 2 === 0 ? 'ltr' : 'rtl'} className="top-24 sm:top-32" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-between gap-12 md:flex-row md:items-end"><div><p className="mb-5 text-xs font-bold uppercase tracking-[.28em] text-rice/60">Your next good turn</p><h2 className="max-w-3xl font-display text-[clamp(3.3rem,7vw,7rem)] leading-[.88] tracking-[-.07em]">Take the long way<br /><em>home.</em></h2></div><div className="flex max-w-xs flex-col gap-3"><button type="button" onClick={download} className="flex min-h-11 items-center justify-between rounded-full bg-rice px-5 py-4 text-left text-sm font-semibold text-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rice">Download GPX route <span className="ml-3 text-[10px] font-bold uppercase tracking-[.12em] text-terracotta/60">Demo</span><Download size={18} aria-hidden="true" /></button><a href="mailto:hello@taiwan-two-worlds.travel" className="flex min-h-11 items-center justify-between rounded-full border border-rice/30 px-5 py-4 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rice">Book a local transfer <ArrowUpRight size={18} aria-hidden="true" /></a><p className="px-2 pt-2 text-xs leading-5 text-rice/60">GPX export is a demo. The route is based on source-provided planning data and still needs final transport verification.</p></div></div>
      {state.toast && <div role="status" aria-live="polite" className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full bg-ink px-5 py-3 text-xs font-semibold text-rice">{state.toast}</div>}
    </section>
  );
}

export default function RouteSitePage({ region }) {
  if (!region) return null;
  return (
    <>
      <SiteHeader />
      <SectionProgress />
      <main>
        <RouteHero region={region} />
        <RouteStory region={region} />
        <RouteItinerary region={region} />
        <RoutePlanner region={region} />
        <RoutePassport region={region} />
        <RouteCTA region={region} />
      </main>
      <footer className="flex flex-col justify-between gap-4 bg-ink px-4 py-6 text-xs text-rice/50 sm:flex-row sm:px-8"><span>TW/13 · Taiwan, one island / six route stories</span><span>Made for the curious cyclist</span></footer>
    </>
  );
}


