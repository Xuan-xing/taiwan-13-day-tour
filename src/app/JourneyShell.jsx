import { useEffect, useRef } from 'react';
import { useAppState } from '../state/AppState';
import { getRouteById, ROUTE_REGISTRY } from './routeRegistry';
import RoutePicker from '../components/RoutePicker';
import AdjacentRouteNav from '../components/AdjacentRouteNav';
import RouteTransitionOverlay from '../components/RouteTransitionOverlay';

export default function JourneyShell({ children, displayRouteId, transition, onTransitionCover, onTransitionComplete }) {
  const { state } = useAppState();
  const activeRoute = getRouteById(state.activeRouteId);
  const previousRouteRef = useRef(state.activeRouteId);
  const previousIndex = ROUTE_REGISTRY.findIndex((route) => route.id === previousRouteRef.current);
  const currentIndex = ROUTE_REGISTRY.findIndex((route) => route.id === state.activeRouteId);
  const transitionDirection = currentIndex >= previousIndex ? 'forward' : 'backward';

  useEffect(() => {
    if (!activeRoute) return;
    document.title = `${activeRoute.title} · Taiwan Bike Tour`;
  }, [activeRoute]);

  useEffect(() => {
    if (previousRouteRef.current === state.activeRouteId) return;
    previousRouteRef.current = state.activeRouteId;
  }, [state.activeRouteId]);

  return (
    <div className="journey-shell relative min-h-screen overflow-x-hidden">
      <div className="relative z-30 mx-auto max-w-7xl px-4 pt-24 sm:px-8 sm:pt-28">
        <RoutePicker />
        <p className="sr-only" aria-live="polite">
          Selected route: {activeRoute?.title ?? 'Taiwan bike tour'}.
        </p>
      </div>
      <div key={displayRouteId} className={`route-transition route-transition--${transitionDirection}`}>
        {children}
      </div>
      <div className="relative z-20 mx-auto max-w-7xl px-4 pb-8 sm:px-8">
        <AdjacentRouteNav />
      </div>
      <RouteTransitionOverlay transition={transition} onCover={onTransitionCover} onComplete={onTransitionComplete} />
    </div>
  );
}
