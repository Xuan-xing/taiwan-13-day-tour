export const ROUTE_COPY = {
  art: {
    eyebrow: 'ART ROUTE / WEST COAST',
    title: 'Ride the stories\nthat shaped Taiwan.',
    body: 'A slow-burning line through tea houses, temple roofs, old rail towns and night markets — four cities, one rich cultural rhythm.',
    accent: '#8a3324',
    surface: '#f7ece4',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1800&q=85',
    imageAlt: 'Taiwan west coast architecture and warm evening light',
    routeLabel: 'Taipei → Taichung → Tainan → Kaohsiung',
    chapter: 'Craft, cuisine & concrete',
  },
  wild: {
    eyebrow: 'WILD ROUTE / EAST COAST',
    title: 'Find the quiet\nbetween mountains and sea.',
    body: 'A wind-shaped ride past Turtle Island, rice-field horizons and Green Island blue — the island at its most open.',
    accent: '#1f5149',
    surface: '#e6efea',
    image: '/images/north-coast-sea.jpg',
    imageAlt: 'Taiwan north coast sea and mountain road',
    routeLabel: 'Yilan → Hualien → Taitung → Green Island',
    chapter: 'Salt air & open roads',
  },
};

export const ITINERARIES = [
  {
    id: 'art-01',
    route: 'art',
    style: 'road',
    pace: 'steady',
    day: 'DAY 01—03',
    title: 'Temple shadows to tea hills',
    places: 'Taipei · Hsinchu · Taichung',
    distance: '142 km',
    time: '3 days',
    elevation: '920 m',
    difficulty: 'Moderate',
    note: 'Luggage transfer between hotels included',
  },
  {
    id: 'art-02',
    route: 'art',
    style: 'gravel',
    pace: 'relaxed',
    day: 'DAY 04—06',
    title: 'Sugar railways & salt pans',
    places: 'Tainan · Chiayi · Kaohsiung',
    distance: '118 km',
    time: '3 days',
    elevation: '460 m',
    difficulty: 'Easy',
    note: 'Bike rental network at Tainan HSR',
  },
  {
    id: 'wild-01',
    route: 'wild',
    style: 'road',
    pace: 'steady',
    day: 'DAY 01—03',
    title: 'Turtle Island horizon',
    places: 'Yilan · Toucheng · Hualien',
    distance: '156 km',
    time: '3 days',
    elevation: '1,180 m',
    difficulty: 'Moderate',
    note: 'Northeast Monsoon: ride south with a tailwind',
  },
  {
    id: 'wild-02',
    route: 'wild',
    style: 'gravel',
    pace: 'push',
    day: 'DAY 04—07',
    title: 'Rice fields to reef blues',
    places: 'Taitung · Brown Boulevard · Green Island',
    distance: '204 km',
    time: '4 days',
    elevation: '1,640 m',
    difficulty: 'Challenging',
    note: 'South Link rail connection + ferry bike rules',
  },
];

export const BADGES = [
  { id: 'wuling', name: 'Wuling Pass', place: '3275 m · Central Range', state: 'available', color: '#8a3324', icon: '⛰' },
  { id: 'brown', name: 'Brown Boulevard', place: 'Taitung · East Rift Valley', state: 'available', color: '#1f5149', icon: '✳' },
  { id: 'turtle', name: 'Turtle Island', place: 'Yilan · Pacific Rim', state: 'locked', color: '#2b5468', icon: '◒' },
  { id: 'temple', name: 'Lukang Lanterns', place: 'Changhua · Old Town', state: 'locked', color: '#8a3324', icon: '✦' },
];

export const ELEVATION = {
  art: [12, 25, 18, 42, 31, 58, 36, 72, 54, 64, 48, 28],
  wild: [8, 22, 38, 28, 48, 74, 60, 92, 70, 84, 63, 100],
};

