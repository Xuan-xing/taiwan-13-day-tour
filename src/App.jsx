import { useCallback, useEffect, useRef, useState } from 'react';
import { AppStateProvider, useAppState } from './state/AppState';
import JourneyShell from './app/JourneyShell';
import OverviewPage from './sites/overview/OverviewPage';
import TaichungPage from './sites/taichung/TaichungPage';
import TainanPage from './sites/tainan/TainanPage';
import KaohsiungPage from './sites/kaohsiung/KaohsiungPage';
import GreenIslandTaitungPage from './sites/green-island-taitung/GreenIslandTaitungPage';
import SuAoYilanPage from './sites/su-ao-yilan/SuAoYilanPage';
import NorthCoastTaipeiPage from './sites/north-coast-taipei/NorthCoastTaipeiPage';

const ROUTE_PAGES = {
  overview: OverviewPage,
  taichung: TaichungPage,
  tainan: TainanPage,
  kaohsiung: KaohsiungPage,
  'green-island-taitung': GreenIslandTaitungPage,
  'su-ao-yilan': SuAoYilanPage,
  'north-coast-taipei': NorthCoastTaipeiPage,
};

function AppInner() {
  const { state } = useAppState();
  const [displayRouteId, setDisplayRouteId] = useState(state.activeRouteId);
  const [transition, setTransition] = useState(null);
  const activeRouteRef = useRef(state.activeRouteId);

  useEffect(() => {
    activeRouteRef.current = state.activeRouteId;
  }, [state.activeRouteId]);

  useEffect(() => {
    if (state.activeRouteId === displayRouteId || transition) return;
    setTransition({
      id: `${displayRouteId}-${state.activeRouteId}`,
      from: displayRouteId,
      to: state.activeRouteId,
    });
  }, [state.activeRouteId, displayRouteId, transition]);

  const handleCover = useCallback(() => {
    setDisplayRouteId(activeRouteRef.current);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const handleComplete = useCallback(() => {
    setTransition(null);
  }, []);

  const ActivePage = ROUTE_PAGES[displayRouteId] ?? OverviewPage;

  return (
    <JourneyShell
      displayRouteId={displayRouteId}
      transition={transition}
      onTransitionCover={handleCover}
      onTransitionComplete={handleComplete}
    >
      <div className="relative min-h-screen overflow-x-hidden bg-rice text-ink">
        <ActivePage />
      </div>
    </JourneyShell>
  );
}

export default function App() {
  return (
    <AppStateProvider>
      <AppInner />
    </AppStateProvider>
  );
}
