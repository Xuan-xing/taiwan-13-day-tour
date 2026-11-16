const CHECKED_AT = '2026-11-17';
const TRA_BIKE_SOURCE = {
  sourceTitle: 'Taiwan Railways bicycle travel rules',
  sourceUrl: 'https://tip.railway.gov.tw/tra-tip-web/tip/tip00D/tipD11/view11',
  sourceType: 'official rail operator',
  checkedAt: CHECKED_AT,
  quote: 'A bicycle packed in a bicycle bag can travel on all trains. Full-size human-and-bike travel is available only at selected stations and on selected services. Bicycle freight is limited to trains with a luggage carriage.',
  conditions: 'Full-size carriage has train, station and quota limits. Packed bicycles must meet the 150 cm length and 220 cm total-dimension limits; freight is also limited to selected trains and stations.',
  routeSpecificLimitations: 'The exact train, station pair, quota and boarding eligibility for this itinerary remain unconfirmed.',
  notes: 'Official general TRA rule checked on 2026-11-17; it does not confirm a specific booking.'
};
const THSR_BIKE_SOURCE = {
  sourceTitle: 'Taiwan High Speed Rail passenger contract: bicycles',
  sourceUrl: 'https://www.thsrc.com.tw/ArticleContent/2f73bfbb-d9bb-400e-b806-f6c5ba539368',
  sourceType: 'official high-speed rail operator',
  checkedAt: CHECKED_AT,
  quote: 'A soft bicycle bag must contain the bicycle with both wheels removed. Oversized packed bicycles are limited to 240 cm total dimensions and require a reserved seat purchase.',
  conditions: 'The THSR rules require a bicycle bag or box. Oversized items have additional size, weight, carriage, seat and counter-ticket conditions.',
  routeSpecificLimitations: 'This does not confirm unbagged full-size bicycle carriage or a particular Taichung/Tainan/Kaohsiung/Taitung service.',
  notes: 'Official THSR passenger contract checked on 2026-11-17.'
};
const GREEN_ISLAND_FERRY_SOURCE = {
  sourceTitle: 'Green Island Star ferry FAQ',
  sourceUrl: 'https://280108.com.tw/index.php/qa',
  sourceType: 'official ferry operator',
  checkedAt: CHECKED_AT,
  quote: 'Bicycle freight is published at NT$100 per bicycle, one way, on the Green Island route. Final charges are collected at the pier.',
  conditions: 'The operator publishes bicycle freight for the Green Island route; weather, sailing, space, handover and final charge still require confirmation.',
  routeSpecificLimitations: 'This confirms the service exists, not space on a selected sailing or acceptance of a particular full-size bicycle.',
  notes: 'Official operator FAQ checked on 2026-11-17.'
};
const MATHEW_BIKE_SOURCE = {
  sourceTitle: 'MathewBike: one-way rental and service stations',
  sourceUrl: 'https://mathewbike.com/drop-off-service/',
  sourceType: 'official bicycle provider',
  checkedAt: CHECKED_AT,
  quote: 'The published service currently offers Taipei pickup. Request one-way return before renting; packing and shipping fees apply.',
  conditions: 'The provider publishes Taipei pickup and one-way return by prior request; drop-off timing follows partner shop hours and fees depend on destination.',
  routeSpecificLimitations: 'This does not confirm pickup in Taichung, Tainan, Kaohsiung, Taitung, Yilan or Jiufen, nor a specific partner shop for this itinerary.',
  notes: 'Official provider page checked on 2026-11-17; service exists but route fit is not confirmed.'
};

const WUSHI_HARBOR_SOURCE = {
  sourceTitle: 'Northeast and Yilan Coast National Scenic Area: Wushi Harbor',
  sourceUrl: 'https://www.necoast-nsa.gov.tw/Area-Content.aspx?a=3671&l=1',
  sourceType: 'official national scenic area',
  checkedAt: CHECKED_AT,
  quote: 'Wushi Harbor is a popular leisure fishing harbor with a visitor fish market and a yacht harbor.',
  conditions: 'This confirms the harbour and visitor facilities, not a specific boat booking.',
  routeSpecificLimitations: 'Exact harbour activities, bicycle parking and boat schedule remain unconfirmed.',
  notes: 'Use Wushi Harbor as the land-based fallback if island access is unavailable.'
};

