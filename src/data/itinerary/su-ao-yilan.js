import { DAY_ROUTE_MEASUREMENTS } from './routeMeasurements.js';

export const SU_AO_YILAN_REGION = {
  id: 'su-ao-yilan',
  siteNumber: 5,
  title: 'Su-Ao & Yilan — Harbour Days',
  dayRange: [9, 11],
  accent: '#1F5149',
  dataStatus: 'partially-source-provided',
  heroEyebrow: 'SITE 05 / EAST COAST TRANSFER',
  heroSummary: 'A short ride through Chenggong and Sanxiantai before the northbound transfer to Yilan.',
  storyTitle: 'Coastline to connection.',
  coastalBikeRoadImage: {
    src: '/images/regions/su-ao-yilan/coastal-bike-road.jpg',
    alt: 'Coastal cycling road beside the sea near Su-Ao'
  },
  visualPreset: 'transfer',
  hiddenDayIds: ['day-09'],
  heroImage: '/images/regions/su-ao-yilan/nanfangao-fish-market.jpg',
  heroImageAlt: 'Nanfangao fish market and harbour in Su-Ao',
  passportStops: [
    { id: 'chenggong-coast', name: 'Chenggong Coast', place: 'East Coast', regionId: 'su-ao-yilan', day: 9, imageAlt: 'Chenggong coast on Taiwan east coast', status: 'available', color: '#8A3324', icon: '≈' },
    { id: 'sanxiantai', name: 'Sanxiantai', place: 'East Coast bridge', regionId: 'su-ao-yilan', day: 9, imageAlt: 'Sanxiantai arch bridge', status: 'available', color: '#1F5149', icon: '⌁' },
    { id: 'suao-harbour', name: 'Su-Ao Harbour', place: 'Su-Ao', regionId: 'su-ao-yilan', day: 10, imageAlt: 'Su-Ao Harbour waterfront', status: 'locked', color: '#C4D4C5', icon: '⚓' },
    { id: 'wushi-guishan', name: 'Wushi Harbor / Guishan Island', place: 'Yilan coast', regionId: 'su-ao-yilan', day: 11, imageAlt: 'Wushi Harbor and Guishan Island', status: 'locked', color: '#C4D4C5', icon: '◒' }
  ],
  contentNote: 'Days 10–11 now use official regional references for Su-Ao, Wushi Harbor and Guishan Island. Exact timings, boat operator and reservations still require route-level confirmation.',
  alternativeCoastFeature: {
    id: 'neipi-wushi-harbor', eyebrow: 'A TWO-DAY FIELD NOTE',
    title: 'Beaches in the morning. Harbor culture by afternoon.',
    body: 'Follow the coast for two days, from Neipi Beach’s open horizons to Wushi Harbor’s working waterfront and Guishan Island’s blue waters.',
    variant: 'coast-harbor', accent: '#63B6C9',
    stops: [
      { id: 'wushi-harbor', name: 'Wushi Harbor', description: 'A harbor stop for fishing boats, working waterfronts and Taiwan coastal culture.', image: '/images/regions/su-ao-yilan/wushi-harbor.jpg', imageAlt: 'Wushi Harbor and Taiwan fishing harbor culture' },
      { id: 'neipi-beach', name: 'Neipi Beach', description: 'A quiet coastal stop for beach views, sea air and a slower shoreline rhythm.', image: '/images/regions/su-ao-yilan/nanfangao-neipi-bay.jpg', imageAlt: 'Neipi Beach and the surrounding coastline' }
    ]
  },
  days: [
    {
      id: 'day-09',
      day: 9,
      title: 'Chenggong, Sanxiantai & Rail Transfer North',
      route: 'Taitung → Chenggong → Sanxiantai → Taiwan Rail or shuttle → Yilan / Su-Ao',
      distanceKm: null,
      distanceNote: 'A short coastal riding segment is requested, but no distance was supplied.',
      estimatedRideTime: null,
      elevationM: null,
      highlights: [
        'Ride through Chenggong on the East Coast.',
        'Stop at Sanxiantai before leaving the coast.',
        'Continue north by Taiwan Rail or a bike-friendly shuttle toward Yilan or Su-Ao.'
      ],
      plannerNote: 'This is a mixed cycling and transfer day; reserve a generous connection buffer and confirm where the bicycle boards the train or shuttle.',
      seasonalNote: 'No seasonal note was supplied; check East Coast weather and rail disruption notices.',
      luggageTransfer: 'No luggage transfer arrangement was supplied; confirm whether bags travel with the rider or move separately.',
      bikeRental: 'The source text does not specify a rental point; confirm whether the same bicycle continues north.',
      transitConnection: 'Taiwan Rail or shuttle is planned after Sanxiantai; bicycle carriage rules and timetable require verification.',
      transportPlan: 'Short ride through Chenggong and Sanxiantai, followed by a confirmed rail or shuttle transfer to Yilan or Su-Ao.',
      nextConnection: 'Arrive in Su-Ao or Yilan for Day 10.',
      image: '/images/regions/su-ao-yilan/sanxiantai.jpg',
      imageAlt: 'Sanxiantai bridge on Taiwan east coast',
      verificationStatus: 'source-provided',
      verificationNotes: [
        'The route direction is user-provided, but exact rail station, departure time, bike rules and shuttle operator are unverified.'
      ],
      ...DAY_ROUTE_MEASUREMENTS['day-09']
    },
    {
      id: 'day-10',
      day: 10,
      title: 'Su-Ao Harbour, Cold Springs & North Link',
      route: 'Su-Ao Harbour → Su-Ao / Nanfangao Waterfront → Su-Ao Cold Spring',
      distanceKm: null,
      distanceNote: 'The user-provided route measurement is shown as source-provided data.',
      estimatedRideTime: null,
      elevationM: null,
      highlights: [
        'Use Su-Ao as a harbour base at the start of the Suhua and North Link corridor.',
        'Consider Su-Ao Cold Spring and the waterfront as low-pressure local stops.',
        'Confirm the final riding distance, access roads, opening hours and bicycle parking before publishing the day.'
      ],
      plannerNote: 'This day is now an official-region reference plan; confirm exact attractions, opening hours, accommodation and cycling access before booking.',
      seasonalNote: 'Check coastal weather and any road or rail disruption notices before riding.',
      luggageTransfer: 'Confirm hotel storage or a transfer from the Day 9 arrival point before the harbour loop.',
      bikeRental: 'No Su-Ao rental or return provider has been verified for this itinerary.',
      transitConnection: 'Su-Ao is served by the North Link rail corridor; the selected train and bicycle handling remain unconfirmed.',
      transportPlan: 'Keep the day local around Su-Ao and Nanfangao until the exact route and bike plan are confirmed.',
      nextConnection: 'Day 11 continues to Wushi Harbor, with Guishan Island kept as an application-dependent option.',
      image: '/images/regions/su-ao-yilan/suao-cold-spring-park.jpg',
      imageAlt: 'Su-Ao Cold Spring Park',
      verificationStatus: 'partially-source-provided',
      verificationNotes: [
        'The official regional page confirms Su-Ao as a harbour town with Su-Ao Harbour, Nanfangao and Su-Ao Cold Spring references.',
        'Exact day schedule, distance, opening hours, accommodation and bicycle logistics remain unverified.'
      ],
      sources: [
        {
          sourceTitle: 'Northeast and Yilan Coast National Scenic Area: Su-Ao',
          sourceUrl: 'https://www.necoast-nsa.gov.tw/Area-Content.aspx?a=164&l=1',
          sourceType: 'official national scenic area',
          checkedAt: '2026-11-17',
          quote: 'Su-Ao is the starting point of the Suhua Highway and the North Link railway, with access to Su-Ao Cold Spring Park and Nanfangao Fishing Harbor.',
          conditions: 'This confirms regional attractions and transport context, not an itinerary booking or opening-time guarantee.',
          routeSpecificLimitations: 'Exact Day 10 stops, cycling access, parking, accommodation and train remain unconfirmed.',
          notes: 'Use as a regional planning reference only.'
        }
      ],
      ...DAY_ROUTE_MEASUREMENTS['day-10']
    },
    {
      id: 'day-11',
      day: 11,
      title: 'Wushi Harbor & Guishan Island',
      route: 'Wushi Harbor → Guishan Island',
      distanceKm: null,
      distanceNote: 'The user-provided route measurement is shown as source-provided data; Guishan Island access still requires the official application and boat plan.',
      estimatedRideTime: null,
      elevationM: null,
      highlights: [
        'Visit Wushi Harbor for its fishing-port, seafood-market and coastal history context.',
        'Treat Guishan Island as a separate boat and permit activity, not as a self-guided bicycle stop.',
        'Check the official island application, sea conditions and operator schedule before committing the day.'
      ],
      plannerNote: 'Guishan Island requires a separate application and boat plan; keep Wushi Harbor as the land-based fallback.',
      seasonalNote: 'Long-wave warnings, weather and official landing notices can change the island plan.',
      luggageTransfer: 'Confirm where luggage stays while visiting Wushi Harbor or boarding an island boat.',
      bikeRental: 'No verified A-to-B rental or Wushi Harbor bicycle provider is recorded.',
      transitConnection: 'Boat operator, boarding time, landing permission and bicycle storage remain unconfirmed.',
      transportPlan: 'Plan Wushi Harbor independently and add Guishan Island only after the official application and boat space are confirmed.',
      nextConnection: 'Day 12 begins the North Coast and Jiufen route.',
      image: '/images/regions/su-ao-yilan/guishan-island.jpg',
      imageAlt: 'Guishan Island viewed from Wushi Harbor',
      verificationStatus: 'partially-source-provided',
      verificationNotes: [
        'The official regional page describes Wushi Harbor as a restored tourist fishing harbour with a fish market and yacht harbour.',
        'The official Guishan Island portal provides an application process and current landing notices.',
        'Boat schedule, sea conditions, landing permission, bicycle storage and exact timing require route-level confirmation.'
      ],
      sources: [
        {
          sourceTitle: 'Northeast and Yilan Coast National Scenic Area: Wushi Harbor',
          sourceUrl: 'https://www.necoast-nsa.gov.tw/Area-Content.aspx?a=3671&l=1',
          sourceType: 'official national scenic area',
          checkedAt: '2026-11-17',
          quote: 'Wushi Harbor is a popular leisure fishing harbor with a visitor fish market and a yacht harbor.',
          conditions: 'This confirms the harbour and visitor facilities, not a specific boat booking.',
          routeSpecificLimitations: 'Exact harbour activities, bicycle parking and boat schedule remain unconfirmed.',
          notes: 'Use Wushi Harbor as the land-based fallback if island access is unavailable.'
        },
        {
          sourceTitle: 'Guishan Island landing application: Northeast and Yilan Coast National Scenic Area',
          sourceUrl: 'https://events.necoast-nsa.gov.tw/coast/',
          sourceType: 'official national scenic area',
          checkedAt: '2026-11-17',
          quote: 'The official portal provides a Guishan Island landing application and current landing notices.',
          conditions: 'The portal provides application, landing notices, weather and long-wave information; a future trip still needs a fresh check.',
          routeSpecificLimitations: 'No specific boat operator, departure time, landing quota or bicycle carriage is confirmed for this itinerary.',
          notes: 'Do not treat the current landing notice as a future booking confirmation.'
        }
      ],
      ...DAY_ROUTE_MEASUREMENTS['day-11']
    }
  ]
};
