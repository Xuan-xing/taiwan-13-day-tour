import RouteSitePage from '../RouteSitePage';
import { getRegionById } from '../../data/itinerary/index.js';

const REGION_ID = 'su-ao-yilan';

export default function SuAoYilanPage() {
  return <RouteSitePage region={getRegionById(REGION_ID)} />;
}