const SUAO_SOURCE = {
  sourceTitle: 'Northeast and Yilan Coast National Scenic Area: Su-Ao',
  sourceUrl: 'https://www.necoast-nsa.gov.tw/Area-Content.aspx?a=164&l=1',
  sourceType: 'official national scenic area',
  checkedAt: CHECKED_AT,
  quote: 'Su-Ao is the starting point of the Suhua Highway and the North Link railway, with access to Su-Ao Cold Spring Park and Nanfangao Fishing Harbor.',
  conditions: 'This confirms regional attractions and transport context, not an itinerary booking or opening-time guarantee.',
  routeSpecificLimitations: 'Exact Day 10 stops, cycling access, parking, accommodation and train remain unconfirmed.',
  notes: 'Use as a regional planning reference only.'
};

const GUISHAN_ISLAND_SOURCE = {
  sourceTitle: 'Guishan Island landing application: Northeast and Yilan Coast National Scenic Area',
  sourceUrl: 'https://events.necoast-nsa.gov.tw/coast/',
  sourceType: 'official national scenic area',
  checkedAt: CHECKED_AT,
  quote: 'The official portal provides a Guishan Island landing application and current landing notices.',
  conditions: 'The official portal provides application, landing notices, weather and long-wave information; a future trip needs a fresh check.',
  routeSpecificLimitations: 'No specific boat operator, departure time, landing quota or bicycle carriage is confirmed for this itinerary.',
  notes: 'Do not treat the current landing notice as a future booking confirmation.'
};

const MAOKONG_GONDOLA_SOURCE = {
  sourceTitle: 'Maokong Gondola: operating hours and riding notes',
  sourceUrl: 'https://www.gondola.taipei/cp.aspx?n=BFE4B2ABA0D9FB61',
  sourceType: 'official gondola operator',
  checkedAt: CHECKED_AT,
  quote: 'Normal hours are 09:00–21:00 on weekdays and 09:00–22:00 on holidays. Service may stop during lightning, strong winds or typhoons.',
  conditions: 'Operating times and suspension notices can change; bicycles and luggage still require station-level confirmation.',
  routeSpecificLimitations: 'The official page does not confirm bicycle carriage or a dedicated bicycle parking space for this itinerary.',
  notes: 'Official Maokong Gondola pages checked on 2026-11-17.'
};

