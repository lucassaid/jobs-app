import { Job } from '../types/Job'

export default function JobDetailHeader(job: Job) {
  return (
    <div>
      <img
        src={job.company.cover}
        alt={job.company.name}
        className="h-72 w-full object-cover"
      />
      <div className="relative -top-8 pl-8 flex items-center">
        <img
          src={job.company.logo}
          alt={job.company.name}
          className="w-32 ring-4 ring-white rounded-xl"
        />
        <div className="ml-12 pt-4">
          <h2>
            {job.title}
          </h2>
        </div>
      </div>
    </div>
  )
}