export const filteredItineraries = (route, style, pace) =>
  ITINERARIES.filter((item) => item.route === route && item.style === style && item.pace === pace)
    .concat(ITINERARIES.filter((item) => item.route === route && item.style === style && item.pace !== pace));

export const FEATURED_ITINERARY = {
  dayOne: {
    day: 'DAY 01',
    title: 'The Coastal Wild & Lantern Climb',
    route: 'Taipei → North Coast → Jiufen',
    distance: '75 km',
    elevation: '350 m',
    highlights:
      "Ride along the stunning Highway 2 coastline. Snap a photo at Fuguei Cape, Taiwan's northernmost point. Finish with a 5 km climb to the historic Jiufen mountain town just in time to capture the Magic Hour sunset and iconic red lanterns.",
    plannerNote: 'Beware of the strong Northeast Monsoon from October to March.',
    image:
      '/images/jiufen-lanterns.jpg',
    imageAlt: 'Red lanterns and mountain homes in Jiufen',
  },
  dayTwo: {
    day: 'DAY 02',
    title: 'The Valley Return & City Lights',
    route: 'Jiufen → Keelung River Bike Path → Taipei → Maokong',
    distance: '50 km',
    image:
      '/images/maokong-night.jpg',
    imageAlt: 'Warm lantern light in Maokong after dark',
    modes: {
      pro: {
        label: '🔥 Pro',
        labelDetail: 'Ride All',
        elevation: '500 m',
        activity: 'Night Climb via Zhinan Rd.',
        tag: 'Hardcore',
        description:
          'Push your limits with a challenging 5 km night climb featuring steep hairpins. Reward your burning legs with a panoramic night view of Taipei 101 from the mountaintop.',
      },
      chill: {
        label: '🚠 Chill',
        labelDetail: 'Gondola Assist',
        elevation: '0 m',
        activity: 'Maokong Gondola & Tea Time',
        tag: 'Slow down',
        description:
          'Legs feeling heavy? Park your bike safely at Zoo Station. Take the scenic crystal cabin gondola up to Maokong for a relaxing traditional tea session overlooking the city lights.',
      },
    },
  },
};

export const JINSHAN_PLANS = [
  {
    id: 'yehliu-coast',
    eyebrow: '01 / Coastal extension',
    title: 'Yehliu geology & Wanli harbour',
    route: 'Jinshan → Yehliu → Wanli',
    distance: '18 km return',
    time: '1.5–2 h riding',
    detail:
      'A gentle out-and-back along Highway 2. Lock the bike at Yehliu Geopark, then continue to Wanli harbour for a seafood stop before returning to Jinshan.',
    image: '/images/user-yeliu.jpg',
    imageAlt: 'The Queen’s Head rock at Yehliu Geopark',
    tag: 'Best for clear skies',
  },
  {
    id: 'jinshan-reset',
    eyebrow: '02 / Slow reset',
    title: 'Hot spring, old street, goose rice',
    route: 'Jinshan Old Street · Jinshan Hot Spring',
    distance: '4–6 km local',
    time: '2–3 h off the bike',
    detail:
      'Leave the loaded bike with your hotel or a staffed luggage counter. Take a warm soak, then refuel with Jinshan duck or goose rice before the final climb.',
    image: '/images/user-jinshan-goose.jpg',
    imageAlt: 'Taiwanese goose meat served with ginger and greens',
    tag: 'Good in monsoon weather',
  },
  {
    id: 'jiufen-finish',
    eyebrow: '03 / Finish line',
    title: 'Follow the coast to Jiufen',
    route: 'Jinshan → Keelung → Ruifang → Jiufen',
    distance: '30–36 km',
    time: '2–2.5 h riding',
    detail:
      'Leave Jinshan after lunch and keep a steady pace through Keelung. Save energy for the final 5 km climb; arrive before dusk for the lantern streets and a luggage drop.',
    image: '/images/jiufen-mountain.jpg',
    imageAlt: 'Jiufen mountain town and the north coast beyond',
    tag: 'Finish before sunset',
  },
];

