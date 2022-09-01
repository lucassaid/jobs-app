import { JobLocation } from '../types/Job'

export default function getLocations(locations: JobLocation[]) {
  return locations.map(l => l.location.text).join(', ')
}