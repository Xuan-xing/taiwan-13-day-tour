export const TAICHUNG_REGION = {
  id: 'taichung',
  siteNumber: 1,
  title: 'Taichung — Old City to Sea Wind',
  dayRange: [1, 2],
  accent: '#8A3324',
  dataStatus: 'source-provided',
  heroEyebrow: 'SITE 01 / WEST COAST CULTURE',
  heroSummary: 'From old city bookshops and opera-house curves to the western wind at Gaomei.',
  storyTitle: 'Old city to sea wind.',
  storyBody: 'A two-day rhythm of heritage streets, greenways and a long coastal light change.',
  visualPreset: 'urban',
  passportStops: [
    { id: 'taichung-central-bookstore', name: 'Central Bookstore', place: 'Taichung old city', regionId: 'taichung', day: 1, imageAlt: 'Central Bookstore in Taichung', status: 'available', color: '#8A3324', icon: '✦' },
    { id: 'taichung-theater', name: 'National Taichung Theater', place: 'Taichung civic centre', regionId: 'taichung', day: 1, imageAlt: 'National Taichung Theater curves', status: 'available', color: '#1F5149', icon: '◌' },
    { id: 'taichung-gaomei', name: 'Gaomei Wetlands', place: 'Taichung west coast', regionId: 'taichung', day: 1, imageAlt: 'Gaomei Wetlands at sunset', status: 'locked', color: '#C4D4C5', icon: '≈' }
  ],
  days: [
    {
      id: 'day-01',
      day: 1,
      title: 'Old City, Opera House & Gaomei Sunset',
      route: 'Miyahara Eye Hospital → Central Bookstore → National Taichung Theater → Gaomei Wetlands',
      distanceKm: null,
      distanceNote: 'The source text cites 0.5 km, 6 km and 23 km segments; the complete route total still needs confirmation.',
      estimatedRideTime: null,
      elevationM: null,
      highlights: [
        'Begin at Miyahara Eye Hospital for breakfast and local gifts.',
        'Ride approximately 500 m to Central Bookstore for lunch and cultural browsing.',
        'Continue about 6 km through the Green Parkway and Taiwan Boulevard to National Taichung Theater.',
        'Ride toward Gaomei Wetlands via the coastal bike route and windmill avenue for sunset.'
      ],
      plannerNote: 'The day combines short urban hops with a longer coastal segment; confirm sunset timing before leaving the city.',
      seasonalNote: 'No seasonal note was supplied; verify coastal wind and sunset access before the Gaomei segment.',
      luggageTransfer: 'No luggage transfer arrangement was supplied; confirm hotel storage or transfer before departure.',
      bikeRental: 'Rental and return points were not supplied; confirm a Taichung city rental network.',
      transitConnection: 'Urban riding connects the listed stops; exact bike parking and access rules need confirmation.',
      transportPlan: 'Ride the supplied city and coastal segments, with time reserved for stops at the theater and wetlands.',
      nextConnection: 'Confirm the overnight location and the transfer into Day 2 before finalizing the route.',
      image: null,
      imageAlt: 'Taichung old city streets and the western coastline',
      verificationStatus: 'source-provided',
      verificationNotes: [
        'Distances are segment estimates from the uploaded text, not a verified GPX total.',
        'Bike parking, rental and opening times remain unverified.'
      ]
    },
    {
      id: 'day-02',
      day: 2,
      title: 'Greenway Slow Ride & Audit Village',
      route: 'Calligraphy Greenway → Audit Village → Taichung city greenways',
      distanceKm: null,
      distanceNote: 'The source text does not provide a full distance.',
      estimatedRideTime: null,
      elevationM: null,
      highlights: [
        'Ride beneath the trees of Calligraphy Greenway.',
        'Park at Audit Village and explore its converted dormitories, markets and cafés.',
        'Return to the greenway for an easy afternoon spin.'
      ],
      plannerNote: 'Keep this as a recovery-oriented city day after the coastal ride.',
      seasonalNote: 'No seasonal note was supplied; check heat and afternoon rain before the city ride.',
      luggageTransfer: 'No luggage transfer arrangement was supplied; confirm storage at the next accommodation.',
      bikeRental: 'Rental and return points were not supplied; confirm whether the Day 1 rental can be extended.',
      transitConnection: 'City riding only; exact parking and pedestrian-zone rules need confirmation.',
      transportPlan: 'Use short urban rides and walk the market areas after parking the bike.',
      nextConnection: 'The next region is Tainan; the evening transfer and bike carriage method require confirmation.',
      image: null,
      imageAlt: 'Audit Village red brick lanes and Taichung greenway',
      verificationStatus: 'source-provided',
      verificationNotes: [
        'Full route distance and riding time were not included in the source text.'
      ]
    }
  ]
};
