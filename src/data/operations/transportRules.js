const CHECKED_AT = '2026-11-11';
const TRA_BIKE_SOURCE = {
  sourceTitle: '臺鐵兩鐵列車',
  sourceUrl: 'https://tip.railway.gov.tw/tra-tip-web/tip/tip00D/tipD11/view11',
  sourceType: 'official rail operator',
  checkedAt: CHECKED_AT,
  quote: '攜車袋：將自行車摺疊或拆解放置於攜車袋中，當成隨身行李。此種方式所有列車皆可搭乘。人車同行：自行車可整車帶到列車上……僅部份車站開放非攜車袋自行車。',
  conditions: '整車人車同行受開放車站、車次額度與自行車額度查詢限制；打包自行車有尺寸與包覆要求。',
  notes: 'This is a general TRA rule, not confirmation for a particular train or station.'
};
const THSR_BIKE_SOURCE = {
  sourceTitle: '台灣高鐵旅客運送契約：攜帶自行車乘車規範',
  sourceUrl: 'https://www.thsrc.com.tw/ArticleContent/2f73bfbb-d9bb-400e-b806-f6c5ba539368',
  sourceType: 'official high-speed rail operator',
  checkedAt: CHECKED_AT,
  quote: '軟式攜車袋：需拆卸前/後輪並完整置入攜車袋內……硬式攜車箱……；超出隨身物品尺寸者，需以占用座位方式加購標準對號座。',
  conditions: '自行車需裝袋或裝箱；超出隨身物品尺寸有尺寸、重量、座位與櫃檯購票條件。',
  notes: 'This confirms a HSR bicycle-bag process, not unbagged full-size bicycle carriage.'
};
const GREEN_ISLAND_FERRY_SOURCE = {
  sourceTitle: '龍鴻航業（綠島之星）常見問題',
  sourceUrl: 'https://280108.com.tw/index.php/qa',
  sourceType: 'official ferry operator',
  checkedAt: CHECKED_AT,
  quote: '可以托運腳踏車或機車？……綠島航線腳踏車單程 $100 元／1 台。',
  conditions: '頁面說明為腳踏車托運服務；實際船班、收件流程與船邊費用仍需向業者確認。',
  notes: 'This confirms that the operator publishes a bicycle transport service for the Green Island route.'
};
const MATHEW_BIKE_SOURCE = {
  sourceTitle: '馬修單車：單車甲租乙還與維修站',
  sourceUrl: 'https://mathewbike.com/drop-off-service/',
  sourceType: 'official bicycle provider',
  checkedAt: CHECKED_AT,
  quote: '目前只提供台北取車，請租車前提出乙地還車需求……單車甲租乙還，需負擔單車打包與運送費用。',
  conditions: '服務頁面明確寫出台北取車、異地還車需事前提出，並可能產生打包與運送費；不代表本行程所有城市均可取還。',
  notes: 'This confirms the service exists, but route-specific pickup/drop-off compatibility remains unverified.'
};

