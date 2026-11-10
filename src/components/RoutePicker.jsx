import { useAppState } from '../state/AppState';
import { OPERATIONS_ROUTE_ID, OVERVIEW_ROUTE_ID, ROUTE_REGISTRY } from '../app/routeRegistry';

export default function RoutePicker() {
  const { state, dispatch } = useAppState();

  return (
    <nav aria-label="Choose an overview or route region" className="rounded-2xl border border-ink/10 bg-rice/90 p-2 shadow-[0_8px_28px_rgba(45,64,48,.05)]">
      <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="list">
        {ROUTE_REGISTRY.map((route) => {
          const selected = state.activeRouteId === route.id;
          const isOverview = route.id === OVERVIEW_ROUTE_ID;
          const isOperations = route.id === OPERATIONS_ROUTE_ID;
          return (
            <div key={route.id} role="listitem">
              <button
                type="button"
                aria-pressed={selected}
                aria-current={selected ? 'page' : undefined}
                onClick={() => dispatch({ type: 'SET_ACTIVE_ROUTE', value: route.id })}
                className={`min-h-11 shrink-0 rounded-xl border px-3 py-2 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-rice ${selected ? 'border-ink bg-ink text-rice' : 'border-transparent text-ink/60 hover:border-ink/15 hover:text-ink'}`}
              >
                <span className="block text-[9px] font-bold uppercase tracking-[.18em] opacity-60">{isOverview ? 'Journey / 13 days' : isOperations ? 'Research / Feasibility' : `Site ${String(route.siteNumber).padStart(2, '0')} · Day ${route.dayRange[0]}–${route.dayRange[1]}`}</span>
                <span className="mt-1 block max-w-[13rem] text-xs font-semibold">{route.title}</span>
              </button>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
