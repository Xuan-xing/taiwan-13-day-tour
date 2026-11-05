import RouteSitePage from '../RouteSitePage';
import { getRegionById } from '../../data/itinerary/index.js';

const REGION_ID = 'tainan';

export default function TainanPage() {
  return <RouteSitePage region={getRegionById(REGION_ID)} />;
}