export const TRANSPORT_OPERATIONS = [
  {
    id: 'day-01-02-taichung-tainan', day: '1–2', from: 'Taichung', to: 'Tainan', mode: 'Rail or supported transfer', verificationStatus: 'needs-confirmation',
    bicyclePolicy: { allowed: null, foldingOnly: null, bagRequired: null, reservationRequired: null, restrictions: 'Confirm the service, bicycle format and luggage handling before booking.' },
    bikeRental: { status: 'pending', provider: null, pickup: null, dropoff: null, oneWayReturn: null, bookingUrl: null },
    bikeShipping: { status: 'pending', provider: null, origin: 'Taichung', destination: 'Tainan', leadTime: null, packaging: null, bookingUrl: null },
    fallback: 'Keep the bicycle in Taichung and arrange a Tainan rental after the transfer.', evidence: [TRA_BIKE_SOURCE, THSR_BIKE_SOURCE], lastChecked: CHECKED_AT, notes: 'Official rail rules exist, but the exact operator, station pair and bike format for this transfer are not verified.'
  },
  {
    id: 'day-03-04-tainan-kaohsiung', day: '3–4', from: 'Tainan', to: 'Kaohsiung', mode: 'Rail or supported transfer', verificationStatus: 'needs-confirmation',
    bicyclePolicy: { allowed: null, foldingOnly: null, bagRequired: null, reservationRequired: null, restrictions: 'Confirm whether a complete bicycle or a packed folding bicycle is accepted.' },
    bikeRental: { status: 'pending', provider: null, pickup: null, dropoff: null, oneWayReturn: null, bookingUrl: null },
    bikeShipping: { status: 'pending', provider: null, origin: 'Tainan', destination: 'Kaohsiung', leadTime: null, packaging: null, bookingUrl: null },
    fallback: 'Use local bicycle rental in Kaohsiung after arrival.', evidence: [TRA_BIKE_SOURCE, THSR_BIKE_SOURCE], lastChecked: CHECKED_AT, notes: 'Official rail rules exist, but no route-specific train, station or full-size bicycle arrangement is verified.'
  },
  {
    id: 'day-05-06-kaohsiung-taitung', day: '5–6', from: 'Kaohsiung', to: 'Taitung', mode: 'Rail or supported transfer', verificationStatus: 'needs-confirmation',
    bicyclePolicy: { allowed: null, foldingOnly: null, bagRequired: null, reservationRequired: null, restrictions: 'Check the selected service, bicycle carriage rules and station access.' },
    bikeRental: { status: 'pending', provider: null, pickup: null, dropoff: null, oneWayReturn: null, bookingUrl: null },
    bikeShipping: { status: 'pending', provider: null, origin: 'Kaohsiung', destination: 'Taitung', leadTime: null, packaging: null, bookingUrl: null },
    fallback: 'Ship the bicycle separately or use a Taitung rental for Days 7–9.', evidence: [TRA_BIKE_SOURCE, THSR_BIKE_SOURCE], lastChecked: CHECKED_AT, notes: 'Official rail rules exist, but the long-distance transfer and bicycle handling are not verified.'
  },
  {
    id: 'day-07-taitung-green-island', day: '7', from: 'Taitung', to: 'Green Island', mode: 'Ferry', verificationStatus: 'needs-confirmation',
    bicyclePolicy: { allowed: null, foldingOnly: null, bagRequired: null, reservationRequired: null, restrictions: 'Confirm ferry bicycle carriage, packing, fees, weather limits and space availability.' },
    bikeRental: { status: 'pending', provider: null, pickup: 'Taitung', dropoff: 'Green Island', oneWayReturn: null, bookingUrl: null },
    bikeShipping: { status: 'pending', provider: null, origin: 'Taitung', destination: 'Green Island', leadTime: null, packaging: null, bookingUrl: null },
    fallback: 'Use a Green Island rental if carrying the bicycle on the ferry is not accepted.', evidence: [GREEN_ISLAND_FERRY_SOURCE], lastChecked: CHECKED_AT, notes: 'The ferry operator publishes bicycle transport, but this does not confirm a particular sailing or space availability.'
  },
  {
    id: 'day-08-green-island-taitung', day: '8', from: 'Green Island', to: 'Taitung', mode: 'Ferry return', verificationStatus: 'needs-confirmation',
    bicyclePolicy: { allowed: null, foldingOnly: null, bagRequired: null, reservationRequired: null, restrictions: 'Confirm return sailing, bicycle space and weather cancellation policy.' },
    bikeRental: { status: 'pending', provider: null, pickup: 'Green Island', dropoff: 'Taitung', oneWayReturn: null, bookingUrl: null },
    bikeShipping: { status: 'pending', provider: null, origin: 'Green Island', destination: 'Taitung', leadTime: null, packaging: null, bookingUrl: null },
    fallback: 'Arrange island bicycle return locally and continue with a Taitung rental or transfer.', evidence: [GREEN_ISLAND_FERRY_SOURCE], lastChecked: CHECKED_AT, notes: 'The ferry operator publishes bicycle transport, but this does not confirm a particular return sailing or space availability.'
  },
  {
    id: 'day-09-taitung-chenggong', day: '9', from: 'Taitung', to: 'Chenggong / Sanxiantai', mode: 'Short ride', verificationStatus: 'pending',
    bicyclePolicy: { allowed: true, foldingOnly: null, bagRequired: null, reservationRequired: null, restrictions: 'Cycling is planned; route support and bike handoff for the northbound transfer remain unverified.' },
    bikeRental: { status: 'pending', provider: null, pickup: 'Taitung', dropoff: 'Yilan / Su-Ao', oneWayReturn: null, bookingUrl: null },
    bikeShipping: { status: 'pending', provider: null, origin: 'Taitung', destination: 'Yilan / Su-Ao', leadTime: null, packaging: null, bookingUrl: null },
    fallback: 'Use a short local rental and send the main bicycle north separately.', evidence: [], lastChecked: null, notes: 'This is a planned road-cycling segment; no A-to-B rental or shipping service has been verified for these endpoints.'
  },
  {
    id: 'day-09-chenggong-yilan', day: '9', from: 'Chenggong / Sanxiantai', to: 'Su-Ao / Yilan', mode: 'Taiwan Rail or shuttle', verificationStatus: 'needs-confirmation',
    bicyclePolicy: { allowed: null, foldingOnly: null, bagRequired: null, reservationRequired: null, restrictions: 'Confirm exact station, train, bicycle format, reservation and boarding rules.' },
    bikeRental: { status: 'pending', provider: null, pickup: 'Chenggong / Sanxiantai', dropoff: 'Su-Ao / Yilan', oneWayReturn: null, bookingUrl: null },
    bikeShipping: { status: 'pending', provider: null, origin: 'Chenggong / Sanxiantai', destination: 'Su-Ao / Yilan', leadTime: null, packaging: null, bookingUrl: null },
    fallback: 'Use rail or shuttle as a passenger and arrange a Yilan-area bicycle after arrival.', evidence: [TRA_BIKE_SOURCE], lastChecked: CHECKED_AT, notes: 'TRA publishes general packed-bike and human-bike rules, but the exact station pair, train, quota and boarding eligibility remain unverified.'
  },
  {
    id: 'day-10-11-yilan-taipei', day: '10–11', from: 'Su-Ao / Yilan', to: 'Taipei', mode: 'Pending itinerary', verificationStatus: 'needs-confirmation',
    bicyclePolicy: { allowed: null, foldingOnly: null, bagRequired: null, reservationRequired: null, restrictions: 'Day 10–11 route details and the northbound bicycle plan have not been supplied.' },
    bikeRental: { status: 'pending', provider: null, pickup: 'Su-Ao / Yilan', dropoff: 'Taipei', oneWayReturn: null, bookingUrl: null },
    bikeShipping: { status: 'pending', provider: null, origin: 'Su-Ao / Yilan', destination: 'Taipei', leadTime: null, packaging: null, bookingUrl: null },
    fallback: 'Finalize the missing Yilan itinerary before selecting a bicycle transfer.', evidence: [TRA_BIKE_SOURCE, MATHEW_BIKE_SOURCE], lastChecked: CHECKED_AT, notes: 'General rail and A-to-B service sources exist, but Day 10–11 endpoints and the specific bicycle plan are missing.'
  },
  {
    id: 'day-12-north-coast-jiufen', day: '12', from: 'North Coast', to: 'Jiufen', mode: 'Road cycling', verificationStatus: 'pending',
    bicyclePolicy: { allowed: true, foldingOnly: null, bagRequired: null, reservationRequired: null, restrictions: 'Confirm road access, parking and luggage handling for the Jiufen climb.' },
    bikeRental: { status: 'pending', provider: null, pickup: 'Taipei', dropoff: 'Jiufen', oneWayReturn: null, bookingUrl: null },
    bikeShipping: { status: 'pending', provider: null, origin: 'Taipei', destination: 'Jiufen', leadTime: null, packaging: null, bookingUrl: null },
    fallback: 'Use a supported transfer to Jiufen and keep the coastal ride optional.', evidence: [], lastChecked: null, notes: 'This is a planned road-cycling segment; no transport rule or A-to-B service is needed until the riding plan changes.'
  },
  {
    id: 'day-13-jiufen-maokong', day: '13', from: 'Jiufen', to: 'Taipei / Maokong', mode: 'Road cycling or local transit', verificationStatus: 'needs-confirmation',
    bicyclePolicy: { allowed: null, foldingOnly: null, bagRequired: null, reservationRequired: null, restrictions: 'Confirm the return route, bike parking and Maokong access before choosing Pro or Chill.' },
    bikeRental: { status: 'pending', provider: null, pickup: 'Jiufen', dropoff: 'Taipei', oneWayReturn: null, bookingUrl: null },
    bikeShipping: { status: 'pending', provider: null, origin: 'Jiufen', destination: 'Taipei', leadTime: null, packaging: null, bookingUrl: null },
    fallback: 'Return by supported transit, then choose the Maokong gondola option if the bicycle route is unsuitable.', evidence: [MATHEW_BIKE_SOURCE], lastChecked: CHECKED_AT, notes: 'An official A-to-B provider exists, but its published Taipei pickup condition does not verify Jiufen pickup or this exact route.'
  }
];
