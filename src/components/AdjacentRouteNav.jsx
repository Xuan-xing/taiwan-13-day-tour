import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useAppState } from '../state/AppState';
import { getAdjacentRoutes } from '../app/routeRegistry';

export default function AdjacentRouteNav() {
  const { state, dispatch } = useAppState();
  const { previous, next } = getAdjacentRoutes(state.activeRouteId);

  const selectRoute = (route) => {
    if (!route) return;
    dispatch({ type: 'SET_ACTIVE_ROUTE', value: route.id });
  };

  return (
    <nav aria-label="Adjacent route navigation" className="flex flex-col gap-3 border-t border-ink/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
      <button
        type="button"
        disabled={!previous}
        aria-label={previous ? `Go to ${previous.title}` : 'No previous route'}
        onClick={() => selectRoute(previous)}
        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-left text-xs font-semibold text-ink transition hover:border-ink/35 disabled:cursor-not-allowed disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-rice"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        <span>{previous ? `Previous · Site ${String(previous.siteNumber).padStart(2, '0')}` : 'First route'}</span>
      </button>
      <span className="text-center text-[10px] font-bold uppercase tracking-[.2em] text-ink/40">Choose the next horizon</span>
      <button
        type="button"
        disabled={!next}
        aria-label={next ? `Go to ${next.title}` : 'No next route'}
        onClick={() => selectRoute(next)}
        className="inline-flex min-h-11 items-center justify-end gap-2 rounded-full border border-ink/15 px-4 py-2 text-right text-xs font-semibold text-ink transition hover:border-ink/35 disabled:cursor-not-allowed disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-rice"
      >
        <span>{next ? `Next · Site ${String(next.siteNumber).padStart(2, '0')}` : 'Final route'}</span>
        <ArrowRight size={16} aria-hidden="true" />
      </button>
    </nav>
  );
}