export const TRANSPORT_OPERATIONS = [
  {
    id: 'day-01-02-taichung-tainan', day: '1–2', from: 'Taichung', to: 'Tainan', mode: 'Rail or supported transfer', verificationStatus: 'needs-confirmation',
    bicyclePolicy: { allowed: null, foldingOnly: null, bagRequired: null, reservationRequired: null, restrictions: 'TRA/THSR bagged-bike rules exist, but the selected service and route-specific handling must be confirmed before booking.' },
    bikeRental: { status: 'pending', provider: null, pickup: null, dropoff: null, oneWayReturn: null, bookingUrl: null },
    bikeShipping: { status: 'pending', provider: null, origin: 'Taichung', destination: 'Tainan', leadTime: null, packaging: null, bookingUrl: null },
    fallback: 'Keep the bicycle in Taichung and arrange a Tainan rental after the transfer.', evidence: [TRA_BIKE_SOURCE, THSR_BIKE_SOURCE], lastChecked: CHECKED_AT, notes: 'Official rail rules exist, but the exact operator, station pair and bike format for this transfer are not verified.'
  },
  {
    id: 'day-03-04-tainan-kaohsiung', day: '3–4', from: 'Tainan', to: 'Kaohsiung', mode: 'Rail or supported transfer', verificationStatus: 'needs-confirmation',
    bicyclePolicy: { allowed: null, foldingOnly: null, bagRequired: null, reservationRequired: null, restrictions: 'A packed bicycle has an official rail path; confirm the selected train, station pair and whether a complete bicycle is eligible.' },
    bikeRental: { status: 'pending', provider: null, pickup: null, dropoff: null, oneWayReturn: null, bookingUrl: null },
    bikeShipping: { status: 'pending', provider: null, origin: 'Tainan', destination: 'Kaohsiung', leadTime: null, packaging: null, bookingUrl: null },
    fallback: 'Use local bicycle rental in Kaohsiung after arrival.', evidence: [TRA_BIKE_SOURCE, THSR_BIKE_SOURCE], lastChecked: CHECKED_AT, notes: 'Official rail rules exist, but no route-specific train, station or full-size bicycle arrangement is verified.'
  },
  {
    id: 'day-05-06-kaohsiung-taitung', day: '5–6', from: 'Kaohsiung', to: 'Taitung', mode: 'Rail or supported transfer', verificationStatus: 'needs-confirmation',
    bicyclePolicy: { allowed: null, foldingOnly: null, bagRequired: null, reservationRequired: null, restrictions: 'TRA human-bike and bagged-bike rules exist; the selected Kaohsiung–Taitung train and station access remain unconfirmed.' },
    bikeRental: { status: 'pending', provider: null, pickup: null, dropoff: null, oneWayReturn: null, bookingUrl: null },
    bikeShipping: { status: 'pending', provider: null, origin: 'Kaohsiung', destination: 'Taitung', leadTime: null, packaging: null, bookingUrl: null },
    fallback: 'Ship the bicycle separately or use a Taitung rental for Days 7–9.', evidence: [TRA_BIKE_SOURCE, THSR_BIKE_SOURCE], lastChecked: CHECKED_AT, notes: 'Official rail rules exist, but the long-distance transfer and bicycle handling are not verified.'
  },
  {
    id: 'day-07-taitung-green-island', day: '7', from: 'Taitung', to: 'Green Island', mode: 'Ferry', verificationStatus: 'needs-confirmation',
    bicyclePolicy: { allowed: null, foldingOnly: null, bagRequired: null, reservationRequired: null, restrictions: 'The operator publishes bicycle freight; confirm whether the bicycle is accepted on the selected sailing, where it is handed over and how weather changes the trip.' },
    bikeRental: { status: 'pending', provider: null, pickup: 'Taitung', dropoff: 'Green Island', oneWayReturn: null, bookingUrl: null },
    bikeShipping: { status: 'source-provided', provider: 'Green Island Star ferry', origin: 'Taitung', destination: 'Green Island', leadTime: 'Same sailing; handling time not specified', packaging: 'Needs confirmation', bookingUrl: GREEN_ISLAND_FERRY_SOURCE.sourceUrl },
    fallback: 'Use a Green Island rental if carrying the bicycle on the ferry is not accepted.', evidence: [GREEN_ISLAND_FERRY_SOURCE], lastChecked: CHECKED_AT, notes: 'The ferry operator publishes bicycle transport, but this does not confirm a particular sailing or space availability.'
  },
  {
    id: 'day-08-green-island-taitung', day: '8', from: 'Green Island', to: 'Taitung', mode: 'Ferry return', verificationStatus: 'needs-confirmation',
    bicyclePolicy: { allowed: null, foldingOnly: null, bagRequired: null, reservationRequired: null, restrictions: 'The return freight service is published, but the return sailing, space, handover and weather cancellation policy remain unconfirmed.' },
    bikeRental: { status: 'pending', provider: null, pickup: 'Green Island', dropoff: 'Taitung', oneWayReturn: null, bookingUrl: null },
    bikeShipping: { status: 'source-provided', provider: 'Green Island Star ferry', origin: 'Green Island', destination: 'Taitung', leadTime: 'Same sailing; handling time not specified', packaging: 'Needs confirmation', bookingUrl: GREEN_ISLAND_FERRY_SOURCE.sourceUrl },
    fallback: 'Arrange island bicycle return locally and continue with a Taitung rental or transfer.', evidence: [GREEN_ISLAND_FERRY_SOURCE], lastChecked: CHECKED_AT, notes: 'The ferry operator publishes bicycle transport, but this does not confirm a particular return sailing or space availability.'
  },
  {
    id: 'day-09-taitung-chenggong', day: '9', from: 'Taitung', to: 'Chenggong / Sanxiantai', mode: 'Short ride', verificationStatus: 'pending',
    bicyclePolicy: { allowed: true, foldingOnly: null, bagRequired: null, reservationRequired: null, restrictions: 'This is a planned road-cycling segment; the road route and northbound bicycle handoff remain unverified.' },
    bikeRental: { status: 'pending', provider: null, pickup: 'Taitung', dropoff: 'Yilan / Su-Ao', oneWayReturn: null, bookingUrl: null },
    bikeShipping: { status: 'pending', provider: null, origin: 'Taitung', destination: 'Yilan / Su-Ao', leadTime: null, packaging: null, bookingUrl: null },
    fallback: 'Use a short local rental and send the main bicycle north separately.', evidence: [], lastChecked: null, notes: 'This is a planned road-cycling segment; no A-to-B rental or shipping service has been verified for these endpoints.'
  },
  {
    id: 'day-09-chenggong-yilan', day: '9', from: 'Chenggong / Sanxiantai', to: 'Su-Ao / Yilan', mode: 'Taiwan Rail or shuttle', verificationStatus: 'needs-confirmation',
    bicyclePolicy: { allowed: null, foldingOnly: null, bagRequired: null, reservationRequired: null, restrictions: 'TRA publishes human-bike, bagged-bike and freight options, but the exact station, train, quota, reservation and boarding rules remain unconfirmed.' },
    bikeRental: { status: 'pending', provider: null, pickup: 'Chenggong / Sanxiantai', dropoff: 'Su-Ao / Yilan', oneWayReturn: null, bookingUrl: null },
    bikeShipping: { status: 'pending', provider: null, origin: 'Chenggong / Sanxiantai', destination: 'Su-Ao / Yilan', leadTime: null, packaging: null, bookingUrl: null },
    fallback: 'Use rail or shuttle as a passenger and arrange a Yilan-area bicycle after arrival.', evidence: [TRA_BIKE_SOURCE], lastChecked: CHECKED_AT, notes: 'TRA publishes general packed-bike and human-bike rules, but the exact station pair, train, quota and boarding eligibility remain unverified.'
  },
  {
    id: 'day-10-11-yilan-taipei', day: '10–11', from: 'Su-Ao / Yilan', to: 'Taipei', mode: 'Pending itinerary', verificationStatus: 'needs-confirmation',
    bicyclePolicy: { allowed: null, foldingOnly: null, bagRequired: null, reservationRequired: null, restrictions: 'Official Su-Ao, Wushi Harbor and Guishan Island references now exist; the selected northbound train, boat and bicycle plan still require confirmation.' },
    bikeRental: { status: 'source-provided', provider: 'MathewBike', pickup: 'Published service: Taipei pickup', dropoff: 'Destination partner shop by prior request', oneWayReturn: 'Service exists; this itinerary pair is not confirmed', bookingUrl: MATHEW_BIKE_SOURCE.sourceUrl },
    bikeShipping: { status: 'pending', provider: null, origin: 'Su-Ao / Yilan', destination: 'Taipei', leadTime: null, packaging: null, bookingUrl: null },
    fallback: 'Keep Su-Ao and Wushi Harbor as land-based options while confirming the northbound train and island boat separately.', evidence: [TRA_BIKE_SOURCE, MATHEW_BIKE_SOURCE, SUAO_SOURCE, WUSHI_HARBOR_SOURCE, GUISHAN_ISLAND_SOURCE], lastChecked: CHECKED_AT, notes: 'Regional references and general rail/A-to-B service sources exist, but Day 10–11 endpoints and the specific bicycle plan are not confirmed.'
  },
  {
    id: 'day-12-north-coast-jiufen', day: '12', from: 'North Coast', to: 'Jiufen', mode: 'Road cycling', verificationStatus: 'pending',
    bicyclePolicy: { allowed: true, foldingOnly: null, bagRequired: null, reservationRequired: null, restrictions: 'This is a planned public-road ride; confirm road conditions, parking, luggage transfer and the Jiufen climb before departure.' },
    bikeRental: { status: 'pending', provider: null, pickup: 'Taipei', dropoff: 'Jiufen', oneWayReturn: null, bookingUrl: null },
    bikeShipping: { status: 'pending', provider: null, origin: 'Taipei', destination: 'Jiufen', leadTime: null, packaging: null, bookingUrl: null },
    fallback: 'Use a supported transfer to Jiufen and keep the coastal ride optional.', evidence: [], lastChecked: null, notes: 'This is a planned road-cycling segment; no transport rule or A-to-B service is needed until the riding plan changes.'
  },
  {
    id: 'day-13-jiufen-maokong', day: '13', from: 'Jiufen', to: 'Taipei / Maokong', mode: 'Road cycling or local transit', verificationStatus: 'needs-confirmation',
    bicyclePolicy: { allowed: null, foldingOnly: null, bagRequired: null, reservationRequired: null, restrictions: 'Confirm the return route, bike parking, Maokong access and gondola conditions before choosing Pro or Chill.' },
    bikeRental: { status: 'source-provided', provider: 'MathewBike', pickup: 'Published service: Taipei pickup', dropoff: 'Destination partner shop by prior request', oneWayReturn: 'Service exists; Jiufen pickup is not confirmed', bookingUrl: MATHEW_BIKE_SOURCE.sourceUrl },
    bikeShipping: { status: 'pending', provider: null, origin: 'Jiufen', destination: 'Taipei', leadTime: null, packaging: null, bookingUrl: null },
    fallback: 'Return by supported transit, then choose the Maokong gondola option if the bicycle route is unsuitable.', evidence: [MATHEW_BIKE_SOURCE, MAOKONG_GONDOLA_SOURCE], lastChecked: CHECKED_AT, notes: 'An official A-to-B provider and official gondola operating page exist, but Jiufen pickup, bike parking and this exact route are not confirmed.'
  }
];
