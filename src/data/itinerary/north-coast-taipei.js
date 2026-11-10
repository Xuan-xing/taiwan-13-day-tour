export const NORTH_COAST_TAIPEI_REGION = {
  id: 'north-coast-taipei',
  siteNumber: 6,
  title: 'North Coast, Jiufen & Taipei — Coastline to City Lights',
  dayRange: [12, 13],
  accent: '#8A3324',
  dataStatus: 'template-reference',
  heroEyebrow: 'SITE 06 / NORTH COAST FINISH',
  heroSummary: 'A coast-to-city finish through Jiufen, the Keelung River Bike Path, Taipei and Maokong.',
  heroImage: '/images/user-north-coast-sea.jpg',
  heroImageAlt: 'Sunlight on the North Coast sea',
  storyTitle: 'Coastlines in the morning. City lights by night.',
  storyBody: 'The template finish keeps the final two days legible: sea wind first, then a measured return into the city.',
  visualPreset: 'finish',
  maokongFeature: {
    id: 'maokong-tea-finale',
    day: 13,
    eyebrow: 'DAY 13 / MAOKONG',
    title: 'Tea above the city.',
    body: 'Finish the journey in Maokong with mountain air, slow tea and Taipei lights below.',
    imageAlt: 'White tea cup and rising steam in Maokong',
    variant: 'maokong-tea'
  },
  passportStops: [
    { id: 'north-yeliu', name: 'Yehliu Geopark', place: 'North Coast', regionId: 'north-coast-taipei', day: 12, imageAlt: 'Queen’s Head rock at Yehliu Geopark', status: 'available', color: '#8A3324', icon: '◈' },
    { id: 'north-jinshan', name: 'Jinshan', place: 'North Coast', regionId: 'north-coast-taipei', day: 12, imageAlt: 'Jinshan old street and hot spring town', status: 'available', color: '#1F5149', icon: '✦' },
    { id: 'north-jiufen', name: 'Jiufen', place: 'Ruifang mountain town', regionId: 'north-coast-taipei', day: 12, imageAlt: 'Jiufen lantern streets', status: 'locked', color: '#C4D4C5', icon: '⌂' },
    { id: 'north-maokong', name: 'Maokong', place: 'Taipei hills', regionId: 'north-coast-taipei', day: 13, imageAlt: 'Maokong tea hills and city lights', status: 'locked', color: '#C4D4C5', icon: '✳' }
  ],
  contentNote: 'Uses the current taiwan-bike-tour itinerary as a content and visual reference. The original repository remains unchanged.',
  days: [
    {
      id: 'day-12',
      day: 12,
      title: 'The Coastal Wild & Lantern Climb',
      route: 'Taipei → North Coast → Jiufen',
      distanceKm: 75,
      estimatedRideTime: null,
      elevationM: 350,
      highlights: [
        'Ride along the Highway 2 coastline.',
        'Stop at Fuguei Cape, Taiwan’s northernmost point.',
        'Finish with the 5 km climb into Jiufen for Magic Hour and red lanterns.'
      ],
      plannerNote: 'Beware of the strong Northeast Monsoon from October to March.',
      seasonalNote: 'Northeast Monsoon conditions can change the direction and effort of the coastal ride.',
      luggageTransfer: 'Confirm a luggage drop in Jiufen before the final climb.',
      bikeRental: 'Confirm the rental or pickup point in Taipei and the return arrangement in Jiufen.',
      transitConnection: 'North Coast and Jiufen access require confirmation of bike-friendly roads and parking.',
      transportPlan: 'Use the template route as the content reference; validate the final GPX and road conditions before publishing.',
      nextConnection: 'Day 13 returns through the Keelung River Bike Path to Taipei and Maokong.',
      image: '/images/user-jiufen-fog.jpg',
      imageAlt: 'Red lanterns and mountain homes in Jiufen',
      verificationStatus: 'template-reference',
      verificationNotes: [
        'Distance and elevation come from the template data and still need route-level verification.'
      ]
    },
    {
      id: 'day-13',
      day: 13,
      title: 'The Valley Return & City Lights',
      route: 'Jiufen → Keelung River Bike Path → Taipei → Maokong',
      distanceKm: 50,
      estimatedRideTime: null,
      elevationM: 500,
      highlights: [
        'Return from Jiufen through the Keelung River Bike Path.',
        'Choose a Pro night climb via Zhinan Road or a Chill gondola and tea session.',
        'Finish with Taipei city lights from Maokong.'
      ],
      plannerNote: 'Keep the final climb optional so the day can adapt to fatigue and weather.',
      seasonalNote: 'Check evening temperature, rain and gondola operation before choosing the final activity.',
      luggageTransfer: 'Confirm luggage handling between Jiufen, Taipei and the final accommodation.',
      bikeRental: 'Confirm the bike return point in Taipei or the final transfer arrangement.',
      transitConnection: 'Maokong access may use Zhinan Road or the gondola; bike parking and operating rules require confirmation.',
      transportPlan: 'Follow the template route and choose between the Pro and Chill evening modes after arrival in Taipei.',
      nextConnection: 'This is the final day of the 13-day route.',
      image: '/images/user-maokong-lanterns.jpg',
      imageAlt: 'Warm city lights in Maokong after dark',
      modeOptions: {
        pro: {
          label: 'Pro · Ride All',
          elevationM: 500,
          activity: 'Night Climb via Zhinan Road',
          tag: 'Hardcore',
          description: 'A challenging night climb with steep hairpins and a panoramic Taipei 101 view.'
        },
        chill: {
          label: 'Chill · Gondola Assist',
          elevationM: 0,
          activity: 'Maokong Gondola & Tea Time',
          tag: 'Slow down',
          description: 'Park safely at Zoo Station and take the crystal cabin gondola to Maokong for tea and city lights.'
        }
      },
      verificationStatus: 'template-reference',
      verificationNotes: [
        'Distance, elevation and mode details come from the template and still need route-level verification.'
      ]
    }
  ]
};


