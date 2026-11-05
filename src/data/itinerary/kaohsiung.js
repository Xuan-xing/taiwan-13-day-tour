export const KAOHSIUNG_REGION = {
  id: 'kaohsiung',
  siteNumber: 3,
  title: 'Kaohsiung — Hakka Hills & Harbour Nights',
  dayRange: [5, 6],
  accent: '#1F5149',
  dataStatus: 'source-provided',
  heroEyebrow: 'SITE 03 / HARBOUR RHYTHMS',
  heroSummary: 'From Meinong craft and Hakka flavours to Qijin sea breeze and harbour nights.',
  storyTitle: 'Hills to harbour nights.',
  storyBody: 'A cultural descent from the foothills into the port, with ferry air and city lights in between.',
  visualPreset: 'harbour',
  passportStops: [
    { id: 'kaohsiung-pier-2', name: 'Pier-2 Art Center', place: 'Kaohsiung harbour', regionId: 'kaohsiung', day: 5, imageAlt: 'Pier-2 Art Center harbour warehouses', status: 'available', color: '#8A3324', icon: '✦' },
    { id: 'kaohsiung-qijin', name: 'Qijin Lighthouse', place: 'Qijin island', regionId: 'kaohsiung', day: 6, imageAlt: 'Qijin Lighthouse above the harbour', status: 'available', color: '#1F5149', icon: '⌂' },
    { id: 'kaohsiung-lotus-pond', name: 'Lotus Pond', place: 'Zuoying', regionId: 'kaohsiung', day: 6, imageAlt: 'Lotus Pond pagodas in Kaohsiung', status: 'locked', color: '#C4D4C5', icon: '◈' }
  ],
  contentNote: 'This latest uploaded itinerary supersedes the earlier order of Qijin on Day 5 and Pier-2 on Day 6.',
  days: [
    {
      id: 'day-05',
      day: 5,
      title: 'Meinong Craft & Pier-2 After Dark',
      route: 'Meinong → Formosa Boulevard → Pier-2 Art Center → Kaohsiung harbour',
      distanceKm: null,
      distanceNote: 'The source text does not provide a complete riding distance.',
      estimatedRideTime: null,
      elevationM: null,
      highlights: [
        'Visit Meinong folk culture sites and try oil-paper umbrella painting or lei cha craft.',
        'Taste local Hakka dishes including ban tiao and pork knuckle.',
        'Return to the city for hotel check-in near Formosa Boulevard and the Dome of Light.',
        'Rent a bicycle around Pier-2 and ride between the warehouses, Great Harbor Bridge and the music centre at night.'
      ],
      plannerNote: 'This is a long transfer day from the hills to the harbour; confirm the bike handoff before the evening ride.',
      seasonalNote: 'No seasonal note was supplied; check heat and evening event schedules.',
      luggageTransfer: 'Hotel check-in is planned near Formosa Boulevard; confirm whether bags can be transferred from Meinong.',
      bikeRental: 'The source text names bike rental around Pier-2; rental network and return point need confirmation.',
      transitConnection: 'Meinong-to-city transfer details were not supplied; confirm shuttle, rail or private transfer.',
      transportPlan: 'Use a supported transfer from Meinong to central Kaohsiung, then ride the harbour loop.',
      nextConnection: 'Stay in Kaohsiung for the Day 6 Qijin and Lotus Pond route.',
      image: null,
      imageAlt: 'Kaohsiung harbour warehouses and Hakka craft culture',
      verificationStatus: 'source-provided',
      verificationNotes: [
        'Meinong transfer and bike rental details are not yet verified.',
        'Pier-2 event and lighting schedules require confirmation.'
      ]
    },
    {
      id: 'day-06',
      day: 6,
      title: 'Qijin Sea Breeze & Lotus Pond',
      route: 'Qijin Ferry → Qihou Lighthouse → Qihou Fort → Rainbow Church → Lotus Pond',
      distanceKm: null,
      distanceNote: 'The source text does not provide a complete riding distance.',
      estimatedRideTime: null,
      elevationM: null,
      highlights: [
        'Take the ferry to Qijin and ride the island loop by bicycle or e-bike.',
        'Visit Qihou Lighthouse, Qihou Fort, Rainbow Church and Star Tunnel.',
        'Stop for seafood along Qijin Old Street.',
        'Continue to Lotus Pond and the Dragon and Tiger Pagodas for the final cultural stop.'
      ],
      plannerNote: 'Allow buffer time for the ferry queue and the transfer from Qijin to Zuoying.',
      seasonalNote: 'No seasonal note was supplied; verify ferry operations and harbour wind conditions.',
      luggageTransfer: 'No luggage transfer arrangement was supplied; confirm hotel storage before the ferry ride.',
      bikeRental: 'The source text suggests bicycle or e-bike rental on Qijin; station and ferry carriage rules need confirmation.',
      transitConnection: 'Qijin is reached by ferry; the Qijin-to-Lotus Pond transfer needs a confirmed bike-friendly option.',
      transportPlan: 'Ferry to Qijin, ride the island loop, then transfer toward Zuoying for Lotus Pond.',
      nextConnection: 'The next region is Green Island and Taitung; confirm the long-distance transfer and bike handling.',
      image: null,
      imageAlt: 'Qijin harbour, lighthouse and Lotus Pond pagodas',
      verificationStatus: 'source-provided',
      verificationNotes: [
        'Ferry timetable, bicycle carriage and Qijin rental availability remain unverified.'
      ]
    }
  ]
};
