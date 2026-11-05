import { createContext, useContext, useMemo, useReducer } from 'react';
import { BADGES, ITINERARIES } from '../data';
import { getRegionById, OVERVIEW_ROUTE_ID, REGION_MATRIX } from '../data/itinerary/index.js';

const badgeForStop = (stop, index, previousBadges = []) => {
  const previous = previousBadges.find((badge) => badge.id === stop.id);
  return {
    ...stop,
    state: previous?.state ?? stop.status ?? (index < 2 ? 'available' : 'locked'),
  };
};

const badgesForRoute = (routeId, previousBadges = []) => {
  const source = routeId === OVERVIEW_ROUTE_ID
    ? REGION_MATRIX.flatMap((region) => region.passportStops ?? []).slice(0, 6)
    : getRegionById(routeId)?.passportStops;
  return source?.length ? source.map((stop, index) => badgeForStop(stop, index, previousBadges)) : BADGES;
};

const initialRouteId = OVERVIEW_ROUTE_ID;
const initialState = {
  routeMode: 'art',
  activeRouteId: initialRouteId,
  ridingStyle: 'road',
  pace: 'steady',
  selectedItineraryId: 'art-01',
  activeSection: 'top',
  badges: badgesForRoute(initialRouteId),
  activeBadgeId: null,
  isUploadModalOpen: false,
  uploadState: 'idle',
  uploadPreviewUrl: '',
  toast: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_ACTIVE_ROUTE': {
      const routeExists = action.value === OVERVIEW_ROUTE_ID || REGION_MATRIX.some((region) => region.id === action.value);
      return routeExists
        ? { ...state, activeRouteId: action.value, activeSection: 'top', badges: badgesForRoute(action.value, state.badges), activeBadgeId: null, isUploadModalOpen: false, uploadState: 'idle', uploadPreviewUrl: '' }
        : state;
    }
    case 'SET_ROUTE': {
      const next = action.value;
      const first = ITINERARIES.find((item) => item.route === next);
      return { ...state, routeMode: next, selectedItineraryId: first?.id ?? state.selectedItineraryId };
    }
    case 'SET_STYLE':
      return { ...state, ridingStyle: action.value };
    case 'SET_PACE':
      return { ...state, pace: action.value };
    case 'SELECT_ITINERARY':
      return { ...state, selectedItineraryId: action.value };
    case 'SET_SECTION':
      return { ...state, activeSection: action.value };
    case 'OPEN_UPLOAD':
      return { ...state, activeBadgeId: action.value, isUploadModalOpen: true, uploadState: 'idle', toast: '' };
    case 'CLOSE_UPLOAD':
      return { ...state, isUploadModalOpen: false, activeBadgeId: null, uploadState: 'idle', uploadPreviewUrl: '' };
    case 'START_VERIFY':
      return { ...state, uploadState: 'verifying' };
    case 'VERIFY_SUCCESS':
      return {
        ...state,
        uploadState: 'success',
        badges: state.badges.map((badge) => (badge.id === state.activeBadgeId ? { ...badge, state: 'verified' } : badge)),
      };
    case 'VERIFY_ERROR':
      return { ...state, uploadState: 'error' };
    case 'SET_PREVIEW':
      return { ...state, uploadPreviewUrl: action.value, uploadState: 'ready' };
    case 'SHOW_TOAST':
      return { ...state, toast: action.value };
    case 'CLEAR_TOAST':
      return { ...state, toast: '' };
    default:
      return state;
  }
}

const AppStateContext = createContext(null);

export function AppStateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state]);
  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const value = useContext(AppStateContext);
  if (!value) throw new Error('useAppState must be used inside AppStateProvider');
  return value;
}
