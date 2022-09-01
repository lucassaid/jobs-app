import { Job } from '../types/Job'
import SocialLinks from './SocialLinks'

export default function JobDetailBody(job: Job) {
  return (
    <div>
      <h3 className="mb-4">Job Description</h3>
      <p dangerouslySetInnerHTML={{ __html: job.descr }} />
      <br />
      <br />
      <h3 className="mb-4">Skills & Requirements</h3>
      <p dangerouslySetInnerHTML={{ __html: job.skills }} />
      <br />
      <br />
      <div className="p-5 rounded-lg bg-slate-200">
        <h3 className="mb-4">About {job.company.name}</h3>
        <p dangerouslySetInnerHTML={{ __html: job.company.descr }} />
        <div className="h-4" />
        <SocialLinks {...job} />
      </div>
    </div>
  )
}