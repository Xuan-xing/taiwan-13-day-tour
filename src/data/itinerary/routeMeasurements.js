const CHECKED_AT = '2026-11-17';
const ROUTER_SOURCE_TITLE = 'OpenStreetMap OSRM cycling route';
const ROUTER_SOURCE_TYPE = 'public reproducible routing service';
const ROUTER_LIMITATIONS = 'OSRM follows the current OpenStreetMap cycling network and is an estimate, not an official route, booking or guarantee of local bicycle access.';

const pending = (segment, mode = 'ride', includedInRideDistance = true) => ({
  segment,
  from: null,
  to: null,
  mode,
  distanceKm: null,
  estimatedRideTime: null,
  distanceStatus: 'pending',
  sourceTitle: null,
  sourceUrl: null,
  sourceType: null,
  checkedAt: null,
  measurementMethod: null,
  quote: null,
  limitations: 'No complete, reproducible route measurement has been recorded yet.',
  elevationGainM: null,
  elevationStatus: 'pending',
  status: 'pending',
  includedInRideDistance,
  notes: 'No complete, reproducible route measurement has been recorded yet.'
});

const estimated = ({ segment, from, to, distanceKm, durationMin, sourceUrl }) => ({
  segment,
  from,
  to,
  mode: 'ride',
  distanceKm,
  estimatedRideTime: `~${durationMin} min routing estimate`,
  distanceStatus: 'estimated',
  sourceTitle: ROUTER_SOURCE_TITLE,
  sourceUrl,
  sourceType: ROUTER_SOURCE_TYPE,
  checkedAt: CHECKED_AT,
  measurementMethod: 'OSRM cycling profile using the listed OSM place coordinates; distance rounded to 0.01 km.',
  quote: `OSRM returned ${distanceKm} km and approximately ${durationMin} minutes for this cycling route.`,
  limitations: ROUTER_LIMITATIONS,
  elevationGainM: null,
  elevationStatus: 'pending',
  includedInRideDistance: true,
  status: 'estimated',
  notes: 'Distance is reproducible from the source URL; cumulative elevation still needs a GPX elevation profile.'
});

const aggregateSource = (segments) => ({
  sourceTitle: ROUTER_SOURCE_TITLE,
  sourceUrl: null,
  sourceType: ROUTER_SOURCE_TYPE,
  checkedAt: CHECKED_AT,
  measurementMethod: 'Sum of the measured OSRM cycling segments listed in the route breakdown.',
  quote: `${segments.length} OSRM cycling route segment(s) were summed for this day.`,
  limitations: ROUTER_LIMITATIONS
});

