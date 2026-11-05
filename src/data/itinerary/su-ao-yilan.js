export const SU_AO_YILAN_REGION = {
  id: 'su-ao-yilan',
  siteNumber: 5,
  title: 'East Coast Transfer & Yilan Harbour',
  dayRange: [9, 11],
  accent: '#1F5149',
  dataStatus: 'partially-source-provided',
  heroEyebrow: 'SITE 05 / EAST COAST TRANSFER',
  heroSummary: 'A short ride through Chenggong and Sanxiantai before the northbound transfer to Yilan.',
  storyTitle: 'Coastline to connection.',
  storyBody: 'Keep the riding segment light and leave space for the rail or shuttle handoff into the next coast.',
  visualPreset: 'transfer',
  passportStops: [
    { id: 'chenggong-coast', name: 'Chenggong Coast', place: 'East Coast', regionId: 'su-ao-yilan', day: 9, imageAlt: 'Chenggong coast on Taiwan east coast', status: 'available', color: '#8A3324', icon: '≈' },
    { id: 'sanxiantai', name: 'Sanxiantai', place: 'East Coast bridge', regionId: 'su-ao-yilan', day: 9, imageAlt: 'Sanxiantai arch bridge', status: 'available', color: '#1F5149', icon: '⌁' },
    { id: 'suao-harbour', name: 'Su-Ao Harbour', place: 'Su-Ao', regionId: 'su-ao-yilan', day: 10, imageAlt: 'Su-Ao Harbour waterfront', status: 'locked', color: '#C4D4C5', icon: '⚓' },
    { id: 'wushi-guishan', name: 'Wushi Harbor / Guishan Island', place: 'Yilan coast', regionId: 'su-ao-yilan', day: 11, imageAlt: 'Wushi Harbor and Guishan Island', status: 'locked', color: '#C4D4C5', icon: '◒' }
  ],
  contentNote: 'Day 9 comes from the latest Taitung correction. The uploaded itinerary marked Yilan as pending, so Days 10–11 remain placeholders.',
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
      image: null,
      imageAlt: 'Sanxiantai bridge and Taiwan east coast',
      verificationStatus: 'source-provided',
      verificationNotes: [
        'The route direction is user-provided, but exact rail station, departure time, bike rules and shuttle operator are unverified.'
      ]
    },
    {
      id: 'day-10',
      day: 10,
      title: 'Su-Ao Harbour Day',
      route: 'Su-Ao — itinerary details pending',
      distanceKm: null,
      distanceNote: 'Yilan content was marked as pending in the uploaded itinerary.',
      estimatedRideTime: null,
      elevationM: null,
      highlights: [],
      plannerNote: 'Awaiting the detailed Su-Ao plan before layout and timing are finalized.',
      seasonalNote: 'Awaiting seasonal guidance.',
      luggageTransfer: 'Awaiting luggage plan.',
      bikeRental: 'Awaiting bike rental or bike storage plan.',
      transitConnection: 'Awaiting local connection details.',
      transportPlan: 'Placeholder only; no transport should be presented as confirmed.',
      nextConnection: 'Day 11 is reserved for Wushi Harbor and Guishan Island once details are supplied.',
      image: null,
      imageAlt: 'Su-Ao harbour image pending',
      verificationStatus: 'pending-user-data',
      verificationNotes: ['Detailed Su-Ao itinerary has not yet been provided.']
    },
    {
      id: 'day-11',
      day: 11,
      title: 'Wushi Harbor & Guishan Island',
      route: 'Wushi Harbor → Guishan Island — itinerary details pending',
      distanceKm: null,
      distanceNote: 'Yilan content was marked as pending in the uploaded itinerary.',
      estimatedRideTime: null,
      elevationM: null,
      highlights: [],
      plannerNote: 'Awaiting the detailed Wushi Harbor and Guishan Island plan before layout and timing are finalized.',
      seasonalNote: 'Boat access and sea conditions need a dedicated seasonal note.',
      luggageTransfer: 'Awaiting luggage plan.',
      bikeRental: 'Awaiting bike rental or bike storage plan.',
      transitConnection: 'Boat timetable, port access and bicycle storage require confirmation.',
      transportPlan: 'Placeholder only; do not present boat access or island landing as confirmed.',
      nextConnection: 'Day 12 begins the North Coast and Jiufen route.',
      image: null,
      imageAlt: 'Wushi Harbor and Guishan Island image pending',
      verificationStatus: 'pending-user-data',
      verificationNotes: [
        'Detailed Wushi Harbor and Guishan Island itinerary has not yet been provided.',
        'Boat schedule, sea conditions and landing rules require verification.'
      ]
    }
  ]
};
