import RouteSitePage from '../RouteSitePage';
import { getRegionById } from '../../data/itinerary/index.js';

const REGION_ID = 'kaohsiung';

export default function KaohsiungPage() {
  return <RouteSitePage region={getRegionById(REGION_ID)} />;
}