export const DAY_ROUTE_MEASUREMENTS = {
  'day-01': {
    distanceKm: 38.02,
    distanceStatus: 'estimated',
    distanceCheckedAt: CHECKED_AT,
    distanceSource: aggregateSource([1, 2, 3]),
    elevationGainM: null,
    elevationStatus: 'pending',
    elevationCheckedAt: null,
    elevationSource: null,
    routeBreakdown: [
      estimated({ segment: 'Miyahara Eye Hospital → Central Bookstore', from: 'Miyahara Eye Hospital', to: 'Central Bookstore', distanceKm: 0.49, durationMin: 1.6, sourceUrl: 'https://router.project-osrm.org/route/v1/cycling/120.6820416,24.1390209;120.6812282,24.1407913?overview=false&steps=false' }),
      estimated({ segment: 'Central Bookstore → National Taichung Theater', from: 'Central Bookstore', to: 'National Taichung Theater', distanceKm: 5.76, durationMin: 9.3, sourceUrl: 'https://router.project-osrm.org/route/v1/cycling/120.6812282,24.1407913;120.6405172,24.1629259?overview=false&steps=false' }),
      estimated({ segment: 'National Taichung Theater → Gaomei Wetlands', from: 'National Taichung Theater', to: 'Gaomei Wetlands', distanceKm: 31.77, durationMin: 29.3, sourceUrl: 'https://router.project-osrm.org/route/v1/cycling/120.6405172,24.1629259;120.54643,24.30252?overview=false&steps=false' })
    ],
    measurementStatus: 'estimated',
    notes: 'The OSRM route estimate totals 38.02 km; the original itinerary text listed 29.5 km, so the two figures should not be treated as interchangeable. Cumulative elevation remains pending.'
  },
  'day-02': {
    distanceKm: null,
    distanceStatus: 'pending',
    distanceCheckedAt: null,
    distanceSource: null,
    elevationGainM: null,
    elevationStatus: 'pending',
    elevationCheckedAt: null,
    elevationSource: null,
    routeBreakdown: [
      estimated({ segment: 'Calligraphy Greenway → Audit Village', from: 'Calligraphy Greenway', to: 'Audit Village', distanceKm: 1.08, durationMin: 2.2, sourceUrl: 'https://router.project-osrm.org/route/v1/cycling/120.6631829,24.1520334;120.6626651,24.144587?overview=false&steps=false' }),
      pending('Audit Village → Taichung city greenways')
    ],
    measurementStatus: 'pending',
    notes: 'The itinerary names the stops but does not provide a complete routed distance or cumulative elevation.'
  },
  'day-03': {
    distanceKm: 0.78,
    distanceStatus: 'estimated',
    distanceCheckedAt: CHECKED_AT,
    distanceSource: aggregateSource([1, 2]),
    elevationGainM: null,
    elevationStatus: 'pending',
    elevationCheckedAt: null,
    elevationSource: null,
    routeBreakdown: [
      estimated({ segment: 'Tainan Art Museum II → Hayashi Department Store', from: 'Tainan Art Museum II', to: 'Hayashi Department Store', distanceKm: 0.43, durationMin: 0.9, sourceUrl: 'https://router.project-osrm.org/route/v1/cycling/120.20199,22.99093;120.2025267,22.9917101?overview=false&steps=false' }),
      estimated({ segment: 'Hayashi Department Store → Confucius Temple Cultural District', from: 'Hayashi Department Store', to: 'Confucius Temple Cultural District', distanceKm: 0.35, durationMin: 0.7, sourceUrl: 'https://router.project-osrm.org/route/v1/cycling/120.2025267,22.9917101;120.2049759,22.9914431?overview=false&steps=false' })
    ],
    measurementStatus: 'estimated',
    notes: 'The measured segments total 0.78 km. This covers the listed stops only and excludes any extra city riding between the cultural district and accommodation.'
  },
  'day-04': {
    distanceKm: 3.92,
    distanceStatus: 'estimated',
    distanceCheckedAt: CHECKED_AT,
    distanceSource: aggregateSource([1, 2]),
    elevationGainM: null,
    elevationStatus: 'pending',
    elevationCheckedAt: null,
    elevationSource: null,
    routeBreakdown: [
      estimated({ segment: 'Anping Fort → Anping Tree House', from: 'Anping Fort', to: 'Anping Tree House', distanceKm: 0.43, durationMin: 1.3, sourceUrl: 'https://router.project-osrm.org/route/v1/cycling/120.1605683,23.0016115;120.1597397,23.0040325?overview=false&steps=false' }),
      estimated({ segment: 'Anping Tree House → Yuguang Island', from: 'Anping Tree House', to: 'Yuguang Island', distanceKm: 3.49, durationMin: 6.8, sourceUrl: 'https://router.project-osrm.org/route/v1/cycling/120.1597397,23.0040325;120.15642,22.98143?overview=false&steps=false' })
    ],
    measurementStatus: 'estimated',
    notes: 'The measured segments total 3.92 km. Anping Old Street is included as an intermediate stop within the first routed segment; cumulative elevation remains pending.'
  },
  'day-05': {
    distanceKm: 4.61,
    distanceStatus: 'estimated',
    distanceCheckedAt: CHECKED_AT,
    distanceSource: aggregateSource([1, 2]),
    elevationGainM: null,
    elevationStatus: 'pending',
    elevationCheckedAt: null,
    elevationSource: null,
    routeBreakdown: [
      pending('Meinong → central Kaohsiung transfer', 'transfer', false),
      estimated({ segment: 'Formosa Boulevard → Pier-2 Art Center', from: 'Formosa Boulevard', to: 'Pier-2 Art Center', distanceKm: 2.73, durationMin: 5.9, sourceUrl: 'https://router.project-osrm.org/route/v1/cycling/120.3018602,22.6313941;120.2816179,22.619526?overview=false&steps=false' }),
      estimated({ segment: 'Pier-2 Art Center → Kaohsiung harbour / Gushan Ferry', from: 'Pier-2 Art Center', to: 'Kaohsiung harbour / Gushan Ferry', distanceKm: 1.88, durationMin: 5.2, sourceUrl: 'https://router.project-osrm.org/route/v1/cycling/120.2816179,22.619526;120.2700121,22.6198948?overview=false&steps=false' })
    ],
    measurementStatus: 'estimated',
    notes: 'The measured evening harbour segments total 4.61 km. The Meinong transfer is excluded from cycling distance and the actual handoff remains unconfirmed.'
  },
  'day-06': {
    distanceKm: 10.93,
    distanceStatus: 'estimated',
    distanceCheckedAt: CHECKED_AT,
    distanceSource: aggregateSource([4]),
    elevationGainM: null,
    elevationStatus: 'pending',
    elevationCheckedAt: null,
    elevationSource: null,
    routeBreakdown: [
      estimated({ segment: 'Lotus Pond → Gushan Ferry terminal', from: 'Lotus Pond', to: 'Gushan Ferry terminal', distanceKm: 9.36, durationMin: 18.8, sourceUrl: 'https://router.project-osrm.org/route/v1/cycling/120.2964465,22.6838369;120.2700121,22.6198948?overview=false&steps=false' }),
      pending('Gushan → Qijin Ferry crossing', 'ferry', false),
      estimated({ segment: 'Qijin Ferry terminal → Qihou Lighthouse', from: 'Qijin Ferry terminal', to: 'Qihou Lighthouse', distanceKm: 0.41, durationMin: 1.8, sourceUrl: 'https://router.project-osrm.org/route/v1/cycling/120.2697572,22.6139102;120.2671891,22.6142256?overview=false&steps=false' }),
      estimated({ segment: 'Qihou Lighthouse → Qihou Fort', from: 'Qihou Lighthouse', to: 'Qihou Fort', distanceKm: 0.27, durationMin: 1.2, sourceUrl: 'https://router.project-osrm.org/route/v1/cycling/120.2671891,22.6142256;120.2641796,22.6131619?overview=false&steps=false' }),
      estimated({ segment: 'Qihou Fort → Qijin sunset area', from: 'Qihou Fort', to: 'Qijin sunset area', distanceKm: 0.89, durationMin: 1.8, sourceUrl: 'https://router.project-osrm.org/route/v1/cycling/120.2641796,22.6131619;120.2690771,22.6071214?overview=false&steps=false' })
    ],
    measurementStatus: 'estimated',
    notes: 'The four measured riding segments total 10.93 km. The Qijin ferry crossing is excluded; the route service does not establish ferry bicycle acceptance or cumulative elevation.'
  },
  'day-07': {
    distanceKm: null,
    distanceStatus: 'pending',
    distanceCheckedAt: null,
    distanceSource: null,
    elevationGainM: null,
    elevationStatus: 'pending',
    elevationCheckedAt: null,
    elevationSource: null,
    routeBreakdown: [pending('Taitung → Green Island ferry', 'ferry', false), estimated({ segment: 'Green Island Lighthouse → Zhaori Hot Spring', from: 'Green Island Lighthouse', to: 'Zhaori Hot Spring', distanceKm: 7.97, durationMin: 13.9, sourceUrl: 'https://router.project-osrm.org/route/v1/cycling/121.4663263,22.6765256;121.50407,22.636906?overview=false&steps=false' })],
    measurementStatus: 'pending',
    notes: 'The measured lighthouse-to-hot-spring segment is 7.97 km, but the complete island loop is not defined; total daily distance and cumulative elevation remain pending.'
  },
  'day-08': {
    distanceKm: 80.41,
    distanceStatus: 'estimated',
    distanceCheckedAt: CHECKED_AT,
    distanceSource: aggregateSource([2]),
    elevationGainM: null,
    elevationStatus: 'pending',
    elevationCheckedAt: null,
    elevationSource: null,
    routeBreakdown: [
      pending('Green Island → Taitung ferry return', 'ferry', false),
      pending('Taitung → Luye Gaotai', 'transfer', false),
      estimated({ segment: 'Luye Gaotai → Brown Boulevard', from: 'Luye Gaotai', to: 'Brown Boulevard', distanceKm: 27.27, durationMin: 38.5, sourceUrl: 'https://router.project-osrm.org/route/v1/cycling/121.1194541,22.912861;121.2137388,23.0990146?overview=false&steps=false' }),
      estimated({ segment: 'Brown Boulevard → Tiehua Village', from: 'Brown Boulevard', to: 'Tiehua Village', distanceKm: 53.14, durationMin: 67.6, sourceUrl: 'https://router.project-osrm.org/route/v1/cycling/121.2137388,23.0990146;121.1466686,22.752104?overview=false&steps=false' })
    ],
    measurementStatus: 'estimated',
    notes: 'The measured inland riding segments total 80.41 km. Ferry and supported transfer are excluded; the actual bicycle handoff and cumulative elevation remain unconfirmed.'
  },
  'day-09': {
    distanceKm: 59.59,
    distanceStatus: 'estimated',
    distanceCheckedAt: CHECKED_AT,
    distanceSource: aggregateSource([2]),
    elevationGainM: null,
    elevationStatus: 'pending',
    elevationCheckedAt: null,
    elevationSource: null,
    routeBreakdown: [
      estimated({ segment: 'Taitung Station → Chenggong Township', from: 'Taitung Station', to: 'Chenggong Township', distanceKm: 55.58, durationMin: 73.3, sourceUrl: 'https://router.project-osrm.org/route/v1/cycling/121.1224316,22.7934597;121.38055,23.1057?overview=false&steps=false' }),
      estimated({ segment: 'Chenggong Township → Sanxiantai', from: 'Chenggong Township', to: 'Sanxiantai', distanceKm: 4.01, durationMin: 7.4, sourceUrl: 'https://router.project-osrm.org/route/v1/cycling/121.38055,23.1057;121.4188665,23.1252885?overview=false&steps=false' }),
      pending('Sanxiantai local walk / bike access'),
      pending('Sanxiantai → northern transfer station', 'rail or shuttle', false)
    ],
    measurementStatus: 'estimated',
    notes: 'The two measured road segments total 59.59 km. Rail or shuttle distance is excluded; the actual Day 9 start point, Sanxiantai local access and cumulative elevation remain unconfirmed.'
  },
  'day-10': {
    distanceKm: 3.79,
    distanceStatus: 'estimated',
    distanceCheckedAt: CHECKED_AT,
    distanceSource: aggregateSource([2]),
    elevationGainM: null,
    elevationStatus: 'pending',
    elevationCheckedAt: null,
    elevationSource: null,
    routeBreakdown: [
      estimated({ segment: 'Su-Ao Harbour → Su-Ao Cold Spring', from: 'Su-Ao Harbour', to: 'Su-Ao Cold Spring', distanceKm: 0.94, durationMin: 1.2, sourceUrl: 'https://router.project-osrm.org/route/v1/cycling/121.8580828,24.5942068;121.8510008,24.5968007?overview=false&steps=false' }),
      estimated({ segment: 'Su-Ao Cold Spring → Nanfangao waterfront', from: 'Su-Ao Cold Spring', to: 'Nanfangao waterfront', distanceKm: 2.85, durationMin: 4, sourceUrl: 'https://router.project-osrm.org/route/v1/cycling/121.8510008,24.5968007;121.86608,24.5823919?overview=false&steps=false' })
    ],
    measurementStatus: 'estimated',
    notes: 'The measured local riding segments total 3.79 km. The selected attractions, access roads and cumulative elevation still require route-level confirmation.'
  },
  'day-11': {
    distanceKm: null,
    distanceStatus: 'pending',
    distanceCheckedAt: null,
    distanceSource: null,
    elevationGainM: null,
    elevationStatus: 'pending',
    elevationCheckedAt: null,
    elevationSource: null,
    routeBreakdown: [pending('Wushi Harbor local riding'), pending('Wushi Harbor → Guishan Island boat', 'boat', false)],
    measurementStatus: 'pending',
    notes: 'Guishan Island boat travel and non-cycling island activity are excluded; the Wushi Harbor land route remains unmeasured.'
  }
};
