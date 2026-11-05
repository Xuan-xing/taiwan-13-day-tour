import RouteSitePage from '../RouteSitePage';
import { getRegionById } from '../../data/itinerary/index.js';

const REGION_ID = 'taichung';

export default function TaichungPage() {
  return <RouteSitePage region={getRegionById(REGION_ID)} />;
}

