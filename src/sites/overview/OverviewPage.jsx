import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { useAppState } from '../../state/AppState';
import { REGION_MATRIX, ITINERARY_DAYS, DAY_COUNT } from '../../data/itinerary/index.js';
import AmbientSectionBackground from '../../components/AmbientSectionBackground';
import TaiwanJourneyMap from '../../components/TaiwanJourneyMap';

export default function OverviewPage() {
  const { dispatch } = useAppState();
  const selectRoute = (routeId) => {
    dispatch({ type: 'SET_ACTIVE_ROUTE', value: routeId });
    window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'auto' }));
  };

  return (
    <>
      <header className="relative overflow-hidden bg-[#f7f2e9] px-4 pb-20 pt-24 sm:px-8 sm:pb-28 sm:pt-32">
        <AmbientSectionBackground variant="rice-flow" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <div>
            <p className="section-kicker">Taiwan / one island / {DAY_COUNT} days</p>
            <h1 className="mt-6 max-w-4xl font-display text-[clamp(3.7rem,9vw,8.5rem)] leading-[.86] tracking-[-.075em] text-ink">One island,<br /><em className="text-terracotta">thirteen days.</em></h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-ink/65 sm:text-lg">A single cycling story that moves from west coast culture to island water, east coast transfers and a northbound finish in the city lights.</p>
            <a href="#overview-map" className="group mt-9 inline-flex min-h-11 items-center gap-3 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-rice focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-rice">Explore the route <ArrowDownRight size={16} aria-hidden="true" className="transition group-hover:rotate-45" /></a>
          </div>
          <div className="border-l border-ink/15 pl-6 lg:mb-3">
            <p className="text-[10px] font-bold uppercase tracking-[.25em] text-terracotta">The full line</p>
            <p className="mt-5 max-w-sm font-display text-4xl leading-[.95] tracking-[-.05em] text-ink">Taichung to Taipei,<br /><em>with the island in between.</em></p>
            <p className="mt-5 text-sm leading-6 text-ink/60">{ITINERARY_DAYS.length} day notes · {REGION_MATRIX.length} route chapters · one shared visual language.</p>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-rice px-4 py-16 sm:px-8 sm:py-24">
          <AmbientSectionBackground variant="contour-lines" />
          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div><p className="section-kicker">The route, drawn slowly</p><h2 className="section-title">Follow the line.<br /><em>Choose a chapter.</em></h2></div>
              <p className="max-w-sm text-sm leading-6 text-ink/55">The map is a visual guide rather than a GIS map. Select any node to open that region’s detailed route page.</p>
            </div>
            <TaiwanJourneyMap onSelectRoute={selectRoute} />
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#f1eee5] px-4 py-20 sm:px-8 sm:py-28">
          <AmbientSectionBackground variant="coastal-wave" />
          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mb-10 max-w-2xl"><p className="section-kicker">Six route chapters</p><h2 className="section-title">Read the journey<br /><em>in six movements.</em></h2></div>
            <div className="grid gap-0 border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-3">
              {REGION_MATRIX.map((region) => (
                <article key={region.id} className="border-b border-ink/15 p-5 pl-0 sm:p-7 sm:pl-0 lg:pr-8">
                  <button type="button" onClick={() => selectRoute(region.id)} className="group block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-4 focus-visible:ring-offset-[#f1eee5]">
                    <div className="flex items-center justify-between"><p className="text-[10px] font-bold uppercase tracking-[.22em] text-terracotta">Site {String(region.siteNumber).padStart(2, '0')} · Day {region.dayRange[0]}–{region.dayRange[1]}</p><ArrowUpRight size={17} aria-hidden="true" className="text-ink/35 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div>
                    <h3 className="mt-5 max-w-sm font-display text-3xl leading-[.95] tracking-[-.045em] text-ink">{region.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-ink/60">{region.heroSummary}</p>
                    <p className="mt-6 text-xs font-semibold text-ink/45">{region.days.length} field notes · {region.dataStatus.replaceAll('-', ' ')}</p>
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
