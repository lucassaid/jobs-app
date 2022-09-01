import useLocations from '../lib/useLocations'
import { Job } from '../types/Job'

export default function JobItem(job: Job) {

  const locations = useLocations(job.locations)

  return (
    <div>
      <img
        className="w-24 rounded-xl"
        src={job.company.logo}
        alt={job.company.name}
      />
      <h4 className="mt-2">
        {job.title}
      </h4>
      <small>
        {job.company.name} - {job.employment_type} - {locations}
      </small>
    </div>
  )
}