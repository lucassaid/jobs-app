import { useMemo } from 'react'
import { JobLocation } from '../types/Job'

export default function useLocations(locations: JobLocation[]) {
  return useMemo(() => {
    return locations.map(l => l.location.text).join(', ')
  }, [locations])
}