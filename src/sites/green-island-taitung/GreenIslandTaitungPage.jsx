import RouteSitePage from '../RouteSitePage';
import { getRegionById } from '../../data/itinerary/index.js';

const REGION_ID = 'green-island-taitung';

export default function GreenIslandTaitungPage() {
  return <RouteSitePage region={getRegionById(REGION_ID)} />;
}

