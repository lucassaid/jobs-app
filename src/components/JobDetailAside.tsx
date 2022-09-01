import { MapPin, Medal, TagSimple, Timer } from 'phosphor-react'
import useLocations from '../lib/useLocations'
import { Job } from '../types/Job'
import Desc from './Desc'

export default function JobDetailAside(job: Job) {

  const locations = useLocations(job.locations)

  return (
    <div className="bg-slate-200 rounded-lg p-5 sticky top-7">
      <div className="divide-slate-300 space-y-4">
        <Desc
          Icon={MapPin}
          label="Location"
          value={locations}
        />
        <Desc
          Icon={Medal}
          label="Experience"
          value={job.experience}
        />
        <Desc
          Icon={Timer}
          label="Engagement"
          value={job.employment_type}
        />
      </div>
      <br />
      <a href={job.urls.apply}>
        <button className="bg-slate-800 text-white rounded-md w-full text-center py-4">
          I&apos;m interested
        </button>
      </a>
    </div>
  )
}