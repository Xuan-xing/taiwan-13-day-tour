import RouteSitePage from '../RouteSitePage';
import { getRegionById } from '../../data/itinerary/index.js';

const REGION_ID = 'north-coast-taipei';

export default function NorthCoastTaipeiPage() {
  return <RouteSitePage region={getRegionById(REGION_ID)} />;
}

