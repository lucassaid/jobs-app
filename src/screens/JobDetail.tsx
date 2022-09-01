import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import JobDetailAside from '../components/JobDetailAside'
import JobDetailBody from '../components/JobDetailBody'
import JobDetailHeader from '../components/JobDetailHeader'
import ContactPerson from '../components/ContactPerson'
import { jobsUrl } from '../lib/constants'
import { Job } from '../types/Job'

export default function JobDetailScreen() {

  const { data: jobs } = useSWR<Job[]>(jobsUrl)
  const { jobId } = useParams()

  const job = useMemo(() => {
    if (!jobs) return null
    return jobs.find(job => job.id.toString() === jobId)
  }, [jobId, jobs])

  if (!job) return null

  return (
    <div>
      <JobDetailHeader {...job} />
      <div className="flex p-12 gap-x-12">
        <div className="flex-1">
          <JobDetailBody {...job} />
          <h5 className="mt-10 mb-6">Contact person:</h5>
          <ContactPerson {...job.contact} />
        </div>
        <div className="w-3/12">
          <JobDetailAside {...job} />
        </div>
      </div>
    </div>
  )
}