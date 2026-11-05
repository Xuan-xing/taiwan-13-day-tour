import { TAICHUNG_REGION } from './taichung.js';
import { TAINAN_REGION } from './tainan.js';
import { KAOHSIUNG_REGION } from './kaohsiung.js';
import { GREEN_ISLAND_TAITUNG_REGION } from './green-island-taitung.js';
import { SU_AO_YILAN_REGION } from './su-ao-yilan.js';
import { NORTH_COAST_TAIPEI_REGION } from './north-coast-taipei.js';

export const REGION_MATRIX = [
  TAICHUNG_REGION,
  TAINAN_REGION,
  KAOHSIUNG_REGION,
  GREEN_ISLAND_TAITUNG_REGION,
  SU_AO_YILAN_REGION,
  NORTH_COAST_TAIPEI_REGION
];

export const OVERVIEW_ROUTE_ID = 'overview';
export const DAY_COUNT = 13;
export const ITINERARY_DAYS = REGION_MATRIX.flatMap((region) => region.days);
export const REGION_ORDER = REGION_MATRIX.map((region) => region.id);

export const JOURNEY_MAP_VIEWBOX = { x: 101.36, y: -2, width: 757.28, height: 964 };

export const JOURNEY_MAP_NODES = [
  { id: 'taichung', routeId: 'taichung', mapPathId: 'TW-TXG', label: 'Taichung', detail: 'Days 1–2', dayRange: [1, 2], kind: 'region', x: 650, y: 470, visibleMarker: true },
  { id: 'tainan', routeId: 'tainan', mapPathId: 'TW-TNN', label: 'Tainan', detail: 'Days 3–4', dayRange: [3, 4], kind: 'region', x: 530, y: 700, visibleMarker: true },
  { id: 'kaohsiung', routeId: 'kaohsiung', mapPathId: 'TW-KHH', label: 'Kaohsiung', detail: 'Days 5–6', dayRange: [5, 6], kind: 'region', x: 585, y: 770, visibleMarker: true },
  { id: 'taitung', routeId: 'green-island-taitung', mapPathId: 'TW-TTT', label: 'Taitung', detail: 'Days 7–8 · ferry return', dayRange: [7, 8], kind: 'region', x: 700, y: 790, visibleMarker: true },
  { id: 'green-island', routeId: 'green-island-taitung', label: 'Green Island', detail: 'Day 7 · ferry', dayRange: [7, 7], kind: 'island', x: 840, y: 730, visibleMarker: true },
  { id: 'chenggong-sanxiantai', routeId: 'su-ao-yilan', label: 'Chenggong / Sanxiantai', detail: 'Day 9', dayRange: [9, 9], kind: 'coast', x: 735, y: 625, visibleMarker: true },
  { id: 'su-ao-yilan', routeId: 'su-ao-yilan', mapPathId: 'TW-ILA', label: 'Su-Ao / Yilan', detail: 'Days 10–11', dayRange: [10, 11], kind: 'region', x: 785, y: 375, visibleMarker: true },
  { id: 'taipei', routeId: 'north-coast-taipei', mapPathId: 'TW-TPE', label: 'Taipei', detail: 'Days 12–13 · North Coast → Jiufen → Taipei → Maokong', dayRange: [12, 13], kind: 'finish', x: 768, y: 282, visibleMarker: true }
];

export const JOURNEY_MAP_SEGMENTS = [
  { id: 'taichung-tainan', from: 'taichung', to: 'tainan', mode: 'land' },
  { id: 'tainan-kaohsiung', from: 'tainan', to: 'kaohsiung', mode: 'land' },
  { id: 'kaohsiung-taitung', from: 'kaohsiung', to: 'taitung', mode: 'transfer' },
  { id: 'taitung-green-island', from: 'taitung', to: 'green-island', mode: 'ferry-out' },
  { id: 'green-island-taitung', from: 'green-island', to: 'taitung', mode: 'ferry-return' },
  { id: 'taitung-chenggong-sanxiantai', from: 'taitung', to: 'chenggong-sanxiantai', mode: 'land' },
  { id: 'chenggong-sanxiantai-su-ao-yilan', from: 'chenggong-sanxiantai', to: 'su-ao-yilan', mode: 'rail' },
  { id: 'su-ao-yilan-taipei', from: 'su-ao-yilan', to: 'taipei', mode: 'transfer' }
];

export const getRegionById = (regionId) => REGION_MATRIX.find((region) => region.id === regionId);
export const getDayByNumber = (dayNumber) => ITINERARY_DAYS.find((day) => day.day === dayNumber);

export const DATA_STATUS = {
  SOURCE_PROVIDED: 'source-provided',
  PARTIALLY_SOURCE_PROVIDED: 'partially-source-provided',
  TEMPLATE_REFERENCE: 'template-reference',
  PENDING_USER_DATA: 'pending-user-data'
};
