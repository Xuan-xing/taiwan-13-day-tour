import { REGION_MATRIX } from '../data/itinerary/index.js';

export const OVERVIEW_ROUTE_ID = 'overview';
export const OVERVIEW_ROUTE = {
  id: OVERVIEW_ROUTE_ID,
  siteNumber: 0,
  title: '13-day overview',
  dayRange: [1, 13],
  accent: '#2D4030',
  dataStatus: 'source-provided'
};

export const ROUTE_REGISTRY = [
  OVERVIEW_ROUTE,
  ...REGION_MATRIX.map((region) => ({
    id: region.id,
    siteNumber: region.siteNumber,
    title: region.title,
    dayRange: region.dayRange,
    accent: region.accent,
    dataStatus: region.dataStatus,
  }))
];

export const getRouteById = (routeId) => ROUTE_REGISTRY.find((route) => route.id === routeId);

export const getAdjacentRoutes = (routeId) => {
  const index = ROUTE_REGISTRY.findIndex((route) => route.id === routeId);
  if (index < 0) return { previous: null, next: null };
  return {
    previous: ROUTE_REGISTRY[index - 1] ?? null,
    next: ROUTE_REGISTRY[index + 1] ?? null,
  };
};
