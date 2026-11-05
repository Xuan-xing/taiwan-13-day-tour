export const GREEN_ISLAND_TAITUNG_REGION = {
  id: 'green-island-taitung',
  siteNumber: 4,
  title: 'Green Island & Taitung — Blue Water, Open Fields',
  dayRange: [7, 8],
  accent: '#1F5149',
  dataStatus: 'source-provided',
  heroEyebrow: 'SITE 04 / ISLAND & RIFT VALLEY',
  heroSummary: 'Green Island blue, a morning ferry return and the open fields of Brown Boulevard.',
  storyTitle: 'Blue water, open fields.',
  storyBody: 'The route moves from island water and hot spring steam to balloon skies, rice fields and Taitung nights.',
  visualPreset: 'wild',
  passportStops: [
    { id: 'green-island-lighthouse', name: 'Green Island Lighthouse', place: 'Green Island', regionId: 'green-island-taitung', day: 7, imageAlt: 'Green Island Lighthouse and coastline', status: 'available', color: '#8A3324', icon: '⌂' },
    { id: 'green-island-zhaori', name: 'Zhaori Hot Spring', place: 'Green Island', regionId: 'green-island-taitung', day: 7, imageAlt: 'Zhaori Hot Spring on Green Island', status: 'available', color: '#1F5149', icon: '≈' },
    { id: 'taitung-brown-boulevard', name: 'Brown Boulevard', place: 'Taitung east rift valley', regionId: 'green-island-taitung', day: 8, imageAlt: 'Brown Boulevard rice fields in Taitung', status: 'locked', color: '#C4D4C5', icon: '✳' },
    { id: 'taitung-mr-brown-tree', name: 'Mr Brown Avenue', place: 'Chishang', regionId: 'green-island-taitung', day: 8, imageAlt: 'Mr Brown Tree and rice fields', status: 'locked', color: '#C4D4C5', icon: '⌁' }
  ],
  days: [
    {
      id: 'day-07',
      day: 7,
      title: 'Green Island by Bike & Hot Spring',
      route: 'Taitung → Green Island ferry → island loop',
      distanceKm: null,
      distanceNote: 'The source text does not provide a complete island-loop distance.',
      estimatedRideTime: null,
      elevationM: null,
      highlights: [
        'Take the morning ferry from Taitung to Green Island.',
        'The itinerary states that a bicycle can be carried on the ferry; this needs confirmation.',
        'Ride around Green Island from noon through the afternoon.',
        'Visit Green Island Lighthouse and Green Island Prison.',
        'Choose snorkelling or diving in the afternoon.',
        'Finish with a visit to Zhaori Hot Spring in the evening.'
      ],
      plannerNote: 'Plan the island loop around ferry arrival, water activity timing and the hot spring opening window.',
      seasonalNote: 'Sea conditions can affect the ferry; keep the crossing and water activity flexible.',
      luggageTransfer: 'No luggage transfer arrangement was supplied; confirm overnight bag storage on Green Island.',
      bikeRental: 'The plan is to carry a bicycle from Taitung; confirm ferry acceptance, packing and fees.',
      transitConnection: 'The ferry connects Taitung and Green Island; schedule and bicycle rules require verification.',
      transportPlan: 'Morning ferry to Green Island, island cycling, water activity and overnight stay before the morning return.',
      nextConnection: 'Return to Taitung on Day 8 morning before continuing to Luye and the East Rift Valley.',
      image: null,
      imageAlt: 'Green Island coastline, lighthouse and hot spring',
      verificationStatus: 'source-provided',
      verificationNotes: [
        'Ferry timetable, sea conditions, bicycle carriage and water activity operators require verification.'
      ]
    },
    {
      id: 'day-08',
      day: 8,
      title: 'Luye Balloons, Brown Avenue & Tiehua Village',
      route: 'Green Island → Taitung city → Luye Gaotai → Mr Brown Tree → Brown Boulevard → Tiehua Village',
      distanceKm: null,
      distanceNote: 'The source text does not provide a complete distance after returning to Taitung.',
      estimatedRideTime: null,
      elevationM: null,
      highlights: [
        'Return to Taitung city by ferry in the morning.',
        'Visit Luye Gaotai for the hot-air-balloon view.',
        'Stop at the Mr Brown Tree and ride Brown Boulevard by bicycle.',
        'End the day at Tiehua Village in Taitung city.'
      ],
      plannerNote: 'The day combines a ferry return, inland viewpoints and a bicycle-friendly rice-field route; confirm transfer timing before riding.',
      seasonalNote: 'Balloon events are seasonal and weather-dependent; confirm the event calendar before publishing the itinerary.',
      luggageTransfer: 'No luggage transfer arrangement was supplied; confirm whether bags can move from the ferry terminal to the city hotel.',
      bikeRental: 'The plan favours cycling Brown Boulevard; confirm a suitable rental or bike return point in Taitung.',
      transitConnection: 'Ferry return connects to Taitung city; the Luye transfer and bike transport need confirmation.',
      transportPlan: 'Morning ferry return, supported transfer toward Luye, then bicycle riding around Brown Boulevard before Tiehua Village.',
      nextConnection: 'Day 9 continues through Chenggong and Sanxiantai before the transfer toward Yilan or Su-Ao.',
      image: null,
      imageAlt: 'Taitung rice fields, Brown Boulevard and evening culture',
      verificationStatus: 'source-provided',
      verificationNotes: [
        'Ferry return time, balloon schedule and bike logistics between Luye and Taitung require verification.'
      ]
    }
  ]
};
